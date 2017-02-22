(ns sbsk.views.video-player
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clojure.string :as str]
            [cljsjs.moment]
            [sbsk.shared.video :as video]
            [sbsk.shared.data :refer [clip-string]]))

(defn fb-header
  [video]
  (re-com/h-box
   :justify :start
   :class "fb-header"
   :align :stretch
   :children [[re-com/box
               :align-self :center
               :child [:img {:src "img/fb.png"
                             :width 32
                             :height 32}]]
              [re-com/v-box
               :class "fb-info"
               :justify :start
               :children [[:a
                           {:href "http://facebook.com/specialbooksbyspecialkids"}
                           [re-com/title
                            :level :level1
                            :label "Special Books by Special Kids"]]
                          [re-com/label
                           :label (str "posted " (.calendar (js/moment
                                                             (:created-at video)
                                                             "YYYYMMDD'T'HHmmss'Z'")))]]]]))

(defn video-info
  [video]
  [re-com/v-box
   :class "video-info"
   :children [[:a
               {:href (str "http://facebook.com" (:link video))}
               [re-com/title
                :level :level1
                :label (video/get-title video)]]
              [re-com/label
               :label (video/get-description video)]]])

(defn get-fb-video-link
  [video-id]
  (str "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fspecialbooksbyspecialkids%2Fvideos%2F" video-id "%2F&show_text=0"))

(defn video-iframe
  [video]
  (let [w' (or (:width video) 0)
        h' (or (:height video) 0)
        scale-to-w 720
        ratio      (when-not (zero? w')
                     (/ scale-to-w w'))
        w          (str scale-to-w "px")
        h          (if ratio
                     (str (* ratio h') "px")
                     (str "100%"))]
    [:iframe#video-frame
     {:src (get-fb-video-link (:id video))
      :width w
      :height h
      :scrolling "no"
      :frame-border "0"
      :allow-transparency "true"
      :allow-full-screen "true"}]))

(defn engagements
  [video]
  [:div.engagements
   [:iframe {:src "https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fspecialbooksbyspecialkids%2Fvideos%2F949566678478646&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId=1843769555880658&colorscheme=dark"
             :width "450"
             :height "80"
             :style {:border "none"
                     :overflow "hidden"}
             :scrolling "no"
             :frame-border "0"
             :allow-transparency "true"
             }]])

(defn tags
  [video]
  (when-let [ts (video/get-tags video)]
    [re-com/h-box
     :gap "5px"
     :children (concat [[re-com/label
                         :label "Tags"]
                        [re-com/line]]
                       (for [t ts]
                         [re-com/hyperlink
                          :class "taglink"
                          :label (str "#" t)]))]))

(defn close-button
  []
  [re-com/md-icon-button
   :class "close-button"
   :md-icon-name "zmdi-close"
   :on-click #(re-frame/dispatch [:close-video])
   :size :larger])

(defn panel
  [video]
  [:div.video-player
   {:on-click #(re-frame/dispatch [:close-video])}
   [:div.content
    [:div.inner-content
     {:on-click #(.stopPropagation %)}
     [re-com/v-box
      :gap "10px"
      :justify :start
      :children [(fb-header video)
                 (video-info video)
                 (video-iframe video)
                 (engagements video)
                 (tags video)]]]]
   (close-button)])
