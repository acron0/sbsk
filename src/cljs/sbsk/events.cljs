(ns sbsk.events)

(defn add-event
  [object type callback]
  (when object
    (cond
      (.-addEventListener object) (.addEventListener object type callback false)
      (.-attachEvent object) (.attachEvent object (str "on" type) callback)
      :else (aset object (str "on" type) callback))))
