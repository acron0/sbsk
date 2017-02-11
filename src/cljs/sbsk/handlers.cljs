(ns sbsk.handlers
  (:require [re-frame.core :as re-frame]
            [sbsk.db :as db]))

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
   (assoc db :current-video (some #(when (= (:id %) video-id) %)
                                  (or (get db :videos)
                                      (get db :search-result-videos))))))

(re-frame/reg-event-db
 :close-video
 (fn  [db [_ video-id]]
   (assoc db :current-video nil)))

(re-frame/reg-event-db
 :load-more-videos
 (fn  [db [_]]
   (db/load-more-videos db)))

(re-frame/reg-event-db
 :search
 (fn  [db [_ query]]
   (if (not= (:search db) query)
     (db/search-videos db query)
     db)))

(re-frame/reg-event-db
 :search-results
 (fn  [db [_ results]]
   (db/reset-search-results db results)))
