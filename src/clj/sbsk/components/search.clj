(ns sbsk.components.search
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]
            [ring.adapter.jetty :refer [run-jetty]]
            [caponia.index :as capi]
            [caponia.query :as capq]
            [ring.middleware.cors :refer [wrap-cors]]
            [sbsk.components.database :as db]
            [clojure.string :as str]
            [cheshire.core :refer :all]))

(def data-name-parts   ["data" ".json"])

(defn get-query
  [ctx]
  (second (re-find #"q=(.+)" (get ctx :query-string))))

(defn reload-index
  [index records table-name database]
  (log/info "Reloading index...")
  (let [data (db/read-record-as-obj
              database table-name (apply str data-name-parts))]
    (log/info "Downloaded" (count data) "records...")
    ;; create lookup
    (reset! records (reduce (fn [a e] (assoc a (:id e) e)) {} data))
    ;; load index
    (reset! index (capi/make-index))
    (run! (fn [[id record]]
            (capi/index-text @index id (str (:title record)
                                            " "
                                            (:description record)))) @records)
    (log/info "Index ready")))

(defn do-search
  [query index records]
  (if (and @index (not (clojure.string/blank? query)))
    (let [results (capq/do-search @index query :or)]
      (mapv (fn [[id _]]
              (get @records id)) results))
    []))

(defn search-handler
  [index records]
  (fn [request]
    (if-not (get request :query-string)
      {:status 400
       :body "No query"}
      (try
        (if @index
          {:status 200
           :headers {"Content-Type" "application/json"}
           :body (-> request
                     (get-query)
                     (do-search index records)
                     (generate-string))}
          {:status 503})
        (catch Exception e
          (log/error e)
          {:status 500})))))

(defn reload-index-handler
  [reload-fn header-name header-value]
  (fn [request]
    (println request)
    (if (and (= (:request-method request) :post)
             (= (get-in request [:headers (str/lower-case header-name)]) header-value))
      (do (future (reload-fn))
          {:status 201})
      {:status 405})))


(defrecord Search [database bucket-full secret-header-name secret-header-value]
  component/Lifecycle
  (start [component]
    (log/info "Starting Search")
    (let [index (atom nil)
          records (atom [])
          reload-fun (fn [] (reload-index index records bucket-full database))]
      (reload-fun)
      (assoc component
             :index index
             :records records
             :servers
             [(run-jetty (wrap-cors (search-handler index records)
                                    :access-control-allow-origin [#".*"]
                                    :access-control-allow-methods [:get]) {:port 3000
                                                                           :daemon? true
                                                                           :join? false})
              (run-jetty (reload-index-handler
                          reload-fun secret-header-name secret-header-value)
                         {:port 4000
                          :daemon? true
                          :join? false})])))

  (stop [{:keys [servers] :as component}]
    (log/info "Stopping Search")
    (run! #(.stop %) servers)
    (dissoc component
            :index
            :servers)))
