(ns sbsk.css
  (:require [garden.def :refer [defstyles]]
            [garden.color :as c]
            [garden.units :refer [px em percent vw vh]]))

(def base-font "'Raleway', sans-serif")
(def thumb-scale 1.4)
(def thumb-hover-time "0.2s")
(def content-width 980)
(def vp-content-width 720)
(def title-font-colour "#605E5E")
(def menu-item-colour "#A0A09F")
(def header-bar-bg-colour "#605E5E")

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
  [:.level1 {:font-family base-font
             :font-size (px 36)
             :letter-spacing (px 1)
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

  ;; Header
  [:.header
   {:width (percent 100)
    :min-width (px 680)}
   [:img
    {:width (px 125)
     :height (px 128)}]
   [:.menu-item
    {:margin [[(em 0.8) (em 1)]]
     :font-size (px 18)
     :color menu-item-colour
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
    :background-color "rgba(33, 33, 33, 0.6)"
    :color 'white
    :font-size (em 1.25)
    :overflow-y :scroll}
   [:.background
    {:position :fixed
     :z-index -1
     :top 0
     :left 0
     :bottom 0
     :right 0
     :margin [[0 (percent 5)]]
     :background-color "rgba(66, 66, 66, 0.95)"}]
   [:.content
    {:margin [[0 (percent 5)]]
     :height (percent 100)}
    [:.inner-content
     {:display :block
      :top 0
      :margin :auto
      :height (percent 100)
      :width (px vp-content-width)}
     [:.level1
      {:color 'white
       :font-size (px 20)
       :font-weight :bold}]
     [:.close-button
      {:position :absolute
       :top 0
       :left (percent 5)}]
     [:.video-info
      {:margin [[(px 20) (px 60)]]
       :line-height (em 1.3)}]
     [:.fb-header
      {:padding-top (px 20)}
      [:.fb-info
       {:margin-left (px 10)
        :font-size (em 0.8)}
       [:.level1
        {:font-size (em 1.1)}]]]]]]

  ;; Content body
  [:.content-body
   {:width (percent 100)}
   [:.upper :.lower
    {:margin-bottom (em 3)}]
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
     [:.search-button
      {:color 'white
       :background-color (c/darken header-bar-bg-colour 15)
       :border-radius 0}
      [:.rc-md-icon-button
       {:margin :auto
        :display :block}]
      [:&:hover
       [:i {:color 'silver}]]]
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
    {:margin (em 1)}]]

  ;; General
  [:.clickable-string
   {:cursor :pointer
    :transition (transition :color "0.4s")}
   [:&:hover
    {:color "#CCC"}]]
  [:.video-thumb
   [:img {:cursor :pointer
          :transition (transition :box-shadow thumb-hover-time
                                  :opacity thumb-hover-time)}
    [:&:hover
     {:box-shadow [[(px 4) (px 4) (px 8) "#888"]]
      :opacity 0.9}]]]
  [:.noscroll
   {:overflow-y :hidden}])
