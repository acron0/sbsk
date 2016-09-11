// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__22044__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22044__auto__){
return or__22044__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__22044__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29485_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29485_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29490 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29491 = null;
var count__29492 = (0);
var i__29493 = (0);
while(true){
if((i__29493 < count__29492)){
var n = cljs.core._nth.call(null,chunk__29491,i__29493);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29494 = seq__29490;
var G__29495 = chunk__29491;
var G__29496 = count__29492;
var G__29497 = (i__29493 + (1));
seq__29490 = G__29494;
chunk__29491 = G__29495;
count__29492 = G__29496;
i__29493 = G__29497;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29490);
if(temp__4657__auto__){
var seq__29490__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29490__$1)){
var c__22855__auto__ = cljs.core.chunk_first.call(null,seq__29490__$1);
var G__29498 = cljs.core.chunk_rest.call(null,seq__29490__$1);
var G__29499 = c__22855__auto__;
var G__29500 = cljs.core.count.call(null,c__22855__auto__);
var G__29501 = (0);
seq__29490 = G__29498;
chunk__29491 = G__29499;
count__29492 = G__29500;
i__29493 = G__29501;
continue;
} else {
var n = cljs.core.first.call(null,seq__29490__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29502 = cljs.core.next.call(null,seq__29490__$1);
var G__29503 = null;
var G__29504 = (0);
var G__29505 = (0);
seq__29490 = G__29502;
chunk__29491 = G__29503;
count__29492 = G__29504;
i__29493 = G__29505;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29556_29567 = cljs.core.seq.call(null,deps);
var chunk__29557_29568 = null;
var count__29558_29569 = (0);
var i__29559_29570 = (0);
while(true){
if((i__29559_29570 < count__29558_29569)){
var dep_29571 = cljs.core._nth.call(null,chunk__29557_29568,i__29559_29570);
topo_sort_helper_STAR_.call(null,dep_29571,(depth + (1)),state);

var G__29572 = seq__29556_29567;
var G__29573 = chunk__29557_29568;
var G__29574 = count__29558_29569;
var G__29575 = (i__29559_29570 + (1));
seq__29556_29567 = G__29572;
chunk__29557_29568 = G__29573;
count__29558_29569 = G__29574;
i__29559_29570 = G__29575;
continue;
} else {
var temp__4657__auto___29576 = cljs.core.seq.call(null,seq__29556_29567);
if(temp__4657__auto___29576){
var seq__29556_29577__$1 = temp__4657__auto___29576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29556_29577__$1)){
var c__22855__auto___29578 = cljs.core.chunk_first.call(null,seq__29556_29577__$1);
var G__29579 = cljs.core.chunk_rest.call(null,seq__29556_29577__$1);
var G__29580 = c__22855__auto___29578;
var G__29581 = cljs.core.count.call(null,c__22855__auto___29578);
var G__29582 = (0);
seq__29556_29567 = G__29579;
chunk__29557_29568 = G__29580;
count__29558_29569 = G__29581;
i__29559_29570 = G__29582;
continue;
} else {
var dep_29583 = cljs.core.first.call(null,seq__29556_29577__$1);
topo_sort_helper_STAR_.call(null,dep_29583,(depth + (1)),state);

var G__29584 = cljs.core.next.call(null,seq__29556_29577__$1);
var G__29585 = null;
var G__29586 = (0);
var G__29587 = (0);
seq__29556_29567 = G__29584;
chunk__29557_29568 = G__29585;
count__29558_29569 = G__29586;
i__29559_29570 = G__29587;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29560){
var vec__29564 = p__29560;
var seq__29565 = cljs.core.seq.call(null,vec__29564);
var first__29566 = cljs.core.first.call(null,seq__29565);
var seq__29565__$1 = cljs.core.next.call(null,seq__29565);
var x = first__29566;
var xs = seq__29565__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29564,seq__29565,first__29566,seq__29565__$1,x,xs,get_deps__$1){
return (function (p1__29506_SHARP_){
return clojure.set.difference.call(null,p1__29506_SHARP_,x);
});})(vec__29564,seq__29565,first__29566,seq__29565__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29600 = cljs.core.seq.call(null,provides);
var chunk__29601 = null;
var count__29602 = (0);
var i__29603 = (0);
while(true){
if((i__29603 < count__29602)){
var prov = cljs.core._nth.call(null,chunk__29601,i__29603);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29604_29612 = cljs.core.seq.call(null,requires);
var chunk__29605_29613 = null;
var count__29606_29614 = (0);
var i__29607_29615 = (0);
while(true){
if((i__29607_29615 < count__29606_29614)){
var req_29616 = cljs.core._nth.call(null,chunk__29605_29613,i__29607_29615);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29616,prov);

var G__29617 = seq__29604_29612;
var G__29618 = chunk__29605_29613;
var G__29619 = count__29606_29614;
var G__29620 = (i__29607_29615 + (1));
seq__29604_29612 = G__29617;
chunk__29605_29613 = G__29618;
count__29606_29614 = G__29619;
i__29607_29615 = G__29620;
continue;
} else {
var temp__4657__auto___29621 = cljs.core.seq.call(null,seq__29604_29612);
if(temp__4657__auto___29621){
var seq__29604_29622__$1 = temp__4657__auto___29621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29604_29622__$1)){
var c__22855__auto___29623 = cljs.core.chunk_first.call(null,seq__29604_29622__$1);
var G__29624 = cljs.core.chunk_rest.call(null,seq__29604_29622__$1);
var G__29625 = c__22855__auto___29623;
var G__29626 = cljs.core.count.call(null,c__22855__auto___29623);
var G__29627 = (0);
seq__29604_29612 = G__29624;
chunk__29605_29613 = G__29625;
count__29606_29614 = G__29626;
i__29607_29615 = G__29627;
continue;
} else {
var req_29628 = cljs.core.first.call(null,seq__29604_29622__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29628,prov);

var G__29629 = cljs.core.next.call(null,seq__29604_29622__$1);
var G__29630 = null;
var G__29631 = (0);
var G__29632 = (0);
seq__29604_29612 = G__29629;
chunk__29605_29613 = G__29630;
count__29606_29614 = G__29631;
i__29607_29615 = G__29632;
continue;
}
} else {
}
}
break;
}

var G__29633 = seq__29600;
var G__29634 = chunk__29601;
var G__29635 = count__29602;
var G__29636 = (i__29603 + (1));
seq__29600 = G__29633;
chunk__29601 = G__29634;
count__29602 = G__29635;
i__29603 = G__29636;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29600);
if(temp__4657__auto__){
var seq__29600__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29600__$1)){
var c__22855__auto__ = cljs.core.chunk_first.call(null,seq__29600__$1);
var G__29637 = cljs.core.chunk_rest.call(null,seq__29600__$1);
var G__29638 = c__22855__auto__;
var G__29639 = cljs.core.count.call(null,c__22855__auto__);
var G__29640 = (0);
seq__29600 = G__29637;
chunk__29601 = G__29638;
count__29602 = G__29639;
i__29603 = G__29640;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29600__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29608_29641 = cljs.core.seq.call(null,requires);
var chunk__29609_29642 = null;
var count__29610_29643 = (0);
var i__29611_29644 = (0);
while(true){
if((i__29611_29644 < count__29610_29643)){
var req_29645 = cljs.core._nth.call(null,chunk__29609_29642,i__29611_29644);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29645,prov);

var G__29646 = seq__29608_29641;
var G__29647 = chunk__29609_29642;
var G__29648 = count__29610_29643;
var G__29649 = (i__29611_29644 + (1));
seq__29608_29641 = G__29646;
chunk__29609_29642 = G__29647;
count__29610_29643 = G__29648;
i__29611_29644 = G__29649;
continue;
} else {
var temp__4657__auto___29650__$1 = cljs.core.seq.call(null,seq__29608_29641);
if(temp__4657__auto___29650__$1){
var seq__29608_29651__$1 = temp__4657__auto___29650__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29608_29651__$1)){
var c__22855__auto___29652 = cljs.core.chunk_first.call(null,seq__29608_29651__$1);
var G__29653 = cljs.core.chunk_rest.call(null,seq__29608_29651__$1);
var G__29654 = c__22855__auto___29652;
var G__29655 = cljs.core.count.call(null,c__22855__auto___29652);
var G__29656 = (0);
seq__29608_29641 = G__29653;
chunk__29609_29642 = G__29654;
count__29610_29643 = G__29655;
i__29611_29644 = G__29656;
continue;
} else {
var req_29657 = cljs.core.first.call(null,seq__29608_29651__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29657,prov);

var G__29658 = cljs.core.next.call(null,seq__29608_29651__$1);
var G__29659 = null;
var G__29660 = (0);
var G__29661 = (0);
seq__29608_29641 = G__29658;
chunk__29609_29642 = G__29659;
count__29610_29643 = G__29660;
i__29611_29644 = G__29661;
continue;
}
} else {
}
}
break;
}

