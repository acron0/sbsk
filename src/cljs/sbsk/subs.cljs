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
