// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args26675 = [];
var len__23119__auto___26681 = arguments.length;
var i__23120__auto___26682 = (0);
while(true){
if((i__23120__auto___26682 < len__23119__auto___26681)){
args26675.push((arguments[i__23120__auto___26682]));

var G__26683 = (i__23120__auto___26682 + (1));
i__23120__auto___26682 = G__26683;
continue;
} else {
}
break;
}

var G__26677 = args26675.length;
switch (G__26677) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26675.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26678 = (function (f,blockable,meta26679){
this.f = f;
this.blockable = blockable;
this.meta26679 = meta26679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26680,meta26679__$1){
var self__ = this;
var _26680__$1 = this;
return (new cljs.core.async.t_cljs$core$async26678(self__.f,self__.blockable,meta26679__$1));
});

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26680){
var self__ = this;
var _26680__$1 = this;
return self__.meta26679;
});

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26679","meta26679",1886072577,null)], null);
});

cljs.core.async.t_cljs$core$async26678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26678";

cljs.core.async.t_cljs$core$async26678.cljs$lang$ctorPrWriter = (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async26678");
});

cljs.core.async.__GT_t_cljs$core$async26678 = (function cljs$core$async$__GT_t_cljs$core$async26678(f__$1,blockable__$1,meta26679){
return (new cljs.core.async.t_cljs$core$async26678(f__$1,blockable__$1,meta26679));
});

}

return (new cljs.core.async.t_cljs$core$async26678(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args26687 = [];
var len__23119__auto___26690 = arguments.length;
var i__23120__auto___26691 = (0);
while(true){
if((i__23120__auto___26691 < len__23119__auto___26690)){
args26687.push((arguments[i__23120__auto___26691]));

var G__26692 = (i__23120__auto___26691 + (1));
i__23120__auto___26691 = G__26692;
continue;
} else {
}
break;
}

var G__26689 = args26687.length;
switch (G__26689) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26687.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args26694 = [];
var len__23119__auto___26697 = arguments.length;
var i__23120__auto___26698 = (0);
while(true){
if((i__23120__auto___26698 < len__23119__auto___26697)){
args26694.push((arguments[i__23120__auto___26698]));

var G__26699 = (i__23120__auto___26698 + (1));
i__23120__auto___26698 = G__26699;
continue;
} else {
}
break;
}

var G__26696 = args26694.length;
switch (G__26696) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26694.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var args26701 = [];
var len__23119__auto___26704 = arguments.length;
var i__23120__auto___26705 = (0);
while(true){
if((i__23120__auto___26705 < len__23119__auto___26704)){
args26701.push((arguments[i__23120__auto___26705]));

var G__26706 = (i__23120__auto___26705 + (1));
i__23120__auto___26705 = G__26706;
continue;
} else {
}
break;
}

var G__26703 = args26701.length;
switch (G__26703) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26701.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26708 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26708);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26708,ret){
return (function (){
return fn1.call(null,val_26708);
});})(val_26708,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26709 = [];
var len__23119__auto___26712 = arguments.length;
var i__23120__auto___26713 = (0);
while(true){
if((i__23120__auto___26713 < len__23119__auto___26712)){
args26709.push((arguments[i__23120__auto___26713]));

var G__26714 = (i__23120__auto___26713 + (1));
i__23120__auto___26713 = G__26714;
continue;
} else {
}
break;
}

var G__26711 = args26709.length;
switch (G__26711) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26709.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22959__auto___26716 = n;
var x_26717 = (0);
while(true){
if((x_26717 < n__22959__auto___26716)){
(a[x_26717] = (0));

var G__26718 = (x_26717 + (1));
x_26717 = G__26718;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26719 = (i + (1));
i = G__26719;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26723 = (function (alt_flag,flag,meta26724){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26724 = meta26724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26725,meta26724__$1){
var self__ = this;
var _26725__$1 = this;
return (new cljs.core.async.t_cljs$core$async26723(self__.alt_flag,self__.flag,meta26724__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26725){
var self__ = this;
var _26725__$1 = this;
return self__.meta26724;
});})(flag))
;

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26723.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26723.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26724","meta26724",312268020,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26723";

cljs.core.async.t_cljs$core$async26723.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async26723");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26723 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26723(alt_flag__$1,flag__$1,meta26724){
return (new cljs.core.async.t_cljs$core$async26723(alt_flag__$1,flag__$1,meta26724));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26723(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26729 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26729 = (function (alt_handler,flag,cb,meta26730){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26730 = meta26730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26731,meta26730__$1){
var self__ = this;
var _26731__$1 = this;
return (new cljs.core.async.t_cljs$core$async26729(self__.alt_handler,self__.flag,self__.cb,meta26730__$1));
});

cljs.core.async.t_cljs$core$async26729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26731){
var self__ = this;
var _26731__$1 = this;
return self__.meta26730;
});

cljs.core.async.t_cljs$core$async26729.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26730","meta26730",-1139773603,null)], null);
});

cljs.core.async.t_cljs$core$async26729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26729";

cljs.core.async.t_cljs$core$async26729.cljs$lang$ctorPrWriter = (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async26729");
});

cljs.core.async.__GT_t_cljs$core$async26729 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26729(alt_handler__$1,flag__$1,cb__$1,meta26730){
return (new cljs.core.async.t_cljs$core$async26729(alt_handler__$1,flag__$1,cb__$1,meta26730));
});

}

