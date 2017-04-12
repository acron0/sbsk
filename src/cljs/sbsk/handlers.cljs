(ns sbsk.handlers
  (:require [re-frame.core :as re-frame]
            [sbsk.db :as db]
            [sbsk.shared.data :refer [search-videos
                                      search-tags]]))

(defn set-noscroll!
  [on]
  (let [html (aget (.-all js/document) 0)
        classes (set (clojure.string/split (.-className html) " "))
        fun (if on conj disj)]
    (set! (.-className html) (clojure.string/join " " (fun classes "noscroll")))))

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
              :loading-more? false))
   #_(re-frame/dispatch-sync [:refresh-search])))

(re-frame/reg-event-db
 :open-video
 (fn  [db [_ video-id]]
   (set-noscroll! true)
   (assoc db :current-video
          (or (some #(when (= (:id %) video-id) (assoc % :_collection :search))
                    (get db :search-result-videos))
              (some #(when (= (:id %) video-id) (assoc % :_collection :videos))
                    (get db :videos))
              (some #(when (= (:id %) video-id) (assoc % :_collection :playlist))
                    (get db :current-playlist-videos))))))

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
   (set-noscroll! false)
   (assoc db
          :current-video nil
          :current-playlist nil
          :current-playlist-videos [])))

(re-frame/reg-event-db
 :load-more-videos
 (fn  [db [_]]
   (db/load-more-videos db)))

(re-frame/reg-event-db
 :search
 (fn  [db [_ query]]
   (if (not= (:search db) query)
     (search-videos db query)
     db)))

(re-frame/reg-event-db
 :search-results
 (fn  [db [_ results]]
   (db/reset-search-results db results)))

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
