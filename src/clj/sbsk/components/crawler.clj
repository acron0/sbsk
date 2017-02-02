(ns sbsk.components.crawler
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]
            [clj-time.core :as t]
            [clj-time.format :as tf]
            [clj-http.client :as client]
            [cheshire.core :refer :all]
            [environ.core :refer [env]]
            [overtone.at-at :as at]
            ;;
            [sbsk.components.database :as db]))

(def fb-https          "https://graph.facebook.com")
(def data-name-parts   ["data" ".json"])

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
  [app-id app-secret page-id]
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

(defn upload-full
  [records db bucket]
  ;; TODO make this a caponia index to save, rather than a json file.
  (db/write-record! db bucket (apply str data-name-parts) records))

(defn upload-segments
  [records db bucket records-per-segment]
  (let [r-segs (partition-all records-per-segment records)]
    (loop [n 0]
      (let [segment (nth r-segs n)]
        (db/write-record! db bucket
                          (str (first data-name-parts) "." n (last data-name-parts))
                          segment))
      (when (< (inc n) (count r-segs))
        (recur (inc n))))))

(defn do-crawl
  [database {:keys [app-id app-secret page-id]}
   bucket-full bucket-segments records-per-segment hash-atom]
  (fn []
    (log/debug "Starting crawler process...")
    (let [records (map scrub (fetch app-id app-secret page-id))
          new-hash (hash records)]
      (if (not= new-hash @hash-atom)
        (do
          (log/info "New hash was observed:" new-hash)
          (log/info "Found" (count records) "records...")
          (log/info "Uploading full...")
          (upload-full records database bucket-full)
          (log/info "Uploading"
                    (int (Math/ceil (/ (count records) records-per-segment)))
                    "segments...")
          (upload-segments records database bucket-segments records-per-segment))
        (log/debug "No change observed"))
      (reset! hash-atom new-hash))))

(defrecord Crawler [database
                    interval facebook bucket-full
                    hash-reset-interval bucket-segments records-per-segment]
  component/Lifecycle
  (start [component]
    (log/info "Starting Crawler")
    (let [pool (at/mk-pool)
          hash-atom (atom nil)]
      (assoc component
             :hash-atom hash-atom
             :scheduled-fns
             [(at/interspaced
               interval
               (do-crawl database facebook bucket-full bucket-segments records-per-segment hash-atom)
               pool)
              (at/every
               hash-reset-interval
               #(do
                  (log/info "Forcing reset of hash atom")
                  (reset! hash-atom nil))
               pool)]
             :pool pool)))

  (stop [{:keys [pool scheduled-fns] :as component}]
    (log/info "Stopping Crawler")
    (run! at/kill scheduled-fns)
    (at/stop-and-reset-pool! pool :strategy :kill)
    (log/info "All schedules are now stopped")
    (dissoc component :pool :scheduled-fns :hash-atom)))
