(ns sbsk.handlers
  (:require [re-frame.core :as re-frame]
            [sbsk.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   (db/init-db)))

(re-frame/reg-event-db
 :add-videos
 (fn  [db [_ videos]]
   (update db :videos concat videos)
   #_(re-frame/dispatch-sync [:refresh-search])))

(re-frame/reg-event-db
 :open-video
 (fn  [db [_ video-id]]
   (assoc db :current-video (some #(when (= (:id %) video-id) %) (:videos db)))))

(re-frame/reg-event-db
 :close-video
 (fn  [db [_ video-id]]
   (assoc db :current-video nil)))
