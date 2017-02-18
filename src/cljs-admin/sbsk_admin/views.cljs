(ns sbsk-admin.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [re-com.core :as re-com]
            [re-frame-datatable.core :as dt]
            ;;
            [sbsk.shared.data :as sbsk-data :refer
             [ video-highlight-width
              video-highlight-height
              video-small-height
              video-small-width
              video-medium-width
              video-medium-height
              video-large-width
              video-large-height
              clip-string]]
            [sbsk.shared.time :refer [as-moment]]))

(defn title []
  [re-com/title
   :label "SBSK Admin"
   :level :level2])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Actions Bar

(defn actions
  []
  (let []
    (fn []
      [re-com/v-box
       :width "100%"
       :align :center
       :class "actions"
       :children [[re-com/h-box
                   :gap "10px"
                   :children [[re-com/button
                               :label "Refresh Video Database"
                               :class "btn-success"
                               :tooltip "Fetches all the latest videos from Facebook. May take a minute or two."]
                              [re-com/button
                               :label "Sync Admin Changes"
                               :class "btn-success"
                               :tooltip "Pushes recent changes from the admin interface into the video database."]]]]])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Videos Table

(defn videos
  []
  [re-com/v-box
   :children [[dt/datatable
               :videos
               [:videos]
               [{::dt/column-key   [:thumb]
                 ::dt/sorting      {::dt/enabled? false}
                 ::dt/column-label ""
                 ::dt/render-fn     (fn [val]
                                      [:img {:src val
                                             :width 60
                                             :height 40}])}
                {::dt/column-key   [:created-at]
                 ::dt/sorting      {::dt/enabled? true}
                 ::dt/column-label "Created At"
                 ::dt/render-fn     (fn [val]
                                      [:span
                                       (as-moment val)])}
                {::dt/column-key   [:id]
                 ::dt/column-label "Actions"
                 ::dt/render-fn    (fn [id]
                                     [re-com/button
                                      :label "Edit"
                                      :on-click #(re-frame/dispatch [:start-edit-video id])])}]
               {::dt/pagination    {::dt/enabled? false}
                ::dt/table-classes ["ii" "table" "celled"]}]
              [re-com/button
               :style {:width "100%"}
               :label "Load More"
               :on-click #(re-frame/dispatch [:load-more-videos])]]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Playlists

(defn playlists
  []
  (let []
    (fn []
      [:div "Coming Soon"])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Current Video

(defn title-control
  [video]
  (let [default-title (or (:title video) (clip-string (:title video)))
        current-title (or (get-in video [:meta :title])
                          (:title video)
                          (clip-string (:title video)))]
    [re-com/v-box
     :width "100%"
     :children [[re-com/title
                 :level :level3
                 :label "Title"]
                [re-com/input-text
                 :style {:font-size "22px"
                         :font-weight :bold
                         :text-align :center}
                 :width "100%"
                 :model current-title
                 :placeholder default-title
                 :on-change #()]]]))

(defn thumb-control
  [video]
  [re-com/v-box
   :children
   [[re-com/title
     :level :level3
     :label "Picture"]
    [re-com/h-box
     :gap "10px"
     :children
     [[re-com/v-box
       :children
       [[re-com/label :label "Default Picture"]
        [:img {:src (:thumb video)
               :width video-large-width
               :height video-large-height}]]]
      [re-com/v-box
       :children
       [[re-com/label :label "Additional Picture"]
        [:img {:src (get-in video [:meta :thumb])
               :width video-large-width
               :height video-large-height}]]]]]
    [re-com/gap :size "10px"]
    [re-com/label
     :label "Select a new picture:"]
    [:input {:type "file"
             :id "additional-picture-input"}]]])

(defn short-desc-control
  [video]
  (let [short-desc (or (get-in video [:meta :short-description]) "")]
    [re-com/v-box
     :width "100%"
     :children [[re-com/title
                 :level :level3
                 :label "Short Description"]
                [re-com/input-text
                 :width "100%"
                 :model short-desc
                 :placeholder "Provide a brief description, ideally a single sentence."
                 :on-change #()]]]))

(defn full-desc-control
  [video]
  (let [default-full-desc (:description video)
        full-desc (or (get-in video [:meta :short-description])
                      default-full-desc)]
    [re-com/v-box
     :width "100%"
     :children [[re-com/title
                 :level :level3
                 :label "Full Description"]
                [re-com/input-textarea
                 :width "100%"
                 :model full-desc
                 :placeholder default-full-desc
                 :on-change #()]]]))

(defn tags-control
  [video])


(defn current-video-panel
  [video]
  [re-com/v-box
   :width "100%"
   :class "current-video-edit"
   :gap "15px"
   :children
   [[re-com/hyperlink
     :label "< Back to Videos"
     :on-click #(re-frame/dispatch [:stop-edit-video])]
    (title-control video)
    (thumb-control video)
    (short-desc-control video)
    (full-desc-control video)
    (tags-control video)]])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Tabs

(defn tabs
  []
  (let [tabs [{:id :videos
               :label "Videos"}
              {:id :playlists
               :label "Playlists"}]
        current-tab (r/atom :videos)
        current-video (re-frame/subscribe [:current-video])]
    (fn []
      [re-com/v-box
       :children [[re-com/horizontal-tabs
                   :tabs tabs
                   :model current-tab
                   :on-change #(do
                                 (re-frame/dispatch [:stop-edit-video])
                                 (reset! current-tab %))]
                  (if @current-video
                    (current-video-panel @current-video)
                    (case @current-tab
                      :videos [videos]
                      :playlists [playlists]))]])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn main-panel []
  (fn []
    [re-com/v-box
     :height "100%"
     :children [(title)
                [re-com/line]
                [actions]
                [tabs]]]))
