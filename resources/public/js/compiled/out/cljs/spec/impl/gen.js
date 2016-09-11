// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__22650__auto__,writer__22651__auto__,opt__22652__auto__){
return cljs.core._write.call(null,writer__22651__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30756 = arguments.length;
var i__23120__auto___30757 = (0);
while(true){
if((i__23120__auto___30757 < len__23119__auto___30756)){
args__23126__auto__.push((arguments[i__23120__auto___30757]));

var G__30758 = (i__23120__auto___30757 + (1));
i__23120__auto___30757 = G__30758;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq30755){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30755));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30760 = arguments.length;
var i__23120__auto___30761 = (0);
while(true){
if((i__23120__auto___30761 < len__23119__auto___30760)){
args__23126__auto__.push((arguments[i__23120__auto___30761]));

var G__30762 = (i__23120__auto___30761 + (1));
i__23120__auto___30761 = G__30762;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq30759){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30759));
});

var g_QMARK__30763 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_30764 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30763){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30763))
,null));
var mkg_30765 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30763,g_30764){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30763,g_30764))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__30763,g_30764,mkg_30765){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30763).call(null,x);
});})(g_QMARK__30763,g_30764,mkg_30765))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__30763,g_30764,mkg_30765){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_30765).call(null,gfn);
});})(g_QMARK__30763,g_30764,mkg_30765))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__30763,g_30764,mkg_30765){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_30764).call(null,generator);
});})(g_QMARK__30763,g_30764,mkg_30765))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__30727__auto___30783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__30727__auto___30783){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30784 = arguments.length;
var i__23120__auto___30785 = (0);
while(true){
if((i__23120__auto___30785 < len__23119__auto___30784)){
args__23126__auto__.push((arguments[i__23120__auto___30785]));

var G__30786 = (i__23120__auto___30785 + (1));
i__23120__auto___30785 = G__30786;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30783))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30783){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30783),args);
});})(g__30727__auto___30783))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__30727__auto___30783){
return (function (seq30766){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30766));
});})(g__30727__auto___30783))
;


var g__30727__auto___30787 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__30727__auto___30787){
return (function cljs$spec$impl$gen$list(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30788 = arguments.length;
var i__23120__auto___30789 = (0);
while(true){
if((i__23120__auto___30789 < len__23119__auto___30788)){
args__23126__auto__.push((arguments[i__23120__auto___30789]));

var G__30790 = (i__23120__auto___30789 + (1));
i__23120__auto___30789 = G__30790;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30787))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30787){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30787),args);
});})(g__30727__auto___30787))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__30727__auto___30787){
return (function (seq30767){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30767));
});})(g__30727__auto___30787))
;


var g__30727__auto___30791 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__30727__auto___30791){
return (function cljs$spec$impl$gen$map(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30792 = arguments.length;
var i__23120__auto___30793 = (0);
while(true){
if((i__23120__auto___30793 < len__23119__auto___30792)){
args__23126__auto__.push((arguments[i__23120__auto___30793]));

var G__30794 = (i__23120__auto___30793 + (1));
i__23120__auto___30793 = G__30794;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30791))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30791){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30791),args);
});})(g__30727__auto___30791))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__30727__auto___30791){
return (function (seq30768){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30768));
});})(g__30727__auto___30791))
;


var g__30727__auto___30795 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__30727__auto___30795){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30796 = arguments.length;
var i__23120__auto___30797 = (0);
while(true){
if((i__23120__auto___30797 < len__23119__auto___30796)){
args__23126__auto__.push((arguments[i__23120__auto___30797]));

var G__30798 = (i__23120__auto___30797 + (1));
i__23120__auto___30797 = G__30798;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30795))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30795){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30795),args);
});})(g__30727__auto___30795))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__30727__auto___30795){
return (function (seq30769){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30769));
});})(g__30727__auto___30795))
;


