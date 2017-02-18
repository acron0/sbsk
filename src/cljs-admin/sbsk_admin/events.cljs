(ns sbsk-admin.events
    (:require [re-frame.core :as re-frame]
              [sbsk-admin.db :as db]))

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
 :load-more-videos
 (fn  [db [_]]
   (db/load-more-videos db)))

(re-frame/reg-event-db
 :start-edit-video
 (fn  [db [_ id]]
   (assoc db :current-video (some #(when (= id (:id %))
                                     %) (:videos db)))))

(re-frame/reg-event-db
 :stop-edit-video
 (fn  [db [_ id]]
   (assoc db :current-video nil)))
