(ns sbsk.shared.slider
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [sbsk.shared.data :refer [px]]))

(defn slider-control
  [class-name render-fn items num-items item-width]
  (let [gap-size 2
        width (- (* num-items (+ item-width gap-size)) gap-size)]
    [re-com/h-box
     :class class-name
     :justify :start
     :width (px width)
     :children (interpose
                [re-com/gap :size (px gap-size)]
                (for [item items]
                  [re-com/box
                   :size (px item-width)
                   :child (render-fn item)]))]))
