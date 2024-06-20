goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___36125 = arguments.length;
var i__5727__auto___36126 = (0);
while(true){
if((i__5727__auto___36126 < len__5726__auto___36125)){
args__5732__auto__.push((arguments[i__5727__auto___36126]));

var G__36127 = (i__5727__auto___36126 + (1));
i__5727__auto___36126 = G__36127;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35847){
var G__35848 = cljs.core.first(seq35847);
var seq35847__$1 = cljs.core.next(seq35847);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35848,seq35847__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35849 = cljs.core.seq(sources);
var chunk__35850 = null;
var count__35851 = (0);
var i__35852 = (0);
while(true){
if((i__35852 < count__35851)){
var map__35857 = chunk__35850.cljs$core$IIndexed$_nth$arity$2(null, i__35852);
var map__35857__$1 = cljs.core.__destructure_map(map__35857);
var src = map__35857__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35858){var e_36128 = e35858;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36128);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36128.message)].join('')));
}

var G__36129 = seq__35849;
var G__36130 = chunk__35850;
var G__36131 = count__35851;
var G__36132 = (i__35852 + (1));
seq__35849 = G__36129;
chunk__35850 = G__36130;
count__35851 = G__36131;
i__35852 = G__36132;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35849);
if(temp__5804__auto__){
var seq__35849__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35849__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35849__$1);
var G__36133 = cljs.core.chunk_rest(seq__35849__$1);
var G__36134 = c__5525__auto__;
var G__36135 = cljs.core.count(c__5525__auto__);
var G__36136 = (0);
seq__35849 = G__36133;
chunk__35850 = G__36134;
count__35851 = G__36135;
i__35852 = G__36136;
continue;
} else {
var map__35859 = cljs.core.first(seq__35849__$1);
var map__35859__$1 = cljs.core.__destructure_map(map__35859);
var src = map__35859__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35860){var e_36137 = e35860;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36137);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36137.message)].join('')));
}

var G__36138 = cljs.core.next(seq__35849__$1);
var G__36139 = null;
var G__36140 = (0);
var G__36141 = (0);
seq__35849 = G__36138;
chunk__35850 = G__36139;
count__35851 = G__36140;
i__35852 = G__36141;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35861 = cljs.core.seq(js_requires);
var chunk__35862 = null;
var count__35863 = (0);
var i__35864 = (0);
while(true){
if((i__35864 < count__35863)){
var js_ns = chunk__35862.cljs$core$IIndexed$_nth$arity$2(null, i__35864);
var require_str_36142 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36142);


var G__36143 = seq__35861;
var G__36144 = chunk__35862;
var G__36145 = count__35863;
var G__36146 = (i__35864 + (1));
seq__35861 = G__36143;
chunk__35862 = G__36144;
count__35863 = G__36145;
i__35864 = G__36146;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35861);
if(temp__5804__auto__){
var seq__35861__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35861__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35861__$1);
var G__36147 = cljs.core.chunk_rest(seq__35861__$1);
var G__36148 = c__5525__auto__;
var G__36149 = cljs.core.count(c__5525__auto__);
var G__36150 = (0);
seq__35861 = G__36147;
chunk__35862 = G__36148;
count__35863 = G__36149;
i__35864 = G__36150;
continue;
} else {
var js_ns = cljs.core.first(seq__35861__$1);
var require_str_36151 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36151);


