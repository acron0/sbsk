(ns sbsk.hiccup-help
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime :as hiccupsrt]))

(defn px
  [x]
  (str x "px"))

(defn hiccup->element
  [h]
  (let [s (html h)
        t (.createElement js/document "template")]
    (set! (.-innerHTML t) s)
    (.. t -content -childNodes)))