var g__30727__auto___30799 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__30727__auto___30799){
return (function cljs$spec$impl$gen$set(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30800 = arguments.length;
var i__23120__auto___30801 = (0);
while(true){
if((i__23120__auto___30801 < len__23119__auto___30800)){
args__23126__auto__.push((arguments[i__23120__auto___30801]));

var G__30802 = (i__23120__auto___30801 + (1));
i__23120__auto___30801 = G__30802;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30799))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30799),args);
});})(g__30727__auto___30799))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__30727__auto___30799){
return (function (seq30770){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30770));
});})(g__30727__auto___30799))
;


var g__30727__auto___30803 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__30727__auto___30803){
return (function cljs$spec$impl$gen$vector(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30804 = arguments.length;
var i__23120__auto___30805 = (0);
while(true){
if((i__23120__auto___30805 < len__23119__auto___30804)){
args__23126__auto__.push((arguments[i__23120__auto___30805]));

var G__30806 = (i__23120__auto___30805 + (1));
i__23120__auto___30805 = G__30806;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30803))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30803){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30803),args);
});})(g__30727__auto___30803))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__30727__auto___30803){
return (function (seq30771){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30771));
});})(g__30727__auto___30803))
;


var g__30727__auto___30807 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__30727__auto___30807){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30808 = arguments.length;
var i__23120__auto___30809 = (0);
while(true){
if((i__23120__auto___30809 < len__23119__auto___30808)){
args__23126__auto__.push((arguments[i__23120__auto___30809]));

var G__30810 = (i__23120__auto___30809 + (1));
i__23120__auto___30809 = G__30810;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30807))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30807){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30807),args);
});})(g__30727__auto___30807))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__30727__auto___30807){
return (function (seq30772){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30772));
});})(g__30727__auto___30807))
;


var g__30727__auto___30811 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__30727__auto___30811){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30812 = arguments.length;
var i__23120__auto___30813 = (0);
while(true){
if((i__23120__auto___30813 < len__23119__auto___30812)){
args__23126__auto__.push((arguments[i__23120__auto___30813]));

var G__30814 = (i__23120__auto___30813 + (1));
i__23120__auto___30813 = G__30814;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30811))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30811){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30811),args);
});})(g__30727__auto___30811))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__30727__auto___30811){
return (function (seq30773){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30773));
});})(g__30727__auto___30811))
;


var g__30727__auto___30815 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__30727__auto___30815){
return (function cljs$spec$impl$gen$elements(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30816 = arguments.length;
var i__23120__auto___30817 = (0);
while(true){
if((i__23120__auto___30817 < len__23119__auto___30816)){
args__23126__auto__.push((arguments[i__23120__auto___30817]));

var G__30818 = (i__23120__auto___30817 + (1));
i__23120__auto___30817 = G__30818;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30815))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30815){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30815),args);
});})(g__30727__auto___30815))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__30727__auto___30815){
return (function (seq30774){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30774));
});})(g__30727__auto___30815))
;


var g__30727__auto___30819 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__30727__auto___30819){
return (function cljs$spec$impl$gen$bind(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30820 = arguments.length;
var i__23120__auto___30821 = (0);
while(true){
if((i__23120__auto___30821 < len__23119__auto___30820)){
args__23126__auto__.push((arguments[i__23120__auto___30821]));

var G__30822 = (i__23120__auto___30821 + (1));
i__23120__auto___30821 = G__30822;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30819))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30819),args);
});})(g__30727__auto___30819))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__30727__auto___30819){
return (function (seq30775){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30775));
});})(g__30727__auto___30819))
;


var g__30727__auto___30823 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__30727__auto___30823){
return (function cljs$spec$impl$gen$choose(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30824 = arguments.length;
var i__23120__auto___30825 = (0);
while(true){
if((i__23120__auto___30825 < len__23119__auto___30824)){
args__23126__auto__.push((arguments[i__23120__auto___30825]));

var G__30826 = (i__23120__auto___30825 + (1));
i__23120__auto___30825 = G__30826;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30823))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30823),args);
});})(g__30727__auto___30823))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__30727__auto___30823){
return (function (seq30776){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30776));
});})(g__30727__auto___30823))
;