var G__36152 = cljs.core.next(seq__35861__$1);
var G__36153 = null;
var G__36154 = (0);
var G__36155 = (0);
seq__35861 = G__36152;
chunk__35862 = G__36153;
count__35863 = G__36154;
i__35864 = G__36155;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35866){
var map__35867 = p__35866;
var map__35867__$1 = cljs.core.__destructure_map(map__35867);
var msg = map__35867__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35867__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35868(s__35869){
return (new cljs.core.LazySeq(null,(function (){
var s__35869__$1 = s__35869;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__35869__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__35874 = cljs.core.first(xs__6360__auto__);
var map__35874__$1 = cljs.core.__destructure_map(map__35874);
var src = map__35874__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35874__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35874__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__35869__$1,map__35874,map__35874__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35867,map__35867__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35868_$_iter__35870(s__35871){
return (new cljs.core.LazySeq(null,((function (s__35869__$1,map__35874,map__35874__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35867,map__35867__$1,msg,info,reload_info){
return (function (){
var s__35871__$1 = s__35871;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__35871__$1);
if(temp__5804__auto____$1){
var s__35871__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35871__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__35871__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__35873 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__35872 = (0);
while(true){
if((i__35872 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__35872);
cljs.core.chunk_append(b__35873,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36156 = (i__35872 + (1));
i__35872 = G__36156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35873),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35868_$_iter__35870(cljs.core.chunk_rest(s__35871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35873),null);
}
} else {
var warning = cljs.core.first(s__35871__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35868_$_iter__35870(cljs.core.rest(s__35871__$2)));
}
} else {
return null;
}
break;
}
});})(s__35869__$1,map__35874,map__35874__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35867,map__35867__$1,msg,info,reload_info))
,null,null));
});})(s__35869__$1,map__35874,map__35874__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__35867,map__35867__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35868(cljs.core.rest(s__35869__$1)));
} else {
var G__36157 = cljs.core.rest(s__35869__$1);
s__35869__$1 = G__36157;
continue;
}
} else {
var G__36158 = cljs.core.rest(s__35869__$1);
s__35869__$1 = G__36158;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35875_36159 = cljs.core.seq(warnings);
var chunk__35876_36160 = null;
var count__35877_36161 = (0);
var i__35878_36162 = (0);
while(true){
if((i__35878_36162 < count__35877_36161)){
var map__35881_36163 = chunk__35876_36160.cljs$core$IIndexed$_nth$arity$2(null, i__35878_36162);
var map__35881_36164__$1 = cljs.core.__destructure_map(map__35881_36163);
var w_36165 = map__35881_36164__$1;
var msg_36166__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881_36164__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881_36164__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881_36164__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881_36164__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36169)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36167),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36168),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36166__$1)].join(''));


var G__36170 = seq__35875_36159;
var G__36171 = chunk__35876_36160;
var G__36172 = count__35877_36161;
var G__36173 = (i__35878_36162 + (1));
seq__35875_36159 = G__36170;
chunk__35876_36160 = G__36171;
count__35877_36161 = G__36172;
i__35878_36162 = G__36173;
continue;
} else {
var temp__5804__auto___36174 = cljs.core.seq(seq__35875_36159);
if(temp__5804__auto___36174){
var seq__35875_36175__$1 = temp__5804__auto___36174;
if(cljs.core.chunked_seq_QMARK_(seq__35875_36175__$1)){
var c__5525__auto___36176 = cljs.core.chunk_first(seq__35875_36175__$1);
var G__36177 = cljs.core.chunk_rest(seq__35875_36175__$1);
var G__36178 = c__5525__auto___36176;
var G__36179 = cljs.core.count(c__5525__auto___36176);
var G__36180 = (0);
seq__35875_36159 = G__36177;
chunk__35876_36160 = G__36178;
count__35877_36161 = G__36179;
i__35878_36162 = G__36180;
continue;
} else {
var map__35882_36181 = cljs.core.first(seq__35875_36175__$1);
var map__35882_36182__$1 = cljs.core.__destructure_map(map__35882_36181);
var w_36183 = map__35882_36182__$1;
var msg_36184__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35882_36182__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35882_36182__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35882_36182__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35882_36182__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36187)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36185),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36186),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36184__$1)].join(''));


