(ns sbsk.views
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            ;;
            [sbsk.views.header :as header]
            [sbsk.views.footer :as footer]
            [sbsk.views.body :as body]
            [sbsk.views.video-player :as video-player]
            ;;
            [cljsjs.moment]))

(defn main-panel []
  (let [current-video (re-frame/subscribe [:current-video])]
    (fn []
      [:div [re-com/v-box
             :children [[header/panel]
                        [body/panel]
                        [footer/panel]]]
       (when @current-video
         [video-player/panel @current-video])])))
