(ns sbsk-admin.db
  (:require [sbsk.shared.data :as sbsk-data]
            [goog.string :as gstr]))

(def empty-db
  {:videos []
   :tags #{}
   :current-video nil
   :latest-data -1
   :loading-more? false})

(defn init-db
  []
  (run! sbsk-data/fetch-videos (range 2))
  empty-db)

(defn load-more-videos
  [db]
  (let [n (inc (:latest-data db))
        new-db (assoc db :loading-more? true)]
    (sbsk-data/fetch-videos n)
    new-db))

(defn sync-to-video-database!
  [videos]
  )

(defn reintegrate-current-video
  [db]
  (let [now (js/Date. (.now js/Date))
        edited-time (gstr/format "%d%02d%02dT%02d%02d%02dZ"
                                 (.getFullYear now)
                                 (inc (.getMonth now))
                                 (.getDate now)
                                 (.getHours now)
                                 (.getMinutes now)
                                 (.getSeconds now))
        cv (assoc-in (:current-video db)
                     [:meta :edited-at]
                     edited-time)]
    (sync-to-video-database! cv)
    (update
     db
     :videos
     (fn [videos]
       (mapv (fn [video]
               (if (= (:id cv) (:id video))
                 cv
                 video)) videos)))))
