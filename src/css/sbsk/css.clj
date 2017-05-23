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
    :overflow :hidden
    :z-index 2}
   [:a.donate-button
    {:height (px 27)
     :margin-right (px 4)
     :background-color "#4267b2"
     :border "1px solid #4267b2"
     :color 'white
     :display :block
     :border-radius (px 4)
     :padding [[(px 0) (px 6)]]}
    [:&:hover
     {:background-color "#365899"
      :border "1px solid #365899"}]
    [:&:visited
     {:color 'white}]
    [:span
     {:font-family "Helvetica, Arial, sans-serif"
      :font-weight :bold
      :font-size (px 13)
      :vertical-align :middle
      :line-height (px 26)
      :display :inline-block
      :pointer-events :none}]]
   [:.engagements
    {:color 'white}]
   [:.close-button
    {:position :absolute
     :top 0
     :left 0
     :background-color 'transparent
     :font-size (em 2)}]
   [:.prev-next-buttons]
   [:.content
    {:width (percent 100)
     :height (percent 100)
     :overflow-y :scroll}]
   [:.inner-content
    {:margin :auto
     :display :block
     :height (percent 100)
     :width (px (double (vp-content-width 1024)))}
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
     {:font-size (em 0.8)}
     [:&:hover
      {:color blue-highlight}]]
    [:.now-playing-video-panel
     {:height (percent 100)
      :margin-top (px -10)
      :padding-top (px 10)
      :font-size (px 14)}]
    [:.now-playing-video-panel.current
     {:font-size (px 16)
      :background-color "rgba(16, 63, 84, 0.92)"}]]]

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
     [:.search-nav-inner
      {:height "100%"
       :position :relative}
      [:.search-nav-typeahead
       {:position :absolute
        :width (percent 100)
        :height (px 0)
        :overflow :hidden
        :transition (transition :height "0.5s")}
       [:.search-nav-typeahead-content
        {:color 'white
         :padding-top (em 1)
         :font-style :italic
         :position :absolute
         :width (percent 100)
         :height (percent 100)}]
       [:.search-nav-typeahead-bg
        {:background-color "rgba(45, 45, 45, 1.0)"
         :position :absolute
         :width (percent 100)
         :height (percent 100)}]
       [:.search-nav-typeahead-tag-list
        {:padding-left (em 1)
         :padding-top (em 0.5)}
        [:.tag-list-item
         [:span
          {:font-style :normal
           :line-height (em 2)
           :color "#222"
           :padding [[(px 6) (px 4) (px 4) (px 4)]]
           :background-color 'silver
           :border-radius (px 3)
           :font-size (px 11)
           :cursor :pointer}]]]]]
     [:input
      {:height (px 32)
       :border 0
       :padding 0
       :border-radius (px 0)
       :outline :none
       :background-color header-bar-bg-colour
       :color 'white
       :padding-left (em 0.75)}]
     ["*::-webkit-input-placeholder"
      {:color 'silver}]
     ["*:-moz-placeholder"
      {:color 'silver}]
     ["*::-moz-placeholder"
      {:color 'silver}]
     ["*:-ms-input-placeholder"
      {:color 'silver}]
     [:.level2
      {:width (percent 100)}]]]
   [:.popular-search-term
    {:font-size (em 0.95)
     :color (c/darken menu-item-colour 10)
     :line-height 1.3
     :padding 0
     :margin 0
     :cursor :pointer}]
   [:.search-results-title
    {:z-index 1
     :margin-bottom (px -1)}]
   [:.video-packed-display]
   [:.video-packed
    [:&:hover
     [:.video-packed-panel-overlay-small
      {:top (px 0)}]
     [:.video-packed-panel-overlay-medium
      {:top (px (/ video-medium-height 2))}]
     [:.video-packed-panel-overlay-large
      {:top (px (/ video-large-height 2))}]]
    [:.video-packed-panel-overlay-small
     {:top (px video-small-height)}]
    [:.video-packed-panel-overlay-medium
     {:top (px video-medium-height)}]
    [:.video-packed-panel-overlay-large
     {:top (px video-large-height)}]]
   [:.load-more
    {:margin (em 1)
     :letter-spacing :initial}]
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
    :position :relative
    :overflow :hidden}
   [:img {:cursor :pointer
          :transition (transition :box-shadow thumb-hover-time
                                  :opacity thumb-hover-time)}
    [:&:hover
     {:box-shadow [[(px 0) (px 0) (px 8) "#888"]]
      :opacity 0.9}]]
   [:&:hover
    [:.video-panel-overlay :.playlist-panel-overlay
     {:top 0}]]
   [:.video-panel-overlay :.playlist-panel-overlay
    {:position :absolute
     :padding-top (px 10)
     :top (px (- video-small-height 32))
     :left 0
     :width (percent 100)
     :height (px video-small-height)
     :cursor :pointer
     :pointer-events :none
     :color 'white
     :text-align :center
     :background-color "rgba(45, 45, 45, 0.7)"
     :transition (transition :top "0.5s")
     :letter-spacing :initial}
    [:p
     {:padding (px 10)}]]]
  [:.video-slider :.playlist-slider :.further-viewing-slider
   {:overflow :hidden}
   [:&.ready]
   [:button
    {:height (percent 100)
     :width (px 40)
     :border :none
     :background-repeat :no-repeat
     :background-color "rgba(255, 255, 255, 0.3)"
     :font-size 0
     :opacity 0.2
     :top (px 0)
     :position :absolute
     :transition (transition
                  :background-color thumb-hover-time
                  :opacity thumb-hover-time)
     :cursor :pointer}
    [:&.slick-arrow
     [:&.slick-next
      {:right (px 0)
       :background-image "url(../../img/chev_r.svg)"
       :background-position [[(px 6)
                              (px (/ (- video-small-height (/ video-small-height 3)) 2))]]}]
     [:&.slick-prev
      {:z-index 1
       :background-image "url(../../img/chev_l.svg)"
       :background-position [[(px -6)
                              (px (/ (- video-small-height (/ video-small-height 3)) 2))]]}]]
    [:&:hover
     {:opacity 0.6
      :background-color "rgba(255, 255, 255, 0.6)"}]
    [:&:focus
     {:outline 0}]]]
  [:.noscroll
   {:overflow-y :hidden}])
