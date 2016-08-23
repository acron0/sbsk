(ns sbsk.core
  (:require [clj-http.client :as client]
            [cheshire.core :refer :all]
            [amazonica.aws.cloudsearchdomain :as csd]
            [clojure.java.io :as io]
            [clj-time.core :as t]
            [clj-time.format :as f]
            [me.raynes.fs :as fs]
            [environ.core :refer [env]])
  (:gen-class))

(def app-secret      (env :sbsk-fb-app-secret))
(def app-id          (env :sbsk-fb-app-id))
(def cs-doc-endpoint (env :sbsk-cs-doc-endpoint))
(def page-id         "591976210904363")
(def fb-https        "https://graph.facebook.com")

(defn coerce-time
  [t]
  (str (->> t
            (re-find #"(.+)\+")
            (last))
       "Z"))

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
  {:type "add"
   :id (:id entry)
   :fields (-> entry
               (clojure.set/rename-keys {:created_time  :created_date
                                         :permalink_url :link
                                         :picture       :thumb})
               (update :created_date coerce-time)
               (update :id clojure.edn/read-string))})

(defn crawl
  []
  (->> (fetch)
       (map scrub)))

(defn run
  []
  (let [records (crawl)
        tf      (fs/temp-file "fbrecords")]
    (spit tf (generate-string records))
    (println (str tf))))

;; aws cloudsearchdomain --profile sbsk-fb-crawler --endpoint-url "http://doc-fbvideos-7em3llq7mvfiuqoshymtrg3acu.us-east-1.cloudsearch.amazonaws.com" upload-documents --content-type application/json --documents /tmp/fbrecords1471985133411-1995262256
