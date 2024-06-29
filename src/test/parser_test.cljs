(ns parser-test
  (:require [cljs.test :refer [deftest is]]
            [parser :as subject]))

(def actual (subject/parse-yaml-file "routes.yaml"))

(deftest parse-json-file-return-array
  (is (vector? actual)))

(deftest parse-json-file-return-path
  (let [path (-> actual
                 (first)
                 (first))]
    (is (= path "/plus/{z}"))))

(deftest parse-json-file-return-method
  (let [method (-> actual
                   (first)
                   (second))]
    (is (contains? method :post))))

(deftest parse-json-file-return-response-exist
  (let [details (-> actual
                    (first)
                    (second)
                    (:post))]
    (is (contains? details :responses))))

(deftest parse-json-file-return-response-status-code
  (let [responses (-> actual
                      (first)
                      (second)
                      (:post)
                      (:responses))]
    (is (contains? responses 200))))

(deftest parse-json-file-return-response-body
  (let [body (-> actual
                 (first)
                 (second)
                 (:post)
                 (:responses)
                 (get 200))]
    (is (contains? body :body))))

(deftest parse-json-file-return-response-body-schema
  (let [schema (-> actual
                   (first)
                   (second)
                   (:post)
                   (:responses)
                   (get 200)
                   (:body))]
    (is (= schema [:map
                   [:total :int]]))))

(deftest parse-json-file-return-response-parameteres
  (let [details (-> actual
                    (first)
                    (second)
                    (:post))]
    (is (contains? details :parameters))))

(deftest parse-json-file-return-response-parameteres-body
  (let [parameters (-> actual
                       (first)
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :body))))

(deftest parse-json-file-return-response-parameteres-body-schema
  (let [body (-> actual
                 (first)
                 (second)
                 (:post)
                 (:parameters)
                 (:body))]
    (is (= body [:map
                 [:y :int]]))))

(deftest parse-json-file-return-response-parameteres-path
  (let [parameters (-> actual
                       (first)
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :path))))

(deftest parse-json-file-return-response-parameteres-path-schema
  (let [path (-> actual
                 (first)
                 (second)
                 (:post)
                 (:parameters)
                 (:path))]
    (is (= path [:map
                 [:z :int]]))))

(deftest parse-json-file-return-response-parameteres-query
  (let [parameters (-> actual
                       (first)
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :query))))

(deftest parse-json-file-return-response-parameteres-query-schema
  (let [query (-> actual
                  (first)
                  (second)
                  (:post)
                  (:parameters)
                  (:query))]
    (is (= query [:map
                  [:x :int]]))))

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

