(ns sbsk.db
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]))
(def server-address
  "ec2-54-89-240-173.compute-1.amazonaws.com")
(def data-loc-prefix
  "https://s3-us-west-2.amazonaws.com/sbsk-data-segmented/data.")
(def data-loc-suffix
  ".json")

(def empty-db
  {:videos []
   :search-result-videos []
   :search nil
   :current-video nil
   :latest-data -1
   :loading-more? false
   :search-pending? false})

(defn keywordize
  [x]
  (reduce-kv
   (fn [a k v]
     (let [v' (if (map? v) (keywordize v) v)]
       (assoc a (keyword k) v'))) {} x))

(defn fetch-videos
  [n]
  (go (let [address (str data-loc-prefix n data-loc-suffix)
            response (<! (http/get address {:with-credentials? false}))]
        (when (= 200 (:status response))
          (let [body    (:body response)
                reader  (t/reader :json)
                m       (t/read reader body)
                results (map keywordize m)]
            (re-frame/dispatch [:add-videos results n]))))))

(defn init-db
  []
  (fetch-videos 0)
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
      (go (let [result (<! (http/get (str "http://" server-address ":3000")
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
