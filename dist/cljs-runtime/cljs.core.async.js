goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28725 = (function (f,blockable,meta28726){
this.f = f;
this.blockable = blockable;
this.meta28726 = meta28726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28727,meta28726__$1){
var self__ = this;
var _28727__$1 = this;
return (new cljs.core.async.t_cljs$core$async28725(self__.f,self__.blockable,meta28726__$1));
}));

(cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28727){
var self__ = this;
var _28727__$1 = this;
return self__.meta28726;
}));

(cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28726","meta28726",-1700889444,null)], null);
}));

(cljs.core.async.t_cljs$core$async28725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28725");

(cljs.core.async.t_cljs$core$async28725.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28725.
 */
cljs.core.async.__GT_t_cljs$core$async28725 = (function cljs$core$async$__GT_t_cljs$core$async28725(f,blockable,meta28726){
return (new cljs.core.async.t_cljs$core$async28725(f,blockable,meta28726));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28708 = arguments.length;
switch (G__28708) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async28725(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28789 = arguments.length;
switch (G__28789) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28795 = arguments.length;
switch (G__28795) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28802 = arguments.length;
switch (G__28802) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32959 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32959) : fn1.call(null, val_32959));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32959) : fn1.call(null, val_32959));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28827 = arguments.length;
switch (G__28827) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___32966 = n;
var x_32967 = (0);
while(true){
if((x_32967 < n__5593__auto___32966)){
(a[x_32967] = x_32967);

var G__32968 = (x_32967 + (1));
x_32967 = G__32968;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28894 = (function (flag,meta28895){
this.flag = flag;
this.meta28895 = meta28895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28896,meta28895__$1){
var self__ = this;
var _28896__$1 = this;
return (new cljs.core.async.t_cljs$core$async28894(self__.flag,meta28895__$1));
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28896){
var self__ = this;
var _28896__$1 = this;
return self__.meta28895;
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async28894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28895","meta28895",2030803037,null)], null);
}));

(cljs.core.async.t_cljs$core$async28894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28894");

(cljs.core.async.t_cljs$core$async28894.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28894.
 */
cljs.core.async.__GT_t_cljs$core$async28894 = (function cljs$core$async$__GT_t_cljs$core$async28894(flag,meta28895){
return (new cljs.core.async.t_cljs$core$async28894(flag,meta28895));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async28894(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28918 = (function (flag,cb,meta28919){
this.flag = flag;
this.cb = cb;
this.meta28919 = meta28919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28920,meta28919__$1){
var self__ = this;
var _28920__$1 = this;
return (new cljs.core.async.t_cljs$core$async28918(self__.flag,self__.cb,meta28919__$1));
}));

(cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28920){
var self__ = this;
var _28920__$1 = this;
return self__.meta28919;
}));

(cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async28918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28919","meta28919",-187750969,null)], null);
}));

(cljs.core.async.t_cljs$core$async28918.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28918");

(cljs.core.async.t_cljs$core$async28918.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async28918");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28918.
 */
cljs.core.async.__GT_t_cljs$core$async28918 = (function cljs$core$async$__GT_t_cljs$core$async28918(flag,cb,meta28919){
return (new cljs.core.async.t_cljs$core$async28918(flag,cb,meta28919));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async28918(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28928_SHARP_){
var G__28940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28928_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28940) : fret.call(null, G__28940));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28932_SHARP_){
var G__28945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28932_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__28945) : fret.call(null, G__28945));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33006 = (i + (1));
i = G__33006;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33011 = arguments.length;
var i__5727__auto___33012 = (0);
while(true){
if((i__5727__auto___33012 < len__5726__auto___33011)){
args__5732__auto__.push((arguments[i__5727__auto___33012]));

var G__33013 = (i__5727__auto___33012 + (1));
i__5727__auto___33012 = G__33013;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28972){
var map__28973 = p__28972;
var map__28973__$1 = cljs.core.__destructure_map(map__28973);
var opts = map__28973__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28956){
var G__28957 = cljs.core.first(seq28956);
var seq28956__$1 = cljs.core.next(seq28956);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28957,seq28956__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28999 = arguments.length;
switch (G__28999) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17715__auto___33022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_29084){
var state_val_29085 = (state_29084[(1)]);
if((state_val_29085 === (7))){
var inst_29075 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29112_33023 = state_29084__$1;
(statearr_29112_33023[(2)] = inst_29075);

(statearr_29112_33023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (1))){
var state_29084__$1 = state_29084;
var statearr_29114_33026 = state_29084__$1;
(statearr_29114_33026[(2)] = null);

(statearr_29114_33026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (4))){
var inst_29045 = (state_29084[(7)]);
var inst_29045__$1 = (state_29084[(2)]);
var inst_29054 = (inst_29045__$1 == null);
var state_29084__$1 = (function (){var statearr_29116 = state_29084;
(statearr_29116[(7)] = inst_29045__$1);

return statearr_29116;
})();
if(cljs.core.truth_(inst_29054)){
var statearr_29117_33028 = state_29084__$1;
(statearr_29117_33028[(1)] = (5));

} else {
var statearr_29118_33029 = state_29084__$1;
(statearr_29118_33029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (13))){
var state_29084__$1 = state_29084;
var statearr_29120_33032 = state_29084__$1;
(statearr_29120_33032[(2)] = null);

(statearr_29120_33032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (6))){
var inst_29045 = (state_29084[(7)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29084__$1,(11),to,inst_29045);
} else {
if((state_val_29085 === (3))){
var inst_29080 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29084__$1,inst_29080);
} else {
if((state_val_29085 === (12))){
var state_29084__$1 = state_29084;
var statearr_29123_33036 = state_29084__$1;
(statearr_29123_33036[(2)] = null);

(statearr_29123_33036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (2))){
var state_29084__$1 = state_29084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29084__$1,(4),from);
} else {
if((state_val_29085 === (11))){
var inst_29068 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
if(cljs.core.truth_(inst_29068)){
var statearr_29125_33037 = state_29084__$1;
(statearr_29125_33037[(1)] = (12));

} else {
var statearr_29126_33038 = state_29084__$1;
(statearr_29126_33038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (9))){
var state_29084__$1 = state_29084;
var statearr_29127_33039 = state_29084__$1;
(statearr_29127_33039[(2)] = null);

(statearr_29127_33039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (5))){
var state_29084__$1 = state_29084;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29128_33040 = state_29084__$1;
(statearr_29128_33040[(1)] = (8));

} else {
var statearr_29129_33041 = state_29084__$1;
(statearr_29129_33041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (14))){
var inst_29073 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29130_33042 = state_29084__$1;
(statearr_29130_33042[(2)] = inst_29073);

(statearr_29130_33042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (10))){
var inst_29063 = (state_29084[(2)]);
var state_29084__$1 = state_29084;
var statearr_29131_33047 = state_29084__$1;
(statearr_29131_33047[(2)] = inst_29063);

(statearr_29131_33047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29085 === (8))){
var inst_29060 = cljs.core.async.close_BANG_(to);
var state_29084__$1 = state_29084;
var statearr_29132_33054 = state_29084__$1;
(statearr_29132_33054[(2)] = inst_29060);

(statearr_29132_33054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_29134 = [null,null,null,null,null,null,null,null];
(statearr_29134[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_29134[(1)] = (1));

return statearr_29134;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_29084){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29084);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29135){var ex__17602__auto__ = e29135;
var statearr_29136_33057 = state_29084;
(statearr_29136_33057[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29084[(4)]))){
var statearr_29137_33058 = state_29084;
(statearr_29137_33058[(1)] = cljs.core.first((state_29084[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33059 = state_29084;
state_29084 = G__33059;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_29084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_29084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_29140 = f__17716__auto__();
(statearr_29140[(6)] = c__17715__auto___33022);

return statearr_29140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__29149){
var vec__29150 = p__29149;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29150,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29150,(1),null);
var job = vec__29150;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17715__auto___33065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_29157){
var state_val_29158 = (state_29157[(1)]);
if((state_val_29158 === (1))){
var state_29157__$1 = state_29157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29157__$1,(2),res,v);
} else {
if((state_val_29158 === (2))){
var inst_29154 = (state_29157[(2)]);
var inst_29155 = cljs.core.async.close_BANG_(res);
var state_29157__$1 = (function (){var statearr_29159 = state_29157;
(statearr_29159[(7)] = inst_29154);

return statearr_29159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29157__$1,inst_29155);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0 = (function (){
var statearr_29161 = [null,null,null,null,null,null,null,null];
(statearr_29161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__);

(statearr_29161[(1)] = (1));

return statearr_29161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1 = (function (state_29157){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29157);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29162){var ex__17602__auto__ = e29162;
var statearr_29163_33071 = state_29157;
(statearr_29163_33071[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29157[(4)]))){
var statearr_29166_33074 = state_29157;
(statearr_29166_33074[(1)] = cljs.core.first((state_29157[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33077 = state_29157;
state_29157 = G__33077;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = function(state_29157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1.call(this,state_29157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_29169 = f__17716__auto__();
(statearr_29169[(6)] = c__17715__auto___33065);

return statearr_29169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29173){
var vec__29174 = p__29173;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29174,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29174,(1),null);
var job = vec__29174;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___33080 = n;
var __33081 = (0);
while(true){
if((__33081 < n__5593__auto___33080)){
var G__29180_33083 = type;
var G__29180_33084__$1 = (((G__29180_33083 instanceof cljs.core.Keyword))?G__29180_33083.fqn:null);
switch (G__29180_33084__$1) {
case "compute":
var c__17715__auto___33086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33081,c__17715__auto___33086,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async){
return (function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = ((function (__33081,c__17715__auto___33086,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async){
return (function (state_29200){
var state_val_29201 = (state_29200[(1)]);
if((state_val_29201 === (1))){
var state_29200__$1 = state_29200;
var statearr_29204_33091 = state_29200__$1;
(statearr_29204_33091[(2)] = null);

(statearr_29204_33091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (2))){
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29200__$1,(4),jobs);
} else {
if((state_val_29201 === (3))){
var inst_29197 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29200__$1,inst_29197);
} else {
if((state_val_29201 === (4))){
var inst_29189 = (state_29200[(2)]);
var inst_29190 = process__$1(inst_29189);
var state_29200__$1 = state_29200;
if(cljs.core.truth_(inst_29190)){
var statearr_29211_33096 = state_29200__$1;
(statearr_29211_33096[(1)] = (5));

} else {
var statearr_29212_33097 = state_29200__$1;
(statearr_29212_33097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (5))){
var state_29200__$1 = state_29200;
var statearr_29215_33098 = state_29200__$1;
(statearr_29215_33098[(2)] = null);

(statearr_29215_33098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (6))){
var state_29200__$1 = state_29200;
var statearr_29216_33101 = state_29200__$1;
(statearr_29216_33101[(2)] = null);

(statearr_29216_33101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29201 === (7))){
var inst_29195 = (state_29200[(2)]);
var state_29200__$1 = state_29200;
var statearr_29218_33102 = state_29200__$1;
(statearr_29218_33102[(2)] = inst_29195);

(statearr_29218_33102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33081,c__17715__auto___33086,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async))
;
return ((function (__33081,switch__17598__auto__,c__17715__auto___33086,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0 = (function (){
var statearr_29222 = [null,null,null,null,null,null,null];
(statearr_29222[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__);

(statearr_29222[(1)] = (1));

return statearr_29222;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1 = (function (state_29200){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29200);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29223){var ex__17602__auto__ = e29223;
var statearr_29224_33106 = state_29200;
(statearr_29224_33106[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29200[(4)]))){
var statearr_29225_33109 = state_29200;
(statearr_29225_33109[(1)] = cljs.core.first((state_29200[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33110 = state_29200;
state_29200 = G__33110;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = function(state_29200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1.call(this,state_29200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__;
})()
;})(__33081,switch__17598__auto__,c__17715__auto___33086,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async))
})();
var state__17717__auto__ = (function (){var statearr_29227 = f__17716__auto__();
(statearr_29227[(6)] = c__17715__auto___33086);

return statearr_29227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
});})(__33081,c__17715__auto___33086,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async))
);


break;
case "async":
var c__17715__auto___33113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33081,c__17715__auto___33113,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async){
return (function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = ((function (__33081,c__17715__auto___33113,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async){
return (function (state_29240){
var state_val_29241 = (state_29240[(1)]);
if((state_val_29241 === (1))){
var state_29240__$1 = state_29240;
var statearr_29245_33115 = state_29240__$1;
(statearr_29245_33115[(2)] = null);

(statearr_29245_33115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (2))){
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29240__$1,(4),jobs);
} else {
if((state_val_29241 === (3))){
var inst_29238 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29240__$1,inst_29238);
} else {
if((state_val_29241 === (4))){
var inst_29230 = (state_29240[(2)]);
var inst_29231 = async(inst_29230);
var state_29240__$1 = state_29240;
if(cljs.core.truth_(inst_29231)){
var statearr_29247_33120 = state_29240__$1;
(statearr_29247_33120[(1)] = (5));

} else {
var statearr_29248_33124 = state_29240__$1;
(statearr_29248_33124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (5))){
var state_29240__$1 = state_29240;
var statearr_29249_33132 = state_29240__$1;
(statearr_29249_33132[(2)] = null);

(statearr_29249_33132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (6))){
var state_29240__$1 = state_29240;
var statearr_29250_33136 = state_29240__$1;
(statearr_29250_33136[(2)] = null);

(statearr_29250_33136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29241 === (7))){
var inst_29236 = (state_29240[(2)]);
var state_29240__$1 = state_29240;
var statearr_29252_33140 = state_29240__$1;
(statearr_29252_33140[(2)] = inst_29236);

(statearr_29252_33140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33081,c__17715__auto___33113,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async))
;
return ((function (__33081,switch__17598__auto__,c__17715__auto___33113,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0 = (function (){
var statearr_29257 = [null,null,null,null,null,null,null];
(statearr_29257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__);

(statearr_29257[(1)] = (1));

return statearr_29257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1 = (function (state_29240){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29240);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29258){var ex__17602__auto__ = e29258;
var statearr_29259_33163 = state_29240;
(statearr_29259_33163[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29240[(4)]))){
var statearr_29260_33170 = state_29240;
(statearr_29260_33170[(1)] = cljs.core.first((state_29240[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33176 = state_29240;
state_29240 = G__33176;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = function(state_29240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1.call(this,state_29240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__;
})()
;})(__33081,switch__17598__auto__,c__17715__auto___33113,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async))
})();
var state__17717__auto__ = (function (){var statearr_29266 = f__17716__auto__();
(statearr_29266[(6)] = c__17715__auto___33113);

return statearr_29266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
});})(__33081,c__17715__auto___33113,G__29180_33083,G__29180_33084__$1,n__5593__auto___33080,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29180_33084__$1)].join('')));

}

var G__33181 = (__33081 + (1));
__33081 = G__33181;
continue;
} else {
}
break;
}

var c__17715__auto___33183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_29299){
var state_val_29300 = (state_29299[(1)]);
if((state_val_29300 === (7))){
var inst_29295 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
var statearr_29304_33189 = state_29299__$1;
(statearr_29304_33189[(2)] = inst_29295);

(statearr_29304_33189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (1))){
var state_29299__$1 = state_29299;
var statearr_29305_33192 = state_29299__$1;
(statearr_29305_33192[(2)] = null);

(statearr_29305_33192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (4))){
var inst_29276 = (state_29299[(7)]);
var inst_29276__$1 = (state_29299[(2)]);
var inst_29277 = (inst_29276__$1 == null);
var state_29299__$1 = (function (){var statearr_29306 = state_29299;
(statearr_29306[(7)] = inst_29276__$1);

return statearr_29306;
})();
if(cljs.core.truth_(inst_29277)){
var statearr_29307_33194 = state_29299__$1;
(statearr_29307_33194[(1)] = (5));

} else {
var statearr_29308_33196 = state_29299__$1;
(statearr_29308_33196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (6))){
var inst_29282 = (state_29299[(8)]);
var inst_29276 = (state_29299[(7)]);
var inst_29282__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29286 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29287 = [inst_29276,inst_29282__$1];
var inst_29288 = (new cljs.core.PersistentVector(null,2,(5),inst_29286,inst_29287,null));
var state_29299__$1 = (function (){var statearr_29309 = state_29299;
(statearr_29309[(8)] = inst_29282__$1);

return statearr_29309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29299__$1,(8),jobs,inst_29288);
} else {
if((state_val_29300 === (3))){
var inst_29297 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29299__$1,inst_29297);
} else {
if((state_val_29300 === (2))){
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29299__$1,(4),from);
} else {
if((state_val_29300 === (9))){
var inst_29292 = (state_29299[(2)]);
var state_29299__$1 = (function (){var statearr_29315 = state_29299;
(statearr_29315[(9)] = inst_29292);

return statearr_29315;
})();
var statearr_29316_33214 = state_29299__$1;
(statearr_29316_33214[(2)] = null);

(statearr_29316_33214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (5))){
var inst_29280 = cljs.core.async.close_BANG_(jobs);
var state_29299__$1 = state_29299;
var statearr_29318_33218 = state_29299__$1;
(statearr_29318_33218[(2)] = inst_29280);

(statearr_29318_33218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29300 === (8))){
var inst_29282 = (state_29299[(8)]);
var inst_29290 = (state_29299[(2)]);
var state_29299__$1 = (function (){var statearr_29319 = state_29299;
(statearr_29319[(10)] = inst_29290);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29299__$1,(9),results,inst_29282);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0 = (function (){
var statearr_29321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29321[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__);

(statearr_29321[(1)] = (1));

return statearr_29321;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1 = (function (state_29299){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29299);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29322){var ex__17602__auto__ = e29322;
var statearr_29323_33234 = state_29299;
(statearr_29323_33234[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29299[(4)]))){
var statearr_29325_33235 = state_29299;
(statearr_29325_33235[(1)] = cljs.core.first((state_29299[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33245 = state_29299;
state_29299 = G__33245;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = function(state_29299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1.call(this,state_29299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_29326 = f__17716__auto__();
(statearr_29326[(6)] = c__17715__auto___33183);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


var c__17715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_29370){
var state_val_29371 = (state_29370[(1)]);
if((state_val_29371 === (7))){
var inst_29366 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29372_33263 = state_29370__$1;
(statearr_29372_33263[(2)] = inst_29366);

(statearr_29372_33263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (20))){
var state_29370__$1 = state_29370;
var statearr_29373_33270 = state_29370__$1;
(statearr_29373_33270[(2)] = null);

(statearr_29373_33270[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (1))){
var state_29370__$1 = state_29370;
var statearr_29375_33271 = state_29370__$1;
(statearr_29375_33271[(2)] = null);

(statearr_29375_33271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (4))){
var inst_29333 = (state_29370[(7)]);
var inst_29333__$1 = (state_29370[(2)]);
var inst_29334 = (inst_29333__$1 == null);
var state_29370__$1 = (function (){var statearr_29376 = state_29370;
(statearr_29376[(7)] = inst_29333__$1);

return statearr_29376;
})();
if(cljs.core.truth_(inst_29334)){
var statearr_29377_33282 = state_29370__$1;
(statearr_29377_33282[(1)] = (5));

} else {
var statearr_29378_33283 = state_29370__$1;
(statearr_29378_33283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (15))){
var inst_29347 = (state_29370[(8)]);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29370__$1,(18),to,inst_29347);
} else {
if((state_val_29371 === (21))){
var inst_29361 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29379_33286 = state_29370__$1;
(statearr_29379_33286[(2)] = inst_29361);

(statearr_29379_33286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (13))){
var inst_29363 = (state_29370[(2)]);
var state_29370__$1 = (function (){var statearr_29380 = state_29370;
(statearr_29380[(9)] = inst_29363);

return statearr_29380;
})();
var statearr_29382_33287 = state_29370__$1;
(statearr_29382_33287[(2)] = null);

(statearr_29382_33287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (6))){
var inst_29333 = (state_29370[(7)]);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29370__$1,(11),inst_29333);
} else {
if((state_val_29371 === (17))){
var inst_29356 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
if(cljs.core.truth_(inst_29356)){
var statearr_29387_33298 = state_29370__$1;
(statearr_29387_33298[(1)] = (19));

} else {
var statearr_29388_33300 = state_29370__$1;
(statearr_29388_33300[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (3))){
var inst_29368 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29370__$1,inst_29368);
} else {
if((state_val_29371 === (12))){
var inst_29344 = (state_29370[(10)]);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29370__$1,(14),inst_29344);
} else {
if((state_val_29371 === (2))){
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29370__$1,(4),results);
} else {
if((state_val_29371 === (19))){
var state_29370__$1 = state_29370;
var statearr_29389_33305 = state_29370__$1;
(statearr_29389_33305[(2)] = null);

(statearr_29389_33305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (11))){
var inst_29344 = (state_29370[(2)]);
var state_29370__$1 = (function (){var statearr_29390 = state_29370;
(statearr_29390[(10)] = inst_29344);

return statearr_29390;
})();
var statearr_29391_33309 = state_29370__$1;
(statearr_29391_33309[(2)] = null);

(statearr_29391_33309[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (9))){
var state_29370__$1 = state_29370;
var statearr_29392_33311 = state_29370__$1;
(statearr_29392_33311[(2)] = null);

(statearr_29392_33311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (5))){
var state_29370__$1 = state_29370;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29394_33313 = state_29370__$1;
(statearr_29394_33313[(1)] = (8));

} else {
var statearr_29395_33314 = state_29370__$1;
(statearr_29395_33314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (14))){
var inst_29347 = (state_29370[(8)]);
var inst_29349 = (state_29370[(11)]);
var inst_29347__$1 = (state_29370[(2)]);
var inst_29348 = (inst_29347__$1 == null);
var inst_29349__$1 = cljs.core.not(inst_29348);
var state_29370__$1 = (function (){var statearr_29400 = state_29370;
(statearr_29400[(8)] = inst_29347__$1);

(statearr_29400[(11)] = inst_29349__$1);

return statearr_29400;
})();
if(inst_29349__$1){
var statearr_29401_33323 = state_29370__$1;
(statearr_29401_33323[(1)] = (15));

} else {
var statearr_29402_33324 = state_29370__$1;
(statearr_29402_33324[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (16))){
var inst_29349 = (state_29370[(11)]);
var state_29370__$1 = state_29370;
var statearr_29403_33325 = state_29370__$1;
(statearr_29403_33325[(2)] = inst_29349);

(statearr_29403_33325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (10))){
var inst_29340 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29408_33328 = state_29370__$1;
(statearr_29408_33328[(2)] = inst_29340);

(statearr_29408_33328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (18))){
var inst_29353 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29411_33331 = state_29370__$1;
(statearr_29411_33331[(2)] = inst_29353);

(statearr_29411_33331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (8))){
var inst_29337 = cljs.core.async.close_BANG_(to);
var state_29370__$1 = state_29370;
var statearr_29412_33334 = state_29370__$1;
(statearr_29412_33334[(2)] = inst_29337);

(statearr_29412_33334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0 = (function (){
var statearr_29413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__);

(statearr_29413[(1)] = (1));

return statearr_29413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1 = (function (state_29370){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29370);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29414){var ex__17602__auto__ = e29414;
var statearr_29415_33339 = state_29370;
(statearr_29415_33339[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29370[(4)]))){
var statearr_29416_33342 = state_29370;
(statearr_29416_33342[(1)] = cljs.core.first((state_29370[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33343 = state_29370;
state_29370 = G__33343;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__ = function(state_29370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1.call(this,state_29370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_29421 = f__17716__auto__();
(statearr_29421[(6)] = c__17715__auto__);

return statearr_29421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));

return c__17715__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29426 = arguments.length;
switch (G__29426) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29440 = arguments.length;
switch (G__29440) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29447 = arguments.length;
switch (G__29447) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17715__auto___33361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_29478){
var state_val_29479 = (state_29478[(1)]);
if((state_val_29479 === (7))){
var inst_29470 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29485_33365 = state_29478__$1;
(statearr_29485_33365[(2)] = inst_29470);

(statearr_29485_33365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (1))){
var state_29478__$1 = state_29478;
var statearr_29486_33367 = state_29478__$1;
(statearr_29486_33367[(2)] = null);

(statearr_29486_33367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (4))){
var inst_29450 = (state_29478[(7)]);
var inst_29450__$1 = (state_29478[(2)]);
var inst_29451 = (inst_29450__$1 == null);
var state_29478__$1 = (function (){var statearr_29487 = state_29478;
(statearr_29487[(7)] = inst_29450__$1);

return statearr_29487;
})();
if(cljs.core.truth_(inst_29451)){
var statearr_29488_33370 = state_29478__$1;
(statearr_29488_33370[(1)] = (5));

} else {
var statearr_29489_33373 = state_29478__$1;
(statearr_29489_33373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (13))){
var state_29478__$1 = state_29478;
var statearr_29490_33375 = state_29478__$1;
(statearr_29490_33375[(2)] = null);

(statearr_29490_33375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (6))){
var inst_29450 = (state_29478[(7)]);
var inst_29456 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29450) : p.call(null, inst_29450));
var state_29478__$1 = state_29478;
if(cljs.core.truth_(inst_29456)){
var statearr_29492_33380 = state_29478__$1;
(statearr_29492_33380[(1)] = (9));

} else {
var statearr_29493_33384 = state_29478__$1;
(statearr_29493_33384[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (3))){
var inst_29474 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29478__$1,inst_29474);
} else {
if((state_val_29479 === (12))){
var state_29478__$1 = state_29478;
var statearr_29494_33387 = state_29478__$1;
(statearr_29494_33387[(2)] = null);

(statearr_29494_33387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (2))){
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29478__$1,(4),ch);
} else {
if((state_val_29479 === (11))){
var inst_29450 = (state_29478[(7)]);
var inst_29460 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29478__$1,(8),inst_29460,inst_29450);
} else {
if((state_val_29479 === (9))){
var state_29478__$1 = state_29478;
var statearr_29500_33388 = state_29478__$1;
(statearr_29500_33388[(2)] = tc);

(statearr_29500_33388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (5))){
var inst_29453 = cljs.core.async.close_BANG_(tc);
var inst_29454 = cljs.core.async.close_BANG_(fc);
var state_29478__$1 = (function (){var statearr_29501 = state_29478;
(statearr_29501[(8)] = inst_29453);

return statearr_29501;
})();
var statearr_29503_33391 = state_29478__$1;
(statearr_29503_33391[(2)] = inst_29454);

(statearr_29503_33391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (14))){
var inst_29468 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
var statearr_29506_33392 = state_29478__$1;
(statearr_29506_33392[(2)] = inst_29468);

(statearr_29506_33392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (10))){
var state_29478__$1 = state_29478;
var statearr_29508_33396 = state_29478__$1;
(statearr_29508_33396[(2)] = fc);

(statearr_29508_33396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29479 === (8))){
var inst_29463 = (state_29478[(2)]);
var state_29478__$1 = state_29478;
if(cljs.core.truth_(inst_29463)){
var statearr_29510_33400 = state_29478__$1;
(statearr_29510_33400[(1)] = (12));

} else {
var statearr_29511_33401 = state_29478__$1;
(statearr_29511_33401[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_29512 = [null,null,null,null,null,null,null,null,null];
(statearr_29512[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_29512[(1)] = (1));

return statearr_29512;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_29478){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29478);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29518){var ex__17602__auto__ = e29518;
var statearr_29519_33403 = state_29478;
(statearr_29519_33403[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29478[(4)]))){
var statearr_29520_33404 = state_29478;
(statearr_29520_33404[(1)] = cljs.core.first((state_29478[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33407 = state_29478;
state_29478 = G__33407;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_29478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_29478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_29524 = f__17716__auto__();
(statearr_29524[(6)] = c__17715__auto___33361);

return statearr_29524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_29568){
var state_val_29569 = (state_29568[(1)]);
if((state_val_29569 === (7))){
var inst_29562 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
var statearr_29583_33413 = state_29568__$1;
(statearr_29583_33413[(2)] = inst_29562);

(statearr_29583_33413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (1))){
var inst_29533 = init;
var inst_29534 = inst_29533;
var state_29568__$1 = (function (){var statearr_29588 = state_29568;
(statearr_29588[(7)] = inst_29534);

return statearr_29588;
})();
var statearr_29592_33415 = state_29568__$1;
(statearr_29592_33415[(2)] = null);

(statearr_29592_33415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (4))){
var inst_29541 = (state_29568[(8)]);
var inst_29541__$1 = (state_29568[(2)]);
var inst_29542 = (inst_29541__$1 == null);
var state_29568__$1 = (function (){var statearr_29601 = state_29568;
(statearr_29601[(8)] = inst_29541__$1);

return statearr_29601;
})();
if(cljs.core.truth_(inst_29542)){
var statearr_29603_33420 = state_29568__$1;
(statearr_29603_33420[(1)] = (5));

} else {
var statearr_29608_33421 = state_29568__$1;
(statearr_29608_33421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (6))){
var inst_29547 = (state_29568[(9)]);
var inst_29534 = (state_29568[(7)]);
var inst_29541 = (state_29568[(8)]);
var inst_29547__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29534,inst_29541) : f.call(null, inst_29534,inst_29541));
var inst_29553 = cljs.core.reduced_QMARK_(inst_29547__$1);
var state_29568__$1 = (function (){var statearr_29617 = state_29568;
(statearr_29617[(9)] = inst_29547__$1);

return statearr_29617;
})();
if(inst_29553){
var statearr_29621_33426 = state_29568__$1;
(statearr_29621_33426[(1)] = (8));

} else {
var statearr_29626_33427 = state_29568__$1;
(statearr_29626_33427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (3))){
var inst_29564 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29568__$1,inst_29564);
} else {
if((state_val_29569 === (2))){
var state_29568__$1 = state_29568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29568__$1,(4),ch);
} else {
if((state_val_29569 === (9))){
var inst_29547 = (state_29568[(9)]);
var inst_29534 = inst_29547;
var state_29568__$1 = (function (){var statearr_29643 = state_29568;
(statearr_29643[(7)] = inst_29534);

return statearr_29643;
})();
var statearr_29644_33428 = state_29568__$1;
(statearr_29644_33428[(2)] = null);

(statearr_29644_33428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (5))){
var inst_29534 = (state_29568[(7)]);
var state_29568__$1 = state_29568;
var statearr_29657_33429 = state_29568__$1;
(statearr_29657_33429[(2)] = inst_29534);

(statearr_29657_33429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (10))){
var inst_29560 = (state_29568[(2)]);
var state_29568__$1 = state_29568;
var statearr_29663_33434 = state_29568__$1;
(statearr_29663_33434[(2)] = inst_29560);

(statearr_29663_33434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29569 === (8))){
var inst_29547 = (state_29568[(9)]);
var inst_29555 = cljs.core.deref(inst_29547);
var state_29568__$1 = state_29568;
var statearr_29672_33442 = state_29568__$1;
(statearr_29672_33442[(2)] = inst_29555);

(statearr_29672_33442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17599__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17599__auto____0 = (function (){
var statearr_29684 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29684[(0)] = cljs$core$async$reduce_$_state_machine__17599__auto__);

(statearr_29684[(1)] = (1));

return statearr_29684;
});
var cljs$core$async$reduce_$_state_machine__17599__auto____1 = (function (state_29568){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29568);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29687){var ex__17602__auto__ = e29687;
var statearr_29690_33450 = state_29568;
(statearr_29690_33450[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29568[(4)]))){
var statearr_29693_33451 = state_29568;
(statearr_29693_33451[(1)] = cljs.core.first((state_29568[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33457 = state_29568;
state_29568 = G__33457;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17599__auto__ = function(state_29568){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17599__auto____1.call(this,state_29568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17599__auto____0;
cljs$core$async$reduce_$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17599__auto____1;
return cljs$core$async$reduce_$_state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_29696 = f__17716__auto__();
(statearr_29696[(6)] = c__17715__auto__);

return statearr_29696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));

return c__17715__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__17715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_29704){
var state_val_29705 = (state_29704[(1)]);
if((state_val_29705 === (1))){
var inst_29699 = cljs.core.async.reduce(f__$1,init,ch);
var state_29704__$1 = state_29704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29704__$1,(2),inst_29699);
} else {
if((state_val_29705 === (2))){
var inst_29701 = (state_29704[(2)]);
var inst_29702 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29701) : f__$1.call(null, inst_29701));
var state_29704__$1 = state_29704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29704__$1,inst_29702);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17599__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17599__auto____0 = (function (){
var statearr_29711 = [null,null,null,null,null,null,null];
(statearr_29711[(0)] = cljs$core$async$transduce_$_state_machine__17599__auto__);

(statearr_29711[(1)] = (1));

return statearr_29711;
});
var cljs$core$async$transduce_$_state_machine__17599__auto____1 = (function (state_29704){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29704);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29712){var ex__17602__auto__ = e29712;
var statearr_29713_33475 = state_29704;
(statearr_29713_33475[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29704[(4)]))){
var statearr_29714_33480 = state_29704;
(statearr_29714_33480[(1)] = cljs.core.first((state_29704[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33485 = state_29704;
state_29704 = G__33485;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17599__auto__ = function(state_29704){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17599__auto____1.call(this,state_29704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17599__auto____0;
cljs$core$async$transduce_$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17599__auto____1;
return cljs$core$async$transduce_$_state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_29719 = f__17716__auto__();
(statearr_29719[(6)] = c__17715__auto__);

return statearr_29719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));

return c__17715__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__29726 = arguments.length;
switch (G__29726) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_29779){
var state_val_29780 = (state_29779[(1)]);
if((state_val_29780 === (7))){
var inst_29750 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29793_33500 = state_29779__$1;
(statearr_29793_33500[(2)] = inst_29750);

(statearr_29793_33500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (1))){
var inst_29728 = cljs.core.seq(coll);
var inst_29729 = inst_29728;
var state_29779__$1 = (function (){var statearr_29795 = state_29779;
(statearr_29795[(7)] = inst_29729);

return statearr_29795;
})();
var statearr_29798_33503 = state_29779__$1;
(statearr_29798_33503[(2)] = null);

(statearr_29798_33503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (4))){
var inst_29729 = (state_29779[(7)]);
var inst_29748 = cljs.core.first(inst_29729);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29779__$1,(7),ch,inst_29748);
} else {
if((state_val_29780 === (13))){
var inst_29768 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29807_33506 = state_29779__$1;
(statearr_29807_33506[(2)] = inst_29768);

(statearr_29807_33506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (6))){
var inst_29754 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29754)){
var statearr_29808_33507 = state_29779__$1;
(statearr_29808_33507[(1)] = (8));

} else {
var statearr_29810_33508 = state_29779__$1;
(statearr_29810_33508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (3))){
var inst_29773 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29779__$1,inst_29773);
} else {
if((state_val_29780 === (12))){
var state_29779__$1 = state_29779;
var statearr_29816_33511 = state_29779__$1;
(statearr_29816_33511[(2)] = null);

(statearr_29816_33511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (2))){
var inst_29729 = (state_29779[(7)]);
var state_29779__$1 = state_29779;
if(cljs.core.truth_(inst_29729)){
var statearr_29819_33513 = state_29779__$1;
(statearr_29819_33513[(1)] = (4));

} else {
var statearr_29820_33514 = state_29779__$1;
(statearr_29820_33514[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (11))){
var inst_29765 = cljs.core.async.close_BANG_(ch);
var state_29779__$1 = state_29779;
var statearr_29822_33516 = state_29779__$1;
(statearr_29822_33516[(2)] = inst_29765);

(statearr_29822_33516[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (9))){
var state_29779__$1 = state_29779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29823_33518 = state_29779__$1;
(statearr_29823_33518[(1)] = (11));

} else {
var statearr_29825_33519 = state_29779__$1;
(statearr_29825_33519[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (5))){
var inst_29729 = (state_29779[(7)]);
var state_29779__$1 = state_29779;
var statearr_29831_33520 = state_29779__$1;
(statearr_29831_33520[(2)] = inst_29729);

(statearr_29831_33520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (10))){
var inst_29770 = (state_29779[(2)]);
var state_29779__$1 = state_29779;
var statearr_29833_33521 = state_29779__$1;
(statearr_29833_33521[(2)] = inst_29770);

(statearr_29833_33521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29780 === (8))){
var inst_29729 = (state_29779[(7)]);
var inst_29758 = cljs.core.next(inst_29729);
var inst_29729__$1 = inst_29758;
var state_29779__$1 = (function (){var statearr_29835 = state_29779;
(statearr_29835[(7)] = inst_29729__$1);

return statearr_29835;
})();
var statearr_29838_33522 = state_29779__$1;
(statearr_29838_33522[(2)] = null);

(statearr_29838_33522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_29843 = [null,null,null,null,null,null,null,null];
(statearr_29843[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_29843[(1)] = (1));

return statearr_29843;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_29779){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_29779);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e29844){var ex__17602__auto__ = e29844;
var statearr_29846_33524 = state_29779;
(statearr_29846_33524[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_29779[(4)]))){
var statearr_29849_33527 = state_29779;
(statearr_29849_33527[(1)] = cljs.core.first((state_29779[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33530 = state_29779;
state_29779 = G__33530;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_29779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_29779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_29851 = f__17716__auto__();
(statearr_29851[(6)] = c__17715__auto__);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));

return c__17715__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29864 = arguments.length;
switch (G__29864) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33541 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33541(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33547 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33547(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33553 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33553(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33555 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33555(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30002 = (function (ch,cs,meta30003){
this.ch = ch;
this.cs = cs;
this.meta30003 = meta30003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30004,meta30003__$1){
var self__ = this;
var _30004__$1 = this;
return (new cljs.core.async.t_cljs$core$async30002(self__.ch,self__.cs,meta30003__$1));
}));

(cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30004){
var self__ = this;
var _30004__$1 = this;
return self__.meta30003;
}));

(cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async30002.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async30002.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30003","meta30003",-1063664167,null)], null);
}));

(cljs.core.async.t_cljs$core$async30002.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30002");

(cljs.core.async.t_cljs$core$async30002.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30002");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30002.
 */
cljs.core.async.__GT_t_cljs$core$async30002 = (function cljs$core$async$__GT_t_cljs$core$async30002(ch,cs,meta30003){
return (new cljs.core.async.t_cljs$core$async30002(ch,cs,meta30003));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async30002(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17715__auto___33563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_30195){
var state_val_30196 = (state_30195[(1)]);
if((state_val_30196 === (7))){
var inst_30190 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30209_33564 = state_30195__$1;
(statearr_30209_33564[(2)] = inst_30190);

(statearr_30209_33564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (20))){
var inst_30077 = (state_30195[(7)]);
var inst_30093 = cljs.core.first(inst_30077);
var inst_30094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30093,(0),null);
var inst_30095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30093,(1),null);
var state_30195__$1 = (function (){var statearr_30220 = state_30195;
(statearr_30220[(8)] = inst_30094);

return statearr_30220;
})();
if(cljs.core.truth_(inst_30095)){
var statearr_30223_33567 = state_30195__$1;
(statearr_30223_33567[(1)] = (22));

} else {
var statearr_30224_33570 = state_30195__$1;
(statearr_30224_33570[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (27))){
var inst_30136 = (state_30195[(9)]);
var inst_30130 = (state_30195[(10)]);
var inst_30036 = (state_30195[(11)]);
var inst_30128 = (state_30195[(12)]);
var inst_30136__$1 = cljs.core._nth(inst_30128,inst_30130);
var inst_30140 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30136__$1,inst_30036,done);
var state_30195__$1 = (function (){var statearr_30230 = state_30195;
(statearr_30230[(9)] = inst_30136__$1);

return statearr_30230;
})();
if(cljs.core.truth_(inst_30140)){
var statearr_30231_33571 = state_30195__$1;
(statearr_30231_33571[(1)] = (30));

} else {
var statearr_30232_33572 = state_30195__$1;
(statearr_30232_33572[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (1))){
var state_30195__$1 = state_30195;
var statearr_30233_33576 = state_30195__$1;
(statearr_30233_33576[(2)] = null);

(statearr_30233_33576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (24))){
var inst_30077 = (state_30195[(7)]);
var inst_30100 = (state_30195[(2)]);
var inst_30101 = cljs.core.next(inst_30077);
var inst_30047 = inst_30101;
var inst_30048 = null;
var inst_30049 = (0);
var inst_30050 = (0);
var state_30195__$1 = (function (){var statearr_30243 = state_30195;
(statearr_30243[(13)] = inst_30050);

(statearr_30243[(14)] = inst_30047);

(statearr_30243[(15)] = inst_30100);

(statearr_30243[(16)] = inst_30049);

(statearr_30243[(17)] = inst_30048);

return statearr_30243;
})();
var statearr_30249_33585 = state_30195__$1;
(statearr_30249_33585[(2)] = null);

(statearr_30249_33585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (39))){
var state_30195__$1 = state_30195;
var statearr_30261_33587 = state_30195__$1;
(statearr_30261_33587[(2)] = null);

(statearr_30261_33587[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (4))){
var inst_30036 = (state_30195[(11)]);
var inst_30036__$1 = (state_30195[(2)]);
var inst_30037 = (inst_30036__$1 == null);
var state_30195__$1 = (function (){var statearr_30262 = state_30195;
(statearr_30262[(11)] = inst_30036__$1);

return statearr_30262;
})();
if(cljs.core.truth_(inst_30037)){
var statearr_30263_33588 = state_30195__$1;
(statearr_30263_33588[(1)] = (5));

} else {
var statearr_30265_33590 = state_30195__$1;
(statearr_30265_33590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (15))){
var inst_30050 = (state_30195[(13)]);
var inst_30047 = (state_30195[(14)]);
var inst_30049 = (state_30195[(16)]);
var inst_30048 = (state_30195[(17)]);
var inst_30068 = (state_30195[(2)]);
var inst_30070 = (inst_30050 + (1));
var tmp30254 = inst_30047;
var tmp30255 = inst_30049;
var tmp30256 = inst_30048;
var inst_30047__$1 = tmp30254;
var inst_30048__$1 = tmp30256;
var inst_30049__$1 = tmp30255;
var inst_30050__$1 = inst_30070;
var state_30195__$1 = (function (){var statearr_30270 = state_30195;
(statearr_30270[(13)] = inst_30050__$1);

(statearr_30270[(14)] = inst_30047__$1);

(statearr_30270[(18)] = inst_30068);

(statearr_30270[(16)] = inst_30049__$1);

(statearr_30270[(17)] = inst_30048__$1);

return statearr_30270;
})();
var statearr_30273_33592 = state_30195__$1;
(statearr_30273_33592[(2)] = null);

(statearr_30273_33592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (21))){
var inst_30104 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30279_33594 = state_30195__$1;
(statearr_30279_33594[(2)] = inst_30104);

(statearr_30279_33594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (31))){
var inst_30136 = (state_30195[(9)]);
var inst_30143 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_30136);
var state_30195__$1 = state_30195;
var statearr_30280_33598 = state_30195__$1;
(statearr_30280_33598[(2)] = inst_30143);

(statearr_30280_33598[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (32))){
var inst_30130 = (state_30195[(10)]);
var inst_30129 = (state_30195[(19)]);
var inst_30128 = (state_30195[(12)]);
var inst_30127 = (state_30195[(20)]);
var inst_30145 = (state_30195[(2)]);
var inst_30147 = (inst_30130 + (1));
var tmp30274 = inst_30129;
var tmp30275 = inst_30128;
var tmp30276 = inst_30127;
var inst_30127__$1 = tmp30276;
var inst_30128__$1 = tmp30275;
var inst_30129__$1 = tmp30274;
var inst_30130__$1 = inst_30147;
var state_30195__$1 = (function (){var statearr_30282 = state_30195;
(statearr_30282[(10)] = inst_30130__$1);

(statearr_30282[(19)] = inst_30129__$1);

(statearr_30282[(12)] = inst_30128__$1);

(statearr_30282[(21)] = inst_30145);

(statearr_30282[(20)] = inst_30127__$1);

return statearr_30282;
})();
var statearr_30284_33600 = state_30195__$1;
(statearr_30284_33600[(2)] = null);

(statearr_30284_33600[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (40))){
var inst_30159 = (state_30195[(22)]);
var inst_30166 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_30159);
var state_30195__$1 = state_30195;
var statearr_30285_33601 = state_30195__$1;
(statearr_30285_33601[(2)] = inst_30166);

(statearr_30285_33601[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (33))){
var inst_30150 = (state_30195[(23)]);
var inst_30152 = cljs.core.chunked_seq_QMARK_(inst_30150);
var state_30195__$1 = state_30195;
if(inst_30152){
var statearr_30287_33602 = state_30195__$1;
(statearr_30287_33602[(1)] = (36));

} else {
var statearr_30288_33603 = state_30195__$1;
(statearr_30288_33603[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (13))){
var inst_30060 = (state_30195[(24)]);
var inst_30064 = cljs.core.async.close_BANG_(inst_30060);
var state_30195__$1 = state_30195;
var statearr_30292_33604 = state_30195__$1;
(statearr_30292_33604[(2)] = inst_30064);

(statearr_30292_33604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (22))){
var inst_30094 = (state_30195[(8)]);
var inst_30097 = cljs.core.async.close_BANG_(inst_30094);
var state_30195__$1 = state_30195;
var statearr_30294_33611 = state_30195__$1;
(statearr_30294_33611[(2)] = inst_30097);

(statearr_30294_33611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (36))){
var inst_30150 = (state_30195[(23)]);
var inst_30154 = cljs.core.chunk_first(inst_30150);
var inst_30155 = cljs.core.chunk_rest(inst_30150);
var inst_30156 = cljs.core.count(inst_30154);
var inst_30127 = inst_30155;
var inst_30128 = inst_30154;
var inst_30129 = inst_30156;
var inst_30130 = (0);
var state_30195__$1 = (function (){var statearr_30295 = state_30195;
(statearr_30295[(10)] = inst_30130);

(statearr_30295[(19)] = inst_30129);

(statearr_30295[(12)] = inst_30128);

(statearr_30295[(20)] = inst_30127);

return statearr_30295;
})();
var statearr_30296_33617 = state_30195__$1;
(statearr_30296_33617[(2)] = null);

(statearr_30296_33617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (41))){
var inst_30150 = (state_30195[(23)]);
var inst_30168 = (state_30195[(2)]);
var inst_30170 = cljs.core.next(inst_30150);
var inst_30127 = inst_30170;
var inst_30128 = null;
var inst_30129 = (0);
var inst_30130 = (0);
var state_30195__$1 = (function (){var statearr_30298 = state_30195;
(statearr_30298[(10)] = inst_30130);

(statearr_30298[(19)] = inst_30129);

(statearr_30298[(12)] = inst_30128);

(statearr_30298[(25)] = inst_30168);

(statearr_30298[(20)] = inst_30127);

return statearr_30298;
})();
var statearr_30304_33626 = state_30195__$1;
(statearr_30304_33626[(2)] = null);

(statearr_30304_33626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (43))){
var state_30195__$1 = state_30195;
var statearr_30308_33631 = state_30195__$1;
(statearr_30308_33631[(2)] = null);

(statearr_30308_33631[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (29))){
var inst_30178 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30313_33636 = state_30195__$1;
(statearr_30313_33636[(2)] = inst_30178);

(statearr_30313_33636[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (44))){
var inst_30187 = (state_30195[(2)]);
var state_30195__$1 = (function (){var statearr_30314 = state_30195;
(statearr_30314[(26)] = inst_30187);

return statearr_30314;
})();
var statearr_30315_33643 = state_30195__$1;
(statearr_30315_33643[(2)] = null);

(statearr_30315_33643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (6))){
var inst_30117 = (state_30195[(27)]);
var inst_30116 = cljs.core.deref(cs);
var inst_30117__$1 = cljs.core.keys(inst_30116);
var inst_30118 = cljs.core.count(inst_30117__$1);
var inst_30120 = cljs.core.reset_BANG_(dctr,inst_30118);
var inst_30126 = cljs.core.seq(inst_30117__$1);
var inst_30127 = inst_30126;
var inst_30128 = null;
var inst_30129 = (0);
var inst_30130 = (0);
var state_30195__$1 = (function (){var statearr_30322 = state_30195;
(statearr_30322[(10)] = inst_30130);

(statearr_30322[(27)] = inst_30117__$1);

(statearr_30322[(19)] = inst_30129);

(statearr_30322[(12)] = inst_30128);

(statearr_30322[(28)] = inst_30120);

(statearr_30322[(20)] = inst_30127);

return statearr_30322;
})();
var statearr_30323_33661 = state_30195__$1;
(statearr_30323_33661[(2)] = null);

(statearr_30323_33661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (28))){
var inst_30150 = (state_30195[(23)]);
var inst_30127 = (state_30195[(20)]);
var inst_30150__$1 = cljs.core.seq(inst_30127);
var state_30195__$1 = (function (){var statearr_30329 = state_30195;
(statearr_30329[(23)] = inst_30150__$1);

return statearr_30329;
})();
if(inst_30150__$1){
var statearr_30331_33663 = state_30195__$1;
(statearr_30331_33663[(1)] = (33));

} else {
var statearr_30332_33665 = state_30195__$1;
(statearr_30332_33665[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (25))){
var inst_30130 = (state_30195[(10)]);
var inst_30129 = (state_30195[(19)]);
var inst_30132 = (inst_30130 < inst_30129);
var inst_30133 = inst_30132;
var state_30195__$1 = state_30195;
if(cljs.core.truth_(inst_30133)){
var statearr_30333_33669 = state_30195__$1;
(statearr_30333_33669[(1)] = (27));

} else {
var statearr_30334_33672 = state_30195__$1;
(statearr_30334_33672[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (34))){
var state_30195__$1 = state_30195;
var statearr_30340_33676 = state_30195__$1;
(statearr_30340_33676[(2)] = null);

(statearr_30340_33676[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (17))){
var state_30195__$1 = state_30195;
var statearr_30341_33678 = state_30195__$1;
(statearr_30341_33678[(2)] = null);

(statearr_30341_33678[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (3))){
var inst_30192 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30195__$1,inst_30192);
} else {
if((state_val_30196 === (12))){
var inst_30109 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30344_33687 = state_30195__$1;
(statearr_30344_33687[(2)] = inst_30109);

(statearr_30344_33687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (2))){
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30195__$1,(4),ch);
} else {
if((state_val_30196 === (23))){
var state_30195__$1 = state_30195;
var statearr_30352_33691 = state_30195__$1;
(statearr_30352_33691[(2)] = null);

(statearr_30352_33691[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (35))){
var inst_30176 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30353_33695 = state_30195__$1;
(statearr_30353_33695[(2)] = inst_30176);

(statearr_30353_33695[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (19))){
var inst_30077 = (state_30195[(7)]);
var inst_30084 = cljs.core.chunk_first(inst_30077);
var inst_30085 = cljs.core.chunk_rest(inst_30077);
var inst_30087 = cljs.core.count(inst_30084);
var inst_30047 = inst_30085;
var inst_30048 = inst_30084;
var inst_30049 = inst_30087;
var inst_30050 = (0);
var state_30195__$1 = (function (){var statearr_30354 = state_30195;
(statearr_30354[(13)] = inst_30050);

(statearr_30354[(14)] = inst_30047);

(statearr_30354[(16)] = inst_30049);

(statearr_30354[(17)] = inst_30048);

return statearr_30354;
})();
var statearr_30358_33700 = state_30195__$1;
(statearr_30358_33700[(2)] = null);

(statearr_30358_33700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (11))){
var inst_30047 = (state_30195[(14)]);
var inst_30077 = (state_30195[(7)]);
var inst_30077__$1 = cljs.core.seq(inst_30047);
var state_30195__$1 = (function (){var statearr_30359 = state_30195;
(statearr_30359[(7)] = inst_30077__$1);

return statearr_30359;
})();
if(inst_30077__$1){
var statearr_30360_33704 = state_30195__$1;
(statearr_30360_33704[(1)] = (16));

} else {
var statearr_30364_33705 = state_30195__$1;
(statearr_30364_33705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (9))){
var inst_30111 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30366_33707 = state_30195__$1;
(statearr_30366_33707[(2)] = inst_30111);

(statearr_30366_33707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (5))){
var inst_30044 = cljs.core.deref(cs);
var inst_30045 = cljs.core.seq(inst_30044);
var inst_30047 = inst_30045;
var inst_30048 = null;
var inst_30049 = (0);
var inst_30050 = (0);
var state_30195__$1 = (function (){var statearr_30370 = state_30195;
(statearr_30370[(13)] = inst_30050);

(statearr_30370[(14)] = inst_30047);

(statearr_30370[(16)] = inst_30049);

(statearr_30370[(17)] = inst_30048);

return statearr_30370;
})();
var statearr_30372_33708 = state_30195__$1;
(statearr_30372_33708[(2)] = null);

(statearr_30372_33708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (14))){
var state_30195__$1 = state_30195;
var statearr_30376_33709 = state_30195__$1;
(statearr_30376_33709[(2)] = null);

(statearr_30376_33709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (45))){
var inst_30184 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30377_33712 = state_30195__$1;
(statearr_30377_33712[(2)] = inst_30184);

(statearr_30377_33712[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (26))){
var inst_30117 = (state_30195[(27)]);
var inst_30180 = (state_30195[(2)]);
var inst_30181 = cljs.core.seq(inst_30117);
var state_30195__$1 = (function (){var statearr_30382 = state_30195;
(statearr_30382[(29)] = inst_30180);

return statearr_30382;
})();
if(inst_30181){
var statearr_30383_33713 = state_30195__$1;
(statearr_30383_33713[(1)] = (42));

} else {
var statearr_30384_33714 = state_30195__$1;
(statearr_30384_33714[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (16))){
var inst_30077 = (state_30195[(7)]);
var inst_30082 = cljs.core.chunked_seq_QMARK_(inst_30077);
var state_30195__$1 = state_30195;
if(inst_30082){
var statearr_30389_33716 = state_30195__$1;
(statearr_30389_33716[(1)] = (19));

} else {
var statearr_30391_33718 = state_30195__$1;
(statearr_30391_33718[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (38))){
var inst_30173 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30393_33719 = state_30195__$1;
(statearr_30393_33719[(2)] = inst_30173);

(statearr_30393_33719[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (30))){
var state_30195__$1 = state_30195;
var statearr_30397_33720 = state_30195__$1;
(statearr_30397_33720[(2)] = null);

(statearr_30397_33720[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (10))){
var inst_30050 = (state_30195[(13)]);
var inst_30048 = (state_30195[(17)]);
var inst_30059 = cljs.core._nth(inst_30048,inst_30050);
var inst_30060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30059,(0),null);
var inst_30061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30059,(1),null);
var state_30195__$1 = (function (){var statearr_30402 = state_30195;
(statearr_30402[(24)] = inst_30060);

return statearr_30402;
})();
if(cljs.core.truth_(inst_30061)){
var statearr_30403_33722 = state_30195__$1;
(statearr_30403_33722[(1)] = (13));

} else {
var statearr_30404_33723 = state_30195__$1;
(statearr_30404_33723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (18))){
var inst_30107 = (state_30195[(2)]);
var state_30195__$1 = state_30195;
var statearr_30406_33724 = state_30195__$1;
(statearr_30406_33724[(2)] = inst_30107);

(statearr_30406_33724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (42))){
var state_30195__$1 = state_30195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30195__$1,(45),dchan);
} else {
if((state_val_30196 === (37))){
var inst_30150 = (state_30195[(23)]);
var inst_30036 = (state_30195[(11)]);
var inst_30159 = (state_30195[(22)]);
var inst_30159__$1 = cljs.core.first(inst_30150);
var inst_30163 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30159__$1,inst_30036,done);
var state_30195__$1 = (function (){var statearr_30410 = state_30195;
(statearr_30410[(22)] = inst_30159__$1);

return statearr_30410;
})();
if(cljs.core.truth_(inst_30163)){
var statearr_30414_33725 = state_30195__$1;
(statearr_30414_33725[(1)] = (39));

} else {
var statearr_30415_33726 = state_30195__$1;
(statearr_30415_33726[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30196 === (8))){
var inst_30050 = (state_30195[(13)]);
var inst_30049 = (state_30195[(16)]);
var inst_30053 = (inst_30050 < inst_30049);
var inst_30054 = inst_30053;
var state_30195__$1 = state_30195;
if(cljs.core.truth_(inst_30054)){
var statearr_30416_33727 = state_30195__$1;
(statearr_30416_33727[(1)] = (10));

} else {
var statearr_30417_33732 = state_30195__$1;
(statearr_30417_33732[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17599__auto__ = null;
var cljs$core$async$mult_$_state_machine__17599__auto____0 = (function (){
var statearr_30418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30418[(0)] = cljs$core$async$mult_$_state_machine__17599__auto__);

(statearr_30418[(1)] = (1));

return statearr_30418;
});
var cljs$core$async$mult_$_state_machine__17599__auto____1 = (function (state_30195){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_30195);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e30419){var ex__17602__auto__ = e30419;
var statearr_30420_33733 = state_30195;
(statearr_30420_33733[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_30195[(4)]))){
var statearr_30421_33734 = state_30195;
(statearr_30421_33734[(1)] = cljs.core.first((state_30195[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_30195;
state_30195 = G__33737;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17599__auto__ = function(state_30195){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17599__auto____1.call(this,state_30195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17599__auto____0;
cljs$core$async$mult_$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17599__auto____1;
return cljs$core$async$mult_$_state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_30424 = f__17716__auto__();
(statearr_30424[(6)] = c__17715__auto___33563);

return statearr_30424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30426 = arguments.length;
switch (G__30426) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33740 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33740(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33745 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33745(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33748 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33748(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33754 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33754(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33758 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33758(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33761 = arguments.length;
var i__5727__auto___33762 = (0);
while(true){
if((i__5727__auto___33762 < len__5726__auto___33761)){
args__5732__auto__.push((arguments[i__5727__auto___33762]));

var G__33763 = (i__5727__auto___33762 + (1));
i__5727__auto___33762 = G__33763;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30505){
var map__30506 = p__30505;
var map__30506__$1 = cljs.core.__destructure_map(map__30506);
var opts = map__30506__$1;
var statearr_30507_33764 = state;
(statearr_30507_33764[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30512_33765 = state;
(statearr_30512_33765[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_30513_33772 = state;
(statearr_30513_33772[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30468){
var G__30469 = cljs.core.first(seq30468);
var seq30468__$1 = cljs.core.next(seq30468);
var G__30470 = cljs.core.first(seq30468__$1);
var seq30468__$2 = cljs.core.next(seq30468__$1);
var G__30471 = cljs.core.first(seq30468__$2);
var seq30468__$3 = cljs.core.next(seq30468__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30469,G__30470,G__30471,seq30468__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30556 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30557){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30557 = meta30557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30558,meta30557__$1){
var self__ = this;
var _30558__$1 = this;
return (new cljs.core.async.t_cljs$core$async30556(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30557__$1));
}));

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30558){
var self__ = this;
var _30558__$1 = this;
return self__.meta30557;
}));

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async30556.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async30556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30557","meta30557",-837412434,null)], null);
}));

(cljs.core.async.t_cljs$core$async30556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30556");

(cljs.core.async.t_cljs$core$async30556.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30556.
 */
cljs.core.async.__GT_t_cljs$core$async30556 = (function cljs$core$async$__GT_t_cljs$core$async30556(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30557){
return (new cljs.core.async.t_cljs$core$async30556(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30557));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async30556(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17715__auto___33808 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_30685){
var state_val_30686 = (state_30685[(1)]);
if((state_val_30686 === (7))){
var inst_30641 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
if(cljs.core.truth_(inst_30641)){
var statearr_30691_33809 = state_30685__$1;
(statearr_30691_33809[(1)] = (8));

} else {
var statearr_30694_33810 = state_30685__$1;
(statearr_30694_33810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (20))){
var inst_30634 = (state_30685[(7)]);
var state_30685__$1 = state_30685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30685__$1,(23),out,inst_30634);
} else {
if((state_val_30686 === (1))){
var inst_30592 = calc_state();
var inst_30593 = cljs.core.__destructure_map(inst_30592);
var inst_30595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30593,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30593,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30593,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30598 = inst_30592;
var state_30685__$1 = (function (){var statearr_30700 = state_30685;
(statearr_30700[(8)] = inst_30598);

(statearr_30700[(9)] = inst_30596);

(statearr_30700[(10)] = inst_30597);

(statearr_30700[(11)] = inst_30595);

return statearr_30700;
})();
var statearr_30702_33815 = state_30685__$1;
(statearr_30702_33815[(2)] = null);

(statearr_30702_33815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (24))){
var inst_30601 = (state_30685[(12)]);
var inst_30598 = inst_30601;
var state_30685__$1 = (function (){var statearr_30704 = state_30685;
(statearr_30704[(8)] = inst_30598);

return statearr_30704;
})();
var statearr_30706_33816 = state_30685__$1;
(statearr_30706_33816[(2)] = null);

(statearr_30706_33816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (4))){
var inst_30636 = (state_30685[(13)]);
var inst_30634 = (state_30685[(7)]);
var inst_30633 = (state_30685[(2)]);
var inst_30634__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30633,(0),null);
var inst_30635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30633,(1),null);
var inst_30636__$1 = (inst_30634__$1 == null);
var state_30685__$1 = (function (){var statearr_30710 = state_30685;
(statearr_30710[(13)] = inst_30636__$1);

(statearr_30710[(14)] = inst_30635);

(statearr_30710[(7)] = inst_30634__$1);

return statearr_30710;
})();
if(cljs.core.truth_(inst_30636__$1)){
var statearr_30711_33821 = state_30685__$1;
(statearr_30711_33821[(1)] = (5));

} else {
var statearr_30712_33822 = state_30685__$1;
(statearr_30712_33822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (15))){
var inst_30602 = (state_30685[(15)]);
var inst_30658 = (state_30685[(16)]);
var inst_30658__$1 = cljs.core.empty_QMARK_(inst_30602);
var state_30685__$1 = (function (){var statearr_30715 = state_30685;
(statearr_30715[(16)] = inst_30658__$1);

return statearr_30715;
})();
if(inst_30658__$1){
var statearr_30716_33827 = state_30685__$1;
(statearr_30716_33827[(1)] = (17));

} else {
var statearr_30717_33828 = state_30685__$1;
(statearr_30717_33828[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (21))){
var inst_30601 = (state_30685[(12)]);
var inst_30598 = inst_30601;
var state_30685__$1 = (function (){var statearr_30721 = state_30685;
(statearr_30721[(8)] = inst_30598);

return statearr_30721;
})();
var statearr_30722_33832 = state_30685__$1;
(statearr_30722_33832[(2)] = null);

(statearr_30722_33832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (13))){
var inst_30650 = (state_30685[(2)]);
var inst_30651 = calc_state();
var inst_30598 = inst_30651;
var state_30685__$1 = (function (){var statearr_30727 = state_30685;
(statearr_30727[(8)] = inst_30598);

(statearr_30727[(17)] = inst_30650);

return statearr_30727;
})();
var statearr_30728_33833 = state_30685__$1;
(statearr_30728_33833[(2)] = null);

(statearr_30728_33833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (22))){
var inst_30679 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30731_33834 = state_30685__$1;
(statearr_30731_33834[(2)] = inst_30679);

(statearr_30731_33834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (6))){
var inst_30635 = (state_30685[(14)]);
var inst_30639 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30635,change);
var state_30685__$1 = state_30685;
var statearr_30732_33838 = state_30685__$1;
(statearr_30732_33838[(2)] = inst_30639);

(statearr_30732_33838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (25))){
var state_30685__$1 = state_30685;
var statearr_30734_33839 = state_30685__$1;
(statearr_30734_33839[(2)] = null);

(statearr_30734_33839[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (17))){
var inst_30635 = (state_30685[(14)]);
var inst_30603 = (state_30685[(18)]);
var inst_30660 = (inst_30603.cljs$core$IFn$_invoke$arity$1 ? inst_30603.cljs$core$IFn$_invoke$arity$1(inst_30635) : inst_30603.call(null, inst_30635));
var inst_30661 = cljs.core.not(inst_30660);
var state_30685__$1 = state_30685;
var statearr_30735_33844 = state_30685__$1;
(statearr_30735_33844[(2)] = inst_30661);

(statearr_30735_33844[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (3))){
var inst_30683 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30685__$1,inst_30683);
} else {
if((state_val_30686 === (12))){
var state_30685__$1 = state_30685;
var statearr_30744_33846 = state_30685__$1;
(statearr_30744_33846[(2)] = null);

(statearr_30744_33846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (2))){
var inst_30598 = (state_30685[(8)]);
var inst_30601 = (state_30685[(12)]);
var inst_30601__$1 = cljs.core.__destructure_map(inst_30598);
var inst_30602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30601__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30601__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30601__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30685__$1 = (function (){var statearr_30747 = state_30685;
(statearr_30747[(12)] = inst_30601__$1);

(statearr_30747[(15)] = inst_30602);

(statearr_30747[(18)] = inst_30603);

return statearr_30747;
})();
return cljs.core.async.ioc_alts_BANG_(state_30685__$1,(4),inst_30615);
} else {
if((state_val_30686 === (23))){
var inst_30670 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
if(cljs.core.truth_(inst_30670)){
var statearr_30757_33848 = state_30685__$1;
(statearr_30757_33848[(1)] = (24));

} else {
var statearr_30758_33851 = state_30685__$1;
(statearr_30758_33851[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (19))){
var inst_30664 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30764_33854 = state_30685__$1;
(statearr_30764_33854[(2)] = inst_30664);

(statearr_30764_33854[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (11))){
var inst_30635 = (state_30685[(14)]);
var inst_30647 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30635);
var state_30685__$1 = state_30685;
var statearr_30771_33858 = state_30685__$1;
(statearr_30771_33858[(2)] = inst_30647);

(statearr_30771_33858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (9))){
var inst_30602 = (state_30685[(15)]);
var inst_30635 = (state_30685[(14)]);
var inst_30654 = (state_30685[(19)]);
var inst_30654__$1 = (inst_30602.cljs$core$IFn$_invoke$arity$1 ? inst_30602.cljs$core$IFn$_invoke$arity$1(inst_30635) : inst_30602.call(null, inst_30635));
var state_30685__$1 = (function (){var statearr_30777 = state_30685;
(statearr_30777[(19)] = inst_30654__$1);

return statearr_30777;
})();
if(cljs.core.truth_(inst_30654__$1)){
var statearr_30779_33862 = state_30685__$1;
(statearr_30779_33862[(1)] = (14));

} else {
var statearr_30784_33863 = state_30685__$1;
(statearr_30784_33863[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (5))){
var inst_30636 = (state_30685[(13)]);
var state_30685__$1 = state_30685;
var statearr_30788_33872 = state_30685__$1;
(statearr_30788_33872[(2)] = inst_30636);

(statearr_30788_33872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (14))){
var inst_30654 = (state_30685[(19)]);
var state_30685__$1 = state_30685;
var statearr_30795_33875 = state_30685__$1;
(statearr_30795_33875[(2)] = inst_30654);

(statearr_30795_33875[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (26))){
var inst_30675 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30798_33881 = state_30685__$1;
(statearr_30798_33881[(2)] = inst_30675);

(statearr_30798_33881[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (16))){
var inst_30666 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
if(cljs.core.truth_(inst_30666)){
var statearr_30807_33886 = state_30685__$1;
(statearr_30807_33886[(1)] = (20));

} else {
var statearr_30808_33891 = state_30685__$1;
(statearr_30808_33891[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (10))){
var inst_30681 = (state_30685[(2)]);
var state_30685__$1 = state_30685;
var statearr_30813_33896 = state_30685__$1;
(statearr_30813_33896[(2)] = inst_30681);

(statearr_30813_33896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (18))){
var inst_30658 = (state_30685[(16)]);
var state_30685__$1 = state_30685;
var statearr_30822_33898 = state_30685__$1;
(statearr_30822_33898[(2)] = inst_30658);

(statearr_30822_33898[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30686 === (8))){
var inst_30634 = (state_30685[(7)]);
var inst_30644 = (inst_30634 == null);
var state_30685__$1 = state_30685;
if(cljs.core.truth_(inst_30644)){
var statearr_30824_33905 = state_30685__$1;
(statearr_30824_33905[(1)] = (11));

} else {
var statearr_30828_33906 = state_30685__$1;
(statearr_30828_33906[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17599__auto__ = null;
var cljs$core$async$mix_$_state_machine__17599__auto____0 = (function (){
var statearr_30829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30829[(0)] = cljs$core$async$mix_$_state_machine__17599__auto__);

(statearr_30829[(1)] = (1));

return statearr_30829;
});
var cljs$core$async$mix_$_state_machine__17599__auto____1 = (function (state_30685){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_30685);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e30835){var ex__17602__auto__ = e30835;
var statearr_30839_33912 = state_30685;
(statearr_30839_33912[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_30685[(4)]))){
var statearr_30840_33914 = state_30685;
(statearr_30840_33914[(1)] = cljs.core.first((state_30685[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33916 = state_30685;
state_30685 = G__33916;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17599__auto__ = function(state_30685){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17599__auto____1.call(this,state_30685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17599__auto____0;
cljs$core$async$mix_$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17599__auto____1;
return cljs$core$async$mix_$_state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_30842 = f__17716__auto__();
(statearr_30842[(6)] = c__17715__auto___33808);

return statearr_30842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_33925 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_33925(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_33928 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_33928(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_33935 = (function() {
var G__33936 = null;
var G__33936__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__33936__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__33936 = function(p,v){
switch(arguments.length){
case 1:
return G__33936__1.call(this,p);
case 2:
return G__33936__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33936.cljs$core$IFn$_invoke$arity$1 = G__33936__1;
G__33936.cljs$core$IFn$_invoke$arity$2 = G__33936__2;
return G__33936;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30888 = arguments.length;
switch (G__30888) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33935(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_33935(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30924 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30925){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30925 = meta30925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30926,meta30925__$1){
var self__ = this;
var _30926__$1 = this;
return (new cljs.core.async.t_cljs$core$async30924(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30925__$1));
}));

(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30926){
var self__ = this;
var _30926__$1 = this;
return self__.meta30925;
}));

(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30924.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30925","meta30925",215612266,null)], null);
}));

(cljs.core.async.t_cljs$core$async30924.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30924");

(cljs.core.async.t_cljs$core$async30924.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async30924");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30924.
 */
cljs.core.async.__GT_t_cljs$core$async30924 = (function cljs$core$async$__GT_t_cljs$core$async30924(ch,topic_fn,buf_fn,mults,ensure_mult,meta30925){
return (new cljs.core.async.t_cljs$core$async30924(ch,topic_fn,buf_fn,mults,ensure_mult,meta30925));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30898 = arguments.length;
switch (G__30898) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30893_SHARP_){
if(cljs.core.truth_((p1__30893_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30893_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30893_SHARP_.call(null, topic)))){
return p1__30893_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30893_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async30924(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17715__auto___33959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_31094){
var state_val_31095 = (state_31094[(1)]);
if((state_val_31095 === (7))){
var inst_31087 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31098_33964 = state_31094__$1;
(statearr_31098_33964[(2)] = inst_31087);

(statearr_31098_33964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (20))){
var state_31094__$1 = state_31094;
var statearr_31099_33965 = state_31094__$1;
(statearr_31099_33965[(2)] = null);

(statearr_31099_33965[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (1))){
var state_31094__$1 = state_31094;
var statearr_31102_33966 = state_31094__$1;
(statearr_31102_33966[(2)] = null);

(statearr_31102_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (24))){
var inst_31064 = (state_31094[(7)]);
var inst_31077 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31064);
var state_31094__$1 = state_31094;
var statearr_31109_33967 = state_31094__$1;
(statearr_31109_33967[(2)] = inst_31077);

(statearr_31109_33967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (4))){
var inst_30993 = (state_31094[(8)]);
var inst_30993__$1 = (state_31094[(2)]);
var inst_30997 = (inst_30993__$1 == null);
var state_31094__$1 = (function (){var statearr_31113 = state_31094;
(statearr_31113[(8)] = inst_30993__$1);

return statearr_31113;
})();
if(cljs.core.truth_(inst_30997)){
var statearr_31123_33968 = state_31094__$1;
(statearr_31123_33968[(1)] = (5));

} else {
var statearr_31124_33969 = state_31094__$1;
(statearr_31124_33969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (15))){
var inst_31057 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31131_33970 = state_31094__$1;
(statearr_31131_33970[(2)] = inst_31057);

(statearr_31131_33970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (21))){
var inst_31084 = (state_31094[(2)]);
var state_31094__$1 = (function (){var statearr_31133 = state_31094;
(statearr_31133[(9)] = inst_31084);

return statearr_31133;
})();
var statearr_31138_33972 = state_31094__$1;
(statearr_31138_33972[(2)] = null);

(statearr_31138_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (13))){
var inst_31028 = (state_31094[(10)]);
var inst_31033 = cljs.core.chunked_seq_QMARK_(inst_31028);
var state_31094__$1 = state_31094;
if(inst_31033){
var statearr_31139_33973 = state_31094__$1;
(statearr_31139_33973[(1)] = (16));

} else {
var statearr_31140_33974 = state_31094__$1;
(statearr_31140_33974[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (22))){
var inst_31072 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
if(cljs.core.truth_(inst_31072)){
var statearr_31146_33978 = state_31094__$1;
(statearr_31146_33978[(1)] = (23));

} else {
var statearr_31147_33979 = state_31094__$1;
(statearr_31147_33979[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (6))){
var inst_31064 = (state_31094[(7)]);
var inst_31067 = (state_31094[(11)]);
var inst_30993 = (state_31094[(8)]);
var inst_31064__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30993) : topic_fn.call(null, inst_30993));
var inst_31065 = cljs.core.deref(mults);
var inst_31067__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31065,inst_31064__$1);
var state_31094__$1 = (function (){var statearr_31153 = state_31094;
(statearr_31153[(7)] = inst_31064__$1);

(statearr_31153[(11)] = inst_31067__$1);

return statearr_31153;
})();
if(cljs.core.truth_(inst_31067__$1)){
var statearr_31155_33983 = state_31094__$1;
(statearr_31155_33983[(1)] = (19));

} else {
var statearr_31159_33984 = state_31094__$1;
(statearr_31159_33984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (25))){
var inst_31081 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31161_33987 = state_31094__$1;
(statearr_31161_33987[(2)] = inst_31081);

(statearr_31161_33987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (17))){
var inst_31028 = (state_31094[(10)]);
var inst_31046 = cljs.core.first(inst_31028);
var inst_31047 = cljs.core.async.muxch_STAR_(inst_31046);
var inst_31048 = cljs.core.async.close_BANG_(inst_31047);
var inst_31049 = cljs.core.next(inst_31028);
var inst_31006 = inst_31049;
var inst_31007 = null;
var inst_31008 = (0);
var inst_31009 = (0);
var state_31094__$1 = (function (){var statearr_31167 = state_31094;
(statearr_31167[(12)] = inst_31048);

(statearr_31167[(13)] = inst_31007);

(statearr_31167[(14)] = inst_31006);

(statearr_31167[(15)] = inst_31008);

(statearr_31167[(16)] = inst_31009);

return statearr_31167;
})();
var statearr_31170_33988 = state_31094__$1;
(statearr_31170_33988[(2)] = null);

(statearr_31170_33988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (3))){
var inst_31089 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31094__$1,inst_31089);
} else {
if((state_val_31095 === (12))){
var inst_31059 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31171_33989 = state_31094__$1;
(statearr_31171_33989[(2)] = inst_31059);

(statearr_31171_33989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (2))){
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31094__$1,(4),ch);
} else {
if((state_val_31095 === (23))){
var state_31094__$1 = state_31094;
var statearr_31173_33991 = state_31094__$1;
(statearr_31173_33991[(2)] = null);

(statearr_31173_33991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (19))){
var inst_31067 = (state_31094[(11)]);
var inst_30993 = (state_31094[(8)]);
var inst_31070 = cljs.core.async.muxch_STAR_(inst_31067);
var state_31094__$1 = state_31094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31094__$1,(22),inst_31070,inst_30993);
} else {
if((state_val_31095 === (11))){
var inst_31028 = (state_31094[(10)]);
var inst_31006 = (state_31094[(14)]);
var inst_31028__$1 = cljs.core.seq(inst_31006);
var state_31094__$1 = (function (){var statearr_31174 = state_31094;
(statearr_31174[(10)] = inst_31028__$1);

return statearr_31174;
})();
if(inst_31028__$1){
var statearr_31175_33994 = state_31094__$1;
(statearr_31175_33994[(1)] = (13));

} else {
var statearr_31179_33995 = state_31094__$1;
(statearr_31179_33995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (9))){
var inst_31062 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31180_33996 = state_31094__$1;
(statearr_31180_33996[(2)] = inst_31062);

(statearr_31180_33996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (5))){
var inst_31003 = cljs.core.deref(mults);
var inst_31004 = cljs.core.vals(inst_31003);
var inst_31005 = cljs.core.seq(inst_31004);
var inst_31006 = inst_31005;
var inst_31007 = null;
var inst_31008 = (0);
var inst_31009 = (0);
var state_31094__$1 = (function (){var statearr_31182 = state_31094;
(statearr_31182[(13)] = inst_31007);

(statearr_31182[(14)] = inst_31006);

(statearr_31182[(15)] = inst_31008);

(statearr_31182[(16)] = inst_31009);

return statearr_31182;
})();
var statearr_31183_34001 = state_31094__$1;
(statearr_31183_34001[(2)] = null);

(statearr_31183_34001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (14))){
var state_31094__$1 = state_31094;
var statearr_31187_34005 = state_31094__$1;
(statearr_31187_34005[(2)] = null);

(statearr_31187_34005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (16))){
var inst_31028 = (state_31094[(10)]);
var inst_31037 = cljs.core.chunk_first(inst_31028);
var inst_31041 = cljs.core.chunk_rest(inst_31028);
var inst_31042 = cljs.core.count(inst_31037);
var inst_31006 = inst_31041;
var inst_31007 = inst_31037;
var inst_31008 = inst_31042;
var inst_31009 = (0);
var state_31094__$1 = (function (){var statearr_31199 = state_31094;
(statearr_31199[(13)] = inst_31007);

(statearr_31199[(14)] = inst_31006);

(statearr_31199[(15)] = inst_31008);

(statearr_31199[(16)] = inst_31009);

return statearr_31199;
})();
var statearr_31202_34007 = state_31094__$1;
(statearr_31202_34007[(2)] = null);

(statearr_31202_34007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (10))){
var inst_31007 = (state_31094[(13)]);
var inst_31006 = (state_31094[(14)]);
var inst_31008 = (state_31094[(15)]);
var inst_31009 = (state_31094[(16)]);
var inst_31019 = cljs.core._nth(inst_31007,inst_31009);
var inst_31022 = cljs.core.async.muxch_STAR_(inst_31019);
var inst_31023 = cljs.core.async.close_BANG_(inst_31022);
var inst_31025 = (inst_31009 + (1));
var tmp31184 = inst_31007;
var tmp31185 = inst_31006;
var tmp31186 = inst_31008;
var inst_31006__$1 = tmp31185;
var inst_31007__$1 = tmp31184;
var inst_31008__$1 = tmp31186;
var inst_31009__$1 = inst_31025;
var state_31094__$1 = (function (){var statearr_31203 = state_31094;
(statearr_31203[(13)] = inst_31007__$1);

(statearr_31203[(17)] = inst_31023);

(statearr_31203[(14)] = inst_31006__$1);

(statearr_31203[(15)] = inst_31008__$1);

(statearr_31203[(16)] = inst_31009__$1);

return statearr_31203;
})();
var statearr_31207_34008 = state_31094__$1;
(statearr_31207_34008[(2)] = null);

(statearr_31207_34008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (18))){
var inst_31053 = (state_31094[(2)]);
var state_31094__$1 = state_31094;
var statearr_31208_34009 = state_31094__$1;
(statearr_31208_34009[(2)] = inst_31053);

(statearr_31208_34009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31095 === (8))){
var inst_31008 = (state_31094[(15)]);
var inst_31009 = (state_31094[(16)]);
var inst_31014 = (inst_31009 < inst_31008);
var inst_31015 = inst_31014;
var state_31094__$1 = state_31094;
if(cljs.core.truth_(inst_31015)){
var statearr_31209_34011 = state_31094__$1;
(statearr_31209_34011[(1)] = (10));

} else {
var statearr_31210_34012 = state_31094__$1;
(statearr_31210_34012[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_31218 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31218[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_31218[(1)] = (1));

return statearr_31218;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_31094){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_31094);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e31222){var ex__17602__auto__ = e31222;
var statearr_31223_34017 = state_31094;
(statearr_31223_34017[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_31094[(4)]))){
var statearr_31233_34019 = state_31094;
(statearr_31233_34019[(1)] = cljs.core.first((state_31094[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34021 = state_31094;
state_31094 = G__34021;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_31094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_31094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_31236 = f__17716__auto__();
(statearr_31236[(6)] = c__17715__auto___33959);

return statearr_31236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31240 = arguments.length;
switch (G__31240) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31252 = arguments.length;
switch (G__31252) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31257 = arguments.length;
switch (G__31257) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17715__auto___34056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_31347){
var state_val_31348 = (state_31347[(1)]);
if((state_val_31348 === (7))){
var state_31347__$1 = state_31347;
var statearr_31350_34064 = state_31347__$1;
(statearr_31350_34064[(2)] = null);

(statearr_31350_34064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (1))){
var state_31347__$1 = state_31347;
var statearr_31351_34076 = state_31347__$1;
(statearr_31351_34076[(2)] = null);

(statearr_31351_34076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (4))){
var inst_31295 = (state_31347[(7)]);
var inst_31297 = (state_31347[(8)]);
var inst_31300 = (inst_31297 < inst_31295);
var state_31347__$1 = state_31347;
if(cljs.core.truth_(inst_31300)){
var statearr_31365_34080 = state_31347__$1;
(statearr_31365_34080[(1)] = (6));

} else {
var statearr_31368_34081 = state_31347__$1;
(statearr_31368_34081[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (15))){
var inst_31329 = (state_31347[(9)]);
var inst_31335 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31329);
var state_31347__$1 = state_31347;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31347__$1,(17),out,inst_31335);
} else {
if((state_val_31348 === (13))){
var inst_31329 = (state_31347[(9)]);
var inst_31329__$1 = (state_31347[(2)]);
var inst_31330 = cljs.core.some(cljs.core.nil_QMARK_,inst_31329__$1);
var state_31347__$1 = (function (){var statearr_31373 = state_31347;
(statearr_31373[(9)] = inst_31329__$1);

return statearr_31373;
})();
if(cljs.core.truth_(inst_31330)){
var statearr_31377_34092 = state_31347__$1;
(statearr_31377_34092[(1)] = (14));

} else {
var statearr_31378_34093 = state_31347__$1;
(statearr_31378_34093[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (6))){
var state_31347__$1 = state_31347;
var statearr_31379_34094 = state_31347__$1;
(statearr_31379_34094[(2)] = null);

(statearr_31379_34094[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (17))){
var inst_31337 = (state_31347[(2)]);
var state_31347__$1 = (function (){var statearr_31400 = state_31347;
(statearr_31400[(10)] = inst_31337);

return statearr_31400;
})();
var statearr_31401_34102 = state_31347__$1;
(statearr_31401_34102[(2)] = null);

(statearr_31401_34102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (3))){
var inst_31342 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31347__$1,inst_31342);
} else {
if((state_val_31348 === (12))){
var _ = (function (){var statearr_31402 = state_31347;
(statearr_31402[(4)] = cljs.core.rest((state_31347[(4)])));

return statearr_31402;
})();
var state_31347__$1 = state_31347;
var ex31394 = (state_31347__$1[(2)]);
var statearr_31403_34109 = state_31347__$1;
(statearr_31403_34109[(5)] = ex31394);


if((ex31394 instanceof Object)){
var statearr_31406_34111 = state_31347__$1;
(statearr_31406_34111[(1)] = (11));

(statearr_31406_34111[(5)] = null);

} else {
throw ex31394;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (2))){
var inst_31294 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31295 = cnt;
var inst_31297 = (0);
var state_31347__$1 = (function (){var statearr_31424 = state_31347;
(statearr_31424[(11)] = inst_31294);

(statearr_31424[(7)] = inst_31295);

(statearr_31424[(8)] = inst_31297);

return statearr_31424;
})();
var statearr_31428_34115 = state_31347__$1;
(statearr_31428_34115[(2)] = null);

(statearr_31428_34115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (11))){
var inst_31307 = (state_31347[(2)]);
var inst_31308 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31347__$1 = (function (){var statearr_31445 = state_31347;
(statearr_31445[(12)] = inst_31307);

return statearr_31445;
})();
var statearr_31447_34128 = state_31347__$1;
(statearr_31447_34128[(2)] = inst_31308);

(statearr_31447_34128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (9))){
var inst_31297 = (state_31347[(8)]);
var _ = (function (){var statearr_31449 = state_31347;
(statearr_31449[(4)] = cljs.core.cons((12),(state_31347[(4)])));

return statearr_31449;
})();
var inst_31315 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31297) : chs__$1.call(null, inst_31297));
var inst_31316 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31297) : done.call(null, inst_31297));
var inst_31317 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31315,inst_31316);
var ___$1 = (function (){var statearr_31451 = state_31347;
(statearr_31451[(4)] = cljs.core.rest((state_31347[(4)])));

return statearr_31451;
})();
var state_31347__$1 = state_31347;
var statearr_31452_34131 = state_31347__$1;
(statearr_31452_34131[(2)] = inst_31317);

(statearr_31452_34131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (5))){
var inst_31327 = (state_31347[(2)]);
var state_31347__$1 = (function (){var statearr_31453 = state_31347;
(statearr_31453[(13)] = inst_31327);

return statearr_31453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31347__$1,(13),dchan);
} else {
if((state_val_31348 === (14))){
var inst_31333 = cljs.core.async.close_BANG_(out);
var state_31347__$1 = state_31347;
var statearr_31457_34136 = state_31347__$1;
(statearr_31457_34136[(2)] = inst_31333);

(statearr_31457_34136[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (16))){
var inst_31340 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
var statearr_31469_34144 = state_31347__$1;
(statearr_31469_34144[(2)] = inst_31340);

(statearr_31469_34144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (10))){
var inst_31297 = (state_31347[(8)]);
var inst_31320 = (state_31347[(2)]);
var inst_31321 = (inst_31297 + (1));
var inst_31297__$1 = inst_31321;
var state_31347__$1 = (function (){var statearr_31477 = state_31347;
(statearr_31477[(14)] = inst_31320);

(statearr_31477[(8)] = inst_31297__$1);

return statearr_31477;
})();
var statearr_31488_34159 = state_31347__$1;
(statearr_31488_34159[(2)] = null);

(statearr_31488_34159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31348 === (8))){
var inst_31325 = (state_31347[(2)]);
var state_31347__$1 = state_31347;
var statearr_31498_34165 = state_31347__$1;
(statearr_31498_34165[(2)] = inst_31325);

(statearr_31498_34165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_31514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31514[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_31514[(1)] = (1));

return statearr_31514;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_31347){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_31347);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e31518){var ex__17602__auto__ = e31518;
var statearr_31520_34178 = state_31347;
(statearr_31520_34178[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_31347[(4)]))){
var statearr_31523_34179 = state_31347;
(statearr_31523_34179[(1)] = cljs.core.first((state_31347[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34185 = state_31347;
state_31347 = G__34185;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_31347){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_31347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_31530 = f__17716__auto__();
(statearr_31530[(6)] = c__17715__auto___34056);

return statearr_31530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31545 = arguments.length;
switch (G__31545) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17715__auto___34202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_31594){
var state_val_31595 = (state_31594[(1)]);
if((state_val_31595 === (7))){
var inst_31572 = (state_31594[(7)]);
var inst_31571 = (state_31594[(8)]);
var inst_31571__$1 = (state_31594[(2)]);
var inst_31572__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31571__$1,(0),null);
var inst_31573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31571__$1,(1),null);
var inst_31574 = (inst_31572__$1 == null);
var state_31594__$1 = (function (){var statearr_31614 = state_31594;
(statearr_31614[(7)] = inst_31572__$1);

(statearr_31614[(9)] = inst_31573);

(statearr_31614[(8)] = inst_31571__$1);

return statearr_31614;
})();
if(cljs.core.truth_(inst_31574)){
var statearr_31616_34204 = state_31594__$1;
(statearr_31616_34204[(1)] = (8));

} else {
var statearr_31617_34205 = state_31594__$1;
(statearr_31617_34205[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (1))){
var inst_31561 = cljs.core.vec(chs);
var inst_31562 = inst_31561;
var state_31594__$1 = (function (){var statearr_31621 = state_31594;
(statearr_31621[(10)] = inst_31562);

return statearr_31621;
})();
var statearr_31622_34212 = state_31594__$1;
(statearr_31622_34212[(2)] = null);

(statearr_31622_34212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (4))){
var inst_31562 = (state_31594[(10)]);
var state_31594__$1 = state_31594;
return cljs.core.async.ioc_alts_BANG_(state_31594__$1,(7),inst_31562);
} else {
if((state_val_31595 === (6))){
var inst_31588 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31623_34213 = state_31594__$1;
(statearr_31623_34213[(2)] = inst_31588);

(statearr_31623_34213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (3))){
var inst_31590 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31594__$1,inst_31590);
} else {
if((state_val_31595 === (2))){
var inst_31562 = (state_31594[(10)]);
var inst_31564 = cljs.core.count(inst_31562);
var inst_31565 = (inst_31564 > (0));
var state_31594__$1 = state_31594;
if(cljs.core.truth_(inst_31565)){
var statearr_31627_34214 = state_31594__$1;
(statearr_31627_34214[(1)] = (4));

} else {
var statearr_31628_34215 = state_31594__$1;
(statearr_31628_34215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (11))){
var inst_31562 = (state_31594[(10)]);
var inst_31581 = (state_31594[(2)]);
var tmp31624 = inst_31562;
var inst_31562__$1 = tmp31624;
var state_31594__$1 = (function (){var statearr_31630 = state_31594;
(statearr_31630[(11)] = inst_31581);

(statearr_31630[(10)] = inst_31562__$1);

return statearr_31630;
})();
var statearr_31636_34217 = state_31594__$1;
(statearr_31636_34217[(2)] = null);

(statearr_31636_34217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (9))){
var inst_31572 = (state_31594[(7)]);
var state_31594__$1 = state_31594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31594__$1,(11),out,inst_31572);
} else {
if((state_val_31595 === (5))){
var inst_31586 = cljs.core.async.close_BANG_(out);
var state_31594__$1 = state_31594;
var statearr_31649_34224 = state_31594__$1;
(statearr_31649_34224[(2)] = inst_31586);

(statearr_31649_34224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (10))){
var inst_31584 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31651_34226 = state_31594__$1;
(statearr_31651_34226[(2)] = inst_31584);

(statearr_31651_34226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (8))){
var inst_31572 = (state_31594[(7)]);
var inst_31562 = (state_31594[(10)]);
var inst_31573 = (state_31594[(9)]);
var inst_31571 = (state_31594[(8)]);
var inst_31576 = (function (){var cs = inst_31562;
var vec__31567 = inst_31571;
var v = inst_31572;
var c = inst_31573;
return (function (p1__31534_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31534_SHARP_);
});
})();
var inst_31577 = cljs.core.filterv(inst_31576,inst_31562);
var inst_31562__$1 = inst_31577;
var state_31594__$1 = (function (){var statearr_31660 = state_31594;
(statearr_31660[(10)] = inst_31562__$1);

return statearr_31660;
})();
var statearr_31666_34229 = state_31594__$1;
(statearr_31666_34229[(2)] = null);

(statearr_31666_34229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_31667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31667[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_31667[(1)] = (1));

return statearr_31667;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_31594){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_31594);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e31668){var ex__17602__auto__ = e31668;
var statearr_31669_34236 = state_31594;
(statearr_31669_34236[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_31594[(4)]))){
var statearr_31682_34243 = state_31594;
(statearr_31682_34243[(1)] = cljs.core.first((state_31594[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34244 = state_31594;
state_31594 = G__34244;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_31594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_31594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_31683 = f__17716__auto__();
(statearr_31683[(6)] = c__17715__auto___34202);

return statearr_31683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31699 = arguments.length;
switch (G__31699) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17715__auto___34250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_31745){
var state_val_31746 = (state_31745[(1)]);
if((state_val_31746 === (7))){
var inst_31725 = (state_31745[(7)]);
var inst_31725__$1 = (state_31745[(2)]);
var inst_31726 = (inst_31725__$1 == null);
var inst_31727 = cljs.core.not(inst_31726);
var state_31745__$1 = (function (){var statearr_31749 = state_31745;
(statearr_31749[(7)] = inst_31725__$1);

return statearr_31749;
})();
if(inst_31727){
var statearr_31750_34251 = state_31745__$1;
(statearr_31750_34251[(1)] = (8));

} else {
var statearr_31751_34252 = state_31745__$1;
(statearr_31751_34252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (1))){
var inst_31720 = (0);
var state_31745__$1 = (function (){var statearr_31752 = state_31745;
(statearr_31752[(8)] = inst_31720);

return statearr_31752;
})();
var statearr_31753_34253 = state_31745__$1;
(statearr_31753_34253[(2)] = null);

(statearr_31753_34253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (4))){
var state_31745__$1 = state_31745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31745__$1,(7),ch);
} else {
if((state_val_31746 === (6))){
var inst_31739 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
var statearr_31754_34255 = state_31745__$1;
(statearr_31754_34255[(2)] = inst_31739);

(statearr_31754_34255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (3))){
var inst_31741 = (state_31745[(2)]);
var inst_31742 = cljs.core.async.close_BANG_(out);
var state_31745__$1 = (function (){var statearr_31760 = state_31745;
(statearr_31760[(9)] = inst_31741);

return statearr_31760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31745__$1,inst_31742);
} else {
if((state_val_31746 === (2))){
var inst_31720 = (state_31745[(8)]);
var inst_31722 = (inst_31720 < n);
var state_31745__$1 = state_31745;
if(cljs.core.truth_(inst_31722)){
var statearr_31764_34264 = state_31745__$1;
(statearr_31764_34264[(1)] = (4));

} else {
var statearr_31770_34265 = state_31745__$1;
(statearr_31770_34265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (11))){
var inst_31720 = (state_31745[(8)]);
var inst_31730 = (state_31745[(2)]);
var inst_31731 = (inst_31720 + (1));
var inst_31720__$1 = inst_31731;
var state_31745__$1 = (function (){var statearr_31771 = state_31745;
(statearr_31771[(8)] = inst_31720__$1);

(statearr_31771[(10)] = inst_31730);

return statearr_31771;
})();
var statearr_31772_34266 = state_31745__$1;
(statearr_31772_34266[(2)] = null);

(statearr_31772_34266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (9))){
var state_31745__$1 = state_31745;
var statearr_31774_34267 = state_31745__$1;
(statearr_31774_34267[(2)] = null);

(statearr_31774_34267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (5))){
var state_31745__$1 = state_31745;
var statearr_31776_34268 = state_31745__$1;
(statearr_31776_34268[(2)] = null);

(statearr_31776_34268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (10))){
var inst_31735 = (state_31745[(2)]);
var state_31745__$1 = state_31745;
var statearr_31777_34269 = state_31745__$1;
(statearr_31777_34269[(2)] = inst_31735);

(statearr_31777_34269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31746 === (8))){
var inst_31725 = (state_31745[(7)]);
var state_31745__$1 = state_31745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31745__$1,(11),out,inst_31725);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_31779 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31779[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_31779[(1)] = (1));

return statearr_31779;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_31745){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_31745);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e31781){var ex__17602__auto__ = e31781;
var statearr_31785_34270 = state_31745;
(statearr_31785_34270[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_31745[(4)]))){
var statearr_31786_34271 = state_31745;
(statearr_31786_34271[(1)] = cljs.core.first((state_31745[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34272 = state_31745;
state_31745 = G__34272;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_31745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_31745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_31792 = f__17716__auto__();
(statearr_31792[(6)] = c__17715__auto___34250);

return statearr_31792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31804 = (function (f,ch,meta31798,_,fn1,meta31805){
this.f = f;
this.ch = ch;
this.meta31798 = meta31798;
this._ = _;
this.fn1 = fn1;
this.meta31805 = meta31805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31806,meta31805__$1){
var self__ = this;
var _31806__$1 = this;
return (new cljs.core.async.t_cljs$core$async31804(self__.f,self__.ch,self__.meta31798,self__._,self__.fn1,meta31805__$1));
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31806){
var self__ = this;
var _31806__$1 = this;
return self__.meta31805;
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31793_SHARP_){
var G__31823 = (((p1__31793_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31793_SHARP_) : self__.f.call(null, p1__31793_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31823) : f1.call(null, G__31823));
});
}));

(cljs.core.async.t_cljs$core$async31804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31798","meta31798",1622235422,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31797","cljs.core.async/t_cljs$core$async31797",156890854,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31805","meta31805",1431765966,null)], null);
}));

(cljs.core.async.t_cljs$core$async31804.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31804");

(cljs.core.async.t_cljs$core$async31804.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31804");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31804.
 */
cljs.core.async.__GT_t_cljs$core$async31804 = (function cljs$core$async$__GT_t_cljs$core$async31804(f,ch,meta31798,_,fn1,meta31805){
return (new cljs.core.async.t_cljs$core$async31804(f,ch,meta31798,_,fn1,meta31805));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31797 = (function (f,ch,meta31798){
this.f = f;
this.ch = ch;
this.meta31798 = meta31798;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31799,meta31798__$1){
var self__ = this;
var _31799__$1 = this;
return (new cljs.core.async.t_cljs$core$async31797(self__.f,self__.ch,meta31798__$1));
}));

(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31799){
var self__ = this;
var _31799__$1 = this;
return self__.meta31798;
}));

(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async31804(self__.f,self__.ch,self__.meta31798,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31829 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31829) : self__.f.call(null, G__31829));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31797.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31797.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31798","meta31798",1622235422,null)], null);
}));

(cljs.core.async.t_cljs$core$async31797.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31797.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31797");

(cljs.core.async.t_cljs$core$async31797.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31797");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31797.
 */
cljs.core.async.__GT_t_cljs$core$async31797 = (function cljs$core$async$__GT_t_cljs$core$async31797(f,ch,meta31798){
return (new cljs.core.async.t_cljs$core$async31797(f,ch,meta31798));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async31797(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31836 = (function (f,ch,meta31837){
this.f = f;
this.ch = ch;
this.meta31837 = meta31837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31838,meta31837__$1){
var self__ = this;
var _31838__$1 = this;
return (new cljs.core.async.t_cljs$core$async31836(self__.f,self__.ch,meta31837__$1));
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31838){
var self__ = this;
var _31838__$1 = this;
return self__.meta31837;
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31837","meta31837",404994191,null)], null);
}));

(cljs.core.async.t_cljs$core$async31836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31836");

(cljs.core.async.t_cljs$core$async31836.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31836.
 */
cljs.core.async.__GT_t_cljs$core$async31836 = (function cljs$core$async$__GT_t_cljs$core$async31836(f,ch,meta31837){
return (new cljs.core.async.t_cljs$core$async31836(f,ch,meta31837));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async31836(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31846 = (function (p,ch,meta31847){
this.p = p;
this.ch = ch;
this.meta31847 = meta31847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31848,meta31847__$1){
var self__ = this;
var _31848__$1 = this;
return (new cljs.core.async.t_cljs$core$async31846(self__.p,self__.ch,meta31847__$1));
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31848){
var self__ = this;
var _31848__$1 = this;
return self__.meta31847;
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31847","meta31847",185791331,null)], null);
}));

(cljs.core.async.t_cljs$core$async31846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31846");

(cljs.core.async.t_cljs$core$async31846.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async31846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31846.
 */
cljs.core.async.__GT_t_cljs$core$async31846 = (function cljs$core$async$__GT_t_cljs$core$async31846(p,ch,meta31847){
return (new cljs.core.async.t_cljs$core$async31846(p,ch,meta31847));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async31846(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31862 = arguments.length;
switch (G__31862) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17715__auto___34288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_31891){
var state_val_31892 = (state_31891[(1)]);
if((state_val_31892 === (7))){
var inst_31887 = (state_31891[(2)]);
var state_31891__$1 = state_31891;
var statearr_31893_34289 = state_31891__$1;
(statearr_31893_34289[(2)] = inst_31887);

(statearr_31893_34289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (1))){
var state_31891__$1 = state_31891;
var statearr_31894_34290 = state_31891__$1;
(statearr_31894_34290[(2)] = null);

(statearr_31894_34290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (4))){
var inst_31873 = (state_31891[(7)]);
var inst_31873__$1 = (state_31891[(2)]);
var inst_31874 = (inst_31873__$1 == null);
var state_31891__$1 = (function (){var statearr_31895 = state_31891;
(statearr_31895[(7)] = inst_31873__$1);

return statearr_31895;
})();
if(cljs.core.truth_(inst_31874)){
var statearr_31896_34291 = state_31891__$1;
(statearr_31896_34291[(1)] = (5));

} else {
var statearr_31897_34292 = state_31891__$1;
(statearr_31897_34292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (6))){
var inst_31873 = (state_31891[(7)]);
var inst_31878 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31873) : p.call(null, inst_31873));
var state_31891__$1 = state_31891;
if(cljs.core.truth_(inst_31878)){
var statearr_31898_34293 = state_31891__$1;
(statearr_31898_34293[(1)] = (8));

} else {
var statearr_31899_34294 = state_31891__$1;
(statearr_31899_34294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (3))){
var inst_31889 = (state_31891[(2)]);
var state_31891__$1 = state_31891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31891__$1,inst_31889);
} else {
if((state_val_31892 === (2))){
var state_31891__$1 = state_31891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31891__$1,(4),ch);
} else {
if((state_val_31892 === (11))){
var inst_31881 = (state_31891[(2)]);
var state_31891__$1 = state_31891;
var statearr_31905_34295 = state_31891__$1;
(statearr_31905_34295[(2)] = inst_31881);

(statearr_31905_34295[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (9))){
var state_31891__$1 = state_31891;
var statearr_31906_34296 = state_31891__$1;
(statearr_31906_34296[(2)] = null);

(statearr_31906_34296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (5))){
var inst_31876 = cljs.core.async.close_BANG_(out);
var state_31891__$1 = state_31891;
var statearr_31907_34297 = state_31891__$1;
(statearr_31907_34297[(2)] = inst_31876);

(statearr_31907_34297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (10))){
var inst_31884 = (state_31891[(2)]);
var state_31891__$1 = (function (){var statearr_31912 = state_31891;
(statearr_31912[(8)] = inst_31884);

return statearr_31912;
})();
var statearr_31913_34305 = state_31891__$1;
(statearr_31913_34305[(2)] = null);

(statearr_31913_34305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31892 === (8))){
var inst_31873 = (state_31891[(7)]);
var state_31891__$1 = state_31891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31891__$1,(11),out,inst_31873);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_31918 = [null,null,null,null,null,null,null,null,null];
(statearr_31918[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_31918[(1)] = (1));

return statearr_31918;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_31891){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_31891);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e31920){var ex__17602__auto__ = e31920;
var statearr_31921_34306 = state_31891;
(statearr_31921_34306[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_31891[(4)]))){
var statearr_31927_34307 = state_31891;
(statearr_31927_34307[(1)] = cljs.core.first((state_31891[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34308 = state_31891;
state_31891 = G__34308;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_31891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_31891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_31928 = f__17716__auto__();
(statearr_31928[(6)] = c__17715__auto___34288);

return statearr_31928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31939 = arguments.length;
switch (G__31939) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17715__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_32052){
var state_val_32056 = (state_32052[(1)]);
if((state_val_32056 === (7))){
var inst_32046 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32067_34310 = state_32052__$1;
(statearr_32067_34310[(2)] = inst_32046);

(statearr_32067_34310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (20))){
var inst_32014 = (state_32052[(7)]);
var inst_32027 = (state_32052[(2)]);
var inst_32028 = cljs.core.next(inst_32014);
var inst_31988 = inst_32028;
var inst_31989 = null;
var inst_31990 = (0);
var inst_31991 = (0);
var state_32052__$1 = (function (){var statearr_32068 = state_32052;
(statearr_32068[(8)] = inst_32027);

(statearr_32068[(9)] = inst_31988);

(statearr_32068[(10)] = inst_31991);

(statearr_32068[(11)] = inst_31990);

(statearr_32068[(12)] = inst_31989);

return statearr_32068;
})();
var statearr_32069_34315 = state_32052__$1;
(statearr_32069_34315[(2)] = null);

(statearr_32069_34315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (1))){
var state_32052__$1 = state_32052;
var statearr_32072_34318 = state_32052__$1;
(statearr_32072_34318[(2)] = null);

(statearr_32072_34318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (4))){
var inst_31974 = (state_32052[(13)]);
var inst_31974__$1 = (state_32052[(2)]);
var inst_31978 = (inst_31974__$1 == null);
var state_32052__$1 = (function (){var statearr_32074 = state_32052;
(statearr_32074[(13)] = inst_31974__$1);

return statearr_32074;
})();
if(cljs.core.truth_(inst_31978)){
var statearr_32075_34323 = state_32052__$1;
(statearr_32075_34323[(1)] = (5));

} else {
var statearr_32076_34324 = state_32052__$1;
(statearr_32076_34324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (15))){
var state_32052__$1 = state_32052;
var statearr_32080_34325 = state_32052__$1;
(statearr_32080_34325[(2)] = null);

(statearr_32080_34325[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (21))){
var state_32052__$1 = state_32052;
var statearr_32081_34326 = state_32052__$1;
(statearr_32081_34326[(2)] = null);

(statearr_32081_34326[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (13))){
var inst_31988 = (state_32052[(9)]);
var inst_31991 = (state_32052[(10)]);
var inst_31990 = (state_32052[(11)]);
var inst_31989 = (state_32052[(12)]);
var inst_31998 = (state_32052[(2)]);
var inst_32007 = (inst_31991 + (1));
var tmp32077 = inst_31988;
var tmp32078 = inst_31990;
var tmp32079 = inst_31989;
var inst_31988__$1 = tmp32077;
var inst_31989__$1 = tmp32079;
var inst_31990__$1 = tmp32078;
var inst_31991__$1 = inst_32007;
var state_32052__$1 = (function (){var statearr_32087 = state_32052;
(statearr_32087[(9)] = inst_31988__$1);

(statearr_32087[(10)] = inst_31991__$1);

(statearr_32087[(11)] = inst_31990__$1);

(statearr_32087[(14)] = inst_31998);

(statearr_32087[(12)] = inst_31989__$1);

return statearr_32087;
})();
var statearr_32089_34331 = state_32052__$1;
(statearr_32089_34331[(2)] = null);

(statearr_32089_34331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (22))){
var state_32052__$1 = state_32052;
var statearr_32094_34332 = state_32052__$1;
(statearr_32094_34332[(2)] = null);

(statearr_32094_34332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (6))){
var inst_31974 = (state_32052[(13)]);
var inst_31986 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31974) : f.call(null, inst_31974));
var inst_31987 = cljs.core.seq(inst_31986);
var inst_31988 = inst_31987;
var inst_31989 = null;
var inst_31990 = (0);
var inst_31991 = (0);
var state_32052__$1 = (function (){var statearr_32097 = state_32052;
(statearr_32097[(9)] = inst_31988);

(statearr_32097[(10)] = inst_31991);

(statearr_32097[(11)] = inst_31990);

(statearr_32097[(12)] = inst_31989);

return statearr_32097;
})();
var statearr_32098_34334 = state_32052__$1;
(statearr_32098_34334[(2)] = null);

(statearr_32098_34334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (17))){
var inst_32014 = (state_32052[(7)]);
var inst_32018 = cljs.core.chunk_first(inst_32014);
var inst_32019 = cljs.core.chunk_rest(inst_32014);
var inst_32020 = cljs.core.count(inst_32018);
var inst_31988 = inst_32019;
var inst_31989 = inst_32018;
var inst_31990 = inst_32020;
var inst_31991 = (0);
var state_32052__$1 = (function (){var statearr_32101 = state_32052;
(statearr_32101[(9)] = inst_31988);

(statearr_32101[(10)] = inst_31991);

(statearr_32101[(11)] = inst_31990);

(statearr_32101[(12)] = inst_31989);

return statearr_32101;
})();
var statearr_32102_34336 = state_32052__$1;
(statearr_32102_34336[(2)] = null);

(statearr_32102_34336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (3))){
var inst_32048 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32052__$1,inst_32048);
} else {
if((state_val_32056 === (12))){
var inst_32036 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32109_34340 = state_32052__$1;
(statearr_32109_34340[(2)] = inst_32036);

(statearr_32109_34340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (2))){
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32052__$1,(4),in$);
} else {
if((state_val_32056 === (23))){
var inst_32044 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32112_34346 = state_32052__$1;
(statearr_32112_34346[(2)] = inst_32044);

(statearr_32112_34346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (19))){
var inst_32031 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32113_34347 = state_32052__$1;
(statearr_32113_34347[(2)] = inst_32031);

(statearr_32113_34347[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (11))){
var inst_32014 = (state_32052[(7)]);
var inst_31988 = (state_32052[(9)]);
var inst_32014__$1 = cljs.core.seq(inst_31988);
var state_32052__$1 = (function (){var statearr_32116 = state_32052;
(statearr_32116[(7)] = inst_32014__$1);

return statearr_32116;
})();
if(inst_32014__$1){
var statearr_32118_34348 = state_32052__$1;
(statearr_32118_34348[(1)] = (14));

} else {
var statearr_32120_34349 = state_32052__$1;
(statearr_32120_34349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (9))){
var inst_32038 = (state_32052[(2)]);
var inst_32039 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32052__$1 = (function (){var statearr_32123 = state_32052;
(statearr_32123[(15)] = inst_32038);

return statearr_32123;
})();
if(cljs.core.truth_(inst_32039)){
var statearr_32126_34354 = state_32052__$1;
(statearr_32126_34354[(1)] = (21));

} else {
var statearr_32129_34355 = state_32052__$1;
(statearr_32129_34355[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (5))){
var inst_31980 = cljs.core.async.close_BANG_(out);
var state_32052__$1 = state_32052;
var statearr_32130_34356 = state_32052__$1;
(statearr_32130_34356[(2)] = inst_31980);

(statearr_32130_34356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (14))){
var inst_32014 = (state_32052[(7)]);
var inst_32016 = cljs.core.chunked_seq_QMARK_(inst_32014);
var state_32052__$1 = state_32052;
if(inst_32016){
var statearr_32131_34357 = state_32052__$1;
(statearr_32131_34357[(1)] = (17));

} else {
var statearr_32132_34358 = state_32052__$1;
(statearr_32132_34358[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (16))){
var inst_32034 = (state_32052[(2)]);
var state_32052__$1 = state_32052;
var statearr_32133_34359 = state_32052__$1;
(statearr_32133_34359[(2)] = inst_32034);

(statearr_32133_34359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32056 === (10))){
var inst_31991 = (state_32052[(10)]);
var inst_31989 = (state_32052[(12)]);
var inst_31996 = cljs.core._nth(inst_31989,inst_31991);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32052__$1,(13),out,inst_31996);
} else {
if((state_val_32056 === (18))){
var inst_32014 = (state_32052[(7)]);
var inst_32025 = cljs.core.first(inst_32014);
var state_32052__$1 = state_32052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32052__$1,(20),out,inst_32025);
} else {
if((state_val_32056 === (8))){
var inst_31991 = (state_32052[(10)]);
var inst_31990 = (state_32052[(11)]);
var inst_31993 = (inst_31991 < inst_31990);
var inst_31994 = inst_31993;
var state_32052__$1 = state_32052;
if(cljs.core.truth_(inst_31994)){
var statearr_32134_34361 = state_32052__$1;
(statearr_32134_34361[(1)] = (10));

} else {
var statearr_32135_34362 = state_32052__$1;
(statearr_32135_34362[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17599__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17599__auto____0 = (function (){
var statearr_32138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32138[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17599__auto__);

(statearr_32138[(1)] = (1));

return statearr_32138;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17599__auto____1 = (function (state_32052){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_32052);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e32139){var ex__17602__auto__ = e32139;
var statearr_32140_34366 = state_32052;
(statearr_32140_34366[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_32052[(4)]))){
var statearr_32141_34367 = state_32052;
(statearr_32141_34367[(1)] = cljs.core.first((state_32052[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34369 = state_32052;
state_32052 = G__34369;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17599__auto__ = function(state_32052){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17599__auto____1.call(this,state_32052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17599__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17599__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_32142 = f__17716__auto__();
(statearr_32142[(6)] = c__17715__auto__);

return statearr_32142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));

return c__17715__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32151 = arguments.length;
switch (G__32151) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32163 = arguments.length;
switch (G__32163) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32166 = arguments.length;
switch (G__32166) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17715__auto___34383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_32192){
var state_val_32193 = (state_32192[(1)]);
if((state_val_32193 === (7))){
var inst_32187 = (state_32192[(2)]);
var state_32192__$1 = state_32192;
var statearr_32194_34384 = state_32192__$1;
(statearr_32194_34384[(2)] = inst_32187);

(statearr_32194_34384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (1))){
var inst_32169 = null;
var state_32192__$1 = (function (){var statearr_32199 = state_32192;
(statearr_32199[(7)] = inst_32169);

return statearr_32199;
})();
var statearr_32200_34385 = state_32192__$1;
(statearr_32200_34385[(2)] = null);

(statearr_32200_34385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (4))){
var inst_32172 = (state_32192[(8)]);
var inst_32172__$1 = (state_32192[(2)]);
var inst_32173 = (inst_32172__$1 == null);
var inst_32174 = cljs.core.not(inst_32173);
var state_32192__$1 = (function (){var statearr_32204 = state_32192;
(statearr_32204[(8)] = inst_32172__$1);

return statearr_32204;
})();
if(inst_32174){
var statearr_32209_34386 = state_32192__$1;
(statearr_32209_34386[(1)] = (5));

} else {
var statearr_32213_34387 = state_32192__$1;
(statearr_32213_34387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (6))){
var state_32192__$1 = state_32192;
var statearr_32214_34388 = state_32192__$1;
(statearr_32214_34388[(2)] = null);

(statearr_32214_34388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (3))){
var inst_32189 = (state_32192[(2)]);
var inst_32190 = cljs.core.async.close_BANG_(out);
var state_32192__$1 = (function (){var statearr_32215 = state_32192;
(statearr_32215[(9)] = inst_32189);

return statearr_32215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32192__$1,inst_32190);
} else {
if((state_val_32193 === (2))){
var state_32192__$1 = state_32192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32192__$1,(4),ch);
} else {
if((state_val_32193 === (11))){
var inst_32172 = (state_32192[(8)]);
var inst_32181 = (state_32192[(2)]);
var inst_32169 = inst_32172;
var state_32192__$1 = (function (){var statearr_32216 = state_32192;
(statearr_32216[(10)] = inst_32181);

(statearr_32216[(7)] = inst_32169);

return statearr_32216;
})();
var statearr_32217_34395 = state_32192__$1;
(statearr_32217_34395[(2)] = null);

(statearr_32217_34395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (9))){
var inst_32172 = (state_32192[(8)]);
var state_32192__$1 = state_32192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32192__$1,(11),out,inst_32172);
} else {
if((state_val_32193 === (5))){
var inst_32169 = (state_32192[(7)]);
var inst_32172 = (state_32192[(8)]);
var inst_32176 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32172,inst_32169);
var state_32192__$1 = state_32192;
if(inst_32176){
var statearr_32219_34400 = state_32192__$1;
(statearr_32219_34400[(1)] = (8));

} else {
var statearr_32220_34401 = state_32192__$1;
(statearr_32220_34401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (10))){
var inst_32184 = (state_32192[(2)]);
var state_32192__$1 = state_32192;
var statearr_32222_34404 = state_32192__$1;
(statearr_32222_34404[(2)] = inst_32184);

(statearr_32222_34404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32193 === (8))){
var inst_32169 = (state_32192[(7)]);
var tmp32218 = inst_32169;
var inst_32169__$1 = tmp32218;
var state_32192__$1 = (function (){var statearr_32226 = state_32192;
(statearr_32226[(7)] = inst_32169__$1);

return statearr_32226;
})();
var statearr_32227_34405 = state_32192__$1;
(statearr_32227_34405[(2)] = null);

(statearr_32227_34405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_32228 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32228[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_32228[(1)] = (1));

return statearr_32228;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_32192){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_32192);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e32229){var ex__17602__auto__ = e32229;
var statearr_32230_34409 = state_32192;
(statearr_32230_34409[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_32192[(4)]))){
var statearr_32233_34410 = state_32192;
(statearr_32233_34410[(1)] = cljs.core.first((state_32192[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34412 = state_32192;
state_32192 = G__34412;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_32192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_32192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_32238 = f__17716__auto__();
(statearr_32238[(6)] = c__17715__auto___34383);

return statearr_32238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32244 = arguments.length;
switch (G__32244) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17715__auto___34431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_32292){
var state_val_32293 = (state_32292[(1)]);
if((state_val_32293 === (7))){
var inst_32288 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32301_34432 = state_32292__$1;
(statearr_32301_34432[(2)] = inst_32288);

(statearr_32301_34432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (1))){
var inst_32245 = (new Array(n));
var inst_32248 = inst_32245;
var inst_32249 = (0);
var state_32292__$1 = (function (){var statearr_32312 = state_32292;
(statearr_32312[(7)] = inst_32248);

(statearr_32312[(8)] = inst_32249);

return statearr_32312;
})();
var statearr_32313_34441 = state_32292__$1;
(statearr_32313_34441[(2)] = null);

(statearr_32313_34441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (4))){
var inst_32254 = (state_32292[(9)]);
var inst_32254__$1 = (state_32292[(2)]);
var inst_32255 = (inst_32254__$1 == null);
var inst_32256 = cljs.core.not(inst_32255);
var state_32292__$1 = (function (){var statearr_32318 = state_32292;
(statearr_32318[(9)] = inst_32254__$1);

return statearr_32318;
})();
if(inst_32256){
var statearr_32326_34450 = state_32292__$1;
(statearr_32326_34450[(1)] = (5));

} else {
var statearr_32327_34452 = state_32292__$1;
(statearr_32327_34452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (15))){
var inst_32282 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32339_34462 = state_32292__$1;
(statearr_32339_34462[(2)] = inst_32282);

(statearr_32339_34462[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (13))){
var state_32292__$1 = state_32292;
var statearr_32349_34467 = state_32292__$1;
(statearr_32349_34467[(2)] = null);

(statearr_32349_34467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (6))){
var inst_32249 = (state_32292[(8)]);
var inst_32278 = (inst_32249 > (0));
var state_32292__$1 = state_32292;
if(cljs.core.truth_(inst_32278)){
var statearr_32367_34473 = state_32292__$1;
(statearr_32367_34473[(1)] = (12));

} else {
var statearr_32369_34474 = state_32292__$1;
(statearr_32369_34474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (3))){
var inst_32290 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32292__$1,inst_32290);
} else {
if((state_val_32293 === (12))){
var inst_32248 = (state_32292[(7)]);
var inst_32280 = cljs.core.vec(inst_32248);
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32292__$1,(15),out,inst_32280);
} else {
if((state_val_32293 === (2))){
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32292__$1,(4),ch);
} else {
if((state_val_32293 === (11))){
var inst_32272 = (state_32292[(2)]);
var inst_32273 = (new Array(n));
var inst_32248 = inst_32273;
var inst_32249 = (0);
var state_32292__$1 = (function (){var statearr_32386 = state_32292;
(statearr_32386[(7)] = inst_32248);

(statearr_32386[(8)] = inst_32249);

(statearr_32386[(10)] = inst_32272);

return statearr_32386;
})();
var statearr_32387_34483 = state_32292__$1;
(statearr_32387_34483[(2)] = null);

(statearr_32387_34483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (9))){
var inst_32248 = (state_32292[(7)]);
var inst_32270 = cljs.core.vec(inst_32248);
var state_32292__$1 = state_32292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32292__$1,(11),out,inst_32270);
} else {
if((state_val_32293 === (5))){
var inst_32248 = (state_32292[(7)]);
var inst_32249 = (state_32292[(8)]);
var inst_32259 = (state_32292[(11)]);
var inst_32254 = (state_32292[(9)]);
var inst_32258 = (inst_32248[inst_32249] = inst_32254);
var inst_32259__$1 = (inst_32249 + (1));
var inst_32263 = (inst_32259__$1 < n);
var state_32292__$1 = (function (){var statearr_32393 = state_32292;
(statearr_32393[(12)] = inst_32258);

(statearr_32393[(11)] = inst_32259__$1);

return statearr_32393;
})();
if(cljs.core.truth_(inst_32263)){
var statearr_32395_34493 = state_32292__$1;
(statearr_32395_34493[(1)] = (8));

} else {
var statearr_32396_34499 = state_32292__$1;
(statearr_32396_34499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (14))){
var inst_32285 = (state_32292[(2)]);
var inst_32286 = cljs.core.async.close_BANG_(out);
var state_32292__$1 = (function (){var statearr_32413 = state_32292;
(statearr_32413[(13)] = inst_32285);

return statearr_32413;
})();
var statearr_32416_34505 = state_32292__$1;
(statearr_32416_34505[(2)] = inst_32286);

(statearr_32416_34505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (10))){
var inst_32276 = (state_32292[(2)]);
var state_32292__$1 = state_32292;
var statearr_32419_34526 = state_32292__$1;
(statearr_32419_34526[(2)] = inst_32276);

(statearr_32419_34526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32293 === (8))){
var inst_32248 = (state_32292[(7)]);
var inst_32259 = (state_32292[(11)]);
var tmp32399 = inst_32248;
var inst_32248__$1 = tmp32399;
var inst_32249 = inst_32259;
var state_32292__$1 = (function (){var statearr_32424 = state_32292;
(statearr_32424[(7)] = inst_32248__$1);

(statearr_32424[(8)] = inst_32249);

return statearr_32424;
})();
var statearr_32428_34530 = state_32292__$1;
(statearr_32428_34530[(2)] = null);

(statearr_32428_34530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_32440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32440[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_32440[(1)] = (1));

return statearr_32440;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_32292){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_32292);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e32445){var ex__17602__auto__ = e32445;
var statearr_32447_34535 = state_32292;
(statearr_32447_34535[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_32292[(4)]))){
var statearr_32448_34537 = state_32292;
(statearr_32448_34537[(1)] = cljs.core.first((state_32292[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34539 = state_32292;
state_32292 = G__34539;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_32292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_32292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_32468 = f__17716__auto__();
(statearr_32468[(6)] = c__17715__auto___34431);

return statearr_32468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32507 = arguments.length;
switch (G__32507) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17715__auto___34577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17716__auto__ = (function (){var switch__17598__auto__ = (function (state_32828){
var state_val_32829 = (state_32828[(1)]);
if((state_val_32829 === (7))){
var inst_32821 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
var statearr_32833_34592 = state_32828__$1;
(statearr_32833_34592[(2)] = inst_32821);

(statearr_32833_34592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (1))){
var inst_32552 = [];
var inst_32558 = inst_32552;
var inst_32559 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32828__$1 = (function (){var statearr_32834 = state_32828;
(statearr_32834[(7)] = inst_32559);

(statearr_32834[(8)] = inst_32558);

return statearr_32834;
})();
var statearr_32835_34610 = state_32828__$1;
(statearr_32835_34610[(2)] = null);

(statearr_32835_34610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (4))){
var inst_32562 = (state_32828[(9)]);
var inst_32562__$1 = (state_32828[(2)]);
var inst_32563 = (inst_32562__$1 == null);
var inst_32565 = cljs.core.not(inst_32563);
var state_32828__$1 = (function (){var statearr_32847 = state_32828;
(statearr_32847[(9)] = inst_32562__$1);

return statearr_32847;
})();
if(inst_32565){
var statearr_32848_34631 = state_32828__$1;
(statearr_32848_34631[(1)] = (5));

} else {
var statearr_32849_34633 = state_32828__$1;
(statearr_32849_34633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (15))){
var inst_32558 = (state_32828[(8)]);
var inst_32813 = cljs.core.vec(inst_32558);
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32828__$1,(18),out,inst_32813);
} else {
if((state_val_32829 === (13))){
var inst_32805 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
var statearr_32860_34653 = state_32828__$1;
(statearr_32860_34653[(2)] = inst_32805);

(statearr_32860_34653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (6))){
var inst_32558 = (state_32828[(8)]);
var inst_32808 = inst_32558.length;
var inst_32809 = (inst_32808 > (0));
var state_32828__$1 = state_32828;
if(cljs.core.truth_(inst_32809)){
var statearr_32863_34660 = state_32828__$1;
(statearr_32863_34660[(1)] = (15));

} else {
var statearr_32864_34665 = state_32828__$1;
(statearr_32864_34665[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (17))){
var inst_32818 = (state_32828[(2)]);
var inst_32819 = cljs.core.async.close_BANG_(out);
var state_32828__$1 = (function (){var statearr_32869 = state_32828;
(statearr_32869[(10)] = inst_32818);

return statearr_32869;
})();
var statearr_32871_34673 = state_32828__$1;
(statearr_32871_34673[(2)] = inst_32819);

(statearr_32871_34673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (3))){
var inst_32823 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32828__$1,inst_32823);
} else {
if((state_val_32829 === (12))){
var inst_32558 = (state_32828[(8)]);
var inst_32798 = cljs.core.vec(inst_32558);
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32828__$1,(14),out,inst_32798);
} else {
if((state_val_32829 === (2))){
var state_32828__$1 = state_32828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32828__$1,(4),ch);
} else {
if((state_val_32829 === (11))){
var inst_32562 = (state_32828[(9)]);
var inst_32558 = (state_32828[(8)]);
var inst_32570 = (state_32828[(11)]);
var inst_32795 = inst_32558.push(inst_32562);
var tmp32876 = inst_32558;
var inst_32558__$1 = tmp32876;
var inst_32559 = inst_32570;
var state_32828__$1 = (function (){var statearr_32878 = state_32828;
(statearr_32878[(7)] = inst_32559);

(statearr_32878[(12)] = inst_32795);

(statearr_32878[(8)] = inst_32558__$1);

return statearr_32878;
})();
var statearr_32879_34695 = state_32828__$1;
(statearr_32879_34695[(2)] = null);

(statearr_32879_34695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (9))){
var inst_32559 = (state_32828[(7)]);
var inst_32787 = cljs.core.keyword_identical_QMARK_(inst_32559,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32828__$1 = state_32828;
var statearr_32884_34696 = state_32828__$1;
(statearr_32884_34696[(2)] = inst_32787);

(statearr_32884_34696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (5))){
var inst_32562 = (state_32828[(9)]);
var inst_32559 = (state_32828[(7)]);
var inst_32784 = (state_32828[(13)]);
var inst_32570 = (state_32828[(11)]);
var inst_32570__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32562) : f.call(null, inst_32562));
var inst_32784__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32570__$1,inst_32559);
var state_32828__$1 = (function (){var statearr_32885 = state_32828;
(statearr_32885[(13)] = inst_32784__$1);

(statearr_32885[(11)] = inst_32570__$1);

return statearr_32885;
})();
if(inst_32784__$1){
var statearr_32888_34697 = state_32828__$1;
(statearr_32888_34697[(1)] = (8));

} else {
var statearr_32890_34698 = state_32828__$1;
(statearr_32890_34698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (14))){
var inst_32562 = (state_32828[(9)]);
var inst_32570 = (state_32828[(11)]);
var inst_32800 = (state_32828[(2)]);
var inst_32801 = [];
var inst_32802 = inst_32801.push(inst_32562);
var inst_32558 = inst_32801;
var inst_32559 = inst_32570;
var state_32828__$1 = (function (){var statearr_32897 = state_32828;
(statearr_32897[(14)] = inst_32802);

(statearr_32897[(7)] = inst_32559);

(statearr_32897[(15)] = inst_32800);

(statearr_32897[(8)] = inst_32558);

return statearr_32897;
})();
var statearr_32902_34711 = state_32828__$1;
(statearr_32902_34711[(2)] = null);

(statearr_32902_34711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (16))){
var state_32828__$1 = state_32828;
var statearr_32904_34716 = state_32828__$1;
(statearr_32904_34716[(2)] = null);

(statearr_32904_34716[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (10))){
var inst_32789 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
if(cljs.core.truth_(inst_32789)){
var statearr_32905_34717 = state_32828__$1;
(statearr_32905_34717[(1)] = (11));

} else {
var statearr_32906_34719 = state_32828__$1;
(statearr_32906_34719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (18))){
var inst_32815 = (state_32828[(2)]);
var state_32828__$1 = state_32828;
var statearr_32907_34721 = state_32828__$1;
(statearr_32907_34721[(2)] = inst_32815);

(statearr_32907_34721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32829 === (8))){
var inst_32784 = (state_32828[(13)]);
var state_32828__$1 = state_32828;
var statearr_32911_34724 = state_32828__$1;
(statearr_32911_34724[(2)] = inst_32784);

(statearr_32911_34724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17599__auto__ = null;
var cljs$core$async$state_machine__17599__auto____0 = (function (){
var statearr_32916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32916[(0)] = cljs$core$async$state_machine__17599__auto__);

(statearr_32916[(1)] = (1));

return statearr_32916;
});
var cljs$core$async$state_machine__17599__auto____1 = (function (state_32828){
while(true){
var ret_value__17600__auto__ = (function (){try{while(true){
var result__17601__auto__ = switch__17598__auto__(state_32828);
if(cljs.core.keyword_identical_QMARK_(result__17601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17601__auto__;
}
break;
}
}catch (e32917){var ex__17602__auto__ = e32917;
var statearr_32918_34732 = state_32828;
(statearr_32918_34732[(2)] = ex__17602__auto__);


if(cljs.core.seq((state_32828[(4)]))){
var statearr_32921_34734 = state_32828;
(statearr_32921_34734[(1)] = cljs.core.first((state_32828[(4)])));

} else {
throw ex__17602__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34736 = state_32828;
state_32828 = G__34736;
continue;
} else {
return ret_value__17600__auto__;
}
break;
}
});
cljs$core$async$state_machine__17599__auto__ = function(state_32828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17599__auto____1.call(this,state_32828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17599__auto____0;
cljs$core$async$state_machine__17599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17599__auto____1;
return cljs$core$async$state_machine__17599__auto__;
})()
})();
var state__17717__auto__ = (function (){var statearr_32928 = f__17716__auto__();
(statearr_32928[(6)] = c__17715__auto___34577);

return statearr_32928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17717__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
