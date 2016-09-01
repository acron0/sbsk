(defproject sbsk "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [clj-http "2.2.0"]
                 [clj-time "0.12.0"]
                 [cheshire "5.6.3"]
                 [amazonica "0.3.75"]
                 [me.raynes/fs "1.4.6"]
                 [environ "1.1.0"]]
  :main ^:skip-aot sbsk.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
