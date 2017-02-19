(ns sbsk.db
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [sbsk.macros :refer [cljs-env]])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]
            [sbsk.shared.data :refer [fetch-videos
                                      server-address
                                      server-port]]))

(def empty-db
  {:videos []
   :search-result-videos []
   :search nil
   :current-video nil
   :latest-data -1
   :loading-more? false
   :search-pending? false
   :isotope nil})

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

(defn search-videos
  [db query]
  (let [new-db (assoc db
                      :search-pending? true
                      :search query)]
    (when (> (count query) 3)
      (go (let [result (<! (http/get (str "http://" server-address ":" server-port)
                                     {:query-params {:q query}
                                      :with-credentials? false}))]
            (when (:success result)
              (re-frame/dispatch [:search-results (:body result)])))))
    new-db))

(defn reset-search-results
  [db results]
  (assoc db
         :search-pending? false
         :search-result-videos results))
