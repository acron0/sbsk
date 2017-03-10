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
(def data-bucket
  "https://s3-us-west-2.amazonaws.com/sbsk-data-segmented/")
(def data-loc-prefix
  (str data-bucket "data."))
(def data-loc-suffix
  ".json")
(def tag-loc
  (str data-bucket "tags.json"))
(def playlist-loc
  (str data-bucket "playlists.json"))

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

(defn fetch-tags
  []
  (go (let [response (<! (http/get tag-loc {:with-credentials? false}))]
        (when (= 200 (:status response))
          (let [body    (:body response)
                reader  (t/reader :json)
                m       (t/read reader body)]
            (re-frame/dispatch [:add-tags (get m "tags")]))))))

(defn fetch-playlists
  []
  (go (let [response (<! (http/get playlist-loc {:with-credentials? false}))]
        (when (= 200 (:status response))
          (let [body    (:body response)
                reader  (t/reader :json)
                m       (t/read reader body)
                results (mapv keywordize (vals m))]
            (re-frame/dispatch [:add-playlists results]))))))

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

(defn search-videos-by-id
  [db videos]
  (when (not-empty videos)
    (go (let [result (<! (http/get (str "http://" server-address ":" server-port)
                                   {:query-params {:id (clojure.string/join "," videos)}
                                    :with-credentials? false}))]
          (when (:success result)
            (re-frame/dispatch [:search-by-id-results (:body result)])))))
  db)
