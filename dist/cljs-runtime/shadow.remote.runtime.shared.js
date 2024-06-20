goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28562){
var map__28563 = p__28562;
var map__28563__$1 = cljs.core.__destructure_map(map__28563);
var runtime = map__28563__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28563__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28793 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28793)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28565 = runtime;
var G__28566 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28793);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28565,G__28566) : shadow.remote.runtime.shared.process.call(null, G__28565,G__28566));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28567,res){
var map__28568 = p__28567;
var map__28568__$1 = cljs.core.__destructure_map(map__28568);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28569 = res;
var G__28569__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28569,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28569);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28569__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28569__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28571 = arguments.length;
switch (G__28571) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28572,msg,handlers,timeout_after_ms){
var map__28573 = p__28572;
var map__28573__$1 = cljs.core.__destructure_map(map__28573);
var runtime = map__28573__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28573__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28798 = arguments.length;
var i__5727__auto___28799 = (0);
while(true){
if((i__5727__auto___28799 < len__5726__auto___28798)){
args__5732__auto__.push((arguments[i__5727__auto___28799]));

var G__28801 = (i__5727__auto___28799 + (1));
i__5727__auto___28799 = G__28801;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28580,ev,args){
var map__28581 = p__28580;
var map__28581__$1 = cljs.core.__destructure_map(map__28581);
var runtime = map__28581__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28581__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28582 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28585 = null;
var count__28586 = (0);
var i__28587 = (0);
while(true){
if((i__28587 < count__28586)){
var ext = chunk__28585.cljs$core$IIndexed$_nth$arity$2(null, i__28587);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28803 = seq__28582;
var G__28804 = chunk__28585;
var G__28805 = count__28586;
var G__28806 = (i__28587 + (1));
seq__28582 = G__28803;
chunk__28585 = G__28804;
count__28586 = G__28805;
i__28587 = G__28806;
continue;
} else {
var G__28807 = seq__28582;
var G__28808 = chunk__28585;
var G__28809 = count__28586;
var G__28810 = (i__28587 + (1));
seq__28582 = G__28807;
chunk__28585 = G__28808;
count__28586 = G__28809;
i__28587 = G__28810;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28582);
if(temp__5804__auto__){
var seq__28582__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28582__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28582__$1);
var G__28811 = cljs.core.chunk_rest(seq__28582__$1);
var G__28812 = c__5525__auto__;
var G__28813 = cljs.core.count(c__5525__auto__);
var G__28814 = (0);
seq__28582 = G__28811;
chunk__28585 = G__28812;
count__28586 = G__28813;
i__28587 = G__28814;
continue;
} else {
var ext = cljs.core.first(seq__28582__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28815 = cljs.core.next(seq__28582__$1);
var G__28816 = null;
var G__28817 = (0);
var G__28818 = (0);
seq__28582 = G__28815;
chunk__28585 = G__28816;
count__28586 = G__28817;
i__28587 = G__28818;
continue;
} else {
var G__28819 = cljs.core.next(seq__28582__$1);
var G__28820 = null;
var G__28821 = (0);
var G__28822 = (0);
seq__28582 = G__28819;
chunk__28585 = G__28820;
count__28586 = G__28821;
i__28587 = G__28822;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28575){
var G__28577 = cljs.core.first(seq28575);
var seq28575__$1 = cljs.core.next(seq28575);
var G__28578 = cljs.core.first(seq28575__$1);
var seq28575__$2 = cljs.core.next(seq28575__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28577,G__28578,seq28575__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28618,p__28619){
var map__28620 = p__28618;
var map__28620__$1 = cljs.core.__destructure_map(map__28620);
var runtime = map__28620__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28620__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28621 = p__28619;
var map__28621__$1 = cljs.core.__destructure_map(map__28621);
var msg = map__28621__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28621__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__28623 = cljs.core.deref(state_ref);
var map__28623__$1 = cljs.core.__destructure_map(map__28623);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28623__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28623__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28626,msg){
var map__28627 = p__28626;
var map__28627__$1 = cljs.core.__destructure_map(map__28627);
var runtime = map__28627__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28627__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28629,key,p__28630){
var map__28631 = p__28629;
var map__28631__$1 = cljs.core.__destructure_map(map__28631);
var state = map__28631__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28631__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28632 = p__28630;
var map__28632__$1 = cljs.core.__destructure_map(map__28632);
var spec = map__28632__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28632__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28632__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28636,key,spec){
var map__28637 = p__28636;
var map__28637__$1 = cljs.core.__destructure_map(map__28637);
var runtime = map__28637__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28637__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___28830 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___28830 == null)){
} else {
var on_welcome_28831 = temp__5808__auto___28830;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_28831.cljs$core$IFn$_invoke$arity$0 ? on_welcome_28831.cljs$core$IFn$_invoke$arity$0() : on_welcome_28831.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28639_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28639_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28640_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28640_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28641_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28641_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28643_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28643_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28644_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28644_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28658,key){
var map__28660 = p__28658;
var map__28660__$1 = cljs.core.__destructure_map(map__28660);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28660__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28695,msg){
var map__28696 = p__28695;
var map__28696__$1 = cljs.core.__destructure_map(map__28696);
var runtime = map__28696__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28696__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28751,p__28752){
var map__28753 = p__28751;
var map__28753__$1 = cljs.core.__destructure_map(map__28753);
var runtime = map__28753__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28754 = p__28752;
var map__28754__$1 = cljs.core.__destructure_map(map__28754);
var msg = map__28754__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28754__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28754__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__28759 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28761 = null;
var count__28762 = (0);
var i__28763 = (0);
while(true){
if((i__28763 < count__28762)){
var map__28784 = chunk__28761.cljs$core$IIndexed$_nth$arity$2(null, i__28763);
var map__28784__$1 = cljs.core.__destructure_map(map__28784);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28784__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__28837 = seq__28759;
var G__28838 = chunk__28761;
var G__28839 = count__28762;
var G__28840 = (i__28763 + (1));
seq__28759 = G__28837;
chunk__28761 = G__28838;
count__28762 = G__28839;
i__28763 = G__28840;
continue;
} else {
var G__28841 = seq__28759;
var G__28842 = chunk__28761;
var G__28843 = count__28762;
var G__28844 = (i__28763 + (1));
seq__28759 = G__28841;
chunk__28761 = G__28842;
count__28762 = G__28843;
i__28763 = G__28844;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28759);
if(temp__5804__auto__){
var seq__28759__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28759__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28759__$1);
var G__28846 = cljs.core.chunk_rest(seq__28759__$1);
var G__28847 = c__5525__auto__;
var G__28848 = cljs.core.count(c__5525__auto__);
var G__28849 = (0);
seq__28759 = G__28846;
chunk__28761 = G__28847;
count__28762 = G__28848;
i__28763 = G__28849;
continue;
} else {
var map__28786 = cljs.core.first(seq__28759__$1);
var map__28786__$1 = cljs.core.__destructure_map(map__28786);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28786__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__28850 = cljs.core.next(seq__28759__$1);
var G__28851 = null;
var G__28852 = (0);
var G__28853 = (0);
seq__28759 = G__28850;
chunk__28761 = G__28851;
count__28762 = G__28852;
i__28763 = G__28853;
continue;
} else {
var G__28854 = cljs.core.next(seq__28759__$1);
var G__28855 = null;
var G__28856 = (0);
var G__28857 = (0);
seq__28759 = G__28854;
chunk__28761 = G__28855;
count__28762 = G__28856;
i__28763 = G__28857;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
