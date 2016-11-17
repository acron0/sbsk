(ns sbsk.views
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [cljsjs.moment]))

(def timeout (atom nil))

(defn get-iframe-dims
  []
  (let [aspect (/ 280 500)
        mult   0.8
        w      (.. js/document -body -offsetWidth)
        w'     (* w mult)
        h'     (* (* w aspect) mult)]
    [w' h']))

(defn on-search-change
  [v]
  (when @timeout
    (js/clearTimeout @timeout))
  (reset! timeout (js/setTimeout #(re-frame/dispatch [:search %]) 600)))

(defn search-bar []
  (let [search (re-frame/subscribe [:search])]
    (fn []
      [re-com/h-box
       :class "search-bar"
       :children [[re-com/box
                   :child [:i {:class "zmdi zmdi-hc-fw zmdi-search"}]]
                  [:input
                   {:type "text"
                    :on-change #(on-search-change (.-value (.-target %)))
                    :model search
                    :placeholder "Enter a search term"}]]])))

(defn search-results
  [videos]
  (let [search (re-frame/subscribe [:search])
        loading-more? (re-frame/subscribe [:loading-more?])]
    (fn [videos]
      [re-com/v-box
       :class "search-results"
       :children [[re-com/title
                   :level :level3
                   :label "Recent Uploads"]
                  [:div.pure-g
                   (for [video videos]
                     ^{:key (:id video)}
                     [:div.pure-u-1.pure-u-md-1-2.pure-u-lg-1-3
                      [re-com/v-box
                       :class "video-thumb"
                       :children [[:div.title
                                   (:title video)]
                                  [:div.thumb
                                   {:on-click #(re-frame/dispatch [:open-video (:id video)])}
                                   [:img
                                    {:src (:thumb video)}]]
                                  [:div.date
                                   (.calendar (js/moment
                                               (:created-at video)
                                               "YYYYMMDD'T'HHmmss'Z'"))]]]])]
                  [:div
                   (when-not @search
                     [re-com/h-box
                      :justify :center
                      :children [(if @loading-more?
                                   [re-com/throbber
                                    :size :small]
                                   [re-com/button
                                    :label "Load More"
                                    :on-click #(re-frame/dispatch [:load-more-videos])])]])]]])))

;; <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fspecialbooksbyspecialkids%2Fvideos%2F837204176381564%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>

(defn get-fb-video-link
  [video-id]
  (str "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fspecialbooksbyspecialkids%2Fvideos%2F" video-id "%2F&show_text=0"))

(defn video-view
  [video]
  (let [{:keys [title description id]} video
        [w h] (get-iframe-dims)]
    [:div.video-container
     [re-com/md-icon-button
      :class "back-button"
      :md-icon-name "zmdi-close"
      :on-click #(re-frame/dispatch [:close-video])]
     [re-com/v-box
      :align :center
      :class "video-view"
      :children [[re-com/title
                  :label title
                  :level :level1]
                 [re-com/label
                  :width "70%"
                  :label (str "\"" description "\"")]
                 [re-com/gap
                  :size "30px"]
                 [:iframe#video-frame
                  {:src (get-fb-video-link id)
                   :width (str w "px")
                   :height (str h "px")
                   :scrolling "no"
                   :frame-border "0"
                   :allow-transparency "true"
                   :allow-full-screen "true"}]
                 [:div "..."]]]]))

(.addEventListener
 js/window "resize"
 #(when-let [frame (.getElementById js/document "video-frame")]
    (let [[w h] (get-iframe-dims)]
      (aset frame "height" h)
      (aset frame "width"  w))))

(defn search-view
  [videos]
  [re-com/v-box
   :height "100%"
   :width "100%"
   :children [[search-bar]
              [re-com/line :size  "1px" :color "silver"]
              [search-results videos]]])

(defn main-panel []
  (let [videos (re-frame/subscribe [:videos])
        current-video (re-frame/subscribe [:current-video])]
    (fn []
      (cond
        @current-video      (video-view @current-video)
        (not-empty @videos) (search-view @videos)
        :else               [re-com/box
                             :height "100%"
                             :width "100%"
                             :justify :center
                             :align :center
                             :child [re-com/throbber
                                     :size :large]]))))
