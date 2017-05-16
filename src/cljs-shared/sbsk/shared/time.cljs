(ns sbsk.shared.time
  (:require [cljsjs.moment]))

(defn as-moment-short-date
  [time]
  (.format (.locale (js/moment
                     time
                     "YYYYMMDD'T'HHmmss'Z'")
                    (.-language js/navigator)) "L"))

(defn as-moment-month-year
  [time]
  (.format (js/moment
            time
            "YYYYMMDD'T'HHmmss'Z'") "MMMM, YYYY"))

(defn as-moment
  [time]
  (.calendar (.locale (js/moment
                       time
                       "YYYYMMDD'T'HHmmss'Z'")
                      (.-language js/navigator))))
