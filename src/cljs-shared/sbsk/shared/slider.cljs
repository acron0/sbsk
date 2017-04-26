(ns sbsk.shared.slider
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [sbsk.vars :refer [video-gap-px]]
            [sbsk.shared.data :refer [px]]))

(defn slider-control
  [class-name render-fn items num-items item-width]
  (let [gap-size video-gap-px
        width (- (* num-items (+ item-width gap-size)) gap-size)]
    [:div
     {:class class-name
      :style {:width (px width)}}
     (doall (for [item items]
              [:div
               {:style {:width (px item-width)}
                :key (:id item)}
               (render-fn item)]))]))
