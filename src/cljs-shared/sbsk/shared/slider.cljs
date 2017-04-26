(ns sbsk.shared.slider
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [re-com.core :as re-com]
            [sbsk.vars :refer [video-gap-px]]
            [sbsk.shared.data :refer [px]]))

(defn get-slider
  [id]
  (.querySelector js/document (str "#" id " .rc-h-box")))

(defn ease-out
  [transition p]
  (- (double 1) (transition (- (double 1) p) )))

(defn lerp-fn
  [pos]
  (Math/pow 2 (* 8 (- pos 1))))

(defn animate-slider
  [slider start-pos end-pos lerp animating?]
  (fn [ts]
    (let [pos (+ start-pos (* (- end-pos start-pos) (ease-out lerp-fn (min lerp 1.0))))]
      (set! (.-scrollLeft slider) pos))
    (if (< lerp 1.0)
      (.requestAnimationFrame
       js/window
       (animate-slider slider start-pos end-pos (+ lerp (/ 60 1000)) animating?))
      (reset! animating? false))))

(defn bump-slider
  [pos-fn uuid current-pos num-items item-width animating?]
  (when-not (or @animating?
                (> (pos-fn @current-pos) num-items)
                (< (pos-fn @current-pos) 0))
    (when-let [slider (get-slider uuid)]
      (let [old (* @current-pos (+ item-width video-gap-px))
            _ (swap! current-pos pos-fn)
            new (* @current-pos (+ item-width video-gap-px))]
        (reset! animating? true)
        (.requestAnimationFrame
         js/window
         (animate-slider slider old new 0 animating?))))))

(defn bump-right
  [uuid current-pos num-items item-width animating?]
  (fn []
    (bump-slider inc uuid current-pos num-items item-width animating?)))

(defn bump-left
  [uuid current-pos num-items item-width animating?]
  (fn []
    (bump-slider dec uuid current-pos num-items item-width animating?)))

(defn slider-control
  [class-name render-fn items num-items item-width]
  (let [position (r/atom 0)
        animating? (r/atom false)]
    (fn [class-name render-fn items num-items item-width]
      (let [gap-size video-gap-px
            width (- (* num-items (+ item-width gap-size)) gap-size)
            uuid (str "slider-" (random-uuid))]
        (println (>= @position num-items))
        [:div
         {:class (str "slider-control " class-name)
          :id (str uuid)}
         [re-com/h-box
          :justify :start
          :width (px width)
          :children (interpose
                     [re-com/gap :size (px gap-size)]
                     (for [item items]
                       [re-com/box
                        :size (px item-width)
                        :child (render-fn item)]))]
         [:div
          {:class (str "slider-arrow slider-arrow-left" (when (zero? @position) " hide"))
           :on-mouse-down (bump-left uuid position
                                     num-items item-width animating?)}]
         [:div
          {:class (str "slider-arrow slider-arrow-right" (when (>= @position num-items) " hide"))
           :on-mouse-down (bump-right uuid position
                                      num-items item-width animating?)}]]))))
