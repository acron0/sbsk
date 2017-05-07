(ns sbsk.shared.video
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [reagent.core :as r]
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
  ([video]
   (get-description video 512))
  ([video nletters]
   (clip-string (or (not-blank (get-in video [:meta :description]))
                    (not-blank (get video :description))) nletters)))

(defn get-short-description
  ([video]
   (get-short-description video 256))
  ([video nletters]
   (clip-string (or (not-blank (get-in video [:meta :short-description]))
                    (get-description video)) nletters)))

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
              #_:on-mouse-enter #_#(let [t (.. % -target -parentElement)]
                                     (.add (.-classList t) "hover-x"))
              #_:on-mouse-leave #_#(let [t (.. % -target -parentElement)]
                                     (.remove (.-classList t) "hover-x"))
              :on-click (if (:on-video-click opts)
                          (partial (:on-video-click opts) video)
                          (partial open-video video))}
             [:img {:src (get-thumb video)
                    :width w
                    :height h}]
             (when (:overlay-fn opts)
               [:div.video-panel-overlay
                {}
                ((:overlay-fn opts) video)])]]))

(defn video-slider
  ([videos class-name num-videos opts]
   [slider-control class-name
    #(video-panel :small % {:class "video-slider-video-panel"
                            :overlay-fn (:overlay-fn opts)
                            :on-video-click (:on-video-click opts)})
    videos
    num-videos
    video-small-width])
  ([videos num-videos opts]
   (video-slider videos "video-slider" num-videos opts)))
