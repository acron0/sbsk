(ns sbsk-admin.db
  (:require [sbsk.shared.data :as sbsk-data]))

(def empty-db
  {:videos []
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
