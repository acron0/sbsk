(ns sbsk.components.crawler
  (:require [com.stuartsierra.component :as component]
            [clojure.core.async :as async]
            [taoensso.timbre :as log]
            [clj-time.core :as t]
            [clj-time.format :as tf]
            [clj-http.client :as client]
            [cheshire.core :refer :all]
            [environ.core :refer [env]]
            [overtone.at-at :as at]
            [me.raynes.fs :as fs]
            [clojure.java.io :as io]
            [amazonica.aws.ec2 :as ec2]
            ;;
            [sbsk.components.database :as db])
  (:import  [javax.imageio ImageIO]
            [java.io File]))

(defn find-search-instances
  [creds]
  (let [instances
        (-> creds
            (ec2/describe-instances :filters [{:name "tag:search" :values [""]}])
            :reservations)]
    (->> instances
         (mapcat :instances)
         (map :private-ip-address))))

(def fb-https          "https://graph.facebook.com")
(def data-name-parts   ["data" ".json"])
(def tags-key-name     "tags.json")

(defn get-image-dims [uri]
  (let [file (fs/temp-file "sbsk")]
    (try
      (with-open [in (io/input-stream uri)
                  out (io/output-stream file)]
        (io/copy in out)
        (when-let [img (ImageIO/read file)]
          [(.getWidth img) (.getHeight img)]))
      (finally (fs/delete file)))))

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
  (parse-string body keyword))


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
                            (str "/v2.8/" page-id "/videos")
                            {:query-params
                             (merge access-token
                                    {:fields "created_time,description,id,permalink_url,picture,title,embeddable,format"})})) true)]
               (let [{:keys [data paging]} page
                     {:keys [next]} paging
                     next-data (concat a data)]
                 (if next
                   (let [r (parse-string
                            (:body
                             (client/get next)) true)]
                     (recur (inc c) next-data r))
                   next-data)))]
    data))

(defn get-dimensions
  [{:keys [width height picture]}]
  (if (or (zero? width)
          (zero? height))
    (get-image-dims picture)
    [width height]))

(defn scrub
  [entry]
  (let [full-text (str (:title entry) " - " (:description entry))
        best-format (last (sort-by :width (:format entry)))
        [w h] (get-dimensions best-format)]
    (-> entry
        (clojure.set/rename-keys {:created_time  :created-at
                                  :permalink_url :link})
        (update :id str)
        (update :created-at coerce-time)
        (dissoc :embeddable
                :picture
                :format)
        (assoc  :thumb (:picture best-format)
                :width w
                :height h))))

(defn add-metadata
  [db md-keys table tags]
  (fn [video]
    (let [key-name (:id video)
          exists? (contains? md-keys key-name)]
      (if exists?
        (let [md (db/read-record-as-obj db table key-name)]
          (run! (fn [tag] (if (contains? @tags tag)
                            (swap! tags update tag inc)
                            (do
                              (log/debug "Caching unseen tag:" tag)
                              (swap! tags assoc tag 1)))) (:tags md))
          (log/debug "Adding metadata for" key-name)
          (assoc video :meta md))
        video))))

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

(defn load-tags!
  [database table default-tags]
  (let [ks (try
             (let [r (:tags (db/read-record-as-obj database table tags-key-name))
                   all-tags (set (clojure.set/union default-tags r))]
               (log/info "Loaded" (count all-tags) "tags")
               all-tags)
             (catch Exception e (log/warn "Failed to load tags. Returning default tags only")
                    default-tags))]
    (zipmap ks (repeat 0))))

(defn start-re-index-request-loop!
  [{:keys [ch port creds header-name header-value]}]
  (async/go-loop []
    (let [go? (async/<! ch)]
      (when go?
        (log/info "Broadcasting re-index instruction to search instances:")
        (let [search-instances (map #(str "http://" % ":" port)
                                    (find-search-instances creds))]
          (log/info "/" (vec search-instances))
          (run! #(future
                   (try
                     (client/post % {:socket-timeout 4000
                                     :conn-timeout 4000
                                     :headers {header-name header-value}})
                     (catch Exception e
                       (log/error (str "Failed to communicate with search instance " % " - " (.getMessage e)))))) search-instances))
        (recur)))))

(defn sort-tags
  [tags]
  (->> tags
       (sort-by first)
       (reverse)
       (sort-by val)
       (reverse)
       (map first)))

(defprotocol OnDemandCrawler
  (crawl-now! [this]))

(def lock (Object.))

(defrecord Crawler [database
                    interval facebook bucket-full credentials
                    hash-reset-interval bucket-segments records-per-segment
                    metadata-bucket default-tags re-index-port
                    secret-header-name secret-header-value]
  OnDemandCrawler
  (crawl-now! [{:keys [hash-atom re-index-chan] :as opts}]
    (locking lock
      (log/debug "Starting crawler process...")
      (let [{:keys [app-id app-secret page-id]} facebook
            tags (atom (load-tags! database bucket-segments default-tags))
            md-keys (set (db/list-keys database metadata-bucket))
            records (->> (fetch app-id app-secret page-id)
                         (filter :embeddable)
                         (map scrub)
                         (map (add-metadata database md-keys metadata-bucket tags)))
            new-hash (hash records)]
        ;; hash is unreliable so disable until we can do this better
        (if true #_(not= new-hash @hash-atom)
            (do
              (log/info "New hash was observed:" new-hash)
              (log/info "Found" (count records) "records...")
              (log/info "Uploading full...")
              (upload-full records database bucket-full)
              (log/info "Uploading"
                        (int (Math/ceil (/ (count records) records-per-segment)))
                        "segments...")
              (upload-segments records database bucket-segments records-per-segment)
              (async/put! re-index-chan true))
            (log/debug "No change observed"))
        (log/info "Uploading" (count @tags) "tags" )
        (db/write-record!
         database
         bucket-segments
         tags-key-name
         {:tags (sort-tags @tags)})
        ;;
        (reset! hash-atom new-hash))))
  component/Lifecycle
  (start [component]
    (log/info "Starting Crawler")
    (let [pool (at/mk-pool)
          hash-atom (atom nil)
          re-index-chan (async/chan)]
      (start-re-index-request-loop! {:ch re-index-chan
                                     :port re-index-port
                                     :creds credentials
                                     :header-name secret-header-name
                                     :header-value secret-header-value})
      (assoc component
             :re-index-chan re-index-chan
             :hash-atom hash-atom
             :scheduled-fns
             [(at/interspaced
               interval
               #(crawl-now! (assoc component
                                   :hash-atom hash-atom
                                   :re-index-chan re-index-chan))
               pool)
              (at/every
               hash-reset-interval
               #(do
                  (log/info "Forcing reset of hash atom")
                  (reset! hash-atom nil))
               pool)]
             :pool pool)))

  (stop [{:keys [pool scheduled-fns re-index-chan] :as component}]
    (log/info "Stopping Crawler")
    (run! at/kill scheduled-fns)
    (at/stop-and-reset-pool! pool :strategy :kill)
    (log/info "All schedules are now stopped")
    (async/close! re-index-chan)
    (dissoc component :pool :scheduled-fns :hash-atom :lock-atom :re-index-chan)))
