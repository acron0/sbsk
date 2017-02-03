(ns sbsk.css
  (:require [garden.def :refer [defstyles]]
            [garden.units :refer [px em percent vw vh]]))

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
   {:overflow-y :auto
    :overflow-x :hidden
    :position :absolute
    :top (px 7)
    :width (percent 100)}]
  [:*
   {:font-family base-font}]
  [:body
   {:overflow :hidden}]
  [:.level1 {:font-family base-font
             :font-size (px 36)
             :letter-spacing (px 1)
             :color "#605E5E"}]
  [:.level3 {:font-family base-font
             :font-size (px 20)}]
  [:.loading
   {:position :absolute
    :bottom (px 0)
    :top (px 0)
    :left (px 0)
    :right (px 0)}]
  [:.header
   {:width (percent 100)
    :min-width (px 680)}
   [:img
    {:width (px 125)
     :height (px 128)}]
   [:.menu-item
    {:margin [[(em 0.8) (em 1)]]
     :font-size (px 18)
     :color "#A0A09F"}]]



  [:.search-bar
   {:margin [[(px 10) (px 0)]]}
   [:input
    {:border :none
     :padding (px 0)
     :background-color 'transparent
     :border-radius (px 0)
     :outline :none
     :width (percent 100)
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
     {;;:height (px (* thumb-scale 128))
      ;;:width  (px (* thumb-scale 227))
      :position :relative
      :border [[(px 1) "#bbb" 'solid]]
      :cursor :pointer
      :transition (transition :border thumb-hover-time
                              :box-shadow thumb-hover-time)}
     [:&:hover
      {:border [[(px 1) "#111" 'solid]]
       :box-shadow [[(px 4) (px 4) (px 8) "#888"]]}
      [:div.play-icon
       {:opacity "0.6"}]]
     [:img
      {:z-index -1
       :width (percent 100)
       :height (percent 100)}]
     [:div.play-icon
      {:width (percent 20)
       :height (percent 30)
       :margin :auto
       :position :absolute
       :right 0
       :top (percent 5)
       :background-image "url(https://upload.wikimedia.org/wikipedia/commons/d/d3/Play_font_awesome.svg)"
       :background-repeat "no-repeat"
       :opacity "0.3"
       :transition (transition :opacity thumb-hover-time)}]]
    [:.title
     {:color "#666"
      :font-weight 'bold
      :white-space :nowrap
      :overflow :hidden
      :text-overflow :ellipsis}]
    [:.date
     {:font-size (em 0.85)}]]]
  [:.back-button
   {:position :absolute
    :margin (em 0.2)}]
  [:.video-container
   {:width (percent 100)
    :height (percent 100)}]
  [:.video-view
   [:.level1
    {:font-size (em 1.6)}]
   [:.rc-label
    {:font-style :italic
     :letter-spacing (px 1)}]])
