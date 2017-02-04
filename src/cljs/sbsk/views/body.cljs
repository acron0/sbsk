(ns sbsk.views.body
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clojure.string :as str]
            [sbsk.hiccup-help :refer [px]]))

(def popular-search-terms
  ["Autism"
   "Down Syndrome"
   "Cerebral Palsy"
   "New Diagnosis"
   "Adult"
   "Child"
   "Lessons"
   "Siblings"
   "Friends"
   "Relationships"
   "Girls"
   "Boys"])

(def desc-title-len 24)
(def video-highlight-div 4.663)
(def video-highlight-width (/ 900 video-highlight-div))
(def video-highlight-height (/ 600 video-highlight-div))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn search-nav
  [search-terms]
  [re-com/v-box
   :class "search-nav"
   :height "100%"
   :width (px 180)
   :children (concat
              [[re-com/title
                :level :level2
                :label "Search Videos"]
               [re-com/title
                :level :level3
                :label "Popular Search Terms"]]
              (doall (for [term search-terms]
                       [:div.clickable-string.popular-search-term
                        {:on-click #(println "Go to search term:" term)}
                        term])))])

(defn video-highlight
  [video]
  (let [w (px video-highlight-width)
        h (px video-highlight-height)]
    [re-com/box
     :class "video-highlight"
     :width w
     :height h
     :child [:div
             {:style {:width "100%"
                      :height "100%"
                      :background-color 'red}}
             [:img {:src (:thumb video)
                    :width w
                    :height h}]]]))

(defn video-highlight-row
  [videos height gap]
  [re-com/h-box
   :width "100%"
   :height height
   :gap gap
   :children (doall
              (for [video videos]
                (video-highlight video)))])

(defn video-highlights
  [videos]
  (let [noof-rows 2
        vids-per-row (/ (count videos) noof-rows)
        rows (partition vids-per-row videos)
        hperc (str (/ 100 noof-rows) "%")
        gap (px 5)]
    [re-com/v-box
     :size "auto"
     :gap gap
     :children (concat [[re-com/title
                         :level :level2
                         :label "Latest Videos"]]
                       (doall
                        (for [row rows]
                          (video-highlight-row row hperc gap))))]))

(defn upper-body
  [videos]
  [re-com/h-box
   :class "upper"
   :gap (px 10)
   :children [(search-nav popular-search-terms)
              (video-highlights videos)]])

(defn clip-string
  [s]
  (let [end (.indexOf s " " desc-title-len)]
    (str (subs s 0 end) "...")))

(defn videos-by-month
  [videos]
  (let [month (fn [video] (.format (js/moment
                                    (:created-at video)
                                    "YYYYMMDD'T'HHmmss'Z'") "MMMM, YYYY"))]
    (group-by month videos)))

(defn lower-body
  [videos]
  (println ">>>>>" videos)
  (let [videos-by-month (videos-by-month videos)]
    [re-com/v-box
     :class "lower"
     :width "100%"
     :children [[re-com/title
                 :level :level2
                 :label "All Videos"]
                [:div.pure-g
                 (for [month (keys videos-by-month)]
                   ^{:key month}
                   [:div
                    {:style {:width "100%"}}
                    [re-com/title
                     :level :level3
                     :label month]
                    (for [video (get videos-by-month month)]
                      ^{:key (:id video)}
                      [:div.pure-u-1.pure-u-md-1-2.pure-u-lg-1-3
                       [re-com/v-box
                        :class "video-thumb"
                        :children [[:div.title
                                    (or (:title video) (clip-string (:description video)))]
                                   [:div.thumb
                                    {:on-click #(re-frame/dispatch [:open-video (:id video) :videos])}
                                    [:img
                                     {:src (:thumb video)}]
                                    [:div.play-icon]]
                                   [:div.date
                                    (.calendar (js/moment
                                                (:created-at video)
                                                "YYYYMMDD'T'HHmmss'Z'"))]]]])])]]]))

(defn panel []
  (let [videos (re-frame/subscribe [:videos])
        noof-highlight-videos 8]
    (fn []
      (let [search-results (not-empty (:search-results @videos))
            all-videos (not-empty (:all-videos @videos))]
        [:div.content-body
         [:div.content
          (if (or search-results all-videos)
            [re-com/v-box
             :children [(upper-body (take noof-highlight-videos
                                          (:all-videos @videos)))
                        (lower-body (drop noof-highlight-videos
                                          (or search-results all-videos)))]]
            [re-com/box
             :height "100%"
             :width "100%"
             :style {:min-height (px 500)}
             :justify :center
             :align :center
             :child [re-com/throbber
                     :size :large]])]]))))