var g__30727__auto___30827 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__30727__auto___30827){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30828 = arguments.length;
var i__23120__auto___30829 = (0);
while(true){
if((i__23120__auto___30829 < len__23119__auto___30828)){
args__23126__auto__.push((arguments[i__23120__auto___30829]));

var G__30830 = (i__23120__auto___30829 + (1));
i__23120__auto___30829 = G__30830;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30827))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30827),args);
});})(g__30727__auto___30827))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__30727__auto___30827){
return (function (seq30777){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30777));
});})(g__30727__auto___30827))
;


var g__30727__auto___30831 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__30727__auto___30831){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30832 = arguments.length;
var i__23120__auto___30833 = (0);
while(true){
if((i__23120__auto___30833 < len__23119__auto___30832)){
args__23126__auto__.push((arguments[i__23120__auto___30833]));

var G__30834 = (i__23120__auto___30833 + (1));
i__23120__auto___30833 = G__30834;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30831))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30831),args);
});})(g__30727__auto___30831))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__30727__auto___30831){
return (function (seq30778){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30778));
});})(g__30727__auto___30831))
;


var g__30727__auto___30835 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__30727__auto___30835){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30836 = arguments.length;
var i__23120__auto___30837 = (0);
while(true){
if((i__23120__auto___30837 < len__23119__auto___30836)){
args__23126__auto__.push((arguments[i__23120__auto___30837]));

var G__30838 = (i__23120__auto___30837 + (1));
i__23120__auto___30837 = G__30838;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30835))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30835),args);
});})(g__30727__auto___30835))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__30727__auto___30835){
return (function (seq30779){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30779));
});})(g__30727__auto___30835))
;


var g__30727__auto___30839 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__30727__auto___30839){
return (function cljs$spec$impl$gen$sample(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30840 = arguments.length;
var i__23120__auto___30841 = (0);
while(true){
if((i__23120__auto___30841 < len__23119__auto___30840)){
args__23126__auto__.push((arguments[i__23120__auto___30841]));

var G__30842 = (i__23120__auto___30841 + (1));
i__23120__auto___30841 = G__30842;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30839))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30839),args);
});})(g__30727__auto___30839))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__30727__auto___30839){
return (function (seq30780){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30780));
});})(g__30727__auto___30839))
;


var g__30727__auto___30843 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__30727__auto___30843){
return (function cljs$spec$impl$gen$return(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30844 = arguments.length;
var i__23120__auto___30845 = (0);
while(true){
if((i__23120__auto___30845 < len__23119__auto___30844)){
args__23126__auto__.push((arguments[i__23120__auto___30845]));

var G__30846 = (i__23120__auto___30845 + (1));
i__23120__auto___30845 = G__30846;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30843))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30843),args);
});})(g__30727__auto___30843))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__30727__auto___30843){
return (function (seq30781){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30781));
});})(g__30727__auto___30843))
;


var g__30727__auto___30847 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__30727__auto___30847){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30848 = arguments.length;
var i__23120__auto___30849 = (0);
while(true){
if((i__23120__auto___30849 < len__23119__auto___30848)){
args__23126__auto__.push((arguments[i__23120__auto___30849]));

var G__30850 = (i__23120__auto___30849 + (1));
i__23120__auto___30849 = G__30850;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30727__auto___30847))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30727__auto___30847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__30727__auto___30847),args);
});})(g__30727__auto___30847))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__30727__auto___30847){
return (function (seq30782){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30782));
});})(g__30727__auto___30847))
;

var g__30740__auto___30872 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__30740__auto___30872){
return (function cljs$spec$impl$gen$any(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30873 = arguments.length;
var i__23120__auto___30874 = (0);
while(true){
if((i__23120__auto___30874 < len__23119__auto___30873)){
args__23126__auto__.push((arguments[i__23120__auto___30874]));

var G__30875 = (i__23120__auto___30874 + (1));
i__23120__auto___30874 = G__30875;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30872))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30872){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30872);
});})(g__30740__auto___30872))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__30740__auto___30872){
return (function (seq30851){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30851));
});})(g__30740__auto___30872))
;


