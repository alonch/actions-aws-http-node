(ns router
  (:require [reitit.ring :as ring]
            [reitit.ring.malli]
            [malli.core :as m]
            [reitit.swagger :as swagger]
            [reitit.ring.coercion :as coercion]
            [reitit.coercion.malli :as rcm]
            [camel-snake-kebab.core :as csk]
            [malli.error :as me]
            ["swagger-ui-dist" :as swagger-ui]
            [clojure.string :as str]
            [malli.transform :as mt]
            [utils]
            [parser]))

(def swagger-path (.absolutePath swagger-ui))

(defn fix-swagger-static-url [path content]
  (if (= path "swagger-initializer.js") 
    (str/replace content "https://petstore.swagger.io/v2" "") 
    content))

(defn app [routes]
  (ring/ring-handler
   (ring/router [["" {:no-doc true}
                  ["/swagger.json"
                   {:get (swagger/create-swagger-handler)}]
                  ["/api-docs/{*path}"
                   {:get {:handler
                          (fn [{{:keys [path]} :path-params} resolve _reject]
                            (let [headers {:content-type (utils/get-content-type path)}
                                  file (str swagger-path "/" path)
                                  content (utils/read-static-content file)
                                  parsed-content (fix-swagger-static-url path content)]
                              (resolve {:status 200
                                        :body parsed-content
                                        :headers headers})))}}]]
                 routes]
                {:data {:coercion rcm/coercion
                        :middleware [coercion/coerce-exceptions-middleware
                                     coercion/coerce-request-middleware
                                     coercion/coerce-response-middleware]}})
   (ring/create-default-handler)))

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


(def transformers
  (mt/transformer
   mt/default-value-transformer
   mt/string-transformer
   (mt/key-transformer {:decode csk/->kebab-case-keyword})
   mt/strip-extra-keys-transformer
   mt/json-transformer))

(defn inject-default-body 
  "TODO: This is needed for GET requests that don't include body, use multi-event types instead"
  [event]
  (let [body (get event "body")]
    (assoc event "body" (or body ""))))

(defn coerce-event [event on-error]
  (try
    (-> event
        (js->clj)
        (inject-default-body)
        (#(m/coerce Event % transformers)))
    (catch js/Error e
      (on-error e)
      (js/console.error e)
      (-> e ex-data :data :explain me/humanize))))

(defn handler [path-routes, js-event on-result on-error]
  (let [callback (fn [result]
                   (-> result
                       (assoc :statusCode (:status result))
                       (dissoc :status)
                       (clj->js)
                       (on-result)))
        routes-details (parser/parse-yaml-file path-routes)
        event (coerce-event js-event on-error)
        {:keys [body query-string-parameters headers request-context]} event
        {:keys [http]} request-context
        {:keys [method path]} http
        request {:uri path
                 :query-params query-string-parameters
                 :request-method method
                 :body-params body
                 :headers headers}]
    (println request)
    ((app routes-details) request
                          callback
                          callback)))

(defn ^:dev/after-load start []
  (println "============= restart =================")
  ;; (handler "../src/test/routes.yaml"
  ;;          (utils/read-json->js "./event-api-docs.json")
  ;;          (fn [result]
  ;;            (js/console.log result))
  ;;          println)
  ((app (parser/parse-yaml-file "../src/test/routes.yaml"))
   {:request-method :get :uri "/"}
   println
   println)
  ((app (parser/parse-yaml-file "../src/test/routes.yaml"))
   {:request-method :get :uri "/api-docs/index.html"}
   println
   println)
  ((app (parser/parse-yaml-file "../src/test/routes.yaml"))
   {:request-method :get :uri "/nothing"}
   println
   println)
  )
  