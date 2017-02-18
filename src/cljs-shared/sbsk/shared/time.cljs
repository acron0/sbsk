(ns sbsk.shared.time
  (:require [cljsjs.moment]))

(defn as-moment-month-year
  [time]
  (.format (js/moment
            time
            "YYYYMMDD'T'HHmmss'Z'") "MMMM, YYYY"))

(defn as-moment
  [time]
  (.calendar (js/moment
              time
              "YYYYMMDD'T'HHmmss'Z'")))