var g__30740__auto___30876 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__30740__auto___30876){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30877 = arguments.length;
var i__23120__auto___30878 = (0);
while(true){
if((i__23120__auto___30878 < len__23119__auto___30877)){
args__23126__auto__.push((arguments[i__23120__auto___30878]));

var G__30879 = (i__23120__auto___30878 + (1));
i__23120__auto___30878 = G__30879;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30876))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30876){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30876);
});})(g__30740__auto___30876))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__30740__auto___30876){
return (function (seq30852){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30852));
});})(g__30740__auto___30876))
;


var g__30740__auto___30880 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__30740__auto___30880){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30881 = arguments.length;
var i__23120__auto___30882 = (0);
while(true){
if((i__23120__auto___30882 < len__23119__auto___30881)){
args__23126__auto__.push((arguments[i__23120__auto___30882]));

var G__30883 = (i__23120__auto___30882 + (1));
i__23120__auto___30882 = G__30883;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30880))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30880){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30880);
});})(g__30740__auto___30880))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__30740__auto___30880){
return (function (seq30853){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30853));
});})(g__30740__auto___30880))
;


var g__30740__auto___30884 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__30740__auto___30884){
return (function cljs$spec$impl$gen$char(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30885 = arguments.length;
var i__23120__auto___30886 = (0);
while(true){
if((i__23120__auto___30886 < len__23119__auto___30885)){
args__23126__auto__.push((arguments[i__23120__auto___30886]));

var G__30887 = (i__23120__auto___30886 + (1));
i__23120__auto___30886 = G__30887;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30884))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30884){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30884);
});})(g__30740__auto___30884))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__30740__auto___30884){
return (function (seq30854){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30854));
});})(g__30740__auto___30884))
;


var g__30740__auto___30888 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__30740__auto___30888){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30889 = arguments.length;
var i__23120__auto___30890 = (0);
while(true){
if((i__23120__auto___30890 < len__23119__auto___30889)){
args__23126__auto__.push((arguments[i__23120__auto___30890]));

var G__30891 = (i__23120__auto___30890 + (1));
i__23120__auto___30890 = G__30891;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30888))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30888){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30888);
});})(g__30740__auto___30888))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__30740__auto___30888){
return (function (seq30855){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30855));
});})(g__30740__auto___30888))
;


var g__30740__auto___30892 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__30740__auto___30892){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30893 = arguments.length;
var i__23120__auto___30894 = (0);
while(true){
if((i__23120__auto___30894 < len__23119__auto___30893)){
args__23126__auto__.push((arguments[i__23120__auto___30894]));

var G__30895 = (i__23120__auto___30894 + (1));
i__23120__auto___30894 = G__30895;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30892))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30892){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30892);
});})(g__30740__auto___30892))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__30740__auto___30892){
return (function (seq30856){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30856));
});})(g__30740__auto___30892))
;


var g__30740__auto___30896 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__30740__auto___30896){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30897 = arguments.length;
var i__23120__auto___30898 = (0);
while(true){
if((i__23120__auto___30898 < len__23119__auto___30897)){
args__23126__auto__.push((arguments[i__23120__auto___30898]));

var G__30899 = (i__23120__auto___30898 + (1));
i__23120__auto___30898 = G__30899;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30896))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30896){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30896);
});})(g__30740__auto___30896))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__30740__auto___30896){
return (function (seq30857){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30857));
});})(g__30740__auto___30896))
;


var g__30740__auto___30900 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__30740__auto___30900){
return (function cljs$spec$impl$gen$double(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30901 = arguments.length;
var i__23120__auto___30902 = (0);
while(true){
if((i__23120__auto___30902 < len__23119__auto___30901)){
args__23126__auto__.push((arguments[i__23120__auto___30902]));

var G__30903 = (i__23120__auto___30902 + (1));
i__23120__auto___30902 = G__30903;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30900))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30900){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30900);
});})(g__30740__auto___30900))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__30740__auto___30900){
return (function (seq30858){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30858));
});})(g__30740__auto___30900))
;


