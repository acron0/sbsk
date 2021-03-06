(ns sbsk-admin.db
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [sbsk.macros :refer [cljs-env]])
  (:require [re-frame.core :as re-frame]
            [sbsk.shared.data :refer [fetch-videos
                                      fetch-tags
                                      fetch-playlists
                                      admin-address
                                      admin-port
                                      search-videos
                                      search-videos-by-id]]
            [goog.string :as gstr]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! timeout]]
            [cognitect.transit :as t]))

(def empty-db
  {:error nil
   :videos []
   :playlists []
   :tags #{}
   :dirty? false
   :refreshing? false
   :current-video-loading? false
   :current-video nil
   :current-playlist nil
   :current-playlist-videos []
   :latest-data -1
   :loading-more? false
   :search nil
   :search-pending? false
   :video-search-results []})

(defn get-time
  []
  (let [now (js/Date. (.now js/Date))]
    (gstr/format "%d%02d%02dT%02d%02d%02dZ"
                 (.getFullYear now)
                 (inc (.getMonth now))
                 (.getDate now)
                 (.getHours now)
                 (.getMinutes now)
                 (.getSeconds now))))

(defn new-playlist
  []
  (let [t (get-time)]
    {:id (str (random-uuid))
     :title "New Playlist"
     :short-description nil
     :created-at t
     :videos []
     :edited-at t}))

(defn init-db
  []
  (run! fetch-videos (range 2))
  (fetch-tags)
  (fetch-playlists)
  empty-db)

(defn load-more-videos
  [db]
  (let [n (inc (:latest-data db))
        new-db (assoc db :loading-more? true)]
    (fetch-videos n)
    new-db))

(defn refresh-all-videos!
  [full?]
  (go (<! (timeout 500)) ;; let any changes filter through
      (let [result (<! (http/post (str "http://" admin-address
                                       ":" admin-port
                                       "/api/refresh")
                                  {:with-credentials? true}))]
        (if (:success result)
          (do
            (when full?
              (run! fetch-videos (range 2)))
            (re-frame/dispatch [:refresh-finished]))
          (re-frame/dispatch [:error (str "Failed to detect the status of a refresh/sync: " result)])))))

(defn sync-to-video-database!
  [video]
  (go (let [result (<! (http/post (str "http://" admin-address
                                       ":" admin-port
                                       "/api/video/" (:id video) "/metadata")
                                  {:with-credentials? true
                                   :json-params (:meta video)}))])))

(defn sync-to-playlist-database!
  [playlist]
  (go (let [result (<! (http/post (str "http://" admin-address
                                       ":" admin-port
                                       "/api/playlist/" (:id playlist))
                                  {:with-credentials? true
                                   :json-params playlist}))])))

(defn delete-playlist!
  [playlist-id]
  (go (let [result (<! (http/delete (str "http://" admin-address
                                         ":" admin-port
                                         "/api/playlist/" playlist-id)
                                    {:with-credentials? true}))])))

(defn reintegrate-current-video
  ([db]
   (reintegrate-current-video db true))
  ([db sync?]
   (reintegrate-current-video db sync? (get-time)))
  ([db sync? edited-time]
   (let [cv (assoc-in (:current-video db)
                      [:meta :edited-at]
                      edited-time)]
     (when sync?
       ;; Make sure we don't upload base64 thumb data
       (let [thumb (get-in cv [:meta :thumb])
             cv (if (and thumb (clojure.string/starts-with? thumb "data:"))
                  (update cv :meta dissoc :thumb)
                  cv)]
         (sync-to-video-database! cv)))
     (update
      db
      :videos
      (fn [videos]
        (mapv (fn [video]
                (if (= (:id cv) (:id video))
                  cv
                  video)) videos))))))

(defn reintegrate-current-playlist
  ([db]
   (reintegrate-current-playlist db true))
  ([db sync?]
   (reintegrate-current-playlist db sync? (get-time)))
  ([db sync? edited-time]
   (let [cp (assoc-in (:current-playlist db)
                      [:edited-at]
                      edited-time)]
     (when sync?
       (sync-to-playlist-database! cp))
     (update
      db
      :playlists
      (fn [playlists]
        (mapv (fn [playlist]
                (if (= (:id cp) (:id playlist))
                  cp
                  playlist)) playlists))))))

(defn fetch-video-meta
  [id]
  (go (let [result (<! (http/get (str "http://" admin-address
                                      ":" admin-port
                                      "/api/video/" id "/metadata")
                                 {:with-credentials? true}))]
        (re-frame/dispatch [:update-video-metadata id (:body result)]))))

(defn upload-photo!
  [id file key]
  (go (let [result (<! (http/get (str "http://" admin-address
                                      ":" admin-port
                                      "/api/photo/" id "/upload-link")
                                 {:with-credentials? true}))]
        (if (:success result)
          (let [upload-result (<! (http/put (:body result)
                                            {:with-credentials? false
                                             :body file}))]
            (if (:success upload-result)
              (re-frame/dispatch [key
                                  (str "https://s3-us-west-2.amazonaws.com/sbsk-pictures/" id)
                                  id true])
              (re-frame/dispatch [:error (str "Failed to upload photo to S3 for " id ": " upload-result)])))
          (re-frame/dispatch [:error (str "Failed to create upload link for " id ": " result)])))))

(defn perform-video-search!
  [db search]
  (search-videos db search))

(defn update-current-playlist-videos
  [db]
  (let [playlist-video-ids (set (get-in db [:current-playlist :videos]))]
    (search-videos-by-id db playlist-video-ids)))

(defn move-playlist!
  [dir playlist-id]
  (http/put (str "http://" admin-address
                 ":" admin-port
                 "/api/playlist/" playlist-id "/" (name dir))
            {:with-credentials? true}))
