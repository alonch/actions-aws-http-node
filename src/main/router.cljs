(ns router
  (:require [reitit.ring :as ring]
          ;;  [reitit.openapi :as openapi]
            [reitit.ring.malli]
            [malli.core :as m]
            [reitit.swagger :as swagger]
            [reitit.ring.coercion :as coercion]
            [reitit.dev.pretty :as pretty]
            [reitit.coercion.malli :as rcm]
            [reitit.coercion :as rc]
            [reitit.ring.spec :as rrs]
            [camel-snake-kebab.core :as csk]
               ;       [spec-tools.spell :as spell]
            [malli.util :as mu]
            [malli.error :as me]
            ["swagger-ui-dist" :as swagger-ui]
            [clojure.string :as str]
            [malli.transform :as mt]
            [reitit.spec :as rs]
            [utils]
            [parser]))

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

(defn get-content-type [filename]
  (let [extension (last (str/split filename #"\."))]
    (case extension
      "txt" "text/plain"
      "html" "text/html"
      "css" "text/css"
      "js" "application/javascript"
      "json" "application/json"
      "png" "image/png"
      "jpg" "image/jpeg"
      "application/octet-stream")))
(comment
  (get-content-type "swagger-initializer.js"))
(def swagger-path (.absolutePath swagger-ui))
(defn remove-petstore-url [string-buffer]
  (str/replace string-buffer "https://petstore.swagger.io/v2" ""))

(comment
  (remove-petstore-url ""))

(def app
  (ring/ring-handler
   (ring/router [["" {:no-doc true}
                  ["/swagger.json"
                   {:get (swagger/create-swagger-handler)}]
                  ["/api-docs/{*path}"
                   {:get {:handler
                          (fn [{{:keys [path]} :path-params}]
                            (let [file (str swagger-path "/" path)
                                  content (utils/read-static-content file)
                                  parsed-content (cond
                                                   (= path "swagger-initializer.js") (remove-petstore-url content)
                                                   :else content)]
                              {:status 200
                               :body parsed-content
                               :headers {:content-type (get-content-type path)}}))}}]]
                 ["/plus/{z}"
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
                                              [:y int?]]}
                          :responses {200 {:body [:map [:total int?]]}}
                          :handler (fn [data]
                                     (let [{:keys [parameters header-params]} data
                                           {{:keys [x]} :query
                                            {:keys [y]} :body
                                            {:keys [z]} :path} parameters]
                                       (js/console.log (clj->js parameters))

                                       {:status 200
                                        :body {:total (+ x y z)}}))}}]]
                {:data {:coercion rcm/coercion
                        :middleware [coercion/coerce-exceptions-middleware
                                     coercion/coerce-request-middleware
                                     coercion/coerce-response-middleware]}})
   (ring/create-default-handler)))


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
       (into {})))

(comment (cookies-str->clj "TOKEN=123; SECRET=432"))

(def Event
  [:map
   [:body [:map {:decode/json utils/parse-str-json-or-default}]]
   [:headers [:map
              [:cookie {:optional true} [:map {:decode/json cookies-str->clj}]]]]
   [:query-string-parameters {:default {}} :any]
   [:request-context [:map
                      [:http [:map
                              [:method [:keyword {:decode/string clojure.string/lower-case}]]
                              [:path :string]]]]]])


(defn inject-default-body [event]
  (let[body (get event "body")]
   (assoc event body (or body ""))))

(def event (utils/read-json->js "./event.json"))

(defn coerce-event [event]
  (try
    (-> event
        (js->clj)
        (inject-default-body)
        (#(m/coerce Event % strict-json-transformer)))
    (catch js/Error e
      (-> e ex-data :data :explain me/humanize))))

(defn handler [path-routes, js-event]
  (let [routes-json (parser/parse-json-file path-routes)
        ;; event (read-event "./event.json")
        event (coerce-event js-event)
        {:keys [body query-string-parameters headers request-context]} event
        {:keys [http]} request-context
        {:keys [method path]} http
        request {:uri path
                 :query-params query-string-parameters
                 :request-method method
                 :body-params body
                 :headers headers}
        response (app request)] 
    (-> response
        (assoc :statusCode (:status response))
        (dissoc :status)
        (clj->js))))

(comment
  (handler "./event.json" {})
  ((app) {:request-method :get :uri "/swagger.json"})
  ((app) {:request-method :get :uri "/api-docs/swagger-initializer.js"})
  ((app) {:request-method :get :uri "/nothing"}))

(comment
  (-> (js/require "./plus.js")
      (js->clj)
      (get "handler")
      (apply "hola")
      (.then js/console.log)))

;; (defn ^:dev/before-load stop [])
;;   ;; (println "============= stop =================")

(defn ^:dev/after-load start []
  (println "============= restart =================")
  (-> (handler "./event.json"  (utils/read-json->js "./event-plus.json"))
      (js/console.log))
  ;; (require '[ :as plus] :reload)
  )
  