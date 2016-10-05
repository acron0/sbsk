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
