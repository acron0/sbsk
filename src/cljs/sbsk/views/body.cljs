(ns sbsk.views.body
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-frame.db :as re-frame-db]
            [re-com.core :as re-com]
            [clojure.string :as str]
            [sbsk.hiccup-help :refer [px hiccup->element]]
            [garden.core :refer [style]]))

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
(def video-img-div 4.663)
(def video-highlight-width (/ 900 video-img-div))
(def video-highlight-height (/ 600 video-img-div))
;;
(def video-small-width (/ 980 5))
(def video-small-height (/ 653 5))
(def video-medium-width (* 2 video-small-width))
(def video-medium-height (* 2 video-small-height))
(def video-large-width (* 3 video-small-width))
(def video-large-height (* 3 video-small-height))

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
                       ^{:key term}
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
     :child [:div.video-thumb
             {:style {:width "100%"
                      :height "100%"}}
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
                ^{:key (:id video)}
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
                          ^{:key (apply str (map :id row))}
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

(defn random-video-dimensions
  []
  (let [prop [[10 [video-small-width video-small-height]]
              [5  [video-medium-width video-medium-height]]
              [1  [video-large-width video-large-height]]]
        pick(rand-nth (range (apply + (map first prop))))]
    (loop [props prop
           total 0]
      (let [[x result] (first props)
            new-total (+ x total)]
        (if (< pick new-total)
          result
          (recur (rest props) new-total))))))

(defn video-packed
  "This is HICCUP, not SABLONO"
  [width height video]
  [:div.video-packed.video-thumb
   {:key (:id video)
    :style (style {:width (px width)
                   :height (px height)
                   :background-color "white" #_(rand-nth ["red"
                                                          "blue"
                                                          "green"
                                                          "yellow"
                                                          "magenta"
                                                          "orange"
                                                          "black"
                                                          "cyan"
                                                          "pink"])})}
   (let [trim 2]
     [:img {:src (:thumb video)
            :width (px (- width (* 2 trim)))
            :height (px (- height (* 2 trim)))
            :style (style {:margin (px trim)})}])])

(defn append-videos!
  [vpd-id isotope videos added-videos]
  (->> videos
       (filter (comp not @added-videos :id))
       (run!
        (fn [video]
          (let [[w h] (random-video-dimensions)
                video-el (.item (hiccup->element (video-packed w h video)) 0)
                vpd-el (.getElementById js/document vpd-id)]
            (.appendChild vpd-el video-el)
            (.appended isotope video-el)
            (swap! added-videos conj (:id video)))))))

(defn video-packed-display
  [videos]
  (let [isotope (atom nil)
        added-videos (atom #{})
        component-videos (atom nil)
        vpd-id (str (random-uuid))]
    (r/create-class
     {:component-did-mount
      (fn [& _]
        #_(println "VPD CDM" vpd-id (count @component-videos))
        (when-not @isotope
          (reset! isotope (js/Isotope. (.getElementById js/document vpd-id)
                                       #js {:itemSelector ".video-packed"
                                            :layoutMode "packery"
                                            :percentPosition false
                                            :packery #js {:gutter 0}})))
        (append-videos! vpd-id @isotope @component-videos added-videos))
      :component-did-update
      (fn [& _]
        #_(println "VPD CDU" vpd-id (count @component-videos))
        (when @isotope
          (append-videos! vpd-id @isotope @component-videos added-videos)))
      :reagent-render
      (fn [videos]
        (reset! component-videos videos)
        #_(println "VPD REN" vpd-id (count videos))
        (let [videos' (map #(assoc % :thumb-dimensions (random-video-dimensions)) videos)]
          [:div.video-packed-display
           {:id vpd-id}]))})))

(defn lower-body
  [videos]
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
                    [video-packed-display (get videos-by-month month)]])
                 [re-com/h-box
                  :class "load-more"
                  :justify :center
                  :width "100%"
                  :children [(if true #_@loading-more?
                                 #_[re-com/throbber
                                    :size :small]
                                 [re-com/button
                                  :label "Load More"
                                  :on-click #(re-frame/dispatch [:load-more-videos])])]]]]]))

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
