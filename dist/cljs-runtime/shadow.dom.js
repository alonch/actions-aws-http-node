goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34378 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34378(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34381 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34381(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32973 = coll;
var G__32974 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32973,G__32974) : shadow.dom.lazy_native_coll_seq.call(null, G__32973,G__32974));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33015 = arguments.length;
switch (G__33015) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33020 = arguments.length;
switch (G__33020) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33025 = arguments.length;
switch (G__33025) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33035 = arguments.length;
switch (G__33035) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33051 = arguments.length;
switch (G__33051) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33063 = arguments.length;
switch (G__33063) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e33072){if((e33072 instanceof Object)){
var e = e33072;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33072;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33087 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33088 = null;
var count__33089 = (0);
var i__33090 = (0);
while(true){
if((i__33090 < count__33089)){
var el = chunk__33088.cljs$core$IIndexed$_nth$arity$2(null, i__33090);
var handler_34413__$1 = ((function (seq__33087,chunk__33088,count__33089,i__33090,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__33087,chunk__33088,count__33089,i__33090,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34413__$1);


var G__34414 = seq__33087;
var G__34415 = chunk__33088;
var G__34416 = count__33089;
var G__34417 = (i__33090 + (1));
seq__33087 = G__34414;
chunk__33088 = G__34415;
count__33089 = G__34416;
i__33090 = G__34417;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33087);
if(temp__5804__auto__){
var seq__33087__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33087__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33087__$1);
var G__34419 = cljs.core.chunk_rest(seq__33087__$1);
var G__34420 = c__5525__auto__;
var G__34421 = cljs.core.count(c__5525__auto__);
var G__34422 = (0);
seq__33087 = G__34419;
chunk__33088 = G__34420;
count__33089 = G__34421;
i__33090 = G__34422;
continue;
} else {
var el = cljs.core.first(seq__33087__$1);
var handler_34425__$1 = ((function (seq__33087,chunk__33088,count__33089,i__33090,el,seq__33087__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__33087,chunk__33088,count__33089,i__33090,el,seq__33087__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34425__$1);


var G__34426 = cljs.core.next(seq__33087__$1);
var G__34427 = null;
var G__34428 = (0);
var G__34429 = (0);
seq__33087 = G__34426;
chunk__33088 = G__34427;
count__33089 = G__34428;
i__33090 = G__34429;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33112 = arguments.length;
switch (G__33112) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33125 = cljs.core.seq(events);
var chunk__33126 = null;
var count__33127 = (0);
var i__33128 = (0);
while(true){
if((i__33128 < count__33127)){
var vec__33137 = chunk__33126.cljs$core$IIndexed$_nth$arity$2(null, i__33128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33137,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34437 = seq__33125;
var G__34438 = chunk__33126;
var G__34439 = count__33127;
var G__34440 = (i__33128 + (1));
seq__33125 = G__34437;
chunk__33126 = G__34438;
count__33127 = G__34439;
i__33128 = G__34440;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33125);
if(temp__5804__auto__){
var seq__33125__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33125__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33125__$1);
var G__34442 = cljs.core.chunk_rest(seq__33125__$1);
var G__34443 = c__5525__auto__;
var G__34444 = cljs.core.count(c__5525__auto__);
var G__34445 = (0);
seq__33125 = G__34442;
chunk__33126 = G__34443;
count__33127 = G__34444;
i__33128 = G__34445;
continue;
} else {
var vec__33141 = cljs.core.first(seq__33125__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33141,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34446 = cljs.core.next(seq__33125__$1);
var G__34447 = null;
var G__34448 = (0);
var G__34449 = (0);
seq__33125 = G__34446;
chunk__33126 = G__34447;
count__33127 = G__34448;
i__33128 = G__34449;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33144 = cljs.core.seq(styles);
var chunk__33145 = null;
var count__33146 = (0);
var i__33147 = (0);
while(true){
if((i__33147 < count__33146)){
var vec__33167 = chunk__33145.cljs$core$IIndexed$_nth$arity$2(null, i__33147);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33167,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33167,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34453 = seq__33144;
var G__34454 = chunk__33145;
var G__34455 = count__33146;
var G__34456 = (i__33147 + (1));
seq__33144 = G__34453;
chunk__33145 = G__34454;
count__33146 = G__34455;
i__33147 = G__34456;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33144);
if(temp__5804__auto__){
var seq__33144__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33144__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33144__$1);
var G__34458 = cljs.core.chunk_rest(seq__33144__$1);
var G__34459 = c__5525__auto__;
var G__34460 = cljs.core.count(c__5525__auto__);
var G__34461 = (0);
seq__33144 = G__34458;
chunk__33145 = G__34459;
count__33146 = G__34460;
i__33147 = G__34461;
continue;
} else {
var vec__33173 = cljs.core.first(seq__33144__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33173,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34463 = cljs.core.next(seq__33144__$1);
var G__34464 = null;
var G__34465 = (0);
var G__34466 = (0);
seq__33144 = G__34463;
chunk__33145 = G__34464;
count__33146 = G__34465;
i__33147 = G__34466;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33182_34468 = key;
var G__33182_34469__$1 = (((G__33182_34468 instanceof cljs.core.Keyword))?G__33182_34468.fqn:null);
switch (G__33182_34469__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34478 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_34478,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_34478,"aria-");
}
})())){
el.setAttribute(ks_34478,value);
} else {
(el[ks_34478] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33205){
var map__33206 = p__33205;
var map__33206__$1 = cljs.core.__destructure_map(map__33206);
var props = map__33206__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33206__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33209 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33213 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33213,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33213;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33217 = arguments.length;
switch (G__33217) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33224){
var vec__33226 = p__33224;
var seq__33227 = cljs.core.seq(vec__33226);
var first__33228 = cljs.core.first(seq__33227);
var seq__33227__$1 = cljs.core.next(seq__33227);
var nn = first__33228;
var first__33228__$1 = cljs.core.first(seq__33227__$1);
var seq__33227__$2 = cljs.core.next(seq__33227__$1);
var np = first__33228__$1;
var nc = seq__33227__$2;
var node = vec__33226;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33229 = nn;
var G__33230 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33229,G__33230) : create_fn.call(null, G__33229,G__33230));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33232 = nn;
var G__33233 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33232,G__33233) : create_fn.call(null, G__33232,G__33233));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33237 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33237,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33237,(1),null);
var seq__33241_34552 = cljs.core.seq(node_children);
var chunk__33242_34553 = null;
var count__33243_34554 = (0);
var i__33244_34555 = (0);
while(true){
if((i__33244_34555 < count__33243_34554)){
var child_struct_34557 = chunk__33242_34553.cljs$core$IIndexed$_nth$arity$2(null, i__33244_34555);
var children_34562 = shadow.dom.dom_node(child_struct_34557);
if(cljs.core.seq_QMARK_(children_34562)){
var seq__33289_34563 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34562));
var chunk__33291_34564 = null;
var count__33292_34565 = (0);
var i__33293_34566 = (0);
while(true){
if((i__33293_34566 < count__33292_34565)){
var child_34570 = chunk__33291_34564.cljs$core$IIndexed$_nth$arity$2(null, i__33293_34566);
if(cljs.core.truth_(child_34570)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34570);


var G__34575 = seq__33289_34563;
var G__34578 = chunk__33291_34564;
var G__34579 = count__33292_34565;
var G__34581 = (i__33293_34566 + (1));
seq__33289_34563 = G__34575;
chunk__33291_34564 = G__34578;
count__33292_34565 = G__34579;
i__33293_34566 = G__34581;
continue;
} else {
var G__34583 = seq__33289_34563;
var G__34584 = chunk__33291_34564;
var G__34585 = count__33292_34565;
var G__34586 = (i__33293_34566 + (1));
seq__33289_34563 = G__34583;
chunk__33291_34564 = G__34584;
count__33292_34565 = G__34585;
i__33293_34566 = G__34586;
continue;
}
} else {
var temp__5804__auto___34587 = cljs.core.seq(seq__33289_34563);
if(temp__5804__auto___34587){
var seq__33289_34593__$1 = temp__5804__auto___34587;
if(cljs.core.chunked_seq_QMARK_(seq__33289_34593__$1)){
var c__5525__auto___34594 = cljs.core.chunk_first(seq__33289_34593__$1);
var G__34595 = cljs.core.chunk_rest(seq__33289_34593__$1);
var G__34596 = c__5525__auto___34594;
var G__34597 = cljs.core.count(c__5525__auto___34594);
var G__34598 = (0);
seq__33289_34563 = G__34595;
chunk__33291_34564 = G__34596;
count__33292_34565 = G__34597;
i__33293_34566 = G__34598;
continue;
} else {
var child_34603 = cljs.core.first(seq__33289_34593__$1);
if(cljs.core.truth_(child_34603)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34603);


var G__34604 = cljs.core.next(seq__33289_34593__$1);
var G__34605 = null;
var G__34606 = (0);
var G__34607 = (0);
seq__33289_34563 = G__34604;
chunk__33291_34564 = G__34605;
count__33292_34565 = G__34606;
i__33293_34566 = G__34607;
continue;
} else {
var G__34611 = cljs.core.next(seq__33289_34593__$1);
var G__34612 = null;
var G__34613 = (0);
var G__34614 = (0);
seq__33289_34563 = G__34611;
chunk__33291_34564 = G__34612;
count__33292_34565 = G__34613;
i__33293_34566 = G__34614;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34562);
}


var G__34620 = seq__33241_34552;
var G__34621 = chunk__33242_34553;
var G__34622 = count__33243_34554;
var G__34623 = (i__33244_34555 + (1));
seq__33241_34552 = G__34620;
chunk__33242_34553 = G__34621;
count__33243_34554 = G__34622;
i__33244_34555 = G__34623;
continue;
} else {
var temp__5804__auto___34626 = cljs.core.seq(seq__33241_34552);
if(temp__5804__auto___34626){
var seq__33241_34632__$1 = temp__5804__auto___34626;
if(cljs.core.chunked_seq_QMARK_(seq__33241_34632__$1)){
var c__5525__auto___34635 = cljs.core.chunk_first(seq__33241_34632__$1);
var G__34637 = cljs.core.chunk_rest(seq__33241_34632__$1);
var G__34638 = c__5525__auto___34635;
var G__34639 = cljs.core.count(c__5525__auto___34635);
var G__34640 = (0);
seq__33241_34552 = G__34637;
chunk__33242_34553 = G__34638;
count__33243_34554 = G__34639;
i__33244_34555 = G__34640;
continue;
} else {
var child_struct_34647 = cljs.core.first(seq__33241_34632__$1);
var children_34648 = shadow.dom.dom_node(child_struct_34647);
if(cljs.core.seq_QMARK_(children_34648)){
var seq__33316_34649 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34648));
var chunk__33318_34650 = null;
var count__33319_34651 = (0);
var i__33320_34652 = (0);
while(true){
if((i__33320_34652 < count__33319_34651)){
var child_34654 = chunk__33318_34650.cljs$core$IIndexed$_nth$arity$2(null, i__33320_34652);
if(cljs.core.truth_(child_34654)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34654);


var G__34656 = seq__33316_34649;
var G__34657 = chunk__33318_34650;
var G__34658 = count__33319_34651;
var G__34659 = (i__33320_34652 + (1));
seq__33316_34649 = G__34656;
chunk__33318_34650 = G__34657;
count__33319_34651 = G__34658;
i__33320_34652 = G__34659;
continue;
} else {
var G__34661 = seq__33316_34649;
var G__34662 = chunk__33318_34650;
var G__34663 = count__33319_34651;
var G__34664 = (i__33320_34652 + (1));
seq__33316_34649 = G__34661;
chunk__33318_34650 = G__34662;
count__33319_34651 = G__34663;
i__33320_34652 = G__34664;
continue;
}
} else {
var temp__5804__auto___34666__$1 = cljs.core.seq(seq__33316_34649);
if(temp__5804__auto___34666__$1){
var seq__33316_34667__$1 = temp__5804__auto___34666__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33316_34667__$1)){
var c__5525__auto___34668 = cljs.core.chunk_first(seq__33316_34667__$1);
var G__34669 = cljs.core.chunk_rest(seq__33316_34667__$1);
var G__34670 = c__5525__auto___34668;
var G__34671 = cljs.core.count(c__5525__auto___34668);
var G__34672 = (0);
seq__33316_34649 = G__34669;
chunk__33318_34650 = G__34670;
count__33319_34651 = G__34671;
i__33320_34652 = G__34672;
continue;
} else {
var child_34678 = cljs.core.first(seq__33316_34667__$1);
if(cljs.core.truth_(child_34678)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34678);


var G__34679 = cljs.core.next(seq__33316_34667__$1);
var G__34680 = null;
var G__34681 = (0);
var G__34682 = (0);
seq__33316_34649 = G__34679;
chunk__33318_34650 = G__34680;
count__33319_34651 = G__34681;
i__33320_34652 = G__34682;
continue;
} else {
var G__34683 = cljs.core.next(seq__33316_34667__$1);
var G__34684 = null;
var G__34685 = (0);
var G__34686 = (0);
seq__33316_34649 = G__34683;
chunk__33318_34650 = G__34684;
count__33319_34651 = G__34685;
i__33320_34652 = G__34686;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34648);
}


var G__34688 = cljs.core.next(seq__33241_34632__$1);
var G__34689 = null;
var G__34690 = (0);
var G__34691 = (0);
seq__33241_34552 = G__34688;
chunk__33242_34553 = G__34689;
count__33243_34554 = G__34690;
i__33244_34555 = G__34691;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33349 = cljs.core.seq(node);
var chunk__33350 = null;
var count__33351 = (0);
var i__33352 = (0);
while(true){
if((i__33352 < count__33351)){
var n = chunk__33350.cljs$core$IIndexed$_nth$arity$2(null, i__33352);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__34699 = seq__33349;
var G__34700 = chunk__33350;
var G__34701 = count__33351;
var G__34702 = (i__33352 + (1));
seq__33349 = G__34699;
chunk__33350 = G__34700;
count__33351 = G__34701;
i__33352 = G__34702;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33349);
if(temp__5804__auto__){
var seq__33349__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33349__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33349__$1);
var G__34703 = cljs.core.chunk_rest(seq__33349__$1);
var G__34704 = c__5525__auto__;
var G__34705 = cljs.core.count(c__5525__auto__);
var G__34706 = (0);
seq__33349 = G__34703;
chunk__33350 = G__34704;
count__33351 = G__34705;
i__33352 = G__34706;
continue;
} else {
var n = cljs.core.first(seq__33349__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__34712 = cljs.core.next(seq__33349__$1);
var G__34713 = null;
var G__34714 = (0);
var G__34715 = (0);
seq__33349 = G__34712;
chunk__33350 = G__34713;
count__33351 = G__34714;
i__33352 = G__34715;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33364 = arguments.length;
switch (G__33364) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33374 = arguments.length;
switch (G__33374) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33390 = arguments.length;
switch (G__33390) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___34745 = arguments.length;
var i__5727__auto___34746 = (0);
while(true){
if((i__5727__auto___34746 < len__5726__auto___34745)){
args__5732__auto__.push((arguments[i__5727__auto___34746]));

var G__34747 = (i__5727__auto___34746 + (1));
i__5727__auto___34746 = G__34747;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33416_34748 = cljs.core.seq(nodes);
var chunk__33417_34749 = null;
var count__33418_34750 = (0);
var i__33419_34751 = (0);
while(true){
if((i__33419_34751 < count__33418_34750)){
var node_34754 = chunk__33417_34749.cljs$core$IIndexed$_nth$arity$2(null, i__33419_34751);
fragment.appendChild(shadow.dom._to_dom(node_34754));


var G__34755 = seq__33416_34748;
var G__34756 = chunk__33417_34749;
var G__34757 = count__33418_34750;
var G__34758 = (i__33419_34751 + (1));
seq__33416_34748 = G__34755;
chunk__33417_34749 = G__34756;
count__33418_34750 = G__34757;
i__33419_34751 = G__34758;
continue;
} else {
var temp__5804__auto___34759 = cljs.core.seq(seq__33416_34748);
if(temp__5804__auto___34759){
var seq__33416_34760__$1 = temp__5804__auto___34759;
if(cljs.core.chunked_seq_QMARK_(seq__33416_34760__$1)){
var c__5525__auto___34761 = cljs.core.chunk_first(seq__33416_34760__$1);
var G__34762 = cljs.core.chunk_rest(seq__33416_34760__$1);
var G__34763 = c__5525__auto___34761;
var G__34764 = cljs.core.count(c__5525__auto___34761);
var G__34765 = (0);
seq__33416_34748 = G__34762;
chunk__33417_34749 = G__34763;
count__33418_34750 = G__34764;
i__33419_34751 = G__34765;
continue;
} else {
var node_34766 = cljs.core.first(seq__33416_34760__$1);
fragment.appendChild(shadow.dom._to_dom(node_34766));


var G__34767 = cljs.core.next(seq__33416_34760__$1);
var G__34768 = null;
var G__34769 = (0);
var G__34770 = (0);
seq__33416_34748 = G__34767;
chunk__33417_34749 = G__34768;
count__33418_34750 = G__34769;
i__33419_34751 = G__34770;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33410){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33410));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33435_34774 = cljs.core.seq(scripts);
var chunk__33436_34775 = null;
var count__33437_34776 = (0);
var i__33438_34777 = (0);
while(true){
if((i__33438_34777 < count__33437_34776)){
var vec__33452_34781 = chunk__33436_34775.cljs$core$IIndexed$_nth$arity$2(null, i__33438_34777);
var script_tag_34782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33452_34781,(0),null);
var script_body_34783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33452_34781,(1),null);
eval(script_body_34783);


var G__34784 = seq__33435_34774;
var G__34785 = chunk__33436_34775;
var G__34786 = count__33437_34776;
var G__34787 = (i__33438_34777 + (1));
seq__33435_34774 = G__34784;
chunk__33436_34775 = G__34785;
count__33437_34776 = G__34786;
i__33438_34777 = G__34787;
continue;
} else {
var temp__5804__auto___34788 = cljs.core.seq(seq__33435_34774);
if(temp__5804__auto___34788){
var seq__33435_34789__$1 = temp__5804__auto___34788;
if(cljs.core.chunked_seq_QMARK_(seq__33435_34789__$1)){
var c__5525__auto___34790 = cljs.core.chunk_first(seq__33435_34789__$1);
var G__34791 = cljs.core.chunk_rest(seq__33435_34789__$1);
var G__34792 = c__5525__auto___34790;
var G__34793 = cljs.core.count(c__5525__auto___34790);
var G__34794 = (0);
seq__33435_34774 = G__34791;
chunk__33436_34775 = G__34792;
count__33437_34776 = G__34793;
i__33438_34777 = G__34794;
continue;
} else {
var vec__33458_34795 = cljs.core.first(seq__33435_34789__$1);
var script_tag_34796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33458_34795,(0),null);
var script_body_34797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33458_34795,(1),null);
eval(script_body_34797);


var G__34798 = cljs.core.next(seq__33435_34789__$1);
var G__34799 = null;
var G__34800 = (0);
var G__34801 = (0);
seq__33435_34774 = G__34798;
chunk__33436_34775 = G__34799;
count__33437_34776 = G__34800;
i__33438_34777 = G__34801;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33461){
var vec__33462 = p__33461;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33462,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33462,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33495 = arguments.length;
switch (G__33495) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33556 = cljs.core.seq(style_keys);
var chunk__33557 = null;
var count__33558 = (0);
var i__33559 = (0);
while(true){
if((i__33559 < count__33558)){
var it = chunk__33557.cljs$core$IIndexed$_nth$arity$2(null, i__33559);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34810 = seq__33556;
var G__34811 = chunk__33557;
var G__34812 = count__33558;
var G__34813 = (i__33559 + (1));
seq__33556 = G__34810;
chunk__33557 = G__34811;
count__33558 = G__34812;
i__33559 = G__34813;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33556);
if(temp__5804__auto__){
var seq__33556__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33556__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__33556__$1);
var G__34817 = cljs.core.chunk_rest(seq__33556__$1);
var G__34818 = c__5525__auto__;
var G__34819 = cljs.core.count(c__5525__auto__);
var G__34820 = (0);
seq__33556 = G__34817;
chunk__33557 = G__34818;
count__33558 = G__34819;
i__33559 = G__34820;
continue;
} else {
var it = cljs.core.first(seq__33556__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34822 = cljs.core.next(seq__33556__$1);
var G__34823 = null;
var G__34824 = (0);
var G__34825 = (0);
seq__33556 = G__34822;
chunk__33557 = G__34823;
count__33558 = G__34824;
i__33559 = G__34825;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k33582,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__33599 = k33582;
var G__33599__$1 = (((G__33599 instanceof cljs.core.Keyword))?G__33599.fqn:null);
switch (G__33599__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33582,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__33605){
var vec__33607 = p__33605;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33607,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33607,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33581){
var self__ = this;
var G__33581__$1 = this;
return (new cljs.core.RecordIter((0),G__33581__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33583,other33584){
var self__ = this;
var this33583__$1 = this;
return (((!((other33584 == null)))) && ((((this33583__$1.constructor === other33584.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33583__$1.x,other33584.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33583__$1.y,other33584.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33583__$1.__extmap,other33584.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k33582){
var self__ = this;
var this__5307__auto____$1 = this;
var G__33683 = k33582;
var G__33683__$1 = (((G__33683 instanceof cljs.core.Keyword))?G__33683.fqn:null);
switch (G__33683__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33582);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__33581){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__33688 = cljs.core.keyword_identical_QMARK_;
var expr__33689 = k__5309__auto__;
if(cljs.core.truth_((pred__33688.cljs$core$IFn$_invoke$arity$2 ? pred__33688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33689) : pred__33688.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__33689)))){
return (new shadow.dom.Coordinate(G__33581,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33688.cljs$core$IFn$_invoke$arity$2 ? pred__33688.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33689) : pred__33688.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__33689)))){
return (new shadow.dom.Coordinate(self__.x,G__33581,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__33581),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__33581){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33581,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33589){
var extmap__5342__auto__ = (function (){var G__33711 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33589,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33589)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33711);
} else {
return G__33711;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33589),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33589),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k33729,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__33945 = k33729;
var G__33945__$1 = (((G__33945 instanceof cljs.core.Keyword))?G__33945.fqn:null);
switch (G__33945__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33729,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__33960){
var vec__33961 = p__33960;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33961,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33961,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33728){
var self__ = this;
var G__33728__$1 = this;
return (new cljs.core.RecordIter((0),G__33728__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33730,other33731){
var self__ = this;
var this33730__$1 = this;
return (((!((other33731 == null)))) && ((((this33730__$1.constructor === other33731.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33730__$1.w,other33731.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33730__$1.h,other33731.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33730__$1.__extmap,other33731.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k33729){
var self__ = this;
var this__5307__auto____$1 = this;
var G__34025 = k33729;
var G__34025__$1 = (((G__34025 instanceof cljs.core.Keyword))?G__34025.fqn:null);
switch (G__34025__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33729);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__33728){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__34030 = cljs.core.keyword_identical_QMARK_;
var expr__34031 = k__5309__auto__;
if(cljs.core.truth_((pred__34030.cljs$core$IFn$_invoke$arity$2 ? pred__34030.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34031) : pred__34030.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__34031)))){
return (new shadow.dom.Size(G__33728,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34030.cljs$core$IFn$_invoke$arity$2 ? pred__34030.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34031) : pred__34030.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__34031)))){
return (new shadow.dom.Size(self__.w,G__33728,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__33728),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__33728){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33728,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33933){
var extmap__5342__auto__ = (function (){var G__34078 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33933,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33933)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34078);
} else {
return G__34078;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33933),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33933),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__34908 = (i + (1));
var G__34909 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34908;
ret = G__34909;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34103){
var vec__34104 = p__34103;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34104,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34104,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34108 = arguments.length;
switch (G__34108) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34924 = ps;
var G__34925 = (i + (1));
el__$1 = G__34924;
i = G__34925;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34139 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34145_34929 = cljs.core.seq(props);
var chunk__34146_34930 = null;
var count__34147_34931 = (0);
var i__34148_34932 = (0);
while(true){
if((i__34148_34932 < count__34147_34931)){
var vec__34162_34933 = chunk__34146_34930.cljs$core$IIndexed$_nth$arity$2(null, i__34148_34932);
var k_34934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162_34933,(0),null);
var v_34935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162_34933,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_34934);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34934),v_34935);


var G__34936 = seq__34145_34929;
var G__34937 = chunk__34146_34930;
var G__34938 = count__34147_34931;
var G__34939 = (i__34148_34932 + (1));
seq__34145_34929 = G__34936;
chunk__34146_34930 = G__34937;
count__34147_34931 = G__34938;
i__34148_34932 = G__34939;
continue;
} else {
var temp__5804__auto___34940 = cljs.core.seq(seq__34145_34929);
if(temp__5804__auto___34940){
var seq__34145_34941__$1 = temp__5804__auto___34940;
if(cljs.core.chunked_seq_QMARK_(seq__34145_34941__$1)){
var c__5525__auto___34942 = cljs.core.chunk_first(seq__34145_34941__$1);
var G__34943 = cljs.core.chunk_rest(seq__34145_34941__$1);
var G__34944 = c__5525__auto___34942;
var G__34945 = cljs.core.count(c__5525__auto___34942);
var G__34946 = (0);
seq__34145_34929 = G__34943;
chunk__34146_34930 = G__34944;
count__34147_34931 = G__34945;
i__34148_34932 = G__34946;
continue;
} else {
var vec__34170_34947 = cljs.core.first(seq__34145_34941__$1);
var k_34948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34170_34947,(0),null);
var v_34949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34170_34947,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_34948);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34948),v_34949);


var G__34950 = cljs.core.next(seq__34145_34941__$1);
var G__34951 = null;
var G__34952 = (0);
var G__34953 = (0);
seq__34145_34929 = G__34950;
chunk__34146_34930 = G__34951;
count__34147_34931 = G__34952;
i__34148_34932 = G__34953;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34180 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34180,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34180,(1),null);
var seq__34186_34954 = cljs.core.seq(node_children);
var chunk__34188_34955 = null;
var count__34189_34956 = (0);
var i__34190_34957 = (0);
while(true){
if((i__34190_34957 < count__34189_34956)){
var child_struct_34958 = chunk__34188_34955.cljs$core$IIndexed$_nth$arity$2(null, i__34190_34957);
if((!((child_struct_34958 == null)))){
if(typeof child_struct_34958 === 'string'){
var text_34959 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34959),child_struct_34958].join(''));
} else {
var children_34964 = shadow.dom.svg_node(child_struct_34958);
if(cljs.core.seq_QMARK_(children_34964)){
var seq__34218_34965 = cljs.core.seq(children_34964);
var chunk__34220_34966 = null;
var count__34221_34967 = (0);
var i__34222_34968 = (0);
while(true){
if((i__34222_34968 < count__34221_34967)){
var child_34969 = chunk__34220_34966.cljs$core$IIndexed$_nth$arity$2(null, i__34222_34968);
if(cljs.core.truth_(child_34969)){
node.appendChild(child_34969);


var G__34970 = seq__34218_34965;
var G__34971 = chunk__34220_34966;
var G__34972 = count__34221_34967;
var G__34973 = (i__34222_34968 + (1));
seq__34218_34965 = G__34970;
chunk__34220_34966 = G__34971;
count__34221_34967 = G__34972;
i__34222_34968 = G__34973;
continue;
} else {
var G__34974 = seq__34218_34965;
var G__34976 = chunk__34220_34966;
var G__34977 = count__34221_34967;
var G__34978 = (i__34222_34968 + (1));
seq__34218_34965 = G__34974;
chunk__34220_34966 = G__34976;
count__34221_34967 = G__34977;
i__34222_34968 = G__34978;
continue;
}
} else {
var temp__5804__auto___34979 = cljs.core.seq(seq__34218_34965);
if(temp__5804__auto___34979){
var seq__34218_34980__$1 = temp__5804__auto___34979;
if(cljs.core.chunked_seq_QMARK_(seq__34218_34980__$1)){
var c__5525__auto___34981 = cljs.core.chunk_first(seq__34218_34980__$1);
var G__34982 = cljs.core.chunk_rest(seq__34218_34980__$1);
var G__34983 = c__5525__auto___34981;
var G__34984 = cljs.core.count(c__5525__auto___34981);
var G__34985 = (0);
seq__34218_34965 = G__34982;
chunk__34220_34966 = G__34983;
count__34221_34967 = G__34984;
i__34222_34968 = G__34985;
continue;
} else {
var child_34986 = cljs.core.first(seq__34218_34980__$1);
if(cljs.core.truth_(child_34986)){
node.appendChild(child_34986);


var G__34987 = cljs.core.next(seq__34218_34980__$1);
var G__34988 = null;
var G__34989 = (0);
var G__34990 = (0);
seq__34218_34965 = G__34987;
chunk__34220_34966 = G__34988;
count__34221_34967 = G__34989;
i__34222_34968 = G__34990;
continue;
} else {
var G__34991 = cljs.core.next(seq__34218_34980__$1);
var G__34992 = null;
var G__34993 = (0);
var G__34994 = (0);
seq__34218_34965 = G__34991;
chunk__34220_34966 = G__34992;
count__34221_34967 = G__34993;
i__34222_34968 = G__34994;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34964);
}
}


var G__34995 = seq__34186_34954;
var G__34996 = chunk__34188_34955;
var G__34997 = count__34189_34956;
var G__34998 = (i__34190_34957 + (1));
seq__34186_34954 = G__34995;
chunk__34188_34955 = G__34996;
count__34189_34956 = G__34997;
i__34190_34957 = G__34998;
continue;
} else {
var G__34999 = seq__34186_34954;
var G__35000 = chunk__34188_34955;
var G__35001 = count__34189_34956;
var G__35002 = (i__34190_34957 + (1));
seq__34186_34954 = G__34999;
chunk__34188_34955 = G__35000;
count__34189_34956 = G__35001;
i__34190_34957 = G__35002;
continue;
}
} else {
var temp__5804__auto___35003 = cljs.core.seq(seq__34186_34954);
if(temp__5804__auto___35003){
var seq__34186_35004__$1 = temp__5804__auto___35003;
if(cljs.core.chunked_seq_QMARK_(seq__34186_35004__$1)){
var c__5525__auto___35005 = cljs.core.chunk_first(seq__34186_35004__$1);
var G__35006 = cljs.core.chunk_rest(seq__34186_35004__$1);
var G__35007 = c__5525__auto___35005;
var G__35008 = cljs.core.count(c__5525__auto___35005);
var G__35009 = (0);
seq__34186_34954 = G__35006;
chunk__34188_34955 = G__35007;
count__34189_34956 = G__35008;
i__34190_34957 = G__35009;
continue;
} else {
var child_struct_35010 = cljs.core.first(seq__34186_35004__$1);
if((!((child_struct_35010 == null)))){
if(typeof child_struct_35010 === 'string'){
var text_35011 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35011),child_struct_35010].join(''));
} else {
var children_35012 = shadow.dom.svg_node(child_struct_35010);
if(cljs.core.seq_QMARK_(children_35012)){
var seq__34237_35013 = cljs.core.seq(children_35012);
var chunk__34239_35014 = null;
var count__34240_35015 = (0);
var i__34241_35016 = (0);
while(true){
if((i__34241_35016 < count__34240_35015)){
var child_35017 = chunk__34239_35014.cljs$core$IIndexed$_nth$arity$2(null, i__34241_35016);
if(cljs.core.truth_(child_35017)){
node.appendChild(child_35017);


var G__35018 = seq__34237_35013;
var G__35019 = chunk__34239_35014;
var G__35020 = count__34240_35015;
var G__35021 = (i__34241_35016 + (1));
seq__34237_35013 = G__35018;
chunk__34239_35014 = G__35019;
count__34240_35015 = G__35020;
i__34241_35016 = G__35021;
continue;
} else {
var G__35023 = seq__34237_35013;
var G__35024 = chunk__34239_35014;
var G__35025 = count__34240_35015;
var G__35026 = (i__34241_35016 + (1));
seq__34237_35013 = G__35023;
chunk__34239_35014 = G__35024;
count__34240_35015 = G__35025;
i__34241_35016 = G__35026;
continue;
}
} else {
var temp__5804__auto___35027__$1 = cljs.core.seq(seq__34237_35013);
if(temp__5804__auto___35027__$1){
var seq__34237_35028__$1 = temp__5804__auto___35027__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34237_35028__$1)){
var c__5525__auto___35029 = cljs.core.chunk_first(seq__34237_35028__$1);
var G__35030 = cljs.core.chunk_rest(seq__34237_35028__$1);
var G__35031 = c__5525__auto___35029;
var G__35032 = cljs.core.count(c__5525__auto___35029);
var G__35033 = (0);
seq__34237_35013 = G__35030;
chunk__34239_35014 = G__35031;
count__34240_35015 = G__35032;
i__34241_35016 = G__35033;
continue;
} else {
var child_35034 = cljs.core.first(seq__34237_35028__$1);
if(cljs.core.truth_(child_35034)){
node.appendChild(child_35034);


var G__35035 = cljs.core.next(seq__34237_35028__$1);
var G__35036 = null;
var G__35037 = (0);
var G__35038 = (0);
seq__34237_35013 = G__35035;
chunk__34239_35014 = G__35036;
count__34240_35015 = G__35037;
i__34241_35016 = G__35038;
continue;
} else {
var G__35039 = cljs.core.next(seq__34237_35028__$1);
var G__35040 = null;
var G__35041 = (0);
var G__35042 = (0);
seq__34237_35013 = G__35039;
chunk__34239_35014 = G__35040;
count__34240_35015 = G__35041;
i__34241_35016 = G__35042;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35012);
}
}


var G__35044 = cljs.core.next(seq__34186_35004__$1);
var G__35045 = null;
var G__35046 = (0);
var G__35047 = (0);
seq__34186_34954 = G__35044;
chunk__34188_34955 = G__35045;
count__34189_34956 = G__35046;
i__34190_34957 = G__35047;
continue;
} else {
var G__35048 = cljs.core.next(seq__34186_35004__$1);
var G__35049 = null;
var G__35050 = (0);
var G__35051 = (0);
seq__34186_34954 = G__35048;
chunk__34188_34955 = G__35049;
count__34189_34956 = G__35050;
i__34190_34957 = G__35051;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35053 = arguments.length;
var i__5727__auto___35054 = (0);
while(true){
if((i__5727__auto___35054 < len__5726__auto___35053)){
args__5732__auto__.push((arguments[i__5727__auto___35054]));

var G__35055 = (i__5727__auto___35054 + (1));
i__5727__auto___35054 = G__35055;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34274){
var G__34275 = cljs.core.first(seq34274);
var seq34274__$1 = cljs.core.next(seq34274);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34275,seq34274__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34287 = arguments.length;
switch (G__34287) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__17715__auto___35061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_34316){
var state_val_34317 = (state_34316[(1)]);
if((state_val_34317 === (1))){
var state_34316__$1 = state_34316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34316__$1,(2),once_or_cleanup);
} else {
if((state_val_34317 === (2))){
var inst_34312 = (state_34316[(2)]);
var inst_34313 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34316__$1 = (function (){var statearr_34333 = state_34316;
(statearr_34333[(7)] = inst_34312);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34316__$1,inst_34313);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17599__auto__ = null;
var shadow$dom$state_machine__17599__auto____0 = (function (){
var statearr_34335 = [null,null,null,null,null,null,null,null];
(statearr_34335[(0)] = shadow$dom$state_machine__17599__auto__);

(statearr_34335[(1)] = (1));

return statearr_34335;
});
var shadow$dom$state_machine__17599__auto____1 = (function (state_34316){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_34316);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e34339){var ex__17602__auto__ = e34339;
var statearr_34341_35062 = state_34316;
(statearr_34341_35062[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_34316[(4)]))){
var statearr_34345_35063 = state_34316;
(statearr_34345_35063[(1)] = cljs.core.first((state_34316[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35065 = state_34316;
state_34316 = G__35065;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
shadow$dom$state_machine__17599__auto__ = function(state_34316){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17599__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17599__auto____1.call(this,state_34316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17599__auto____0;
shadow$dom$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17599__auto____1;
return shadow$dom$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_34350 = f__17716__auto__();
(statearr_34350[(6)] = c__17715__auto___35061);

return statearr_34350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
