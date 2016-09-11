(ns figwheel.connect (:require [sbsk.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/sbsk.core.mount-root (apply js/sbsk.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'sbsk.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

