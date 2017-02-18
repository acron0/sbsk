(ns sbsk.components.admin
  (:require [com.stuartsierra.component :as component]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.basic-authentication :refer [wrap-basic-authentication]]
            [cheshire.core :refer [parse-stream]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [taoensso.timbre :as log]
            [clojure.java.io :as io]
            [sbsk.components.database :as database]
            [sbsk.components.crawler :as crawler]))

(defn save-video!
  [req db metadata-bucket]
  (if (= "application/json" (:content-type req))
    (let [video-id (get-in req [:params :id])
          video (-> (:body req)
                    (io/reader)
                    (parse-stream true))]
      (log/info "Updating metadata for " video-id)
      (log/debug video)
      (database/write-record! db metadata-bucket video-id video)
      {:status 201})
    {:status 415}))

(defn perform-db-refresh!
  [cwlr]
  (if cwlr
    (do
      (crawler/crawl-now! cwlr)
      {:status 200})
    {:status 412}))

(defn app
  [metadata-bucket {:keys [database crawler]}]
  (defroutes approutes
    (GET "/" [] (io/resource "public/admin.html"))
    (context "/api" []
             (POST "/refresh" [] (perform-db-refresh! crawler))
             (POST "/video/:id/metadata" request (save-video! request database metadata-bucket)))
    (route/resources "/")))

(defn authenticated?
  [admin-user admin-pass]
  (fn [name pass]
    (and (= name admin-user)
         (= pass admin-pass))))

(defrecord Admin [username password metadata-bucket]
  component/Lifecycle
  (start [component]
    (log/info "Starting Admin")
    (assoc component :server
           (run-jetty (-> (app metadata-bucket component)
                          (wrap-basic-authentication
                           (authenticated? username password))
                          (wrap-cors
                           :access-control-allow-origin [#".*"]
                           :access-control-allow-methods [:get])) {:port 7000
                                                                   :daemon? true
                                                                   :join? false})))

  (stop [component]
    (log/info "Stopping Admin")
    (.stop (:server component))
    (dissoc component :server)))
