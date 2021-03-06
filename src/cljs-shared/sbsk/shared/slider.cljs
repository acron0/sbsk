(ns sbsk.shared.slider
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [reagent.core :as r]
            [sbsk.vars :refer [video-gap-px
                               video-small-height]]
            [sbsk.shared.data :refer [px]]))

(defn init-slick
  [class-name num-items]
  (.slick (js/jQuery (str "." class-name)) #js {:slidesToShow num-items
                                                :slidesToScroll num-items
                                                :infinite false}))

(defn de-slick
  [class-name init?]
  (when-let [el (js/jQuery (str "." class-name))]
    (.slick el "unslick"))
  (reset! init? false))

(defn slider-control
  [class-name render-fn items num-items item-width]
  (let [init? (r/atom false)
        last-items (atom nil)
        last-num-items (atom nil)]
    (r/create-class
     {:component-did-mount
      (fn [& _]
        (when-not @init?
          (js/setTimeout #(init-slick class-name (or @last-num-items num-items)) 1000)
          (reset! init? true)))
      :component-did-update
      (fn [old-state new-state]
        (when-not @init?
          (js/setTimeout #(init-slick class-name (or @last-num-items num-items)) 1000)
          (reset! init? true)))
      :reagent-render
      (fn [class-name render-fn items num-items item-width]
        ;; do we have a new number to show?
        (when (not= @last-num-items num-items)
          (when @last-num-items
            (de-slick class-name init?))
          (reset! last-num-items num-items))
        ;; is there a change in the items?
        (when (and @init? (not= @last-items items))
          (when (and @last-items (not-empty @last-items))
            (de-slick class-name init?))
          (reset! last-items items))
        (let [gap-size video-gap-px
              width (- (* num-items (+ item-width gap-size)) gap-size)]
          [:div
           {:class (str class-name (when @init? " ready"))
            :style {:width (px width)
                    :height (px video-small-height)}}
           (doall (for [item items]
                    [:div
                     {:style {:width (px item-width)}
                      :key (:id item)}
                     (render-fn item)]))]))})))
