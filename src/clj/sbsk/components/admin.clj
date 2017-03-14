(ns sbsk.components.admin
  (:require [com.stuartsierra.component :as component]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.basic-authentication :refer [wrap-basic-authentication]]
            [cheshire.core :refer [parse-stream
                                   generate-string]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [taoensso.timbre :as log]
            [clojure.java.io :as io]
            [amazonica.core :as aws]
            [amazonica.aws.s3 :as s3]
            [amazonica.aws.s3transfer :as s3t]
            [clj-time.core :as t]
            [sbsk.components.database :as database]
            [sbsk.components.crawler :as crawler])
  (:import [com.amazonaws.services.s3.model AmazonS3Exception]))

(defn move-item
  [pred direction]
  (fn [items]
    (let [items-vec (vec items)
          [idx to-swap] (first (keep-indexed #(when (pred %2) [%1 %2]) items))
          new-idx (case direction
                    :up   (max 0 (dec idx))
                    :down (min (dec (count items)) (inc idx)))]
      (if-not (= new-idx idx)
        (let [current-at-new-idx (nth items new-idx)]
          (-> items
              (assoc new-idx to-swap)
              (assoc idx current-at-new-idx)))
        items))))

(defn save-video-meta!
  [req db metadata-bucket cache]
  (if (= "application/json" (:content-type req))
    (let [video-id (get-in req [:params :id])
          video (-> (:body req)
                    (io/reader)
                    (parse-stream true))]
      (log/info "Updating metadata for " video-id)
      (log/debug video)
      #_(swap! cache assoc video-id video)
      (database/write-record! db metadata-bucket video-id video)
      {:status 201})
    {:status 415}))

(defn load-playlists!
  [db table k]
  (log/info "Loading playlists:" k)
  (try (let [obj (database/read-record-as-obj db table k)
             result (zipmap (map name (keys obj)) (vals obj))]
         (log/info "Loaded" (count result) "playlists")
         result)
       (catch Exception e
         (log/warn "Failed to load playlists. Creating empty file...")
         {})))

(defn write-playlists!
  [db bucket playlists-key cache]
  (database/write-record! db bucket playlists-key (:playlists @cache)))

(defn save-playlist!
  [req db bucket playlists-key cache]
  (if (= "application/json" (:content-type req))
    (let [playlist-id (get-in req [:params :id])
          playlist(-> (:body req)
                      (io/reader)
                      (parse-stream true))]
      (when (empty? (:playlists @cache))
        (swap! cache assoc :playlists (load-playlists! db bucket playlists-key)))
      (swap! cache assoc-in [:playlists playlist-id] playlist)
      (log/info "Updating playlist" playlist-id)
      (log/debug playlist)
      (write-playlists! db bucket playlists-key cache)
      {:status 201})
    {:status 415}))

(defn delete-playlist!
  [req db bucket playlists-key cache]
  (let [playlist-id (get-in req [:params :id])]
    (when (empty? (:playlists @cache))
      (swap! cache assoc :playlists (load-playlists! db bucket playlists-key)))
    (swap! cache update :playlists dissoc playlist-id)
    (log/info "Deleteing playlist" playlist-id)
    (write-playlists! db bucket playlists-key cache)
    {:status 202}))

(defn move-playlist!
  [req dir db bucket playlists-key cache]
  (let [playlist-id (get-in req [:params :id])]
    (when (empty? (:playlists @cache))
      (swap! cache assoc :playlists (load-playlists! db bucket playlists-key)))
    (swap! cache update :playlists
           (fn [pls]
             (let [moved-pls ((move-item #(= (:id %) playlist-id) dir) (vec (vals pls)))]
               (reduce #(assoc %1 (:id %2) %2) {} moved-pls))))
    (log/info "Moving playlist" playlist-id dir)
    (write-playlists! db bucket playlists-key cache)
    {:status 200}))

(defn fetch-video-meta
  [id db metadata-bucket cache]
  (if-let [from-cache (get-in @cache [:video-meta id])]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (generate-string from-cache)}
    (try
      (if-let [from-db (database/read-record-as-string db metadata-bucket id)]
        (do
          ;; NOTE - do not use the cache just yet
          #_(swap! cache assoc-in [:video-meta video-id] video)
          {:status 200
           :headers {"Content-Type" "application/json"}
           :body from-db})
        {:status 404})
      (catch Throwable e {:status 404}))))

(defn perform-db-refresh!
  [cwlr]
  (if cwlr
    (do
      (crawler/crawl-now! cwlr)
      {:status 200})
    {:status 412}))

(defn create-upload-link!
  [creds endpoint id bucket]
  (log/info "Providing upload link for" id)
  {:status 200
   :body (str (s3/generate-presigned-url
               (assoc creds :endpoint endpoint)
               :bucket-name bucket
               :key id
               :expiration (-> 30 t/minutes t/from-now)
               :method "PUT"))})

(defn app
  [metadata-bucket public-bucket photo-bucket photo-bucket-region playlists-key creds {:keys [database crawler]} cache]
  (defroutes approutes
    (GET "/" [] (io/resource "public/admin.html"))
    (context "/api" []
             (POST "/refresh" []
                   (perform-db-refresh! crawler))
             (POST "/playlist/:id" request
                   (save-playlist! request database public-bucket playlists-key cache))
             (DELETE "/playlist/:id" request
                     (delete-playlist! request database public-bucket playlists-key cache))
             (PUT "/playlist/:id/up" request
                  (move-playlist! request :up database public-bucket playlists-key cache))
             (PUT "/playlist/:id/down" request
                  (move-playlist! request :down database public-bucket playlists-key cache))
             (POST "/video/:id/metadata" request
                   (save-video-meta! request database metadata-bucket cache))
             (GET  "/video/:id/metadata" [id]
                   (fetch-video-meta id database metadata-bucket cache))
             (GET "/photo/:id/upload-link" [id]
                  (create-upload-link! creds photo-bucket-region id photo-bucket)))
    (route/resources "/")))

(defn authenticated?
  [admin-user admin-pass]
  (fn [name pass]
    (and (= name admin-user)
         (= pass admin-pass))))

(defrecord Admin [username password
                  metadata-bucket photo-bucket photo-bucket-region
                  public-bucket playlists-key credentials]
  component/Lifecycle
  (start [component]
    (log/info "Starting Admin")
    (let [cache (atom {})]
      (assoc component
             :cache cache
             :server
             (run-jetty (-> (app
                             metadata-bucket
                             public-bucket
                             photo-bucket
                             photo-bucket-region
                             playlists-key
                             credentials
                             component
                             cache)
                            (wrap-cors
                             :access-control-allow-origin [#".*"]
                             :access-control-allow-methods [:get])
                            (wrap-basic-authentication
                             (authenticated? username password))) {:port 7000
                                                                   :daemon? true
                                                                   :join? false}))))

  (stop [component]
    (log/info "Stopping Admin")
    (.stop (:server component))
    (dissoc component
            :server
            :cache)))
