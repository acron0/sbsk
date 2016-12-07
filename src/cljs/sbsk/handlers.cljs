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
       (assoc :latest-data latest-data
              :loading-more? false))
   #_(re-frame/dispatch-sync [:refresh-search])))

(re-frame/reg-event-db
 :open-video
 (fn  [db [_ video-id]]
   (assoc db :current-video (some #(when (= (:id %) video-id) %) (:videos db)))))

(re-frame/reg-event-db
 :close-video
 (fn  [db [_ video-id]]
   (assoc db :current-video nil)))

(re-frame/reg-event-db
 :load-more-videos
 (fn  [db [_]]
   (db/load-more-videos db)))
