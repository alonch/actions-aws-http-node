(ns utils
  (:require ["fs" :as fs]))

(defn str-json->clj [data]
  (-> data
      (js/JSON.parse)
      (js->clj :keywordize-keys true)))

(defn parse-str-json-or-default [data]
  (cond
    (empty? data) {}
    :else (str-json->clj data)))

(defn read-json->clj [path]
  (-> (.readFileSync fs path {"encoding" 'utf8' "flag" 'r'})
      (str-json->clj)))

(defn read-json->js [path]
  (-> (.readFileSync fs path {"encoding" 'utf8' "flag" 'r'})
      (js/JSON.parse)))

(defn read-static-content [file]
  (-> (.readFileSync fs file {"encoding" 'utf8' "flag" 'r'})
      (str)))