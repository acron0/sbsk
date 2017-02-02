(ns sbsk.components.admin
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]))

(defrecord Admin []
  component/Lifecycle
  (start [component]
    (log/info "Starting Admin")
    component)

  (stop [component]
    (log/info "Stopping Admin")
    component))
