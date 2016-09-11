(ns sbsk.views
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]))

(defn title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div])))

(defn main-panel []
  (fn []
    [re-com/v-box
     :height "100%"
     :children [[title]]]))
