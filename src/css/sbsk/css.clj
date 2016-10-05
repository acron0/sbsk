(ns sbsk.css
  (:require [garden.def :refer [defstyles]]
            [garden.units :refer [px em percent]]))

(def base-font "'Raleway', sans-serif")
(def thumb-scale 1.4)
(def thumb-hover-time "0.2s")

(defn transition
  [& args]
  (->> args
       (partition 2 )
       (map (fn [[attr time]] (str (name attr) " " time)))
       (clojure.string/join ", ")))

(defstyles screen
  [:#app
   {:overflow-y :scroll
    :position :absolute
    :top (px 98)
    :bottom (px 0)}]
  [:*
   {:font-family base-font}]
  [:body
   {:overflow :hidden}]
  [:.level1 {:font-family base-font
             :font-size (px 40)
             :letter-spacing (px 1)}]
  [:.level3 {:font-family base-font
             :font-size (px 20)}]
  [:.search-bar
   {:margin [[(px 10) (px 0)]]}
   [:input
    {:border :none
     :padding (px 0)
     :background-color 'transparent
     :border-radius (px 0)
     :outline :none
     :font-size (em 1.3)}]
   [:i
    {:font-size (em 2)
     :margin-bottom (em 0.1)
     :color "#555"}]]
  [:.search-results
   {:margin (em 1)}
   [:.video-thumb
    {:padding (em 1)}
    [:.thumb
     {:height (px (* thumb-scale 128))
      :width  (px (* thumb-scale 227))
      :border [[(px 1) "#bbb" 'solid]]
      :cursor :pointer
      :transition (transition :border thumb-hover-time
                              :box-shadow thumb-hover-time)}
     [:&:hover
      {:border [[(px 1) "#111" 'solid]]
       :box-shadow [[(px 4) (px 4) (px 8) "#888"]]}]
     [:img
      {:z-index -1
       :width (percent 100)
       :height (percent 100)}]]
    [:.title
     {:color "#666"
      :font-weight 'bold
      :white-space :nowrap
      :overflow :hidden
      :text-overflow :ellipsis}]
    [:.date
     {:font-size (em 0.85)}]]])
