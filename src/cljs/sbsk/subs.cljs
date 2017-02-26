(ns sbsk.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :search
 (fn [db]
   (:search db)))

(re-frame/reg-sub
 :videos
 (fn [db]
   {:all-videos (:videos db)
    :search-results (:search-result-videos db)
    :search-pending? (:search-pending? db)}))

(re-frame/reg-sub
 :current-video
 (fn [db]
   (:current-video db)))

(re-frame/reg-sub
 :loading-more?
 (fn [db]
   (:loading-more? db)))

(defn find-next-videos
  [id videos]
  (let [start (.indexOf (map :id videos) id)]
    (drop start videos)))

(re-frame/reg-sub
 :further-viewing
 (fn [db]
   (let [num-videos 4]
     (when-let [cv (:current-video db)]
       (if-let [search-results (not-empty (:search-result-videos db))]
         (take num-videos (find-next-videos (:id cv) search-results))
         (take num-videos (find-next-videos (:id cv) (:videos db))))))))
