(ns sbsk.views.video-player
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clojure.string :as str]
            [cljsjs.moment]))

(def desc-title-len 24)

(defn clip-string
  [s]
  (let [end (.indexOf s " " desc-title-len)]
    (str (subs s 0 end) "...")))

(defn fb-header
  [video]
  (re-com/h-box
   :justify :start
   :class "fb-header"
   :align :stretch
   :children [[re-com/box
               :align-self :center
               :child [:img {:src "img/fb.png"}]]
              [re-com/v-box
               :class "fb-info"
               :justify :start
               :children [[re-com/title
                           :level :level1
                           :label "Special Books by Special Kids"]
                          [re-com/label
                           :label (str "posted " (.calendar (js/moment
                                                             (:created-at video)
                                                             "YYYYMMDD'T'HHmmss'Z'")))]]]]))

(defn video-info
  [video]
  [re-com/v-box
   :class "video-info"
   :children [[re-com/title
               :level :level1
               :label (or (:title video)
                          (clip-string (:description video)))]
              [re-com/label
               :label (:description video)]]])

(defn get-fb-video-link
  [video-id]
  (str "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fspecialbooksbyspecialkids%2Fvideos%2F" video-id "%2F&show_text=0"))

(defn video-iframe
  [video]
  (let [w 720
        h (/ w 1.6)]
    [:iframe#video-frame
     {:src (get-fb-video-link (:id video))
      :width (str w "px")
      :height "100%"
      :scrolling "no"
      :frame-border "0"
      :allow-transparency "true"
      :allow-full-screen "true"}]))

(defn close-button
  []
  [re-com/md-icon-button
   :class "close-button"
   :md-icon-name "zmdi-close"
   :on-click #(re-frame/dispatch [:close-video])
   :size :larger])

(defn panel
  [video]
  [:div
   {:class "video-player"
    :on-click #(re-frame/dispatch [:close-video])}
   [:div
    {:class "content"
     :on-click #(.stopPropagation %)}
    [re-com/v-box
     :class "inner-content"
     :justify :start
     :children [(fb-header video)
                (video-info video)
                (video-iframe video)
                (close-button)]]]])
