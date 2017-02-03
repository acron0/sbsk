(ns sbsk.views
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            ;;
            [sbsk.views.header :as header]
            ;;
            [cljsjs.moment]))

(defn main-panel []
  (let [videos (re-frame/subscribe [:videos])
        current-video (re-frame/subscribe [:current-video])]
    (fn []
      [re-com/v-box
       :children [(header/panel)
                  (if (or
                       (not-empty (:all-videos @videos))
                       (not-empty (:search-results @videos))) [:span "search view"]
                      [re-com/box
                       :height "100%"
                       :width "100%"
                       :justify :center
                       :align :center
                       :child [re-com/throbber
                               :size :large]])]])))
