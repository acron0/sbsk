// Compiled by ClojureScript 1.9.89 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__22044__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_23573 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_23573){
return (function (){
var _STAR_always_update_STAR_23574 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23574;
}});})(_STAR_always_update_STAR_23573))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_23573;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args23575 = [];
var len__23119__auto___23578 = arguments.length;
var i__23120__auto___23579 = (0);
while(true){
if((i__23120__auto___23579 < len__23119__auto___23578)){
args23575.push((arguments[i__23120__auto___23579]));

var G__23580 = (i__23120__auto___23579 + (1));
i__23120__auto___23579 = G__23580;
continue;
} else {
}
break;
}

var G__23577 = args23575.length;
switch (G__23577) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23575.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__23586_23590 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__23587_23591 = null;
var count__23588_23592 = (0);
var i__23589_23593 = (0);
while(true){
if((i__23589_23593 < count__23588_23592)){
var v_23594 = cljs.core._nth.call(null,chunk__23587_23591,i__23589_23593);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23594);

var G__23595 = seq__23586_23590;
var G__23596 = chunk__23587_23591;
var G__23597 = count__23588_23592;
var G__23598 = (i__23589_23593 + (1));
seq__23586_23590 = G__23595;
chunk__23587_23591 = G__23596;
count__23588_23592 = G__23597;
i__23589_23593 = G__23598;
continue;
} else {
var temp__4657__auto___23599 = cljs.core.seq.call(null,seq__23586_23590);
if(temp__4657__auto___23599){
var seq__23586_23600__$1 = temp__4657__auto___23599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23586_23600__$1)){
var c__22855__auto___23601 = cljs.core.chunk_first.call(null,seq__23586_23600__$1);
var G__23602 = cljs.core.chunk_rest.call(null,seq__23586_23600__$1);
var G__23603 = c__22855__auto___23601;
var G__23604 = cljs.core.count.call(null,c__22855__auto___23601);
var G__23605 = (0);
seq__23586_23590 = G__23602;
chunk__23587_23591 = G__23603;
count__23588_23592 = G__23604;
i__23589_23593 = G__23605;
continue;
} else {
var v_23606 = cljs.core.first.call(null,seq__23586_23600__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_23606);

var G__23607 = cljs.core.next.call(null,seq__23586_23600__$1);
var G__23608 = null;
var G__23609 = (0);
var G__23610 = (0);
seq__23586_23590 = G__23607;
chunk__23587_23591 = G__23608;
count__23588_23592 = G__23609;
i__23589_23593 = G__23610;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1473616887807