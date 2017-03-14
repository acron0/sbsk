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

(re-frame/reg-sub
 :playlists
 (fn [db]
   (:playlists db)))

(defn find-next-videos
  [id videos minimum]
  (let [start (.indexOf (map :id videos) id)
        remainder (drop start videos)
        diff (- minimum (count remainder))]
    (if (pos? diff)
      (concat remainder (take diff videos))
      remainder)))

(re-frame/reg-sub
 :further-viewing
 (fn [db]
   (let [num-videos 4]
     (when-let [cv (:current-video db)]
       (let [videos (if-let [playlist-videos (not-empty (:current-playlist-videos db))]
                      (take num-videos (find-next-videos (:id cv) playlist-videos num-videos))
                      (if-let [search-results (not-empty (:search-result-videos db))]
                        (take num-videos (find-next-videos (:id cv) search-results num-videos))
                        (take num-videos (find-next-videos (:id cv) (:videos db) num-videos))))
             title (if-let [cpt (get-in db [:current-playlist :title])]
                     (str cpt " Playlist")
                     "Further Watching")]
         [title videos])))))