var G__36188 = cljs.core.next(seq__35875_36175__$1);
var G__36189 = null;
var G__36190 = (0);
var G__36191 = (0);
seq__35875_36159 = G__36188;
chunk__35876_36160 = G__36189;
count__35877_36161 = G__36190;
i__35878_36162 = G__36191;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35865_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35865_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35883){
var map__35884 = p__35883;
var map__35884__$1 = cljs.core.__destructure_map(map__35884);
var msg = map__35884__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__35885 = cljs.core.seq(updates);
var chunk__35887 = null;
var count__35888 = (0);
var i__35889 = (0);
while(true){
if((i__35889 < count__35888)){
var path = chunk__35887.cljs$core$IIndexed$_nth$arity$2(null, i__35889);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35999_36192 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36003_36193 = null;
var count__36004_36194 = (0);
var i__36005_36195 = (0);
while(true){
if((i__36005_36195 < count__36004_36194)){
var node_36196 = chunk__36003_36193.cljs$core$IIndexed$_nth$arity$2(null, i__36005_36195);
if(cljs.core.not(node_36196.shadow$old)){
var path_match_36197 = shadow.cljs.devtools.client.browser.match_paths(node_36196.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36197)){
var new_link_36198 = (function (){var G__36031 = node_36196.cloneNode(true);
G__36031.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36197),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36031;
})();
(node_36196.shadow$old = true);

(new_link_36198.onload = ((function (seq__35999_36192,chunk__36003_36193,count__36004_36194,i__36005_36195,seq__35885,chunk__35887,count__35888,i__35889,new_link_36198,path_match_36197,node_36196,path,map__35884,map__35884__$1,msg,updates,reload_info){
return (function (e){
var seq__36032_36199 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36034_36200 = null;
var count__36035_36201 = (0);
var i__36036_36202 = (0);
while(true){
if((i__36036_36202 < count__36035_36201)){
var map__36040_36203 = chunk__36034_36200.cljs$core$IIndexed$_nth$arity$2(null, i__36036_36202);
var map__36040_36204__$1 = cljs.core.__destructure_map(map__36040_36203);
var task_36205 = map__36040_36204__$1;
var fn_str_36206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36040_36204__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36040_36204__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36208 = goog.getObjectByName(fn_str_36206,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36207)].join(''));

(fn_obj_36208.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36208.cljs$core$IFn$_invoke$arity$2(path,new_link_36198) : fn_obj_36208.call(null, path,new_link_36198));


var G__36209 = seq__36032_36199;
var G__36210 = chunk__36034_36200;
var G__36211 = count__36035_36201;
var G__36212 = (i__36036_36202 + (1));
seq__36032_36199 = G__36209;
chunk__36034_36200 = G__36210;
count__36035_36201 = G__36211;
i__36036_36202 = G__36212;
continue;
} else {
var temp__5804__auto___36213 = cljs.core.seq(seq__36032_36199);
if(temp__5804__auto___36213){
var seq__36032_36214__$1 = temp__5804__auto___36213;
if(cljs.core.chunked_seq_QMARK_(seq__36032_36214__$1)){
var c__5525__auto___36215 = cljs.core.chunk_first(seq__36032_36214__$1);
var G__36216 = cljs.core.chunk_rest(seq__36032_36214__$1);
var G__36217 = c__5525__auto___36215;
var G__36218 = cljs.core.count(c__5525__auto___36215);
var G__36219 = (0);
seq__36032_36199 = G__36216;
chunk__36034_36200 = G__36217;
count__36035_36201 = G__36218;
i__36036_36202 = G__36219;
continue;
} else {
var map__36041_36220 = cljs.core.first(seq__36032_36214__$1);
var map__36041_36221__$1 = cljs.core.__destructure_map(map__36041_36220);
var task_36222 = map__36041_36221__$1;
var fn_str_36223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36041_36221__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36041_36221__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36225 = goog.getObjectByName(fn_str_36223,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36224)].join(''));

(fn_obj_36225.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36225.cljs$core$IFn$_invoke$arity$2(path,new_link_36198) : fn_obj_36225.call(null, path,new_link_36198));


var G__36226 = cljs.core.next(seq__36032_36214__$1);
var G__36227 = null;
var G__36228 = (0);
var G__36229 = (0);
seq__36032_36199 = G__36226;
chunk__36034_36200 = G__36227;
count__36035_36201 = G__36228;
i__36036_36202 = G__36229;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36196);
});})(seq__35999_36192,chunk__36003_36193,count__36004_36194,i__36005_36195,seq__35885,chunk__35887,count__35888,i__35889,new_link_36198,path_match_36197,node_36196,path,map__35884,map__35884__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36197], 0));

goog.dom.insertSiblingAfter(new_link_36198,node_36196);


var G__36230 = seq__35999_36192;
var G__36231 = chunk__36003_36193;
var G__36232 = count__36004_36194;
var G__36233 = (i__36005_36195 + (1));
seq__35999_36192 = G__36230;
chunk__36003_36193 = G__36231;
count__36004_36194 = G__36232;
i__36005_36195 = G__36233;
continue;
} else {
var G__36234 = seq__35999_36192;
var G__36235 = chunk__36003_36193;
var G__36236 = count__36004_36194;
var G__36237 = (i__36005_36195 + (1));
seq__35999_36192 = G__36234;
chunk__36003_36193 = G__36235;
count__36004_36194 = G__36236;
i__36005_36195 = G__36237;
continue;
}
} else {
var G__36238 = seq__35999_36192;
var G__36239 = chunk__36003_36193;
var G__36240 = count__36004_36194;
var G__36241 = (i__36005_36195 + (1));
seq__35999_36192 = G__36238;
chunk__36003_36193 = G__36239;
count__36004_36194 = G__36240;
i__36005_36195 = G__36241;
continue;
}
} else {
var temp__5804__auto___36242 = cljs.core.seq(seq__35999_36192);
if(temp__5804__auto___36242){
var seq__35999_36243__$1 = temp__5804__auto___36242;
if(cljs.core.chunked_seq_QMARK_(seq__35999_36243__$1)){
var c__5525__auto___36244 = cljs.core.chunk_first(seq__35999_36243__$1);
var G__36245 = cljs.core.chunk_rest(seq__35999_36243__$1);
var G__36246 = c__5525__auto___36244;
var G__36247 = cljs.core.count(c__5525__auto___36244);
var G__36248 = (0);
seq__35999_36192 = G__36245;
chunk__36003_36193 = G__36246;
count__36004_36194 = G__36247;
i__36005_36195 = G__36248;
continue;
} else {
var node_36249 = cljs.core.first(seq__35999_36243__$1);
if(cljs.core.not(node_36249.shadow$old)){
var path_match_36250 = shadow.cljs.devtools.client.browser.match_paths(node_36249.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36250)){
var new_link_36251 = (function (){var G__36042 = node_36249.cloneNode(true);
G__36042.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36250),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36042;
})();
(node_36249.shadow$old = true);

(new_link_36251.onload = ((function (seq__35999_36192,chunk__36003_36193,count__36004_36194,i__36005_36195,seq__35885,chunk__35887,count__35888,i__35889,new_link_36251,path_match_36250,node_36249,seq__35999_36243__$1,temp__5804__auto___36242,path,map__35884,map__35884__$1,msg,updates,reload_info){
return (function (e){
var seq__36043_36252 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36045_36253 = null;
var count__36046_36254 = (0);
var i__36047_36255 = (0);
while(true){
if((i__36047_36255 < count__36046_36254)){
var map__36051_36256 = chunk__36045_36253.cljs$core$IIndexed$_nth$arity$2(null, i__36047_36255);
var map__36051_36257__$1 = cljs.core.__destructure_map(map__36051_36256);
var task_36258 = map__36051_36257__$1;
var fn_str_36259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051_36257__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36051_36257__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36261 = goog.getObjectByName(fn_str_36259,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36260)].join(''));

(fn_obj_36261.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36261.cljs$core$IFn$_invoke$arity$2(path,new_link_36251) : fn_obj_36261.call(null, path,new_link_36251));


var G__36262 = seq__36043_36252;
var G__36263 = chunk__36045_36253;
var G__36264 = count__36046_36254;
var G__36265 = (i__36047_36255 + (1));
seq__36043_36252 = G__36262;
chunk__36045_36253 = G__36263;
count__36046_36254 = G__36264;
i__36047_36255 = G__36265;
continue;
} else {
var temp__5804__auto___36266__$1 = cljs.core.seq(seq__36043_36252);
if(temp__5804__auto___36266__$1){
var seq__36043_36267__$1 = temp__5804__auto___36266__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36043_36267__$1)){
var c__5525__auto___36268 = cljs.core.chunk_first(seq__36043_36267__$1);
var G__36269 = cljs.core.chunk_rest(seq__36043_36267__$1);
var G__36270 = c__5525__auto___36268;
var G__36271 = cljs.core.count(c__5525__auto___36268);
var G__36272 = (0);
seq__36043_36252 = G__36269;
chunk__36045_36253 = G__36270;
count__36046_36254 = G__36271;
i__36047_36255 = G__36272;
continue;
} else {
var map__36052_36273 = cljs.core.first(seq__36043_36267__$1);
var map__36052_36274__$1 = cljs.core.__destructure_map(map__36052_36273);
var task_36275 = map__36052_36274__$1;
var fn_str_36276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36052_36274__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36052_36274__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36278 = goog.getObjectByName(fn_str_36276,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36277)].join(''));

(fn_obj_36278.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36278.cljs$core$IFn$_invoke$arity$2(path,new_link_36251) : fn_obj_36278.call(null, path,new_link_36251));


var G__36279 = cljs.core.next(seq__36043_36267__$1);
var G__36280 = null;
var G__36281 = (0);
var G__36282 = (0);
seq__36043_36252 = G__36279;
chunk__36045_36253 = G__36280;
count__36046_36254 = G__36281;
i__36047_36255 = G__36282;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36249);
});})(seq__35999_36192,chunk__36003_36193,count__36004_36194,i__36005_36195,seq__35885,chunk__35887,count__35888,i__35889,new_link_36251,path_match_36250,node_36249,seq__35999_36243__$1,temp__5804__auto___36242,path,map__35884,map__35884__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36250], 0));

goog.dom.insertSiblingAfter(new_link_36251,node_36249);


var G__36283 = cljs.core.next(seq__35999_36243__$1);
var G__36284 = null;
var G__36285 = (0);
var G__36286 = (0);
seq__35999_36192 = G__36283;
chunk__36003_36193 = G__36284;
count__36004_36194 = G__36285;
i__36005_36195 = G__36286;
continue;
} else {
var G__36287 = cljs.core.next(seq__35999_36243__$1);
var G__36288 = null;
var G__36289 = (0);
var G__36290 = (0);
seq__35999_36192 = G__36287;
chunk__36003_36193 = G__36288;
count__36004_36194 = G__36289;
i__36005_36195 = G__36290;
continue;
}
} else {
var G__36291 = cljs.core.next(seq__35999_36243__$1);
var G__36292 = null;
var G__36293 = (0);
var G__36294 = (0);
seq__35999_36192 = G__36291;
chunk__36003_36193 = G__36292;
count__36004_36194 = G__36293;
i__36005_36195 = G__36294;
continue;
}
}
} else {
}
}
break;
}


