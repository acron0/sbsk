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

(re-frame/reg-event-db
 :sync-db
 (fn  [db [_ id]]
   (db/refresh-all-videos!)
   (assoc db :dirty? false)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(re-frame/reg-event-db
 :edit-current-video/add-tag
 (fn  [db [_ tag]]
   (let [db' (-> db
                 (assoc :dirty? true)
                 (update-in [:current-video :meta :tags] set)
                 (update-in [:current-video :meta :tags] conj tag)
                 (update-in [:tags] conj tag))]
     (db/reintegrate-current-video db'))))

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
