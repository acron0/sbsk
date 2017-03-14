(ns sbsk.shared.video
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [sbsk.vars :refer [video-small-width
                               video-small-height
                               video-medium-width
                               video-medium-height
                               video-large-width
                               video-large-height]]
            [sbsk.shared.data :refer [clip-string px]]
            [sbsk.shared.slider :refer [slider-control]]))

(defn not-blank
  [s]
  (when-not (clojure.string/blank? s)
    s))

(defn get-thumb
  [video]
  (or (get-in video [:meta :thumb])
      (get video :thumb)))

(defn get-description
  [video]
  (or (not-blank (get-in video [:meta :description]))
      (not-blank (get video :description))))

(defn get-short-description
  [video]
  (not-blank (get-in video [:meta :short-description])))

(defn get-tags
  [video]
  (not-empty (get-in video [:meta :tags])))

(defn get-title
  [video]
  (or (not-blank (get-in video [:meta :title]))
      (not-blank (get video :title))
      (clip-string (get-description video))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn open-video
  [video]
  (re-frame/dispatch [:open-video (:id video)]))

(defn video-size->px
  [size]
  (case size
    :small [(px video-small-width)
            (px video-small-height)]
    :medium [(px video-medium-width)
             (px video-medium-height)]
    :large [(px video-large-width)
            (px video-large-height)]))

(defn video-panel
  [size video & [opts]]
  (let [[w h] (video-size->px size)]
    [re-com/box
     :class (:class opts)
     :width w
     :height h
     :child [:div.video-panel
             {:style {:width "100%"
                      :height "100%"}
              :on-click (partial open-video video)}
             [:img {:src (get-thumb video)
                    :width w
                    :height h}]
             (when (:overlay-fn opts)
               [:div.video-panel-overlay
                {}
                ((:overlay-fn opts) video)])]]))

(defn video-slider
  [videos num-videos & [opts]]
  (slider-control "video-slider"
                  #(video-panel :small % {:class "video-slider-video-panel"
                                          :overlay-fn (:overlay-fn opts)})
                  videos
                  num-videos
                  video-small-width))
