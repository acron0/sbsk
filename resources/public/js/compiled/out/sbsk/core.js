// Compiled by ClojureScript 1.9.89 {}
goog.provide('sbsk.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sbsk.views');
goog.require('sbsk.config');
goog.require('sbsk.handlers');
goog.require('devtools.core');
goog.require('sbsk.subs');
goog.require('re_frame.core');
sbsk.core.dev_setup = (function sbsk$core$dev_setup(){
if(cljs.core.truth_(sbsk.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

cljs.core.println.call(null,"dev mode");

return devtools.core.install_BANG_.call(null);
} else {
return null;
}
});
sbsk.core.mount_root = (function sbsk$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sbsk.views.main_panel], null),document.getElementById("app"));
});
sbsk.core.init = (function sbsk$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

sbsk.core.dev_setup.call(null);

return sbsk.core.mount_root.call(null);
});
goog.exportSymbol('sbsk.core.init', sbsk.core.init);

//# sourceMappingURL=core.js.map?rel=1473623623793