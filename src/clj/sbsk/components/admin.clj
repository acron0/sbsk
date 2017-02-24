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
            [amazonica.core :as aws]
            [amazonica.aws.s3 :as s3]
            [amazonica.aws.s3transfer :as s3t]
            [clj-time.core :as t]
            [sbsk.components.database :as database]
            [sbsk.components.crawler :as crawler])
  (:import [com.amazonaws.services.s3.model AmazonS3Exception]))

(defn save-video-meta!
  [req db metadata-bucket cache]
  (if (= "application/json" (:content-type req))
    (let [video-id (get-in req [:params :id])
          video (-> (:body req)
                    (io/reader)
                    (parse-stream true))]
      (log/info "Updating metadata for " video-id)
      (log/debug video)
      #_(swap! cache assoc video-id video)
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
        (do
          ;; NOTE - do not use the cache just yet
          #_(swap! cache assoc video-id video)
          {:status 200
           :headers {"Content-Type" "application/json"}
           :body from-db})
        {:status 404})
      (catch Throwable e {:status 404}))))

(defn perform-db-refresh!
  [cwlr]
  (if cwlr
    (do
      (crawler/crawl-now! cwlr)
      {:status 200})
    {:status 412}))

(defn create-upload-link!
  [creds endpoint id bucket]
  (log/info "Providing upload link for " id)
  {:status 200
   :body (str (s3/generate-presigned-url
               (assoc creds :endpoint endpoint)
               :bucket-name bucket
               :key id
               :expiration (-> 30 t/minutes t/from-now)
               :method "PUT"))})

(defn app
  [metadata-bucket photo-bucket photo-bucket-region creds {:keys [database crawler]} metadata-cache]
  (defroutes approutes
    (GET "/" [] (io/resource "public/admin.html"))
    (context "/api" []
             (POST "/refresh" []
                   (perform-db-refresh! crawler))
             (POST "/video/:id/metadata" request
                   (save-video-meta! request database metadata-bucket metadata-cache))
             (GET  "/video/:id/metadata" [id]
                   (fetch-video-meta id database metadata-bucket metadata-cache))
             (GET "/video/:id/photo/upload-link" [id]
                  (create-upload-link! creds photo-bucket-region id photo-bucket)))
    (route/resources "/")))

(defn authenticated?
  [admin-user admin-pass]
  (fn [name pass]
    (and (= name admin-user)
         (= pass admin-pass))))

(defrecord Admin [username password
                  metadata-bucket photo-bucket
                  photo-bucket-region credentials]
  component/Lifecycle
  (start [component]
    (log/info "Starting Admin")
    (let [metadata-cache (atom {})]
      (assoc component
             :metadata-cache metadata-cache
             :server
             (run-jetty (-> (app
                             metadata-bucket
                             photo-bucket
                             photo-bucket-region
                             credentials
                             component
                             metadata-cache)
                            (wrap-cors
                             :access-control-allow-origin [#".*"]
                             :access-control-allow-methods [:get])
                            (wrap-basic-authentication
                             (authenticated? username password))) {:port 7000
                                                                   :daemon? true
                                                                   :join? false}))))

  (stop [component]
    (log/info "Stopping Admin")
    (.stop (:server component))
    (dissoc component :server)))
