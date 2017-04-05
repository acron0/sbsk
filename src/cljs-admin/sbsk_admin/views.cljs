(ns sbsk-admin.views
  (:require [re-frame.core :as re-frame]
            [re-frame.db :as re-frame-db]
            [reagent.core :as r]
            [re-com.core :as re-com]
            [re-frame-datatable.core :as dt]
            ;;
            [sbsk.vars :as sbsk-vars :refer
             [video-small-height
              video-small-width
              video-medium-width
              video-medium-height
              video-large-width
              video-large-height]]
            [sbsk.shared.video :as sbsk-video :refer
             [get-title]]
            [sbsk.shared.data :as sbsk-data :refer
             [clip-string]]
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
       :align :center
       :class "actions"
       :children [[re-com/h-box
                   :gap "10px"
                   :children [[re-com/button
                               :label "Refresh Video Database"
                               :class "btn-primary"
                               :tooltip "Fetches all the latest videos from Facebook. May take a minute or two."
                               :on-click #(re-frame/dispatch [:sync-db true])]]]]])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Videos Table

(defn videos
  []
  [re-com/v-box
   :style {:font-size "18px"}
   :children [[dt/datatable
               :videos
               [:videos]
               [{::dt/column-key   [:thumb]
                 ::dt/sorting      {::dt/enabled? false}
                 ::dt/column-label ""
                 ::dt/render-fn     (fn [val]
                                      [:img {:src val
                                             :width 120
                                             :height 80}])}
                {::dt/column-key   [:title]
                 ::dt/sorting      {::dt/enabled? true}
                 ::dt/column-label "Title"
                 ::dt/render-fn     (fn [_ video]
                                      [:span (get-title video)])}
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
      [re-com/v-box
       :align :center
       :gap "10px"
       :children [[re-com/gap :size "10px"]
                  [re-com/button
                   :label "Add New Playlist"
                   :class "btn-secondary"
                   :on-click #(re-frame/dispatch [:create-new-playlist])]
                  [dt/datatable
                   :playlists
                   [:playlists]
                   [{::dt/column-key   [:thumb]
                     ::dt/sorting      {::dt/enabled? false}
                     ::dt/column-label ""
                     ::dt/render-fn     (fn [val]
                                          [:img {:src (or val
                                                          (str "http://placehold.it/" video-medium-width "x" video-medium-height))
                                                 :width 120
                                                 :height 80}])}
                    {::dt/column-key   [:title]
                     ::dt/sorting      {::dt/enabled? false}
                     ::dt/column-label "Title"}
                    {::dt/column-key   [:created-at]
                     ::dt/sorting      {::dt/enabled? true}
                     ::dt/column-label "Created At"
                     ::dt/render-fn     (fn [val]
                                          [:span
                                           (as-moment val)])}
                    {::dt/column-key   [:videos]
                     ::dt/sorting      {::dt/enabled? false}
                     ::dt/column-label ""
                     ::dt/render-fn     (fn [val]
                                          [:span (str (count val) " video(s)")])}
                    {::dt/column-key   [:id]
                     ::dt/column-label "Actions"
                     ::dt/render-fn    (fn [id]
                                         [re-com/h-box
                                          :gap "5px"
                                          :align :center
                                          :children
                                          [[re-com/button
                                            :label "Edit"
                                            :on-click #(re-frame/dispatch [:start-edit-playlist id])]
                                           [re-com/button
                                            :label "Delete"
                                            :on-click #(when (js/confirm "Are you sure you want to delete this playlist?")
                                                         (re-frame/dispatch [:delete-playlist id]))]
                                           [re-com/gap :size "2px"]
                                           [re-com/md-icon-button
                                            :md-icon-name "zmdi-long-arrow-up"
                                            :emphasise? true
                                            :on-click #(re-frame/dispatch [:move-playlist-up id])]
                                           [re-com/md-icon-button
                                            :md-icon-name "zmdi-long-arrow-down"
                                            :emphasise? true
                                            :on-click #(re-frame/dispatch [:move-playlist-down id])]]])}]
                   {::dt/pagination    {::dt/enabled? false}
                    ::dt/table-classes ["ii" "table" "celled"]}]]])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Current Video

(defn title-control
  [video event-key]
  (let [default-title (or (:title video) (clip-string (:description video)))
        meta-title (get-in video [:meta :title])
        current-title (if-not (clojure.string/blank? meta-title)
                        meta-title
                        default-title)]
    [re-com/v-box
     :width "50%"
     :children [[re-com/title
                 :level :level3
                 :label "Title"]
                [re-com/input-text
                 :style {:font-size "22px"
                         :font-weight :bold
                         }
                 :width "100%"
                 :model current-title
                 :placeholder default-title
                 :on-change #(re-frame/dispatch [event-key %])]]]))

(defn thumb-control
  [video]
  (let [meta-thumb (get-in video [:meta :thumb])
        uploading? (and meta-thumb (clojure.string/starts-with? meta-thumb "data:"))]
    [re-com/v-box
     :children
     [[re-com/title
       :level :level3
       :label "Picture"]
      [re-com/h-box
       :gap "10px"
       :children
       [[re-com/v-box
         :gap "10px"
         :children
         [[re-com/label :label "Replacement Picture"]
          [:div
           {:style {:position :relative}}
           [:img {:src (or meta-thumb
                           (str "http://placehold.it/" video-large-width "x" video-large-height))
                  :width video-large-width
                  :height video-large-height}]
           (when uploading?
             [:div.uploading-thumb
              {:style {:width video-large-width
                       :height video-large-height}}
              "Uploading..."
              [re-com/throbber
               :color "#000"]])]
          [re-com/label
           :label "Select a Replacement Picture (6x4):"]
          [:input {:type "file"
                   :id "additional-picture-input"
                   :on-change
                   (fn [e]
                     (let [file (first (array-seq (.. e -target -files)))]
                       (re-frame/dispatch [:edit-current-video/thumb file])))}]
          [re-com/label
           :label "or"]
          [re-com/button
           :class "btn-danger"
           :label "Revert to Default Picture"
           :on-click #(re-frame/dispatch [:edit-current-video/remove-thumb])]]]
        [re-com/v-box
         :gap "10px"
         :children
         [[re-com/label :label "Default Picture"]
          [:img {:src (:thumb video)
                 :width video-large-width
                 :height video-large-height}]
          [re-com/gap :size "10px"]]]]]]]))

(defn short-desc-control
  [video event-key]
  (let [short-desc (or (get-in video [:meta :short-description])
                       (get-in video [:short-description])"")]
    [re-com/v-box
     :width "50%"
     :children [[re-com/title
                 :level :level3
                 :label "Short Description"]
                [re-com/input-text
                 :width "100%"
                 :model short-desc
                 :placeholder "Provide a brief description, ideally a single sentence."
                 :on-change #(re-frame/dispatch [event-key %])]]]))

(defn full-desc-control
  [video]
  (let [default-full-desc (:description video)
        full-desc (if-not (clojure.string/blank? (get-in video [:meta :description]))
                    (get-in video [:meta :description])
                    default-full-desc)]
    [re-com/v-box
     :width "50%"
     :children [[re-com/title
                 :level :level3
                 :label "Full Description"]
                [re-com/input-textarea
                 :width "100%"
                 :height "200px"
                 :model full-desc
                 :placeholder default-full-desc
                 :on-change #(re-frame/dispatch [:edit-current-video/description %])]]]))

(defn tags-control
  [video]
  (let [all-tags (re-frame/subscribe [:tags])
        tag-atom (atom nil)
        added? (atom nil)]
    (fn [video]
      (let [tags (get-in video [:meta :tags])
            items (r/atom (sort-by :label (into [] (set (map (fn [t] {:id t :label t}) @all-tags)))))
            selections (r/atom (set tags))]
        [re-com/h-box
         :children [[re-com/v-box
                     :width "50%"
                     :children [[re-com/title
                                 :level :level3
                                 :label "Tags"]
                                [re-com/selection-list
                                 :choices items
                                 :model selections
                                 :max-height "200px"
                                 :id-fn :id
                                 :label-fn :label
                                 :on-change #(re-frame/dispatch [:edit-current-video/set-tags %])]
                                [re-com/h-box
                                 :width "100%"
                                 :children [[re-com/input-text
                                             :model ""
                                             :width "100%"
                                             :placeholder "Add a new tag"
                                             :on-change #(reset! tag-atom %)]
                                            [re-com/box
                                             :child
                                             [re-com/button
                                              :label "Add"
                                              :on-click #(do
                                                           (reset! added? @tag-atom)
                                                           (re-frame/dispatch [:edit-current-video/add-tag @tag-atom]))]]]]
                                [:div (when @added?
                                        [re-com/label
                                         :label (str "'" @added? "' was added as a tag and checked.")])]]]
                    [re-com/gap
                     :size "20px"]
                    [re-com/v-box
                     :width "50%"
                     :children [[re-com/title
                                 :level :level4
                                 :label "Currently Applied:"]
                                (if (not-empty @selections)
                                  [:ul
                                   (for [t @selections]
                                     ^{:key t}
                                     [:li t])]
                                  [:i "None"])]]]]))))


(defn current-video-panel
  [video]
  (let [current-video-loading? (re-frame/subscribe [:current-video-loading?])
        dirty? (re-frame/subscribe [:dirty?])]
    (fn [video]
      (if @current-video-loading?
        [re-com/throbber]
        [re-com/v-box
         :width "100%"
         :class "current-video-edit"
         :gap "15px"
         :children
         [[re-com/hyperlink
           :label "< Back to Videos"
           :on-click #(re-frame/dispatch [:stop-edit-video])]
          [re-com/title
           :level :level2
           :label "Editing Video"]
          [re-com/h-box
           :align :center
           :gap "10px"
           :children
           [[:i.zmdi.zmdi-hc-fw-rc.zmdi-time]
            [re-com/label
             :label (str "Last Edited: " (if-let [edited-time (get-in video [:meta :edited-at])]
                                           (as-moment edited-time)
                                           "Never"))]]]
          [re-com/h-box
           :align :center
           :gap "10px"
           :children
           [[:i.zmdi.zmdi-hc-fw-rc.zmdi-link]
            [:a {:href (str "http://facebook.com" (:link video))
                 :target "_blank"} "Link to Facebook Video"]]]
          (title-control video :edit-current-video/title)
          (thumb-control video)
          [tags-control video]
          (short-desc-control video :edit-current-video/short-description)
          (full-desc-control video)
          [re-com/button
           :label "Save and Publish Changes"
           :class (if @dirty? "btn-success" "btn-primary")
           :tooltip "Pushes recent changes from the admin interface into the video database."
           :on-click #(re-frame/dispatch [:sync-db false])]]]))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Current Playlist

(defn manage-deferred-search
  [value timeout]
  (when @timeout
    (js/clearTimeout @timeout))
  (reset! timeout
          (js/setTimeout
           #(do
              (reset! timeout nil)
              (re-frame/dispatch [:video-search value]))
           1000)))

(defn playlist-thumb-control
  [playlist]
  (let [meta-thumb (get-in playlist [:thumb])
        uploading? (and meta-thumb (clojure.string/starts-with? meta-thumb "data:"))]
    [re-com/v-box
     :children
     [[re-com/title
       :level :level3
       :label "Picture"]
      [re-com/h-box
       :gap "10px"
       :children
       [[re-com/v-box
         :gap "10px"
         :children
         [[:div
           {:style {:position :relative}}
           [:img {:src (or meta-thumb
                           (str "http://placehold.it/" video-medium-width "x" video-medium-height))
                  :width video-medium-width
                  :height video-medium-height}]
           (when uploading?
             [:div.uploading-thumb
              {:style {:width video-large-width
                       :height video-large-height}}
              "Uploading..."
              [re-com/throbber
               :color "#000"]])]
          [re-com/label
           :label "Select a Picture (6x4):"]
          [:input {:type "file"
                   :id "additional-picture-input"
                   :on-change
                   (fn [e]
                     (let [file (first (array-seq (.. e -target -files)))]
                       (re-frame/dispatch [:edit-current-playlist/thumb file])))}]]]]]]]))

(defn video-search
  []
  (let [timeout (atom nil)]
    (fn []
      [re-com/v-box
       :width "100%"
       :children
       [[re-com/title
         :level :level2
         :label "Video Search"]
        [re-com/h-box
         :gap "5px"
         :align :center
         :children
         [[re-com/input-text
           :model ""
           :width "80%"
           :change-on-blur? false
           :on-change #(manage-deferred-search % timeout)
           :placeholder "Search for videos"]
          [re-com/hyperlink
           :label "Clear"
           :on-click #(re-frame/dispatch [:clear-search])]]]
        [dt/datatable
         :video-search-results-table
         [:search-results]
         [{::dt/column-key   [:thumb]
           ::dt/sorting      {::dt/enabled? false}
           ::dt/column-label ""
           ::dt/render-fn     (fn [val]
                                [:img {:src val
                                       :width 120
                                       :height 80}])}
          {::dt/column-key   [:title]
           ::dt/sorting      {::dt/enabled? true}
           ::dt/column-label "Title"
           ::dt/render-fn     (fn [_ video]
                                [:span (get-title video)])}
          {::dt/column-key   [:id]
           ::dt/column-label "Actions"
           ::dt/render-fn    (fn [id]
                               [re-com/button
                                :label "Add"
                                :class "btn-success"
                                :on-click #(re-frame/dispatch [:edit-current-playlist/add-video id])])}]
         {::dt/pagination    {::dt/enabled? false}
          ::dt/table-classes ["ii" "table" "celled"]}]
        ]])))

(defn playlist-videos
  []
  (let []
    (fn []
      [re-com/v-box
       :width "100%"
       :align :end
       :children
       [[re-com/title
         :level :level2
         :label "Playlist Videos"]
        [re-com/title
         :level :level4
         :label "The following videos are included in this playlist:"]
        [re-com/gap :size "5px"]
        [dt/datatable
         :playlist-videos-table
         [:current-playlist-videos]
         [{::dt/column-key   [:thumb]
           ::dt/sorting      {::dt/enabled? false}
           ::dt/column-label ""
           ::dt/render-fn     (fn [val]
                                [:img {:src val
                                       :width 120
                                       :height 80}])}
          {::dt/column-key   [:title]
           ::dt/sorting      {::dt/enabled? true}
           ::dt/column-label "Title"
           ::dt/render-fn     (fn [_ video]
                                (when video
                                  [:span (get-title video)]))}
          {::dt/column-key   [:id]
           ::dt/column-label "Actions"
           ::dt/render-fn    (fn [id]
                               [re-com/h-box
                                :align :center
                                :children
                                [[re-com/button
                                  :label "Remove"
                                  :class "btn-danger"
                                  :on-click #(re-frame/dispatch [:edit-current-playlist/remove-video id])]
                                 [re-com/gap :size "10px"]
                                 [re-com/md-icon-button
                                  :md-icon-name "zmdi-long-arrow-up"
                                  :emphasise? true
                                  :on-click #(re-frame/dispatch [:edit-current-playlist/move-video-up id])]
                                 [re-com/gap :size "2px"]
                                 [re-com/md-icon-button
                                  :md-icon-name "zmdi-long-arrow-down"
                                  :emphasise? true
                                  :on-click #(re-frame/dispatch [:edit-current-playlist/move-video-down id])]]])}]
         {::dt/pagination    {::dt/enabled? false}
          ::dt/table-classes ["ii" "table" "celled"]}]]])))

(defn current-playlist-panel
  [playlist]
  (let []
    (fn [playlist]
      [re-com/v-box
       :width "100%"
       :class "current-playlist-edit"
       :gap "15px"
       :children
       [[re-com/hyperlink
         :label "< Back to Playlists"
         :on-click #(re-frame/dispatch [:stop-edit-playlist])]
        [re-com/title
         :level :level2
         :label "Editing Playlist"]
        (title-control playlist :edit-current-playlist/title)
        (short-desc-control playlist :edit-current-playlist/short-description)
        (playlist-thumb-control playlist)
        [re-com/h-box
         :width "100%"
         :height "100%"
         :children
         [[re-com/box
           :size "50%"
           :child
           [video-search]]
          [re-com/line]
          [re-com/box
           :size "50%"
           :child
           [playlist-videos]]]]]])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Tabs

(defn tabs
  []
  (let [tabs [{:id :videos
               :label "Videos"}
              {:id :playlists
               :label "Playlists"}]
        current-tab (r/atom :videos)
        current-video (re-frame/subscribe [:current-video])
        current-playlist (re-frame/subscribe [:current-playlist])]
    (fn []
      [re-com/v-box
       :children [[re-com/horizontal-tabs
                   :tabs tabs
                   :model current-tab
                   :on-change #(do
                                 (re-frame/dispatch [:stop-edit-video])
                                 (re-frame/dispatch [:stop-edit-playlist])
                                 (reset! current-tab %))]
                  (cond
                    @current-video [current-video-panel @current-video]
                    @current-playlist [current-playlist-panel @current-playlist]
                    :else (case @current-tab
                            :videos [videos]
                            :playlists [playlists]))]])))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn error-panel
  [msg]
  [re-com/v-box
   :width "100%"
   :align :center
   :gap "10px"
   :children
   [[re-com/title
     :level :level1
     :label "Error!"]
    [re-com/label
     :style {:padding "1em 4em"}
     :label msg]
    [re-com/line]
    [:a
     {:href (str "mailto:antony@teamwoods.org?subject=Error report from SBSK Admin&body=" msg
                 "%0D%0A------------------------%0D%0A"
                 "Please include any additional information below the line, such as what action were you performing when the error occurred?"
                 "%0D%0A-------------------------%0D%0A")
      :target "_blank"}
     [re-com/label
      :label "Click here to email an error report."]]
    [re-com/button
     :label "Restart App"
     :class "btn-primary"
     :on-click #(.reload js/location)]]])

(defn refreshing-panel
  []
  [re-com/v-box
   :width "100%"
   :align :center
   :children
   [[re-com/title
     :level :level1
     :label "Please Wait"]
    [re-com/label
     :label "The database is currently refreshing videos and synchronising changes. This may take a few minutes."]
    [re-com/label
     :label "The page will automatically update once it's finished."]]])

(defn main-panel []
  (let [error (re-frame/subscribe [:error])
        refreshing?(re-frame/subscribe [:refreshing?])]
    (fn []
      [re-com/v-box
       :height "100%"
       :children [(title)
                  [re-com/line]
                  (when-not (or @error @refreshing?) [actions])
                  (when-not (or @error @refreshing?) [tabs])
                  (when (and (not @error) @refreshing?) (refreshing-panel))
                  (when @error (error-panel @error))]])))
