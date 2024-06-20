(ns params
  )
(def ^{:doc "HTTP token: 1*<any CHAR except CTLs or tspecials>. See RFC2068"
       :added "1.3"}
  re-token
  #"[!#$%&'*\-+.0-9A-Z\^_`a-z\|~]+")

(def ^{:doc "HTTP quoted-string: <\"> *<any TEXT except \"> <\">. See RFC2068."
       :added "1.3"}
  re-quoted
  #"\"((?:\\\"|[^\"])*)\"")

(def ^{:doc "HTTP value: token | quoted-string. See RFC2109"
       :added "1.3"}
  re-value
  (str "(" re-token ")|" re-quoted))

(def ^{:doc "Pattern for pulling the charset out of the content-type header"
       :added "1.6"}
  re-charset
  (re-pattern (str ";(?:.*\\s)?(?i:charset)=(?:" re-value ")\\s*(?:;|$)")))

(defn find-content-type-charset
  "Return the charset of a given a content-type string."
  {:added "1.8.1"}
  [s]
  (when-let [m (re-find re-charset s)]
    (or (m 1) (m 2))))

(defn request-url
  "Return the full URL of the request."
  {:added "1.2"}
  [request]
  (str (-> request :scheme name)
       "://"
       (get-in request [:headers "host"])
       (:uri request)
       (if-let [query (:query-string request)]
         (str "?" query))))

(defn content-type
  "Return the content-type of the request, or nil if no content-type is set."
  {:added "1.3"}
  [request]
  (if-let [type ^String (get (:headers request) "content-type")]
    (let [i (.indexOf type ";")]
      (if (neg? i) type (subs type 0 i)))))

(defn content-length
  "Return the content-length of the request, or nil no content-length is set."
  {:added "1.3"}
  [request]
  (if-let [^String length (get-in request [:headers "content-length"])]
    (Long/valueOf length)))

(defn character-encoding
  "Return the character encoding for the request, or nil if it is not set."
  {:added "1.3"}
  [request]
  (some-> (get-in request [:headers "content-type"])
          parsing/find-content-type-charset))

(defn urlencoded-form?
  "True if a request contains a urlencoded form in the body."
  {:added "1.3"}
  [request]
  (if-let [^String type (content-type request)]
    (.startsWith type "application/x-www-form-urlencoded")))

(defn path-info
  "Returns the relative path of the request."
  {:added "1.2"}
  [request]
  (or (:path-info request)
      (:uri request)))

(defn in-context?
  "Returns true if the URI of the request is a subpath of the supplied context."
  {:added "1.2"}
  [request context]
  (.startsWith ^String (:uri request) context))

(defn set-context
  "Associate a context and path-info with the  request. The request URI must be
  a subpath of the supplied context."
  {:added "1.2"}
  [request ^String context]
  {:pre [(in-context? request context)]}
  (assoc request
         :context context
         :path-info (subs (:uri request) (.length context))))
(defn- double-escape [^String x]
  (.replace (.replace x "\\" "\\\\") "$" "\\$"))

(def ^:private string-replace-bug?
  (= "x" (str/replace "x" #"." (fn [_x] "$0"))))

(defmacro ^:no-doc fix-string-replace-bug [x]
  (if string-replace-bug?
    `(double-escape ~x)
    x))

(defn- parse-bytes ^bytes [encoded-bytes]
  (let [encoded-len (count encoded-bytes)
        bs (byte-array (/ encoded-len 3))]
    (loop [encoded-index 1, byte-index 0]
      (if (< encoded-index encoded-len)
        (let [encoded-byte (subs encoded-bytes encoded-index (+ encoded-index 2))
              b (.byteValue (Integer/valueOf encoded-byte 16))]
          (aset bs byte-index b)
          (recur (+ encoded-index 3) (inc byte-index)))
        bs))))

(defprotocol ^:no-doc FormEncodeable
  (form-encode* [x encoding]))

(extend-protocol FormEncodeable
  String
  (form-encode* [^String unencoded ^String encoding]
    (URLEncoder/encode unencoded encoding))
  Map
  (form-encode* [params encoding]
    (letfn [(encode [x] (form-encode* x encoding))
            (encode-param [k v] (str (encode (name k)) "=" (encode v)))]
      (->> params
           (mapcat
            (fn [[k v]]
              (cond
                (sequential? v) (map #(encode-param k %) v)
                (set? v)        (sort (map #(encode-param k %) v))
                :else           (list (encode-param k v)))))
           (str/join "&"))))
  Object
  (form-encode* [x encoding]
    (form-encode* (str x) encoding))
  nil
  (form-encode* [_ __] ""))

(defn form-encode
  "Encode the supplied value into www-form-urlencoded format, often used in
  URL query strings and POST request bodies, using the specified encoding.
  If the encoding is not specified, it defaults to UTF-8"
  ([x]
   (form-encode x "UTF-8"))
  ([x encoding]
   (form-encode* x encoding)))

(defn- parse-params [params encoding]
  (let [params (form-decode params encoding)]
    (if (map? params) params {})))

(defn- assoc-param-map [req k v]
  (some-> req (assoc k (if-let [v' (req k)]
                         (reduce-kv assoc v' v)
                         v))))

(defn assoc-query-params
  "Parse and assoc parameters from the query string with the request."
  {:added "1.3"}
  [request encoding]
  (let [params (if-let [query-string (:query-string request)]
                 (parse-params query-string encoding)
                 {})]
    (-> request
        (assoc-param-map :query-params params)
        (assoc-param-map :params params))))

(defn assoc-form-params
  "Parse and assoc parameters from the request body with the request."
  {:added "1.2"}
  [request encoding]
  (let [params (if-let [body (and (urlencoded-form? request)
                                  (:body request))]
                 (parse-params body encoding)
                 {})]
    (-> request
        (assoc-param-map :form-params params)
        (assoc-param-map :params params))))

(defn params-request
  "Adds parameters from the query string and the request body to the request
  map. See: wrap-params."
  {:added "1.2"}
  ([request]
   (params-request request {}))
  ([request options]
   (let [encoding (or (:encoding options)
                      (character-encoding request)
                      "UTF-8")
         request  (if (:form-params request)
                    request
                    (assoc-form-params request encoding))]
     (if (:query-params request)
       request
       (assoc-query-params request encoding)))))

(defn wrap-params
  "Middleware to parse urlencoded parameters from the query string and form
  body (if the request is a url-encoded form). Adds the following keys to
  the request map:

  :query-params - a map of parameters from the query string
  :form-params  - a map of parameters from the body
  :params       - a merged map of all types of parameter

  Accepts the following options:      

  :encoding - encoding to use for url-decoding. If not specified, uses
              the request character encoding, or \"UTF-8\" if no request
              character encoding is set."
  ([handler]
   (wrap-params handler {}))
  ([handler options]
   (fn
     ([request]
      (handler (params-request request options)))
     ([request respond raise]
      (handler (params-request request options) respond raise)))))


(def parameters-middleware
  "Middleware to parse urlencoded parameters from the query string and form
  body (if the request is a url-encoded form). Adds the following keys to
  the request map:

  :query-params - a map of parameters from the query string
  :form-params  - a map of parameters from the body
  :params       - a merged map of all types of parameter"
  {:name ::parameters
   :compile (fn [{:keys [parameters]} _]
              (if (and (some? (:form parameters)) (nil? (:body parameters)))
                {:data {:swagger {:consumes ["application/x-www-form-urlencoded"]}}}
                {}))
   :wrap wrap-params})