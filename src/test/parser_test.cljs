(ns parser-test
  (:require [cljs.test :refer [deftest is]]
            [parser :as subject]))

(def actual (subject/parse-yaml-file "./sample/dist/routes.yaml"))
(def advance-route (some #(when (= (first %) "/plus/{z}") %)
                         actual))
(def simple-route (some #(when (= (first %) "/") %)
                         actual))

(deftest parse-json-file-return-array
  (is (vector? actual)))

(deftest find-advance-route
  (is (= (first advance-route) "/plus/{z}")))

(deftest find-simple-route
  (is (= (first simple-route) "/")))

(deftest parse-json-file-return-path
  (let [path (first advance-route)]
    (is (= path "/plus/{z}"))))

(deftest parse-json-file-return-method
  (let [methods (second advance-route)]
    (is (contains? methods :post))))

(deftest parse-json-file-return-response-exist
  (let [details (-> advance-route
                    (second)
                    (:post))]
    (is (contains? details :responses))))

(deftest parse-json-file-return-response-status-code
  (let [responses (-> advance-route
                      (second)
                      (:post)
                      (:responses))]
    (is (contains? responses 200))))

(deftest parse-json-file-return-response-body
  (let [body (-> advance-route
                 (second)
                 (:post)
                 (:responses)
                 (get 200))]
    (is (contains? body :body))))

(deftest parse-json-file-return-response-body-schema
  (let [schema (-> advance-route
                   (second)
                   (:post)
                   (:responses)
                   (get 200)
                   (:body))]
    (is (= schema [:map
                   [:total :int]]))))

(deftest parse-json-file-return-response-parameteres
  (let [details (-> advance-route
                    (second)
                    (:post))]
    (is (contains? details :parameters))))

(deftest parse-json-file-return-response-parameteres-body
  (let [parameters (-> advance-route
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :body))))

(deftest parse-json-file-return-response-parameteres-body-schema
  (let [body (-> advance-route
                 (second)
                 (:post)
                 (:parameters)
                 (:body))]
    (is (= body [:map
                 [:y :int]]))))

(deftest parse-json-file-return-response-parameteres-path
  (let [parameters (-> advance-route
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :path))))

(deftest parse-json-file-return-response-parameteres-path-schema
  (let [path (-> advance-route
                 (second)
                 (:post)
                 (:parameters)
                 (:path))]
    (is (= path [:map
                 [:z :int]]))))

(deftest parse-json-file-return-response-parameteres-query
  (let [parameters (-> advance-route
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :query))))

(deftest parse-json-file-return-response-parameteres-query-schema
  (let [query (-> advance-route
                  (second)
                  (:post)
                  (:parameters)
                  (:query))]
    (is (= query [:map
                  [:x :int]]))))

(deftest parse-skip-missing-parameters-body
  (let [parameters (-> simple-route
                       (second)
                       (:get)
                       (:parameters))] 
    (is (not (contains? parameters :body)))))

;; (deftest parse-json-file-e2e-basic
;;   (let [actual (subject/parse-json-file "routes.json")
;;         data (-> actual 
;;                  (first) 
;;                  (dissoc :hander))]
;;     (is (= data ["/plus/{z}"
;;                  {:post {:parameters {:path [:map
;;                                              [:z int?]]
;;                                       :query [:map
;;                                               [:x
;;                                                int?]]
;;                                       :body [:map
;;                                              [:y int?]]}
;;                          :responses {200 {:body [:map [:total int?]]}}}}]))))