var G__36295 = seq__35885;
var G__36296 = chunk__35887;
var G__36297 = count__35888;
var G__36298 = (i__35889 + (1));
seq__35885 = G__36295;
chunk__35887 = G__36296;
count__35888 = G__36297;
i__35889 = G__36298;
continue;
} else {
var G__36299 = seq__35885;
var G__36300 = chunk__35887;
var G__36301 = count__35888;
var G__36302 = (i__35889 + (1));
seq__35885 = G__36299;
chunk__35887 = G__36300;
count__35888 = G__36301;
i__35889 = G__36302;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35885);
if(temp__5804__auto__){
var seq__35885__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35885__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35885__$1);
var G__36303 = cljs.core.chunk_rest(seq__35885__$1);
var G__36304 = c__5525__auto__;
var G__36305 = cljs.core.count(c__5525__auto__);
var G__36306 = (0);
seq__35885 = G__36303;
chunk__35887 = G__36304;
count__35888 = G__36305;
i__35889 = G__36306;
continue;
} else {
var path = cljs.core.first(seq__35885__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36053_36307 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36057_36308 = null;
var count__36058_36309 = (0);
var i__36059_36310 = (0);
while(true){
if((i__36059_36310 < count__36058_36309)){
var node_36311 = chunk__36057_36308.cljs$core$IIndexed$_nth$arity$2(null, i__36059_36310);
if(cljs.core.not(node_36311.shadow$old)){
var path_match_36312 = shadow.cljs.devtools.client.browser.match_paths(node_36311.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36312)){
var new_link_36313 = (function (){var G__36085 = node_36311.cloneNode(true);
G__36085.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36312),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36085;
})();
(node_36311.shadow$old = true);

(new_link_36313.onload = ((function (seq__36053_36307,chunk__36057_36308,count__36058_36309,i__36059_36310,seq__35885,chunk__35887,count__35888,i__35889,new_link_36313,path_match_36312,node_36311,path,seq__35885__$1,temp__5804__auto__,map__35884,map__35884__$1,msg,updates,reload_info){
return (function (e){
var seq__36086_36314 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36088_36315 = null;
var count__36089_36316 = (0);
var i__36090_36317 = (0);
while(true){
if((i__36090_36317 < count__36089_36316)){
var map__36094_36318 = chunk__36088_36315.cljs$core$IIndexed$_nth$arity$2(null, i__36090_36317);
var map__36094_36319__$1 = cljs.core.__destructure_map(map__36094_36318);
var task_36320 = map__36094_36319__$1;
var fn_str_36321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36094_36319__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36094_36319__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36323 = goog.getObjectByName(fn_str_36321,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36322)].join(''));

(fn_obj_36323.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36323.cljs$core$IFn$_invoke$arity$2(path,new_link_36313) : fn_obj_36323.call(null, path,new_link_36313));


var G__36324 = seq__36086_36314;
var G__36325 = chunk__36088_36315;
var G__36326 = count__36089_36316;
var G__36327 = (i__36090_36317 + (1));
seq__36086_36314 = G__36324;
chunk__36088_36315 = G__36325;
count__36089_36316 = G__36326;
i__36090_36317 = G__36327;
continue;
} else {
var temp__5804__auto___36328__$1 = cljs.core.seq(seq__36086_36314);
if(temp__5804__auto___36328__$1){
var seq__36086_36329__$1 = temp__5804__auto___36328__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36086_36329__$1)){
var c__5525__auto___36330 = cljs.core.chunk_first(seq__36086_36329__$1);
var G__36331 = cljs.core.chunk_rest(seq__36086_36329__$1);
var G__36332 = c__5525__auto___36330;
var G__36333 = cljs.core.count(c__5525__auto___36330);
var G__36334 = (0);
seq__36086_36314 = G__36331;
chunk__36088_36315 = G__36332;
count__36089_36316 = G__36333;
i__36090_36317 = G__36334;
continue;
} else {
var map__36095_36335 = cljs.core.first(seq__36086_36329__$1);
var map__36095_36336__$1 = cljs.core.__destructure_map(map__36095_36335);
var task_36337 = map__36095_36336__$1;
var fn_str_36338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095_36336__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36095_36336__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36340 = goog.getObjectByName(fn_str_36338,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36339)].join(''));

(fn_obj_36340.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36340.cljs$core$IFn$_invoke$arity$2(path,new_link_36313) : fn_obj_36340.call(null, path,new_link_36313));


var G__36341 = cljs.core.next(seq__36086_36329__$1);
var G__36342 = null;
var G__36343 = (0);
var G__36344 = (0);
seq__36086_36314 = G__36341;
chunk__36088_36315 = G__36342;
count__36089_36316 = G__36343;
i__36090_36317 = G__36344;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36311);
});})(seq__36053_36307,chunk__36057_36308,count__36058_36309,i__36059_36310,seq__35885,chunk__35887,count__35888,i__35889,new_link_36313,path_match_36312,node_36311,path,seq__35885__$1,temp__5804__auto__,map__35884,map__35884__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36312], 0));

goog.dom.insertSiblingAfter(new_link_36313,node_36311);


var G__36345 = seq__36053_36307;
var G__36346 = chunk__36057_36308;
var G__36347 = count__36058_36309;
var G__36348 = (i__36059_36310 + (1));
seq__36053_36307 = G__36345;
chunk__36057_36308 = G__36346;
count__36058_36309 = G__36347;
i__36059_36310 = G__36348;
continue;
} else {
var G__36349 = seq__36053_36307;
var G__36350 = chunk__36057_36308;
var G__36351 = count__36058_36309;
var G__36352 = (i__36059_36310 + (1));
seq__36053_36307 = G__36349;
chunk__36057_36308 = G__36350;
count__36058_36309 = G__36351;
i__36059_36310 = G__36352;
continue;
}
} else {
var G__36353 = seq__36053_36307;
var G__36354 = chunk__36057_36308;
var G__36355 = count__36058_36309;
var G__36356 = (i__36059_36310 + (1));
seq__36053_36307 = G__36353;
chunk__36057_36308 = G__36354;
count__36058_36309 = G__36355;
i__36059_36310 = G__36356;
continue;
}
} else {
var temp__5804__auto___36357__$1 = cljs.core.seq(seq__36053_36307);
if(temp__5804__auto___36357__$1){
var seq__36053_36358__$1 = temp__5804__auto___36357__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36053_36358__$1)){
var c__5525__auto___36359 = cljs.core.chunk_first(seq__36053_36358__$1);
var G__36360 = cljs.core.chunk_rest(seq__36053_36358__$1);
var G__36361 = c__5525__auto___36359;
var G__36362 = cljs.core.count(c__5525__auto___36359);
var G__36363 = (0);
seq__36053_36307 = G__36360;
chunk__36057_36308 = G__36361;
count__36058_36309 = G__36362;
i__36059_36310 = G__36363;
continue;
} else {
var node_36364 = cljs.core.first(seq__36053_36358__$1);
if(cljs.core.not(node_36364.shadow$old)){
var path_match_36365 = shadow.cljs.devtools.client.browser.match_paths(node_36364.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36365)){
var new_link_36366 = (function (){var G__36096 = node_36364.cloneNode(true);
G__36096.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36365),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36096;
})();
(node_36364.shadow$old = true);

(new_link_36366.onload = ((function (seq__36053_36307,chunk__36057_36308,count__36058_36309,i__36059_36310,seq__35885,chunk__35887,count__35888,i__35889,new_link_36366,path_match_36365,node_36364,seq__36053_36358__$1,temp__5804__auto___36357__$1,path,seq__35885__$1,temp__5804__auto__,map__35884,map__35884__$1,msg,updates,reload_info){
return (function (e){
var seq__36097_36367 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36099_36368 = null;
var count__36100_36369 = (0);
var i__36101_36370 = (0);
while(true){
if((i__36101_36370 < count__36100_36369)){
var map__36105_36371 = chunk__36099_36368.cljs$core$IIndexed$_nth$arity$2(null, i__36101_36370);
var map__36105_36372__$1 = cljs.core.__destructure_map(map__36105_36371);
var task_36373 = map__36105_36372__$1;
var fn_str_36374 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105_36372__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36105_36372__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36376 = goog.getObjectByName(fn_str_36374,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36375)].join(''));

(fn_obj_36376.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36376.cljs$core$IFn$_invoke$arity$2(path,new_link_36366) : fn_obj_36376.call(null, path,new_link_36366));


var G__36377 = seq__36097_36367;
var G__36378 = chunk__36099_36368;
var G__36379 = count__36100_36369;
var G__36380 = (i__36101_36370 + (1));
seq__36097_36367 = G__36377;
chunk__36099_36368 = G__36378;
count__36100_36369 = G__36379;
i__36101_36370 = G__36380;
continue;
} else {
var temp__5804__auto___36381__$2 = cljs.core.seq(seq__36097_36367);
if(temp__5804__auto___36381__$2){
var seq__36097_36382__$1 = temp__5804__auto___36381__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36097_36382__$1)){
var c__5525__auto___36383 = cljs.core.chunk_first(seq__36097_36382__$1);
var G__36384 = cljs.core.chunk_rest(seq__36097_36382__$1);
var G__36385 = c__5525__auto___36383;
var G__36386 = cljs.core.count(c__5525__auto___36383);
var G__36387 = (0);
seq__36097_36367 = G__36384;
chunk__36099_36368 = G__36385;
count__36100_36369 = G__36386;
i__36101_36370 = G__36387;
continue;
} else {
var map__36106_36388 = cljs.core.first(seq__36097_36382__$1);
var map__36106_36389__$1 = cljs.core.__destructure_map(map__36106_36388);
var task_36390 = map__36106_36389__$1;
var fn_str_36391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106_36389__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36106_36389__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36393 = goog.getObjectByName(fn_str_36391,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36392)].join(''));

(fn_obj_36393.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36393.cljs$core$IFn$_invoke$arity$2(path,new_link_36366) : fn_obj_36393.call(null, path,new_link_36366));


var G__36394 = cljs.core.next(seq__36097_36382__$1);
var G__36395 = null;
var G__36396 = (0);
var G__36397 = (0);
seq__36097_36367 = G__36394;
chunk__36099_36368 = G__36395;
count__36100_36369 = G__36396;
i__36101_36370 = G__36397;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36364);
});})(seq__36053_36307,chunk__36057_36308,count__36058_36309,i__36059_36310,seq__35885,chunk__35887,count__35888,i__35889,new_link_36366,path_match_36365,node_36364,seq__36053_36358__$1,temp__5804__auto___36357__$1,path,seq__35885__$1,temp__5804__auto__,map__35884,map__35884__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36365], 0));

