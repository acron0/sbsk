(ns sbsk.views.body
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-frame.db :as re-frame-db]
            [re-com.core :as re-com]
            [clojure.string :as str]
            [goog.string :as gstr]
            [sbsk.hiccup-help :refer [px hiccup->element]]
            [garden.core :refer [style]]
            [sbsk.shared.time :as time]
            [sbsk.shared.video :as video]
            [sbsk.shared.playlist :as playlist]
            [sbsk.vars :refer [video-small-height
                               video-small-width
                               video-medium-width
                               video-medium-height
                               video-large-width
                               video-large-height
                               search-typeahead-height
                               video-slider-visible
                               tiny-content-width]]
            [cljsjs.smooth-scroll]))

(def search-input-id "search-nav-input")
(defn search-input-element [] (.getElementById js/document search-input-id))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn video-overlay
  [video size]
  (let [text (case size
               :small (video/get-short-description video 108)
               :medium (video/get-description video 256)
               :large (video/get-description video 512))]
    [:div
     [:span (video/get-title video)]
     [:p [:span text]]]))

(defn small-video-date-overlay
  [video]
  [:div
   [:span (time/as-moment-short-date (:created-at video))]
   [:p
    [:span (video/get-title video)]
    [:br] [:br]
    [:span (video/get-short-description video 64)]]])

(defn dispatch-search
  ([s]
   (let [cleaned (loop [v (gstr/trim s)]
                   (if (gstr/endsWith v ",")
                     (recur (.slice v 0 -1))
                     v))]
     (re-frame/dispatch [:search cleaned])))
  ([]
   (dispatch-search (.-value (search-input-element)))))

(defn dispatch-tag-search
  ([s]
   (re-frame/dispatch [:tag-search (gstr/trim s)])))

(defn open-video
  [video]
  (re-frame/dispatch [:open-video (:id video)]))

(defn last-search-segment
  [v]
  (let [ci (.indexOf v ",")]
    (if (= -1 ci)
      v
      (.substring v (inc ci)))))

(defn append-tag
  [v tag]
  ;;erase everything up to comma
  (let [suffix ", "
        ci (.lastIndexOf v ",")]
    (if (= -1 ci)
      (str tag suffix)
      (str (.substring v 0 (inc ci)) " " tag suffix))))

(defn typeahead-tag
  [tag]
  [:div.tag-list-item
   [:span
    {:on-click #(let [el (search-input-element)
                      v (.-value el)
                      new-v (append-tag v tag)]
                  (set! (.-value el) new-v)
                  (.focus el))}
    tag]])

(defn search-nav
  [search-terms alignment]
  (let [search-input (r/atom nil)
        typeahead-results (re-frame/subscribe [:typeahead-results])]
    (fn [search-terms]
      [re-com/v-box
       :class "search-nav"
       :align alignment
       :width (if (= alignment :center) "100%" (px (- video-small-width 16)))
       :children [[re-com/h-box
                   :align :stretch
                   :children [[re-com/box
                               :size "auto"
                               :child [:form#search-nav-form
                                       {:autoComplete "off"
                                        :on-submit (fn [e]
                                                     (reset! search-input nil)
                                                     (dispatch-search)
                                                     (.preventDefault e))}
                                       [:input#search-nav-input
                                        {:placeholder "Search Videos"
                                         :autoComplete "off"
                                         :on-change (fn [e]
                                                      (let [s (.. e -target -value)]
                                                        (-> s
                                                            (last-search-segment)
                                                            (dispatch-tag-search))
                                                        (reset! search-input s)))}]]]
                              [re-com/box
                               :size "32px"
                               :style {:z-index 1}
                               :child [re-com/md-icon-button
                                       :md-icon-name "zmdi-search"
                                       :on-click (fn [e]
                                                   (reset! search-input nil)
                                                   (dispatch-search)
                                                   (.preventDefault e))]]]]
                  [:div.search-nav-inner
                   (let [showing? (not (clojure.string/blank? @search-input))]
                     [:div.search-nav-typeahead
                      {:style {:height (if showing?
                                         (px search-typeahead-height)
                                         0)}}
                      [:div.search-nav-typeahead-bg]
                      (when showing?
                        [re-com/v-box
                         :align :center
                         :class "search-nav-typeahead-content"
                         :children (if @typeahead-results
                                     (if (empty? @typeahead-results)
                                       [[re-com/label :label "No tags found"]]
                                       [[re-com/label :label "Try using these tags:"]
                                        [re-com/gap :size "5px"]
                                        [re-com/v-box
                                         :class "search-nav-typeahead-tag-list"
                                         :width "100%"
                                         :children
                                         (doall
                                          (for [tag @typeahead-results]
                                            (typeahead-tag tag)))]])
                                     [[re-com/throbber]])
                         ])])
                   [re-com/title
                    :level :level3
                    :label "Popular Search Terms"
                    :style {:margin-bottom (px 15)}]
                   (doall (for [term search-terms]
                            ^{:key term}
                            [:div.clickable-string.popular-search-term
                             {:on-click (fn [_]
                                          (set! (.-value (search-input-element)) term)
                                          (dispatch-search term))}
                             term]))]]])))

