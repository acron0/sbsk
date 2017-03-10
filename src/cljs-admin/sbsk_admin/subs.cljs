(ns sbsk-admin.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 :videos
 (fn [db]
   (:videos db)))

(re-frame/reg-sub
 :playlists
 (fn [db]
   (:playlists db)))

(re-frame/reg-sub
 :current-video
 (fn [db]
   (:current-video db)))

(re-frame/reg-sub
 :current-playlist
 (fn [db]
   (:current-playlist db)))

(re-frame/reg-sub
 :tags
 (fn [db]
   (:tags db)))

(re-frame/reg-sub
 :dirty?
 (fn [db]
   (:dirty? db)))

(re-frame/reg-sub
 :current-video-loading?
 (fn [db]
   (:current-video-loading? db)))

(re-frame/reg-sub
 :error
 (fn [db]
   (:error db)))

(re-frame/reg-sub
 :refreshing?
 (fn [db]
   (:refreshing? db)))

(re-frame/reg-sub
 :search-results
 (fn [db]
   (let [current-playlist-video-ids
         (set (map :id @(re-frame/subscribe [:current-playlist-videos])))]
     (remove (comp (partial contains? current-playlist-video-ids)
                   :id)
             (:video-search-results db)))))

(re-frame/reg-sub
 :current-playlist-videos
 (fn [db]
   (let [cp @(re-frame/subscribe [:current-playlist])
         cpvs (:current-playlist-videos db)]
     (if (not-empty cpvs)
       (map (fn [v] (get (:current-playlist-videos db) v)) (:videos cp))
       []))))
