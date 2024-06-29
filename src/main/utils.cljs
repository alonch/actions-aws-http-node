(ns utils
  (:require ["fs" :as fs]
            ["yaml" :as yaml]))

(defn str-json->clj [data]
  (-> data
      (js/JSON.parse)
      (js->clj :keywordize-keys true)))

(defn parse-str-json-or-default [data]
  (cond
    (empty? data) {}
    :else (str-json->clj data)))

(defn read-json->js [path]
  (-> (.readFileSync fs path {"encoding" 'utf8' "flag" 'r'})
      (js/JSON.parse)))

(defn read-json->clj [path]
  (-> (read-json->js path)
      (js->clj :keywordize-keys true)))

(defn read-static-content [file]
  (-> (.readFileSync fs file {"encoding" 'utf8' "flag" 'r'})
      (str)))

(defn read-yaml->js [path]
  (-> (.readFileSync fs path {"encoding" 'utf8' "flag" 'r'})
      (str)
      (yaml/parse)))

(defn read-yaml->clj [path]
  (-> (read-yaml->js path)
      (js->clj :keywordize-keys true)))

(comment (read-yaml->js "../routes.yaml") )