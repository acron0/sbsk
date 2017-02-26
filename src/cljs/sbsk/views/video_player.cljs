(ns sbsk.views.video-player
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clojure.string :as str]
            [cljsjs.moment]
            [sbsk.shared.video :as video]
            [sbsk.shared.data :refer [clip-string]]
            [sbsk.vars :refer [vp-content-width]]))

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
  (let [w' (or (:width video) (get-in video [:meta :width]) 0)
        h' (or (:height video (get-in video [:meta :height])) 0)
        scale-to-w vp-content-width
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
  [re-com/h-box
   :children [[:div.engagements
               [:iframe {:src (str "https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fspecialbooksbyspecialkids%2Fvideos%2F" (:id video)  "&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId=1843769555880658&colorscheme=dark")
                         :width "450"
                         :height "50"
                         :style {:border "none"
                                 :overflow "hidden"}
                         :scrolling "no"
                         :frame-border "0"
                         :allow-transparency "true"}]]
              #_[:a {:href (str "http://facebook.com" (:link video))}
                 [re-com/label
                  :label "Comment"]]]])

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

(defn now-playing
  [video]
  (fn [v]
    (when (= v video)
      [:div.now-playing-video-panel
       [:span "Currently Watching"]])))

(defn further-viewing
  [videos]
  [re-com/v-box
   :children
   [[re-com/title
     :level :level2
     :label "Further Watching"]
    (video/video-slider videos 4 {:overlay-fn (now-playing (first videos))})]])

(defn close-button
  []
  [re-com/md-icon-button
   :class "close-button"
   :md-icon-name "zmdi-close"
   :on-click #(re-frame/dispatch [:close-video])
   :size :larger])

(defn panel
  [video]
  (let [additional-videos (re-frame/subscribe [:further-viewing])]
    (fn [video]
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
                     (tags video)
                     (further-viewing @additional-videos)
                     [re-com/gap :size "20px"]]]]]
       (close-button)])))
