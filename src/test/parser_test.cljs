(ns parser-test
  (:require [cljs.test :refer [deftest is]]
            [parser :as subject]))

(deftest parse-json-file-return-path
  (let [actual (subject/parse-json-file "routes.json")
        path (-> actual
                 (first)
                 (first))]
    (is (= path "/plus/{z}"))))

(deftest parse-json-file-return-method
  (let [actual (subject/parse-json-file "routes.json")
        method (-> actual
                   (first)
                   (second))]
    (is (contains? method :post))))

(deftest parse-json-file-return-response-exist
  (let [actual (subject/parse-json-file "routes.json")
        details (-> actual
                    (first)
                    (second)
                    (:post))]
    (is (contains? details :responses))))

(deftest parse-json-file-return-response-status-code
  (let [actual (subject/parse-json-file "routes.json")
        responses (-> actual
                      (first)
                      (second)
                      (:post)
                      (:responses))]
    (is (contains? responses 200))))

(deftest parse-json-file-return-response-body
  (let [actual (subject/parse-json-file "routes.json")
        body (-> actual
                 (first)
                 (second)
                 (:post)
                 (:responses)
                 (get 200))]
    (is (contains? body :body))))

(deftest parse-json-file-return-response-body-schema
  (let [actual (subject/parse-json-file "routes.json")
        schema (-> actual
                   (first)
                   (second)
                   (:post)
                   (:responses)
                   (get 200)
                   (:body))]
    (is (= schema [:map
                   [:total int?]]))))

(deftest parse-json-file-return-response-parameteres
  (let [actual (subject/parse-json-file "routes.json")
        details (-> actual
                    (first)
                    (second)
                    (:post))]
    (is (contains? details :parameters))))

(deftest parse-json-file-return-response-parameteres-body
  (let [actual (subject/parse-json-file "routes.json")
        parameters (-> actual
                       (first)
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :body))))

(deftest parse-json-file-return-response-parameteres-body-schema
  (let [actual (subject/parse-json-file "routes.json")
        body (-> actual
                 (first)
                 (second)
                 (:post)
                 (:parameters)
                 (:body))]
    (is (= body [:map
                 [:y int?]]))))

(deftest parse-json-file-return-response-parameteres-path
  (let [actual (subject/parse-json-file "routes.json")
        parameters (-> actual
                       (first)
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :path))))

(deftest parse-json-file-return-response-parameteres-path-schema
  (let [actual (subject/parse-json-file "routes.json")
        path (-> actual
                 (first)
                 (second)
                 (:post)
                 (:parameters)
                 (:path))]
    (is (= path [:map
                 [:z int?]]))))

(deftest parse-json-file-return-response-parameteres-query
  (let [actual (subject/parse-json-file "routes.json")
        parameters (-> actual
                       (first)
                       (second)
                       (:post)
                       (:parameters))]
    (is (contains? parameters :query))))

(deftest parse-json-file-return-response-parameteres-query-schema
  (let [actual (subject/parse-json-file "routes.json")
        query (-> actual
                 (first)
                 (second)
                 (:post)
                 (:parameters)
                 (:query))]
    (is (= query [:map
                 [:x int?]]))))