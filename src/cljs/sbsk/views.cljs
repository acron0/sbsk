(ns sbsk.views
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [cljsjs.moment]))

(def timeout (atom nil))

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
  (let [search (re-frame/subscribe [:search])]
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
                                   (get-in video [:fields :title])]
                                  [:div.thumb
                                   [:img
                                    {:src (get-in video [:fields :thumb])}]]
                                  [:div.date
                                   (.calendar (js/moment (get-in video [:fields :created_date])))]]]])]]])))

(defn main-panel []
  (let [videos (re-frame/subscribe [:videos])]
    (fn []
      (if (not-empty @videos)
        [re-com/v-box
         :height "100%"
         :children [[search-bar]
                    [re-com/line :size  "1px" :color "silver"]
                    [search-results @videos]]]
        [re-com/v-box
         :height "100%"
         :children [[re-com/box
                     :child [:i {:class "zmdi zmdi-hc-fw zmdi-cog"}]]]]))))
