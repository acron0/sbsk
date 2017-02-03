(ns sbsk.core
  (:require  [aero.core :refer [read-config]]
             [taoensso.timbre :as log]
             ;;
             [com.stuartsierra.component :as component]
             [sbsk.components.search   :as search]
             [sbsk.components.crawler  :as crawler]
             [sbsk.components.admin    :as admin]
             [sbsk.components.database :as database])
  (:gen-class))

(defn new-system [profile modes]
  (let [config (read-config (clojure.java.io/resource "config.edn") {:profile profile})
        mode-set (set modes)
        _ (log/merge-config! (:log config))
        _ (log/info "Profile:" profile)
        _ (log/info "Modes:" mode-set)
        mode-enabled? (fn [x] (contains? mode-set x))
        components [[:database (database/map->Database (:database config))]
                    ;;
                    [:search   (when (mode-enabled? :search)
                                 (component/using
                                  (search/map->Search (:search config))
                                  [:database]))]
                    [:crawler (when (mode-enabled? :crawler)
                                (component/using
                                 (crawler/map->Crawler (:crawler config))
                                 [:database]))]
                    [:admin (when (mode-enabled? :admin)
                              (component/using
                               (admin/map->Admin (:admin config))
                               [:database]))]]
        filtered (reduce (fn [a [x y]]
                           (if y (concat a [x y]) a)) [] components)]

    (apply component/system-map filtered)))

(defn -main [& args]
  (let [profile (first args)
        modes (map keyword (rest args))]

    (Thread/setDefaultUncaughtExceptionHandler
     (reify Thread$UncaughtExceptionHandler
       (uncaughtException [_ thread ex]
         (log/error "Unhandled exception:" ex))))

    (component/start
     (new-system profile modes))))
