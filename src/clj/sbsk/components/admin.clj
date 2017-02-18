(ns sbsk.components.admin
  (:require [com.stuartsierra.component :as component]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.cors :refer [wrap-cors]]
            [ring.middleware.basic-authentication :refer [wrap-basic-authentication]]
            [cheshire.core :refer [parse-stream
                                   generate-string]]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [taoensso.timbre :as log]
            [clojure.java.io :as io]
            [sbsk.components.database :as database]
            [sbsk.components.crawler :as crawler]))

(defn save-video-meta!
  [req db metadata-bucket cache]
  (if (= "application/json" (:content-type req))
    (let [video-id (get-in req [:params :id])
          video (-> (:body req)
                    (io/reader)
                    (parse-stream true))]
      (log/info "Updating metadata for " video-id)
      (log/debug video)
      (swap! cache assoc video-id video)
      (database/write-record! db metadata-bucket video-id video)
      {:status 201})
    {:status 415}))

(defn fetch-video-meta
  [id db metadata-bucket cache]
  (if-let [from-cache (get @cache id)]
    {:status 200
     :headers {"Content-Type" "application/json"}
     :body (generate-string from-cache)}
    (try
      (if-let [from-db (database/read-record-as-string db metadata-bucket id)]
        {:status 200
         :headers {"Content-Type" "application/json"}
         :body from-db}
        {:status 404})
      (catch Throwable e {:status 404}))))

(defn perform-db-refresh!
  [cwlr]
  (if cwlr
    (do
      (crawler/crawl-now! cwlr)
      {:status 200})
    {:status 412}))

(defn app
  [metadata-bucket {:keys [database crawler]} metadata-cache]
  (defroutes approutes
    (GET "/" [] (io/resource "public/admin.html"))
    (context "/api" []
             (POST "/refresh" [] (perform-db-refresh! crawler))
             (POST "/video/:id/metadata" request (save-video-meta! request database metadata-bucket metadata-cache))
             (GET  "/video/:id/metadata" [id] (fetch-video-meta id database metadata-bucket metadata-cache)))
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
    (let [metadata-cache (atom {})]
      (assoc component
             :metadata-cache metadata-cache
             :server
             (run-jetty (-> (app metadata-bucket component metadata-cache)
                            (wrap-basic-authentication
                             (authenticated? username password))
                            (wrap-cors
                             :access-control-allow-origin [#".*"]
                             :access-control-allow-methods [:get])) {:port 7000
                                                                     :daemon? true
                                                                     :join? false}))))

  (stop [component]
    (log/info "Stopping Admin")
    (.stop (:server component))
    (dissoc component :server)))
