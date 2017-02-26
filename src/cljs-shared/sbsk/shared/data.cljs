(ns sbsk.shared.data
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [sbsk.macros :refer [cljs-env]])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]
            [sbsk.vars :refer [video-small-width
                               video-small-height
                               video-medium-width
                               video-medium-height
                               video-large-width
                               video-large-height]]))

(def server-address
  (or (cljs-env :sbsk-search-address) "localhost"))
(def server-port
  (or (cljs-env :sbsk-search-port) "3000"))
(def admin-address
  (or (cljs-env :sbsk-admin-address) "localhost"))
(def admin-port
  (or (cljs-env :sbsk-admin-port) "7000"))
(def data-loc-prefix
  "https://s3-us-west-2.amazonaws.com/sbsk-data-segmented/data.")
(def data-loc-suffix
  ".json")

(def desc-title-len 24)

(defn clip-string
  [s]
  (let [end (.indexOf s " " desc-title-len)]
    (str (subs s 0 end) "...")))

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