goog.dom.insertSiblingAfter(new_link_36366,node_36364);


var G__36398 = cljs.core.next(seq__36053_36358__$1);
var G__36399 = null;
var G__36400 = (0);
var G__36401 = (0);
seq__36053_36307 = G__36398;
chunk__36057_36308 = G__36399;
count__36058_36309 = G__36400;
i__36059_36310 = G__36401;
continue;
} else {
var G__36402 = cljs.core.next(seq__36053_36358__$1);
var G__36403 = null;
var G__36404 = (0);
var G__36405 = (0);
seq__36053_36307 = G__36402;
chunk__36057_36308 = G__36403;
count__36058_36309 = G__36404;
i__36059_36310 = G__36405;
continue;
}
} else {
var G__36406 = cljs.core.next(seq__36053_36358__$1);
var G__36407 = null;
var G__36408 = (0);
var G__36409 = (0);
seq__36053_36307 = G__36406;
chunk__36057_36308 = G__36407;
count__36058_36309 = G__36408;
i__36059_36310 = G__36409;
continue;
}
}
} else {
}
}
break;
}


var G__36410 = cljs.core.next(seq__35885__$1);
var G__36411 = null;
var G__36412 = (0);
var G__36413 = (0);
seq__35885 = G__36410;
chunk__35887 = G__36411;
count__35888 = G__36412;
i__35889 = G__36413;
continue;
} else {
var G__36414 = cljs.core.next(seq__35885__$1);
var G__36415 = null;
var G__36416 = (0);
var G__36417 = (0);
seq__35885 = G__36414;
chunk__35887 = G__36415;
count__35888 = G__36416;
i__35889 = G__36417;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__36107){
var map__36108 = p__36107;
var map__36108__$1 = cljs.core.__destructure_map(map__36108);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36108__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36109,done,error){
var map__36110 = p__36109;
var map__36110__$1 = cljs.core.__destructure_map(map__36110);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36110__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36111,done,error){
var map__36112 = p__36111;
var map__36112__$1 = cljs.core.__destructure_map(map__36112);
var msg = map__36112__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36112__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36112__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36112__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36113){
var map__36114 = p__36113;
var map__36114__$1 = cljs.core.__destructure_map(map__36114);
var src = map__36114__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36114__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36115 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36115) : done.call(null, G__36115));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36116){
var map__36117 = p__36116;
var map__36117__$1 = cljs.core.__destructure_map(map__36117);
var msg__$1 = map__36117__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e36118){var ex = e36118;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36119){
var map__36120 = p__36119;
var map__36120__$1 = cljs.core.__destructure_map(map__36120);
var env = map__36120__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36120__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36121){
var map__36122 = p__36121;
var map__36122__$1 = cljs.core.__destructure_map(map__36122);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36122__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36123){
var map__36124 = p__36123;
var map__36124__$1 = cljs.core.__destructure_map(map__36124);
var svc = map__36124__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36124__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
