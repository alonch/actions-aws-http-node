goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__33613,p__33614){
var map__33615 = p__33613;
var map__33615__$1 = cljs.core.__destructure_map(map__33615);
var svc = map__33615__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33616 = p__33614;
var map__33616__$1 = cljs.core.__destructure_map(map__33616);
var msg = map__33616__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33616__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33616__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33616__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33616__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__33641,p__33642){
var map__33646 = p__33641;
var map__33646__$1 = cljs.core.__destructure_map(map__33646);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33646__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__33648 = p__33642;
var map__33648__$1 = cljs.core.__destructure_map(map__33648);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33648__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__33656,p__33657){
var map__33659 = p__33656;
var map__33659__$1 = cljs.core.__destructure_map(map__33659);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33659__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33659__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__33660 = p__33657;
var map__33660__$1 = cljs.core.__destructure_map(map__33660);
var msg = map__33660__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33660__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__33666,tid){
var map__33667 = p__33666;
var map__33667__$1 = cljs.core.__destructure_map(map__33667);
var svc = map__33667__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33667__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__33679 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__33680 = null;
var count__33681 = (0);
var i__33682 = (0);
while(true){
if((i__33682 < count__33681)){
var vec__33696 = chunk__33680.cljs$core$IIndexed$_nth$arity$2(null, i__33682);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33696,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33696,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__33767 = seq__33679;
var G__33768 = chunk__33680;
var G__33769 = count__33681;
var G__33770 = (i__33682 + (1));
seq__33679 = G__33767;
chunk__33680 = G__33768;
count__33681 = G__33769;
i__33682 = G__33770;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33679);
if(temp__5804__auto__){
var seq__33679__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33679__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33679__$1);
var G__33774 = cljs.core.chunk_rest(seq__33679__$1);
var G__33775 = c__5525__auto__;
var G__33776 = cljs.core.count(c__5525__auto__);
var G__33777 = (0);
seq__33679 = G__33774;
chunk__33680 = G__33775;
count__33681 = G__33776;
i__33682 = G__33777;
continue;
} else {
var vec__33701 = cljs.core.first(seq__33679__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33701,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__33786 = cljs.core.next(seq__33679__$1);
var G__33787 = null;
var G__33788 = (0);
var G__33789 = (0);
seq__33679 = G__33786;
chunk__33680 = G__33787;
count__33681 = G__33788;
i__33682 = G__33789;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__33670_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__33670_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__33673_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__33673_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__33674_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__33674_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__33675_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__33675_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__33715){
var map__33717 = p__33715;
var map__33717__$1 = cljs.core.__destructure_map(map__33717);
var svc = map__33717__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33717__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33717__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
