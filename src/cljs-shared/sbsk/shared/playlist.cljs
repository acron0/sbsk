(ns sbsk.shared.playlist
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [sbsk.vars :refer [video-small-width]]
            [sbsk.shared.slider :refer [slider-control]]
            [sbsk.shared.video :refer [video-size->px]]))

(defn open-playlist
  [pl]
  (re-frame/dispatch [:open-playlist (:id pl)]))

(defn playlist-panel
  [playlist & [opts]]
  (let [[w h] (video-size->px :small)]
    [re-com/box
     :class (:class opts)
     :width w
     :height h
     :child [:div.playlist-panel
             {:style {:width "100%"
                      :height "100%"}
              :on-click (partial open-playlist playlist)}
             [:img {:src (or (:thumb playlist)
                             (str "http://placehold.it/" 205 "x" 137))
                    :width w
                    :height h}]
             (when (:overlay-fn opts)
               [:div.playlist-panel-overlay
                {}
                ((:overlay-fn opts) playlist)])]]))

(defn playlist-slider
  [playlists num-playlists & [opts]]
  [slider-control "playlist-slider"
   #(playlist-panel % {:class "playlist-slider-playlist-panel"
                       :overlay-fn (:overlay-fn opts)})
   playlists
   num-playlists
   video-small-width])