var g__30740__auto___30904 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__30740__auto___30904){
return (function cljs$spec$impl$gen$int(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30905 = arguments.length;
var i__23120__auto___30906 = (0);
while(true){
if((i__23120__auto___30906 < len__23119__auto___30905)){
args__23126__auto__.push((arguments[i__23120__auto___30906]));

var G__30907 = (i__23120__auto___30906 + (1));
i__23120__auto___30906 = G__30907;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30904))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30904){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30904);
});})(g__30740__auto___30904))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__30740__auto___30904){
return (function (seq30859){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30859));
});})(g__30740__auto___30904))
;


var g__30740__auto___30908 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__30740__auto___30908){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30909 = arguments.length;
var i__23120__auto___30910 = (0);
while(true){
if((i__23120__auto___30910 < len__23119__auto___30909)){
args__23126__auto__.push((arguments[i__23120__auto___30910]));

var G__30911 = (i__23120__auto___30910 + (1));
i__23120__auto___30910 = G__30911;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30908))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30908){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30908);
});})(g__30740__auto___30908))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__30740__auto___30908){
return (function (seq30860){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30860));
});})(g__30740__auto___30908))
;


var g__30740__auto___30912 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__30740__auto___30912){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30913 = arguments.length;
var i__23120__auto___30914 = (0);
while(true){
if((i__23120__auto___30914 < len__23119__auto___30913)){
args__23126__auto__.push((arguments[i__23120__auto___30914]));

var G__30915 = (i__23120__auto___30914 + (1));
i__23120__auto___30914 = G__30915;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30912))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30912){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30912);
});})(g__30740__auto___30912))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__30740__auto___30912){
return (function (seq30861){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30861));
});})(g__30740__auto___30912))
;


var g__30740__auto___30916 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__30740__auto___30916){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30917 = arguments.length;
var i__23120__auto___30918 = (0);
while(true){
if((i__23120__auto___30918 < len__23119__auto___30917)){
args__23126__auto__.push((arguments[i__23120__auto___30918]));

var G__30919 = (i__23120__auto___30918 + (1));
i__23120__auto___30918 = G__30919;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30916))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30916){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30916);
});})(g__30740__auto___30916))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__30740__auto___30916){
return (function (seq30862){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30862));
});})(g__30740__auto___30916))
;


var g__30740__auto___30920 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__30740__auto___30920){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30921 = arguments.length;
var i__23120__auto___30922 = (0);
while(true){
if((i__23120__auto___30922 < len__23119__auto___30921)){
args__23126__auto__.push((arguments[i__23120__auto___30922]));

var G__30923 = (i__23120__auto___30922 + (1));
i__23120__auto___30922 = G__30923;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30920))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30920){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30920);
});})(g__30740__auto___30920))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__30740__auto___30920){
return (function (seq30863){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30863));
});})(g__30740__auto___30920))
;


var g__30740__auto___30924 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__30740__auto___30924){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30925 = arguments.length;
var i__23120__auto___30926 = (0);
while(true){
if((i__23120__auto___30926 < len__23119__auto___30925)){
args__23126__auto__.push((arguments[i__23120__auto___30926]));

var G__30927 = (i__23120__auto___30926 + (1));
i__23120__auto___30926 = G__30927;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30924))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30924){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30924);
});})(g__30740__auto___30924))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__30740__auto___30924){
return (function (seq30864){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30864));
});})(g__30740__auto___30924))
;


var g__30740__auto___30928 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__30740__auto___30928){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30929 = arguments.length;
var i__23120__auto___30930 = (0);
while(true){
if((i__23120__auto___30930 < len__23119__auto___30929)){
args__23126__auto__.push((arguments[i__23120__auto___30930]));

var G__30931 = (i__23120__auto___30930 + (1));
i__23120__auto___30930 = G__30931;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30928))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30928){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30928);
});})(g__30740__auto___30928))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__30740__auto___30928){
return (function (seq30865){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30865));
});})(g__30740__auto___30928))
;