(defn latest-videos-slider
  [videos num-videos]
  [re-com/v-box
   :gap "0px"
   :children
   [[re-com/title
     :level :level2
     :label "Latest Videos"]
    (video/video-slider (take 8 videos) num-videos {:overlay-fn small-video-date-overlay})]])

(defn playlist-overlay
  [playlist]
  [:div
   [:span (:title playlist)]
   [:p [:span (:short-description playlist)]]])

(defn playlist-slider
  [num-videos]
  (let [playlists (re-frame/subscribe [:playlists])]
    (fn [num-videos]
      [re-com/v-box
       :gap "0px"
       :children
       [[re-com/title
         :level :level2
         :label "Playlists"]
        (playlist/playlist-slider @playlists num-videos {:overlay-fn playlist-overlay})]])))

(defn video-highlights
  [videos alignment]
  (let [window-size (re-frame/subscribe [:window-size])]
    (fn [videos]
      (let [[w] @window-size
            num-videos (video-slider-visible w)]
        [re-com/v-box
         :size "auto"
         :gap "20px"
         :align alignment
         :style {:flex "0 0 auto"}
         :children
         [(latest-videos-slider videos num-videos)
          [playlist-slider num-videos]]]))))

(defn upper-body
  [videos popular-search-terms]
  (let [window-size (re-frame/subscribe [:window-size])]
    (fn [videos popular-search-terms]
      (let [[container children]
            (if (<= (first @window-size) tiny-content-width)
              [re-com/v-box [[video-highlights videos :center]
                             [search-nav popular-search-terms :center]]]
              [re-com/h-box [[search-nav popular-search-terms :start]
                             [video-highlights videos :start]]])]
        [container
         :class "upper"
         :justify :center
         :gap (px 10)
         :children children]))))

(defn random-video-dimensions
  [window-width]
  (let [prop [[7
               [video-small-width video-small-height :small]]
              [(if (< window-width video-medium-width) 0 5)
               [video-medium-width video-medium-height :medium]]
              [(if (< window-width video-large-width) 0 1)
               [video-large-width video-large-height :large]]]
        pick (rand-nth (range (apply + (map first prop))))]
    (loop [props prop
           total 0]
      (let [[x result] (first props)
            new-total (+ x total)]
        (if (< pick new-total)
          result
          (recur (rest props) new-total))))))

(defn video-packed
  "This is HICCUP, not SABLONO"
  [size width height video]
  (let [trim 1]
    [:div.video-packed.video-panel
     {:key (:id video)
      :style (style {:width (px width)
                     :height (px height)
                     :background-color "white" })}
     [:img {:src (video/get-thumb video)
            :width (px (- width (* 2 trim)))
            :height (px (- height (* 2 trim)))
            :style (style {:margin (px trim)})}]
     [:div
      {:class (str "video-panel-overlay video-packed-panel-overlay-" (name size))
       :style (style {:width (px (- width (* 2 trim)))
                      :height (px (- height (* 2 trim)))
                      :margin (px trim)})}
      (video-overlay video size)]]))

