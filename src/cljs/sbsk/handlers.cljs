(ns sbsk.handlers
  (:require [re-frame.core :as re-frame]
            [sbsk.db :as db]
            [sbsk.events :refer [add-event]]
            [sbsk.shared.data :refer [search-videos
                                      search-tags]]))

(defonce events
  (do
    (add-event js/window "resize"
               (fn [_]
                 (re-frame/dispatch [:window-resize [(.-innerWidth js/window)
                                                     (.-innerHeight js/window)]])))))

(defn set-noscroll!
  [on]
  (let [html (aget (.-all js/document) 0)
        classes (set (clojure.string/split (.-className html) " "))
        fun (if on conj disj)]
    (set! (.-className html) (clojure.string/join " " (fun classes "noscroll")))))

(defn close-video-player
  [db]
  (set-noscroll! false)
  (assoc db
         :current-video nil
         :current-playlist nil
         :current-playlist-videos []))

(re-frame/reg-event-db
 :initialize-db
 (fn [_ _]
   (db/init-db)))

(re-frame/reg-event-db
 :window-resize
 (fn  [db [_ wh]]
   (assoc db :window-size wh)))

(re-frame/reg-event-db
 :add-videos
 (fn  [db [_ videos latest-data]]
   (-> db
       (update :videos concat videos)
       (update :videos #(sort-by :created-at %))
       (update :videos reverse)
       (assoc :latest-data latest-data
              :loading-more? false))
   #_(re-frame/dispatch-sync [:refresh-search])))

(re-frame/reg-event-db
 :open-previous-video
 (fn  [db _]
   (if-let [video (last (:previous-videos db))]
     (do
       (re-frame/dispatch [:open-video video true])
       (update db :previous-videos butlast))
     db)))

(re-frame/reg-event-db
 :open-video
 (fn  [db [_ video-id prev?]]
   (set-noscroll! true)
   (let [cv (:current-video db)
         prevs (if (and cv (not prev?))
                 (conj (:previous-videos db) (:id cv))
                 (:previous-videos db))]
     (assoc db
            :previous-videos prevs
            :current-video
            (or (some #(when (= (:id %) video-id) (assoc % :_collection :search))
                      (get db :search-result-videos))
                (some #(when (= (:id %) video-id) (assoc % :_collection :videos))
                      (get db :videos))
                (some #(when (= (:id %) video-id) (assoc % :_collection :playlist))
                      (get db :current-playlist-videos)))))))

(re-frame/reg-event-db
 :open-playlist
 (fn  [db [_ playlist-id]]
   (set-noscroll! true)
   (let [playlist (some #(when (= (:id %) playlist-id) %) (:playlists db))]
     (-> db
         (db/load-playlist-videos! playlist)
         (assoc :current-playlist playlist
                :current-video :loading)))))

(re-frame/reg-event-db
 :search-by-id-results
 (fn  [db [_ results]]
   (assoc db
          :current-playlist-videos results
          :current-video (first results))))

(re-frame/reg-event-db
 :close-video
 (fn  [db [_ video-id]]
   (close-video-player db)))

(re-frame/reg-event-db
 :load-more-videos
 (fn  [db [_]]
   (db/load-more-videos db)))

(re-frame/reg-event-db
 :search
 (fn  [db [_ query]]
   (let [new-db (-> db
                    (close-video-player)
                    (dissoc :tag-search-results))]
     (if (not= (:search new-db) query)
       (search-videos new-db query)
       new-db))))

(re-frame/reg-event-db
 :search-results
 (fn  [db [_ results]]
   (db/reset-search-results db results)))

(re-frame/reg-event-db
 :tag-search-results
 (fn  [db [_ results]]
   (assoc db :tag-search-results results)))

(re-frame/reg-event-db
 :clear-search
 (fn  [db [_ results]]
   (assoc db
          :search nil
          :search-result-videos []
          :search-pending? false)))

(re-frame/reg-event-db
 :add-tags
 (fn  [db [_ results]]
   (assoc db :tags results)))

(re-frame/reg-event-db
 :add-playlists
 (fn  [db [_ results]]
   (assoc db :playlists results)))

(re-frame/reg-event-db
 :tag-search
 (fn  [db [_ query]]
   (if (not= (:tag-search db) query)
     (search-tags db query)
     db)))
