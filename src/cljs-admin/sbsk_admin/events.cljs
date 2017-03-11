(ns sbsk-admin.events
  (:require [re-frame.core :as re-frame]
            [sbsk-admin.db :as db]
            [cljs-time.core :as ct]
            [cljs-time.format :as cf]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   (db/init-db)))

(re-frame/reg-event-db
 :add-videos
 (fn  [db [_ videos latest-data]]
   (-> db
       (update :videos concat videos)
       (update :videos #(sort-by :created-at %))
       (update :videos reverse)
       (assoc :latest-data latest-data
              :loading-more? false))))

(re-frame/reg-event-db
 :add-tags
 (fn  [db [_ tags]]
   (update db :tags #(clojure.set/union % tags))))

(re-frame/reg-event-db
 :add-playlists
 (fn  [db [_ playlists]]
   (assoc db :playlists playlists)))

(re-frame/reg-event-db
 :load-more-videos
 (fn  [db [_]]
   (db/load-more-videos db)))

(re-frame/reg-event-db
 :start-edit-video
 (fn [db [_ id]]
   (db/fetch-video-meta id)
   (-> db
       (assoc :current-video-loading? true)
       (assoc :current-video (some #(when (= id (:id %))
                                      %) (:videos db))))))

(re-frame/reg-event-db
 :stop-edit-video
 (fn [db [_ id]]
   (assoc db :current-video nil)))

(re-frame/reg-event-db
 :sync-db
 (fn [db [_ full?]]
   (db/refresh-all-videos! full?)
   (-> (if full?
         (-> db
             (assoc :videos [])
             (assoc :current-video nil))
         db)
       (assoc :dirty? false)
       (assoc :refreshing? true))))

(re-frame/reg-event-db
 :refresh-finished
 (fn [db [_ id]]
   (-> db
       (assoc :refreshing? false))))

(re-frame/reg-event-db
 :error
 (fn [db [_ msg]]
   (assoc db :error msg)))

(defn after?
  [time-a time-b]
  (if-not time-a
    false
    (if-not time-b
      true
      (let [fmt (cf/formatter "yyyyMMdd'T'HHmmss'Z'")
            a (cf/parse fmt time-a)
            b (cf/parse fmt time-b)]
        (ct/after? a b)))))

(re-frame/reg-event-db
 :update-video-metadata
 (fn [db [_ id metadata]]
   (when (= id (get-in db [:current-video :id]))
     (if (clojure.string/blank? metadata)
       (assoc db :current-video-loading? false)
       (let [remote-edited-time (:edited-at metadata)
             local-edited-time (get-in db [:current-video :meta :edited-at])
             local-is-newer? (after? local-edited-time remote-edited-time)
             db' (-> (if local-is-newer?
                       (assoc db :dirty? true)
                       (assoc-in db [:current-video :meta] metadata))
                     (assoc :current-video-loading? false))]
         (db/reintegrate-current-video db' local-is-newer?
                                       (if local-is-newer?
                                         local-edited-time
                                         remote-edited-time)))))))

(re-frame/reg-event-db
 :create-new-playlist
 (fn [db _]
   (let [playlist (db/new-playlist)]
     (-> db
         (update :playlists conj playlist)
         (assoc :current-playlist playlist)))))

(re-frame/reg-event-db
 :start-edit-playlist
 (fn [db [_ id]]
   (-> db
       (assoc :current-playlist (some #(when (= id (:id %))
                                         %) (:playlists db)))
       (db/update-current-playlist-videos))))

(re-frame/reg-event-db
 :stop-edit-playlist
 (fn [db [_ id]]
   (-> db
       (assoc :current-playlist nil))))