return (new cljs.core.async.t_cljs$core$async26729(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26732_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26732_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26733_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26733_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22044__auto__ = wport;
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26734 = (i + (1));
i = G__26734;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22044__auto__ = ret;
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__22032__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22032__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22032__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__23126__auto__ = [];
var len__23119__auto___26740 = arguments.length;
var i__23120__auto___26741 = (0);
while(true){
if((i__23120__auto___26741 < len__23119__auto___26740)){
args__23126__auto__.push((arguments[i__23120__auto___26741]));

var G__26742 = (i__23120__auto___26741 + (1));
i__23120__auto___26741 = G__26742;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((1) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23127__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26737){
var map__26738 = p__26737;
var map__26738__$1 = ((((!((map__26738 == null)))?((((map__26738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26738):map__26738);
var opts = map__26738__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26735){
var G__26736 = cljs.core.first.call(null,seq26735);
var seq26735__$1 = cljs.core.next.call(null,seq26735);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26736,seq26735__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var args26743 = [];
var len__23119__auto___26793 = arguments.length;
var i__23120__auto___26794 = (0);
while(true){
if((i__23120__auto___26794 < len__23119__auto___26793)){
args26743.push((arguments[i__23120__auto___26794]));

var G__26795 = (i__23120__auto___26794 + (1));
i__23120__auto___26794 = G__26795;
continue;
} else {
}
break;
}

var G__26745 = args26743.length;
switch (G__26745) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26743.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26630__auto___26797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___26797){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___26797){
return (function (state_26769){
var state_val_26770 = (state_26769[(1)]);
if((state_val_26770 === (7))){
var inst_26765 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26771_26798 = state_26769__$1;
(statearr_26771_26798[(2)] = inst_26765);

(statearr_26771_26798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (1))){
var state_26769__$1 = state_26769;
var statearr_26772_26799 = state_26769__$1;
(statearr_26772_26799[(2)] = null);

(statearr_26772_26799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (4))){
var inst_26748 = (state_26769[(7)]);
var inst_26748__$1 = (state_26769[(2)]);
var inst_26749 = (inst_26748__$1 == null);
var state_26769__$1 = (function (){var statearr_26773 = state_26769;
(statearr_26773[(7)] = inst_26748__$1);

return statearr_26773;
})();
if(cljs.core.truth_(inst_26749)){
var statearr_26774_26800 = state_26769__$1;
(statearr_26774_26800[(1)] = (5));

} else {
var statearr_26775_26801 = state_26769__$1;
(statearr_26775_26801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (13))){
var state_26769__$1 = state_26769;
var statearr_26776_26802 = state_26769__$1;
(statearr_26776_26802[(2)] = null);

(statearr_26776_26802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (6))){
var inst_26748 = (state_26769[(7)]);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26769__$1,(11),to,inst_26748);
} else {
if((state_val_26770 === (3))){
var inst_26767 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26769__$1,inst_26767);
} else {
if((state_val_26770 === (12))){
var state_26769__$1 = state_26769;
var statearr_26777_26803 = state_26769__$1;
(statearr_26777_26803[(2)] = null);

(statearr_26777_26803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (2))){
var state_26769__$1 = state_26769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26769__$1,(4),from);
} else {
if((state_val_26770 === (11))){
var inst_26758 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
if(cljs.core.truth_(inst_26758)){
var statearr_26778_26804 = state_26769__$1;
(statearr_26778_26804[(1)] = (12));

} else {
var statearr_26779_26805 = state_26769__$1;
(statearr_26779_26805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (9))){
var state_26769__$1 = state_26769;
var statearr_26780_26806 = state_26769__$1;
(statearr_26780_26806[(2)] = null);

(statearr_26780_26806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (5))){
var state_26769__$1 = state_26769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26781_26807 = state_26769__$1;
(statearr_26781_26807[(1)] = (8));

} else {
var statearr_26782_26808 = state_26769__$1;
(statearr_26782_26808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (14))){
var inst_26763 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26783_26809 = state_26769__$1;
(statearr_26783_26809[(2)] = inst_26763);

(statearr_26783_26809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (10))){
var inst_26755 = (state_26769[(2)]);
var state_26769__$1 = state_26769;
var statearr_26784_26810 = state_26769__$1;
(statearr_26784_26810[(2)] = inst_26755);

(statearr_26784_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26770 === (8))){
var inst_26752 = cljs.core.async.close_BANG_.call(null,to);
var state_26769__$1 = state_26769;
var statearr_26785_26811 = state_26769__$1;
(statearr_26785_26811[(2)] = inst_26752);

(statearr_26785_26811[(1)] = (10));


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
});})(c__26630__auto___26797))
;
return ((function (switch__26518__auto__,c__26630__auto___26797){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_26789 = [null,null,null,null,null,null,null,null];
(statearr_26789[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_26789[(1)] = (1));

return statearr_26789;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_26769){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_26769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e26790){if((e26790 instanceof Object)){
var ex__26522__auto__ = e26790;
var statearr_26791_26812 = state_26769;
(statearr_26791_26812[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26813 = state_26769;
state_26769 = G__26813;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_26769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_26769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___26797))
})();
var state__26632__auto__ = (function (){var statearr_26792 = f__26631__auto__.call(null);
(statearr_26792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___26797);

return statearr_26792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___26797))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27001){
var vec__27002 = p__27001;
var v = cljs.core.nth.call(null,vec__27002,(0),null);
var p = cljs.core.nth.call(null,vec__27002,(1),null);
var job = vec__27002;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26630__auto___27188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___27188,res,vec__27002,v,p,job,jobs,results){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___27188,res,vec__27002,v,p,job,jobs,results){
return (function (state_27009){
var state_val_27010 = (state_27009[(1)]);
if((state_val_27010 === (1))){
var state_27009__$1 = state_27009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27009__$1,(2),res,v);
} else {
if((state_val_27010 === (2))){
var inst_27006 = (state_27009[(2)]);
var inst_27007 = cljs.core.async.close_BANG_.call(null,res);
var state_27009__$1 = (function (){var statearr_27011 = state_27009;
(statearr_27011[(7)] = inst_27006);

return statearr_27011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27009__$1,inst_27007);
} else {
return null;
}
}
});})(c__26630__auto___27188,res,vec__27002,v,p,job,jobs,results))
;
return ((function (switch__26518__auto__,c__26630__auto___27188,res,vec__27002,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0 = (function (){
var statearr_27015 = [null,null,null,null,null,null,null,null];
(statearr_27015[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__);

(statearr_27015[(1)] = (1));

return statearr_27015;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1 = (function (state_27009){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27016){if((e27016 instanceof Object)){
var ex__26522__auto__ = e27016;
var statearr_27017_27189 = state_27009;
(statearr_27017_27189[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27190 = state_27009;
state_27009 = G__27190;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = function(state_27009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1.call(this,state_27009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___27188,res,vec__27002,v,p,job,jobs,results))
})();
var state__26632__auto__ = (function (){var statearr_27018 = f__26631__auto__.call(null);
(statearr_27018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___27188);

return statearr_27018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___27188,res,vec__27002,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27019){
var vec__27020 = p__27019;
var v = cljs.core.nth.call(null,vec__27020,(0),null);
var p = cljs.core.nth.call(null,vec__27020,(1),null);
var job = vec__27020;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22959__auto___27191 = n;
var __27192 = (0);
while(true){
if((__27192 < n__22959__auto___27191)){
var G__27023_27193 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27023_27193) {
case "compute":
var c__26630__auto___27195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27192,c__26630__auto___27195,G__27023_27193,n__22959__auto___27191,jobs,results,process,async){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (__27192,c__26630__auto___27195,G__27023_27193,n__22959__auto___27191,jobs,results,process,async){
return (function (state_27036){
var state_val_27037 = (state_27036[(1)]);
if((state_val_27037 === (1))){
var state_27036__$1 = state_27036;
var statearr_27038_27196 = state_27036__$1;
(statearr_27038_27196[(2)] = null);

(statearr_27038_27196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27037 === (2))){
var state_27036__$1 = state_27036;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27036__$1,(4),jobs);
} else {
if((state_val_27037 === (3))){
var inst_27034 = (state_27036[(2)]);
var state_27036__$1 = state_27036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27036__$1,inst_27034);
} else {
if((state_val_27037 === (4))){
var inst_27026 = (state_27036[(2)]);
var inst_27027 = process.call(null,inst_27026);
var state_27036__$1 = state_27036;
if(cljs.core.truth_(inst_27027)){
var statearr_27039_27197 = state_27036__$1;
(statearr_27039_27197[(1)] = (5));

} else {
var statearr_27040_27198 = state_27036__$1;
(statearr_27040_27198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27037 === (5))){
var state_27036__$1 = state_27036;
var statearr_27041_27199 = state_27036__$1;
(statearr_27041_27199[(2)] = null);

(statearr_27041_27199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27037 === (6))){
var state_27036__$1 = state_27036;
var statearr_27042_27200 = state_27036__$1;
(statearr_27042_27200[(2)] = null);

(statearr_27042_27200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27037 === (7))){
var inst_27032 = (state_27036[(2)]);
var state_27036__$1 = state_27036;
var statearr_27043_27201 = state_27036__$1;
(statearr_27043_27201[(2)] = inst_27032);

(statearr_27043_27201[(1)] = (3));


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
});})(__27192,c__26630__auto___27195,G__27023_27193,n__22959__auto___27191,jobs,results,process,async))
;
return ((function (__27192,switch__26518__auto__,c__26630__auto___27195,G__27023_27193,n__22959__auto___27191,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0 = (function (){
var statearr_27047 = [null,null,null,null,null,null,null];
(statearr_27047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__);

(statearr_27047[(1)] = (1));

return statearr_27047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1 = (function (state_27036){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27048){if((e27048 instanceof Object)){
var ex__26522__auto__ = e27048;
var statearr_27049_27202 = state_27036;
(statearr_27049_27202[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27203 = state_27036;
state_27036 = G__27203;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = function(state_27036){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1.call(this,state_27036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__;
})()
;})(__27192,switch__26518__auto__,c__26630__auto___27195,G__27023_27193,n__22959__auto___27191,jobs,results,process,async))
})();
var state__26632__auto__ = (function (){var statearr_27050 = f__26631__auto__.call(null);
(statearr_27050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___27195);

return statearr_27050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(__27192,c__26630__auto___27195,G__27023_27193,n__22959__auto___27191,jobs,results,process,async))
);


break;
case "async":
var c__26630__auto___27204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27192,c__26630__auto___27204,G__27023_27193,n__22959__auto___27191,jobs,results,process,async){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (__27192,c__26630__auto___27204,G__27023_27193,n__22959__auto___27191,jobs,results,process,async){
return (function (state_27063){
var state_val_27064 = (state_27063[(1)]);
if((state_val_27064 === (1))){
var state_27063__$1 = state_27063;
var statearr_27065_27205 = state_27063__$1;
(statearr_27065_27205[(2)] = null);

(statearr_27065_27205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (2))){
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27063__$1,(4),jobs);
} else {
if((state_val_27064 === (3))){
var inst_27061 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27063__$1,inst_27061);
} else {
if((state_val_27064 === (4))){
var inst_27053 = (state_27063[(2)]);
var inst_27054 = async.call(null,inst_27053);
var state_27063__$1 = state_27063;
if(cljs.core.truth_(inst_27054)){
var statearr_27066_27206 = state_27063__$1;
(statearr_27066_27206[(1)] = (5));

} else {
var statearr_27067_27207 = state_27063__$1;
(statearr_27067_27207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (5))){
var state_27063__$1 = state_27063;
var statearr_27068_27208 = state_27063__$1;
(statearr_27068_27208[(2)] = null);

(statearr_27068_27208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (6))){
var state_27063__$1 = state_27063;
var statearr_27069_27209 = state_27063__$1;
(statearr_27069_27209[(2)] = null);

(statearr_27069_27209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27064 === (7))){
var inst_27059 = (state_27063[(2)]);
var state_27063__$1 = state_27063;
var statearr_27070_27210 = state_27063__$1;
(statearr_27070_27210[(2)] = inst_27059);

(statearr_27070_27210[(1)] = (3));


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
});})(__27192,c__26630__auto___27204,G__27023_27193,n__22959__auto___27191,jobs,results,process,async))
;
return ((function (__27192,switch__26518__auto__,c__26630__auto___27204,G__27023_27193,n__22959__auto___27191,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0 = (function (){
var statearr_27074 = [null,null,null,null,null,null,null];
(statearr_27074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__);

(statearr_27074[(1)] = (1));

return statearr_27074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1 = (function (state_27063){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27075){if((e27075 instanceof Object)){
var ex__26522__auto__ = e27075;
var statearr_27076_27211 = state_27063;
(statearr_27076_27211[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27212 = state_27063;
state_27063 = G__27212;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = function(state_27063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1.call(this,state_27063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__;
})()
;})(__27192,switch__26518__auto__,c__26630__auto___27204,G__27023_27193,n__22959__auto___27191,jobs,results,process,async))
})();
var state__26632__auto__ = (function (){var statearr_27077 = f__26631__auto__.call(null);
(statearr_27077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___27204);

return statearr_27077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(__27192,c__26630__auto___27204,G__27023_27193,n__22959__auto___27191,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27213 = (__27192 + (1));
__27192 = G__27213;
continue;
} else {
}
break;
}

var c__26630__auto___27214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___27214,jobs,results,process,async){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___27214,jobs,results,process,async){
return (function (state_27099){
var state_val_27100 = (state_27099[(1)]);
if((state_val_27100 === (1))){
var state_27099__$1 = state_27099;
var statearr_27101_27215 = state_27099__$1;
(statearr_27101_27215[(2)] = null);

(statearr_27101_27215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27100 === (2))){
var state_27099__$1 = state_27099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27099__$1,(4),from);
} else {
if((state_val_27100 === (3))){
var inst_27097 = (state_27099[(2)]);
var state_27099__$1 = state_27099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27099__$1,inst_27097);
} else {
if((state_val_27100 === (4))){
var inst_27080 = (state_27099[(7)]);
var inst_27080__$1 = (state_27099[(2)]);
var inst_27081 = (inst_27080__$1 == null);
var state_27099__$1 = (function (){var statearr_27102 = state_27099;
(statearr_27102[(7)] = inst_27080__$1);

return statearr_27102;
})();
if(cljs.core.truth_(inst_27081)){
var statearr_27103_27216 = state_27099__$1;
(statearr_27103_27216[(1)] = (5));

} else {
var statearr_27104_27217 = state_27099__$1;
(statearr_27104_27217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27100 === (5))){
var inst_27083 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27099__$1 = state_27099;
var statearr_27105_27218 = state_27099__$1;
(statearr_27105_27218[(2)] = inst_27083);

(statearr_27105_27218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27100 === (6))){
var inst_27080 = (state_27099[(7)]);
var inst_27085 = (state_27099[(8)]);
var inst_27085__$1 = cljs.core.async.chan.call(null,(1));
var inst_27086 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27087 = [inst_27080,inst_27085__$1];
var inst_27088 = (new cljs.core.PersistentVector(null,2,(5),inst_27086,inst_27087,null));
var state_27099__$1 = (function (){var statearr_27106 = state_27099;
(statearr_27106[(8)] = inst_27085__$1);

return statearr_27106;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27099__$1,(8),jobs,inst_27088);
} else {
if((state_val_27100 === (7))){
var inst_27095 = (state_27099[(2)]);
var state_27099__$1 = state_27099;
var statearr_27107_27219 = state_27099__$1;
(statearr_27107_27219[(2)] = inst_27095);

(statearr_27107_27219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27100 === (8))){
var inst_27085 = (state_27099[(8)]);
var inst_27090 = (state_27099[(2)]);
var state_27099__$1 = (function (){var statearr_27108 = state_27099;
(statearr_27108[(9)] = inst_27090);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27099__$1,(9),results,inst_27085);
} else {
if((state_val_27100 === (9))){
var inst_27092 = (state_27099[(2)]);
var state_27099__$1 = (function (){var statearr_27109 = state_27099;
(statearr_27109[(10)] = inst_27092);

return statearr_27109;
})();
var statearr_27110_27220 = state_27099__$1;
(statearr_27110_27220[(2)] = null);

(statearr_27110_27220[(1)] = (2));


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
});})(c__26630__auto___27214,jobs,results,process,async))
;
return ((function (switch__26518__auto__,c__26630__auto___27214,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0 = (function (){
var statearr_27114 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__);

(statearr_27114[(1)] = (1));

return statearr_27114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1 = (function (state_27099){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27115){if((e27115 instanceof Object)){
var ex__26522__auto__ = e27115;
var statearr_27116_27221 = state_27099;
(statearr_27116_27221[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27222 = state_27099;
state_27099 = G__27222;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = function(state_27099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1.call(this,state_27099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___27214,jobs,results,process,async))
})();
var state__26632__auto__ = (function (){var statearr_27117 = f__26631__auto__.call(null);
(statearr_27117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___27214);

return statearr_27117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___27214,jobs,results,process,async))
);


var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__,jobs,results,process,async){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__,jobs,results,process,async){
return (function (state_27155){
var state_val_27156 = (state_27155[(1)]);
if((state_val_27156 === (7))){
var inst_27151 = (state_27155[(2)]);
var state_27155__$1 = state_27155;
var statearr_27157_27223 = state_27155__$1;
(statearr_27157_27223[(2)] = inst_27151);

(statearr_27157_27223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (20))){
var state_27155__$1 = state_27155;
var statearr_27158_27224 = state_27155__$1;
(statearr_27158_27224[(2)] = null);

(statearr_27158_27224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (1))){
var state_27155__$1 = state_27155;
var statearr_27159_27225 = state_27155__$1;
(statearr_27159_27225[(2)] = null);

(statearr_27159_27225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (4))){
var inst_27120 = (state_27155[(7)]);
var inst_27120__$1 = (state_27155[(2)]);
var inst_27121 = (inst_27120__$1 == null);
var state_27155__$1 = (function (){var statearr_27160 = state_27155;
(statearr_27160[(7)] = inst_27120__$1);

return statearr_27160;
})();
if(cljs.core.truth_(inst_27121)){
var statearr_27161_27226 = state_27155__$1;
(statearr_27161_27226[(1)] = (5));

} else {
var statearr_27162_27227 = state_27155__$1;
(statearr_27162_27227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (15))){
var inst_27133 = (state_27155[(8)]);
var state_27155__$1 = state_27155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27155__$1,(18),to,inst_27133);
} else {
if((state_val_27156 === (21))){
var inst_27146 = (state_27155[(2)]);
var state_27155__$1 = state_27155;
var statearr_27163_27228 = state_27155__$1;
(statearr_27163_27228[(2)] = inst_27146);

(statearr_27163_27228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (13))){
var inst_27148 = (state_27155[(2)]);
var state_27155__$1 = (function (){var statearr_27164 = state_27155;
(statearr_27164[(9)] = inst_27148);

return statearr_27164;
})();
var statearr_27165_27229 = state_27155__$1;
(statearr_27165_27229[(2)] = null);

(statearr_27165_27229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (6))){
var inst_27120 = (state_27155[(7)]);
var state_27155__$1 = state_27155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27155__$1,(11),inst_27120);
} else {
if((state_val_27156 === (17))){
var inst_27141 = (state_27155[(2)]);
var state_27155__$1 = state_27155;
if(cljs.core.truth_(inst_27141)){
var statearr_27166_27230 = state_27155__$1;
(statearr_27166_27230[(1)] = (19));

} else {
var statearr_27167_27231 = state_27155__$1;
(statearr_27167_27231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (3))){
var inst_27153 = (state_27155[(2)]);
var state_27155__$1 = state_27155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27155__$1,inst_27153);
} else {
if((state_val_27156 === (12))){
var inst_27130 = (state_27155[(10)]);
var state_27155__$1 = state_27155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27155__$1,(14),inst_27130);
} else {
if((state_val_27156 === (2))){
var state_27155__$1 = state_27155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27155__$1,(4),results);
} else {
if((state_val_27156 === (19))){
var state_27155__$1 = state_27155;
var statearr_27168_27232 = state_27155__$1;
(statearr_27168_27232[(2)] = null);

(statearr_27168_27232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (11))){
var inst_27130 = (state_27155[(2)]);
var state_27155__$1 = (function (){var statearr_27169 = state_27155;
(statearr_27169[(10)] = inst_27130);

return statearr_27169;
})();
var statearr_27170_27233 = state_27155__$1;
(statearr_27170_27233[(2)] = null);

(statearr_27170_27233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (9))){
var state_27155__$1 = state_27155;
var statearr_27171_27234 = state_27155__$1;
(statearr_27171_27234[(2)] = null);

(statearr_27171_27234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (5))){
var state_27155__$1 = state_27155;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27172_27235 = state_27155__$1;
(statearr_27172_27235[(1)] = (8));

} else {
var statearr_27173_27236 = state_27155__$1;
(statearr_27173_27236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (14))){
var inst_27133 = (state_27155[(8)]);
var inst_27135 = (state_27155[(11)]);
var inst_27133__$1 = (state_27155[(2)]);
var inst_27134 = (inst_27133__$1 == null);
var inst_27135__$1 = cljs.core.not.call(null,inst_27134);
var state_27155__$1 = (function (){var statearr_27174 = state_27155;
(statearr_27174[(8)] = inst_27133__$1);

(statearr_27174[(11)] = inst_27135__$1);

return statearr_27174;
})();
if(inst_27135__$1){
var statearr_27175_27237 = state_27155__$1;
(statearr_27175_27237[(1)] = (15));

} else {
var statearr_27176_27238 = state_27155__$1;
(statearr_27176_27238[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (16))){
var inst_27135 = (state_27155[(11)]);
var state_27155__$1 = state_27155;
var statearr_27177_27239 = state_27155__$1;
(statearr_27177_27239[(2)] = inst_27135);

(statearr_27177_27239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (10))){
var inst_27127 = (state_27155[(2)]);
var state_27155__$1 = state_27155;
var statearr_27178_27240 = state_27155__$1;
(statearr_27178_27240[(2)] = inst_27127);

(statearr_27178_27240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (18))){
var inst_27138 = (state_27155[(2)]);
var state_27155__$1 = state_27155;
var statearr_27179_27241 = state_27155__$1;
(statearr_27179_27241[(2)] = inst_27138);

(statearr_27179_27241[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27156 === (8))){
var inst_27124 = cljs.core.async.close_BANG_.call(null,to);
var state_27155__$1 = state_27155;
var statearr_27180_27242 = state_27155__$1;
(statearr_27180_27242[(2)] = inst_27124);

(statearr_27180_27242[(1)] = (10));


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
});})(c__26630__auto__,jobs,results,process,async))
;
return ((function (switch__26518__auto__,c__26630__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0 = (function (){
var statearr_27184 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__);

(statearr_27184[(1)] = (1));

return statearr_27184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1 = (function (state_27155){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27185){if((e27185 instanceof Object)){
var ex__26522__auto__ = e27185;
var statearr_27186_27243 = state_27155;
(statearr_27186_27243[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27244 = state_27155;
state_27155 = G__27244;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__ = function(state_27155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1.call(this,state_27155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26519__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__,jobs,results,process,async))
})();
var state__26632__auto__ = (function (){var statearr_27187 = f__26631__auto__.call(null);
(statearr_27187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_27187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__,jobs,results,process,async))
);

return c__26630__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27245 = [];
var len__23119__auto___27248 = arguments.length;
var i__23120__auto___27249 = (0);
while(true){
if((i__23120__auto___27249 < len__23119__auto___27248)){
args27245.push((arguments[i__23120__auto___27249]));

var G__27250 = (i__23120__auto___27249 + (1));
i__23120__auto___27249 = G__27250;
continue;
} else {
}
break;
}

var G__27247 = args27245.length;
switch (G__27247) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27245.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var args27252 = [];
var len__23119__auto___27255 = arguments.length;
var i__23120__auto___27256 = (0);
while(true){
if((i__23120__auto___27256 < len__23119__auto___27255)){
args27252.push((arguments[i__23120__auto___27256]));

var G__27257 = (i__23120__auto___27256 + (1));
i__23120__auto___27256 = G__27257;
continue;
} else {
}
break;
}

var G__27254 = args27252.length;
switch (G__27254) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27252.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var args27259 = [];
var len__23119__auto___27312 = arguments.length;
var i__23120__auto___27313 = (0);
while(true){
if((i__23120__auto___27313 < len__23119__auto___27312)){
args27259.push((arguments[i__23120__auto___27313]));

var G__27314 = (i__23120__auto___27313 + (1));
i__23120__auto___27313 = G__27314;
continue;
} else {
}
break;
}

var G__27261 = args27259.length;
switch (G__27261) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27259.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26630__auto___27316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___27316,tc,fc){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___27316,tc,fc){
return (function (state_27287){
var state_val_27288 = (state_27287[(1)]);
if((state_val_27288 === (7))){
var inst_27283 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
var statearr_27289_27317 = state_27287__$1;
(statearr_27289_27317[(2)] = inst_27283);

(statearr_27289_27317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (1))){
var state_27287__$1 = state_27287;
var statearr_27290_27318 = state_27287__$1;
(statearr_27290_27318[(2)] = null);

(statearr_27290_27318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (4))){
var inst_27264 = (state_27287[(7)]);
var inst_27264__$1 = (state_27287[(2)]);
var inst_27265 = (inst_27264__$1 == null);
var state_27287__$1 = (function (){var statearr_27291 = state_27287;
(statearr_27291[(7)] = inst_27264__$1);

return statearr_27291;
})();
if(cljs.core.truth_(inst_27265)){
var statearr_27292_27319 = state_27287__$1;
(statearr_27292_27319[(1)] = (5));

} else {
var statearr_27293_27320 = state_27287__$1;
(statearr_27293_27320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (13))){
var state_27287__$1 = state_27287;
var statearr_27294_27321 = state_27287__$1;
(statearr_27294_27321[(2)] = null);

(statearr_27294_27321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (6))){
var inst_27264 = (state_27287[(7)]);
var inst_27270 = p.call(null,inst_27264);
var state_27287__$1 = state_27287;
if(cljs.core.truth_(inst_27270)){
var statearr_27295_27322 = state_27287__$1;
(statearr_27295_27322[(1)] = (9));

} else {
var statearr_27296_27323 = state_27287__$1;
(statearr_27296_27323[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (3))){
var inst_27285 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27287__$1,inst_27285);
} else {
if((state_val_27288 === (12))){
var state_27287__$1 = state_27287;
var statearr_27297_27324 = state_27287__$1;
(statearr_27297_27324[(2)] = null);

(statearr_27297_27324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (2))){
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27287__$1,(4),ch);
} else {
if((state_val_27288 === (11))){
var inst_27264 = (state_27287[(7)]);
var inst_27274 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27287__$1,(8),inst_27274,inst_27264);
} else {
if((state_val_27288 === (9))){
var state_27287__$1 = state_27287;
var statearr_27298_27325 = state_27287__$1;
(statearr_27298_27325[(2)] = tc);

(statearr_27298_27325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (5))){
var inst_27267 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27268 = cljs.core.async.close_BANG_.call(null,fc);
var state_27287__$1 = (function (){var statearr_27299 = state_27287;
(statearr_27299[(8)] = inst_27267);

return statearr_27299;
})();
var statearr_27300_27326 = state_27287__$1;
(statearr_27300_27326[(2)] = inst_27268);

(statearr_27300_27326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (14))){
var inst_27281 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
var statearr_27301_27327 = state_27287__$1;
(statearr_27301_27327[(2)] = inst_27281);

(statearr_27301_27327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (10))){
var state_27287__$1 = state_27287;
var statearr_27302_27328 = state_27287__$1;
(statearr_27302_27328[(2)] = fc);

(statearr_27302_27328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (8))){
var inst_27276 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
if(cljs.core.truth_(inst_27276)){
var statearr_27303_27329 = state_27287__$1;
(statearr_27303_27329[(1)] = (12));

} else {
var statearr_27304_27330 = state_27287__$1;
(statearr_27304_27330[(1)] = (13));

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
});})(c__26630__auto___27316,tc,fc))
;
return ((function (switch__26518__auto__,c__26630__auto___27316,tc,fc){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_27308 = [null,null,null,null,null,null,null,null,null];
(statearr_27308[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_27308[(1)] = (1));

return statearr_27308;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_27287){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27309){if((e27309 instanceof Object)){
var ex__26522__auto__ = e27309;
var statearr_27310_27331 = state_27287;
(statearr_27310_27331[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27332 = state_27287;
state_27287 = G__27332;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_27287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_27287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___27316,tc,fc))
})();
var state__26632__auto__ = (function (){var statearr_27311 = f__26631__auto__.call(null);
(statearr_27311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___27316);

return statearr_27311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___27316,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__){
return (function (state_27396){
var state_val_27397 = (state_27396[(1)]);
if((state_val_27397 === (7))){
var inst_27392 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27398_27419 = state_27396__$1;
(statearr_27398_27419[(2)] = inst_27392);

(statearr_27398_27419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (1))){
var inst_27376 = init;
var state_27396__$1 = (function (){var statearr_27399 = state_27396;
(statearr_27399[(7)] = inst_27376);

return statearr_27399;
})();
var statearr_27400_27420 = state_27396__$1;
(statearr_27400_27420[(2)] = null);

(statearr_27400_27420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (4))){
var inst_27379 = (state_27396[(8)]);
var inst_27379__$1 = (state_27396[(2)]);
var inst_27380 = (inst_27379__$1 == null);
var state_27396__$1 = (function (){var statearr_27401 = state_27396;
(statearr_27401[(8)] = inst_27379__$1);

return statearr_27401;
})();
if(cljs.core.truth_(inst_27380)){
var statearr_27402_27421 = state_27396__$1;
(statearr_27402_27421[(1)] = (5));

} else {
var statearr_27403_27422 = state_27396__$1;
(statearr_27403_27422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (6))){
var inst_27383 = (state_27396[(9)]);
var inst_27376 = (state_27396[(7)]);
var inst_27379 = (state_27396[(8)]);
var inst_27383__$1 = f.call(null,inst_27376,inst_27379);
var inst_27384 = cljs.core.reduced_QMARK_.call(null,inst_27383__$1);
var state_27396__$1 = (function (){var statearr_27404 = state_27396;
(statearr_27404[(9)] = inst_27383__$1);

return statearr_27404;
})();
if(inst_27384){
var statearr_27405_27423 = state_27396__$1;
(statearr_27405_27423[(1)] = (8));

} else {
var statearr_27406_27424 = state_27396__$1;
(statearr_27406_27424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (3))){
var inst_27394 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27396__$1,inst_27394);
} else {
if((state_val_27397 === (2))){
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27396__$1,(4),ch);
} else {
if((state_val_27397 === (9))){
var inst_27383 = (state_27396[(9)]);
var inst_27376 = inst_27383;
var state_27396__$1 = (function (){var statearr_27407 = state_27396;
(statearr_27407[(7)] = inst_27376);

return statearr_27407;
})();
var statearr_27408_27425 = state_27396__$1;
(statearr_27408_27425[(2)] = null);

(statearr_27408_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (5))){
var inst_27376 = (state_27396[(7)]);
var state_27396__$1 = state_27396;
var statearr_27409_27426 = state_27396__$1;
(statearr_27409_27426[(2)] = inst_27376);

(statearr_27409_27426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (10))){
var inst_27390 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27410_27427 = state_27396__$1;
(statearr_27410_27427[(2)] = inst_27390);

(statearr_27410_27427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (8))){
var inst_27383 = (state_27396[(9)]);
var inst_27386 = cljs.core.deref.call(null,inst_27383);
var state_27396__$1 = state_27396;
var statearr_27411_27428 = state_27396__$1;
(statearr_27411_27428[(2)] = inst_27386);

(statearr_27411_27428[(1)] = (10));


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
});})(c__26630__auto__))
;
return ((function (switch__26518__auto__,c__26630__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26519__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26519__auto____0 = (function (){
var statearr_27415 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27415[(0)] = cljs$core$async$reduce_$_state_machine__26519__auto__);

(statearr_27415[(1)] = (1));

return statearr_27415;
});
var cljs$core$async$reduce_$_state_machine__26519__auto____1 = (function (state_27396){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27416){if((e27416 instanceof Object)){
var ex__26522__auto__ = e27416;
var statearr_27417_27429 = state_27396;
(statearr_27417_27429[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27430 = state_27396;
state_27396 = G__27430;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26519__auto__ = function(state_27396){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26519__auto____1.call(this,state_27396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26519__auto____0;
cljs$core$async$reduce_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26519__auto____1;
return cljs$core$async$reduce_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__))
})();
var state__26632__auto__ = (function (){var statearr_27418 = f__26631__auto__.call(null);
(statearr_27418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_27418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__))
);

return c__26630__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27431 = [];
var len__23119__auto___27483 = arguments.length;
var i__23120__auto___27484 = (0);
while(true){
if((i__23120__auto___27484 < len__23119__auto___27483)){
args27431.push((arguments[i__23120__auto___27484]));

var G__27485 = (i__23120__auto___27484 + (1));
i__23120__auto___27484 = G__27485;
continue;
} else {
}
break;
}

var G__27433 = args27431.length;
switch (G__27433) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27431.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__){
return (function (state_27458){
var state_val_27459 = (state_27458[(1)]);
if((state_val_27459 === (7))){
var inst_27440 = (state_27458[(2)]);
var state_27458__$1 = state_27458;
var statearr_27460_27487 = state_27458__$1;
(statearr_27460_27487[(2)] = inst_27440);

(statearr_27460_27487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (1))){
var inst_27434 = cljs.core.seq.call(null,coll);
var inst_27435 = inst_27434;
var state_27458__$1 = (function (){var statearr_27461 = state_27458;
(statearr_27461[(7)] = inst_27435);

return statearr_27461;
})();
var statearr_27462_27488 = state_27458__$1;
(statearr_27462_27488[(2)] = null);

(statearr_27462_27488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (4))){
var inst_27435 = (state_27458[(7)]);
var inst_27438 = cljs.core.first.call(null,inst_27435);
var state_27458__$1 = state_27458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27458__$1,(7),ch,inst_27438);
} else {
if((state_val_27459 === (13))){
var inst_27452 = (state_27458[(2)]);
var state_27458__$1 = state_27458;
var statearr_27463_27489 = state_27458__$1;
(statearr_27463_27489[(2)] = inst_27452);

(statearr_27463_27489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (6))){
var inst_27443 = (state_27458[(2)]);
var state_27458__$1 = state_27458;
if(cljs.core.truth_(inst_27443)){
var statearr_27464_27490 = state_27458__$1;
(statearr_27464_27490[(1)] = (8));

} else {
var statearr_27465_27491 = state_27458__$1;
(statearr_27465_27491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (3))){
var inst_27456 = (state_27458[(2)]);
var state_27458__$1 = state_27458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27458__$1,inst_27456);
} else {
if((state_val_27459 === (12))){
var state_27458__$1 = state_27458;
var statearr_27466_27492 = state_27458__$1;
(statearr_27466_27492[(2)] = null);

(statearr_27466_27492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (2))){
var inst_27435 = (state_27458[(7)]);
var state_27458__$1 = state_27458;
if(cljs.core.truth_(inst_27435)){
var statearr_27467_27493 = state_27458__$1;
(statearr_27467_27493[(1)] = (4));

} else {
var statearr_27468_27494 = state_27458__$1;
(statearr_27468_27494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (11))){
var inst_27449 = cljs.core.async.close_BANG_.call(null,ch);
var state_27458__$1 = state_27458;
var statearr_27469_27495 = state_27458__$1;
(statearr_27469_27495[(2)] = inst_27449);

(statearr_27469_27495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (9))){
var state_27458__$1 = state_27458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27470_27496 = state_27458__$1;
(statearr_27470_27496[(1)] = (11));

} else {
var statearr_27471_27497 = state_27458__$1;
(statearr_27471_27497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (5))){
var inst_27435 = (state_27458[(7)]);
var state_27458__$1 = state_27458;
var statearr_27472_27498 = state_27458__$1;
(statearr_27472_27498[(2)] = inst_27435);

(statearr_27472_27498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (10))){
var inst_27454 = (state_27458[(2)]);
var state_27458__$1 = state_27458;
var statearr_27473_27499 = state_27458__$1;
(statearr_27473_27499[(2)] = inst_27454);

(statearr_27473_27499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27459 === (8))){
var inst_27435 = (state_27458[(7)]);
var inst_27445 = cljs.core.next.call(null,inst_27435);
var inst_27435__$1 = inst_27445;
var state_27458__$1 = (function (){var statearr_27474 = state_27458;
(statearr_27474[(7)] = inst_27435__$1);

return statearr_27474;
})();
var statearr_27475_27500 = state_27458__$1;
(statearr_27475_27500[(2)] = null);

(statearr_27475_27500[(1)] = (2));


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
});})(c__26630__auto__))
;
return ((function (switch__26518__auto__,c__26630__auto__){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_27479 = [null,null,null,null,null,null,null,null];
(statearr_27479[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_27479[(1)] = (1));

return statearr_27479;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_27458){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27480){if((e27480 instanceof Object)){
var ex__26522__auto__ = e27480;
var statearr_27481_27501 = state_27458;
(statearr_27481_27501[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27502 = state_27458;
state_27458 = G__27502;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_27458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_27458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__))
})();
var state__26632__auto__ = (function (){var statearr_27482 = f__26631__auto__.call(null);
(statearr_27482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__))
);

return c__26630__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22707__auto__ = (((_ == null))?null:_);
var m__22708__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,_);
} else {
var m__22708__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22707__auto__ = (((m == null))?null:m);
var m__22708__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22708__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22707__auto__ = (((m == null))?null:m);
var m__22708__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,m,ch);
} else {
var m__22708__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22707__auto__ = (((m == null))?null:m);
var m__22708__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,m);
} else {
var m__22708__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27728 = (function (mult,ch,cs,meta27729){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27729 = meta27729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27730,meta27729__$1){
var self__ = this;
var _27730__$1 = this;
return (new cljs.core.async.t_cljs$core$async27728(self__.mult,self__.ch,self__.cs,meta27729__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27730){
var self__ = this;
var _27730__$1 = this;
return self__.meta27729;
});})(cs))
;

cljs.core.async.t_cljs$core$async27728.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27728.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27728.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27728.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27728.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27728.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27729","meta27729",1163805695,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27728";

cljs.core.async.t_cljs$core$async27728.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async27728");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27728 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27728(mult__$1,ch__$1,cs__$1,meta27729){
return (new cljs.core.async.t_cljs$core$async27728(mult__$1,ch__$1,cs__$1,meta27729));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27728(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26630__auto___27953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___27953,cs,m,dchan,dctr,done){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___27953,cs,m,dchan,dctr,done){
return (function (state_27865){
var state_val_27866 = (state_27865[(1)]);
if((state_val_27866 === (7))){
var inst_27861 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27867_27954 = state_27865__$1;
(statearr_27867_27954[(2)] = inst_27861);

(statearr_27867_27954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (20))){
var inst_27764 = (state_27865[(7)]);
var inst_27776 = cljs.core.first.call(null,inst_27764);
var inst_27777 = cljs.core.nth.call(null,inst_27776,(0),null);
var inst_27778 = cljs.core.nth.call(null,inst_27776,(1),null);
var state_27865__$1 = (function (){var statearr_27868 = state_27865;
(statearr_27868[(8)] = inst_27777);

return statearr_27868;
})();
if(cljs.core.truth_(inst_27778)){
var statearr_27869_27955 = state_27865__$1;
(statearr_27869_27955[(1)] = (22));

} else {
var statearr_27870_27956 = state_27865__$1;
(statearr_27870_27956[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (27))){
var inst_27806 = (state_27865[(9)]);
var inst_27813 = (state_27865[(10)]);
var inst_27733 = (state_27865[(11)]);
var inst_27808 = (state_27865[(12)]);
var inst_27813__$1 = cljs.core._nth.call(null,inst_27806,inst_27808);
var inst_27814 = cljs.core.async.put_BANG_.call(null,inst_27813__$1,inst_27733,done);
var state_27865__$1 = (function (){var statearr_27871 = state_27865;
(statearr_27871[(10)] = inst_27813__$1);

return statearr_27871;
})();
if(cljs.core.truth_(inst_27814)){
var statearr_27872_27957 = state_27865__$1;
(statearr_27872_27957[(1)] = (30));

} else {
var statearr_27873_27958 = state_27865__$1;
(statearr_27873_27958[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (1))){
var state_27865__$1 = state_27865;
var statearr_27874_27959 = state_27865__$1;
(statearr_27874_27959[(2)] = null);

(statearr_27874_27959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (24))){
var inst_27764 = (state_27865[(7)]);
var inst_27783 = (state_27865[(2)]);
var inst_27784 = cljs.core.next.call(null,inst_27764);
var inst_27742 = inst_27784;
var inst_27743 = null;
var inst_27744 = (0);
var inst_27745 = (0);
var state_27865__$1 = (function (){var statearr_27875 = state_27865;
(statearr_27875[(13)] = inst_27744);

(statearr_27875[(14)] = inst_27745);

(statearr_27875[(15)] = inst_27743);

(statearr_27875[(16)] = inst_27742);

(statearr_27875[(17)] = inst_27783);

return statearr_27875;
})();
var statearr_27876_27960 = state_27865__$1;
(statearr_27876_27960[(2)] = null);

(statearr_27876_27960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (39))){
var state_27865__$1 = state_27865;
var statearr_27880_27961 = state_27865__$1;
(statearr_27880_27961[(2)] = null);

(statearr_27880_27961[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (4))){
var inst_27733 = (state_27865[(11)]);
var inst_27733__$1 = (state_27865[(2)]);
var inst_27734 = (inst_27733__$1 == null);
var state_27865__$1 = (function (){var statearr_27881 = state_27865;
(statearr_27881[(11)] = inst_27733__$1);

return statearr_27881;
})();
if(cljs.core.truth_(inst_27734)){
var statearr_27882_27962 = state_27865__$1;
(statearr_27882_27962[(1)] = (5));

} else {
var statearr_27883_27963 = state_27865__$1;
(statearr_27883_27963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (15))){
var inst_27744 = (state_27865[(13)]);
var inst_27745 = (state_27865[(14)]);
var inst_27743 = (state_27865[(15)]);
var inst_27742 = (state_27865[(16)]);
var inst_27760 = (state_27865[(2)]);
var inst_27761 = (inst_27745 + (1));
var tmp27877 = inst_27744;
var tmp27878 = inst_27743;
var tmp27879 = inst_27742;
var inst_27742__$1 = tmp27879;
var inst_27743__$1 = tmp27878;
var inst_27744__$1 = tmp27877;
var inst_27745__$1 = inst_27761;
var state_27865__$1 = (function (){var statearr_27884 = state_27865;
(statearr_27884[(18)] = inst_27760);

(statearr_27884[(13)] = inst_27744__$1);

(statearr_27884[(14)] = inst_27745__$1);

(statearr_27884[(15)] = inst_27743__$1);

(statearr_27884[(16)] = inst_27742__$1);

return statearr_27884;
})();
var statearr_27885_27964 = state_27865__$1;
(statearr_27885_27964[(2)] = null);

(statearr_27885_27964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (21))){
var inst_27787 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27889_27965 = state_27865__$1;
(statearr_27889_27965[(2)] = inst_27787);

(statearr_27889_27965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (31))){
var inst_27813 = (state_27865[(10)]);
var inst_27817 = done.call(null,null);
var inst_27818 = cljs.core.async.untap_STAR_.call(null,m,inst_27813);
var state_27865__$1 = (function (){var statearr_27890 = state_27865;
(statearr_27890[(19)] = inst_27817);

return statearr_27890;
})();
var statearr_27891_27966 = state_27865__$1;
(statearr_27891_27966[(2)] = inst_27818);

(statearr_27891_27966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (32))){
var inst_27805 = (state_27865[(20)]);
var inst_27806 = (state_27865[(9)]);
var inst_27807 = (state_27865[(21)]);
var inst_27808 = (state_27865[(12)]);
var inst_27820 = (state_27865[(2)]);
var inst_27821 = (inst_27808 + (1));
var tmp27886 = inst_27805;
var tmp27887 = inst_27806;
var tmp27888 = inst_27807;
var inst_27805__$1 = tmp27886;
var inst_27806__$1 = tmp27887;
var inst_27807__$1 = tmp27888;
var inst_27808__$1 = inst_27821;
var state_27865__$1 = (function (){var statearr_27892 = state_27865;
(statearr_27892[(20)] = inst_27805__$1);

(statearr_27892[(22)] = inst_27820);

(statearr_27892[(9)] = inst_27806__$1);

(statearr_27892[(21)] = inst_27807__$1);

(statearr_27892[(12)] = inst_27808__$1);

return statearr_27892;
})();
var statearr_27893_27967 = state_27865__$1;
(statearr_27893_27967[(2)] = null);

(statearr_27893_27967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (40))){
var inst_27833 = (state_27865[(23)]);
var inst_27837 = done.call(null,null);
var inst_27838 = cljs.core.async.untap_STAR_.call(null,m,inst_27833);
var state_27865__$1 = (function (){var statearr_27894 = state_27865;
(statearr_27894[(24)] = inst_27837);

return statearr_27894;
})();
var statearr_27895_27968 = state_27865__$1;
(statearr_27895_27968[(2)] = inst_27838);

(statearr_27895_27968[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (33))){
var inst_27824 = (state_27865[(25)]);
var inst_27826 = cljs.core.chunked_seq_QMARK_.call(null,inst_27824);
var state_27865__$1 = state_27865;
if(inst_27826){
var statearr_27896_27969 = state_27865__$1;
(statearr_27896_27969[(1)] = (36));

} else {
var statearr_27897_27970 = state_27865__$1;
(statearr_27897_27970[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (13))){
var inst_27754 = (state_27865[(26)]);
var inst_27757 = cljs.core.async.close_BANG_.call(null,inst_27754);
var state_27865__$1 = state_27865;
var statearr_27898_27971 = state_27865__$1;
(statearr_27898_27971[(2)] = inst_27757);

(statearr_27898_27971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (22))){
var inst_27777 = (state_27865[(8)]);
var inst_27780 = cljs.core.async.close_BANG_.call(null,inst_27777);
var state_27865__$1 = state_27865;
var statearr_27899_27972 = state_27865__$1;
(statearr_27899_27972[(2)] = inst_27780);

(statearr_27899_27972[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (36))){
var inst_27824 = (state_27865[(25)]);
var inst_27828 = cljs.core.chunk_first.call(null,inst_27824);
var inst_27829 = cljs.core.chunk_rest.call(null,inst_27824);
var inst_27830 = cljs.core.count.call(null,inst_27828);
var inst_27805 = inst_27829;
var inst_27806 = inst_27828;
var inst_27807 = inst_27830;
var inst_27808 = (0);
var state_27865__$1 = (function (){var statearr_27900 = state_27865;
(statearr_27900[(20)] = inst_27805);

(statearr_27900[(9)] = inst_27806);

(statearr_27900[(21)] = inst_27807);

(statearr_27900[(12)] = inst_27808);

return statearr_27900;
})();
var statearr_27901_27973 = state_27865__$1;
(statearr_27901_27973[(2)] = null);

(statearr_27901_27973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (41))){
var inst_27824 = (state_27865[(25)]);
var inst_27840 = (state_27865[(2)]);
var inst_27841 = cljs.core.next.call(null,inst_27824);
var inst_27805 = inst_27841;
var inst_27806 = null;
var inst_27807 = (0);
var inst_27808 = (0);
var state_27865__$1 = (function (){var statearr_27902 = state_27865;
(statearr_27902[(20)] = inst_27805);

(statearr_27902[(9)] = inst_27806);

(statearr_27902[(21)] = inst_27807);

(statearr_27902[(12)] = inst_27808);

(statearr_27902[(27)] = inst_27840);

return statearr_27902;
})();
var statearr_27903_27974 = state_27865__$1;
(statearr_27903_27974[(2)] = null);

(statearr_27903_27974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (43))){
var state_27865__$1 = state_27865;
var statearr_27904_27975 = state_27865__$1;
(statearr_27904_27975[(2)] = null);

(statearr_27904_27975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (29))){
var inst_27849 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27905_27976 = state_27865__$1;
(statearr_27905_27976[(2)] = inst_27849);

(statearr_27905_27976[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (44))){
var inst_27858 = (state_27865[(2)]);
var state_27865__$1 = (function (){var statearr_27906 = state_27865;
(statearr_27906[(28)] = inst_27858);

return statearr_27906;
})();
var statearr_27907_27977 = state_27865__$1;
(statearr_27907_27977[(2)] = null);

(statearr_27907_27977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (6))){
var inst_27797 = (state_27865[(29)]);
var inst_27796 = cljs.core.deref.call(null,cs);
var inst_27797__$1 = cljs.core.keys.call(null,inst_27796);
var inst_27798 = cljs.core.count.call(null,inst_27797__$1);
var inst_27799 = cljs.core.reset_BANG_.call(null,dctr,inst_27798);
var inst_27804 = cljs.core.seq.call(null,inst_27797__$1);
var inst_27805 = inst_27804;
var inst_27806 = null;
var inst_27807 = (0);
var inst_27808 = (0);
var state_27865__$1 = (function (){var statearr_27908 = state_27865;
(statearr_27908[(20)] = inst_27805);

(statearr_27908[(9)] = inst_27806);

(statearr_27908[(29)] = inst_27797__$1);

(statearr_27908[(21)] = inst_27807);

(statearr_27908[(30)] = inst_27799);

(statearr_27908[(12)] = inst_27808);

return statearr_27908;
})();
var statearr_27909_27978 = state_27865__$1;
(statearr_27909_27978[(2)] = null);

(statearr_27909_27978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (28))){
var inst_27805 = (state_27865[(20)]);
var inst_27824 = (state_27865[(25)]);
var inst_27824__$1 = cljs.core.seq.call(null,inst_27805);
var state_27865__$1 = (function (){var statearr_27910 = state_27865;
(statearr_27910[(25)] = inst_27824__$1);

return statearr_27910;
})();
if(inst_27824__$1){
var statearr_27911_27979 = state_27865__$1;
(statearr_27911_27979[(1)] = (33));

} else {
var statearr_27912_27980 = state_27865__$1;
(statearr_27912_27980[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (25))){
var inst_27807 = (state_27865[(21)]);
var inst_27808 = (state_27865[(12)]);
var inst_27810 = (inst_27808 < inst_27807);
var inst_27811 = inst_27810;
var state_27865__$1 = state_27865;
if(cljs.core.truth_(inst_27811)){
var statearr_27913_27981 = state_27865__$1;
(statearr_27913_27981[(1)] = (27));

} else {
var statearr_27914_27982 = state_27865__$1;
(statearr_27914_27982[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (34))){
var state_27865__$1 = state_27865;
var statearr_27915_27983 = state_27865__$1;
(statearr_27915_27983[(2)] = null);

(statearr_27915_27983[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (17))){
var state_27865__$1 = state_27865;
var statearr_27916_27984 = state_27865__$1;
(statearr_27916_27984[(2)] = null);

(statearr_27916_27984[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (3))){
var inst_27863 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27865__$1,inst_27863);
} else {
if((state_val_27866 === (12))){
var inst_27792 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27917_27985 = state_27865__$1;
(statearr_27917_27985[(2)] = inst_27792);

(statearr_27917_27985[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (2))){
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27865__$1,(4),ch);
} else {
if((state_val_27866 === (23))){
var state_27865__$1 = state_27865;
var statearr_27918_27986 = state_27865__$1;
(statearr_27918_27986[(2)] = null);

(statearr_27918_27986[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (35))){
var inst_27847 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27919_27987 = state_27865__$1;
(statearr_27919_27987[(2)] = inst_27847);

(statearr_27919_27987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (19))){
var inst_27764 = (state_27865[(7)]);
var inst_27768 = cljs.core.chunk_first.call(null,inst_27764);
var inst_27769 = cljs.core.chunk_rest.call(null,inst_27764);
var inst_27770 = cljs.core.count.call(null,inst_27768);
var inst_27742 = inst_27769;
var inst_27743 = inst_27768;
var inst_27744 = inst_27770;
var inst_27745 = (0);
var state_27865__$1 = (function (){var statearr_27920 = state_27865;
(statearr_27920[(13)] = inst_27744);

(statearr_27920[(14)] = inst_27745);

(statearr_27920[(15)] = inst_27743);

(statearr_27920[(16)] = inst_27742);

return statearr_27920;
})();
var statearr_27921_27988 = state_27865__$1;
(statearr_27921_27988[(2)] = null);

(statearr_27921_27988[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (11))){
var inst_27764 = (state_27865[(7)]);
var inst_27742 = (state_27865[(16)]);
var inst_27764__$1 = cljs.core.seq.call(null,inst_27742);
var state_27865__$1 = (function (){var statearr_27922 = state_27865;
(statearr_27922[(7)] = inst_27764__$1);

return statearr_27922;
})();
if(inst_27764__$1){
var statearr_27923_27989 = state_27865__$1;
(statearr_27923_27989[(1)] = (16));

} else {
var statearr_27924_27990 = state_27865__$1;
(statearr_27924_27990[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (9))){
var inst_27794 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27925_27991 = state_27865__$1;
(statearr_27925_27991[(2)] = inst_27794);

(statearr_27925_27991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (5))){
var inst_27740 = cljs.core.deref.call(null,cs);
var inst_27741 = cljs.core.seq.call(null,inst_27740);
var inst_27742 = inst_27741;
var inst_27743 = null;
var inst_27744 = (0);
var inst_27745 = (0);
var state_27865__$1 = (function (){var statearr_27926 = state_27865;
(statearr_27926[(13)] = inst_27744);

(statearr_27926[(14)] = inst_27745);

(statearr_27926[(15)] = inst_27743);

(statearr_27926[(16)] = inst_27742);

return statearr_27926;
})();
var statearr_27927_27992 = state_27865__$1;
(statearr_27927_27992[(2)] = null);

(statearr_27927_27992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (14))){
var state_27865__$1 = state_27865;
var statearr_27928_27993 = state_27865__$1;
(statearr_27928_27993[(2)] = null);

(statearr_27928_27993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (45))){
var inst_27855 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27929_27994 = state_27865__$1;
(statearr_27929_27994[(2)] = inst_27855);

(statearr_27929_27994[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (26))){
var inst_27797 = (state_27865[(29)]);
var inst_27851 = (state_27865[(2)]);
var inst_27852 = cljs.core.seq.call(null,inst_27797);
var state_27865__$1 = (function (){var statearr_27930 = state_27865;
(statearr_27930[(31)] = inst_27851);

return statearr_27930;
})();
if(inst_27852){
var statearr_27931_27995 = state_27865__$1;
(statearr_27931_27995[(1)] = (42));

} else {
var statearr_27932_27996 = state_27865__$1;
(statearr_27932_27996[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (16))){
var inst_27764 = (state_27865[(7)]);
var inst_27766 = cljs.core.chunked_seq_QMARK_.call(null,inst_27764);
var state_27865__$1 = state_27865;
if(inst_27766){
var statearr_27933_27997 = state_27865__$1;
(statearr_27933_27997[(1)] = (19));

} else {
var statearr_27934_27998 = state_27865__$1;
(statearr_27934_27998[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (38))){
var inst_27844 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27935_27999 = state_27865__$1;
(statearr_27935_27999[(2)] = inst_27844);

(statearr_27935_27999[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (30))){
var state_27865__$1 = state_27865;
var statearr_27936_28000 = state_27865__$1;
(statearr_27936_28000[(2)] = null);

(statearr_27936_28000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (10))){
var inst_27745 = (state_27865[(14)]);
var inst_27743 = (state_27865[(15)]);
var inst_27753 = cljs.core._nth.call(null,inst_27743,inst_27745);
var inst_27754 = cljs.core.nth.call(null,inst_27753,(0),null);
var inst_27755 = cljs.core.nth.call(null,inst_27753,(1),null);
var state_27865__$1 = (function (){var statearr_27937 = state_27865;
(statearr_27937[(26)] = inst_27754);

return statearr_27937;
})();
if(cljs.core.truth_(inst_27755)){
var statearr_27938_28001 = state_27865__$1;
(statearr_27938_28001[(1)] = (13));

} else {
var statearr_27939_28002 = state_27865__$1;
(statearr_27939_28002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (18))){
var inst_27790 = (state_27865[(2)]);
var state_27865__$1 = state_27865;
var statearr_27940_28003 = state_27865__$1;
(statearr_27940_28003[(2)] = inst_27790);

(statearr_27940_28003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (42))){
var state_27865__$1 = state_27865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27865__$1,(45),dchan);
} else {
if((state_val_27866 === (37))){
var inst_27824 = (state_27865[(25)]);
var inst_27733 = (state_27865[(11)]);
var inst_27833 = (state_27865[(23)]);
var inst_27833__$1 = cljs.core.first.call(null,inst_27824);
var inst_27834 = cljs.core.async.put_BANG_.call(null,inst_27833__$1,inst_27733,done);
var state_27865__$1 = (function (){var statearr_27941 = state_27865;
(statearr_27941[(23)] = inst_27833__$1);

return statearr_27941;
})();
if(cljs.core.truth_(inst_27834)){
var statearr_27942_28004 = state_27865__$1;
(statearr_27942_28004[(1)] = (39));

} else {
var statearr_27943_28005 = state_27865__$1;
(statearr_27943_28005[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27866 === (8))){
var inst_27744 = (state_27865[(13)]);
var inst_27745 = (state_27865[(14)]);
var inst_27747 = (inst_27745 < inst_27744);
var inst_27748 = inst_27747;
var state_27865__$1 = state_27865;
if(cljs.core.truth_(inst_27748)){
var statearr_27944_28006 = state_27865__$1;
(statearr_27944_28006[(1)] = (10));

} else {
var statearr_27945_28007 = state_27865__$1;
(statearr_27945_28007[(1)] = (11));

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
});})(c__26630__auto___27953,cs,m,dchan,dctr,done))
;
return ((function (switch__26518__auto__,c__26630__auto___27953,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26519__auto__ = null;
var cljs$core$async$mult_$_state_machine__26519__auto____0 = (function (){
var statearr_27949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27949[(0)] = cljs$core$async$mult_$_state_machine__26519__auto__);

(statearr_27949[(1)] = (1));

return statearr_27949;
});
var cljs$core$async$mult_$_state_machine__26519__auto____1 = (function (state_27865){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_27865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e27950){if((e27950 instanceof Object)){
var ex__26522__auto__ = e27950;
var statearr_27951_28008 = state_27865;
(statearr_27951_28008[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28009 = state_27865;
state_27865 = G__28009;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26519__auto__ = function(state_27865){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26519__auto____1.call(this,state_27865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26519__auto____0;
cljs$core$async$mult_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26519__auto____1;
return cljs$core$async$mult_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___27953,cs,m,dchan,dctr,done))
})();
var state__26632__auto__ = (function (){var statearr_27952 = f__26631__auto__.call(null);
(statearr_27952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___27953);

return statearr_27952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___27953,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28010 = [];
var len__23119__auto___28013 = arguments.length;
var i__23120__auto___28014 = (0);
while(true){
if((i__23120__auto___28014 < len__23119__auto___28013)){
args28010.push((arguments[i__23120__auto___28014]));

var G__28015 = (i__23120__auto___28014 + (1));
i__23120__auto___28014 = G__28015;
continue;
} else {
}
break;
}

var G__28012 = args28010.length;
switch (G__28012) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28010.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22707__auto__ = (((m == null))?null:m);
var m__22708__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,m,ch);
} else {
var m__22708__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22707__auto__ = (((m == null))?null:m);
var m__22708__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,m,ch);
} else {
var m__22708__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22707__auto__ = (((m == null))?null:m);
var m__22708__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,m);
} else {
var m__22708__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22707__auto__ = (((m == null))?null:m);
var m__22708__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,m,state_map);
} else {
var m__22708__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22707__auto__ = (((m == null))?null:m);
var m__22708__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,m,mode);
} else {
var m__22708__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23126__auto__ = [];
var len__23119__auto___28027 = arguments.length;
var i__23120__auto___28028 = (0);
while(true){
if((i__23120__auto___28028 < len__23119__auto___28027)){
args__23126__auto__.push((arguments[i__23120__auto___28028]));

var G__28029 = (i__23120__auto___28028 + (1));
i__23120__auto___28028 = G__28029;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((3) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23127__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28021){
var map__28022 = p__28021;
var map__28022__$1 = ((((!((map__28022 == null)))?((((map__28022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28022):map__28022);
var opts = map__28022__$1;
var statearr_28024_28030 = state;
(statearr_28024_28030[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28022,map__28022__$1,opts){
return (function (val){
var statearr_28025_28031 = state;
(statearr_28025_28031[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28022,map__28022__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28026_28032 = state;
(statearr_28026_28032[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28017){
var G__28018 = cljs.core.first.call(null,seq28017);
var seq28017__$1 = cljs.core.next.call(null,seq28017);
var G__28019 = cljs.core.first.call(null,seq28017__$1);
var seq28017__$2 = cljs.core.next.call(null,seq28017__$1);
var G__28020 = cljs.core.first.call(null,seq28017__$2);
var seq28017__$3 = cljs.core.next.call(null,seq28017__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28018,G__28019,G__28020,seq28017__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28198 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28198 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28199){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28199 = meta28199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28200,meta28199__$1){
var self__ = this;
var _28200__$1 = this;
return (new cljs.core.async.t_cljs$core$async28198(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28199__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28200){
var self__ = this;
var _28200__$1 = this;
return self__.meta28199;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28199","meta28199",190976649,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28198.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28198.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28198";

cljs.core.async.t_cljs$core$async28198.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async28198");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28198 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28198(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28199){
return (new cljs.core.async.t_cljs$core$async28198(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28199));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28198(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26630__auto___28363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___28363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___28363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28300){
var state_val_28301 = (state_28300[(1)]);
if((state_val_28301 === (7))){
var inst_28216 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28302_28364 = state_28300__$1;
(statearr_28302_28364[(2)] = inst_28216);

(statearr_28302_28364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (20))){
var inst_28228 = (state_28300[(7)]);
var state_28300__$1 = state_28300;
var statearr_28303_28365 = state_28300__$1;
(statearr_28303_28365[(2)] = inst_28228);

(statearr_28303_28365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (27))){
var state_28300__$1 = state_28300;
var statearr_28304_28366 = state_28300__$1;
(statearr_28304_28366[(2)] = null);

(statearr_28304_28366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (1))){
var inst_28204 = (state_28300[(8)]);
var inst_28204__$1 = calc_state.call(null);
var inst_28206 = (inst_28204__$1 == null);
var inst_28207 = cljs.core.not.call(null,inst_28206);
var state_28300__$1 = (function (){var statearr_28305 = state_28300;
(statearr_28305[(8)] = inst_28204__$1);

return statearr_28305;
})();
if(inst_28207){
var statearr_28306_28367 = state_28300__$1;
(statearr_28306_28367[(1)] = (2));

} else {
var statearr_28307_28368 = state_28300__$1;
(statearr_28307_28368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (24))){
var inst_28260 = (state_28300[(9)]);
var inst_28274 = (state_28300[(10)]);
var inst_28251 = (state_28300[(11)]);
var inst_28274__$1 = inst_28251.call(null,inst_28260);
var state_28300__$1 = (function (){var statearr_28308 = state_28300;
(statearr_28308[(10)] = inst_28274__$1);

return statearr_28308;
})();
if(cljs.core.truth_(inst_28274__$1)){
var statearr_28309_28369 = state_28300__$1;
(statearr_28309_28369[(1)] = (29));

} else {
var statearr_28310_28370 = state_28300__$1;
(statearr_28310_28370[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (4))){
var inst_28219 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28219)){
var statearr_28311_28371 = state_28300__$1;
(statearr_28311_28371[(1)] = (8));

} else {
var statearr_28312_28372 = state_28300__$1;
(statearr_28312_28372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (15))){
var inst_28245 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28245)){
var statearr_28313_28373 = state_28300__$1;
(statearr_28313_28373[(1)] = (19));

} else {
var statearr_28314_28374 = state_28300__$1;
(statearr_28314_28374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (21))){
var inst_28250 = (state_28300[(12)]);
var inst_28250__$1 = (state_28300[(2)]);
var inst_28251 = cljs.core.get.call(null,inst_28250__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28252 = cljs.core.get.call(null,inst_28250__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28253 = cljs.core.get.call(null,inst_28250__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28300__$1 = (function (){var statearr_28315 = state_28300;
(statearr_28315[(13)] = inst_28252);

(statearr_28315[(12)] = inst_28250__$1);

(statearr_28315[(11)] = inst_28251);

return statearr_28315;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28300__$1,(22),inst_28253);
} else {
if((state_val_28301 === (31))){
var inst_28282 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28282)){
var statearr_28316_28375 = state_28300__$1;
(statearr_28316_28375[(1)] = (32));

} else {
var statearr_28317_28376 = state_28300__$1;
(statearr_28317_28376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (32))){
var inst_28259 = (state_28300[(14)]);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28300__$1,(35),out,inst_28259);
} else {
if((state_val_28301 === (33))){
var inst_28250 = (state_28300[(12)]);
var inst_28228 = inst_28250;
var state_28300__$1 = (function (){var statearr_28318 = state_28300;
(statearr_28318[(7)] = inst_28228);

return statearr_28318;
})();
var statearr_28319_28377 = state_28300__$1;
(statearr_28319_28377[(2)] = null);

(statearr_28319_28377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (13))){
var inst_28228 = (state_28300[(7)]);
var inst_28235 = inst_28228.cljs$lang$protocol_mask$partition0$;
var inst_28236 = (inst_28235 & (64));
var inst_28237 = inst_28228.cljs$core$ISeq$;
var inst_28238 = (inst_28236) || (inst_28237);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28238)){
var statearr_28320_28378 = state_28300__$1;
(statearr_28320_28378[(1)] = (16));

} else {
var statearr_28321_28379 = state_28300__$1;
(statearr_28321_28379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (22))){
var inst_28259 = (state_28300[(14)]);
var inst_28260 = (state_28300[(9)]);
var inst_28258 = (state_28300[(2)]);
var inst_28259__$1 = cljs.core.nth.call(null,inst_28258,(0),null);
var inst_28260__$1 = cljs.core.nth.call(null,inst_28258,(1),null);
var inst_28261 = (inst_28259__$1 == null);
var inst_28262 = cljs.core._EQ_.call(null,inst_28260__$1,change);
var inst_28263 = (inst_28261) || (inst_28262);
var state_28300__$1 = (function (){var statearr_28322 = state_28300;
(statearr_28322[(14)] = inst_28259__$1);

(statearr_28322[(9)] = inst_28260__$1);

return statearr_28322;
})();
if(cljs.core.truth_(inst_28263)){
var statearr_28323_28380 = state_28300__$1;
(statearr_28323_28380[(1)] = (23));

} else {
var statearr_28324_28381 = state_28300__$1;
(statearr_28324_28381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (36))){
var inst_28250 = (state_28300[(12)]);
var inst_28228 = inst_28250;
var state_28300__$1 = (function (){var statearr_28325 = state_28300;
(statearr_28325[(7)] = inst_28228);

return statearr_28325;
})();
var statearr_28326_28382 = state_28300__$1;
(statearr_28326_28382[(2)] = null);

(statearr_28326_28382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (29))){
var inst_28274 = (state_28300[(10)]);
var state_28300__$1 = state_28300;
var statearr_28327_28383 = state_28300__$1;
(statearr_28327_28383[(2)] = inst_28274);

(statearr_28327_28383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (6))){
var state_28300__$1 = state_28300;
var statearr_28328_28384 = state_28300__$1;
(statearr_28328_28384[(2)] = false);

(statearr_28328_28384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (28))){
var inst_28270 = (state_28300[(2)]);
var inst_28271 = calc_state.call(null);
var inst_28228 = inst_28271;
var state_28300__$1 = (function (){var statearr_28329 = state_28300;
(statearr_28329[(15)] = inst_28270);

(statearr_28329[(7)] = inst_28228);

return statearr_28329;
})();
var statearr_28330_28385 = state_28300__$1;
(statearr_28330_28385[(2)] = null);

(statearr_28330_28385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (25))){
var inst_28296 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28331_28386 = state_28300__$1;
(statearr_28331_28386[(2)] = inst_28296);

(statearr_28331_28386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (34))){
var inst_28294 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28332_28387 = state_28300__$1;
(statearr_28332_28387[(2)] = inst_28294);

(statearr_28332_28387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (17))){
var state_28300__$1 = state_28300;
var statearr_28333_28388 = state_28300__$1;
(statearr_28333_28388[(2)] = false);

(statearr_28333_28388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (3))){
var state_28300__$1 = state_28300;
var statearr_28334_28389 = state_28300__$1;
(statearr_28334_28389[(2)] = false);

(statearr_28334_28389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (12))){
var inst_28298 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28300__$1,inst_28298);
} else {
if((state_val_28301 === (2))){
var inst_28204 = (state_28300[(8)]);
var inst_28209 = inst_28204.cljs$lang$protocol_mask$partition0$;
var inst_28210 = (inst_28209 & (64));
var inst_28211 = inst_28204.cljs$core$ISeq$;
var inst_28212 = (inst_28210) || (inst_28211);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28212)){
var statearr_28335_28390 = state_28300__$1;
(statearr_28335_28390[(1)] = (5));

} else {
var statearr_28336_28391 = state_28300__$1;
(statearr_28336_28391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (23))){
var inst_28259 = (state_28300[(14)]);
var inst_28265 = (inst_28259 == null);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28265)){
var statearr_28337_28392 = state_28300__$1;
(statearr_28337_28392[(1)] = (26));

} else {
var statearr_28338_28393 = state_28300__$1;
(statearr_28338_28393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (35))){
var inst_28285 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28285)){
var statearr_28339_28394 = state_28300__$1;
(statearr_28339_28394[(1)] = (36));

} else {
var statearr_28340_28395 = state_28300__$1;
(statearr_28340_28395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (19))){
var inst_28228 = (state_28300[(7)]);
var inst_28247 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28228);
var state_28300__$1 = state_28300;
var statearr_28341_28396 = state_28300__$1;
(statearr_28341_28396[(2)] = inst_28247);

(statearr_28341_28396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (11))){
var inst_28228 = (state_28300[(7)]);
var inst_28232 = (inst_28228 == null);
var inst_28233 = cljs.core.not.call(null,inst_28232);
var state_28300__$1 = state_28300;
if(inst_28233){
var statearr_28342_28397 = state_28300__$1;
(statearr_28342_28397[(1)] = (13));

} else {
var statearr_28343_28398 = state_28300__$1;
(statearr_28343_28398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (9))){
var inst_28204 = (state_28300[(8)]);
var state_28300__$1 = state_28300;
var statearr_28344_28399 = state_28300__$1;
(statearr_28344_28399[(2)] = inst_28204);

(statearr_28344_28399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (5))){
var state_28300__$1 = state_28300;
var statearr_28345_28400 = state_28300__$1;
(statearr_28345_28400[(2)] = true);

(statearr_28345_28400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (14))){
var state_28300__$1 = state_28300;
var statearr_28346_28401 = state_28300__$1;
(statearr_28346_28401[(2)] = false);

(statearr_28346_28401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (26))){
var inst_28260 = (state_28300[(9)]);
var inst_28267 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28260);
var state_28300__$1 = state_28300;
var statearr_28347_28402 = state_28300__$1;
(statearr_28347_28402[(2)] = inst_28267);

(statearr_28347_28402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (16))){
var state_28300__$1 = state_28300;
var statearr_28348_28403 = state_28300__$1;
(statearr_28348_28403[(2)] = true);

(statearr_28348_28403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (38))){
var inst_28290 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28349_28404 = state_28300__$1;
(statearr_28349_28404[(2)] = inst_28290);

(statearr_28349_28404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (30))){
var inst_28260 = (state_28300[(9)]);
var inst_28252 = (state_28300[(13)]);
var inst_28251 = (state_28300[(11)]);
var inst_28277 = cljs.core.empty_QMARK_.call(null,inst_28251);
var inst_28278 = inst_28252.call(null,inst_28260);
var inst_28279 = cljs.core.not.call(null,inst_28278);
var inst_28280 = (inst_28277) && (inst_28279);
var state_28300__$1 = state_28300;
var statearr_28350_28405 = state_28300__$1;
(statearr_28350_28405[(2)] = inst_28280);

(statearr_28350_28405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (10))){
var inst_28204 = (state_28300[(8)]);
var inst_28224 = (state_28300[(2)]);
var inst_28225 = cljs.core.get.call(null,inst_28224,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28226 = cljs.core.get.call(null,inst_28224,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28227 = cljs.core.get.call(null,inst_28224,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28228 = inst_28204;
var state_28300__$1 = (function (){var statearr_28351 = state_28300;
(statearr_28351[(16)] = inst_28225);

(statearr_28351[(17)] = inst_28227);

(statearr_28351[(7)] = inst_28228);

(statearr_28351[(18)] = inst_28226);

return statearr_28351;
})();
var statearr_28352_28406 = state_28300__$1;
(statearr_28352_28406[(2)] = null);

(statearr_28352_28406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (18))){
var inst_28242 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28353_28407 = state_28300__$1;
(statearr_28353_28407[(2)] = inst_28242);

(statearr_28353_28407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (37))){
var state_28300__$1 = state_28300;
var statearr_28354_28408 = state_28300__$1;
(statearr_28354_28408[(2)] = null);

(statearr_28354_28408[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (8))){
var inst_28204 = (state_28300[(8)]);
var inst_28221 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28204);
var state_28300__$1 = state_28300;
var statearr_28355_28409 = state_28300__$1;
(statearr_28355_28409[(2)] = inst_28221);

(statearr_28355_28409[(1)] = (10));


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
});})(c__26630__auto___28363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26518__auto__,c__26630__auto___28363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26519__auto__ = null;
var cljs$core$async$mix_$_state_machine__26519__auto____0 = (function (){
var statearr_28359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28359[(0)] = cljs$core$async$mix_$_state_machine__26519__auto__);

(statearr_28359[(1)] = (1));

return statearr_28359;
});
var cljs$core$async$mix_$_state_machine__26519__auto____1 = (function (state_28300){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_28300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e28360){if((e28360 instanceof Object)){
var ex__26522__auto__ = e28360;
var statearr_28361_28410 = state_28300;
(statearr_28361_28410[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28411 = state_28300;
state_28300 = G__28411;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26519__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26519__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26519__auto____0;
cljs$core$async$mix_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26519__auto____1;
return cljs$core$async$mix_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___28363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26632__auto__ = (function (){var statearr_28362 = f__26631__auto__.call(null);
(statearr_28362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___28363);

return statearr_28362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___28363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22707__auto__ = (((p == null))?null:p);
var m__22708__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22708__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22707__auto__ = (((p == null))?null:p);
var m__22708__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,p,v,ch);
} else {
var m__22708__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28412 = [];
var len__23119__auto___28415 = arguments.length;
var i__23120__auto___28416 = (0);
while(true){
if((i__23120__auto___28416 < len__23119__auto___28415)){
args28412.push((arguments[i__23120__auto___28416]));

var G__28417 = (i__23120__auto___28416 + (1));
i__23120__auto___28416 = G__28417;
continue;
} else {
}
break;
}

var G__28414 = args28412.length;
switch (G__28414) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28412.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22707__auto__ = (((p == null))?null:p);
var m__22708__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,p);
} else {
var m__22708__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22707__auto__ = (((p == null))?null:p);
var m__22708__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22707__auto__)]);
if(!((m__22708__auto__ == null))){
return m__22708__auto__.call(null,p,v);
} else {
var m__22708__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22708__auto____$1 == null))){
return m__22708__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var args28420 = [];
var len__23119__auto___28545 = arguments.length;
var i__23120__auto___28546 = (0);
while(true){
if((i__23120__auto___28546 < len__23119__auto___28545)){
args28420.push((arguments[i__23120__auto___28546]));

var G__28547 = (i__23120__auto___28546 + (1));
i__23120__auto___28546 = G__28547;
continue;
} else {
}
break;
}

var G__28422 = args28420.length;
switch (G__28422) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28420.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22044__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22044__auto__,mults){
return (function (p1__28419_SHARP_){
if(cljs.core.truth_(p1__28419_SHARP_.call(null,topic))){
return p1__28419_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28419_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22044__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28423 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28424){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28424 = meta28424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28425,meta28424__$1){
var self__ = this;
var _28425__$1 = this;
return (new cljs.core.async.t_cljs$core$async28423(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28424__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28425){
var self__ = this;
var _28425__$1 = this;
return self__.meta28424;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28423.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28424","meta28424",-392485533,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28423";

cljs.core.async.t_cljs$core$async28423.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async28423");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28423 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28423(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28424){
return (new cljs.core.async.t_cljs$core$async28423(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28424));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28423(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26630__auto___28549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___28549,mults,ensure_mult,p){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___28549,mults,ensure_mult,p){
return (function (state_28497){
var state_val_28498 = (state_28497[(1)]);
if((state_val_28498 === (7))){
var inst_28493 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28499_28550 = state_28497__$1;
(statearr_28499_28550[(2)] = inst_28493);

(statearr_28499_28550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (20))){
var state_28497__$1 = state_28497;
var statearr_28500_28551 = state_28497__$1;
(statearr_28500_28551[(2)] = null);

(statearr_28500_28551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (1))){
var state_28497__$1 = state_28497;
var statearr_28501_28552 = state_28497__$1;
(statearr_28501_28552[(2)] = null);

(statearr_28501_28552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (24))){
var inst_28476 = (state_28497[(7)]);
var inst_28485 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28476);
var state_28497__$1 = state_28497;
var statearr_28502_28553 = state_28497__$1;
(statearr_28502_28553[(2)] = inst_28485);

(statearr_28502_28553[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (4))){
var inst_28428 = (state_28497[(8)]);
var inst_28428__$1 = (state_28497[(2)]);
var inst_28429 = (inst_28428__$1 == null);
var state_28497__$1 = (function (){var statearr_28503 = state_28497;
(statearr_28503[(8)] = inst_28428__$1);

return statearr_28503;
})();
if(cljs.core.truth_(inst_28429)){
var statearr_28504_28554 = state_28497__$1;
(statearr_28504_28554[(1)] = (5));

} else {
var statearr_28505_28555 = state_28497__$1;
(statearr_28505_28555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (15))){
var inst_28470 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28506_28556 = state_28497__$1;
(statearr_28506_28556[(2)] = inst_28470);

(statearr_28506_28556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (21))){
var inst_28490 = (state_28497[(2)]);
var state_28497__$1 = (function (){var statearr_28507 = state_28497;
(statearr_28507[(9)] = inst_28490);

return statearr_28507;
})();
var statearr_28508_28557 = state_28497__$1;
(statearr_28508_28557[(2)] = null);

(statearr_28508_28557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (13))){
var inst_28452 = (state_28497[(10)]);
var inst_28454 = cljs.core.chunked_seq_QMARK_.call(null,inst_28452);
var state_28497__$1 = state_28497;
if(inst_28454){
var statearr_28509_28558 = state_28497__$1;
(statearr_28509_28558[(1)] = (16));

} else {
var statearr_28510_28559 = state_28497__$1;
(statearr_28510_28559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (22))){
var inst_28482 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
if(cljs.core.truth_(inst_28482)){
var statearr_28511_28560 = state_28497__$1;
(statearr_28511_28560[(1)] = (23));

} else {
var statearr_28512_28561 = state_28497__$1;
(statearr_28512_28561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (6))){
var inst_28428 = (state_28497[(8)]);
var inst_28476 = (state_28497[(7)]);
var inst_28478 = (state_28497[(11)]);
var inst_28476__$1 = topic_fn.call(null,inst_28428);
var inst_28477 = cljs.core.deref.call(null,mults);
var inst_28478__$1 = cljs.core.get.call(null,inst_28477,inst_28476__$1);
var state_28497__$1 = (function (){var statearr_28513 = state_28497;
(statearr_28513[(7)] = inst_28476__$1);

(statearr_28513[(11)] = inst_28478__$1);

return statearr_28513;
})();
if(cljs.core.truth_(inst_28478__$1)){
var statearr_28514_28562 = state_28497__$1;
(statearr_28514_28562[(1)] = (19));

} else {
var statearr_28515_28563 = state_28497__$1;
(statearr_28515_28563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (25))){
var inst_28487 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28516_28564 = state_28497__$1;
(statearr_28516_28564[(2)] = inst_28487);

(statearr_28516_28564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (17))){
var inst_28452 = (state_28497[(10)]);
var inst_28461 = cljs.core.first.call(null,inst_28452);
var inst_28462 = cljs.core.async.muxch_STAR_.call(null,inst_28461);
var inst_28463 = cljs.core.async.close_BANG_.call(null,inst_28462);
var inst_28464 = cljs.core.next.call(null,inst_28452);
var inst_28438 = inst_28464;
var inst_28439 = null;
var inst_28440 = (0);
var inst_28441 = (0);
var state_28497__$1 = (function (){var statearr_28517 = state_28497;
(statearr_28517[(12)] = inst_28463);

(statearr_28517[(13)] = inst_28440);

(statearr_28517[(14)] = inst_28439);

(statearr_28517[(15)] = inst_28441);

(statearr_28517[(16)] = inst_28438);

return statearr_28517;
})();
var statearr_28518_28565 = state_28497__$1;
(statearr_28518_28565[(2)] = null);

(statearr_28518_28565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (3))){
var inst_28495 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28497__$1,inst_28495);
} else {
if((state_val_28498 === (12))){
var inst_28472 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28519_28566 = state_28497__$1;
(statearr_28519_28566[(2)] = inst_28472);

(statearr_28519_28566[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (2))){
var state_28497__$1 = state_28497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28497__$1,(4),ch);
} else {
if((state_val_28498 === (23))){
var state_28497__$1 = state_28497;
var statearr_28520_28567 = state_28497__$1;
(statearr_28520_28567[(2)] = null);

(statearr_28520_28567[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (19))){
var inst_28428 = (state_28497[(8)]);
var inst_28478 = (state_28497[(11)]);
var inst_28480 = cljs.core.async.muxch_STAR_.call(null,inst_28478);
var state_28497__$1 = state_28497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28497__$1,(22),inst_28480,inst_28428);
} else {
if((state_val_28498 === (11))){
var inst_28452 = (state_28497[(10)]);
var inst_28438 = (state_28497[(16)]);
var inst_28452__$1 = cljs.core.seq.call(null,inst_28438);
var state_28497__$1 = (function (){var statearr_28521 = state_28497;
(statearr_28521[(10)] = inst_28452__$1);

return statearr_28521;
})();
if(inst_28452__$1){
var statearr_28522_28568 = state_28497__$1;
(statearr_28522_28568[(1)] = (13));

} else {
var statearr_28523_28569 = state_28497__$1;
(statearr_28523_28569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (9))){
var inst_28474 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28524_28570 = state_28497__$1;
(statearr_28524_28570[(2)] = inst_28474);

(statearr_28524_28570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (5))){
var inst_28435 = cljs.core.deref.call(null,mults);
var inst_28436 = cljs.core.vals.call(null,inst_28435);
var inst_28437 = cljs.core.seq.call(null,inst_28436);
var inst_28438 = inst_28437;
var inst_28439 = null;
var inst_28440 = (0);
var inst_28441 = (0);
var state_28497__$1 = (function (){var statearr_28525 = state_28497;
(statearr_28525[(13)] = inst_28440);

(statearr_28525[(14)] = inst_28439);

(statearr_28525[(15)] = inst_28441);

(statearr_28525[(16)] = inst_28438);

return statearr_28525;
})();
var statearr_28526_28571 = state_28497__$1;
(statearr_28526_28571[(2)] = null);

(statearr_28526_28571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (14))){
var state_28497__$1 = state_28497;
var statearr_28530_28572 = state_28497__$1;
(statearr_28530_28572[(2)] = null);

(statearr_28530_28572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (16))){
var inst_28452 = (state_28497[(10)]);
var inst_28456 = cljs.core.chunk_first.call(null,inst_28452);
var inst_28457 = cljs.core.chunk_rest.call(null,inst_28452);
var inst_28458 = cljs.core.count.call(null,inst_28456);
var inst_28438 = inst_28457;
var inst_28439 = inst_28456;
var inst_28440 = inst_28458;
var inst_28441 = (0);
var state_28497__$1 = (function (){var statearr_28531 = state_28497;
(statearr_28531[(13)] = inst_28440);

(statearr_28531[(14)] = inst_28439);

(statearr_28531[(15)] = inst_28441);

(statearr_28531[(16)] = inst_28438);

return statearr_28531;
})();
var statearr_28532_28573 = state_28497__$1;
(statearr_28532_28573[(2)] = null);

(statearr_28532_28573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (10))){
var inst_28440 = (state_28497[(13)]);
var inst_28439 = (state_28497[(14)]);
var inst_28441 = (state_28497[(15)]);
var inst_28438 = (state_28497[(16)]);
var inst_28446 = cljs.core._nth.call(null,inst_28439,inst_28441);
var inst_28447 = cljs.core.async.muxch_STAR_.call(null,inst_28446);
var inst_28448 = cljs.core.async.close_BANG_.call(null,inst_28447);
var inst_28449 = (inst_28441 + (1));
var tmp28527 = inst_28440;
var tmp28528 = inst_28439;
var tmp28529 = inst_28438;
var inst_28438__$1 = tmp28529;
var inst_28439__$1 = tmp28528;
var inst_28440__$1 = tmp28527;
var inst_28441__$1 = inst_28449;
var state_28497__$1 = (function (){var statearr_28533 = state_28497;
(statearr_28533[(13)] = inst_28440__$1);

(statearr_28533[(14)] = inst_28439__$1);

(statearr_28533[(17)] = inst_28448);

(statearr_28533[(15)] = inst_28441__$1);

(statearr_28533[(16)] = inst_28438__$1);

return statearr_28533;
})();
var statearr_28534_28574 = state_28497__$1;
(statearr_28534_28574[(2)] = null);

(statearr_28534_28574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (18))){
var inst_28467 = (state_28497[(2)]);
var state_28497__$1 = state_28497;
var statearr_28535_28575 = state_28497__$1;
(statearr_28535_28575[(2)] = inst_28467);

(statearr_28535_28575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28498 === (8))){
var inst_28440 = (state_28497[(13)]);
var inst_28441 = (state_28497[(15)]);
var inst_28443 = (inst_28441 < inst_28440);
var inst_28444 = inst_28443;
var state_28497__$1 = state_28497;
if(cljs.core.truth_(inst_28444)){
var statearr_28536_28576 = state_28497__$1;
(statearr_28536_28576[(1)] = (10));

} else {
var statearr_28537_28577 = state_28497__$1;
(statearr_28537_28577[(1)] = (11));

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
});})(c__26630__auto___28549,mults,ensure_mult,p))
;
return ((function (switch__26518__auto__,c__26630__auto___28549,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_28541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28541[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_28541[(1)] = (1));

return statearr_28541;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_28497){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_28497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e28542){if((e28542 instanceof Object)){
var ex__26522__auto__ = e28542;
var statearr_28543_28578 = state_28497;
(statearr_28543_28578[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28579 = state_28497;
state_28497 = G__28579;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_28497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_28497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___28549,mults,ensure_mult,p))
})();
var state__26632__auto__ = (function (){var statearr_28544 = f__26631__auto__.call(null);
(statearr_28544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___28549);

return statearr_28544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___28549,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28580 = [];
var len__23119__auto___28583 = arguments.length;
var i__23120__auto___28584 = (0);
while(true){
if((i__23120__auto___28584 < len__23119__auto___28583)){
args28580.push((arguments[i__23120__auto___28584]));

var G__28585 = (i__23120__auto___28584 + (1));
i__23120__auto___28584 = G__28585;
continue;
} else {
}
break;
}

var G__28582 = args28580.length;
switch (G__28582) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28580.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28587 = [];
var len__23119__auto___28590 = arguments.length;
var i__23120__auto___28591 = (0);
while(true){
if((i__23120__auto___28591 < len__23119__auto___28590)){
args28587.push((arguments[i__23120__auto___28591]));

var G__28592 = (i__23120__auto___28591 + (1));
i__23120__auto___28591 = G__28592;
continue;
} else {
}
break;
}

var G__28589 = args28587.length;
switch (G__28589) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28587.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var args28594 = [];
var len__23119__auto___28665 = arguments.length;
var i__23120__auto___28666 = (0);
while(true){
if((i__23120__auto___28666 < len__23119__auto___28665)){
args28594.push((arguments[i__23120__auto___28666]));

var G__28667 = (i__23120__auto___28666 + (1));
i__23120__auto___28666 = G__28667;
continue;
} else {
}
break;
}

var G__28596 = args28594.length;
switch (G__28596) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28594.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26630__auto___28669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___28669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___28669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28635){
var state_val_28636 = (state_28635[(1)]);
if((state_val_28636 === (7))){
var state_28635__$1 = state_28635;
var statearr_28637_28670 = state_28635__$1;
(statearr_28637_28670[(2)] = null);

(statearr_28637_28670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (1))){
var state_28635__$1 = state_28635;
var statearr_28638_28671 = state_28635__$1;
(statearr_28638_28671[(2)] = null);

(statearr_28638_28671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (4))){
var inst_28599 = (state_28635[(7)]);
var inst_28601 = (inst_28599 < cnt);
var state_28635__$1 = state_28635;
if(cljs.core.truth_(inst_28601)){
var statearr_28639_28672 = state_28635__$1;
(statearr_28639_28672[(1)] = (6));

} else {
var statearr_28640_28673 = state_28635__$1;
(statearr_28640_28673[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (15))){
var inst_28631 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28641_28674 = state_28635__$1;
(statearr_28641_28674[(2)] = inst_28631);

(statearr_28641_28674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (13))){
var inst_28624 = cljs.core.async.close_BANG_.call(null,out);
var state_28635__$1 = state_28635;
var statearr_28642_28675 = state_28635__$1;
(statearr_28642_28675[(2)] = inst_28624);

(statearr_28642_28675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (6))){
var state_28635__$1 = state_28635;
var statearr_28643_28676 = state_28635__$1;
(statearr_28643_28676[(2)] = null);

(statearr_28643_28676[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (3))){
var inst_28633 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28635__$1,inst_28633);
} else {
if((state_val_28636 === (12))){
var inst_28621 = (state_28635[(8)]);
var inst_28621__$1 = (state_28635[(2)]);
var inst_28622 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28621__$1);
var state_28635__$1 = (function (){var statearr_28644 = state_28635;
(statearr_28644[(8)] = inst_28621__$1);

return statearr_28644;
})();
if(cljs.core.truth_(inst_28622)){
var statearr_28645_28677 = state_28635__$1;
(statearr_28645_28677[(1)] = (13));

} else {
var statearr_28646_28678 = state_28635__$1;
(statearr_28646_28678[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (2))){
var inst_28598 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28599 = (0);
var state_28635__$1 = (function (){var statearr_28647 = state_28635;
(statearr_28647[(7)] = inst_28599);

(statearr_28647[(9)] = inst_28598);

return statearr_28647;
})();
var statearr_28648_28679 = state_28635__$1;
(statearr_28648_28679[(2)] = null);

(statearr_28648_28679[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (11))){
var inst_28599 = (state_28635[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28635,(10),Object,null,(9));
var inst_28608 = chs__$1.call(null,inst_28599);
var inst_28609 = done.call(null,inst_28599);
var inst_28610 = cljs.core.async.take_BANG_.call(null,inst_28608,inst_28609);
var state_28635__$1 = state_28635;
var statearr_28649_28680 = state_28635__$1;
(statearr_28649_28680[(2)] = inst_28610);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28635__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (9))){
var inst_28599 = (state_28635[(7)]);
var inst_28612 = (state_28635[(2)]);
var inst_28613 = (inst_28599 + (1));
var inst_28599__$1 = inst_28613;
var state_28635__$1 = (function (){var statearr_28650 = state_28635;
(statearr_28650[(10)] = inst_28612);

(statearr_28650[(7)] = inst_28599__$1);

return statearr_28650;
})();
var statearr_28651_28681 = state_28635__$1;
(statearr_28651_28681[(2)] = null);

(statearr_28651_28681[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (5))){
var inst_28619 = (state_28635[(2)]);
var state_28635__$1 = (function (){var statearr_28652 = state_28635;
(statearr_28652[(11)] = inst_28619);

return statearr_28652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28635__$1,(12),dchan);
} else {
if((state_val_28636 === (14))){
var inst_28621 = (state_28635[(8)]);
var inst_28626 = cljs.core.apply.call(null,f,inst_28621);
var state_28635__$1 = state_28635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28635__$1,(16),out,inst_28626);
} else {
if((state_val_28636 === (16))){
var inst_28628 = (state_28635[(2)]);
var state_28635__$1 = (function (){var statearr_28653 = state_28635;
(statearr_28653[(12)] = inst_28628);

return statearr_28653;
})();
var statearr_28654_28682 = state_28635__$1;
(statearr_28654_28682[(2)] = null);

(statearr_28654_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (10))){
var inst_28603 = (state_28635[(2)]);
var inst_28604 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28635__$1 = (function (){var statearr_28655 = state_28635;
(statearr_28655[(13)] = inst_28603);

return statearr_28655;
})();
var statearr_28656_28683 = state_28635__$1;
(statearr_28656_28683[(2)] = inst_28604);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28635__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28636 === (8))){
var inst_28617 = (state_28635[(2)]);
var state_28635__$1 = state_28635;
var statearr_28657_28684 = state_28635__$1;
(statearr_28657_28684[(2)] = inst_28617);

(statearr_28657_28684[(1)] = (5));


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
});})(c__26630__auto___28669,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26518__auto__,c__26630__auto___28669,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_28661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28661[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_28661[(1)] = (1));

return statearr_28661;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_28635){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_28635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e28662){if((e28662 instanceof Object)){
var ex__26522__auto__ = e28662;
var statearr_28663_28685 = state_28635;
(statearr_28663_28685[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28686 = state_28635;
state_28635 = G__28686;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_28635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_28635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___28669,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26632__auto__ = (function (){var statearr_28664 = f__26631__auto__.call(null);
(statearr_28664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___28669);

return statearr_28664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___28669,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28688 = [];
var len__23119__auto___28746 = arguments.length;
var i__23120__auto___28747 = (0);
while(true){
if((i__23120__auto___28747 < len__23119__auto___28746)){
args28688.push((arguments[i__23120__auto___28747]));

var G__28748 = (i__23120__auto___28747 + (1));
i__23120__auto___28747 = G__28748;
continue;
} else {
}
break;
}

var G__28690 = args28688.length;
switch (G__28690) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28688.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26630__auto___28750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___28750,out){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___28750,out){
return (function (state_28722){
var state_val_28723 = (state_28722[(1)]);
if((state_val_28723 === (7))){
var inst_28702 = (state_28722[(7)]);
var inst_28701 = (state_28722[(8)]);
var inst_28701__$1 = (state_28722[(2)]);
var inst_28702__$1 = cljs.core.nth.call(null,inst_28701__$1,(0),null);
var inst_28703 = cljs.core.nth.call(null,inst_28701__$1,(1),null);
var inst_28704 = (inst_28702__$1 == null);
var state_28722__$1 = (function (){var statearr_28724 = state_28722;
(statearr_28724[(7)] = inst_28702__$1);

(statearr_28724[(8)] = inst_28701__$1);

(statearr_28724[(9)] = inst_28703);

return statearr_28724;
})();
if(cljs.core.truth_(inst_28704)){
var statearr_28725_28751 = state_28722__$1;
(statearr_28725_28751[(1)] = (8));

} else {
var statearr_28726_28752 = state_28722__$1;
(statearr_28726_28752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (1))){
var inst_28691 = cljs.core.vec.call(null,chs);
var inst_28692 = inst_28691;
var state_28722__$1 = (function (){var statearr_28727 = state_28722;
(statearr_28727[(10)] = inst_28692);

return statearr_28727;
})();
var statearr_28728_28753 = state_28722__$1;
(statearr_28728_28753[(2)] = null);

(statearr_28728_28753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (4))){
var inst_28692 = (state_28722[(10)]);
var state_28722__$1 = state_28722;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28722__$1,(7),inst_28692);
} else {
if((state_val_28723 === (6))){
var inst_28718 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28729_28754 = state_28722__$1;
(statearr_28729_28754[(2)] = inst_28718);

(statearr_28729_28754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (3))){
var inst_28720 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28722__$1,inst_28720);
} else {
if((state_val_28723 === (2))){
var inst_28692 = (state_28722[(10)]);
var inst_28694 = cljs.core.count.call(null,inst_28692);
var inst_28695 = (inst_28694 > (0));
var state_28722__$1 = state_28722;
if(cljs.core.truth_(inst_28695)){
var statearr_28731_28755 = state_28722__$1;
(statearr_28731_28755[(1)] = (4));

} else {
var statearr_28732_28756 = state_28722__$1;
(statearr_28732_28756[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (11))){
var inst_28692 = (state_28722[(10)]);
var inst_28711 = (state_28722[(2)]);
var tmp28730 = inst_28692;
var inst_28692__$1 = tmp28730;
var state_28722__$1 = (function (){var statearr_28733 = state_28722;
(statearr_28733[(10)] = inst_28692__$1);

(statearr_28733[(11)] = inst_28711);

return statearr_28733;
})();
var statearr_28734_28757 = state_28722__$1;
(statearr_28734_28757[(2)] = null);

(statearr_28734_28757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (9))){
var inst_28702 = (state_28722[(7)]);
var state_28722__$1 = state_28722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28722__$1,(11),out,inst_28702);
} else {
if((state_val_28723 === (5))){
var inst_28716 = cljs.core.async.close_BANG_.call(null,out);
var state_28722__$1 = state_28722;
var statearr_28735_28758 = state_28722__$1;
(statearr_28735_28758[(2)] = inst_28716);

(statearr_28735_28758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (10))){
var inst_28714 = (state_28722[(2)]);
var state_28722__$1 = state_28722;
var statearr_28736_28759 = state_28722__$1;
(statearr_28736_28759[(2)] = inst_28714);

(statearr_28736_28759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28723 === (8))){
var inst_28702 = (state_28722[(7)]);
var inst_28701 = (state_28722[(8)]);
var inst_28692 = (state_28722[(10)]);
var inst_28703 = (state_28722[(9)]);
var inst_28706 = (function (){var cs = inst_28692;
var vec__28697 = inst_28701;
var v = inst_28702;
var c = inst_28703;
return ((function (cs,vec__28697,v,c,inst_28702,inst_28701,inst_28692,inst_28703,state_val_28723,c__26630__auto___28750,out){
return (function (p1__28687_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28687_SHARP_);
});
;})(cs,vec__28697,v,c,inst_28702,inst_28701,inst_28692,inst_28703,state_val_28723,c__26630__auto___28750,out))
})();
var inst_28707 = cljs.core.filterv.call(null,inst_28706,inst_28692);
var inst_28692__$1 = inst_28707;
var state_28722__$1 = (function (){var statearr_28737 = state_28722;
(statearr_28737[(10)] = inst_28692__$1);

return statearr_28737;
})();
var statearr_28738_28760 = state_28722__$1;
(statearr_28738_28760[(2)] = null);

(statearr_28738_28760[(1)] = (2));


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
});})(c__26630__auto___28750,out))
;
return ((function (switch__26518__auto__,c__26630__auto___28750,out){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_28742 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28742[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_28742[(1)] = (1));

return statearr_28742;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_28722){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_28722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e28743){if((e28743 instanceof Object)){
var ex__26522__auto__ = e28743;
var statearr_28744_28761 = state_28722;
(statearr_28744_28761[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28762 = state_28722;
state_28722 = G__28762;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_28722){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_28722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___28750,out))
})();
var state__26632__auto__ = (function (){var statearr_28745 = f__26631__auto__.call(null);
(statearr_28745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___28750);

return statearr_28745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___28750,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28763 = [];
var len__23119__auto___28812 = arguments.length;
var i__23120__auto___28813 = (0);
while(true){
if((i__23120__auto___28813 < len__23119__auto___28812)){
args28763.push((arguments[i__23120__auto___28813]));

var G__28814 = (i__23120__auto___28813 + (1));
i__23120__auto___28813 = G__28814;
continue;
} else {
}
break;
}

var G__28765 = args28763.length;
switch (G__28765) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28763.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26630__auto___28816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___28816,out){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___28816,out){
return (function (state_28789){
var state_val_28790 = (state_28789[(1)]);
if((state_val_28790 === (7))){
var inst_28771 = (state_28789[(7)]);
var inst_28771__$1 = (state_28789[(2)]);
var inst_28772 = (inst_28771__$1 == null);
var inst_28773 = cljs.core.not.call(null,inst_28772);
var state_28789__$1 = (function (){var statearr_28791 = state_28789;
(statearr_28791[(7)] = inst_28771__$1);

return statearr_28791;
})();
if(inst_28773){
var statearr_28792_28817 = state_28789__$1;
(statearr_28792_28817[(1)] = (8));

} else {
var statearr_28793_28818 = state_28789__$1;
(statearr_28793_28818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (1))){
var inst_28766 = (0);
var state_28789__$1 = (function (){var statearr_28794 = state_28789;
(statearr_28794[(8)] = inst_28766);

return statearr_28794;
})();
var statearr_28795_28819 = state_28789__$1;
(statearr_28795_28819[(2)] = null);

(statearr_28795_28819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (4))){
var state_28789__$1 = state_28789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28789__$1,(7),ch);
} else {
if((state_val_28790 === (6))){
var inst_28784 = (state_28789[(2)]);
var state_28789__$1 = state_28789;
var statearr_28796_28820 = state_28789__$1;
(statearr_28796_28820[(2)] = inst_28784);

(statearr_28796_28820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (3))){
var inst_28786 = (state_28789[(2)]);
var inst_28787 = cljs.core.async.close_BANG_.call(null,out);
var state_28789__$1 = (function (){var statearr_28797 = state_28789;
(statearr_28797[(9)] = inst_28786);

return statearr_28797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28789__$1,inst_28787);
} else {
if((state_val_28790 === (2))){
var inst_28766 = (state_28789[(8)]);
var inst_28768 = (inst_28766 < n);
var state_28789__$1 = state_28789;
if(cljs.core.truth_(inst_28768)){
var statearr_28798_28821 = state_28789__$1;
(statearr_28798_28821[(1)] = (4));

} else {
var statearr_28799_28822 = state_28789__$1;
(statearr_28799_28822[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (11))){
var inst_28766 = (state_28789[(8)]);
var inst_28776 = (state_28789[(2)]);
var inst_28777 = (inst_28766 + (1));
var inst_28766__$1 = inst_28777;
var state_28789__$1 = (function (){var statearr_28800 = state_28789;
(statearr_28800[(10)] = inst_28776);

(statearr_28800[(8)] = inst_28766__$1);

return statearr_28800;
})();
var statearr_28801_28823 = state_28789__$1;
(statearr_28801_28823[(2)] = null);

(statearr_28801_28823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (9))){
var state_28789__$1 = state_28789;
var statearr_28802_28824 = state_28789__$1;
(statearr_28802_28824[(2)] = null);

(statearr_28802_28824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (5))){
var state_28789__$1 = state_28789;
var statearr_28803_28825 = state_28789__$1;
(statearr_28803_28825[(2)] = null);

(statearr_28803_28825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (10))){
var inst_28781 = (state_28789[(2)]);
var state_28789__$1 = state_28789;
var statearr_28804_28826 = state_28789__$1;
(statearr_28804_28826[(2)] = inst_28781);

(statearr_28804_28826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28790 === (8))){
var inst_28771 = (state_28789[(7)]);
var state_28789__$1 = state_28789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28789__$1,(11),out,inst_28771);
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
});})(c__26630__auto___28816,out))
;
return ((function (switch__26518__auto__,c__26630__auto___28816,out){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_28808 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28808[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_28808[(1)] = (1));

return statearr_28808;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_28789){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_28789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e28809){if((e28809 instanceof Object)){
var ex__26522__auto__ = e28809;
var statearr_28810_28827 = state_28789;
(statearr_28810_28827[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28828 = state_28789;
state_28789 = G__28828;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_28789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_28789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___28816,out))
})();
var state__26632__auto__ = (function (){var statearr_28811 = f__26631__auto__.call(null);
(statearr_28811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___28816);

return statearr_28811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___28816,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28836 = (function (map_LT_,f,ch,meta28837){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28837 = meta28837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28838,meta28837__$1){
var self__ = this;
var _28838__$1 = this;
return (new cljs.core.async.t_cljs$core$async28836(self__.map_LT_,self__.f,self__.ch,meta28837__$1));
});

cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28838){
var self__ = this;
var _28838__$1 = this;
return self__.meta28837;
});

cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28839 = (function (map_LT_,f,ch,meta28837,_,fn1,meta28840){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28837 = meta28837;
this._ = _;
this.fn1 = fn1;
this.meta28840 = meta28840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28841,meta28840__$1){
var self__ = this;
var _28841__$1 = this;
return (new cljs.core.async.t_cljs$core$async28839(self__.map_LT_,self__.f,self__.ch,self__.meta28837,self__._,self__.fn1,meta28840__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28841){
var self__ = this;
var _28841__$1 = this;
return self__.meta28840;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28839.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28839.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28839.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28839.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28829_SHARP_){
return f1.call(null,(((p1__28829_SHARP_ == null))?null:self__.f.call(null,p1__28829_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28839.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28837","meta28837",1797668275,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28836","cljs.core.async/t_cljs$core$async28836",1908516141,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28840","meta28840",1846117362,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28839";

cljs.core.async.t_cljs$core$async28839.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async28839");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28839 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28839(map_LT___$1,f__$1,ch__$1,meta28837__$1,___$2,fn1__$1,meta28840){
return (new cljs.core.async.t_cljs$core$async28839(map_LT___$1,f__$1,ch__$1,meta28837__$1,___$2,fn1__$1,meta28840));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28839(self__.map_LT_,self__.f,self__.ch,self__.meta28837,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22032__auto__ = ret;
if(cljs.core.truth_(and__22032__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22032__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28836.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28837","meta28837",1797668275,null)], null);
});

cljs.core.async.t_cljs$core$async28836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28836";

cljs.core.async.t_cljs$core$async28836.cljs$lang$ctorPrWriter = (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async28836");
});

cljs.core.async.__GT_t_cljs$core$async28836 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28836(map_LT___$1,f__$1,ch__$1,meta28837){
return (new cljs.core.async.t_cljs$core$async28836(map_LT___$1,f__$1,ch__$1,meta28837));
});

}

return (new cljs.core.async.t_cljs$core$async28836(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28845 = (function (map_GT_,f,ch,meta28846){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28846 = meta28846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28847,meta28846__$1){
var self__ = this;
var _28847__$1 = this;
return (new cljs.core.async.t_cljs$core$async28845(self__.map_GT_,self__.f,self__.ch,meta28846__$1));
});

cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28847){
var self__ = this;
var _28847__$1 = this;
return self__.meta28846;
});

cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28846","meta28846",-35939952,null)], null);
});

cljs.core.async.t_cljs$core$async28845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28845";

cljs.core.async.t_cljs$core$async28845.cljs$lang$ctorPrWriter = (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async28845");
});

cljs.core.async.__GT_t_cljs$core$async28845 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28845(map_GT___$1,f__$1,ch__$1,meta28846){
return (new cljs.core.async.t_cljs$core$async28845(map_GT___$1,f__$1,ch__$1,meta28846));
});

}

return (new cljs.core.async.t_cljs$core$async28845(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28851 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28851 = (function (filter_GT_,p,ch,meta28852){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28852 = meta28852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28853,meta28852__$1){
var self__ = this;
var _28853__$1 = this;
return (new cljs.core.async.t_cljs$core$async28851(self__.filter_GT_,self__.p,self__.ch,meta28852__$1));
});

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28853){
var self__ = this;
var _28853__$1 = this;
return self__.meta28852;
});

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28851.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28852","meta28852",674953022,null)], null);
});

cljs.core.async.t_cljs$core$async28851.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28851";

cljs.core.async.t_cljs$core$async28851.cljs$lang$ctorPrWriter = (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.core.async/t_cljs$core$async28851");
});

cljs.core.async.__GT_t_cljs$core$async28851 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28851(filter_GT___$1,p__$1,ch__$1,meta28852){
return (new cljs.core.async.t_cljs$core$async28851(filter_GT___$1,p__$1,ch__$1,meta28852));
});

}

return (new cljs.core.async.t_cljs$core$async28851(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28854 = [];
var len__23119__auto___28898 = arguments.length;
var i__23120__auto___28899 = (0);
while(true){
if((i__23120__auto___28899 < len__23119__auto___28898)){
args28854.push((arguments[i__23120__auto___28899]));

var G__28900 = (i__23120__auto___28899 + (1));
i__23120__auto___28899 = G__28900;
continue;
} else {
}
break;
}

var G__28856 = args28854.length;
switch (G__28856) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28854.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26630__auto___28902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___28902,out){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___28902,out){
return (function (state_28877){
var state_val_28878 = (state_28877[(1)]);
if((state_val_28878 === (7))){
var inst_28873 = (state_28877[(2)]);
var state_28877__$1 = state_28877;
var statearr_28879_28903 = state_28877__$1;
(statearr_28879_28903[(2)] = inst_28873);

(statearr_28879_28903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (1))){
var state_28877__$1 = state_28877;
var statearr_28880_28904 = state_28877__$1;
(statearr_28880_28904[(2)] = null);

(statearr_28880_28904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (4))){
var inst_28859 = (state_28877[(7)]);
var inst_28859__$1 = (state_28877[(2)]);
var inst_28860 = (inst_28859__$1 == null);
var state_28877__$1 = (function (){var statearr_28881 = state_28877;
(statearr_28881[(7)] = inst_28859__$1);

return statearr_28881;
})();
if(cljs.core.truth_(inst_28860)){
var statearr_28882_28905 = state_28877__$1;
(statearr_28882_28905[(1)] = (5));

} else {
var statearr_28883_28906 = state_28877__$1;
(statearr_28883_28906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (6))){
var inst_28859 = (state_28877[(7)]);
var inst_28864 = p.call(null,inst_28859);
var state_28877__$1 = state_28877;
if(cljs.core.truth_(inst_28864)){
var statearr_28884_28907 = state_28877__$1;
(statearr_28884_28907[(1)] = (8));

} else {
var statearr_28885_28908 = state_28877__$1;
(statearr_28885_28908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (3))){
var inst_28875 = (state_28877[(2)]);
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28877__$1,inst_28875);
} else {
if((state_val_28878 === (2))){
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28877__$1,(4),ch);
} else {
if((state_val_28878 === (11))){
var inst_28867 = (state_28877[(2)]);
var state_28877__$1 = state_28877;
var statearr_28886_28909 = state_28877__$1;
(statearr_28886_28909[(2)] = inst_28867);

(statearr_28886_28909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (9))){
var state_28877__$1 = state_28877;
var statearr_28887_28910 = state_28877__$1;
(statearr_28887_28910[(2)] = null);

(statearr_28887_28910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (5))){
var inst_28862 = cljs.core.async.close_BANG_.call(null,out);
var state_28877__$1 = state_28877;
var statearr_28888_28911 = state_28877__$1;
(statearr_28888_28911[(2)] = inst_28862);

(statearr_28888_28911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (10))){
var inst_28870 = (state_28877[(2)]);
var state_28877__$1 = (function (){var statearr_28889 = state_28877;
(statearr_28889[(8)] = inst_28870);

return statearr_28889;
})();
var statearr_28890_28912 = state_28877__$1;
(statearr_28890_28912[(2)] = null);

(statearr_28890_28912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28878 === (8))){
var inst_28859 = (state_28877[(7)]);
var state_28877__$1 = state_28877;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28877__$1,(11),out,inst_28859);
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
});})(c__26630__auto___28902,out))
;
return ((function (switch__26518__auto__,c__26630__auto___28902,out){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_28894 = [null,null,null,null,null,null,null,null,null];
(statearr_28894[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_28894[(1)] = (1));

return statearr_28894;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_28877){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_28877);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e28895){if((e28895 instanceof Object)){
var ex__26522__auto__ = e28895;
var statearr_28896_28913 = state_28877;
(statearr_28896_28913[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28877);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28877;
state_28877 = G__28914;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_28877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_28877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___28902,out))
})();
var state__26632__auto__ = (function (){var statearr_28897 = f__26631__auto__.call(null);
(statearr_28897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___28902);

return statearr_28897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___28902,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28915 = [];
var len__23119__auto___28918 = arguments.length;
var i__23120__auto___28919 = (0);
while(true){
if((i__23120__auto___28919 < len__23119__auto___28918)){
args28915.push((arguments[i__23120__auto___28919]));

var G__28920 = (i__23120__auto___28919 + (1));
i__23120__auto___28919 = G__28920;
continue;
} else {
}
break;
}

var G__28917 = args28915.length;
switch (G__28917) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28915.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__){
return (function (state_29087){
var state_val_29088 = (state_29087[(1)]);
if((state_val_29088 === (7))){
var inst_29083 = (state_29087[(2)]);
var state_29087__$1 = state_29087;
var statearr_29089_29130 = state_29087__$1;
(statearr_29089_29130[(2)] = inst_29083);

(statearr_29089_29130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (20))){
var inst_29053 = (state_29087[(7)]);
var inst_29064 = (state_29087[(2)]);
var inst_29065 = cljs.core.next.call(null,inst_29053);
var inst_29039 = inst_29065;
var inst_29040 = null;
var inst_29041 = (0);
var inst_29042 = (0);
var state_29087__$1 = (function (){var statearr_29090 = state_29087;
(statearr_29090[(8)] = inst_29064);

(statearr_29090[(9)] = inst_29039);

(statearr_29090[(10)] = inst_29041);

(statearr_29090[(11)] = inst_29040);

(statearr_29090[(12)] = inst_29042);

return statearr_29090;
})();
var statearr_29091_29131 = state_29087__$1;
(statearr_29091_29131[(2)] = null);

(statearr_29091_29131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (1))){
var state_29087__$1 = state_29087;
var statearr_29092_29132 = state_29087__$1;
(statearr_29092_29132[(2)] = null);

(statearr_29092_29132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (4))){
var inst_29028 = (state_29087[(13)]);
var inst_29028__$1 = (state_29087[(2)]);
var inst_29029 = (inst_29028__$1 == null);
var state_29087__$1 = (function (){var statearr_29093 = state_29087;
(statearr_29093[(13)] = inst_29028__$1);

return statearr_29093;
})();
if(cljs.core.truth_(inst_29029)){
var statearr_29094_29133 = state_29087__$1;
(statearr_29094_29133[(1)] = (5));

} else {
var statearr_29095_29134 = state_29087__$1;
(statearr_29095_29134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (15))){
var state_29087__$1 = state_29087;
var statearr_29099_29135 = state_29087__$1;
(statearr_29099_29135[(2)] = null);

(statearr_29099_29135[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (21))){
var state_29087__$1 = state_29087;
var statearr_29100_29136 = state_29087__$1;
(statearr_29100_29136[(2)] = null);

(statearr_29100_29136[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (13))){
var inst_29039 = (state_29087[(9)]);
var inst_29041 = (state_29087[(10)]);
var inst_29040 = (state_29087[(11)]);
var inst_29042 = (state_29087[(12)]);
var inst_29049 = (state_29087[(2)]);
var inst_29050 = (inst_29042 + (1));
var tmp29096 = inst_29039;
var tmp29097 = inst_29041;
var tmp29098 = inst_29040;
var inst_29039__$1 = tmp29096;
var inst_29040__$1 = tmp29098;
var inst_29041__$1 = tmp29097;
var inst_29042__$1 = inst_29050;
var state_29087__$1 = (function (){var statearr_29101 = state_29087;
(statearr_29101[(9)] = inst_29039__$1);

(statearr_29101[(10)] = inst_29041__$1);

(statearr_29101[(14)] = inst_29049);

(statearr_29101[(11)] = inst_29040__$1);

(statearr_29101[(12)] = inst_29042__$1);

return statearr_29101;
})();
var statearr_29102_29137 = state_29087__$1;
(statearr_29102_29137[(2)] = null);

(statearr_29102_29137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (22))){
var state_29087__$1 = state_29087;
var statearr_29103_29138 = state_29087__$1;
(statearr_29103_29138[(2)] = null);

(statearr_29103_29138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (6))){
var inst_29028 = (state_29087[(13)]);
var inst_29037 = f.call(null,inst_29028);
var inst_29038 = cljs.core.seq.call(null,inst_29037);
var inst_29039 = inst_29038;
var inst_29040 = null;
var inst_29041 = (0);
var inst_29042 = (0);
var state_29087__$1 = (function (){var statearr_29104 = state_29087;
(statearr_29104[(9)] = inst_29039);

(statearr_29104[(10)] = inst_29041);

(statearr_29104[(11)] = inst_29040);

(statearr_29104[(12)] = inst_29042);

return statearr_29104;
})();
var statearr_29105_29139 = state_29087__$1;
(statearr_29105_29139[(2)] = null);

(statearr_29105_29139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (17))){
var inst_29053 = (state_29087[(7)]);
var inst_29057 = cljs.core.chunk_first.call(null,inst_29053);
var inst_29058 = cljs.core.chunk_rest.call(null,inst_29053);
var inst_29059 = cljs.core.count.call(null,inst_29057);
var inst_29039 = inst_29058;
var inst_29040 = inst_29057;
var inst_29041 = inst_29059;
var inst_29042 = (0);
var state_29087__$1 = (function (){var statearr_29106 = state_29087;
(statearr_29106[(9)] = inst_29039);

(statearr_29106[(10)] = inst_29041);

(statearr_29106[(11)] = inst_29040);

(statearr_29106[(12)] = inst_29042);

return statearr_29106;
})();
var statearr_29107_29140 = state_29087__$1;
(statearr_29107_29140[(2)] = null);

(statearr_29107_29140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (3))){
var inst_29085 = (state_29087[(2)]);
var state_29087__$1 = state_29087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29087__$1,inst_29085);
} else {
if((state_val_29088 === (12))){
var inst_29073 = (state_29087[(2)]);
var state_29087__$1 = state_29087;
var statearr_29108_29141 = state_29087__$1;
(statearr_29108_29141[(2)] = inst_29073);

(statearr_29108_29141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (2))){
var state_29087__$1 = state_29087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29087__$1,(4),in$);
} else {
if((state_val_29088 === (23))){
var inst_29081 = (state_29087[(2)]);
var state_29087__$1 = state_29087;
var statearr_29109_29142 = state_29087__$1;
(statearr_29109_29142[(2)] = inst_29081);

(statearr_29109_29142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (19))){
var inst_29068 = (state_29087[(2)]);
var state_29087__$1 = state_29087;
var statearr_29110_29143 = state_29087__$1;
(statearr_29110_29143[(2)] = inst_29068);

(statearr_29110_29143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (11))){
var inst_29039 = (state_29087[(9)]);
var inst_29053 = (state_29087[(7)]);
var inst_29053__$1 = cljs.core.seq.call(null,inst_29039);
var state_29087__$1 = (function (){var statearr_29111 = state_29087;
(statearr_29111[(7)] = inst_29053__$1);

return statearr_29111;
})();
if(inst_29053__$1){
var statearr_29112_29144 = state_29087__$1;
(statearr_29112_29144[(1)] = (14));

} else {
var statearr_29113_29145 = state_29087__$1;
(statearr_29113_29145[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (9))){
var inst_29075 = (state_29087[(2)]);
var inst_29076 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29087__$1 = (function (){var statearr_29114 = state_29087;
(statearr_29114[(15)] = inst_29075);

return statearr_29114;
})();
if(cljs.core.truth_(inst_29076)){
var statearr_29115_29146 = state_29087__$1;
(statearr_29115_29146[(1)] = (21));

} else {
var statearr_29116_29147 = state_29087__$1;
(statearr_29116_29147[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (5))){
var inst_29031 = cljs.core.async.close_BANG_.call(null,out);
var state_29087__$1 = state_29087;
var statearr_29117_29148 = state_29087__$1;
(statearr_29117_29148[(2)] = inst_29031);

(statearr_29117_29148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (14))){
var inst_29053 = (state_29087[(7)]);
var inst_29055 = cljs.core.chunked_seq_QMARK_.call(null,inst_29053);
var state_29087__$1 = state_29087;
if(inst_29055){
var statearr_29118_29149 = state_29087__$1;
(statearr_29118_29149[(1)] = (17));

} else {
var statearr_29119_29150 = state_29087__$1;
(statearr_29119_29150[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (16))){
var inst_29071 = (state_29087[(2)]);
var state_29087__$1 = state_29087;
var statearr_29120_29151 = state_29087__$1;
(statearr_29120_29151[(2)] = inst_29071);

(statearr_29120_29151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29088 === (10))){
var inst_29040 = (state_29087[(11)]);
var inst_29042 = (state_29087[(12)]);
var inst_29047 = cljs.core._nth.call(null,inst_29040,inst_29042);
var state_29087__$1 = state_29087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29087__$1,(13),out,inst_29047);
} else {
if((state_val_29088 === (18))){
var inst_29053 = (state_29087[(7)]);
var inst_29062 = cljs.core.first.call(null,inst_29053);
var state_29087__$1 = state_29087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29087__$1,(20),out,inst_29062);
} else {
if((state_val_29088 === (8))){
var inst_29041 = (state_29087[(10)]);
var inst_29042 = (state_29087[(12)]);
var inst_29044 = (inst_29042 < inst_29041);
var inst_29045 = inst_29044;
var state_29087__$1 = state_29087;
if(cljs.core.truth_(inst_29045)){
var statearr_29121_29152 = state_29087__$1;
(statearr_29121_29152[(1)] = (10));

} else {
var statearr_29122_29153 = state_29087__$1;
(statearr_29122_29153[(1)] = (11));

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
});})(c__26630__auto__))
;
return ((function (switch__26518__auto__,c__26630__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26519__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26519__auto____0 = (function (){
var statearr_29126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29126[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26519__auto__);

(statearr_29126[(1)] = (1));

return statearr_29126;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26519__auto____1 = (function (state_29087){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_29087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e29127){if((e29127 instanceof Object)){
var ex__26522__auto__ = e29127;
var statearr_29128_29154 = state_29087;
(statearr_29128_29154[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29155 = state_29087;
state_29087 = G__29155;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26519__auto__ = function(state_29087){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26519__auto____1.call(this,state_29087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26519__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26519__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__))
})();
var state__26632__auto__ = (function (){var statearr_29129 = f__26631__auto__.call(null);
(statearr_29129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_29129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__))
);

return c__26630__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29156 = [];
var len__23119__auto___29159 = arguments.length;
var i__23120__auto___29160 = (0);
while(true){
if((i__23120__auto___29160 < len__23119__auto___29159)){
args29156.push((arguments[i__23120__auto___29160]));

var G__29161 = (i__23120__auto___29160 + (1));
i__23120__auto___29160 = G__29161;
continue;
} else {
}
break;
}

var G__29158 = args29156.length;
switch (G__29158) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29156.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29163 = [];
var len__23119__auto___29166 = arguments.length;
var i__23120__auto___29167 = (0);
while(true){
if((i__23120__auto___29167 < len__23119__auto___29166)){
args29163.push((arguments[i__23120__auto___29167]));

var G__29168 = (i__23120__auto___29167 + (1));
i__23120__auto___29167 = G__29168;
continue;
} else {
}
break;
}

var G__29165 = args29163.length;
switch (G__29165) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29163.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29170 = [];
var len__23119__auto___29221 = arguments.length;
var i__23120__auto___29222 = (0);
while(true){
if((i__23120__auto___29222 < len__23119__auto___29221)){
args29170.push((arguments[i__23120__auto___29222]));

var G__29223 = (i__23120__auto___29222 + (1));
i__23120__auto___29222 = G__29223;
continue;
} else {
}
break;
}

var G__29172 = args29170.length;
switch (G__29172) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29170.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26630__auto___29225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___29225,out){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___29225,out){
return (function (state_29196){
var state_val_29197 = (state_29196[(1)]);
if((state_val_29197 === (7))){
var inst_29191 = (state_29196[(2)]);
var state_29196__$1 = state_29196;
var statearr_29198_29226 = state_29196__$1;
(statearr_29198_29226[(2)] = inst_29191);

(statearr_29198_29226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29197 === (1))){
var inst_29173 = null;
var state_29196__$1 = (function (){var statearr_29199 = state_29196;
(statearr_29199[(7)] = inst_29173);

return statearr_29199;
})();
var statearr_29200_29227 = state_29196__$1;
(statearr_29200_29227[(2)] = null);

(statearr_29200_29227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29197 === (4))){
var inst_29176 = (state_29196[(8)]);
var inst_29176__$1 = (state_29196[(2)]);
var inst_29177 = (inst_29176__$1 == null);
var inst_29178 = cljs.core.not.call(null,inst_29177);
var state_29196__$1 = (function (){var statearr_29201 = state_29196;
(statearr_29201[(8)] = inst_29176__$1);

return statearr_29201;
})();
if(inst_29178){
var statearr_29202_29228 = state_29196__$1;
(statearr_29202_29228[(1)] = (5));

} else {
var statearr_29203_29229 = state_29196__$1;
(statearr_29203_29229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29197 === (6))){
var state_29196__$1 = state_29196;
var statearr_29204_29230 = state_29196__$1;
(statearr_29204_29230[(2)] = null);

(statearr_29204_29230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29197 === (3))){
var inst_29193 = (state_29196[(2)]);
var inst_29194 = cljs.core.async.close_BANG_.call(null,out);
var state_29196__$1 = (function (){var statearr_29205 = state_29196;
(statearr_29205[(9)] = inst_29193);

return statearr_29205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29196__$1,inst_29194);
} else {
if((state_val_29197 === (2))){
var state_29196__$1 = state_29196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29196__$1,(4),ch);
} else {
if((state_val_29197 === (11))){
var inst_29176 = (state_29196[(8)]);
var inst_29185 = (state_29196[(2)]);
var inst_29173 = inst_29176;
var state_29196__$1 = (function (){var statearr_29206 = state_29196;
(statearr_29206[(7)] = inst_29173);

(statearr_29206[(10)] = inst_29185);

return statearr_29206;
})();
var statearr_29207_29231 = state_29196__$1;
(statearr_29207_29231[(2)] = null);

(statearr_29207_29231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29197 === (9))){
var inst_29176 = (state_29196[(8)]);
var state_29196__$1 = state_29196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29196__$1,(11),out,inst_29176);
} else {
if((state_val_29197 === (5))){
var inst_29173 = (state_29196[(7)]);
var inst_29176 = (state_29196[(8)]);
var inst_29180 = cljs.core._EQ_.call(null,inst_29176,inst_29173);
var state_29196__$1 = state_29196;
if(inst_29180){
var statearr_29209_29232 = state_29196__$1;
(statearr_29209_29232[(1)] = (8));

} else {
var statearr_29210_29233 = state_29196__$1;
(statearr_29210_29233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29197 === (10))){
var inst_29188 = (state_29196[(2)]);
var state_29196__$1 = state_29196;
var statearr_29211_29234 = state_29196__$1;
(statearr_29211_29234[(2)] = inst_29188);

(statearr_29211_29234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29197 === (8))){
var inst_29173 = (state_29196[(7)]);
var tmp29208 = inst_29173;
var inst_29173__$1 = tmp29208;
var state_29196__$1 = (function (){var statearr_29212 = state_29196;
(statearr_29212[(7)] = inst_29173__$1);

return statearr_29212;
})();
var statearr_29213_29235 = state_29196__$1;
(statearr_29213_29235[(2)] = null);

(statearr_29213_29235[(1)] = (2));


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
});})(c__26630__auto___29225,out))
;
return ((function (switch__26518__auto__,c__26630__auto___29225,out){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_29217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29217[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_29217[(1)] = (1));

return statearr_29217;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_29196){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_29196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e29218){if((e29218 instanceof Object)){
var ex__26522__auto__ = e29218;
var statearr_29219_29236 = state_29196;
(statearr_29219_29236[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29237 = state_29196;
state_29196 = G__29237;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_29196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_29196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___29225,out))
})();
var state__26632__auto__ = (function (){var statearr_29220 = f__26631__auto__.call(null);
(statearr_29220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___29225);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___29225,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29238 = [];
var len__23119__auto___29308 = arguments.length;
var i__23120__auto___29309 = (0);
while(true){
if((i__23120__auto___29309 < len__23119__auto___29308)){
args29238.push((arguments[i__23120__auto___29309]));

var G__29310 = (i__23120__auto___29309 + (1));
i__23120__auto___29309 = G__29310;
continue;
} else {
}
break;
}

var G__29240 = args29238.length;
switch (G__29240) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29238.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26630__auto___29312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___29312,out){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___29312,out){
return (function (state_29278){
var state_val_29279 = (state_29278[(1)]);
if((state_val_29279 === (7))){
var inst_29274 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
var statearr_29280_29313 = state_29278__$1;
(statearr_29280_29313[(2)] = inst_29274);

(statearr_29280_29313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (1))){
var inst_29241 = (new Array(n));
var inst_29242 = inst_29241;
var inst_29243 = (0);
var state_29278__$1 = (function (){var statearr_29281 = state_29278;
(statearr_29281[(7)] = inst_29243);

(statearr_29281[(8)] = inst_29242);

return statearr_29281;
})();
var statearr_29282_29314 = state_29278__$1;
(statearr_29282_29314[(2)] = null);

(statearr_29282_29314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (4))){
var inst_29246 = (state_29278[(9)]);
var inst_29246__$1 = (state_29278[(2)]);
var inst_29247 = (inst_29246__$1 == null);
var inst_29248 = cljs.core.not.call(null,inst_29247);
var state_29278__$1 = (function (){var statearr_29283 = state_29278;
(statearr_29283[(9)] = inst_29246__$1);

return statearr_29283;
})();
if(inst_29248){
var statearr_29284_29315 = state_29278__$1;
(statearr_29284_29315[(1)] = (5));

} else {
var statearr_29285_29316 = state_29278__$1;
(statearr_29285_29316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (15))){
var inst_29268 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
var statearr_29286_29317 = state_29278__$1;
(statearr_29286_29317[(2)] = inst_29268);

(statearr_29286_29317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (13))){
var state_29278__$1 = state_29278;
var statearr_29287_29318 = state_29278__$1;
(statearr_29287_29318[(2)] = null);

(statearr_29287_29318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (6))){
var inst_29243 = (state_29278[(7)]);
var inst_29264 = (inst_29243 > (0));
var state_29278__$1 = state_29278;
if(cljs.core.truth_(inst_29264)){
var statearr_29288_29319 = state_29278__$1;
(statearr_29288_29319[(1)] = (12));

} else {
var statearr_29289_29320 = state_29278__$1;
(statearr_29289_29320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (3))){
var inst_29276 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29278__$1,inst_29276);
} else {
if((state_val_29279 === (12))){
var inst_29242 = (state_29278[(8)]);
var inst_29266 = cljs.core.vec.call(null,inst_29242);
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29278__$1,(15),out,inst_29266);
} else {
if((state_val_29279 === (2))){
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29278__$1,(4),ch);
} else {
if((state_val_29279 === (11))){
var inst_29258 = (state_29278[(2)]);
var inst_29259 = (new Array(n));
var inst_29242 = inst_29259;
var inst_29243 = (0);
var state_29278__$1 = (function (){var statearr_29290 = state_29278;
(statearr_29290[(10)] = inst_29258);

(statearr_29290[(7)] = inst_29243);

(statearr_29290[(8)] = inst_29242);

return statearr_29290;
})();
var statearr_29291_29321 = state_29278__$1;
(statearr_29291_29321[(2)] = null);

(statearr_29291_29321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (9))){
var inst_29242 = (state_29278[(8)]);
var inst_29256 = cljs.core.vec.call(null,inst_29242);
var state_29278__$1 = state_29278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29278__$1,(11),out,inst_29256);
} else {
if((state_val_29279 === (5))){
var inst_29246 = (state_29278[(9)]);
var inst_29243 = (state_29278[(7)]);
var inst_29242 = (state_29278[(8)]);
var inst_29251 = (state_29278[(11)]);
var inst_29250 = (inst_29242[inst_29243] = inst_29246);
var inst_29251__$1 = (inst_29243 + (1));
var inst_29252 = (inst_29251__$1 < n);
var state_29278__$1 = (function (){var statearr_29292 = state_29278;
(statearr_29292[(12)] = inst_29250);

(statearr_29292[(11)] = inst_29251__$1);

return statearr_29292;
})();
if(cljs.core.truth_(inst_29252)){
var statearr_29293_29322 = state_29278__$1;
(statearr_29293_29322[(1)] = (8));

} else {
var statearr_29294_29323 = state_29278__$1;
(statearr_29294_29323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (14))){
var inst_29271 = (state_29278[(2)]);
var inst_29272 = cljs.core.async.close_BANG_.call(null,out);
var state_29278__$1 = (function (){var statearr_29296 = state_29278;
(statearr_29296[(13)] = inst_29271);

return statearr_29296;
})();
var statearr_29297_29324 = state_29278__$1;
(statearr_29297_29324[(2)] = inst_29272);

(statearr_29297_29324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (10))){
var inst_29262 = (state_29278[(2)]);
var state_29278__$1 = state_29278;
var statearr_29298_29325 = state_29278__$1;
(statearr_29298_29325[(2)] = inst_29262);

(statearr_29298_29325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29279 === (8))){
var inst_29242 = (state_29278[(8)]);
var inst_29251 = (state_29278[(11)]);
var tmp29295 = inst_29242;
var inst_29242__$1 = tmp29295;
var inst_29243 = inst_29251;
var state_29278__$1 = (function (){var statearr_29299 = state_29278;
(statearr_29299[(7)] = inst_29243);

(statearr_29299[(8)] = inst_29242__$1);

return statearr_29299;
})();
var statearr_29300_29326 = state_29278__$1;
(statearr_29300_29326[(2)] = null);

(statearr_29300_29326[(1)] = (2));


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
});})(c__26630__auto___29312,out))
;
return ((function (switch__26518__auto__,c__26630__auto___29312,out){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_29304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29304[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_29304[(1)] = (1));

return statearr_29304;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_29278){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_29278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e29305){if((e29305 instanceof Object)){
var ex__26522__auto__ = e29305;
var statearr_29306_29327 = state_29278;
(statearr_29306_29327[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29328 = state_29278;
state_29278 = G__29328;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_29278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_29278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___29312,out))
})();
var state__26632__auto__ = (function (){var statearr_29307 = f__26631__auto__.call(null);
(statearr_29307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___29312);

return statearr_29307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___29312,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29329 = [];
var len__23119__auto___29403 = arguments.length;
var i__23120__auto___29404 = (0);
while(true){
if((i__23120__auto___29404 < len__23119__auto___29403)){
args29329.push((arguments[i__23120__auto___29404]));

var G__29405 = (i__23120__auto___29404 + (1));
i__23120__auto___29404 = G__29405;
continue;
} else {
}
break;
}

var G__29331 = args29329.length;
switch (G__29331) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29329.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26630__auto___29407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___29407,out){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___29407,out){
return (function (state_29373){
var state_val_29374 = (state_29373[(1)]);
if((state_val_29374 === (7))){
var inst_29369 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29375_29408 = state_29373__$1;
(statearr_29375_29408[(2)] = inst_29369);

(statearr_29375_29408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (1))){
var inst_29332 = [];
var inst_29333 = inst_29332;
var inst_29334 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29373__$1 = (function (){var statearr_29376 = state_29373;
(statearr_29376[(7)] = inst_29334);

(statearr_29376[(8)] = inst_29333);

return statearr_29376;
})();
var statearr_29377_29409 = state_29373__$1;
(statearr_29377_29409[(2)] = null);

(statearr_29377_29409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (4))){
var inst_29337 = (state_29373[(9)]);
var inst_29337__$1 = (state_29373[(2)]);
var inst_29338 = (inst_29337__$1 == null);
var inst_29339 = cljs.core.not.call(null,inst_29338);
var state_29373__$1 = (function (){var statearr_29378 = state_29373;
(statearr_29378[(9)] = inst_29337__$1);

return statearr_29378;
})();
if(inst_29339){
var statearr_29379_29410 = state_29373__$1;
(statearr_29379_29410[(1)] = (5));

} else {
var statearr_29380_29411 = state_29373__$1;
(statearr_29380_29411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (15))){
var inst_29363 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29381_29412 = state_29373__$1;
(statearr_29381_29412[(2)] = inst_29363);

(statearr_29381_29412[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (13))){
var state_29373__$1 = state_29373;
var statearr_29382_29413 = state_29373__$1;
(statearr_29382_29413[(2)] = null);

(statearr_29382_29413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (6))){
var inst_29333 = (state_29373[(8)]);
var inst_29358 = inst_29333.length;
var inst_29359 = (inst_29358 > (0));
var state_29373__$1 = state_29373;
if(cljs.core.truth_(inst_29359)){
var statearr_29383_29414 = state_29373__$1;
(statearr_29383_29414[(1)] = (12));

} else {
var statearr_29384_29415 = state_29373__$1;
(statearr_29384_29415[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (3))){
var inst_29371 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29373__$1,inst_29371);
} else {
if((state_val_29374 === (12))){
var inst_29333 = (state_29373[(8)]);
var inst_29361 = cljs.core.vec.call(null,inst_29333);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29373__$1,(15),out,inst_29361);
} else {
if((state_val_29374 === (2))){
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29373__$1,(4),ch);
} else {
if((state_val_29374 === (11))){
var inst_29341 = (state_29373[(10)]);
var inst_29337 = (state_29373[(9)]);
var inst_29351 = (state_29373[(2)]);
var inst_29352 = [];
var inst_29353 = inst_29352.push(inst_29337);
var inst_29333 = inst_29352;
var inst_29334 = inst_29341;
var state_29373__$1 = (function (){var statearr_29385 = state_29373;
(statearr_29385[(7)] = inst_29334);

(statearr_29385[(8)] = inst_29333);

(statearr_29385[(11)] = inst_29351);

(statearr_29385[(12)] = inst_29353);

return statearr_29385;
})();
var statearr_29386_29416 = state_29373__$1;
(statearr_29386_29416[(2)] = null);

(statearr_29386_29416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (9))){
var inst_29333 = (state_29373[(8)]);
var inst_29349 = cljs.core.vec.call(null,inst_29333);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29373__$1,(11),out,inst_29349);
} else {
if((state_val_29374 === (5))){
var inst_29334 = (state_29373[(7)]);
var inst_29341 = (state_29373[(10)]);
var inst_29337 = (state_29373[(9)]);
var inst_29341__$1 = f.call(null,inst_29337);
var inst_29342 = cljs.core._EQ_.call(null,inst_29341__$1,inst_29334);
var inst_29343 = cljs.core.keyword_identical_QMARK_.call(null,inst_29334,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29344 = (inst_29342) || (inst_29343);
var state_29373__$1 = (function (){var statearr_29387 = state_29373;
(statearr_29387[(10)] = inst_29341__$1);

return statearr_29387;
})();
if(cljs.core.truth_(inst_29344)){
var statearr_29388_29417 = state_29373__$1;
(statearr_29388_29417[(1)] = (8));

} else {
var statearr_29389_29418 = state_29373__$1;
(statearr_29389_29418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (14))){
var inst_29366 = (state_29373[(2)]);
var inst_29367 = cljs.core.async.close_BANG_.call(null,out);
var state_29373__$1 = (function (){var statearr_29391 = state_29373;
(statearr_29391[(13)] = inst_29366);

return statearr_29391;
})();
var statearr_29392_29419 = state_29373__$1;
(statearr_29392_29419[(2)] = inst_29367);

(statearr_29392_29419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (10))){
var inst_29356 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29393_29420 = state_29373__$1;
(statearr_29393_29420[(2)] = inst_29356);

(statearr_29393_29420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (8))){
var inst_29333 = (state_29373[(8)]);
var inst_29341 = (state_29373[(10)]);
var inst_29337 = (state_29373[(9)]);
var inst_29346 = inst_29333.push(inst_29337);
var tmp29390 = inst_29333;
var inst_29333__$1 = tmp29390;
var inst_29334 = inst_29341;
var state_29373__$1 = (function (){var statearr_29394 = state_29373;
(statearr_29394[(7)] = inst_29334);

(statearr_29394[(8)] = inst_29333__$1);

(statearr_29394[(14)] = inst_29346);

return statearr_29394;
})();
var statearr_29395_29421 = state_29373__$1;
(statearr_29395_29421[(2)] = null);

(statearr_29395_29421[(1)] = (2));


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
});})(c__26630__auto___29407,out))
;
return ((function (switch__26518__auto__,c__26630__auto___29407,out){
return (function() {
var cljs$core$async$state_machine__26519__auto__ = null;
var cljs$core$async$state_machine__26519__auto____0 = (function (){
var statearr_29399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29399[(0)] = cljs$core$async$state_machine__26519__auto__);

(statearr_29399[(1)] = (1));

return statearr_29399;
});
var cljs$core$async$state_machine__26519__auto____1 = (function (state_29373){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_29373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e29400){if((e29400 instanceof Object)){
var ex__26522__auto__ = e29400;
var statearr_29401_29422 = state_29373;
(statearr_29401_29422[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29423 = state_29373;
state_29373 = G__29423;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
cljs$core$async$state_machine__26519__auto__ = function(state_29373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26519__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26519__auto____1.call(this,state_29373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26519__auto____0;
cljs$core$async$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26519__auto____1;
return cljs$core$async$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___29407,out))
})();
var state__26632__auto__ = (function (){var statearr_29402 = f__26631__auto__.call(null);
(statearr_29402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___29407);

return statearr_29402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___29407,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1473616899606