(ns parser
  (:require [utils]))

(defn type->schema [type]
  (cond
    (= type "number") int?
    :else any?))

(defn parse-schema [body]
  (let [var-name (-> body (:name) keyword)
        type (type->schema (:type body))]
    [var-name type]))

(defn parse-response [response]
  (let [attributes (map parse-schema (:body response))]
    {(:status-code response) {:body (concat [:map] attributes)}}))

(defn parse-parameter-schema [route parameter-key]
  (let [attributes (->> route
                        (:parameters)
                        (parameter-key)
                        (map parse-schema))]
    (concat [:map] attributes)))

(defn parse-handler [route]
  (fn [{:keys [parameters]}]
    (let [js-params (clj->js parameters)]
      (-> (js/require (:entrypoint-file route))
          (js->clj)
          (get (:entrypoint-function route))
          (apply js-params)))));;TODO returning a Promise, would it work? 

(defn parse-route [route]
  (let [path (:path route)
        method (-> route (:method) (keyword))
        responses (map parse-response (:responses route))]
    [path
     {method {:handler (parse-handler route)
              :responses (into {} responses)
              :parameters {:query (parse-parameter-schema route :query)
                           :path (parse-parameter-schema route :path)
                           :body (parse-parameter-schema route :body)}}}]))

(defn parse-json-file [path]
  (let [content (utils/read-json->clj path)
        raw-routes (:routes content)]
    (map parse-route raw-routes)))

(defn ^:dev/before-load stop [])
  ;; (println "============= stop =================")

(defn ^:dev/after-load start []
  (println "============= restart =================")
  (-> (parse-json-file "../routes.json")
      (println))
  ;; (require '[ :as plus] :reload)
  )

