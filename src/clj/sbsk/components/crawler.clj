(ns sbsk.components.crawler
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]))

(defrecord Crawler []
  component/Lifecycle
  (start [component]
    (log/info "Starting Crawler")
    component)

  (stop [component]
    (log/info "Stopping Crawler")
    component))
