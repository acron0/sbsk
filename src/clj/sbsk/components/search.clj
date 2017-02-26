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

(def short-description-weight 1)
(def description-weight 2)
(def title-weight 3)
(def tag-weight 10)

(def data-name-parts   ["data" ".json"])

(defn get-query
  [ctx]
  (second (re-find #"q=(.+)" (get ctx :query-string))))

(defmacro not-blank
  [s]
  `(when-not (clojure.string/blank? ~s) ~s))

(defn add-field
  [add-to field-or-fields weight]
  (cond
    (map? field-or-fields)
    (throw (Exception. "No maps"))
    (coll? field-or-fields)
    (reduce (fn [a f] (add-field a f weight)) add-to field-or-fields)
    (nil? field-or-fields) add-to
    :else
    (conj add-to [field-or-fields weight])))

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
            (let [{:keys [short-description
                          description
                          title
                          tags]} (:meta record)
                  fields (-> []
                             (add-field (or (not-blank title)
                                            (:title record)) title-weight)
                             (add-field (or (not-blank description)
                                            (:description record)) description-weight)
                             (add-field tags tag-weight)
                             (add-field short-description
                                        short-description-weight))]
              (capi/index-text @index id fields))) @records)
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
    (log/info "Reload request" request)
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
