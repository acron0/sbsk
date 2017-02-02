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

(def data-name-parts   ["data" ".json"])

;;
(def records (atom {}))
(def index (atom nil))



(defn print-help
  ([s]
   (println s))
  ([s m]
   (println m)
   (print-help s)))

(defn get-query
  [ctx]
  (second (re-find #"q=(.+)" (get ctx :query-string))))

#_(defn reload-database
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
    (do #_(future (reload-database))
        {:qstaus 201})
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
  #_(reload-database)
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
        mode-set (set modes)
        _ (log/merge-config! (:log config))
        _ (log/info "Profile:" profile)
        _ (log/info "Modes:" mode-set)
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
        filtered (reduce (fn [a [x y]]
                           (if y (concat a [x y]) a)) [] components)]

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
        crawler
        :else (print-help summary "You need to provide a mode argument."))))
