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

(def routes
  {"^q=(.+)"  (fn [q] {:query q})
   "^id=(.+)" (fn [id] {:id id})
   "^t=(.+)"  (fn [tq] {:tag-query (str/lower-case tq)})})

(defn get-query
  [ctx]
  (let [qs (get ctx :query-string)]
    (some (fn [[route handler]]
            (when-let [x (-> route
                             (re-pattern)
                             (re-find qs)
                             (second))]
              (handler x))) routes)))

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
  [index records tag-index table-name database]
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
                             (add-field (map clojure.string/trim tags) tag-weight)
                             (add-field short-description
                                        short-description-weight))]
              (capi/index-text @index id fields)
              (run! #(let [tag (str/lower-case %)]
                       (log/debug "Indexing tag:" tag)
                       (swap! tag-index conj tag)) tags))) @records)
    (log/info "Index ready")))

(defn do-search
  [{:keys [query id tag-query]} index records tag-index]
  (if @index
    (cond (not (clojure.string/blank? query))
          (let [results (capq/do-search @index query :or)]
            (mapv (fn [[rid _]]
                    (get @records rid)) results))
          ;;
          (not (clojure.string/blank? id))
          (let [results (clojure.string/split id #"%2C|,")]
            (mapv (fn [rid]
                    (get @records rid)) results))
          ;;
          (not (clojure.string/blank? tag-query))
          (filter #(.contains % tag-query) @tag-index))
    []))

(defn search-handler
  [index records tag-index]
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
                     (do-search index records tag-index)
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
    (let [port 3000
          _ (log/info "Starting Search" (str "port=" port))
          index (atom nil)
          tag-index (atom nil)
          records (atom [])
          reload-fun (fn [] (reload-index index records tag-index bucket-full database))]
      (reload-fun)
      (assoc component
             :index index
             :tag-index tag-index
             :records records
             :servers
             [(run-jetty (wrap-cors (search-handler index records tag-index)
                                    :access-control-allow-origin [#".*"]
                                    :access-control-allow-methods [:get]) {:port port
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
            :tag-index
            :records
            :servers)))
