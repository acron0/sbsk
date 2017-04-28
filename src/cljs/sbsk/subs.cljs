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

(re-frame/reg-sub
 :popular-search-terms
 (fn [db [_ n]]
   (take n (:tags db))))

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
   (let [num-videos 8]
     (when-let [cv (:current-video db)]
       (let [collection (:_collection cv)
             video-source (cond
                            (= :search collection) (:search-result-videos db)
                            (= :videos collection) (:videos db)
                            (or (= :playlist collection)
                                (not-empty (:current-playlist-videos db)))
                            (:current-playlist-videos db))
             videos (take num-videos (find-next-videos (:id cv) video-source num-videos))
             title (if-let [cpt (get-in db [:current-playlist :title])]
                     (str cpt " Playlist")
                     "Further Watching")]
         [title videos])))))

(re-frame/reg-sub
 :typeahead-results
 (fn [db]
   (when-let [r (:tag-search-results db)]
     (take 10 r))))
