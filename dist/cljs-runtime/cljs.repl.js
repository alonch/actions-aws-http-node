goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32297){
var map__32300 = p__32297;
var map__32300__$1 = cljs.core.__destructure_map(map__32300);
var m = map__32300__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32300__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32308_32622 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32309_32623 = null;
var count__32310_32624 = (0);
var i__32311_32625 = (0);
while(true){
if((i__32311_32625 < count__32310_32624)){
var f_32626 = chunk__32309_32623.cljs$core$IIndexed$_nth$arity$2(null, i__32311_32625);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32626], 0));


var G__32627 = seq__32308_32622;
var G__32628 = chunk__32309_32623;
var G__32629 = count__32310_32624;
var G__32630 = (i__32311_32625 + (1));
seq__32308_32622 = G__32627;
chunk__32309_32623 = G__32628;
count__32310_32624 = G__32629;
i__32311_32625 = G__32630;
continue;
} else {
var temp__5804__auto___32635 = cljs.core.seq(seq__32308_32622);
if(temp__5804__auto___32635){
var seq__32308_32636__$1 = temp__5804__auto___32635;
if(cljs.core.chunked_seq_QMARK_(seq__32308_32636__$1)){
var c__5525__auto___32638 = cljs.core.chunk_first(seq__32308_32636__$1);
var G__32639 = cljs.core.chunk_rest(seq__32308_32636__$1);
var G__32640 = c__5525__auto___32638;
var G__32641 = cljs.core.count(c__5525__auto___32638);
var G__32642 = (0);
seq__32308_32622 = G__32639;
chunk__32309_32623 = G__32640;
count__32310_32624 = G__32641;
i__32311_32625 = G__32642;
continue;
} else {
var f_32648 = cljs.core.first(seq__32308_32636__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32648], 0));


var G__32649 = cljs.core.next(seq__32308_32636__$1);
var G__32650 = null;
var G__32651 = (0);
var G__32652 = (0);
seq__32308_32622 = G__32649;
chunk__32309_32623 = G__32650;
count__32310_32624 = G__32651;
i__32311_32625 = G__32652;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32657 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32657], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32657)))?cljs.core.second(arglists_32657):arglists_32657)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32340_32663 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32341_32664 = null;
var count__32342_32665 = (0);
var i__32343_32666 = (0);
while(true){
if((i__32343_32666 < count__32342_32665)){
var vec__32370_32667 = chunk__32341_32664.cljs$core$IIndexed$_nth$arity$2(null, i__32343_32666);
var name_32668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370_32667,(0),null);
var map__32373_32669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32370_32667,(1),null);
var map__32373_32670__$1 = cljs.core.__destructure_map(map__32373_32669);
var doc_32671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32373_32670__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32373_32670__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32668], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32672], 0));

if(cljs.core.truth_(doc_32671)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32671], 0));
} else {
}


var G__32677 = seq__32340_32663;
var G__32678 = chunk__32341_32664;
var G__32679 = count__32342_32665;
var G__32680 = (i__32343_32666 + (1));
seq__32340_32663 = G__32677;
chunk__32341_32664 = G__32678;
count__32342_32665 = G__32679;
i__32343_32666 = G__32680;
continue;
} else {
var temp__5804__auto___32681 = cljs.core.seq(seq__32340_32663);
if(temp__5804__auto___32681){
var seq__32340_32682__$1 = temp__5804__auto___32681;
if(cljs.core.chunked_seq_QMARK_(seq__32340_32682__$1)){
var c__5525__auto___32683 = cljs.core.chunk_first(seq__32340_32682__$1);
var G__32684 = cljs.core.chunk_rest(seq__32340_32682__$1);
var G__32685 = c__5525__auto___32683;
var G__32686 = cljs.core.count(c__5525__auto___32683);
var G__32687 = (0);
seq__32340_32663 = G__32684;
chunk__32341_32664 = G__32685;
count__32342_32665 = G__32686;
i__32343_32666 = G__32687;
continue;
} else {
var vec__32376_32688 = cljs.core.first(seq__32340_32682__$1);
var name_32689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32376_32688,(0),null);
var map__32379_32690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32376_32688,(1),null);
var map__32379_32691__$1 = cljs.core.__destructure_map(map__32379_32690);
var doc_32692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32379_32691__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32379_32691__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32689], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32693], 0));

if(cljs.core.truth_(doc_32692)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32692], 0));
} else {
}


var G__32698 = cljs.core.next(seq__32340_32682__$1);
var G__32699 = null;
var G__32700 = (0);
var G__32701 = (0);
seq__32340_32663 = G__32698;
chunk__32341_32664 = G__32699;
count__32342_32665 = G__32700;
i__32343_32666 = G__32701;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__32382 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32383 = null;
var count__32384 = (0);
var i__32385 = (0);
while(true){
if((i__32385 < count__32384)){
var role = chunk__32383.cljs$core$IIndexed$_nth$arity$2(null, i__32385);
var temp__5804__auto___32704__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___32704__$1)){
var spec_32705 = temp__5804__auto___32704__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32705)], 0));
} else {
}