(def isotope-config
  #js {:itemSelector ".video-packed"
       :layoutMode "packery"
       :percentPosition false
       :packery #js {:gutter 0}})

(defn init-isotope!
  [vpd-id isotope isotope-config]
  (reset! isotope (js/Isotope. (.getElementById js/document vpd-id)
                               isotope-config)))

(defn add-onclick!
  [el fun]
  (aset el "onclick" fun))

(defn scroll-to-mosaic
  []
  (.setTimeout
   js/window
   #(.animateScroll js/smoothScroll "#search-results")
   100))

(defn append-videos!
  [vpd-id isotope videos added-videos scroll? window-width]
  (when isotope
    (->> videos
         (filter (comp not @added-videos :id))
         (run!
          (fn [video]
            (let [[w h size] (random-video-dimensions window-width)
                  video-el (.item (hiccup->element (video-packed size w h video)) 0)
                  vpd-el (.getElementById js/document vpd-id)]
              (add-onclick! video-el (partial open-video video))
              (.appendChild vpd-el video-el)
              (.appended isotope video-el)
              (swap! added-videos conj (:id video))))))
    (when scroll?
      (scroll-to-mosaic))))

(defn reset-isotope!
  [vpd-id isotope added-videos]
  (let [vpd-el (.getElementById js/document vpd-id)]
    (loop [last (.-lastChild vpd-el)]
      (when last
        (.removeChild vpd-el last)
        (recur (.-lastChild vpd-el)))))
  (.destroy @isotope)
  (reset! isotope nil)
  (reset! added-videos #{}))

(defn video-packed-display
  [search-term videos window-width]
  (let [isotope            (atom nil)
        added-videos       (atom #{})
        component-videos   (atom nil)
        render-since-reset (atom nil)
        vpd-id             (str (random-uuid))
        last-search-term   (atom search-term)]
    (r/create-class
     {:component-did-mount
      (fn [& _]
        (when-not @isotope
          (init-isotope! vpd-id isotope isotope-config))
        (append-videos! vpd-id @isotope @component-videos added-videos search-term window-width))
      :component-did-update
      (fn [old-state new-state]
        (when (and (not @isotope) search-term)
          (init-isotope! vpd-id isotope isotope-config))
        (when (or (not search-term) @render-since-reset)
          (append-videos! vpd-id @isotope @component-videos added-videos search-term window-width)))
      :reagent-render
      (fn [search-term videos]
        (if (and @isotope (not= @last-search-term search-term))
          (do
            (reset-isotope! vpd-id isotope added-videos)
            (reset! render-since-reset false)
            (reset! last-search-term search-term))
          (when (false? @render-since-reset)
            (reset! render-since-reset true)))
        (reset! component-videos videos)
        ;;
        (let [videos' (map #(assoc % :thumb-dimensions (random-video-dimensions window-width)) videos)]
          [:div.video-packed-display
           {:id vpd-id}]))})))

(defn lower-body
  [search-results? search-term videos]
  (let [loading-more? (re-frame/subscribe [:loading-more?])
        window-size (re-frame/subscribe [:window-size])]
    (fn [search-results? search-term videos]
      [:div#search-results.lower-body
       [re-com/v-box
        :class "lower"
        :width "100%"
        :children [[re-com/h-box
                    :class "search-results-title"
                    :justify :start
                    :width "100%"
                    :children [(when search-results?
                                 [re-com/box
                                  :size "32px"
                                  :child [re-com/md-icon-button
                                          :md-icon-name "zmdi-close"
                                          :style {:height "100%"}
                                          :on-click (fn [e]
                                                      (re-frame/dispatch [:clear-search])
                                                      (.preventDefault e))]])
                               [re-com/box
                                :size "auto"
                                :child [re-com/title
                                        :level :level2
                                        :label (if search-results?
                                                 (str "Search Results for '" search-term "'")
                                                 "All Videos")]]]]
                   (if search-results?
                     [:div
                      {:key "search-results"}
                      [:div
                       {:style {:width "100%"}}
                       [video-packed-display search-term videos (first @window-size)]]]
                     [:div
                      {:key "all-videos"}
                      [:div
                       {:style {:width "100%"}}
                       [video-packed-display nil videos (first @window-size)]]
                      [re-com/h-box
                       :class "load-more"
                       :justify :center
                       :width "100%"
                       :children [(if @loading-more?
                                    [re-com/throbber
                                     :size :small]
                                    [re-com/button
                                     :label "Load More"
                                     :on-click #(re-frame/dispatch [:load-more-videos])])]]])]]])))
(defn panel []
  (let [videos (re-frame/subscribe [:videos])
        search-term (re-frame/subscribe [:search])
        psts (re-frame/subscribe [:popular-search-terms 12])
        noof-highlight-videos 8]
    (fn []
      (let [search-results (not-empty (:search-results @videos))
            all-videos (not-empty (:all-videos @videos))]
        [:div.content-body
         [:div.content
          (if (or search-results all-videos)
            [re-com/v-box
             :children [[upper-body (take noof-highlight-videos
                                          (:all-videos @videos))
                         @psts]
                        [lower-body search-results
                         @search-term
                         (or search-results
                             all-videos)]]]
            [re-com/box
             :height "100%"
             :width "100%"
             :style {:min-height (px 500)}
             :justify :center
             :align :center
             :child [re-com/throbber
                     :size :large]])]]))))
