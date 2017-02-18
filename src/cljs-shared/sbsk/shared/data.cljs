(ns sbsk.shared.data
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [sbsk.macros :refer [cljs-env]])
  (:require [re-frame.core :as re-frame]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cognitect.transit :as t]))

(def server-address
  (or (cljs-env :sbsk-search-address) "localhost"))
(def data-loc-prefix
  "https://s3-us-west-2.amazonaws.com/sbsk-data-segmented/data.")
(def data-loc-suffix
  ".json")

(def desc-title-len 24)
(def video-img-div 4.663)
(def video-highlight-width (/ 900 video-img-div))
(def video-highlight-height (/ 600 video-img-div))
;;
(def video-small-width (/ 980 5))
(def video-small-height (/ 653 5))
(def video-medium-width (* 2 video-small-width))
(def video-medium-height (* 2 video-small-height))
(def video-large-width (* 3 video-small-width))
(def video-large-height (* 3 video-small-height))

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
