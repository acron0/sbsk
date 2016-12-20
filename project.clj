(defproject sbsk "0.1.4-SNAPSHOT"
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
                 [environ "1.1.0"]
                 [compojure "1.5.1"]
                 [http-kit "2.2.0"]
                 [org.clojure/tools.cli "0.3.5"]
                 ;;
                 [com.google.guava/guava "19.0"]
                 [org.clojure/clojurescript  "1.9.89" :exclusions [com.google.guava/guava]]
                 [reagent "0.6.0-rc" :exclusions [com.google.guava/guava]]
                 [binaryage/devtools "0.6.1"]
                 [re-frame "0.8.0" :exclusions [com.google.guava/guava]]
                 [re-com "0.8.3"]
                 [garden "1.3.2"]
                 [ns-tracker "0.3.0"]
                 [cljs-http "0.1.41"]
                 [com.cognitect/transit-cljs "0.8.239"]
                 ;;
                 [cljsjs/moment "2.10.6-4"]]
  :main ^:skip-aot sbsk.core
  :target-path "target/%s"

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-garden "0.2.8"]]
  :uberjar-name "sbsk.jar"
  :min-lein-version "2.5.3"
  :source-paths ["src/clj"]
  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"
                                    "resources/public/css/compiled"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :garden {:builds [{:id           "screen"
                     :source-paths ["src/css"]
                     :stylesheet sbsk.css/screen
                     :compiler     {:output-to     "resources/public/css/compiled/screen.css"
                                    :pretty-print? true}}]}

  :profiles {:uberjar {:aot :all}
             :dev {:dependencies []
                   :plugins      [[lein-figwheel "0.5.4-3"]]}
             :data {:source-paths ["data-src"]
                    :dependencies [[amazonica "0.3.73" :exclusions [com.google.guava/guava]]]}}

  :cljsbuild {:builds
              [{:id           "dev"
                :source-paths ["src/cljs"]
                :figwheel     {:on-jsload "sbsk.core/mount-root"}
                :compiler     {:main                 sbsk.core
                               :output-to            "resources/public/js/compiled/app.js"
                               :output-dir           "resources/public/js/compiled/out"
                               :asset-path           "js/compiled/out"
                               :source-map-timestamp true}}

               {:id           "min"
                :source-paths ["src/cljs"]
                :compiler     {:main            sbsk.core
                               :output-to       "resources/public/js/compiled/app.js"
                               :optimizations   :advanced
                               :closure-defines {goog.DEBUG false}
                               :pretty-print    false}}

               {:id           "test"
                :source-paths ["src/cljs" "test/cljs"]
                :compiler     {:output-to     "resources/public/js/compiled/test.js"
                               :main          witan-viz.runner
                               :optimizations :none}}]}
  :aliases {"upload-data" ["with-profile" "data" "run" "-m" "sbsk.upload-data"]}
  :release-tasks [["vcs" "assert-committed"]
                  ["change" "version"
                   "leiningen.release/bump-version" "release"]
                  ["vcs" "commit"]
                  ["vcs" "tag"]
                  ["change" "version" "leiningen.release/bump-version"]
                  ["vcs" "commit"]
                  ["vcs" "push"]])
