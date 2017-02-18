(ns sbsk-admin.views
  (:require [re-frame.core :as re-frame]
            [reagent.core :as r]
            [re-com.core :as re-com]
            [re-frame-datatable.core :as dt]
            ;;
            [sbsk.shared.data :as sbsk-data]
            [sbsk.shared.time :refer [as-moment]]))

(defn title []
  [re-com/title
   :label "SBSK Admin"
   :level :level2])

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
                                      :on-click #(re-frame/dispatch [:start-edit-video id])])}
                #_{::dt/column-key   [:duration]
                   ::dt/column-label "Duration"
                   ::dt/sorting      {::dt/enabled? true}
                   ::dt/render-fn    (fn [val]
                                       [:span
                                        (let [m (quot val 60)
                                              s (mod val 60)]
                                          (if (zero? m)
                                            s
                                            (str m ":" (when (< s 10) 0) s)))])}]
               {::dt/pagination    {::dt/enabled? false}
                ::dt/table-classes ["ui" "table" "celled"]}]
              [re-com/button
               :style {:width "100%"}
               :label "Load More"
               :on-click #(re-frame/dispatch [:load-more-videos])]]])

(defn playlists
  []
  (let []
    (fn []
      [:div "Coming Soon"])))

(defn current-video-panel
  [video]
  [re-com/v-box
   :class "current-video-edit"
   :children
   [[re-com/hyperlink
     :label "Back to Videos"
     :on-click #(re-frame/dispatch [:stop-edit-video])]]])

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

(defn main-panel []
  (fn []
    [re-com/v-box
     :height "100%"
     :children [(title)
                [re-com/line]
                [actions]
                [tabs]]]))
