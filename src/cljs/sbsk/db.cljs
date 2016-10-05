(ns sbsk.db
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]))

(def empty-db
  {:videos []
   :search nil
   :current-video nil})

(defn keywordize
  [x]
  (reduce-kv
   (fn [a k v]
     (let [v' (if (map? v) (keywordize v) v)]
       (assoc a (keyword k) v'))) {} x))

(defn init-db
  []
  (go (let [response
            (<! (http/get "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D%27http%3A%2F%2Fsearch-fbvideos-7em3llq7mvfiuqoshymtrg3acu.us-east-1.cloudsearch.amazonaws.com%2F2013-01-01%2Fsearch%3Fq%3Dmatchall%26return%3D_all_fields%26sort%3Dcreated_date%2Bdesc%26q.parser%3Dstructured%27&format=json" {:with-credentials? false}))]
        (let [body   (get-in response [:body :query :results :body])
              reader (t/reader :json)
              {:strs [hit start]} (get (t/read reader body) "hits")
              hits  (map-indexed (fn [i h] (assoc h "index" (+ start i))) hit)
              hits' (map keywordize hits)]
          (re-frame/dispatch [:add-videos hits']))))
  empty-db)
