(ns sbsk.views.header
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clojure.string :as str]))

(defn menu-bar
  []
  (let [links {:home "http://www.specialbooksbyspecialkids.org/"
               :about "http://www.specialbooksbyspecialkids.org/about-us"
               :videos "#"
               :tour "http://www.specialbooksbyspecialkids.org/tour"
               :donate "http://www.specialbooksbyspecialkids.org/donate-1"
               :contact "http://www.specialbooksbyspecialkids.org/contact"
               :faq "http://www.specialbooksbyspecialkids.org/faq-1"}]
    [re-com/h-box
     :children [(doall
                 (for [[item address] links]
                   ^{:key (name item)}
                   [:a.clickable-string.menu-item {:href address}
                    (str/upper-case (name item))]))]]))

(defn panel
  []
  [re-com/v-box
   :class "header"
   :align :center
   :children [[:img {:src "https://static.wixstatic.com/media/94bdf2_c51c2aff27f347dea7bd3a1535978330~mv2.jpg/v1/fill/w_246,h_258,al_c,q_80,usm_0.66_1.00_0.01/94bdf2_c51c2aff27f347dea7bd3a1535978330~mv2.jpg"}]
              [re-com/title
               :level :level1
               :style {:margin-top 0}
               :label "Special Books by Special Kids"]
              (menu-bar)]])
