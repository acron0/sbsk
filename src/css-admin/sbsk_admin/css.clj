(ns sbsk-admin.css
  (:require [garden.def :refer [defstyles]]
            [garden.color :as c]
            [garden.units :refer [px em percent vw vh]]))

(def base-font "'Raleway', sans-serif")

(defn transition
  [& args]
  (->> args
       (partition 2 )
       (map (fn [[attr time]] (str (name attr) " " time)))
       (clojure.string/join ", ")))

(defstyles screen
  [:html {:overflow-x :hidden}]
  [:#app]
  [:* {:font-family base-font}]
  [:.actions
   {:margin (em 1)}]
  [:.current-video-edit
   {:padding (em 1)}]
  [:.rc-typeahead-suggestions-container
   {:margin-top (px 34)}])
