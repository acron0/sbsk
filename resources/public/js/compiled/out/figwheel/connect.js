// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('sbsk.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__24836__delegate = function (x){
if(cljs.core.truth_(sbsk.core.mount_root)){
return cljs.core.apply.call(null,sbsk.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'sbsk.core/mount-root' is missing");
}
};
var G__24836 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__24837__i = 0, G__24837__a = new Array(arguments.length -  0);
while (G__24837__i < G__24837__a.length) {G__24837__a[G__24837__i] = arguments[G__24837__i + 0]; ++G__24837__i;}
  x = new cljs.core.IndexedSeq(G__24837__a,0);
} 
return G__24836__delegate.call(this,x);};
G__24836.cljs$lang$maxFixedArity = 0;
G__24836.cljs$lang$applyTo = (function (arglist__24838){
var x = cljs.core.seq(arglist__24838);
return G__24836__delegate(x);
});
G__24836.cljs$core$IFn$_invoke$arity$variadic = G__24836__delegate;
return G__24836;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1473623623817