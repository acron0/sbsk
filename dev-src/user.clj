(ns user
  (:require
   [com.stuartsierra.component :as component]
   [clojure.tools.namespace.repl :refer (refresh refresh-all)]
   [environ.core :refer [env]]
   [sbsk.core :refer (new-system)]
   [figwheel-sidecar.repl-api :as ra]))

(def system nil)

(defn init
  "Constructs the current development system."
  [modes]
  (alter-var-root
   #'system
   (constantly (new-system (env :system-profile "development") modes))))

(defn start
  "Starts the current development system."
  []
  (alter-var-root #'system component/start))

(defn stop
  "Shuts down and destroys the current development system."
  []
  (alter-var-root #'system
                  (fn [s] (when s (component/stop s)))))

(defn go
  "Initializes the current development system and starts it running."
  []
  #_(init [:admin :crawler])
  (init [:search])
  (start))

(defn reset []
  (stop)
  (refresh :after 'user/go))

(defn cljs-repl
  []
  (ra/cljs-repl))