var G__32706 = seq__32382;
var G__32707 = chunk__32383;
var G__32708 = count__32384;
var G__32709 = (i__32385 + (1));
seq__32382 = G__32706;
chunk__32383 = G__32707;
count__32384 = G__32708;
i__32385 = G__32709;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__32382);
if(temp__5804__auto____$1){
var seq__32382__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32382__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32382__$1);
var G__32714 = cljs.core.chunk_rest(seq__32382__$1);
var G__32715 = c__5525__auto__;
var G__32716 = cljs.core.count(c__5525__auto__);
var G__32717 = (0);
seq__32382 = G__32714;
chunk__32383 = G__32715;
count__32384 = G__32716;
i__32385 = G__32717;
continue;
} else {
var role = cljs.core.first(seq__32382__$1);
var temp__5804__auto___32718__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___32718__$2)){
var spec_32720 = temp__5804__auto___32718__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32720)], 0));
} else {
}


var G__32721 = cljs.core.next(seq__32382__$1);
var G__32722 = null;
var G__32723 = (0);
var G__32724 = (0);
seq__32382 = G__32721;
chunk__32383 = G__32722;
count__32384 = G__32723;
i__32385 = G__32724;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32404 = datafied_throwable;
var map__32404__$1 = cljs.core.__destructure_map(map__32404);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32404__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32404__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32404__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32411 = cljs.core.last(via);
var map__32411__$1 = cljs.core.__destructure_map(map__32411);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32411__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32411__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32411__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32412 = data;
var map__32412__$1 = cljs.core.__destructure_map(map__32412);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32412__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32412__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32412__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32414 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__32414__$1 = cljs.core.__destructure_map(map__32414);
var top_data = map__32414__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32414__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__32418 = phase;
var G__32418__$1 = (((G__32418 instanceof cljs.core.Keyword))?G__32418.fqn:null);
switch (G__32418__$1) {
case "read-source":
var map__32420 = data;
var map__32420__$1 = cljs.core.__destructure_map(map__32420);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32420__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32421 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__32421__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32421,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32421);
var G__32421__$2 = (cljs.core.truth_((function (){var fexpr__32423 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32423.cljs$core$IFn$_invoke$arity$1 ? fexpr__32423.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32423.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32421__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32421__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32421__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32421__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32425 = top_data;
var G__32425__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32425,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32425);
var G__32425__$2 = (cljs.core.truth_((function (){var fexpr__32427 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32427.cljs$core$IFn$_invoke$arity$1 ? fexpr__32427.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32427.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32425__$1);
var G__32425__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32425__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32425__$2);
var G__32425__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32425__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32425__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32425__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32425__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32430 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32430,(3),null);
var G__32433 = top_data;
var G__32433__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32433,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32433);
var G__32433__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32433__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32433__$1);
var G__32433__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32433__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32433__$2);
var G__32433__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32433__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32433__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32433__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32433__$4;
}

break;
case "execution":
var vec__32441 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32441,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32441,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32441,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32441,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32398_SHARP_){
var or__5002__auto__ = (p1__32398_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__32444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32444.cljs$core$IFn$_invoke$arity$1 ? fexpr__32444.cljs$core$IFn$_invoke$arity$1(p1__32398_SHARP_) : fexpr__32444.call(null, p1__32398_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__32446 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32446__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32446,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32446);
var G__32446__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32446__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32446__$1);
var G__32446__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32446__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32446__$2);
var G__32446__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32446__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32446__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32446__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32446__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32418__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32471){
var map__32476 = p__32471;
var map__32476__$1 = cljs.core.__destructure_map(map__32476);
var triage_data = map__32476__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32476__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32490 = phase;
var G__32490__$1 = (((G__32490 instanceof cljs.core.Keyword))?G__32490.fqn:null);
switch (G__32490__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__32499 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__32501 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32502 = loc;
var G__32504 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32508_32753 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32509_32754 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32510_32755 = true;
var _STAR_print_fn_STAR__temp_val__32511_32756 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32510_32755);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32511_32756);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32467_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32467_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32509_32754);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32508_32753);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32499,G__32501,G__32502,G__32504) : format.call(null, G__32499,G__32501,G__32502,G__32504));

break;
case "macroexpansion":
var G__32542 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__32543 = cause_type;
var G__32544 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32545 = loc;
var G__32546 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32542,G__32543,G__32544,G__32545,G__32546) : format.call(null, G__32542,G__32543,G__32544,G__32545,G__32546));

break;
case "compile-syntax-check":
var G__32547 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__32548 = cause_type;
var G__32549 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32550 = loc;
var G__32551 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32547,G__32548,G__32549,G__32550,G__32551) : format.call(null, G__32547,G__32548,G__32549,G__32550,G__32551));

break;
case "compilation":
var G__32553 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__32554 = cause_type;
var G__32555 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32556 = loc;
var G__32557 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32553,G__32554,G__32555,G__32556,G__32557) : format.call(null, G__32553,G__32554,G__32555,G__32556,G__32557));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__32564 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__32566 = symbol;
var G__32567 = loc;
var G__32568 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32575_32768 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32576_32769 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32577_32770 = true;
var _STAR_print_fn_STAR__temp_val__32578_32771 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32577_32770);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32578_32771);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32469_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32469_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32576_32769);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32575_32768);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32564,G__32566,G__32567,G__32568) : format.call(null, G__32564,G__32566,G__32567,G__32568));
} else {
var G__32583 = "Execution error%s at %s(%s).\n%s\n";
var G__32584 = cause_type;
var G__32585 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32586 = loc;
var G__32587 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32583,G__32584,G__32585,G__32586,G__32587) : format.call(null, G__32583,G__32584,G__32585,G__32586,G__32587));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32490__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
