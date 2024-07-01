(ns parser
  (:require [clojure.core.async :refer [chan put! take!]]
            [promesa.core :as p]
            [utils]))

(defn type->schema [type]
  (cond
    (= type "number") :int
    :else :any))

(defn parse-schema [body]
  (let [var-name (-> body (:name) keyword)
        type (type->schema (:type body))]
    [var-name type]))

(defn parse-response [response]
  (let [attributes (map parse-schema (:body response))]
    {(:status-code response) {:body (->> attributes
                                         (concat [:map])
                                         (into []))}}))

(defn parse-parameter-schema [route parameter-key]
  (let [attributes (->> route
                        (:parameters)
                        (parameter-key)
                        (map parse-schema))]

    (when (not-empty attributes)
      (->> attributes (concat [:map]) (into [])))))

(defn parse-handler [route]
  (fn [{:keys [parameters]} resolve reject]
    (try
      (-> (js/require (str "./" (:entrypoint-file route)))
          (js->clj)
          (get (:entrypoint-function route))
          (apply [(clj->js parameters)])
          (.then (fn [result]
                   (try
                     (resolve (js->clj result :keywordize-keys true))
                     (catch js/Error e
                       (reject e))))))
      (catch js/Error e
        (reject e)))))

(defn parse-route [route]
  (let [path (:path route)
        method (-> route (:method) (keyword))
        responses (map parse-response (:responses route))
        query-schema (parse-parameter-schema route :query)
        path-schema (parse-parameter-schema route :path)
        body-schema (parse-parameter-schema route :body)]
    [path
     {method {:handler (parse-handler route)
              :responses (into {} responses)
              :parameters (cond-> {}
                            (not-empty query-schema) (assoc :query query-schema)
                            (not-empty path-schema) (assoc :path path-schema)
                            (not-empty body-schema) (assoc :body body-schema))}}]))

(defn parse [content]
  (let [raw-routes (:routes content)]
    (->> raw-routes
         (map parse-route)
         (into []))))

(defn parse-json-file [path]
  (parse (utils/read-json->clj path)))

(defn parse-yaml-file [path]
  (parse (utils/read-yaml->clj path)))




(defn ^:dev/before-load stop [])
  ;; (println "============= stop =================")

(defn ^:dev/after-load start []
  (println "============= restart =================")
  (-> (parse-yaml-file "../routes.yaml")
      (println))
  ;; (require '[ :as plus] :reload)
  )