var g__30740__auto___30932 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__30740__auto___30932){
return (function cljs$spec$impl$gen$string(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30933 = arguments.length;
var i__23120__auto___30934 = (0);
while(true){
if((i__23120__auto___30934 < len__23119__auto___30933)){
args__23126__auto__.push((arguments[i__23120__auto___30934]));

var G__30935 = (i__23120__auto___30934 + (1));
i__23120__auto___30934 = G__30935;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30932))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30932){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30932);
});})(g__30740__auto___30932))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__30740__auto___30932){
return (function (seq30866){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30866));
});})(g__30740__auto___30932))
;


var g__30740__auto___30936 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__30740__auto___30936){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30937 = arguments.length;
var i__23120__auto___30938 = (0);
while(true){
if((i__23120__auto___30938 < len__23119__auto___30937)){
args__23126__auto__.push((arguments[i__23120__auto___30938]));

var G__30939 = (i__23120__auto___30938 + (1));
i__23120__auto___30938 = G__30939;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30936))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30936){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30936);
});})(g__30740__auto___30936))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__30740__auto___30936){
return (function (seq30867){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30867));
});})(g__30740__auto___30936))
;


var g__30740__auto___30940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__30740__auto___30940){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30941 = arguments.length;
var i__23120__auto___30942 = (0);
while(true){
if((i__23120__auto___30942 < len__23119__auto___30941)){
args__23126__auto__.push((arguments[i__23120__auto___30942]));

var G__30943 = (i__23120__auto___30942 + (1));
i__23120__auto___30942 = G__30943;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30940))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30940){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30940);
});})(g__30740__auto___30940))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__30740__auto___30940){
return (function (seq30868){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30868));
});})(g__30740__auto___30940))
;


var g__30740__auto___30944 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__30740__auto___30944){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30945 = arguments.length;
var i__23120__auto___30946 = (0);
while(true){
if((i__23120__auto___30946 < len__23119__auto___30945)){
args__23126__auto__.push((arguments[i__23120__auto___30946]));

var G__30947 = (i__23120__auto___30946 + (1));
i__23120__auto___30946 = G__30947;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30944))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30944){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30944);
});})(g__30740__auto___30944))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__30740__auto___30944){
return (function (seq30869){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30869));
});})(g__30740__auto___30944))
;


var g__30740__auto___30948 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__30740__auto___30948){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30949 = arguments.length;
var i__23120__auto___30950 = (0);
while(true){
if((i__23120__auto___30950 < len__23119__auto___30949)){
args__23126__auto__.push((arguments[i__23120__auto___30950]));

var G__30951 = (i__23120__auto___30950 + (1));
i__23120__auto___30950 = G__30951;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30948))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30948){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30948);
});})(g__30740__auto___30948))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__30740__auto___30948){
return (function (seq30870){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30870));
});})(g__30740__auto___30948))
;


var g__30740__auto___30952 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__30740__auto___30952){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30953 = arguments.length;
var i__23120__auto___30954 = (0);
while(true){
if((i__23120__auto___30954 < len__23119__auto___30953)){
args__23126__auto__.push((arguments[i__23120__auto___30954]));

var G__30955 = (i__23120__auto___30954 + (1));
i__23120__auto___30954 = G__30955;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});})(g__30740__auto___30952))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__30740__auto___30952){
return (function (args){
return cljs.core.deref.call(null,g__30740__auto___30952);
});})(g__30740__auto___30952))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__30740__auto___30952){
return (function (seq30871){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30871));
});})(g__30740__auto___30952))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__23126__auto__ = [];
var len__23119__auto___30958 = arguments.length;
var i__23120__auto___30959 = (0);
while(true){
if((i__23120__auto___30959 < len__23119__auto___30958)){
args__23126__auto__.push((arguments[i__23120__auto___30959]));

var G__30960 = (i__23120__auto___30959 + (1));
i__23120__auto___30959 = G__30960;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__30956_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30956_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq30957){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30957));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__30961_SHARP_){
return (new Date(p1__30961_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1473616903456