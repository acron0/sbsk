(ns sbsk.shared.slider
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [reagent.core :as r]
            [sbsk.vars :refer [video-gap-px]]
            [sbsk.shared.data :refer [px]]))

(defn slider-control
  [class-name render-fn items num-items item-width]
  (r/create-class
   {:component-did-mount
    (fn [& _]
      (.slick (js/jQuery (str "." class-name)) #js {:slidesToShow num-items
                                                    :slidesToScroll num-items
                                                    :infinite false}))
    :component-did-update
    (fn [old-state new-state])
    :reagent-render
    (fn [class-name render-fn items num-items item-width]
      (let [gap-size video-gap-px
            width (- (* num-items (+ item-width gap-size)) gap-size)]
        [:div
         {:class class-name
          :style {:width (px width)}}
         (doall (for [item items]
                  [:div
                   {:style {:width (px item-width)}
                    :key (:id item)}
                   (render-fn item)]))])        )}))
