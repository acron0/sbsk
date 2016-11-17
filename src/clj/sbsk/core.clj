(ns sbsk.core
  (:require [clj-http.client :as client]
            [cheshire.core :refer :all]
            [amazonica.aws.s3 :as s3]
            [amazonica.aws.s3transfer :as s3t]
            [clojure.java.io :as io]
            [clj-time.core :as t]
            [clj-time.format :as tf]
            [me.raynes.fs :as fs]
            [environ.core :refer [env]])
  (:import [java.io.StringBufferInputStream])
  (:gen-class))

;; fb
(def app-secret        (env :sbsk-fb-app-secret))
(def app-id            (env :sbsk-fb-app-id))
(def table-name        "videos")
(def page-id           "591976210904363")
(def fb-https          "https://graph.facebook.com")
;; aws
(def creds             {:profile "sbsk-fb-crawler"})
(def bucket-full-name  "sbsk-data")
(def data-name-parts   ["data" ".json"])
(def bucket-seg-name   "sbsk-data-segmented")
(def segments-per-file 10)

(defn coerce-time
  [t]
  (let [fixed (re-find #"(.+)\+" t)
        t'    (or (last fixed) t)
        t'    (if-not (= \Z (last t')) (str t' \Z) t')]
    (->> t'
         (tf/parse (tf/formatter "YYYY-MM-dd'T'HH:mm:SS'Z'"))
         (tf/unparse (tf/formatters :basic-date-time-no-ms)))))

(defn facebook-get
  [method args]
  (client/get (str fb-https method) args))

(defn parse-access-token
  [{:keys [body]}]
  {:access_token (-> body
                     (clojure.string/split #"=")
                     (second))})


(defn fetch
  []
  (let [access-token (parse-access-token
                      (facebook-get "/oauth/access_token"
                                    {:query-params
                                     {:client_id app-id
                                      :client_secret app-secret
                                      :grant_type "client_credentials"}}))
        data (loop [c 1
                    a []
                    page (parse-string
                          (:body
                           (facebook-get
                            (str "/v2.7/" page-id "/videos")
                            {:query-params
                             (merge access-token
                                    {:fields "created_time,description,id,permalink_url,picture,title"})})) true)]
               (let [{:keys [data paging]} page
                     {:keys [next]} paging]
                 (if next
                   (let [r (parse-string
                            (:body
                             (client/get next)) true)]
                     (recur (inc c) (concat a data) r))
                   a)))]
    data))

(defn scrub
  [entry]
  (let [full-text (str (:title entry) " - " (:description entry))]
    (-> entry
        (clojure.set/rename-keys {:created_time  :created-at
                                  :permalink_url :link
                                  :picture       :thumb})
        (update :id str)
        (update :created-at coerce-time))))

(defn crawl
  []
  (->> (fetch)
       (map scrub)))

(defn upload-full
  [records]
  (let [as-json (generate-string records)
        some-bytes (.getBytes as-json "UTF-8")
        input-stream (java.io.ByteArrayInputStream. some-bytes)
        key-name (apply str data-name-parts)]
    (println "-" key-name (count some-bytes))
    (s3/put-object :bucket-name bucket-full-name
                   :key key-name
                   :input-stream input-stream
                   :metadata {:content-length (count some-bytes)}
                   :return-values "ALL_OLD")))

(defn upload-segments
  [records]
  (let [r-segs (partition-all segments-per-file records)]
    (loop [n 0]
      (let [segment (nth r-segs n)
            as-json (generate-string segment)
            some-bytes (.getBytes as-json "UTF-8")
            input-stream (java.io.ByteArrayInputStream. some-bytes)
            key-name (str (first data-name-parts) "." n (last data-name-parts))]
        (println "-" key-name (count some-bytes))
        (s3/put-object :bucket-name bucket-seg-name
                       :key key-name
                       :input-stream input-stream
                       :metadata {:content-length (count some-bytes)}
                       :return-values "ALL_OLD"))
      (when (< (inc n) (count r-segs))
        (recur (inc n))))))

(defn -main
  []
  (let [records (crawl)]
    (println "Found" (count records) "records...")
    (println "Uploading full...")
    (time
     (upload-full records))
    (println "Uploading segments...")
    (time
     (upload-segments records))))
