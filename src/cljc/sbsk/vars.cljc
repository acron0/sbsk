(ns sbsk.vars)

(def content-width
  "Width of the content area of the site"
  1024)

(def videos-across
  "How many videos/columns we would like horizontally across the site"
  5)

(def video-slider-visible
  "How many videos visible in a slider"
  4)

(def video-gap-px
  "The gap between videos"
  5)

#_(def video-img-div 4.663)
;;
(def video-small-width (/ content-width videos-across))
(def video-small-height (/ video-small-width 1.5)) ;; 6x4 aspect
(def video-medium-width (* 2 video-small-width))
(def video-medium-height (* 2 video-small-height))
(def video-large-width (* 3 video-small-width))
(def video-large-height (* 3 video-small-height))

(def vp-content-width
  "Calculates the video-player content width - 4 videos + gaps"
  (+ (* video-small-width video-slider-visible)
     (* video-gap-px (dec video-slider-visible))))
