(ns sbsk.core
  (:require [clj-http.client :as client]
            [cheshire.core :refer :all]
            [amazonica.aws.s3 :as s3]
            [amazonica.aws.s3transfer :as s3t]
            [clojure.java.io :as io]
            [clj-time.core :as t]
            [clj-time.format :as tf]
            [me.raynes.fs :as fs]
            [environ.core :refer [env]]
            [clojure.tools.cli :refer [parse-opts]]
            [ring.adapter.jetty :refer [run-jetty]]
            [caponia.index :as capi]
            [caponia.query :as capq]
            [ring.middleware.cors :refer [wrap-cors]]
            [aero.core :refer [read-config]]
            [taoensso.timbre :as log]
            ;;
            [com.stuartsierra.component :as component]
            [sbsk.components.search   :as search]
            [sbsk.components.crawler  :as crawler]
            [sbsk.components.admin    :as admin]
            [sbsk.components.database :as database])
  (:import [java.io.StringBufferInputStream])
  (:gen-class))

;; fb
(def app-secret        (env :sbsk-fb-app-secret))
(def app-id            (env :sbsk-fb-app-id))
(def table-name        "videos")
(def page-id           "591976210904363")
(def fb-https          "https://graph.facebook.com")
;; aws
(def creds             {:profile "sbsk-fb-crawler"})
(def bucket-full-name  "sbsk-data")
(def data-name-parts   ["data" ".json"])
(def bucket-seg-name   "sbsk-data-segmented")
(def segments-per-file 10)
;;
(def records (atom {}))
(def index (atom nil))

(defn coerce-time
  [t]
  (let [fixed (re-find #"(.+)\+" t)
        t'    (or (last fixed) t)
        t'    (if-not (= \Z (last t')) (str t' \Z) t')]
    (->> t'
         (tf/parse (tf/formatter "YYYY-MM-dd'T'HH:mm:SS'Z'"))
         (tf/unparse (tf/formatters :basic-date-time-no-ms)))))

(defn facebook-get
  [method args]
  (client/get (str fb-https method) args))