var G__29662 = cljs.core.next.call(null,seq__29600__$1);
var G__29663 = null;
var G__29664 = (0);
var G__29665 = (0);
seq__29600 = G__29662;
chunk__29601 = G__29663;
count__29602 = G__29664;
i__29603 = G__29665;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29670_29674 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29671_29675 = null;
var count__29672_29676 = (0);
var i__29673_29677 = (0);
while(true){
if((i__29673_29677 < count__29672_29676)){
var ns_29678 = cljs.core._nth.call(null,chunk__29671_29675,i__29673_29677);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29678);

var G__29679 = seq__29670_29674;
var G__29680 = chunk__29671_29675;
var G__29681 = count__29672_29676;
var G__29682 = (i__29673_29677 + (1));
seq__29670_29674 = G__29679;
chunk__29671_29675 = G__29680;
count__29672_29676 = G__29681;
i__29673_29677 = G__29682;
continue;
} else {
var temp__4657__auto___29683 = cljs.core.seq.call(null,seq__29670_29674);
if(temp__4657__auto___29683){
var seq__29670_29684__$1 = temp__4657__auto___29683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29670_29684__$1)){
var c__22855__auto___29685 = cljs.core.chunk_first.call(null,seq__29670_29684__$1);
var G__29686 = cljs.core.chunk_rest.call(null,seq__29670_29684__$1);
var G__29687 = c__22855__auto___29685;
var G__29688 = cljs.core.count.call(null,c__22855__auto___29685);
var G__29689 = (0);
seq__29670_29674 = G__29686;
chunk__29671_29675 = G__29687;
count__29672_29676 = G__29688;
i__29673_29677 = G__29689;
continue;
} else {
var ns_29690 = cljs.core.first.call(null,seq__29670_29684__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29690);

var G__29691 = cljs.core.next.call(null,seq__29670_29684__$1);
var G__29692 = null;
var G__29693 = (0);
var G__29694 = (0);
seq__29670_29674 = G__29691;
chunk__29671_29675 = G__29692;
count__29672_29676 = G__29693;
i__29673_29677 = G__29694;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__22044__auto__ = goog.require__;
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29695__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29696__i = 0, G__29696__a = new Array(arguments.length -  0);
while (G__29696__i < G__29696__a.length) {G__29696__a[G__29696__i] = arguments[G__29696__i + 0]; ++G__29696__i;}
  args = new cljs.core.IndexedSeq(G__29696__a,0);
} 
return G__29695__delegate.call(this,args);};
G__29695.cljs$lang$maxFixedArity = 0;
G__29695.cljs$lang$applyTo = (function (arglist__29697){
var args = cljs.core.seq(arglist__29697);
return G__29695__delegate(args);
});
G__29695.cljs$core$IFn$_invoke$arity$variadic = G__29695__delegate;
return G__29695;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29699 = cljs.core._EQ_;
var expr__29700 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29699.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29700))){
var path_parts = ((function (pred__29699,expr__29700){
return (function (p1__29698_SHARP_){
return clojure.string.split.call(null,p1__29698_SHARP_,/[\/\\]/);
});})(pred__29699,expr__29700))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29699,expr__29700){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29702){if((e29702 instanceof Error)){
var e = e29702;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29702;

}
}})());
});
;})(path_parts,sep,root,pred__29699,expr__29700))
} else {
if(cljs.core.truth_(pred__29699.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29700))){
return ((function (pred__29699,expr__29700){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29699,expr__29700){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29699,expr__29700))
);

return deferred.addErrback(((function (deferred,pred__29699,expr__29700){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29699,expr__29700))
);
});
;})(pred__29699,expr__29700))
} else {
return ((function (pred__29699,expr__29700){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29699,expr__29700))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29703,callback){
var map__29706 = p__29703;
var map__29706__$1 = ((((!((map__29706 == null)))?((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706):map__29706);
var file_msg = map__29706__$1;
var request_url = cljs.core.get.call(null,map__29706__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29706,map__29706__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29706,map__29706__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__){
return (function (state_29730){
var state_val_29731 = (state_29730[(1)]);
if((state_val_29731 === (7))){
var inst_29726 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
var statearr_29732_29752 = state_29730__$1;
(statearr_29732_29752[(2)] = inst_29726);

(statearr_29732_29752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (1))){
var state_29730__$1 = state_29730;
var statearr_29733_29753 = state_29730__$1;
(statearr_29733_29753[(2)] = null);

(statearr_29733_29753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (4))){
var inst_29710 = (state_29730[(7)]);
var inst_29710__$1 = (state_29730[(2)]);
var state_29730__$1 = (function (){var statearr_29734 = state_29730;
(statearr_29734[(7)] = inst_29710__$1);

return statearr_29734;
})();
if(cljs.core.truth_(inst_29710__$1)){
var statearr_29735_29754 = state_29730__$1;
(statearr_29735_29754[(1)] = (5));

} else {
var statearr_29736_29755 = state_29730__$1;
(statearr_29736_29755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (6))){
var state_29730__$1 = state_29730;
var statearr_29737_29756 = state_29730__$1;
(statearr_29737_29756[(2)] = null);

(statearr_29737_29756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (3))){
var inst_29728 = (state_29730[(2)]);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29730__$1,inst_29728);
} else {
if((state_val_29731 === (2))){
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29731 === (11))){
var inst_29722 = (state_29730[(2)]);
var state_29730__$1 = (function (){var statearr_29738 = state_29730;
(statearr_29738[(8)] = inst_29722);

return statearr_29738;
})();
var statearr_29739_29757 = state_29730__$1;
(statearr_29739_29757[(2)] = null);

(statearr_29739_29757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (9))){
var inst_29714 = (state_29730[(9)]);
var inst_29716 = (state_29730[(10)]);
var inst_29718 = inst_29716.call(null,inst_29714);
var state_29730__$1 = state_29730;
var statearr_29740_29758 = state_29730__$1;
(statearr_29740_29758[(2)] = inst_29718);

(statearr_29740_29758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (5))){
var inst_29710 = (state_29730[(7)]);
var inst_29712 = figwheel.client.file_reloading.blocking_load.call(null,inst_29710);
var state_29730__$1 = state_29730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29730__$1,(8),inst_29712);
} else {
if((state_val_29731 === (10))){
var inst_29714 = (state_29730[(9)]);
var inst_29720 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29714);
var state_29730__$1 = state_29730;
var statearr_29741_29759 = state_29730__$1;
(statearr_29741_29759[(2)] = inst_29720);

(statearr_29741_29759[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29731 === (8))){
var inst_29710 = (state_29730[(7)]);
var inst_29716 = (state_29730[(10)]);
var inst_29714 = (state_29730[(2)]);
var inst_29715 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29716__$1 = cljs.core.get.call(null,inst_29715,inst_29710);
var state_29730__$1 = (function (){var statearr_29742 = state_29730;
(statearr_29742[(9)] = inst_29714);

(statearr_29742[(10)] = inst_29716__$1);

return statearr_29742;
})();
if(cljs.core.truth_(inst_29716__$1)){
var statearr_29743_29760 = state_29730__$1;
(statearr_29743_29760[(1)] = (9));

} else {
var statearr_29744_29761 = state_29730__$1;
(statearr_29744_29761[(1)] = (10));

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
});})(c__26630__auto__))
;
return ((function (switch__26518__auto__,c__26630__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26519__auto__ = null;
var figwheel$client$file_reloading$state_machine__26519__auto____0 = (function (){
var statearr_29748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29748[(0)] = figwheel$client$file_reloading$state_machine__26519__auto__);

(statearr_29748[(1)] = (1));

return statearr_29748;
});
var figwheel$client$file_reloading$state_machine__26519__auto____1 = (function (state_29730){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_29730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e29749){if((e29749 instanceof Object)){
var ex__26522__auto__ = e29749;
var statearr_29750_29762 = state_29730;
(statearr_29750_29762[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29763 = state_29730;
state_29730 = G__29763;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26519__auto__ = function(state_29730){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26519__auto____1.call(this,state_29730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26519__auto____0;
figwheel$client$file_reloading$state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26519__auto____1;
return figwheel$client$file_reloading$state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__))
})();
var state__26632__auto__ = (function (){var statearr_29751 = f__26631__auto__.call(null);
(statearr_29751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_29751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__))
);

return c__26630__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29764,callback){
var map__29767 = p__29764;
var map__29767__$1 = ((((!((map__29767 == null)))?((((map__29767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29767):map__29767);
var file_msg = map__29767__$1;
var namespace = cljs.core.get.call(null,map__29767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29767,map__29767__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29767,map__29767__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29769){
var map__29772 = p__29769;
var map__29772__$1 = ((((!((map__29772 == null)))?((((map__29772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29772):map__29772);
var file_msg = map__29772__$1;
var namespace = cljs.core.get.call(null,map__29772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22032__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22032__auto__){
var or__22044__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
var or__22044__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22044__auto____$1)){
return or__22044__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22032__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29774,callback){
var map__29777 = p__29774;
var map__29777__$1 = ((((!((map__29777 == null)))?((((map__29777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29777):map__29777);
var file_msg = map__29777__$1;
var request_url = cljs.core.get.call(null,map__29777__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29777__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26630__auto___29881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___29881,out){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___29881,out){
return (function (state_29863){
var state_val_29864 = (state_29863[(1)]);
if((state_val_29864 === (1))){
var inst_29837 = cljs.core.seq.call(null,files);
var inst_29838 = cljs.core.first.call(null,inst_29837);
var inst_29839 = cljs.core.next.call(null,inst_29837);
var inst_29840 = files;
var state_29863__$1 = (function (){var statearr_29865 = state_29863;
(statearr_29865[(7)] = inst_29838);

(statearr_29865[(8)] = inst_29839);

(statearr_29865[(9)] = inst_29840);

return statearr_29865;
})();
var statearr_29866_29882 = state_29863__$1;
(statearr_29866_29882[(2)] = null);

(statearr_29866_29882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (2))){
var inst_29846 = (state_29863[(10)]);
var inst_29840 = (state_29863[(9)]);
var inst_29845 = cljs.core.seq.call(null,inst_29840);
var inst_29846__$1 = cljs.core.first.call(null,inst_29845);
var inst_29847 = cljs.core.next.call(null,inst_29845);
var inst_29848 = (inst_29846__$1 == null);
var inst_29849 = cljs.core.not.call(null,inst_29848);
var state_29863__$1 = (function (){var statearr_29867 = state_29863;
(statearr_29867[(11)] = inst_29847);

(statearr_29867[(10)] = inst_29846__$1);

return statearr_29867;
})();
if(inst_29849){
var statearr_29868_29883 = state_29863__$1;
(statearr_29868_29883[(1)] = (4));

} else {
var statearr_29869_29884 = state_29863__$1;
(statearr_29869_29884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (3))){
var inst_29861 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29863__$1,inst_29861);
} else {
if((state_val_29864 === (4))){
var inst_29846 = (state_29863[(10)]);
var inst_29851 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29846);
var state_29863__$1 = state_29863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29863__$1,(7),inst_29851);
} else {
if((state_val_29864 === (5))){
var inst_29857 = cljs.core.async.close_BANG_.call(null,out);
var state_29863__$1 = state_29863;
var statearr_29870_29885 = state_29863__$1;
(statearr_29870_29885[(2)] = inst_29857);

(statearr_29870_29885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (6))){
var inst_29859 = (state_29863[(2)]);
var state_29863__$1 = state_29863;
var statearr_29871_29886 = state_29863__$1;
(statearr_29871_29886[(2)] = inst_29859);

(statearr_29871_29886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29864 === (7))){
var inst_29847 = (state_29863[(11)]);
var inst_29853 = (state_29863[(2)]);
var inst_29854 = cljs.core.async.put_BANG_.call(null,out,inst_29853);
var inst_29840 = inst_29847;
var state_29863__$1 = (function (){var statearr_29872 = state_29863;
(statearr_29872[(12)] = inst_29854);

(statearr_29872[(9)] = inst_29840);

return statearr_29872;
})();
var statearr_29873_29887 = state_29863__$1;
(statearr_29873_29887[(2)] = null);

(statearr_29873_29887[(1)] = (2));


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
});})(c__26630__auto___29881,out))
;
return ((function (switch__26518__auto__,c__26630__auto___29881,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto____0 = (function (){
var statearr_29877 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29877[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto__);

(statearr_29877[(1)] = (1));

return statearr_29877;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto____1 = (function (state_29863){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_29863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e29878){if((e29878 instanceof Object)){
var ex__26522__auto__ = e29878;
var statearr_29879_29888 = state_29863;
(statearr_29879_29888[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29889 = state_29863;
state_29863 = G__29889;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto__ = function(state_29863){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto____1.call(this,state_29863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___29881,out))
})();
var state__26632__auto__ = (function (){var statearr_29880 = f__26631__auto__.call(null);
(statearr_29880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___29881);

return statearr_29880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___29881,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29890,opts){
var map__29894 = p__29890;
var map__29894__$1 = ((((!((map__29894 == null)))?((((map__29894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29894):map__29894);
var eval_body__$1 = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22032__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22032__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22032__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29896){var e = e29896;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29897_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29897_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29906){
var vec__29907 = p__29906;
var k = cljs.core.nth.call(null,vec__29907,(0),null);
var v = cljs.core.nth.call(null,vec__29907,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29910){
var vec__29911 = p__29910;
var k = cljs.core.nth.call(null,vec__29911,(0),null);
var v = cljs.core.nth.call(null,vec__29911,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29917,p__29918){
var map__30165 = p__29917;
var map__30165__$1 = ((((!((map__30165 == null)))?((((map__30165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30165):map__30165);
var opts = map__30165__$1;
var before_jsload = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30165__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30166 = p__29918;
var map__30166__$1 = ((((!((map__30166 == null)))?((((map__30166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30166):map__30166);
var msg = map__30166__$1;
var files = cljs.core.get.call(null,map__30166__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30166__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30166__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30319){
var state_val_30320 = (state_30319[(1)]);
if((state_val_30320 === (7))){
var inst_30180 = (state_30319[(7)]);
var inst_30182 = (state_30319[(8)]);
var inst_30183 = (state_30319[(9)]);
var inst_30181 = (state_30319[(10)]);
var inst_30188 = cljs.core._nth.call(null,inst_30181,inst_30183);
var inst_30189 = figwheel.client.file_reloading.eval_body.call(null,inst_30188,opts);
var inst_30190 = (inst_30183 + (1));
var tmp30321 = inst_30180;
var tmp30322 = inst_30182;
var tmp30323 = inst_30181;
var inst_30180__$1 = tmp30321;
var inst_30181__$1 = tmp30323;
var inst_30182__$1 = tmp30322;
var inst_30183__$1 = inst_30190;
var state_30319__$1 = (function (){var statearr_30324 = state_30319;
(statearr_30324[(7)] = inst_30180__$1);

(statearr_30324[(11)] = inst_30189);

(statearr_30324[(8)] = inst_30182__$1);

(statearr_30324[(9)] = inst_30183__$1);

(statearr_30324[(10)] = inst_30181__$1);

return statearr_30324;
})();
var statearr_30325_30411 = state_30319__$1;
(statearr_30325_30411[(2)] = null);

(statearr_30325_30411[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (20))){
var inst_30223 = (state_30319[(12)]);
var inst_30231 = figwheel.client.file_reloading.sort_files.call(null,inst_30223);
var state_30319__$1 = state_30319;
var statearr_30326_30412 = state_30319__$1;
(statearr_30326_30412[(2)] = inst_30231);

(statearr_30326_30412[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (27))){
var state_30319__$1 = state_30319;
var statearr_30327_30413 = state_30319__$1;
(statearr_30327_30413[(2)] = null);

(statearr_30327_30413[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (1))){
var inst_30172 = (state_30319[(13)]);
var inst_30169 = before_jsload.call(null,files);
var inst_30170 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30171 = (function (){return ((function (inst_30172,inst_30169,inst_30170,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29914_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29914_SHARP_);
});
;})(inst_30172,inst_30169,inst_30170,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30172__$1 = cljs.core.filter.call(null,inst_30171,files);
var inst_30173 = cljs.core.not_empty.call(null,inst_30172__$1);
var state_30319__$1 = (function (){var statearr_30328 = state_30319;
(statearr_30328[(14)] = inst_30169);

(statearr_30328[(15)] = inst_30170);

(statearr_30328[(13)] = inst_30172__$1);

return statearr_30328;
})();
if(cljs.core.truth_(inst_30173)){
var statearr_30329_30414 = state_30319__$1;
(statearr_30329_30414[(1)] = (2));

} else {
var statearr_30330_30415 = state_30319__$1;
(statearr_30330_30415[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (24))){
var state_30319__$1 = state_30319;
var statearr_30331_30416 = state_30319__$1;
(statearr_30331_30416[(2)] = null);

(statearr_30331_30416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (39))){
var inst_30273 = (state_30319[(16)]);
var state_30319__$1 = state_30319;
var statearr_30332_30417 = state_30319__$1;
(statearr_30332_30417[(2)] = inst_30273);

(statearr_30332_30417[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (46))){
var inst_30314 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
var statearr_30333_30418 = state_30319__$1;
(statearr_30333_30418[(2)] = inst_30314);

(statearr_30333_30418[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (4))){
var inst_30217 = (state_30319[(2)]);
var inst_30218 = cljs.core.List.EMPTY;
var inst_30219 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30218);
var inst_30220 = (function (){return ((function (inst_30217,inst_30218,inst_30219,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29915_SHARP_){
var and__22032__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29915_SHARP_);
if(cljs.core.truth_(and__22032__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29915_SHARP_));
} else {
return and__22032__auto__;
}
});
;})(inst_30217,inst_30218,inst_30219,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30221 = cljs.core.filter.call(null,inst_30220,files);
var inst_30222 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30223 = cljs.core.concat.call(null,inst_30221,inst_30222);
var state_30319__$1 = (function (){var statearr_30334 = state_30319;
(statearr_30334[(17)] = inst_30219);

(statearr_30334[(18)] = inst_30217);

(statearr_30334[(12)] = inst_30223);

return statearr_30334;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30335_30419 = state_30319__$1;
(statearr_30335_30419[(1)] = (16));

} else {
var statearr_30336_30420 = state_30319__$1;
(statearr_30336_30420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (15))){
var inst_30207 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
var statearr_30337_30421 = state_30319__$1;
(statearr_30337_30421[(2)] = inst_30207);

(statearr_30337_30421[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (21))){
var inst_30233 = (state_30319[(19)]);
var inst_30233__$1 = (state_30319[(2)]);
var inst_30234 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30233__$1);
var state_30319__$1 = (function (){var statearr_30338 = state_30319;
(statearr_30338[(19)] = inst_30233__$1);

return statearr_30338;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30319__$1,(22),inst_30234);
} else {
if((state_val_30320 === (31))){
var inst_30317 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30319__$1,inst_30317);
} else {
if((state_val_30320 === (32))){
var inst_30273 = (state_30319[(16)]);
var inst_30278 = inst_30273.cljs$lang$protocol_mask$partition0$;
var inst_30279 = (inst_30278 & (64));
var inst_30280 = inst_30273.cljs$core$ISeq$;
var inst_30281 = (inst_30279) || (inst_30280);
var state_30319__$1 = state_30319;
if(cljs.core.truth_(inst_30281)){
var statearr_30339_30422 = state_30319__$1;
(statearr_30339_30422[(1)] = (35));

} else {
var statearr_30340_30423 = state_30319__$1;
(statearr_30340_30423[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (40))){
var inst_30294 = (state_30319[(20)]);
var inst_30293 = (state_30319[(2)]);
var inst_30294__$1 = cljs.core.get.call(null,inst_30293,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30295 = cljs.core.get.call(null,inst_30293,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30296 = cljs.core.not_empty.call(null,inst_30294__$1);
var state_30319__$1 = (function (){var statearr_30341 = state_30319;
(statearr_30341[(20)] = inst_30294__$1);

(statearr_30341[(21)] = inst_30295);

return statearr_30341;
})();
if(cljs.core.truth_(inst_30296)){
var statearr_30342_30424 = state_30319__$1;
(statearr_30342_30424[(1)] = (41));

} else {
var statearr_30343_30425 = state_30319__$1;
(statearr_30343_30425[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (33))){
var state_30319__$1 = state_30319;
var statearr_30344_30426 = state_30319__$1;
(statearr_30344_30426[(2)] = false);

(statearr_30344_30426[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (13))){
var inst_30193 = (state_30319[(22)]);
var inst_30197 = cljs.core.chunk_first.call(null,inst_30193);
var inst_30198 = cljs.core.chunk_rest.call(null,inst_30193);
var inst_30199 = cljs.core.count.call(null,inst_30197);
var inst_30180 = inst_30198;
var inst_30181 = inst_30197;
var inst_30182 = inst_30199;
var inst_30183 = (0);
var state_30319__$1 = (function (){var statearr_30345 = state_30319;
(statearr_30345[(7)] = inst_30180);

(statearr_30345[(8)] = inst_30182);

(statearr_30345[(9)] = inst_30183);

(statearr_30345[(10)] = inst_30181);

return statearr_30345;
})();
var statearr_30346_30427 = state_30319__$1;
(statearr_30346_30427[(2)] = null);

(statearr_30346_30427[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (22))){
var inst_30236 = (state_30319[(23)]);
var inst_30241 = (state_30319[(24)]);
var inst_30237 = (state_30319[(25)]);
var inst_30233 = (state_30319[(19)]);
var inst_30236__$1 = (state_30319[(2)]);
var inst_30237__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30236__$1);
var inst_30238 = (function (){var all_files = inst_30233;
var res_SINGLEQUOTE_ = inst_30236__$1;
var res = inst_30237__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30236,inst_30241,inst_30237,inst_30233,inst_30236__$1,inst_30237__$1,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29916_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29916_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30236,inst_30241,inst_30237,inst_30233,inst_30236__$1,inst_30237__$1,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30239 = cljs.core.filter.call(null,inst_30238,inst_30236__$1);
var inst_30240 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30241__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30240);
var inst_30242 = cljs.core.not_empty.call(null,inst_30241__$1);
var state_30319__$1 = (function (){var statearr_30347 = state_30319;
(statearr_30347[(23)] = inst_30236__$1);

(statearr_30347[(26)] = inst_30239);

(statearr_30347[(24)] = inst_30241__$1);

(statearr_30347[(25)] = inst_30237__$1);

return statearr_30347;
})();
if(cljs.core.truth_(inst_30242)){
var statearr_30348_30428 = state_30319__$1;
(statearr_30348_30428[(1)] = (23));

} else {
var statearr_30349_30429 = state_30319__$1;
(statearr_30349_30429[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (36))){
var state_30319__$1 = state_30319;
var statearr_30350_30430 = state_30319__$1;
(statearr_30350_30430[(2)] = false);

(statearr_30350_30430[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (41))){
var inst_30294 = (state_30319[(20)]);
var inst_30298 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30299 = cljs.core.map.call(null,inst_30298,inst_30294);
var inst_30300 = cljs.core.pr_str.call(null,inst_30299);
var inst_30301 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30300)].join('');
var inst_30302 = figwheel.client.utils.log.call(null,inst_30301);
var state_30319__$1 = state_30319;
var statearr_30351_30431 = state_30319__$1;
(statearr_30351_30431[(2)] = inst_30302);

(statearr_30351_30431[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (43))){
var inst_30295 = (state_30319[(21)]);
var inst_30305 = (state_30319[(2)]);
var inst_30306 = cljs.core.not_empty.call(null,inst_30295);
var state_30319__$1 = (function (){var statearr_30352 = state_30319;
(statearr_30352[(27)] = inst_30305);

return statearr_30352;
})();
if(cljs.core.truth_(inst_30306)){
var statearr_30353_30432 = state_30319__$1;
(statearr_30353_30432[(1)] = (44));

} else {
var statearr_30354_30433 = state_30319__$1;
(statearr_30354_30433[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (29))){
var inst_30236 = (state_30319[(23)]);
var inst_30273 = (state_30319[(16)]);
var inst_30239 = (state_30319[(26)]);
var inst_30241 = (state_30319[(24)]);
var inst_30237 = (state_30319[(25)]);
var inst_30233 = (state_30319[(19)]);
var inst_30269 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30272 = (function (){var all_files = inst_30233;
var res_SINGLEQUOTE_ = inst_30236;
var res = inst_30237;
var files_not_loaded = inst_30239;
var dependencies_that_loaded = inst_30241;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30236,inst_30273,inst_30239,inst_30241,inst_30237,inst_30233,inst_30269,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30271){
var map__30355 = p__30271;
var map__30355__$1 = ((((!((map__30355 == null)))?((((map__30355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30355):map__30355);
var namespace = cljs.core.get.call(null,map__30355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30236,inst_30273,inst_30239,inst_30241,inst_30237,inst_30233,inst_30269,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30273__$1 = cljs.core.group_by.call(null,inst_30272,inst_30239);
var inst_30275 = (inst_30273__$1 == null);
var inst_30276 = cljs.core.not.call(null,inst_30275);
var state_30319__$1 = (function (){var statearr_30357 = state_30319;
(statearr_30357[(28)] = inst_30269);

(statearr_30357[(16)] = inst_30273__$1);

return statearr_30357;
})();
if(inst_30276){
var statearr_30358_30434 = state_30319__$1;
(statearr_30358_30434[(1)] = (32));

} else {
var statearr_30359_30435 = state_30319__$1;
(statearr_30359_30435[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (44))){
var inst_30295 = (state_30319[(21)]);
var inst_30308 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30295);
var inst_30309 = cljs.core.pr_str.call(null,inst_30308);
var inst_30310 = [cljs.core.str("not required: "),cljs.core.str(inst_30309)].join('');
var inst_30311 = figwheel.client.utils.log.call(null,inst_30310);
var state_30319__$1 = state_30319;
var statearr_30360_30436 = state_30319__$1;
(statearr_30360_30436[(2)] = inst_30311);

(statearr_30360_30436[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (6))){
var inst_30214 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
var statearr_30361_30437 = state_30319__$1;
(statearr_30361_30437[(2)] = inst_30214);

(statearr_30361_30437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (28))){
var inst_30239 = (state_30319[(26)]);
var inst_30266 = (state_30319[(2)]);
var inst_30267 = cljs.core.not_empty.call(null,inst_30239);
var state_30319__$1 = (function (){var statearr_30362 = state_30319;
(statearr_30362[(29)] = inst_30266);

return statearr_30362;
})();
if(cljs.core.truth_(inst_30267)){
var statearr_30363_30438 = state_30319__$1;
(statearr_30363_30438[(1)] = (29));

} else {
var statearr_30364_30439 = state_30319__$1;
(statearr_30364_30439[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (25))){
var inst_30237 = (state_30319[(25)]);
var inst_30253 = (state_30319[(2)]);
var inst_30254 = cljs.core.not_empty.call(null,inst_30237);
var state_30319__$1 = (function (){var statearr_30365 = state_30319;
(statearr_30365[(30)] = inst_30253);

return statearr_30365;
})();
if(cljs.core.truth_(inst_30254)){
var statearr_30366_30440 = state_30319__$1;
(statearr_30366_30440[(1)] = (26));

} else {
var statearr_30367_30441 = state_30319__$1;
(statearr_30367_30441[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (34))){
var inst_30288 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
if(cljs.core.truth_(inst_30288)){
var statearr_30368_30442 = state_30319__$1;
(statearr_30368_30442[(1)] = (38));

} else {
var statearr_30369_30443 = state_30319__$1;
(statearr_30369_30443[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (17))){
var state_30319__$1 = state_30319;
var statearr_30370_30444 = state_30319__$1;
(statearr_30370_30444[(2)] = recompile_dependents);

(statearr_30370_30444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (3))){
var state_30319__$1 = state_30319;
var statearr_30371_30445 = state_30319__$1;
(statearr_30371_30445[(2)] = null);

(statearr_30371_30445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (12))){
var inst_30210 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
var statearr_30372_30446 = state_30319__$1;
(statearr_30372_30446[(2)] = inst_30210);

(statearr_30372_30446[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (2))){
var inst_30172 = (state_30319[(13)]);
var inst_30179 = cljs.core.seq.call(null,inst_30172);
var inst_30180 = inst_30179;
var inst_30181 = null;
var inst_30182 = (0);
var inst_30183 = (0);
var state_30319__$1 = (function (){var statearr_30373 = state_30319;
(statearr_30373[(7)] = inst_30180);

(statearr_30373[(8)] = inst_30182);

(statearr_30373[(9)] = inst_30183);

(statearr_30373[(10)] = inst_30181);

return statearr_30373;
})();
var statearr_30374_30447 = state_30319__$1;
(statearr_30374_30447[(2)] = null);

(statearr_30374_30447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (23))){
var inst_30236 = (state_30319[(23)]);
var inst_30239 = (state_30319[(26)]);
var inst_30241 = (state_30319[(24)]);
var inst_30237 = (state_30319[(25)]);
var inst_30233 = (state_30319[(19)]);
var inst_30244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30246 = (function (){var all_files = inst_30233;
var res_SINGLEQUOTE_ = inst_30236;
var res = inst_30237;
var files_not_loaded = inst_30239;
var dependencies_that_loaded = inst_30241;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30236,inst_30239,inst_30241,inst_30237,inst_30233,inst_30244,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30245){
var map__30375 = p__30245;
var map__30375__$1 = ((((!((map__30375 == null)))?((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var request_url = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30236,inst_30239,inst_30241,inst_30237,inst_30233,inst_30244,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30247 = cljs.core.reverse.call(null,inst_30241);
var inst_30248 = cljs.core.map.call(null,inst_30246,inst_30247);
var inst_30249 = cljs.core.pr_str.call(null,inst_30248);
var inst_30250 = figwheel.client.utils.log.call(null,inst_30249);
var state_30319__$1 = (function (){var statearr_30377 = state_30319;
(statearr_30377[(31)] = inst_30244);

return statearr_30377;
})();
var statearr_30378_30448 = state_30319__$1;
(statearr_30378_30448[(2)] = inst_30250);

(statearr_30378_30448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (35))){
var state_30319__$1 = state_30319;
var statearr_30379_30449 = state_30319__$1;
(statearr_30379_30449[(2)] = true);

(statearr_30379_30449[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (19))){
var inst_30223 = (state_30319[(12)]);
var inst_30229 = figwheel.client.file_reloading.expand_files.call(null,inst_30223);
var state_30319__$1 = state_30319;
var statearr_30380_30450 = state_30319__$1;
(statearr_30380_30450[(2)] = inst_30229);

(statearr_30380_30450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (11))){
var state_30319__$1 = state_30319;
var statearr_30381_30451 = state_30319__$1;
(statearr_30381_30451[(2)] = null);

(statearr_30381_30451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (9))){
var inst_30212 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
var statearr_30382_30452 = state_30319__$1;
(statearr_30382_30452[(2)] = inst_30212);

(statearr_30382_30452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (5))){
var inst_30182 = (state_30319[(8)]);
var inst_30183 = (state_30319[(9)]);
var inst_30185 = (inst_30183 < inst_30182);
var inst_30186 = inst_30185;
var state_30319__$1 = state_30319;
if(cljs.core.truth_(inst_30186)){
var statearr_30383_30453 = state_30319__$1;
(statearr_30383_30453[(1)] = (7));

} else {
var statearr_30384_30454 = state_30319__$1;
(statearr_30384_30454[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (14))){
var inst_30193 = (state_30319[(22)]);
var inst_30202 = cljs.core.first.call(null,inst_30193);
var inst_30203 = figwheel.client.file_reloading.eval_body.call(null,inst_30202,opts);
var inst_30204 = cljs.core.next.call(null,inst_30193);
var inst_30180 = inst_30204;
var inst_30181 = null;
var inst_30182 = (0);
var inst_30183 = (0);
var state_30319__$1 = (function (){var statearr_30385 = state_30319;
(statearr_30385[(7)] = inst_30180);

(statearr_30385[(32)] = inst_30203);

(statearr_30385[(8)] = inst_30182);

(statearr_30385[(9)] = inst_30183);

(statearr_30385[(10)] = inst_30181);

return statearr_30385;
})();
var statearr_30386_30455 = state_30319__$1;
(statearr_30386_30455[(2)] = null);

(statearr_30386_30455[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (45))){
var state_30319__$1 = state_30319;
var statearr_30387_30456 = state_30319__$1;
(statearr_30387_30456[(2)] = null);

(statearr_30387_30456[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (26))){
var inst_30236 = (state_30319[(23)]);
var inst_30239 = (state_30319[(26)]);
var inst_30241 = (state_30319[(24)]);
var inst_30237 = (state_30319[(25)]);
var inst_30233 = (state_30319[(19)]);
var inst_30256 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30258 = (function (){var all_files = inst_30233;
var res_SINGLEQUOTE_ = inst_30236;
var res = inst_30237;
var files_not_loaded = inst_30239;
var dependencies_that_loaded = inst_30241;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30236,inst_30239,inst_30241,inst_30237,inst_30233,inst_30256,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30257){
var map__30388 = p__30257;
var map__30388__$1 = ((((!((map__30388 == null)))?((((map__30388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30388):map__30388);
var namespace = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30236,inst_30239,inst_30241,inst_30237,inst_30233,inst_30256,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30259 = cljs.core.map.call(null,inst_30258,inst_30237);
var inst_30260 = cljs.core.pr_str.call(null,inst_30259);
var inst_30261 = figwheel.client.utils.log.call(null,inst_30260);
var inst_30262 = (function (){var all_files = inst_30233;
var res_SINGLEQUOTE_ = inst_30236;
var res = inst_30237;
var files_not_loaded = inst_30239;
var dependencies_that_loaded = inst_30241;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30236,inst_30239,inst_30241,inst_30237,inst_30233,inst_30256,inst_30258,inst_30259,inst_30260,inst_30261,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30236,inst_30239,inst_30241,inst_30237,inst_30233,inst_30256,inst_30258,inst_30259,inst_30260,inst_30261,state_val_30320,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30263 = setTimeout(inst_30262,(10));
var state_30319__$1 = (function (){var statearr_30390 = state_30319;
(statearr_30390[(33)] = inst_30256);

(statearr_30390[(34)] = inst_30261);

return statearr_30390;
})();
var statearr_30391_30457 = state_30319__$1;
(statearr_30391_30457[(2)] = inst_30263);

(statearr_30391_30457[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (16))){
var state_30319__$1 = state_30319;
var statearr_30392_30458 = state_30319__$1;
(statearr_30392_30458[(2)] = reload_dependents);

(statearr_30392_30458[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (38))){
var inst_30273 = (state_30319[(16)]);
var inst_30290 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30273);
var state_30319__$1 = state_30319;
var statearr_30393_30459 = state_30319__$1;
(statearr_30393_30459[(2)] = inst_30290);

(statearr_30393_30459[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (30))){
var state_30319__$1 = state_30319;
var statearr_30394_30460 = state_30319__$1;
(statearr_30394_30460[(2)] = null);

(statearr_30394_30460[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (10))){
var inst_30193 = (state_30319[(22)]);
var inst_30195 = cljs.core.chunked_seq_QMARK_.call(null,inst_30193);
var state_30319__$1 = state_30319;
if(inst_30195){
var statearr_30395_30461 = state_30319__$1;
(statearr_30395_30461[(1)] = (13));

} else {
var statearr_30396_30462 = state_30319__$1;
(statearr_30396_30462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (18))){
var inst_30227 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
if(cljs.core.truth_(inst_30227)){
var statearr_30397_30463 = state_30319__$1;
(statearr_30397_30463[(1)] = (19));

} else {
var statearr_30398_30464 = state_30319__$1;
(statearr_30398_30464[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (42))){
var state_30319__$1 = state_30319;
var statearr_30399_30465 = state_30319__$1;
(statearr_30399_30465[(2)] = null);

(statearr_30399_30465[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (37))){
var inst_30285 = (state_30319[(2)]);
var state_30319__$1 = state_30319;
var statearr_30400_30466 = state_30319__$1;
(statearr_30400_30466[(2)] = inst_30285);

(statearr_30400_30466[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30320 === (8))){
var inst_30193 = (state_30319[(22)]);
var inst_30180 = (state_30319[(7)]);
var inst_30193__$1 = cljs.core.seq.call(null,inst_30180);
var state_30319__$1 = (function (){var statearr_30401 = state_30319;
(statearr_30401[(22)] = inst_30193__$1);

return statearr_30401;
})();
if(inst_30193__$1){
var statearr_30402_30467 = state_30319__$1;
(statearr_30402_30467[(1)] = (10));

} else {
var statearr_30403_30468 = state_30319__$1;
(statearr_30403_30468[(1)] = (11));

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
}
});})(c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26518__auto__,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto____0 = (function (){
var statearr_30407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30407[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto__);

(statearr_30407[(1)] = (1));

return statearr_30407;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto____1 = (function (state_30319){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_30319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e30408){if((e30408 instanceof Object)){
var ex__26522__auto__ = e30408;
var statearr_30409_30469 = state_30319;
(statearr_30409_30469[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30470 = state_30319;
state_30319 = G__30470;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto__ = function(state_30319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto____1.call(this,state_30319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26632__auto__ = (function (){var statearr_30410 = f__26631__auto__.call(null);
(statearr_30410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_30410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__,map__30165,map__30165__$1,opts,before_jsload,on_jsload,reload_dependents,map__30166,map__30166__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26630__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30473,link){
var map__30476 = p__30473;
var map__30476__$1 = ((((!((map__30476 == null)))?((((map__30476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30476):map__30476);
var file = cljs.core.get.call(null,map__30476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__30476,map__30476__$1,file){
return (function (p1__30471_SHARP_,p2__30472_SHARP_){
if(cljs.core._EQ_.call(null,p1__30471_SHARP_,p2__30472_SHARP_)){
return p1__30471_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__30476,map__30476__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30482){
var map__30483 = p__30482;
var map__30483__$1 = ((((!((map__30483 == null)))?((((map__30483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30483):map__30483);
var match_length = cljs.core.get.call(null,map__30483__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30483__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30478_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30478_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30485 = [];
var len__23119__auto___30488 = arguments.length;
var i__23120__auto___30489 = (0);
while(true){
if((i__23120__auto___30489 < len__23119__auto___30488)){
args30485.push((arguments[i__23120__auto___30489]));

var G__30490 = (i__23120__auto___30489 + (1));
i__23120__auto___30489 = G__30490;
continue;
} else {
}
break;
}

var G__30487 = args30485.length;
switch (G__30487) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30485.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30492_SHARP_,p2__30493_SHARP_){
return cljs.core.assoc.call(null,p1__30492_SHARP_,cljs.core.get.call(null,p2__30493_SHARP_,key),p2__30493_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30494){
var map__30497 = p__30494;
var map__30497__$1 = ((((!((map__30497 == null)))?((((map__30497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30497):map__30497);
var f_data = map__30497__$1;
var file = cljs.core.get.call(null,map__30497__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30499,files_msg){
var map__30506 = p__30499;
var map__30506__$1 = ((((!((map__30506 == null)))?((((map__30506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30506):map__30506);
var opts = map__30506__$1;
var on_cssload = cljs.core.get.call(null,map__30506__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30508_30512 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30509_30513 = null;
var count__30510_30514 = (0);
var i__30511_30515 = (0);
while(true){
if((i__30511_30515 < count__30510_30514)){
var f_30516 = cljs.core._nth.call(null,chunk__30509_30513,i__30511_30515);
figwheel.client.file_reloading.reload_css_file.call(null,f_30516);

var G__30517 = seq__30508_30512;
var G__30518 = chunk__30509_30513;
var G__30519 = count__30510_30514;
var G__30520 = (i__30511_30515 + (1));
seq__30508_30512 = G__30517;
chunk__30509_30513 = G__30518;
count__30510_30514 = G__30519;
i__30511_30515 = G__30520;
continue;
} else {
var temp__4657__auto___30521 = cljs.core.seq.call(null,seq__30508_30512);
if(temp__4657__auto___30521){
var seq__30508_30522__$1 = temp__4657__auto___30521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30508_30522__$1)){
var c__22855__auto___30523 = cljs.core.chunk_first.call(null,seq__30508_30522__$1);
var G__30524 = cljs.core.chunk_rest.call(null,seq__30508_30522__$1);
var G__30525 = c__22855__auto___30523;
var G__30526 = cljs.core.count.call(null,c__22855__auto___30523);
var G__30527 = (0);
seq__30508_30512 = G__30524;
chunk__30509_30513 = G__30525;
count__30510_30514 = G__30526;
i__30511_30515 = G__30527;
continue;
} else {
var f_30528 = cljs.core.first.call(null,seq__30508_30522__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30528);

var G__30529 = cljs.core.next.call(null,seq__30508_30522__$1);
var G__30530 = null;
var G__30531 = (0);
var G__30532 = (0);
seq__30508_30512 = G__30529;
chunk__30509_30513 = G__30530;
count__30510_30514 = G__30531;
i__30511_30515 = G__30532;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30506,map__30506__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30506,map__30506__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1473616901283