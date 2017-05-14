(ns sbsk.views.footer
  (:require [reagent.core :as r]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [clojure.string :as str]))

(def links
  {:facebook {:img "https://static.wixstatic.com/media/d75821b3625d16f95dfd8ebff761922d.png/v1/fill/w_84,h_84,al_c,usm_0.66_1.00_0.01/d75821b3625d16f95dfd8ebff761922d.png"
              :link "https://www.facebook.com/specialbooksbyspecialkids/"}
   :instagram {:img "https://static.wixstatic.com/media/1668fefe9eca1566d239f5101c2af490.png/v1/fill/w_84,h_84,al_c,usm_0.66_1.00_0.01/1668fefe9eca1566d239f5101c2af490.png"
               :link "https://www.instagram.com/specialbooksbyspecialkids/"}
   :youtube {:img "https://static.wixstatic.com/media/a1b09fe8b7f04378a9fe076748ad4a6a.png/v1/fill/w_84,h_84,al_c,usm_0.66_1.00_0.01/a1b09fe8b7f04378a9fe076748ad4a6a.png"
             :link "https://www.youtube.com/channel/UC4E98HDsPXrf5kTKIgrSmtQ"}
   :we2o {:img "https://static.wixstatic.com/media/94bdf2_42940abdd63a41b79ee50404c788881e~mv2_d_1800_1800_s_2.png/v1/fill/w_84,h_84,al_c,usm_0.66_1.00_0.01/94bdf2_42940abdd63a41b79ee50404c788881e~mv2_d_1800_1800_s_2.png"
          :link "https://we2o.org/charity/special-books-by-special-kids"}
   :amz-smile {:img "https://static.wixstatic.com/media/94bdf2_92174729123349ef81c00cc6b8049189~mv2.png/v1/fill/w_84,h_84,al_c,usm_0.66_1.00_0.01/94bdf2_92174729123349ef81c00cc6b8049189~mv2.png"
               :link "https://smile.amazon.com/ch/81-1925812"}})

(defn social-links
  [links]
  [re-com/h-box
   :class "social-links"
   :justify :center
   :children [(doall
               (for [[x {:keys [img link]}] links]
                 ^{:key (name x)}
                 [:a {:href link}
                  [:img {:src img}]]))]])

(defn license
  []
  [:div.license
   "Founded in 2016, Special Books by Special Kids, Inc. is a 501(c)3 organization that seeks to normalize the diversity of the human condition under the pillars of honesty, respect, mindfulness, positivity and collaboration. This multi-media movement supports the acceptance and celebration of all members of the neurodiverse community regardless of diagnosis, age, race, religion, income, sexual orientation, gender or gender expression."])

(defn donations
  []
  [:div.donations
   [:div "You can make a tax-deductable contribution to Special Books by Special Kids through PayPal."]
   [:iframe {:id "donations-iframe"
             :src "http://www-specialbooksbyspecialkids-org.usrfiles.com/html/94bdf2_ffe76e9111d06bd126ac7b662144d38b.html"
             :width "200px"
             :height "78px"
             :frame-border 0}]
   [:div "You can even give monthly to SBSK."]
   [:iframe {:src "http://www-specialbooksbyspecialkids-org.usrfiles.com/html/94bdf2_463ba4ae5d2705c102bc547ebac647cd.html"
             :width "200px"
             :height "110px"
             :frame-border 0}]])

(defn panel
  []
  [re-com/box
   :class "footer"
   :child [re-com/v-box
           :class "content"
           :align :center
           :children [[re-com/h-box
                       :children [(license)
                                  (donations)]]
                      [:hr]
                      (social-links links)]]])
