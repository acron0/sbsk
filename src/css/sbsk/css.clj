(ns sbsk.css
  (:require [garden.def :refer [defstyles]]
            [garden.units :refer [px em percent]]))

(def base-font "'Raleway', sans-serif")

(defstyles screen
  [:*
   {:font-family base-font}]
  [:body {:color "red"}]
  [:.level1 {:font-family base-font
             :font-size (px 40)
             :letter-spacing (px 1)}])