(re-frame/reg-event-db
 :delete-playlist
 (fn [db [_ id]]
   (db/delete-playlist! id)
   (-> db
       (assoc :current-playlist nil)
       (update :playlists (fn [ps] (vec (filter #(not= id (:id %)) ps)))))))

(re-frame/reg-event-db
 :video-search
 (fn [db [_ search]]
   (db/perform-video-search! db search)))

(re-frame/reg-event-db
 :clear-search
 (fn [db _]
   (assoc db :video-search-results [])))

(re-frame/reg-event-db
 :search-results
 (fn [db [_ results]]
   (assoc db :video-search-results results)))

(re-frame/reg-event-db
 :search-by-id-results
 (fn [db [_ results]]
   (assoc db :current-playlist-videos
          (reduce #(assoc %1 (:id %2) %2) {} results))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(re-frame/reg-event-db
 :edit-current-playlist/title
 (fn  [db [_ title]]
   (let [db' (-> db
                 (assoc :dirty? true)
                 (assoc-in [:current-playlist :title] title))]
     (db/reintegrate-current-playlist db'))))

(re-frame/reg-event-db
 :edit-current-playlist/short-description
 (fn  [db [_ short-desc]]
   (let [db' (-> db
                 (assoc :dirty? true)
                 (assoc-in [:current-playlist :short-description] short-desc))]
     (db/reintegrate-current-playlist db'))))

(re-frame/reg-event-db
 :edit-current-playlist/add-video
 (fn  [db [_ video-id]]
   (-> db
       (assoc :dirty? true)
       (update-in [:current-playlist :videos] #(conj % video-id))
       (db/update-current-playlist-videos)
       (db/reintegrate-current-playlist))))

(re-frame/reg-event-db
 :edit-current-playlist/remove-video
 (fn  [db [_ video-id]]
   (-> db
       (assoc :dirty? true)
       (update-in [:current-playlist :videos] #(remove #{video-id} %))
       (db/update-current-playlist-videos)
       (db/reintegrate-current-playlist))))

(defn move-video
  [video-id direction]
  (fn [videos]
    (let [videos-vec (vec videos)
          [idx to-swap] (first (keep-indexed #(when (= %2 video-id) [%1 %2]) videos))
          new-idx (case direction
                    :up   (max 0 (dec idx))
                    :down (min (dec (count videos)) (inc idx)))]
      (if-not (= new-idx idx)
        (let [current-at-new-idx (nth videos new-idx)]
          (-> videos
              (assoc new-idx to-swap)
              (assoc idx current-at-new-idx)))
        videos))))

(re-frame/reg-event-db
 :edit-current-playlist/move-video-up
 (fn  [db [_ video-id]]
   (-> db
       (assoc :dirty? true)
       (update-in [:current-playlist :videos] (move-video video-id :up))
       (db/reintegrate-current-playlist))))

(re-frame/reg-event-db
 :edit-current-playlist/move-video-down
 (fn  [db [_ video-id]]
   (-> db
       (assoc :dirty? true)
       (update-in [:current-playlist :videos] (move-video video-id :down))
       (db/reintegrate-current-playlist))))

(re-frame/reg-event-db
 :edit-current-playlist/thumb
 (fn  [db [_ file]]
   (let [reader (js/FileReader.)]
     (set! (.-onload reader) #(re-frame/dispatch [:edit-current-playlist/thumb-update
                                                  (.. % -target -result)
                                                  (get-in db [:current-playlist :id])
                                                  false]))
     (.readAsDataURL reader file)
     (db/upload-photo! (get-in db [:current-playlist :id]) file
                       :edit-current-playlist/thumb-update)
     (-> db
         (assoc :dirty? true)))))

(re-frame/reg-event-db
 :edit-current-playlist/thumb-update
 (fn  [db [_ url playlist-id sync?]]
   (if (= playlist-id (get-in db [:current-playlist :id]))
     (let [db' (-> db
                   (assoc :dirty? true)
                   (assoc-in [:current-playlist :thumb] url))]
       (db/reintegrate-current-playlist db' sync?))
     db)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(re-frame/reg-event-db
 :edit-current-video/add-tag
 (fn  [db [_ tag]]
   (if-not (clojure.string/blank? tag)
     (let [db' (-> db
                   (assoc :dirty? true)
                   (update-in [:current-video :meta :tags] set)
                   (update-in [:current-video :meta :tags] conj tag)
                   (update-in [:tags] conj tag))]
       (db/reintegrate-current-video db'))
     db)))

(re-frame/reg-event-db
 :edit-current-video/remove-tag
 (fn  [db [_ tag]]
   (let [db' (-> db
                 (assoc :dirty? true)
                 (update-in [:current-video :meta :tags] set)
                 (update-in [:current-video :meta :tags] disj tag))]
     (db/reintegrate-current-video db'))))

(re-frame/reg-event-db
 :edit-current-video/title
 (fn  [db [_ title]]
   (let [db' (-> db
                 (assoc :dirty? true)
                 (assoc-in [:current-video :meta :title] title))]
     (db/reintegrate-current-video db'))))

(re-frame/reg-event-db
 :edit-current-video/short-description
 (fn  [db [_ sd]]
   (let [db' (-> db
                 (assoc :dirty? true)
                 (assoc-in [:current-video :meta :short-description] sd))]
     (db/reintegrate-current-video db'))))

(re-frame/reg-event-db
 :edit-current-video/description
 (fn  [db [_ d]]
   (let [db' (-> db
                 (assoc :dirty? true)
                 (assoc-in [:current-video :meta :description] d))]
     (db/reintegrate-current-video db'))))

(re-frame/reg-event-db
 :edit-current-video/thumb
 (fn  [db [_ file]]
   (let [reader (js/FileReader.)]
     (set! (.-onload reader) #(re-frame/dispatch [:edit-current-video/thumb-update
                                                  (.. % -target -result)
                                                  (get-in db [:current-video :id])
                                                  false]))
     (.readAsDataURL reader file)
     (db/upload-photo! (get-in db [:current-video :id]) file
                       :edit-current-video/thumb-update)
     (-> db
         (assoc :dirty? true)))))

(re-frame/reg-event-db
 :edit-current-video/thumb-update
 (fn  [db [_ url video-id sync?]]
   (if (= video-id (get-in db [:current-video :id]))
     (let [db' (-> db
                   (assoc :dirty? true)
                   (assoc-in [:current-video :meta :thumb] url))]
       (db/reintegrate-current-video db' sync?))
     db)))

(re-frame/reg-event-db
 :edit-current-video/remove-thumb
 (fn  [db _]
   (let [db' (-> db
                 (assoc :dirty? true)
                 (update-in [:current-video :meta] dissoc :thumb))]
     (db/reintegrate-current-video db'))))
