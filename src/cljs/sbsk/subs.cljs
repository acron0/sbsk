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
   (:videos db)))
