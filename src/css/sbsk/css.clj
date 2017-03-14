(ns sbsk.css
  (:require [garden.def :refer [defstyles]]
            [garden.color :as c]
            [garden.units :refer [px em percent vw vh]]
            [sbsk.vars :refer :all]))

(def base-font "din-light, 'Raleway', sans-serif")
(def thumb-scale 1.4)
(def thumb-hover-time "0.2s")
(def title-font-colour "#605E5E")
(def menu-item-colour "#A0A09F")
(def header-bar-bg-colour "#605E5E")
(def blue-highlight "#2196f3")

(defn transition
  [& args]
  (->> args
       (partition 2 )
       (map (fn [[attr time]] (str (name attr) " " time)))
       (clojure.string/join ", ")))

(defstyles screen
  ["@font-face"
   {:font-family "din-light"
    :src "url(../../fonts/din-light.ttf) format(\"truetype\")"}]
  [:#app
   {:overflow-y :auto
    :overflow-x :hidden
    :width (percent 100)}]
  [:*
   {:font-family base-font}]
  [:.level1 {:font-family base-font
             :margin-top (px 5)
             :letter-spacing (px -1)
             :color title-font-colour}]
  [:.level3 {:font-family base-font
             :font-size (px 14)
             :font-weight 'bold
             :color title-font-colour}]
  [:.level2 {:font-family base-font
             :font-size (px 14)
             :color 'white
             :padding [[(em 0) (em 0.4) (em 0.2) (em 0.4)]]
             :background-color header-bar-bg-colour}]
  [:a
   {:text-decoration :none}]

  ;; Header
  [:.header
   {:width (percent 100)
    :margin-top (px 7)
    :margin-bottom (px 10)
    :min-width (px 680)}
   [:img
    {:width (px 125)
     :height (px 128)}]
   [:.menu-item
    {:margin [[(em 0.7) (em 0.9)]]
     :font-size (px 18)
     :color menu-item-colour
     :letter-spacing (px -0.5)
     :text-decoration :none}]]

  ;; Footer
  [:.footer
   {:background-color "rgba(16, 63, 84, 1)"
    :color 'white
    :padding (em 1)
    :font-size (em 1.25)}
   [:.content
    {:width (px content-width)
     :display :block
     :margin :auto}]
   [:hr {:margin [[(em 1) (em 2) (em 3) (em 4)]]}]
   [:.rc-h-box
    {:width (percent 100)}
    [:div.license :div.donations {:width (percent 100)
                                  :padding (em 2)}]
    [:div.license {:text-align :justify}]
    [:div.donations {:text-align :center}
     [:div:first-child {:margin-bottom (em 1)}]
     [:iframe {:margin-left (px 50)}]]]
   [:.social-links
    [:img
     {:width (px 42)
      :height (px 42)
      :margin [[(em 0) (em 0.6)]]}]]]

  ;; Video player
  [:.video-player
   {:position :fixed
    :top 0
    :bottom 0
    :left 0
    :right 0
    :background-color "rgba(45, 45, 45, 0.93)"
    :color 'white
    :font-size (em 1.25)
    :overflow :hidden}
   [:.engagements
    {:color 'white}]
   [:.close-button
    {:position :absolute
     :top 0
     :left 0
     :background-color 'transparent
     :font-size (em 2)}]
   [:.content
    {:width (percent 100)
     :height (percent 100)
     :overflow-y :scroll}]
   [:.inner-content
    {:margin :auto
     :display :block
     :height (percent 100)
     :width (px vp-content-width)}
    [:.level1
     {:color 'white
      :font-size (px 20)
      :font-weight :bold}]
    [:.video-info
     {:margin [[(px 20) (px 60)]]
      :line-height (em 1.3)}]
    [:.fb-header
     {:padding-top (px 20)}
     [:.fb-info
      {:margin-left (px 10)
       :font-size (em 0.8)}
      [:.level1
       {:font-size (em 1.1)}]]]
    [:.taglink
     [:&:hover
      {:color blue-highlight}]]
    [:.now-playing-video-panel
     {:height (percent 100)
      :position :relative
      :font-size (em 0.8)
      :text-align :center}
     [:span
      {:position :absolute
       :bottom 0
       :left 0
       :line-height (em 2)
       :width (percent 100)
       :background-color "rgba(16, 63, 84, 0.92)"}]]]]

  ;; Content body
  [:.content-body
   {:width (percent 100)}
   [:.upper :.lower
    {:margin-bottom (px 20)}]
   [:.content
    {:width (px content-width)
     :display :block
     :margin :auto}
    [:.search-nav
     ["div:nth-child(3)"
      {:margin-top (px 15)}]
     [:input
      {:height (px 32)
       :border 0
       :padding 0
       :border-radius (px 0)
       :outline :none
       :background-color header-bar-bg-colour
       :color 'white
       :padding-left (em 0.75)}]
     [:.level2
      {:width (percent 100)}]]]
   [:.popular-search-term
    {:font-size (em 0.95)
     :color (c/darken menu-item-colour 10)
     :line-height 1.3
     :padding 0
     :margin 0
     :cursor :pointer}]
   [:.video-packed-display]
   [:.video-packed]
   [:.load-more
    {:margin (em 1)}]
   [:.lower-body
    [:div.level2
     {:width (percent 99)}]]
   [:.rc-md-icon-button
    {:color 'white
     :background-color (c/darken header-bar-bg-colour 15)
     :border-radius 0
     :width (px 32)
     :height (px 32)
     :margin :auto
     :display :block}
    [:i
     {:margin-top (px 4)}]
    [:&:hover
     [:i {:color 'silver}]]]]

  ;; General
  [:.clickable-string
   {:cursor :pointer
    :transition (transition :color "0.4s")}
   [:&:hover
    {:color "#CCC"}]]
  [:.video-panel :.playlist-panel
   {:background-color 'white
    :position :relative}
   [:img {:cursor :pointer
          :transition (transition :box-shadow thumb-hover-time
                                  :opacity thumb-hover-time)}
    [:&:hover
     {:box-shadow [[(px 0) (px 0) (px 8) "#888"]]
      :opacity 0.9}]]
   [:.video-panel-overlay :.playlist-panel-overlay
    {:position :absolute
     :top 0
     :left 0
     :width (percent 100)
     :height (percent 100)
     :pointer-events :none}]]
  [:.video-slider :.playlist-slider
   {:overflow :hidden}]
  [:.noscroll
   {:overflow-y :hidden}])