(defn parse-access-token
  [{:keys [body]}]
  {:access_token (-> body
                     (clojure.string/split #"=")
                     (second))})


(defn fetch
  []
  (let [access-token (parse-access-token
                      (facebook-get "/oauth/access_token"
                                    {:query-params
                                     {:client_id app-id
                                      :client_secret app-secret
                                      :grant_type "client_credentials"}}))
        data (loop [c 1
                    a []
                    page (parse-string
                          (:body
                           (facebook-get
                            (str "/v2.7/" page-id "/videos")
                            {:query-params
                             (merge access-token
                                    {:fields "created_time,description,id,permalink_url,picture,title"})})) true)]
               (let [{:keys [data paging]} page
                     {:keys [next]} paging]
                 (if next
                   (let [r (parse-string
                            (:body
                             (client/get next)) true)]
                     (recur (inc c) (concat a data) r))
                   a)))]
    data))

(defn scrub
  [entry]
  (let [full-text (str (:title entry) " - " (:description entry))]
    (-> entry
        (clojure.set/rename-keys {:created_time  :created-at
                                  :permalink_url :link
                                  :picture       :thumb})
        (update :id str)
        (update :created-at coerce-time))))

(defn crawl
  []
  (->> (fetch)
       (map scrub)))

(defn upload-full
  [records]
  ;; TODO make this a caponia index to save, rather than a json file.
  (let [as-json (generate-string records)
        some-bytes (.getBytes as-json "UTF-8")
        input-stream (java.io.ByteArrayInputStream. some-bytes)
        key-name (apply str data-name-parts)]
    (println "-" key-name (count some-bytes))
    (s3/put-object creds
                   :bucket-name bucket-full-name
                   :key key-name
                   :input-stream input-stream
                   :metadata {:content-length (count some-bytes)}
                   :return-values "ALL_OLD")))

(defn upload-segments
  [records]
  (let [r-segs (partition-all segments-per-file records)]
    (loop [n 0]
      (let [segment (nth r-segs n)
            as-json (generate-string segment)
            some-bytes (.getBytes as-json "UTF-8")
            input-stream (java.io.ByteArrayInputStream. some-bytes)
            key-name (str (first data-name-parts) "." n (last data-name-parts))]
        (println "-" key-name (count some-bytes))
        (s3/put-object creds
                       :bucket-name bucket-seg-name
                       :key key-name
                       :input-stream input-stream
                       :metadata {:content-length (count some-bytes)}
                       :return-values "ALL_OLD"))
      (when (< (inc n) (count r-segs))
        (recur (inc n))))))

(defn print-help
  ([s]
   (println s))
  ([s m]
   (println m)
   (print-help s)))

(defn get-query
  [ctx]
  (second (re-find #"q=(.+)" (get ctx :query-string))))

(defn reload-database
  []
  (println "Reloading database...")
  (let [data-str (s3/get-object-as-string
                  creds
                  bucket-full-name (apply str data-name-parts))
        data (parse-string data-str keyword)]
    (println "Downloaded" (count data) "records...")
    ;; create lookup
    (reset! records (reduce (fn [a e] (assoc a (:id e) e)) {} data))
    ;; load index
    (reset! index (capi/make-index))
    (run! (fn [[id record]]
            (capi/index-text @index id (str (:title record)
                                            " "
                                            (:description record)))) @records)
    (println "Done")))

(defn reload-database-handler
  [ctx]
  (if (= (:request-method ctx) :post)
    (do (future (reload-database))
        {:staus 201})
    {:status 405}))

(defn do-search
  [query]
  (if (and @index (not (clojure.string/blank? query)))
    (let [results (capq/do-search @index query :or)]
      (mapv (fn [[id _]]
              (get @records id)) results))
    []))

(defn search-handler [request]
  (if @index
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (-> request
               (get-query)
               (do-search)
               (generate-string))}
    {:status 503}))

(def servers (atom []))

(defn stop-server
  []
  (run! #(.stop %) @servers)
  (reset! servers []))

(defn run-server
  []
  (reload-database)
  (reset! servers
          [(run-jetty (wrap-cors search-handler
                                 :access-control-allow-origin [#".*"]
                                 :access-control-allow-methods [:get]) {:port 3000
                                                                        :daemon? true
                                                                        :join? false})
           (run-jetty reload-database-handler {:port 4000
                                               :daemon? true
                                               :join? false})]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn new-system [profile modes]
  (let [config (read-config (clojure.java.io/resource "config.edn") {:profile profile})
        _ (log/merge-config! (:log config))
        _ (log/info "Profile:" profile)
        mode-set (set modes)
        mode-enabled? (fn [x] (contains? mode-set x))
        components [[:database (database/map->Database (:database config))]
                    ;;
                    [:search   (when (mode-enabled? :search)
                                 (component/using
                                  (search/map->Search (:search config))
                                  [:database]))]
                    [:crawler (when (mode-enabled? :crawler)
                                (component/using
                                 (crawler/map->Crawler (:crawler config))
                                 [:database]))]
                    [:admin (when (mode-enabled? :admin)
                              (component/using
                               (admin/map->Admin (:admin config))
                               [:database]))]]
        filtered (reduce (fn [a [x y]] (if y (concat a [x y]) a)) [] components)]

    (apply component/system-map filtered)))

(defn -main [& args]
  (let [profile (first args)
        modes (map keyword (rest args))]

    ;; https://stuartsierra.com/2015/05/27/clojure-uncaught-exceptions
    (Thread/setDefaultUncaughtExceptionHandler
     (reify Thread$UncaughtExceptionHandler
       (uncaughtException [_ thread ex]
         (log/error "Unhandled exception:" ex))))

    (component/start
     (new-system profile modes))))

#_(defn -main
    [& args]
    (let [{:keys [options summary]}
          (parse-opts args [["-s" "--server" "Server mode"
                             :default false]
                            ["-c" "--crawler" "Crawler mode"
                             :default false]])
          {:keys [server
                  crawler
                  help]} options]
      (cond
        help    (print-help)
        server  (run-server)
        crawler (let [records (crawl)]
                  (println "Found" (count records) "records...")
                  (println "Uploading full...")
                  (time
                   (upload-full records))
                  (println "Uploading segments...")
                  (time
                   (upload-segments records)))
        :else (print-help summary "You need to provide a mode argument."))))
