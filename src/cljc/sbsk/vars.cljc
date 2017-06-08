(ns sbsk.vars)

(def content-width
  "Width of the content area of the site"
  1024)

(def small-content-width
  "Width of the content area of the site - mobile"
  610)

(def tiny-content-width
  "Width of the content area of the site - tiny mobile"
  405)

(def videos-across
  "How many videos/columns we would like horizontally across the site"
  5)

(def video-gap-px
  "The gap between videos"
  2)

#_(def video-img-div 4.663)
;;
(def video-small-width (/ content-width videos-across))
(def video-small-height (/ video-small-width 1.5)) ;; 6x4 aspect
(def video-medium-width (* 2 video-small-width))
(def video-medium-height (* 2 video-small-height))
(def video-large-width (* 3 video-small-width))
(def video-large-height (* 3 video-small-height))

(def search-typeahead-height
  "The height of the typeahead popup box"
  325)

(defn video-slider-visible
  "How many videos visible in a slider"
  [width]
  (cond
    (<= width small-content-width) 1
    (<= width 816) 2
    (< width content-width) 3
    :else 4))

(defn vp-content-width
  [width]
  "Calculates the video-player content width - 4 videos + gaps"
  (+ (* video-small-width (video-slider-visible width))
     (* video-gap-px (dec (video-slider-visible width)))))
