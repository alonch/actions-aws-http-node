goog.provide('shadow.cljs.devtools.client.node');
goog.scope(function(){
  shadow.cljs.devtools.client.node.goog$module$goog$object = goog.module.get('goog.object');
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__37153){
var map__37155 = p__37153;
var map__37155__$1 = cljs.core.__destructure_map(map__37155);
var msg = map__37155__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37155__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37155__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return shadow.cljs.devtools.client.node.goog$module$goog$object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__37156){
var map__37157 = p__37156;
var map__37157__$1 = cljs.core.__destructure_map(map__37157);
var msg = map__37157__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37157__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37158 = info;
var map__37158__$1 = cljs.core.__destructure_map(map__37158);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37158__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37158__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37158__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37159){
var map__37160 = p__37159;
var map__37160__$1 = cljs.core.__destructure_map(map__37160);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37160__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37160__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37161){
var map__37162 = p__37161;
var map__37162__$1 = cljs.core.__destructure_map(map__37162);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37162__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__37163 = cljs.core.seq(files_to_require);
var chunk__37164 = null;
var count__37165 = (0);
var i__37166 = (0);
while(true){
if((i__37166 < count__37165)){
var src = chunk__37164.cljs$core$IIndexed$_nth$arity$2(null, i__37166);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__37204 = seq__37163;
var G__37205 = chunk__37164;
var G__37206 = count__37165;
var G__37207 = (i__37166 + (1));
seq__37163 = G__37204;
chunk__37164 = G__37205;
count__37165 = G__37206;
i__37166 = G__37207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37163);
if(temp__5804__auto__){
var seq__37163__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37163__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37163__$1);
var G__37208 = cljs.core.chunk_rest(seq__37163__$1);
var G__37209 = c__5525__auto__;
var G__37210 = cljs.core.count(c__5525__auto__);
var G__37211 = (0);
seq__37163 = G__37208;
chunk__37164 = G__37209;
count__37165 = G__37210;
i__37166 = G__37211;
continue;
} else {
var src = cljs.core.first(seq__37163__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__37212 = cljs.core.next(seq__37163__$1);
var G__37213 = null;
var G__37214 = (0);
var G__37215 = (0);
seq__37163 = G__37212;
chunk__37164 = G__37213;
count__37165 = G__37214;
i__37166 = G__37215;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__37170,msg){
var map__37171 = p__37170;
var map__37171__$1 = cljs.core.__destructure_map(map__37171);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37171__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__37172){
var map__37173 = p__37172;
var map__37173__$1 = cljs.core.__destructure_map(map__37173);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37173__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37173__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37174,done,error){
var map__37175 = p__37174;
var map__37175__$1 = cljs.core.__destructure_map(map__37175);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37175__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__37177_37216 = cljs.core.seq(repl_sources);
var chunk__37179_37217 = null;
var count__37180_37218 = (0);
var i__37181_37219 = (0);
while(true){
if((i__37181_37219 < count__37180_37218)){
var map__37185_37220 = chunk__37179_37217.cljs$core$IIndexed$_nth$arity$2(null, i__37181_37219);
var map__37185_37221__$1 = cljs.core.__destructure_map(map__37185_37220);
var src_37222 = map__37185_37221__$1;
var output_name_37223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37185_37221__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_37223)))){
shadow.cljs.devtools.client.node.closure_import(output_name_37223);


var G__37224 = seq__37177_37216;
var G__37225 = chunk__37179_37217;
var G__37226 = count__37180_37218;
var G__37227 = (i__37181_37219 + (1));
seq__37177_37216 = G__37224;
chunk__37179_37217 = G__37225;
count__37180_37218 = G__37226;
i__37181_37219 = G__37227;
continue;
} else {
var G__37228 = seq__37177_37216;
var G__37229 = chunk__37179_37217;
var G__37230 = count__37180_37218;
var G__37231 = (i__37181_37219 + (1));
seq__37177_37216 = G__37228;
chunk__37179_37217 = G__37229;
count__37180_37218 = G__37230;
i__37181_37219 = G__37231;
continue;
}
} else {
var temp__5804__auto___37232 = cljs.core.seq(seq__37177_37216);
if(temp__5804__auto___37232){
var seq__37177_37233__$1 = temp__5804__auto___37232;
if(cljs.core.chunked_seq_QMARK_(seq__37177_37233__$1)){
var c__5525__auto___37234 = cljs.core.chunk_first(seq__37177_37233__$1);
var G__37235 = cljs.core.chunk_rest(seq__37177_37233__$1);
var G__37236 = c__5525__auto___37234;
var G__37237 = cljs.core.count(c__5525__auto___37234);
var G__37238 = (0);
seq__37177_37216 = G__37235;
chunk__37179_37217 = G__37236;
count__37180_37218 = G__37237;
i__37181_37219 = G__37238;
continue;
} else {
var map__37186_37239 = cljs.core.first(seq__37177_37233__$1);
var map__37186_37240__$1 = cljs.core.__destructure_map(map__37186_37239);
var src_37241 = map__37186_37240__$1;
var output_name_37242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37186_37240__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_37242)))){
shadow.cljs.devtools.client.node.closure_import(output_name_37242);


var G__37243 = cljs.core.next(seq__37177_37233__$1);
var G__37244 = null;
var G__37245 = (0);
var G__37246 = (0);
seq__37177_37216 = G__37243;
chunk__37179_37217 = G__37244;
count__37180_37218 = G__37245;
i__37181_37219 = G__37246;
continue;
} else {
var G__37247 = cljs.core.next(seq__37177_37233__$1);
var G__37248 = null;
var G__37249 = (0);
var G__37250 = (0);
seq__37177_37216 = G__37247;
chunk__37179_37217 = G__37248;
count__37180_37218 = G__37249;
i__37181_37219 = G__37250;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e37176){var e = e37176;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__37187,done,error){
var map__37188 = p__37187;
var map__37188__$1 = cljs.core.__destructure_map(map__37188);
var msg = map__37188__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__37190_37251 = cljs.core.seq(sources);
var chunk__37191_37252 = null;
var count__37192_37253 = (0);
var i__37193_37254 = (0);
while(true){
if((i__37193_37254 < count__37192_37253)){
var map__37196_37255 = chunk__37191_37252.cljs$core$IIndexed$_nth$arity$2(null, i__37193_37254);
var map__37196_37256__$1 = cljs.core.__destructure_map(map__37196_37255);
var src_37257 = map__37196_37256__$1;
var provides_37258 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196_37256__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_37259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196_37256__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_37259)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_37258);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_37259);
} else {
}


