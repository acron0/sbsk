// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-3";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34165 = [];
var len__23119__auto___34168 = arguments.length;
var i__23120__auto___34169 = (0);
while(true){
if((i__23120__auto___34169 < len__23119__auto___34168)){
args34165.push((arguments[i__23120__auto___34169]));

var G__34170 = (i__23120__auto___34169 + (1));
i__23120__auto___34169 = G__34170;
continue;
} else {
}
break;
}

var G__34167 = args34165.length;
switch (G__34167) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34165.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__23126__auto__ = [];
var len__23119__auto___34173 = arguments.length;
var i__23120__auto___34174 = (0);
while(true){
if((i__23120__auto___34174 < len__23119__auto___34173)){
args__23126__auto__.push((arguments[i__23120__auto___34174]));

var G__34175 = (i__23120__auto___34174 + (1));
i__23120__auto___34174 = G__34175;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34172){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34172));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__23126__auto__ = [];
var len__23119__auto___34177 = arguments.length;
var i__23120__auto___34178 = (0);
while(true){
if((i__23120__auto___34178 < len__23119__auto___34177)){
args__23126__auto__.push((arguments[i__23120__auto___34178]));

var G__34179 = (i__23120__auto___34178 + (1));
i__23120__auto___34178 = G__34179;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34176){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34176));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34180 = cljs.core._EQ_;
var expr__34181 = (function (){var or__22044__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34184){if((e34184 instanceof Error)){
var e = e34184;
return false;
} else {
throw e34184;

}
}})();
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34180.call(null,"true",expr__34181))){
return true;
} else {
if(cljs.core.truth_(pred__34180.call(null,"false",expr__34181))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34181)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34186){if((e34186 instanceof Error)){
var e = e34186;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34186;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34187){
var map__34190 = p__34187;
var map__34190__$1 = ((((!((map__34190 == null)))?((((map__34190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34190):map__34190);
var message = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22044__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22044__auto__)){
return or__22044__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22032__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22032__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22032__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26630__auto___34352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___34352,ch){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___34352,ch){
return (function (state_34321){
var state_val_34322 = (state_34321[(1)]);
if((state_val_34322 === (7))){
var inst_34317 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
var statearr_34323_34353 = state_34321__$1;
(statearr_34323_34353[(2)] = inst_34317);

(statearr_34323_34353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (1))){
var state_34321__$1 = state_34321;
var statearr_34324_34354 = state_34321__$1;
(statearr_34324_34354[(2)] = null);

(statearr_34324_34354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (4))){
var inst_34274 = (state_34321[(7)]);
var inst_34274__$1 = (state_34321[(2)]);
var state_34321__$1 = (function (){var statearr_34325 = state_34321;
(statearr_34325[(7)] = inst_34274__$1);

return statearr_34325;
})();
if(cljs.core.truth_(inst_34274__$1)){
var statearr_34326_34355 = state_34321__$1;
(statearr_34326_34355[(1)] = (5));

} else {
var statearr_34327_34356 = state_34321__$1;
(statearr_34327_34356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (15))){
var inst_34281 = (state_34321[(8)]);
var inst_34296 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34281);
var inst_34297 = cljs.core.first.call(null,inst_34296);
var inst_34298 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34297);
var inst_34299 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_34298)].join('');
var inst_34300 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34299);
var state_34321__$1 = state_34321;
var statearr_34328_34357 = state_34321__$1;
(statearr_34328_34357[(2)] = inst_34300);

(statearr_34328_34357[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (13))){
var inst_34305 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
var statearr_34329_34358 = state_34321__$1;
(statearr_34329_34358[(2)] = inst_34305);

(statearr_34329_34358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (6))){
var state_34321__$1 = state_34321;
var statearr_34330_34359 = state_34321__$1;
(statearr_34330_34359[(2)] = null);

(statearr_34330_34359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (17))){
var inst_34303 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
var statearr_34331_34360 = state_34321__$1;
(statearr_34331_34360[(2)] = inst_34303);

(statearr_34331_34360[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (3))){
var inst_34319 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34321__$1,inst_34319);
} else {
if((state_val_34322 === (12))){
var inst_34280 = (state_34321[(9)]);
var inst_34294 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34280,opts);
var state_34321__$1 = state_34321;
if(cljs.core.truth_(inst_34294)){
var statearr_34332_34361 = state_34321__$1;
(statearr_34332_34361[(1)] = (15));

} else {
var statearr_34333_34362 = state_34321__$1;
(statearr_34333_34362[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (2))){
var state_34321__$1 = state_34321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34321__$1,(4),ch);
} else {
if((state_val_34322 === (11))){
var inst_34281 = (state_34321[(8)]);
var inst_34286 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34287 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34281);
var inst_34288 = cljs.core.async.timeout.call(null,(1000));
var inst_34289 = [inst_34287,inst_34288];
var inst_34290 = (new cljs.core.PersistentVector(null,2,(5),inst_34286,inst_34289,null));
var state_34321__$1 = state_34321;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34321__$1,(14),inst_34290);
} else {
if((state_val_34322 === (9))){
var inst_34281 = (state_34321[(8)]);
var inst_34307 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34308 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34281);
var inst_34309 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34308);
var inst_34310 = [cljs.core.str("Not loading: "),cljs.core.str(inst_34309)].join('');
var inst_34311 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34310);
var state_34321__$1 = (function (){var statearr_34334 = state_34321;
(statearr_34334[(10)] = inst_34307);

return statearr_34334;
})();
var statearr_34335_34363 = state_34321__$1;
(statearr_34335_34363[(2)] = inst_34311);

(statearr_34335_34363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (5))){
var inst_34274 = (state_34321[(7)]);
var inst_34276 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34277 = (new cljs.core.PersistentArrayMap(null,2,inst_34276,null));
var inst_34278 = (new cljs.core.PersistentHashSet(null,inst_34277,null));
var inst_34279 = figwheel.client.focus_msgs.call(null,inst_34278,inst_34274);
var inst_34280 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34279);
var inst_34281 = cljs.core.first.call(null,inst_34279);
var inst_34282 = figwheel.client.autoload_QMARK_.call(null);
var state_34321__$1 = (function (){var statearr_34336 = state_34321;
(statearr_34336[(9)] = inst_34280);

(statearr_34336[(8)] = inst_34281);

return statearr_34336;
})();
if(cljs.core.truth_(inst_34282)){
var statearr_34337_34364 = state_34321__$1;
(statearr_34337_34364[(1)] = (8));

} else {
var statearr_34338_34365 = state_34321__$1;
(statearr_34338_34365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (14))){
var inst_34292 = (state_34321[(2)]);
var state_34321__$1 = state_34321;
var statearr_34339_34366 = state_34321__$1;
(statearr_34339_34366[(2)] = inst_34292);

(statearr_34339_34366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (16))){
var state_34321__$1 = state_34321;
var statearr_34340_34367 = state_34321__$1;
(statearr_34340_34367[(2)] = null);

(statearr_34340_34367[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (10))){
var inst_34313 = (state_34321[(2)]);
var state_34321__$1 = (function (){var statearr_34341 = state_34321;
(statearr_34341[(11)] = inst_34313);

return statearr_34341;
})();
var statearr_34342_34368 = state_34321__$1;
(statearr_34342_34368[(2)] = null);

(statearr_34342_34368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34322 === (8))){
var inst_34280 = (state_34321[(9)]);
var inst_34284 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34280,opts);
var state_34321__$1 = state_34321;
if(cljs.core.truth_(inst_34284)){
var statearr_34343_34369 = state_34321__$1;
(statearr_34343_34369[(1)] = (11));

} else {
var statearr_34344_34370 = state_34321__$1;
(statearr_34344_34370[(1)] = (12));

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
});})(c__26630__auto___34352,ch))
;
return ((function (switch__26518__auto__,c__26630__auto___34352,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26519__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26519__auto____0 = (function (){
var statearr_34348 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34348[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26519__auto__);

(statearr_34348[(1)] = (1));

return statearr_34348;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26519__auto____1 = (function (state_34321){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_34321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e34349){if((e34349 instanceof Object)){
var ex__26522__auto__ = e34349;
var statearr_34350_34371 = state_34321;
(statearr_34350_34371[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34372 = state_34321;
state_34321 = G__34372;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26519__auto__ = function(state_34321){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26519__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26519__auto____1.call(this,state_34321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26519__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26519__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___34352,ch))
})();
var state__26632__auto__ = (function (){var statearr_34351 = f__26631__auto__.call(null);
(statearr_34351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___34352);

return statearr_34351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___34352,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34373_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34373_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34376 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34376){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34375){if((e34375 instanceof Error)){
var e = e34375;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34376], null));
} else {
var e = e34375;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34376))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34377){
var map__34386 = p__34377;
var map__34386__$1 = ((((!((map__34386 == null)))?((((map__34386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34386):map__34386);
var opts = map__34386__$1;
var build_id = cljs.core.get.call(null,map__34386__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34386,map__34386__$1,opts,build_id){
return (function (p__34388){
var vec__34389 = p__34388;
var seq__34390 = cljs.core.seq.call(null,vec__34389);
var first__34391 = cljs.core.first.call(null,seq__34390);
var seq__34390__$1 = cljs.core.next.call(null,seq__34390);
var map__34392 = first__34391;
var map__34392__$1 = ((((!((map__34392 == null)))?((((map__34392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34392):map__34392);
var msg = map__34392__$1;
var msg_name = cljs.core.get.call(null,map__34392__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34390__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34389,seq__34390,first__34391,seq__34390__$1,map__34392,map__34392__$1,msg,msg_name,_,map__34386,map__34386__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34389,seq__34390,first__34391,seq__34390__$1,map__34392,map__34392__$1,msg,msg_name,_,map__34386,map__34386__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34386,map__34386__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34400){
var vec__34401 = p__34400;
var seq__34402 = cljs.core.seq.call(null,vec__34401);
var first__34403 = cljs.core.first.call(null,seq__34402);
var seq__34402__$1 = cljs.core.next.call(null,seq__34402);
var map__34404 = first__34403;
var map__34404__$1 = ((((!((map__34404 == null)))?((((map__34404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34404):map__34404);
var msg = map__34404__$1;
var msg_name = cljs.core.get.call(null,map__34404__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34402__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34406){
var map__34418 = p__34406;
var map__34418__$1 = ((((!((map__34418 == null)))?((((map__34418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34418):map__34418);
var on_compile_warning = cljs.core.get.call(null,map__34418__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34418__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34418,map__34418__$1,on_compile_warning,on_compile_fail){
return (function (p__34420){
var vec__34421 = p__34420;
var seq__34422 = cljs.core.seq.call(null,vec__34421);
var first__34423 = cljs.core.first.call(null,seq__34422);
var seq__34422__$1 = cljs.core.next.call(null,seq__34422);
var map__34424 = first__34423;
var map__34424__$1 = ((((!((map__34424 == null)))?((((map__34424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34424):map__34424);
var msg = map__34424__$1;
var msg_name = cljs.core.get.call(null,map__34424__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34422__$1;
var pred__34426 = cljs.core._EQ_;
var expr__34427 = msg_name;
if(cljs.core.truth_(pred__34426.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34427))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34426.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34427))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34418,map__34418__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__,msg_hist,msg_names,msg){
return (function (state_34635){
var state_val_34636 = (state_34635[(1)]);
if((state_val_34636 === (7))){
var inst_34563 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34563)){
var statearr_34637_34683 = state_34635__$1;
(statearr_34637_34683[(1)] = (8));

} else {
var statearr_34638_34684 = state_34635__$1;
(statearr_34638_34684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (20))){
var inst_34629 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34639_34685 = state_34635__$1;
(statearr_34639_34685[(2)] = inst_34629);

(statearr_34639_34685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (27))){
var inst_34625 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34640_34686 = state_34635__$1;
(statearr_34640_34686[(2)] = inst_34625);

(statearr_34640_34686[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (1))){
var inst_34556 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34556)){
var statearr_34641_34687 = state_34635__$1;
(statearr_34641_34687[(1)] = (2));

} else {
var statearr_34642_34688 = state_34635__$1;
(statearr_34642_34688[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (24))){
var inst_34627 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34643_34689 = state_34635__$1;
(statearr_34643_34689[(2)] = inst_34627);

(statearr_34643_34689[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (4))){
var inst_34633 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34635__$1,inst_34633);
} else {
if((state_val_34636 === (15))){
var inst_34631 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34644_34690 = state_34635__$1;
(statearr_34644_34690[(2)] = inst_34631);

(statearr_34644_34690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (21))){
var inst_34590 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34645_34691 = state_34635__$1;
(statearr_34645_34691[(2)] = inst_34590);

(statearr_34645_34691[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (31))){
var inst_34614 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34614)){
var statearr_34646_34692 = state_34635__$1;
(statearr_34646_34692[(1)] = (34));

} else {
var statearr_34647_34693 = state_34635__$1;
(statearr_34647_34693[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (32))){
var inst_34623 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34648_34694 = state_34635__$1;
(statearr_34648_34694[(2)] = inst_34623);

(statearr_34648_34694[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (33))){
var inst_34612 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34649_34695 = state_34635__$1;
(statearr_34649_34695[(2)] = inst_34612);

(statearr_34649_34695[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (13))){
var inst_34577 = figwheel.client.heads_up.clear.call(null);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(16),inst_34577);
} else {
if((state_val_34636 === (22))){
var inst_34594 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34595 = figwheel.client.heads_up.append_warning_message.call(null,inst_34594);
var state_34635__$1 = state_34635;
var statearr_34650_34696 = state_34635__$1;
(statearr_34650_34696[(2)] = inst_34595);

(statearr_34650_34696[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (36))){
var inst_34621 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34651_34697 = state_34635__$1;
(statearr_34651_34697[(2)] = inst_34621);

(statearr_34651_34697[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (29))){
var inst_34605 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34652_34698 = state_34635__$1;
(statearr_34652_34698[(2)] = inst_34605);

(statearr_34652_34698[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (6))){
var inst_34558 = (state_34635[(7)]);
var state_34635__$1 = state_34635;
var statearr_34653_34699 = state_34635__$1;
(statearr_34653_34699[(2)] = inst_34558);

(statearr_34653_34699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (28))){
var inst_34601 = (state_34635[(2)]);
var inst_34602 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34603 = figwheel.client.heads_up.display_warning.call(null,inst_34602);
var state_34635__$1 = (function (){var statearr_34654 = state_34635;
(statearr_34654[(8)] = inst_34601);

return statearr_34654;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(29),inst_34603);
} else {
if((state_val_34636 === (25))){
var inst_34599 = figwheel.client.heads_up.clear.call(null);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(28),inst_34599);
} else {
if((state_val_34636 === (34))){
var inst_34616 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(37),inst_34616);
} else {
if((state_val_34636 === (17))){
var inst_34583 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34655_34700 = state_34635__$1;
(statearr_34655_34700[(2)] = inst_34583);

(statearr_34655_34700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (3))){
var inst_34575 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34575)){
var statearr_34656_34701 = state_34635__$1;
(statearr_34656_34701[(1)] = (13));

} else {
var statearr_34657_34702 = state_34635__$1;
(statearr_34657_34702[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (12))){
var inst_34571 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34658_34703 = state_34635__$1;
(statearr_34658_34703[(2)] = inst_34571);

(statearr_34658_34703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (2))){
var inst_34558 = (state_34635[(7)]);
var inst_34558__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34635__$1 = (function (){var statearr_34659 = state_34635;
(statearr_34659[(7)] = inst_34558__$1);

return statearr_34659;
})();
if(cljs.core.truth_(inst_34558__$1)){
var statearr_34660_34704 = state_34635__$1;
(statearr_34660_34704[(1)] = (5));

} else {
var statearr_34661_34705 = state_34635__$1;
(statearr_34661_34705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (23))){
var inst_34597 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34597)){
var statearr_34662_34706 = state_34635__$1;
(statearr_34662_34706[(1)] = (25));

} else {
var statearr_34663_34707 = state_34635__$1;
(statearr_34663_34707[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (35))){
var state_34635__$1 = state_34635;
var statearr_34664_34708 = state_34635__$1;
(statearr_34664_34708[(2)] = null);

(statearr_34664_34708[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (19))){
var inst_34592 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34592)){
var statearr_34665_34709 = state_34635__$1;
(statearr_34665_34709[(1)] = (22));

} else {
var statearr_34666_34710 = state_34635__$1;
(statearr_34666_34710[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (11))){
var inst_34567 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34667_34711 = state_34635__$1;
(statearr_34667_34711[(2)] = inst_34567);

(statearr_34667_34711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (9))){
var inst_34569 = figwheel.client.heads_up.clear.call(null);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(12),inst_34569);
} else {
if((state_val_34636 === (5))){
var inst_34560 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34635__$1 = state_34635;
var statearr_34668_34712 = state_34635__$1;
(statearr_34668_34712[(2)] = inst_34560);

(statearr_34668_34712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (14))){
var inst_34585 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34585)){
var statearr_34669_34713 = state_34635__$1;
(statearr_34669_34713[(1)] = (18));

} else {
var statearr_34670_34714 = state_34635__$1;
(statearr_34670_34714[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (26))){
var inst_34607 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34635__$1 = state_34635;
if(cljs.core.truth_(inst_34607)){
var statearr_34671_34715 = state_34635__$1;
(statearr_34671_34715[(1)] = (30));

} else {
var statearr_34672_34716 = state_34635__$1;
(statearr_34672_34716[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (16))){
var inst_34579 = (state_34635[(2)]);
var inst_34580 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34581 = figwheel.client.heads_up.display_exception.call(null,inst_34580);
var state_34635__$1 = (function (){var statearr_34673 = state_34635;
(statearr_34673[(9)] = inst_34579);

return statearr_34673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(17),inst_34581);
} else {
if((state_val_34636 === (30))){
var inst_34609 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34610 = figwheel.client.heads_up.display_warning.call(null,inst_34609);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(33),inst_34610);
} else {
if((state_val_34636 === (10))){
var inst_34573 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34674_34717 = state_34635__$1;
(statearr_34674_34717[(2)] = inst_34573);

(statearr_34674_34717[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (18))){
var inst_34587 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34588 = figwheel.client.heads_up.display_exception.call(null,inst_34587);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(21),inst_34588);
} else {
if((state_val_34636 === (37))){
var inst_34618 = (state_34635[(2)]);
var state_34635__$1 = state_34635;
var statearr_34675_34718 = state_34635__$1;
(statearr_34675_34718[(2)] = inst_34618);

(statearr_34675_34718[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34636 === (8))){
var inst_34565 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34635__$1 = state_34635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34635__$1,(11),inst_34565);
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
});})(c__26630__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26518__auto__,c__26630__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto____0 = (function (){
var statearr_34679 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34679[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto__);

(statearr_34679[(1)] = (1));

return statearr_34679;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto____1 = (function (state_34635){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_34635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e34680){if((e34680 instanceof Object)){
var ex__26522__auto__ = e34680;
var statearr_34681_34719 = state_34635;
(statearr_34681_34719[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34720 = state_34635;
state_34635 = G__34720;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto__ = function(state_34635){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto____1.call(this,state_34635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__,msg_hist,msg_names,msg))
})();
var state__26632__auto__ = (function (){var statearr_34682 = f__26631__auto__.call(null);
(statearr_34682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_34682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__,msg_hist,msg_names,msg))
);

return c__26630__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26630__auto___34783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto___34783,ch){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto___34783,ch){
return (function (state_34766){
var state_val_34767 = (state_34766[(1)]);
if((state_val_34767 === (1))){
var state_34766__$1 = state_34766;
var statearr_34768_34784 = state_34766__$1;
(statearr_34768_34784[(2)] = null);

(statearr_34768_34784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (2))){
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34766__$1,(4),ch);
} else {
if((state_val_34767 === (3))){
var inst_34764 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34766__$1,inst_34764);
} else {
if((state_val_34767 === (4))){
var inst_34754 = (state_34766[(7)]);
var inst_34754__$1 = (state_34766[(2)]);
var state_34766__$1 = (function (){var statearr_34769 = state_34766;
(statearr_34769[(7)] = inst_34754__$1);

return statearr_34769;
})();
if(cljs.core.truth_(inst_34754__$1)){
var statearr_34770_34785 = state_34766__$1;
(statearr_34770_34785[(1)] = (5));

} else {
var statearr_34771_34786 = state_34766__$1;
(statearr_34771_34786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (5))){
var inst_34754 = (state_34766[(7)]);
var inst_34756 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34754);
var state_34766__$1 = state_34766;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34766__$1,(8),inst_34756);
} else {
if((state_val_34767 === (6))){
var state_34766__$1 = state_34766;
var statearr_34772_34787 = state_34766__$1;
(statearr_34772_34787[(2)] = null);

(statearr_34772_34787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (7))){
var inst_34762 = (state_34766[(2)]);
var state_34766__$1 = state_34766;
var statearr_34773_34788 = state_34766__$1;
(statearr_34773_34788[(2)] = inst_34762);

(statearr_34773_34788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34767 === (8))){
var inst_34758 = (state_34766[(2)]);
var state_34766__$1 = (function (){var statearr_34774 = state_34766;
(statearr_34774[(8)] = inst_34758);

return statearr_34774;
})();
var statearr_34775_34789 = state_34766__$1;
(statearr_34775_34789[(2)] = null);

(statearr_34775_34789[(1)] = (2));


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
});})(c__26630__auto___34783,ch))
;
return ((function (switch__26518__auto__,c__26630__auto___34783,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26519__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26519__auto____0 = (function (){
var statearr_34779 = [null,null,null,null,null,null,null,null,null];
(statearr_34779[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26519__auto__);

(statearr_34779[(1)] = (1));

return statearr_34779;
});
var figwheel$client$heads_up_plugin_$_state_machine__26519__auto____1 = (function (state_34766){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_34766);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e34780){if((e34780 instanceof Object)){
var ex__26522__auto__ = e34780;
var statearr_34781_34790 = state_34766;
(statearr_34781_34790[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34791 = state_34766;
state_34766 = G__34791;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26519__auto__ = function(state_34766){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26519__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26519__auto____1.call(this,state_34766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26519__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26519__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto___34783,ch))
})();
var state__26632__auto__ = (function (){var statearr_34782 = f__26631__auto__.call(null);
(statearr_34782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto___34783);

return statearr_34782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto___34783,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__){
return (function (state_34812){
var state_val_34813 = (state_34812[(1)]);
if((state_val_34813 === (1))){
var inst_34807 = cljs.core.async.timeout.call(null,(3000));
var state_34812__$1 = state_34812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34812__$1,(2),inst_34807);
} else {
if((state_val_34813 === (2))){
var inst_34809 = (state_34812[(2)]);
var inst_34810 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34812__$1 = (function (){var statearr_34814 = state_34812;
(statearr_34814[(7)] = inst_34809);

return statearr_34814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34812__$1,inst_34810);
} else {
return null;
}
}
});})(c__26630__auto__))
;
return ((function (switch__26518__auto__,c__26630__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26519__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26519__auto____0 = (function (){
var statearr_34818 = [null,null,null,null,null,null,null,null];
(statearr_34818[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26519__auto__);

(statearr_34818[(1)] = (1));

return statearr_34818;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26519__auto____1 = (function (state_34812){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_34812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e34819){if((e34819 instanceof Object)){
var ex__26522__auto__ = e34819;
var statearr_34820_34822 = state_34812;
(statearr_34820_34822[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34823 = state_34812;
state_34812 = G__34823;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26519__auto__ = function(state_34812){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26519__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26519__auto____1.call(this,state_34812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26519__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26519__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__))
})();
var state__26632__auto__ = (function (){var statearr_34821 = f__26631__auto__.call(null);
(statearr_34821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_34821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__))
);

return c__26630__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26630__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26630__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26631__auto__ = (function (){var switch__26518__auto__ = ((function (c__26630__auto__,figwheel_version,temp__4657__auto__){
return (function (state_34846){
var state_val_34847 = (state_34846[(1)]);
if((state_val_34847 === (1))){
var inst_34840 = cljs.core.async.timeout.call(null,(2000));
var state_34846__$1 = state_34846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34846__$1,(2),inst_34840);
} else {
if((state_val_34847 === (2))){
var inst_34842 = (state_34846[(2)]);
var inst_34843 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_34844 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34843);
var state_34846__$1 = (function (){var statearr_34848 = state_34846;
(statearr_34848[(7)] = inst_34842);

return statearr_34848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34846__$1,inst_34844);
} else {
return null;
}
}
});})(c__26630__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26518__auto__,c__26630__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto____0 = (function (){
var statearr_34852 = [null,null,null,null,null,null,null,null];
(statearr_34852[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto__);

(statearr_34852[(1)] = (1));

return statearr_34852;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto____1 = (function (state_34846){
while(true){
var ret_value__26520__auto__ = (function (){try{while(true){
var result__26521__auto__ = switch__26518__auto__.call(null,state_34846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26521__auto__;
}
break;
}
}catch (e34853){if((e34853 instanceof Object)){
var ex__26522__auto__ = e34853;
var statearr_34854_34856 = state_34846;
(statearr_34854_34856[(5)] = ex__26522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34857 = state_34846;
state_34846 = G__34857;
continue;
} else {
return ret_value__26520__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto__ = function(state_34846){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto____1.call(this,state_34846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26519__auto__;
})()
;})(switch__26518__auto__,c__26630__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26632__auto__ = (function (){var statearr_34855 = f__26631__auto__.call(null);
(statearr_34855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26630__auto__);

return statearr_34855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26632__auto__);
});})(c__26630__auto__,figwheel_version,temp__4657__auto__))
);

return c__26630__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34858){
var map__34862 = p__34858;
var map__34862__$1 = ((((!((map__34862 == null)))?((((map__34862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34862):map__34862);
var file = cljs.core.get.call(null,map__34862__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34862__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34862__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34864 = "";
var G__34864__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__34864),cljs.core.str("file "),cljs.core.str(file)].join(''):G__34864);
var G__34864__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__34864__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__34864__$1);
if(cljs.core.truth_((function (){var and__22032__auto__ = line;
if(cljs.core.truth_(and__22032__auto__)){
return column;
} else {
return and__22032__auto__;
}
})())){
return [cljs.core.str(G__34864__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__34864__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34865){
var map__34872 = p__34865;
var map__34872__$1 = ((((!((map__34872 == null)))?((((map__34872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34872):map__34872);
var ed = map__34872__$1;
var formatted_exception = cljs.core.get.call(null,map__34872__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34872__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34872__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34874_34878 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34875_34879 = null;
var count__34876_34880 = (0);
var i__34877_34881 = (0);
while(true){
if((i__34877_34881 < count__34876_34880)){
var msg_34882 = cljs.core._nth.call(null,chunk__34875_34879,i__34877_34881);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34882);

var G__34883 = seq__34874_34878;
var G__34884 = chunk__34875_34879;
var G__34885 = count__34876_34880;
var G__34886 = (i__34877_34881 + (1));
seq__34874_34878 = G__34883;
chunk__34875_34879 = G__34884;
count__34876_34880 = G__34885;
i__34877_34881 = G__34886;
continue;
} else {
var temp__4657__auto___34887 = cljs.core.seq.call(null,seq__34874_34878);
if(temp__4657__auto___34887){
var seq__34874_34888__$1 = temp__4657__auto___34887;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34874_34888__$1)){
var c__22855__auto___34889 = cljs.core.chunk_first.call(null,seq__34874_34888__$1);
var G__34890 = cljs.core.chunk_rest.call(null,seq__34874_34888__$1);
var G__34891 = c__22855__auto___34889;
var G__34892 = cljs.core.count.call(null,c__22855__auto___34889);
var G__34893 = (0);
seq__34874_34878 = G__34890;
chunk__34875_34879 = G__34891;
count__34876_34880 = G__34892;
i__34877_34881 = G__34893;
continue;
} else {
var msg_34894 = cljs.core.first.call(null,seq__34874_34888__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34894);

var G__34895 = cljs.core.next.call(null,seq__34874_34888__$1);
var G__34896 = null;
var G__34897 = (0);
var G__34898 = (0);
seq__34874_34878 = G__34895;
chunk__34875_34879 = G__34896;
count__34876_34880 = G__34897;
i__34877_34881 = G__34898;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34899){
var map__34902 = p__34899;
var map__34902__$1 = ((((!((map__34902 == null)))?((((map__34902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34902):map__34902);
var w = map__34902__$1;
var message = cljs.core.get.call(null,map__34902__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__22032__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22032__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22032__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34914 = cljs.core.seq.call(null,plugins);
var chunk__34915 = null;
var count__34916 = (0);
var i__34917 = (0);
while(true){
if((i__34917 < count__34916)){
var vec__34918 = cljs.core._nth.call(null,chunk__34915,i__34917);
var k = cljs.core.nth.call(null,vec__34918,(0),null);
var plugin = cljs.core.nth.call(null,vec__34918,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34924 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34914,chunk__34915,count__34916,i__34917,pl_34924,vec__34918,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34924.call(null,msg_hist);
});})(seq__34914,chunk__34915,count__34916,i__34917,pl_34924,vec__34918,k,plugin))
);
} else {
}

var G__34925 = seq__34914;
var G__34926 = chunk__34915;
var G__34927 = count__34916;
var G__34928 = (i__34917 + (1));
seq__34914 = G__34925;
chunk__34915 = G__34926;
count__34916 = G__34927;
i__34917 = G__34928;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34914);
if(temp__4657__auto__){
var seq__34914__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34914__$1)){
var c__22855__auto__ = cljs.core.chunk_first.call(null,seq__34914__$1);
var G__34929 = cljs.core.chunk_rest.call(null,seq__34914__$1);
var G__34930 = c__22855__auto__;
var G__34931 = cljs.core.count.call(null,c__22855__auto__);
var G__34932 = (0);
seq__34914 = G__34929;
chunk__34915 = G__34930;
count__34916 = G__34931;
i__34917 = G__34932;
continue;
} else {
var vec__34921 = cljs.core.first.call(null,seq__34914__$1);
var k = cljs.core.nth.call(null,vec__34921,(0),null);
var plugin = cljs.core.nth.call(null,vec__34921,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34933 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34914,chunk__34915,count__34916,i__34917,pl_34933,vec__34921,k,plugin,seq__34914__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34933.call(null,msg_hist);
});})(seq__34914,chunk__34915,count__34916,i__34917,pl_34933,vec__34921,k,plugin,seq__34914__$1,temp__4657__auto__))
);
} else {
}

var G__34934 = cljs.core.next.call(null,seq__34914__$1);
var G__34935 = null;
var G__34936 = (0);
var G__34937 = (0);
seq__34914 = G__34934;
chunk__34915 = G__34935;
count__34916 = G__34936;
i__34917 = G__34937;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args34938 = [];
var len__23119__auto___34945 = arguments.length;
var i__23120__auto___34946 = (0);
while(true){
if((i__23120__auto___34946 < len__23119__auto___34945)){
args34938.push((arguments[i__23120__auto___34946]));

var G__34947 = (i__23120__auto___34946 + (1));
i__23120__auto___34946 = G__34947;
continue;
} else {
}
break;
}

var G__34940 = args34938.length;
switch (G__34940) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34938.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34941_34949 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34942_34950 = null;
var count__34943_34951 = (0);
var i__34944_34952 = (0);
while(true){
if((i__34944_34952 < count__34943_34951)){
var msg_34953 = cljs.core._nth.call(null,chunk__34942_34950,i__34944_34952);
figwheel.client.socket.handle_incoming_message.call(null,msg_34953);

var G__34954 = seq__34941_34949;
var G__34955 = chunk__34942_34950;
var G__34956 = count__34943_34951;
var G__34957 = (i__34944_34952 + (1));
seq__34941_34949 = G__34954;
chunk__34942_34950 = G__34955;
count__34943_34951 = G__34956;
i__34944_34952 = G__34957;
continue;
} else {
var temp__4657__auto___34958 = cljs.core.seq.call(null,seq__34941_34949);
if(temp__4657__auto___34958){
var seq__34941_34959__$1 = temp__4657__auto___34958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34941_34959__$1)){
var c__22855__auto___34960 = cljs.core.chunk_first.call(null,seq__34941_34959__$1);
var G__34961 = cljs.core.chunk_rest.call(null,seq__34941_34959__$1);
var G__34962 = c__22855__auto___34960;
var G__34963 = cljs.core.count.call(null,c__22855__auto___34960);
var G__34964 = (0);
seq__34941_34949 = G__34961;
chunk__34942_34950 = G__34962;
count__34943_34951 = G__34963;
i__34944_34952 = G__34964;
continue;
} else {
var msg_34965 = cljs.core.first.call(null,seq__34941_34959__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34965);

var G__34966 = cljs.core.next.call(null,seq__34941_34959__$1);
var G__34967 = null;
var G__34968 = (0);
var G__34969 = (0);
seq__34941_34949 = G__34966;
chunk__34942_34950 = G__34967;
count__34943_34951 = G__34968;
i__34944_34952 = G__34969;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__23126__auto__ = [];
var len__23119__auto___34974 = arguments.length;
var i__23120__auto___34975 = (0);
while(true){
if((i__23120__auto___34975 < len__23119__auto___34974)){
args__23126__auto__.push((arguments[i__23120__auto___34975]));

var G__34976 = (i__23120__auto___34975 + (1));
i__23120__auto___34975 = G__34976;
continue;
} else {
}
break;
}

var argseq__23127__auto__ = ((((0) < args__23126__auto__.length))?(new cljs.core.IndexedSeq(args__23126__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23127__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34971){
var map__34972 = p__34971;
var map__34972__$1 = ((((!((map__34972 == null)))?((((map__34972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34972):map__34972);
var opts = map__34972__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34970){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34970));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34978){if((e34978 instanceof Error)){
var e = e34978;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34978;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34982){
var map__34983 = p__34982;
var map__34983__$1 = ((((!((map__34983 == null)))?((((map__34983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34983):map__34983);
var msg_name = cljs.core.get.call(null,map__34983__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1473616914593