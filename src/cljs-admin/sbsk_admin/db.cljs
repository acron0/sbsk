(ns sbsk-admin.db
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [sbsk.macros :refer [cljs-env]])
  (:require [sbsk.shared.data :refer [fetch-videos
                                      admin-address
                                      admin-port]]
            [goog.string :as gstr]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]))

(def empty-db
  {:videos []
   :tags #{}
   :dirty? false
   :current-video nil
   :latest-data -1
   :loading-more? false})

(defn init-db
  []
  (run! fetch-videos (range 2))
  empty-db)

(defn load-more-videos
  [db]
  (let [n (inc (:latest-data db))
        new-db (assoc db :loading-more? true)]
    (fetch-videos n)
    new-db))

(defn refresh-all-videos!
  []
  (go (let [result (<! (http/post (str "http://" admin-address
                                       ":" admin-port
                                       "/api/refresh")
                                  {:with-credentials? false}))]
        #_(when (:success result)
            (re-frame/dispatch [:search-results (:body result)])))))

(defn sync-to-video-database!
  [video]
  (go (let [result (<! (http/post (str "http://" admin-address
                                       ":" admin-port
                                       "/api/video/" (:id video) "/metadata")
                                  {:with-credentials? false
                                   :json-params (:meta video)}))]
        #_(when (:success result)
            (re-frame/dispatch [:search-results (:body result)])))))

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
