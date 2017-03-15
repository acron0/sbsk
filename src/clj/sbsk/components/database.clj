(ns sbsk.components.database
  (:require [com.stuartsierra.component :as component]
            [taoensso.timbre :as log]
            [cheshire.core :refer :all]
            [amazonica.aws.s3 :as s3]
            [amazonica.aws.s3transfer :as s3t])
  (:import [java.io.StringBufferInputStream]))

(defprotocol Writer
  (write-record! [this table key-name record]))

(defprotocol Reader
  (list-keys [this table])
  (read-record-as-string [this table key-name])
  (read-record-as-obj [this table key-name]))

(defrecord Database [credentials]
  Reader
  (list-keys [this table]
    (map :key (:object-summaries
               (s3/list-objects {:profile "sbsk-fb-crawler"}
                                table))))
  (read-record-as-obj [this table key-name]
    (-> this
        (read-record-as-string table key-name)
        (parse-string keyword)))
  (read-record-as-string [this table key-name]
    (s3/get-object-as-string
     credentials
     table key-name))
  Writer
  (write-record! [this table key-name record]
    (let [as-json (generate-string record)
          some-bytes (.getBytes as-json "UTF-8")
          input-stream (java.io.ByteArrayInputStream. some-bytes)]
      (log/debug "Writing" key-name (str "(" (count some-bytes) ")") "into" table)
      (s3/put-object credentials
                     :bucket-name table
                     :key key-name
                     :input-stream input-stream
                     :metadata {:content-length (count some-bytes)}
                     :return-values "ALL_OLD")))
  component/Lifecycle
  (start [component]
    (log/info "Starting Database")
    component)

  (stop [component]
    (log/info "Stopping Database")
    component))
