(ns sbsk.components.search
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]))

(defrecord Search []
  component/Lifecycle
  (start [component]
    (log/info "Starting Search")
    component)

  (stop [component]
    (log/info "Stopping Search")
    component))
