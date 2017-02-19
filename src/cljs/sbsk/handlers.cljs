(ns sbsk.handlers
  (:require [re-frame.core :as re-frame]
            [sbsk.db :as db]))

(defn set-noscroll!
  [on]
  (let [html (aget (.-all js/document) 0)
        classes (set (clojure.string/split (.-className html) " "))
        fun (if on conj disj)]
    (set! (.-className html) (clojure.string/join " " (fun classes "noscroll")))))

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
              :loading-more? false))
   #_(re-frame/dispatch-sync [:refresh-search])))

(re-frame/reg-event-db
 :open-video
 (fn  [db [_ video-id]]
   (set-noscroll! true)
   (assoc db :current-video (or (some #(when (= (:id %) video-id) %)
                                      (get db :search-result-videos))
                                (some #(when (= (:id %) video-id) %)
                                      (get db :videos))))))

(re-frame/reg-event-db
 :close-video
 (fn  [db [_ video-id]]
   (set-noscroll! false)
   (assoc db :current-video nil)))

(re-frame/reg-event-db
 :load-more-videos
 (fn  [db [_]]
   (db/load-more-videos db)))

(re-frame/reg-event-db
 :search
 (fn  [db [_ query]]
   (if (not= (:search db) query)
     (db/search-videos db query)
     db)))

(re-frame/reg-event-db
 :search-results
 (fn  [db [_ results]]
   (db/reset-search-results db results)))
