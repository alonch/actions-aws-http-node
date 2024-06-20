(ns router
  (:require ["fs" :as fs]
            [reitit.ring :as ring]
          ;;  [reitit.openapi :as openapi]
            [reitit.ring.malli]
            [malli.core :as m]
            [reitit.swagger :as swagger]
            [reitit.swagger-ui :as swagger-ui]
            [reitit.ring.coercion :as coercion]
            [reitit.dev.pretty :as pretty]
            [reitit.coercion.malli :as rcm]
            [reitit.coercion :as rc]
               ;       [reitit.ring.middleware.dev :as dev]
            [reitit.ring.spec :as spec]
            [camel-snake-kebab.core :as csk]
               ;       [spec-tools.spell :as spell]
            [malli.util :as mu]
            [malli.error :as me]
            [clojure.string :as str]
            [malli.transform :as mt]))

(def app-header
  (ring/ring-handler
   (ring/router ["/test"
                 {:post {:handler identity
                         :parameters {:header {:cookie {:token :int}}}}}]
                {:data {:coercion rcm/coercion
                        :middleware [coercion/coerce-exceptions-middleware
                                     coercion/coerce-request-middleware
                                     coercion/coerce-response-middleware]}})))
(comment

  (app-header {:uri "/test"
               :request-method :post
               :headers  {:cookie {:token "1"}}}))


(defn app []
  (ring/ring-handler
   (ring/router ["/plus/{z}"
                 {:post {:summary "plus with malli query parameters"

                         :parameters {:path [:map
                                             [:z int?]]
                                      :query [:map
                                              [:x
                                               {:title "X parameter"
                                                :description "Description for X parameter"
                                                :json-schema/default 42}
                                               int?]]
                                      :body [:map
                                             [:y int?]]
                                      :header [:map
                                               [:cookie
                                                [:map 
                                                 [:TOKEN :string]
                                                 [:SECRET :int]]]]}
                         :responses {200 {:body [:map [:total int?]]}}
                         :handler (fn [data]
                                    (let [{:keys [parameters header-params]} data
                                          {{:keys [x]} :query
                                           {:keys [y]} :body
                                           {:keys [z]} :path
                                           {{:keys [TOKEN SECRET]} :cookie} :header} parameters]
                                      (println "==")
                                      (println TOKEN SECRET)
                                      (println "==")
                                      {:status 200
                                       :body {:total (+ x y z SECRET)}}))}}]
                {:data {:coercion rcm/coercion
                        :middleware [coercion/coerce-exceptions-middleware
                                     coercion/coerce-request-middleware
                                     coercion/coerce-response-middleware]}})))


(comment
  (try
    (app)
    (catch js/Error e
      (-> e ex-data :data :explain me/humanize))))

(def strict-json-transformer
  (mt/transformer
   mt/string-transformer
   (mt/key-transformer {:decode csk/->kebab-case-keyword})
   mt/strip-extra-keys-transformer
   mt/json-transformer))

(defn cookies-str->clj 
  [cookie-str]
  (->> (str/split cookie-str #"; ")
       (map #(str/split % #"="))
      ;;  (map (fn [[k v]] [(keyword (str/lower-case k)) v]))
       (into {})))

(comment (cookies-str->clj "TOKEN=123; SECRET=432"))

(defn str-json->clj [data]
  (-> data
      (js/JSON.parse)
      (js->clj :keywordize-keys true)))

(defn read-json [path]
  (-> (.readFileSync fs path {"encoding" 'utf8' "flag" 'r'})
      (str-json->clj)))

(def Event
  [:map
   [:body [:map {:decode/json str-json->clj}]]
   [:headers [:map
              [:cookie [:map {:decode/json cookies-str->clj}]]]]
   [:query-string-parameters :any]
   [:request-context [:map
                      [:http [:map
                              [:method [:keyword {:decode/string clojure.string/lower-case}]]
                              [:path :string]]]]]])


(def event (read-json "./event.json"))

(defn read-event [path]
  (let [event (read-json path)]
    (try
      (m/coerce Event event strict-json-transformer)
      (catch js/Error e
        (-> e ex-data :data :explain me/humanize)))))

(comment
  (try
    (read-event "./event.json")
    (catch js/Error e
      (-> e ex-data :data :explain me/humanize))))

(defn handler [path-routes]
  (let [routes-json (read-json path-routes)
        event (read-event "./event.json")
        {:keys [body query-string-parameters headers request-context]} event
        {:keys [http]} request-context
        {:keys [method path]} http
        request {:uri path
                 :query-params query-string-parameters
                 :request-method method
                 :body-params body
                 :headers headers}
        response ((app) request)]
    (println path query-string-parameters body headers method)
    (println response)))


(comment
  (handler "./event.json"))

(defn ^:dev/before-load stop [])
  ;; (println "============= stop =================")

(defn ^:dev/after-load start []
  (println "============= restart =================")
  (handler "./event.json"))

  ;; (js/console.log (read-json "./event.json"))
  