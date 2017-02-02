(ns sbsk.components.database
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]))

(defrecord Database []
  component/Lifecycle
  (start [component]
    (log/info "Starting Database")
    component)

  (stop [component]
    (log/info "Stopping Database")
    component))
