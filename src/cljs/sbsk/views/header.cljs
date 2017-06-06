(ns sbsk.views.header
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clojure.string :as str]
            [sbsk.vars :refer [small-content-width]]))

(def links {:home "http://www.specialbooksbyspecialkids.org/"
            :about "http://www.specialbooksbyspecialkids.org/about-us"
            :videos "#"
            :tour "http://www.specialbooksbyspecialkids.org/tour"
            :donate "http://www.specialbooksbyspecialkids.org/donate-1"
            :contact "http://www.specialbooksbyspecialkids.org/contact"
            :faq "http://www.specialbooksbyspecialkids.org/faq-1"})

(def title "Special Books by Special Kids")
(def logo "https://static.wixstatic.com/media/94bdf2_c51c2aff27f347dea7bd3a1535978330~mv2.jpg/v1/fill/w_246,h_258,al_c,q_80,usm_0.66_1.00_0.01/94bdf2_c51c2aff27f347dea7bd3a1535978330~mv2.jpg")

(defn menu-bar
  []
  (fn []
    [re-com/h-box
     :children [(doall
                 (for [[item address] links]
                   ^{:key (name item)}
                   [:a.clickable-string.menu-item {:href address}
                    (str/upper-case (name item))]))]]))

(defn menu-dropper
  []
  (let [open (r/atom false)]
    (fn []
      [re-com/v-box
       :align :center
       :children [[:span.clickable-string.menu-dropper
                   {:on-click #(swap! open not)}
                   ":: Menu ::"]
                  [re-com/v-box
                   :align :center
                   :justify :start
                   :class (str "menu-drop-down" (when @open " open"))
                   :children [(cons [:hr
                                     {:style {:width "100px"}
                                      :key "_thehr"}]
                                    (doall
                                     (for [[item address] links]
                                       ^{:key (name item)}
                                       [:a.clickable-string.menu-item {:href address}
                                        (str/upper-case (name item))])))]]]])))

(defn panel
  []
  (let [window-size (re-frame/subscribe [:window-size])]
    (fn []
      (let [[container menu] (if (<= (first @window-size) small-content-width)
                               [re-com/h-box menu-dropper]
                               [re-com/v-box menu-bar])]
        [re-com/v-box
         :class "header"
         :align :center
         :children [[container
                     :align :center
                     :width "100%"
                     :justify :start
                     :children [[re-com/box
                                 :class "header-image"
                                 :child [:img {:src logo}]]
                                [re-com/title
                                 :level :level1
                                 :label title]]]
                    [menu]]]))))