var G__37260 = seq__37190_37251;
var G__37261 = chunk__37191_37252;
var G__37262 = count__37192_37253;
var G__37263 = (i__37193_37254 + (1));
seq__37190_37251 = G__37260;
chunk__37191_37252 = G__37261;
count__37192_37253 = G__37262;
i__37193_37254 = G__37263;
continue;
} else {
var temp__5804__auto___37264 = cljs.core.seq(seq__37190_37251);
if(temp__5804__auto___37264){
var seq__37190_37265__$1 = temp__5804__auto___37264;
if(cljs.core.chunked_seq_QMARK_(seq__37190_37265__$1)){
var c__5525__auto___37266 = cljs.core.chunk_first(seq__37190_37265__$1);
var G__37267 = cljs.core.chunk_rest(seq__37190_37265__$1);
var G__37268 = c__5525__auto___37266;
var G__37269 = cljs.core.count(c__5525__auto___37266);
var G__37270 = (0);
seq__37190_37251 = G__37267;
chunk__37191_37252 = G__37268;
count__37192_37253 = G__37269;
i__37193_37254 = G__37270;
continue;
} else {
var map__37197_37271 = cljs.core.first(seq__37190_37265__$1);
var map__37197_37272__$1 = cljs.core.__destructure_map(map__37197_37271);
var src_37273 = map__37197_37272__$1;
var provides_37274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37197_37272__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_37275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37197_37272__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__5002__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_37275)));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_37274);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_37275);
} else {
}


var G__37276 = cljs.core.next(seq__37190_37265__$1);
var G__37277 = null;
var G__37278 = (0);
var G__37279 = (0);
seq__37190_37251 = G__37276;
chunk__37191_37252 = G__37277;
count__37192_37253 = G__37278;
i__37193_37254 = G__37279;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}catch (e37189){var e = e37189;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null, e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__37198){
var map__37199 = p__37198;
var map__37199__$1 = cljs.core.__destructure_map(map__37199);
var env = map__37199__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37200){
var map__37201 = p__37200;
var map__37201__$1 = cljs.core.__destructure_map(map__37201);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37201__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37201__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__37202){
var map__37203 = p__37202;
var map__37203__$1 = cljs.core.__destructure_map(map__37203);
var svc = map__37203__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
