// Compiled by ClojureScript 1.9.89 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__25397){
var vec__25398 = p__25397;
var k = cljs.core.nth.call(null,vec__25398,(0),null);
var value = cljs.core.nth.call(null,vec__25398,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__25401 = cljs.core.seq.call(null,value);
var chunk__25402 = null;
var count__25403 = (0);
var i__25404 = (0);
while(true){
if((i__25404 < count__25403)){
var map__25405 = cljs.core._nth.call(null,chunk__25402,i__25404);
var map__25405__$1 = ((((!((map__25405 == null)))?((((map__25405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25405):map__25405);
var effect = map__25405__$1;
var ms = cljs.core.get.call(null,map__25405__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25405__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25401,chunk__25402,count__25403,i__25404,map__25405,map__25405__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25401,chunk__25402,count__25403,i__25404,map__25405,map__25405__$1,effect,ms,dispatch))
,ms);
}

var G__25409 = seq__25401;
var G__25410 = chunk__25402;
var G__25411 = count__25403;
var G__25412 = (i__25404 + (1));
seq__25401 = G__25409;
chunk__25402 = G__25410;
count__25403 = G__25411;
i__25404 = G__25412;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25401);
if(temp__4657__auto__){
var seq__25401__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25401__$1)){
var c__22855__auto__ = cljs.core.chunk_first.call(null,seq__25401__$1);
var G__25413 = cljs.core.chunk_rest.call(null,seq__25401__$1);
var G__25414 = c__22855__auto__;
var G__25415 = cljs.core.count.call(null,c__22855__auto__);
var G__25416 = (0);
seq__25401 = G__25413;
chunk__25402 = G__25414;
count__25403 = G__25415;
i__25404 = G__25416;
continue;
} else {
var map__25407 = cljs.core.first.call(null,seq__25401__$1);
var map__25407__$1 = ((((!((map__25407 == null)))?((((map__25407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25407):map__25407);
var effect = map__25407__$1;
var ms = cljs.core.get.call(null,map__25407__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25407__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25401,chunk__25402,count__25403,i__25404,map__25407,map__25407__$1,effect,ms,dispatch,seq__25401__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25401,chunk__25402,count__25403,i__25404,map__25407,map__25407__$1,effect,ms,dispatch,seq__25401__$1,temp__4657__auto__))
,ms);
}

var G__25417 = cljs.core.next.call(null,seq__25401__$1);
var G__25418 = null;
var G__25419 = (0);
var G__25420 = (0);
seq__25401 = G__25417;
chunk__25402 = G__25418;
count__25403 = G__25419;
i__25404 = G__25420;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__25421 = cljs.core.seq.call(null,value);
var chunk__25422 = null;
var count__25423 = (0);
var i__25424 = (0);
while(true){
if((i__25424 < count__25423)){
var event = cljs.core._nth.call(null,chunk__25422,i__25424);
re_frame.router.dispatch.call(null,event);

var G__25425 = seq__25421;
var G__25426 = chunk__25422;
var G__25427 = count__25423;
var G__25428 = (i__25424 + (1));
seq__25421 = G__25425;
chunk__25422 = G__25426;
count__25423 = G__25427;
i__25424 = G__25428;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25421);
if(temp__4657__auto__){
var seq__25421__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25421__$1)){
var c__22855__auto__ = cljs.core.chunk_first.call(null,seq__25421__$1);
var G__25429 = cljs.core.chunk_rest.call(null,seq__25421__$1);
var G__25430 = c__22855__auto__;
var G__25431 = cljs.core.count.call(null,c__22855__auto__);
var G__25432 = (0);
seq__25421 = G__25429;
chunk__25422 = G__25430;
count__25423 = G__25431;
i__25424 = G__25432;
continue;
} else {
var event = cljs.core.first.call(null,seq__25421__$1);
re_frame.router.dispatch.call(null,event);

var G__25433 = cljs.core.next.call(null,seq__25421__$1);
var G__25434 = null;
var G__25435 = (0);
var G__25436 = (0);
seq__25421 = G__25433;
chunk__25422 = G__25434;
count__25423 = G__25435;
i__25424 = G__25436;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1473616895607