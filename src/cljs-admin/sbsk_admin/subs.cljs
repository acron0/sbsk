(ns sbsk-admin.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :videos
 (fn [db]
   (:videos db)))

(re-frame/reg-sub
 :current-video
 (fn [db]
   (:current-video db)))

(re-frame/reg-sub
 :tags
 (fn [db]
   (:tags db)))
