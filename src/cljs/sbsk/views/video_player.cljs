(ns sbsk.views.video-player
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clojure.string :as str]))

(defn fb-header
  [video]
  (re-com/h-box
   :children [[:img {:src "img/fb.png"}]]))

(defn panel
  [video]
  [re-com/box
   :class "video-player"
   :child [re-com/box
           :class "content"
           :children [(fb-header video)]]])
