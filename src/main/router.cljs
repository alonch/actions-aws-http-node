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
            [reitit.ring.spec :as rrs]
            [camel-snake-kebab.core :as csk]
               ;       [spec-tools.spell :as spell]
            [malli.util :as mu]
            [malli.error :as me]
            [clojure.string :as str]
            [malli.transform :as mt]
            ["import-modules" :as import-modules]
            [reitit.spec :as rs]))

(def app-header
  (ring/ring-handler
   (ring/router ["/test"
                 {:post {:handler identity
                         :parameters {:header {:cookie {:token :int}}}}}]
                {:data {:coercion rcm/coercion
                        :middleware [coercion/coerce-exceptions-middleware
                                     coercion/coerce-request-middleware
                                     coercion/coerce-response-middleware]}})
   (constantly {:status 404, :body ""})))
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
                                                 [:t :int]]]]}
                         :responses {200 {:body [:map [:total int?]]}}
                         :handler (fn [data]
                                    (let [{:keys [parameters header-params]} data
                                          {{:keys [x]} :query
                                           {:keys [y]} :body
                                           {:keys [z]} :path
                                           {{:keys [TOKEN t]} :cookie} :header} parameters]
                                      (println "==")
                                      (js/console.log (clj->js parameters))

                                      {:status 200
                                       :body {:total (+ x y z t)}}))}}]
                {:data {:coercion rcm/coercion
                        :middleware [coercion/coerce-exceptions-middleware
                                     coercion/coerce-request-middleware
                                     coercion/coerce-response-middleware]}})
   (constantly {:status 404, :body ""})))


(comment
  (try
    (app)
    (catch js/Error e
      (-> e ex-data :data :explain me/humanize))))

(def strict-json-transformer
  (mt/transformer
   mt/default-value-transformer
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

(defn parse-str-json-or-default [data]
  (cond
    (empty? data) {}
    :else (str-json->clj data)))

(defn read-json [path]
  (-> (.readFileSync fs path {"encoding" 'utf8' "flag" 'r'})
      (str-json->clj)))

(def Event
  [:map
   [:body [:map {:decode/json parse-str-json-or-default}]]
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
    (println response)
    (println (get-in response [:body :humanized]))
    response))


(comment
  (handler "./event.json"))

(defn fn-to-call-on-load []
  (println "plus loaded"))

(def plus (str (js/process.cwd) "/plus.mjs"))

(comment
  (do (require '["./modules/plus.js" :as plus] :reload)
      (print plus))
  
  (js/console.log (->
                   (.readFileSync fs "plus.js" {"encoding" 'utf8' "flag" 'r'})
                   (str)
                   (js/eval) 
                   (.handler )))
  (js/shadow.js.jsRequire "./modules/plus")
  (str js/__filename)
  (js/process.cwd)
  (-> (import-modules "modules")
      (js->clj :keywordize-keys true)
      (:plus)
      (:handler)
      (apply "hello")
      (.then print)))
(defn ^:dev/before-load stop [])
  ;; (println "============= stop =================")

(defn ^:dev/after-load start []
  (println "============= restart =================")
  (handler "./event.json")
  ;; (require '[ :as plus] :reload)
  )

  ;; (js/console.log (read-json "./event.json"))
  