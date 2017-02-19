(ns sbsk.shared.video
  (:require [sbsk.shared.data :refer [clip-string]]))

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
