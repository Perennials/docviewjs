"use strict";if(HTMLElement.prototype.matches===undefined){Object.defineProperty(HTMLElement.prototype,"matches",{value:HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.msMatchesSelector||HTMLElement.prototype.mozMatchesSelector})
}if(document.documentMode!==undefined){if(document.documentMode===10||document.documentMode===9){(function(){var a=CustomEvent.prototype.preventDefault;
Object.defineProperty(CustomEvent.prototype,"preventDefault",{value:function(){a.call(this);
this._ie_defaultPrevented=true}});Object.defineProperty(CustomEvent.prototype,"defaultPrevented",{get:function(){return this._ie_defaultPrevented===true?true:false
}})})();(function(){function a(c,d){d=d||{bubbles:false,cancelable:false,detail:undefined};
var b=document.createEvent("CustomEvent");b.initCustomEvent(c,d.bubbles,d.cancelable,d.detail);
return b}a.prototype=window.CustomEvent.prototype;window.CustomEvent=a})();if(document.documentMode===9){(function(){function e(f){this._element=f
}function a(g,f){var i=g.indexOf(f);if(i<0){return -1}if(i>0&&g.charAt(i-1)!=" "){return -1
}var h=f.length;if(i<g.length-h-1&&g.charAt(i+h)!=" "){return -1}return i}var c={contains:function(f){return a(this._element.className,f)>=0
},add:function(f){var g=this._element.className;if(a(g,f)<0){g=(g.length?g+" ":"")+f;
this._element.className=g}},remove:function(f){var g=this._element.className;var h=a(g,f);
if(h>=0){g=g.substr(0,h)+g.substr(h+f.length+1);this._element.className=g}}};var d=e.prototype;
for(var b in c){Object.defineProperty(d,b,{value:c[b]})}Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){return new e(this)
}})})()}}}"use strict";(function(E,a){var g=1;var v=2;var q=4;var z=8;var D=false;
var k=null;var n=0;var G=0;var B=false;var H=0;var j=0;var p=a.addEventListener===undefined;
var i=false;var c={};var u=p&&!a.UNITESTS_NOCOLOR;var t=false;function A(){if(t){return
}t=true;if(i){console.error((u?c.yellow:"")+"Unitest failed: "+(u?c.reset:"")+("Uncaught exception.")+(u?c.reset:""))
}console[B||i||H>0||n!==G?"error":"log"]((u?c.yellow:"")+"Unitests: "+(u?c.reset:"")+("started: "+n+", ")+(u?c.reset:"")+("finished: ")+(u?(n!==G?c.red:c.green):"")+(G+", ")+(u?c.reset:"")+("failed: ")+(u?((B||i)?c.red:c.green):"")+((B||i)?(H>0?H:"???"):0)+(u?c.reset:""))
}if(a.UNITESTS===true){if(p){var c=require("./CliColors.js");process.on("uncaughtException",function(L){i=true;
var K=(process.listeners("uncaughtException").length===1);if(K||a.UNITESTS_SILENTUNCAUGHT!==true){console.error(L.stack.toString())
}if(K){process.exit(1)}});process.on("exit",function(K){if(B||i){K=K>0?K:1}else{if(j>0){K=K>0?K:0
}}A();process.exit(K)})}else{a.addEventListener("error",function(){i=true})}}function r(){var K=null;
try{var L=new Error();if(L.stack){K=L.stack.substr(L.toString().length+1)}else{throw L
}}catch(L){K=L.stack?L.stack.substr(L.toString().length+1):null}return K||null}function b(O,K,N,M){B=true;
var L=K?" called @"+K.split("\n")[N].trim():"";console.error((u?c.yellow:"")+"Unitest failed: "+(u?c.reset:"")+(O?O+" in test ":"")+(u?c.green:"")+(M.name)+(u?c.reset:"")+L+(u?c.reset:""));
if(M.failed===false){M.failed=true;++H}}function f(N,M,L,K){if(!N){b(M,r(),2+(K>0?K:0),L)
}}f.eq=F;f.out=h;function x(){++n}function h(K){if(K.failed===false){++j}++G;if(k instanceof Array&&k.length===n&&n===G){if(a.UNITESTS_READY instanceof Function){a.UNITESTS_READY()
}A()}}function s(L,K,M){if(!M){if(!(typeof L=="string"||L instanceof String)||!(typeof K=="string"||K instanceof String)){L=JSON.stringify(L);
K=JSON.stringify(K)}M="\n---\n"+L+"\n--- equals ---\n"+K+"\n---\n"}return M}function F(P,M,K,Q,N,L){var O=null;
if(typeof K=="string"||K instanceof String){Q=K;K=g}if(K===undefined){K=g}if(typeof K=="number"||K instanceof Number){if((K&z)&&!(K&g)){K|=g
}}if(K===true){K=g}else{if(K===false){K=q}}if(K&g){O=m}else{O=l}if(!O(P,M,K)){Q=s(P,M,Q);
b(Q,r(),2+(L>0?L:0),N)}}function e(O,N,M,K){if(O.length!=N.length){return false}for(var L=O.length-1;
L>=0;--L){if(!M(O[L],N[L],K)){return false}}return true}function I(S,Q,P,M){if(!(M&z)){var K=Object.keys(S);
var L=Object.keys(Q);if(K.length!=L.length){return false}K=K.sort();L=L.sort();for(var O=K.length-1;
O>=0;--O){if(K[O]!==L[O]){return false}}}for(var N in S){if(!P(S[N],Q[N],M)){return false
}}return true}function l(M,L,K){if(K&v){return M===L}return M==L}function m(M,L,K){if(M instanceof Array&&L instanceof Array){return e(M,L,m,K)
}else{if(M instanceof Object&&Object.getPrototypeOf(M)===Object.prototype&&L instanceof Object&&Object.getPrototypeOf(L)===Object.prototype){return I(M,L,m,K)
}else{return l(M,L,K)}}}o("Unitest.testeq() deep",function(K){K(m({a:1,b:2},{b:2,a:1},g));
K(!m({a:1,b:2},{b:2,a:1,c:3},g));K(m({a:1,b:2},{b:2,a:1,c:3},g|z));K(!m({a:1,b:2,c:3},{b:2,a:1},g|z));
K(m([1,2],[1,2],g));K(!m([1,2],[2,1],g));K(m([{a:1,b:{b:2,a:[1,2]}},[{b:2,a:1}]],[{a:1,b:{b:2,a:[1,2]}},[{b:2,a:1}]],g));
K(!m([{a:1,b:{b:2,a:[1,2]}},[{b:2,a:1}]],[{a:1,b:{b:2,a:[1,1]}},[{b:2,a:1}]],g));
K(!m([{a:1,b:{b:2,a:[1,2]}},[{b:2,a:2}]],[{a:1,b:{b:2,a:[1,2]}},[{b:2,a:1}]],g))});
J("UnitestA()",function(K){setTimeout(function(){K(true);K.eq({a:1,b:2},{b:2,a:1});
K.eq({a:1,b:"2"},{b:2,a:1,c:3},z);K.eq({a:1,b:2},{b:2,a:1,c:3},v|z);K(!m({a:1,b:"2"},{b:2,a:1,c:3},v|z|g));
K.out()},1)});var C=0;function y(N,M,L){if(N instanceof Function){M=N;N="[unnamed test "+(++C)+"]"
}var Q={name:N,test:f,failed:false};function P(U,T){return f(U,T,Q,1)}P.eq=function(V,U,T,W){return F(V,U,T,W,Q,1)
};P.out=function(){return h(Q)};var K=false;try{x();M(P)}catch(O){var S=O.toString();
b(S,O.stack?O.stack.substr(S.length+1):null,0,Q);h(Q);K=true}finally{if(!L&&!K){h(Q)
}}}function J(K,L){return o(K,L,true)}var d=0;function w(){for(;d<k.length;++d){var K=k[d];
y(K[0],K[1],K[2])}}function o(L,N,K){if(a.UNITESTS===false||(p&&a.UNITESTS===undefined)){return false
}if(k===null){k=[];if(!a.UNITESTS_AUTORUN){var M=function(){D=true;w()};if(p){process.on("load",M)
}else{a.addEventListener("load",M)}}}k.push([L,N,K]);if(D||a.UNITESTS_AUTORUN){w()
}}if(!p||a.UNITESTS===true){E.log=function(){return console.log.apply(console,arguments)
};E.CMP_DEEP=g;E.CMP_STRICT=v;E.CMP_LOOSE=q;E.CMP_EXTENDS=z}E.Unitest=o;E.UnitestA=J
})(typeof global!="undefined"?global:this,typeof global!="undefined"?global:window);
"use strict";Object.defineProperty(Object.prototype,"merge",{value:function(a){for(var b in a){this[b]=a[b]
}return this},writable:true});Unitest("Object.merge()",function(c){var b={a:2,b:3}.merge({a:3,c:4});
c(b.a===3);c(b.b===3);c(b.c===4)});Object.defineProperty(Object.prototype,"duplicate",{value:function(){var a=Object.create(Object.getPrototypeOf(this));
for(var b in this){var c=this[b];if(c instanceof Object&&c.duplicate instanceof Function){a[b]=c.duplicate()
}else{a[b]=c}}return a},writable:true});Unitest("Object.duplicate()",function(c){var b={a:{},b:3};
c(b.duplicate()!==b);c(b.duplicate().a!==b.a);c(b.duplicate().b==b.b)});Object.defineProperty(Object,"isObject",{value:function(a){return a instanceof Object&&Object.getPrototypeOf(a)===Object.prototype
},writable:true});Unitest("Object.isObject()",function(a){a(!Object.isObject(new String));
a(Object.isObject({}));a(!Object.isObject(1));a(!Object.isObject("asd"))});Object.defineProperty(Object,"values",{value:function(e){var d=Object.keys(e);
var a=new Array(d.length);for(var b=0,c=d.length;b<c;++b){a[b]=e[d[b]]}return a},writable:true});
Unitest("Object.values()",function(a){a.eq(Object.values({a:1,b:2}),[1,2])});Object.defineProperty(Object.prototype,"filter",{value:function(f,a){var e=Object.keys(this);
for(var c=0,d=e.length;c<d;++c){var b=e[c];if(f.call(a,this[b],b,this)!==true){delete this[b]
}}return this},writable:true});Unitest("Object.filter()",function(a){a.eq({a:1,b:2,c:3}.filter(function(c,b){return b!="b"
}),{a:1,c:3})});"use strict";Object.defineProperty(Array.prototype,"duplicate",{value:function(){var a=[].concat(this);
for(var b=a.length-1;b>=0;--b){var c=a[b];if(c instanceof Object&&c.duplicate instanceof Function){a[b]=c.duplicate()
}}return a},writable:true});Unitest("Array.duplicate()",function(c){var b=[{},1,"",[2]];
c(b.duplicate()!==b);c(b.duplicate()[0]!==b[0]);c(b.duplicate()[1]==b[1]);c(b.duplicate()[2]==b[2]);
c(b.duplicate()[3]!==b[3]);c(b.duplicate()[3][0]==b[3][0])});Object.defineProperty(Array.prototype,"merge",{value:Array.prototype.concat,writable:true});
Object.defineProperty(Array.prototype,"last",{get:function(){var a=this.length-1;
return a>=0?this[a]:undefined},set:function(a){var b=this.length-1;return b>=0?this[b]=a:this[0]=a
}});Unitest("Array.last()",function(c){var b=[1,2];c(b.last===2);b.last=3;c(b.last===3&&b[1]===3&&b.length==2);
b=[];c(b.last===undefined);b.last=2;c(b.last===2&&b.length==1)});"use strict";Object.defineProperty(String,"isString",{value:function(a){return typeof a=="string"||a instanceof String
},writable:true});Unitest("String.isString()",function(a){a(!("asd" instanceof String)&&String.isString("sad"));
a(typeof new String()=="object"&&String.isString(new String))});Object.defineProperty(String.prototype,"indexOfEx",{value:function(c,e,b){if(c instanceof RegExp){if(e>0){var d=c.lastIndex;
var a=c.exec(this.substr(e));c.lastIndex=d;if(a!==null){if(b){b.length=a[0].length
}return a.index+e}return -1}else{var d=c.lastIndex;c.lastIndex=0;var a=c.exec(this);
c.lastIndex=d;if(a!==null){if(b){b.length=a[0].length}return a.index}return -1}}else{var a=this.indexOf(c,e);
if(b&&a>=0){b.length=c.length}return a}},writable:true});Unitest("String.indexOfEx()",function(c){var b="left center right";
var a={};c(b.indexOfEx("center")==5);c(b.indexOfEx("center",undefined,a)==5&&a.length==6);
c(b.indexOfEx("center",6)==-1);c(b.indexOfEx(/c[a-z]+r/)==5);c(b.indexOfEx(/c[a-z]+r/,undefined,a)==5&&a.length==6);
c(b.indexOfEx(/c[a-z]+r/,6)==-1)});Object.defineProperty(String.prototype,"lastIndexOfEx",{value:function(e,h,d){if(e instanceof RegExp){h=h||this.length;
var f,a;if(!e.global){if(e._lastIndexOf){e=e._lastIndexOf}else{var b=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+"g";
e=(e._lastIndexOf=new RegExp(e.source,b))}}var g=e.lastIndex;e.lastIndex=0;while((a=e.exec(this))&&a.index<=h){f=a
}e.lastIndex=g;if(f){if(d){d.length=f[0].length}return f.index}return -1}else{var c=this.lastIndexOf(e,h);
if(d&&c>=0){d.length=e.length}return c}},writable:true});Unitest("String.lastIndexOfEx()",function(c){var b="left center right";
var a={};c(b.lastIndexOfEx("center")==5);c(b.lastIndexOfEx("center",undefined,a)==5&&a.length==6);
c(b.lastIndexOfEx("center",5)==5);c(b.lastIndexOfEx("center",4)==-1);c(b.lastIndexOfEx(/c[a-z]+r/)==5);
c(b.lastIndexOfEx(/c[a-z]+r/,undefined,a)==5&&a.length==6);c(b.lastIndexOfEx(/c[a-z]+r/,5)==5);
c(b.lastIndexOfEx(/c[a-z]+r/,4)==-1)});Object.defineProperty(String.prototype,"splitFirst",{value:function(c){var a={left:this,right:undefined,length:0};
var b=this.indexOfEx(c,undefined,a);if(b>=0){a.left=this.substr(0,b);a.right=this.substr(b+a.length)
}return a},writable:true});Unitest("String.splitFirst()",function(c){var b="left center right".splitFirst(" ");
c(b.left=="left");c(b.right=="center right");var b=" left center right".splitFirst(" ");
c(b.left=="");c(b.right=="left center right");var a="leftright";var b=a.splitFirst(" ");
c(b.left===a);c(a.right===undefined);var b="left\ncenter right".splitFirst(/\s/);
c(b.left=="left");c(b.right=="center right")});Object.defineProperty(String.prototype,"splitLast",{value:function(c){var a={left:this,right:undefined,length:0};
var b=this.lastIndexOfEx(c,undefined,a);if(b>=0){a.left=this.substr(0,b);a.right=this.substr(b+a.length)
}return a},writable:true});Unitest("String.splitLast()",function(c){var b="left center right".splitLast(" ");
c(b.left=="left center");c(b.right=="right");var b="left center right ".splitLast(" ");
c(b.left=="left center right");c(b.right=="");var a="leftright";var b=a.splitLast(" ");
c(b.left===a);c(a.right===undefined);var b="left\ncenter right".splitLast(/\s/);c(b.left=="left\ncenter");
c(b.right=="right")});if(String.prototype.startsWith===undefined){Object.defineProperty(String.prototype,"startsWith",{enumerable:false,configurable:false,writable:false,value:function(b,a){a=a||0;
if(this.length<a+b.length){return false}return this.indexOf(b,a)===a}});Unitest("String.startsWith()",function(a){a("asd_qwe_zxc".startsWith("asd"));
a(!"asd_qwe_zxc".startsWith("!asd"));a(!"asd_qwe_zxc".startsWith("qwe"));a("asd_qwe_zxc".startsWith("qwe",4));
a(!"asd_qwe_zxc".startsWith("qwe",5))})}if(String.prototype.endsWith===undefined){Object.defineProperty(String.prototype,"endsWith",{enumerable:false,configurable:false,writable:false,value:function(c,b){var a=c.length;
b=b||this.length;if(a>b){return false}return this.slice(b-a,b)===c}});Unitest("String.endsWith()",function(a){a("asd_qwe_zxc".endsWith("zxc"));
a(!"asd_qwe_zxc".endsWith("!zxc"));a(!"asd_qwe_zxc".endsWith("qwe"));a("asd_qwe_zxc".endsWith("qwe",7));
a(!"asd_qwe_zxc".endsWith("qwe",6))})}Object.defineProperty(String.prototype,"count",{value:function(c){var a=0;
for(var b=0;(b=this.indexOf(c,b))>=0;b+=c.length){++a}return a},writable:true});Unitest("String.count()",function(a){a("asd".count("sd")==1);
a("asd".count("s")==1);a("asd".count("a")==1);a("asaad".count("a")==3);a("asaad".count("aa")==1);
a("aaa".count("a")==3)});"use strict";Object.defineProperty(Function.prototype,"define",{value:function(a){var c=this.prototype;
for(var b in a){Object.defineProperty(c,b,{value:a[b],writable:true})}return this
},writable:true});Unitest("Function.define()",function(d){var b=function(){};b.define({test:function(){return this.qwe
},qwe:5});var c=new b();d(c.test()===5)});Object.defineProperty(Function.prototype,"defineStatic",{value:function(a){for(var b in a){Object.defineProperty(this,b,{value:a[b],writable:true})
}return this},writable:true});Unitest("Function.defineStatic()",function(d){var b=function(){};
b.defineStatic({test:function(){return this.qwe},qwe:5});var c=new b();d(c.test===undefined);
d(b.test()==5)});Object.defineProperty(Function.prototype,"extend",{value:function(b,a){this.prototype=Object.create(b.prototype);
this.define(a);return this},writable:true});Unitest("Function.extend()",function(g){function b(){}b.extend(Array,{size:function(){return this.length
}});var d=new b();g(d instanceof b);g(d instanceof Array);g(d.size()===0);function e(){}e.extend(Array);
e.prototype.test=5;var f=new e();Array.prototype.test2=6;g(f instanceof e);g(f instanceof Array);
g(f.test===5);g(Array.prototype.test===undefined);g([].test===undefined);g(f.test2===6);
delete Array.prototype.test2});function ResolveMixins(a){if(!(this instanceof ResolveMixins)){return new ResolveMixins(a)
}this.merge(a)}Object.defineProperty(Function.prototype,"mixin",{value:function(){var e=arguments.length-1;
var g;if(e>0&&arguments[e] instanceof ResolveMixins){g=arguments[e]}else{++e}for(var d=0;
d<e;++d){var a=arguments[d];var b=a.prototype||a;for(var c in b){var f=undefined;
if(this.prototype[c]!==undefined){if(g&&g[c]!==undefined){var h=g[c];f=h.prototype?h.prototype[c]:h[c]
}if(!f){throw new Error('Unable to mixin property "'+c+'", it is already defined')
}}else{f=b[c]}Object.defineProperty(this.prototype,c,{value:f,writable:true})}}return this
},writable:true});Unitest("Function.mixin()",function(l){function k(){}k.prototype={asd:"qwe"};
function f(){}f.mixin(k);var g=new f();l(g.asd=="qwe");l(g instanceof f);var j={a:1};
var i={b:2};var h={a:11};k.mixin(j,i);l(new k().a==1);l(new k().b==2);var b=false;
try{k.mixin(h)}catch(h){b=true}l(b);k.mixin(h,ResolveMixins({a:j}));l(new k().a==1);
k.mixin(h,ResolveMixins({a:h}));l(new k().a==11);k.mixin({a:12},ResolveMixins({a:k}));
l(new k().a==11)});Object.defineProperty(Function.prototype,"bind",{value:function(b){var a=this;
return function(){return a.apply(b,arguments)}},writable:true});Unitest("Function.bind()",function(g){var f={};
var d=function(){return this};g(d()===this);g(d.bind(f)()===f);var c=function(){return arguments
};var e=c.bind(f)(1,2,3);g(e[0]==1&&e[1]==2&&e[2]==3&&e.length==3)});Object.defineProperty(Function.prototype,"bindArgsAfter",{value:function(){var b=this;
var d=Array.prototype.slice;var c=Array.prototype.concat;var a=d.call(arguments);
return function(){return b.apply(this,arguments.length?c.call(d.call(arguments,0),a):a)
}},writable:true});Unitest("Function.bindArgsAfter()",function(e){var d=function(){return arguments
};var c=d.bindArgsAfter(2,3);e(c()[0]==2);e(c()[1]==3);e(c(1)[0]==1);e(c(1)[1]==2);
e(c(1)[2]==3)});Object.defineProperty(Function.prototype,"bindArgsBefore",{value:function(){var b=this;
var d=Array.prototype.slice;var c=Array.prototype.concat;var a=d.call(arguments);
return function(){return b.apply(this,arguments.length?c.call(a,d.call(arguments,0)):a)
}},writable:true});Unitest("Function.bindArgsBefore()",function(e){var d=function(){return arguments
};var c=d.bindArgsBefore(2,3);e(c()[0]==2);e(c()[1]==3);e(c(1)[0]==2);e(c(1)[1]==3);
e(c(1)[2]==1)});"use strict";Object.defineProperty(Number,"isNumber",{value:function(a){return typeof a=="number"||a instanceof Number
},writable:true});Unitest("Number.isNumber()",function(a){a(!(5 instanceof Number)&&Number.isNumber(5));
a(typeof new Number(5)=="object"&&Number.isNumber(new Number(5)));a(!(5.5 instanceof Number)&&Number.isNumber(5.5));
a(typeof new Number(5.5)=="object"&&Number.isNumber(new Number(5.5)))});"use strict";
Object.defineProperty(Boolean,"isBoolean",{value:function(a){return typeof a=="boolean"||a instanceof Boolean
},writable:true});Unitest("Boolean.isBoolean()",function(a){a(!(true instanceof Boolean)&&Boolean.isBoolean(true));
a(typeof new Boolean(true)=="object"&&Boolean.isBoolean(new Boolean(true)))});"use strict";
function EventListener(b,c,a){this._event=b;this._callback=c;this._phase=(a=="capture"?true:(a=="bubble"?false:a))
}EventListener.define({add:function(a){a.addEventListener(this._event,this._callback,this._phase);
return this},once:function(b){var c=this;var a=function(){b.removeEventListener(c._event,a,c._phase);
return c._callback.apply(this,arguments)};b.addEventListener(this._event,a,this._phase);
return this},remove:function(a){a.removeEventListener(this._event,this._callback,this._phase);
return this},getEvent:function(){return this._event},getCallback:function(){return this._callback
},getPhase:function(){return this._phase}});Unitest("EventListener.*",function(){var b=0;
var e=function(){return ++b};var d=document.createElement("div");var a=document.createEvent("CustomEvent");
a.initEvent("customevent",true,true,null);var c=new EventListener("customevent",e,"capture");
test(c instanceof EventListener);test(c.getPhase()==true);test(c.getCallback()===e);
test(c.getEvent()=="customevent");c.add(d);d.dispatchEvent(a);test(b==1);c.remove(d);
d.dispatchEvent(a);test(b==1);c.once(d);d.dispatchEvent(a);test(b==2);d.dispatchEvent(a);
test(b==2)});"use strict";function ManagedListener(b,c,a){this._subjects=[];EventListener.call(this,b,c,a)
}ManagedListener.extend(EventListener,{add:function(a){a.addEventListener(this._event,this._callback,this._phase);
this._subjects.push(a);return this},remove:function(a){a.removeEventListener(this._event,this._callback,this._phase);
this._subjects.splice(this._subjects.lastIndexOf(a),1);return this},removeLast:function(){var a=this._subjects.pop();
if(a){a.removeEventListener(this._event,this._callback,this._phase)}return a},removeAll:function(){var a=this._subjects;
for(var b=a.length-1;b>=0;--b){a[b].removeEventListener(this._event,this._callback,this._phase)
}this._subjects=[];return this}});Unitest("ManagedListener.*",function(){var c=0;
var g=function(){return ++c};var f=document.createElement("div");var a=document.createEvent("CustomEvent");
a.initEvent("customevent",true,true,null);var e=new ManagedListener("customevent",g,"capture");
test(e instanceof ManagedListener);test(e.getPhase()==true);test(e.getCallback()===g);
test(e.getEvent()=="customevent");e.add(f);test(e._subjects[0]===f);f.dispatchEvent(a);
test(c==1);e.remove(f);f.dispatchEvent(a);test(c==1);var d=document.createElement("div");
var b=document.createElement("div");e.add(d);e.add(b);test(e._subjects[0]===d);test(e._subjects[1]===b);
d.dispatchEvent(a);b.dispatchEvent(a);test(c==3);e.remove(d);test(e._subjects[0]===b);
d.dispatchEvent(a);test(c==3);e.removeLast();test(e._subjects.length==0);b.dispatchEvent(a);
test(c==3);e.add(d);e.add(b);e.removeLast();test(e._subjects[0]===d);b.dispatchEvent(a);
test(c==3);e.removeAll();test(e._subjects.length==0);d.dispatchEvent(a);test(c==3)
});"use strict";function TEventDispatcher(){this._events={}}TEventDispatcher.prototype={addEventListener:function(c,d,a){var b;
if((b=this._events[c])===undefined){b=[];this._events[c]=b}b.push([d,a])},removeEventListener:function(e,g,a){var c=this._events[e];
if(c instanceof Array){for(var b=0,d=c.length;b<d;++b){var f=c[b];if(f!==null&&f[0]===g&&f[1]===a){c[b]=null;
break}}}},dispatchEvent:function(a){var c=this._events[a.type];if(c instanceof Array){for(var b=0,d=c.length;
b<d;++b){var e=c[b];if(e!==null){e[0].call(this,a);if(a.defaultPrevented){break}}}return !a.defaultPrevented
}return true}};Unitest("TEventDispatcher.*",function(){var e=0;var h=function(a){++e;
if(e==3){a.preventDefault()}};var c=0;var f=function(a){++c};var d=new CustomEvent("event",{bubbles:false,cancelable:true});
var g=new TEventDispatcher();g.merge(TEventDispatcher2);g.addEventListener("event",h,true);
g.on("event",f,false);test(g.dispatchEvent(d)===true);test(g.notify(d)===true);test(e==2);
test(c==2);d=new CustomEvent("event",{bubbles:false,cancelable:true});test(g.dispatchEvent(d)===false);
test(g.dispatchEvent(d)===false);test(e==4);test(c==2);d=new CustomEvent("event",{bubbles:false,cancelable:true});
g.removeEventListener("event",h,false);g.dispatchEvent(d);g.dispatchEvent(d);test(e==6);
test(c==4);d=new CustomEvent("event",{bubbles:false,cancelable:true});g.off("event",h,true);
g.dispatchEvent(d);g.dispatchEvent(d);test(e==6);test(c==6);d=new CustomEvent("event",{bubbles:false,cancelable:true});
g.removeEventListener("event",f,false);g.dispatchEvent(d);g.dispatchEvent(d);test(e==6);
test(c==6)});"use strict";var TEventDispatcher2={on:function(){return this.addEventListener.apply(this,arguments)
},off:function(){return this.removeEventListener.apply(this,arguments)},notify:function(){return this.dispatchEvent.apply(this,arguments)
},once:function(b,c,a){return new EventListener(b,c,a).once(this)}};"use strict";
(function(b){function c(){TEventDispatcher.call(this);this._state=undefined}c.defineStatic({StateChanged:function(e,d){return new CustomEvent("State.Changed",{bubbles:false,cancelable:false,detail:{State:e,LastState:d}})
}});var a=TEventDispatcher.prototype.addEventListener;c.define({addEventListener:function(e,g){var d=a.apply(this,arguments);
if(e=="State.Changed"){var f=this.getState();g(new c.StateChanged(f,f))}return d},setState:function(e){if(this._state==e){return false
}var d=this._state;this.dispatchEvent(new c.StateChanged(this._state=e,d));return true
},getState:function(){return this._state},onState:function(e,d){return new EventListener("State.Changed",function(f){if(f.detail.State==e){return d(f)
}}).add(this)}}).mixin(TEventDispatcher,TEventDispatcher2,ResolveMixins({addEventListener:c}));
b.Promise=c})(this);Unitest("Promise states",function(){var b=new Promise();var a=0;
var c=0;b.onState("resolved",function(d){++a});b.onState("rejected",function(d){++c
});b.setState("resolved");test(a==1);test(c==0);b.setState("rejected");test(c==1);
test(a==1);b.onState("resolved",function(d){++a});test(a==1)});Unitest("Promise promises",function(){var c=new Promise();
var a=0;var b=0;c.setState("resolved");c.onState("resolved",function(d){++a});test(a==1);
c.onState("resolved",function(d){++a});test(a==2);c.onState("rejected",function(d){++b
});c.setState("rejected");test(b==1);test(a==2)});"use strict";(function(a){function d(){Promise.call(this)
}d.defineStatic({TaskFinished:function(e){return new CustomEvent("Task.Finished",{bubbles:false,cancelable:false,detail:{State:e}})
}});var c=Promise.prototype.addEventListener;var b=Promise.prototype.setState;d.extend(Promise,{setState:function(e){if(this.isFinished()){return false
}return b.call(this,e)},start:function(){return this.setState("started")},resolve:function(){if(this.setState("success")){this.dispatchEvent(new d.TaskFinished("success"));
return true}return false},onSuccess:function(e){return this.onState("success",e)},reject:function(){if(this.setState("error")){this.dispatchEvent(new d.TaskFinished("error"));
return true}return false},onError:function(e){return this.onState("error",e)},cancel:function(){if(this.setState("cancelled")){this.dispatchEvent(new d.TaskFinished("cancelled"));
return true}return false},onCancelled:function(e){return this.onState("cancelled",e)
},onFinished:function(e){return new EventListener("Task.Finished",e).add(this)},isFinished:function(){var e=this.getState();
return(e=="success"||e=="error"||e=="cancelled")},addEventListener:function(f,g){var e=c.apply(this,arguments);
if(f=="Task.Finished"&&this.isFinished()){g(new d.TaskFinished(this.getState()))}return e
}});a.Task=d})(this);Unitest("Task.*",function(){var a=new Task();a.resolve();test(a.setState("running")===false);
test(a.getState()=="success");var a=new Task();var e=0;var d=0;var c=0;var b=0;a.onFinished(function(){++e
});a.onError(function(){++b});a.onSuccess(function(){++d});a.onCancelled(function(){++c
});test(a.reject()===true);test(e==1&&d==0&&c==0&&b==1);test(a.reject()===false);
test(a.resolve()===false);test(a.cancel()===false);test(e==1&&d==0&&c==0&&b==1);a.onFinished(function(){++e
});a.onError(function(){++b});a.onSuccess(function(){++d});a.onCancelled(function(){++c
});test(e==2&&d==0&&c==0&&b==2);var a=new Task();var e=0;var d=0;var c=0;var b=0;
a.onFinished(function(){++e});a.onError(function(){++b});a.onSuccess(function(){++d
});a.onCancelled(function(){++c});test(a.resolve()===true);test(e==1&&d==1&&c==0&&b==0);
test(a.reject()===false);test(a.resolve()===false);test(a.cancel()===false);test(e==1&&d==1&&c==0&&b==0);
a.onFinished(function(){++e});a.onError(function(){++b});a.onSuccess(function(){++d
});a.onCancelled(function(){++c});test(e==2&&d==2&&c==0&&b==0);var a=new Task();var e=0;
var d=0;var c=0;var b=0;a.onFinished(function(){++e});a.onError(function(){++b});
a.onSuccess(function(){++d});a.onCancelled(function(){++c});test(a.cancel()===true);
test(e==1&&d==0&&c==1&&b==0);test(a.reject()===false);test(a.resolve()===false);test(a.cancel()===false);
test(e==1&&d==0&&c==1&&b==0);a.onFinished(function(){++e});a.onError(function(){++b
});a.onSuccess(function(){++d});a.onCancelled(function(){++c});test(e==2&&d==0&&c==2&&b==0)
});"use strict";function Callback(b){this._naked=b;var a=this;this._callback=function(){if(a._enabled){return b.apply(this,arguments)
}};this._enabled=true}Callback.define({enable:function(){this._enabled=true;return this
},disable:function(){this._enabled=false;return this},isEnabled:function(){return this._enabled
},getNaked:function(){return this._naked},getCallback:function(){return this._callback
}});Unitest("Callback.*",function(){var e=0;var f=function(){return ++e};var d=new Callback(f);
test(d instanceof Callback);test(d.getCallback() instanceof Function);test(d.getCallback()!==f);
test(d.getNaked()===f);var c=d.getCallback();test(c()==1);test(f()==2);test(c()==3);
d.disable();test(d.isEnabled()===false);c();test(e==3);test(f()==4);c();test(e==4);
d.enable();test(d.isEnabled()==true);test(c()==5);test(f()==6)});"use strict";function Semaphore(a,b){TEventDispatcher.call(this);
this._nLocks=a;this._callback=b}Semaphore.defineStatic({SemaphoreNotify:function(){return new CustomEvent("Semaphore.Notify",{bubbles:false,cancelable:false})
},SemaphoreReleased:function(){return new CustomEvent("Semaphore.Released",{bubbles:false,cancelable:false})
}});Semaphore.define({notify:function(){--this._nLocks;if(this._nLocks<0){throw new Error("Unable to notify lock, all locks are released")
}this.dispatchEvent(new Semaphore.SemaphoreNotify());if(this._nLocks===0){this._callback();
this.dispatchEvent(new Semaphore.SemaphoreReleased())}},lock:function(){++this._nLocks
}}).mixin(TEventDispatcher,TEventDispatcher2,ResolveMixins({notify:Semaphore}));Unitest("Semaphore.*",function(){var b=false;
var a=new Semaphore(1,function(){b=true});a.lock();a.notify();test(b===false);a.notify();
test(b===true);try{a.notify()}catch(c){b=false}test(b===false)});"use strict";function View(a){var a=(a instanceof HTMLElement)?a:document.createElement(a||"div");
Object.defineProperty(a,"_view",{value:this});a.classList.add("View");this._element=a;
this._layout=null;this._behaviors=null;this._events={}}View.defineStatic({Data:function(a){var b=++View.Data._lastId;
View.Data._bindings[b]=a;return b}});View.Data.defineStatic({_lastId:0,_bindings:{},release:function(a){delete View.Data._bindings[a]
}});Object.defineProperty(HTMLElement.prototype,"getView",{value:function(){return this._view
},writable:true});View.define({setData:function(a){this._dataId=a;this._data=View.Data._bindings[a];
return this},getData:function(){return this._data},setLayout:function(a){if(a===null){if(this._layout){this._layout.detach()
}}else{if(!(a instanceof Layout)){a=Layout.findByName(a);if(a===null){return this.setLayout(a)
}else{a=new a(this)}}}this._layout=a;return this},addBehavior:function(e){if(String.isString(e)){if(e.indexOf(" ")>0){e=e.split(" ")
}else{e=[e]}for(var c=0,d=e.length;c<d;++c){var a=Behavior.findByName(e[c]);if(a===null){throw new Error("Unknown behavior "+e[c])
}this.addBehavior(new a(this))}return this}(this._behaviors||(this._behaviors=[])).push(e);
return this},getBehaviors:function(){return this._behaviors},getElement:function(){return this._element
},findView:function(a){var b=this._element.querySelector(a);return b?b._view:null
},findParentView:function(a){var b=this._element;while(b=b.parentNode){if(b._view&&b.matches(a)){return b._view
}}return null},addView:function(b,a){var d=this._element;if(b instanceof Array){if(a=="first"&&d.firstChild){for(var c=b.length-1;
c>=0;--c){d.insertBefore(b[c]._element,d.firstChild)}return true}for(var c=0,e=b.length;
c<e;++c){d.appendChild(b[c]._element)}return true}if(a=="first"&&d.firstChild){d.insertBefore(b._element,d.firstChild);
return true}d.appendChild(b._element);return true},moveView:function(b,a){var d=this._element;
var c=b._element;if(a=="first"){if(d.firstChild!==c){d.insertBefore(c,d.firstChild);
return true}return false}else{if(a=="last"){if(d.lastChild!==c){d.insertBefore(c,null);
return true}return false}}return false},removeView:function(a){this._element.removeChild(a._element);
return true},addEventListener:function(d,f,a){var c=this;var e=function(){return f.apply(c,arguments)
};var b;if((b=this._events[d])===undefined){b=[];this._events[d]=b}b.push([e,f,a]);
return this._element.addEventListener(d,e,a)},removeEventListener:function(f,g,a){var c=this._events[f];
if(c instanceof Array){for(var b=0,d=c.length;b<d;++b){var e=c[b];if(e!==null&&e[1]===g&&e[2]===a){c[b]=null;
return this._element.removeEventListener(f,e[0],a)}}}},dispatchEvent:function(a){return this._element.dispatchEvent(a)
},setText:function(a){this._element.textContent=a;return this},getText:function(){return this._element.textContent
},setId:function(a){this._element.id=a;return this},setClass:function(a){var c=this._element.classList;
if(a.indexOf(" ")>0){a=a.split(" ");for(var b=a.length-1;b>=0;--b){c.add(a[b])}}else{c.add(a)
}return this},setBehavior:function(a){return this.addBehavior(a)},hasState:function(a){return this._element.classList.contains(a)
},setState:function(b,d){d=d===false?"remove":"add";var c=this._element.classList;
if(b.indexOf(" ")>0){b=b.split(" ");for(var a=b.length-1;a>=0;--a){c[d](b[a])}}else{c[d](b)
}return this}}).mixin(TEventDispatcher2);Unitest("View()",function(){var a=new View();
test(a.getElement() instanceof HTMLDivElement);test(a.getElement()._view===a);a=new View("a");
test(a.getElement() instanceof HTMLAnchorElement);var b=document.createElement("br");
a=new View(b);test(a.getElement() instanceof HTMLBRElement)});Unitest("View.addView()/View.removeView()",function(){var d=new View();
var c=new View("a");var b=new View("a");d.addView(c);test(d.getElement().firstChild===c.getElement());
d.addView(b,"first");test(d.getElement().firstChild===b.getElement());d.removeView(b);
test(d.getElement().firstChild===c.getElement());d.addView(b,"last");test(d.getElement().lastChild===b.getElement());
test(d.getElement().firstChild===c.getElement());d.removeView(b);d.addView(b);test(d.getElement().lastChild===b.getElement());
d.removeView(c);d.removeView(b);test(d.getElement().firstChild===null)});Unitest("View.moveView()",function(){var d=new View();
var c=new View("a");var b=new View("a");d.addView(c);d.addView(b);test(d.getElement().firstChild===c.getElement());
test(d.getElement().lastChild===b.getElement());test(d.moveView(c,"first")===false);
test(d.getElement().firstChild===c.getElement());test(d.moveView(b,"last")===false);
test(d.getElement().lastChild===b.getElement());test(d.moveView(b,"first")===true);
test(d.getElement().firstChild===b.getElement());test(d.getElement().lastChild===c.getElement());
test(d.moveView(b,"last")===true);test(d.getElement().firstChild===c.getElement());
test(d.getElement().lastChild===b.getElement())});Unitest("View.setId()",function(){var a=new View();
a.setId("test");test(a.getElement().id=="test")});Unitest("View.setClass()",function(){var a=new View();
a.setClass("cls1 cls2");test(a.getElement().classList.contains("cls1"));test(a.getElement().classList.contains("cls2"))
});"use strict";(function(g,b){var e={"'":"\\'","\\":"\\\\","\r":"\\r","\n":"\\n","\t":"\\t"};
var f=/[\\'\r\n\t]/g;function k(m){return m.replace(f,"\\$&")}function d(m,n){return new a({cache:true,source:m,id:n})
}function a(u,p,n){var s={}.merge(a.DefaultSettings);p=p instanceof Object?s.merge(p):s;
var o=0;var m="";if(u instanceof Object&&u.cache===true){o=1;m=u.source;n=u.id}else{var t=new RegExp(p.escape+"|"+p.interpolate+"|"+p.evaluate,"g");
var q=0;u.replace(t,function(w,x,v,z,y){++o;m+="__p += '"+k(u.slice(q,y))+"';\n";
if(x){m+="__p += TextTemplate.escapeHtml( "+x+"\n);\n"}else{if(v){m+="__p += ( "+v+"\n);\n"
}else{if(z){m+=""+z.trim()+"\n"}}}q=y+w.length;return w})}if(o>0){if(q<u.length-1){m+="__p += '"+k(u.slice(q))+"';\n"
}m="var __p = '';\n"+(p.print?"function "+p.print+" ( t, e ) { __p += e ? TextTemplate.escapeHtml( t ) : t; };\n":"")+m+"return __p;\n";
try{this._template=new Function(p.variable,m)}catch(r){r.source=m;throw r}}else{m="return '"+k(u)+"';";
this._template=function(){return u}}this._settings=p;this._source=m}Unitest("TextTemplate.render()",function(){var m=new a("<h1>'ello</h1>: <%= data.firstName %> <%! data.lastName %>. <% for ( var i = 0; i < data.days.length; ++i ) { %> <%= data.days[i] %> <% } %>");
var n=m.render({firstName:"first",lastName:"l&ast",days:["mon","tue"]});test(n=="<h1>'ello</h1>: first l&amp;ast.  mon  tue ");
test(new a("asd").render()=="asd");test(new a('<asd atr="<%= 1 %>" />').render()=='<asd atr="1" />');
test(new a('<asd atr="<% prn(1) %>" />').render()=='<asd atr="1" />');test(new a('<asd atr="<%= 2 //1 %>" />').render())
});a.DefaultSettings={variable:"data",evaluate:"<%([\\s\\S]+?)%>",interpolate:"<%=([\\s\\S]+?)%>",escape:"<%!([\\s\\S]+?)%>",print:"prn"};
var h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#27;"};var i=/[&<>"']/g;
function j(m){return h[m]}a.escapeHtml=function(m){if(!String.isString(m)){m=String(m)
}return m.replace(i,j)};Unitest("TextTemplate.escapeHtml()",function(){var m=a.escapeHtml('<a href="&\'">');
test(m=="&lt;a href=&quot;&amp;&#27;&quot;&gt;")});a.define({getSource:function(){return this._source
},render:function(m){return this._template(m)}});a.Cache={};var c={};function l(q,p){var m=c[q];
if(m!==undefined){return p!==undefined?m.render(p):m}var n=a.Cache[q];if(n!==undefined){m=d(n,q);
c[q]=m;return p!==undefined?m.render(p):m}var o=document.getElementById(q);if(o){m=new a(o.innerHTML,undefined,q);
c[q]=m;return p!==undefined?m.render(p):m}throw new Error("TEXTTEMPLATE_ID_NOT_FOUND")
}Unitest("TextTemplate.Cache",function(){a.Cache.t1=new a("asd").getSource();test(l("t1").render()=="asd");
a.Cache.t1=new a("qwer").getSource();test(l("t1").render()=="asd");a.Cache={}});g.$TT=l;
g.TextTemplate=a})(this,typeof global!="undefined"?global:window);"use strict";(function(a){function b(d){this._template=d
}b.loadString=function(e){var g=b._parser||(b._parser=new DOMParser());var f=g.parseFromString(e,"text/xml");
var d=f.getElementsByTagName("parsererror");if(d.length>0){throw new SyntaxError(d[0].textContent)
}return new b(f)};Unitest("ViewTemplate.loadString()",function(){var f=b.loadString("<View/>");
test(f.getDocument().firstChild.tagName=="View");var d=false;try{var f=b.loadString("<View>&error;</View>")
}catch(g){d=(g instanceof SyntaxError)||(g.code==12)}test(d)});b.loadInline=function(d){var e=document.getElementById(d);
if(e){return b.loadString(e.innerHTML)}throw new Error("VIEWTEMPLATE_ID_NOT_FOUND")
};b.classFromTemplate=function(d,f){var e=new d();b.setupViewFromAttributes(e,f);
b.addViewsFromChildren(e,f);return e};Unitest("ViewTemplate.classFromTemplate()",function(){var d=b.classFromTemplate(View,b.loadString('<View id="a"><View/></View>').getDocument().firstChild);
test(d instanceof View);test(d.getElement().id=="a");test(d.getElement().firstChild._view instanceof View)
});b.createViewFromElement=function(h){var k=h.tagName;var d=window[k]||View[k];if(d===undefined){if(k.indexOf(".")>=0){var g=k.split(".");
d=window[g[0]];for(var f=1,j=g.length;f<j&&d!==undefined;++f){d=d[g[f]]}}if(d===undefined){throw new Error('Undefined view "'+k+'"')
}}var e=null;if(d.fromTemplate instanceof Function){e=d.fromTemplate(h)}else{e=b.classFromTemplate(d,h)
}return e};Unitest("ViewTemplate.createViewFromElement()",function(){var d=b.createViewFromElement(b.loadString("<View/>").getDocument().firstChild);
test(d instanceof View)});b.setupViewFromAttributes=function(m,f){for(var g=0,n=f.attributes.length;
g<n;++g){var h=f.attributes[g];var d=h.name;if(d.indexOf("-")>0){var k=d.split("-");
for(var e=k.length-1;e>=0;--e){d=k[e];k[e]=d.charAt(0).toUpperCase()+d.substr(1)}d="set"+k.join("")
}else{d="set"+d.charAt(0).toUpperCase()+d.substr(1)}var l=m[d];if(l instanceof Function){l.call(m,h.value)
}}};b.setupViewFromProperties=function(d,h){for(var g in h){var f=g;if(f.indexOf("-")>0){var k=f.split("-");
for(var e=k.length-1;e>=0;--e){f=k[e];k[e]=f.charAt(0).toUpperCase()+f.substr(1)}f="set"+k.join("")
}else{f="set"+f.charAt(0).toUpperCase()+f.substr(1)}var i=d[f];if(i instanceof Function){i.call(d,h[g])
}}};Unitest("ViewTemplate.setupViewFromAttributes()",function(){var e=b.loadString("<View/>").getDocument();
var d=b.createViewFromElement(e.firstChild);test(d instanceof View);test(d.getElement().id==="");
e=b.loadString('<View id="test"/>').getDocument();b.setupViewFromAttributes(d,e.firstChild);
test(d.getElement().id==="test")});b.addViewsFromChildren=function(d,e){var f=e.firstChild;
while(f){if(f.nodeType==Node.ELEMENT_NODE){d.addView(b.createViewFromElement(f))}f=f.nextSibling
}};Unitest("ViewTemplate.addViewsFromChildren()",function(){var e=b.loadString("<View/>").getDocument();
var d=b.createViewFromElement(e.firstChild);test(d instanceof View);test(d.getElement().firstChild===null);
e=b.loadString('<View><View id="test"/></View>').getDocument();b.addViewsFromChildren(d,e.firstChild);
test(d.getElement().id==="");test(d.getElement().firstChild.id==="test");test(d.getElement().firstChild.parentNode._view===d)
});b.define({getDocument:function(){return this._template},createView:function(){var f=this._template.documentElement;
if(f.tagName=="Template"){var e=[];f=f.firstChild;while(f){if(f.nodeType==f.ELEMENT_NODE){var d=b.createViewFromElement(f);
if(d instanceof View){e.push(d)}}f=f.nextSibling}return e.length>0?e:null}else{return b.createViewFromElement(f)
}}});Unitest("ViewTemplate.crateView()",function(){var d=b.loadString("<View/>").createView();
test(d instanceof View);d=b.loadString("<Template><View/><View/></Template>").createView();
test(d instanceof Array);test(d[0] instanceof View);test(d[1] instanceof View)});
function c(f,e){var d=f instanceof TextTemplate?f:$TT(f);return b.loadString(d.render(e)).createView()
}a.$T=c;a.$bind=View.Data;a.ViewTemplate=b})(this);"use strict";View.TActiveView=function(){this._active=null
};View.TActiveView.defineStatic({fromTemplate:function(a,b){var c=a._element.firstChild;
while(c){if(c._view.hasState("active")){a.setActive(c._view);break}c=c.nextSibling
}}});View.TActiveView.prototype={setActive:function(b){var d=this._active;if(b===d){return false
}var f=new CustomEvent("ActiveView.Changing",{bubbles:true,cancelable:true,detail:{Active:b,Inactive:d,Parent:this}});
if(this.dispatchEvent(f)===true){if(d){d.setState("active",false)}this._active=b;
if(b){b.setState("active",true)}var e=new CustomEvent("ActiveView.Changed",{bubbles:true,cancelable:false,detail:{Active:b,Inactive:d}});
this.dispatchEvent(e);if(d){var c=new CustomEvent("ActiveView.Deactivated",{bubbles:true,cancelable:false,detail:{Active:b,Parent:this}});
d.dispatchEvent(c)}if(b){var a=new CustomEvent("ActiveView.Activated",{bubbles:true,cancelable:true,detail:{Inactive:d,Parent:this}});
b.dispatchEvent(a)}return true}return false},getActive:function(){return this._active
}};Unitest("View.TActiveView.*",function(){var l=new View();var k=new View();var c=false;
var f=false;var e=false;var d=new View();d.merge(View.TActiveView.prototype);View.TActiveView.call(d);
d.setActive(l);test(d.getActive()===l);var g=new EventListener("ActiveView.Changing",function(a){c=true;
test(a.detail.Active===k);test(a.detail.Inactive===l);a.detail.Active=null;a.detail.Inactive=null
}).add(d);var j=new EventListener("ActiveView.Changed",function(a){f=true;test(a.detail.Active===k);
test(a.detail.Inactive===l);a.preventDefault()}).add(d);var i=new EventListener("ActiveView.Changed",function(a){e=true
}).add(d);d.setActive(k);test(d.getActive()===k);test(c===true);test(f===true);test(e===true);
g.remove(d);g=new EventListener("ActiveView.Changing",function(a){a.preventDefault()
}).add(d);d.setActive(l);test(d.getActive()===k)});"use strict";View.TLabel=function(){this._image=null;
this._text=null;this._order="ltr"};View.TLabel.prototype={setOrder:function(a){if(this._order!==a){this._order=a;
if(a!==null&&this._image&&this._text){this.moveView(this._text,a=="ltr"?"last":"first")
}}return this._order},setText:function(c){if(c===null){var b=this._text;if(b){this.removeView(b)
}return b}if(this._text===null){var a=this._order=="ltr"?"last":(this._order=="rtl"?"first":undefined);
this.addView(this._text=new View.Txt(),a)}this._text.setText(c);return this._text
},setTitle:function(b){var a=this._image;if(a===null){return null}a.setText(b);return a
},setImage:function(c,d){if(c===null){var b=this._image;if(b){this.removeView(b);
return b}}if(!(this._image instanceof View.Img)){if(this._image!==null){this.removeView(this._image)
}var a=this._order=="ltr"?"first":(this._order=="rtl"?"last":undefined);this.addView(this._image=new View.Img(),a)
}this._image.setImage(c,d);return this._image},setStockImage:function(c,d){if(c===null){var b=this._image;
if(b){this.removeView(b);return b}}if(!(this._image instanceof View.StockImg)){if(this._image!==null){this.removeView(this._image)
}var a=this._order=="ltr"?"first":(this._order=="rtl"?"last":undefined);this.addView(this._image=new View.StockImg(),a)
}this._image.setImage(c,d);return this._image}};Unitest("View.TLabel",function(){function d(){View.call(this);
View.TLabel.call(this)}d.extend(View).mixin(View.TLabel,ResolveMixins({setText:View.TLabel}));
var c=new d();var f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAIAAAD4cAhVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD8SURBVGhD7ZNBDoJQEEM9iEvvfzPPgD+hMUMVBJyZhqQvXdnPpG/hbbo4FlBjATUWUGMBNRZQYwE1FlBjATVKgef98TN4uo5AgCbuD75f0i1Am44GVwJ9AjTlXHAr0CRAO04H5wIdAjQiBi9W2PO4XIBGvIP6b2oFaPQcdEl0C6DIo1CApo+gSMUCK9D0ERTZlAjQ9BEUBVjgA5o+gqKGcgH8WkayAK0fQVFGpgBNH0FRSZoATZ+DrpIcAdo9B10xLHB0QXwfg7qehQCNOB2cayFfALe6SBbAoUa2/gOHgu/bYYEITfwaPNWxJXAJLKDGAmosoMYCaiygZZpe7U0ia+UfXOwAAAAASUVORK5CYII=";
var b=c.setImage(f);test(b instanceof View.Img);test(c.getElement().firstChild._view===b);
var a=c.setText("txt");test(a instanceof View.Txt);test(c.getElement().lastChild._view===a);
c.setOrder("rtl");test(c.getElement().firstChild._view===a);test(c.getElement().lastChild._view===b);
var e=c.setStockImage("star");test(c.getElement().firstChild._view===a);test(c.getElement().lastChild._view===e);
c.setOrder("ltr");test(c.getElement().firstChild._view===e);test(c.getElement().lastChild._view===a);
test(c.setImage(null)===e);test(c.getElement().firstChild._view===a);test(c.setText(null)===a);
test(c.getElement().firstChild===null)});"use strict";View.AppView=function(){View.call(this);
this._element.classList.add("AppView");this._lastDeviceClass=null;if(window.DocviewjsTheme!==undefined){this._onResize=new EventListener("resize",this.updateDeviceClass.bind(this),"capture").add(window);
this.updateDeviceClass()}else{this._onResize=null}document.body.appendChild(this._element)
};View.AppView.defineStatic({DeviceSizeChanged:function(b,a){return new CustomEvent("AppView.DeviceSize.Changed",{bubbles:true,cancelable:false,detail:{Device:b,LastDevice:a}})
}});View.AppView.extend(View,{updateDeviceClass:function(){var e=window.DocviewjsTheme?window.DocviewjsTheme.DeviceSizes:undefined;
if(!(e instanceof Object)){return false}var b=null;var g=window.innerWidth;for(var d in e){var j=e[d];
var c=j[0];var f=j[1];if((c==-1||g>=c)&&(f==-1||g<=f)){b=d;break}}if(b===null){return false
}var a=this._element.classList;if(b!==this._lastDeviceClass){if(this._lastDeviceClass!==null){a.remove(this._lastDeviceClass)
}var h=new View.AppView.DeviceSizeChanged(b,this._lastDeviceClass);a.add(this._lastDeviceClass=b);
this.dispatchEvent(h);return true}return false},setText:function(a){return document.title=(typeof R!="undefined"?R.render(a)||a:a)
},getText:function(){return document.title}});Unitest("View.AppView.setText()/View.AppView.getText()",function(){var a=View.AppView.prototype.getText();
View.AppView.prototype.setText("test");test(View.AppView.prototype.getText()=="test");
View.AppView.prototype.setText(a);test(View.AppView.prototype.getText()==a)});"use strict";
View.CodeBlock=function(a){View.call(this,"code");var b=this._element;b.classList.add("CodeBlock");
if(a){this.setHtml(a)}};View.CodeBlock.defineStatic({fromTemplate:function(d){var c="";
var a=View.CodeBlock._serializer||(View.CodeBlock._serializer=new XMLSerializer());
var e=d.firstChild;while(e){c+=a.serializeToString(e);e=e.nextSibling}var b=new View.CodeBlock(d.textContent);
ViewTemplate.setupViewFromAttributes(b,d);return b}});View.CodeBlock.extend(View,{setHtml:function(a){this._element.innerHTML=a;
return this},getHtml:function(a){return this._element.innerHTML}});Unitest("CodeBlock",function(){var a=ViewTemplate.loadString("<View.CodeBlock><![CDATA[<h1>header</h1>]]></View.CodeBlock>");
var b=View.CodeBlock.fromTemplate(a.getDocument().firstChild);test(b instanceof View.CodeBlock);
test(b.getHtml()=="<h1>header</h1>")});"use strict";View.Panel=function(){View.call(this);
this._element.classList.add("Panel")};View.Panel.extend(View);View.PanelTitle=function(){View.call(this);
this._element.classList.add("PanelTitle")};View.PanelTitle.extend(View);View.PanelFooter=function(){View.call(this);
this._element.classList.add("PanelFooter")};View.PanelFooter.extend(View);"use strict";
(function(){View.HtmlArea=function(d){View.call(this);var e=this._element;e.classList.add("HtmlArea");
if(d){this.setHtml(d)}};View.HtmlArea.defineStatic({fromTemplate:function(g){var f="";
var d=View.HtmlArea._serializer||(View.HtmlArea._serializer=new XMLSerializer());
var h=g.firstChild;while(h){f+=d.serializeToString(h);h=h.nextSibling}var e=new View.HtmlArea(f);
ViewTemplate.setupViewFromAttributes(e,g);return e}});var c=/(<\/?)view:([a-z\-]+)/gi;
function b(e,g,d){if(d.indexOf("-")>0){var f=d.split("-");for(var j=f.length-1;j>=0;
--j){var h=f[j];f[j]=h.charAt(0).toUpperCase()+h.substr(1)}return g+f.join("")}else{return g+d.charAt(0).toUpperCase()+d.substr(1)
}}function a(e){var f=e.firstElementChild;while(f){if(f.localName.startsWith("view:")){var d=f.outerHTML.replace(c,b);
var g=ViewTemplate.loadString(d).createView().getElement();f.parentNode.replaceChild(g,f);
f=g}else{a(f)}f=f.nextElementSibling}}View.HtmlArea.extend(View,{setHtml:function(d){this._element.innerHTML=d;
a(this._element);return this},getHtml:function(d){return this._element.innerHTML}});
Unitest("HtmlArea",function(){var d=ViewTemplate.loadString("<View.HtmlArea><h1>header</h1></View.HtmlArea>");
var e=View.HtmlArea.fromTemplate(d.getDocument().firstChild);test(e instanceof View.HtmlArea);
test(e.getElement().innerHTML=="<h1>header</h1>");e.setHtml("<view:html-area>sub</view:html-area><view:html-area>suba</view:html-area>");
test(e.getHtml()=='<div class="View HtmlArea">sub</div><div class="View HtmlArea">suba</div>')
})})(this);"use strict";View.Button=function(b){View.call(this,"button");View.TLabel.call(this);
var a=this._element.classList;a.add("TLabel");a.add("Button");if(b){ViewTemplate.setupViewFromProperties(this,b)
}};View.Button.extend(View,{setState:function(a,b){if(a=="disabled"){if(b===false){this._element.removeAttribute("disabled")
}else{this._element.setAttribute("disabled","disabled")}}return View.prototype.setState.call(this,a,b)
}}).mixin(View.TLabel,ResolveMixins({setText:View.TLabel}));"use strict";View.Link=function(b){View.call(this,"button");
View.TLabel.call(this);var a=this._element.classList;a.add("TLabel");a.add("Link");
if(b){ViewTemplate.setupViewFromProperties(this,b)}};View.Link.defineStatic({fromTemplate:function(b){var a=ViewTemplate.classFromTemplate(View.Link,b);
if(b.getAttribute("behavior")===null){a.setBehavior("auto")}return a}});View.Link.extend(View,{setUrl:function(a){this._url=a;
return this},getUrl:function(){return this._url},setTarget:function(a){this._target=a;
return this},getTarget:function(){return this._target},setState:function(a,b){if(a=="disabled"){if(b===false){this._element.removeAttribute("disabled")
}else{this._element.setAttribute("disabled","disabled")}}return View.prototype.setState.call(this,a,b)
}}).mixin(View.TLabel,ResolveMixins({setText:View.TLabel}));"use strict";(function(a){function b(){View.call(this);
View.TActiveView.call(this);this._element.classList.add("TabStrip");this.setLayout("Horizontal")
}b.extend(View).mixin(View.TActiveView);b.fromTemplate=function(d){var c=ViewTemplate.classFromTemplate(b,d);
if(d.getAttribute("behavior")===null){c.setBehavior("auto")}View.TActiveView.fromTemplate(c,d);
return c};a.TabStrip=b})(this.View);"use strict";View.Tab=function(b){View.call(this);
View.TLabel.call(this);var a=this._element.classList;a.add("Label");a.add("Tab");
if(b){ViewTemplate.setupViewFromProperties(this,b)}};View.Tab.extend(View).mixin(View.TLabel,ResolveMixins({setText:View.TLabel}));
"use strict";View.ViewSwitch=function(){View.call(this);View.TActiveView.call(this);
this._element.classList.add("ViewSwitch");this.setBehavior("auto")};View.ViewSwitch.fromTemplate=function(b){var a=ViewTemplate.classFromTemplate(View.ViewSwitch,b);
View.TActiveView.fromTemplate(a,b);return a};View.ViewSwitch.extend(View).mixin(View.TActiveView);
"use strict";View.TabView=function(b,a){View.call(this);var c=this._element.classList;
c.add("TabView");this._strip=null;this._switch=null;if(b!==false){if(!(b instanceof View.TabStrip)){b=new View.TabStrip()
}this.addView(b)}if(a!==false){if(!(a instanceof View.ViewSwitch)){a=new View.ViewSwitch()
}this.addView(a)}};View.TabView.fromTemplate=function(b){var a=new View.TabView(false,false);
ViewTemplate.setupViewFromAttributes(a,b);ViewTemplate.addViewsFromChildren(a,b);
if(a.getStrip()===null){var c=new View.TabStrip();c.setBehavior("auto");a.addView(c)
}if(a.getSwitch()===null){a.addView(new View.TabSwitch())}if(b.getAttribute("behavior")===null){a.setBehavior("auto")
}return a};View.TabView.extend(View,{setStrip:function(a){var b=this._strip;this._strip=a;
return b},getStrip:function(){return this._strip},setSwitch:function(a){var b=this._switch;
this._switch=a;return b},getSwitch:function(){return this._switch},addView:function(b,a){if(b instanceof View.TabStrip){this.setStrip(b)
}else{if(b instanceof View.ViewSwitch){this.setSwitch(b)}else{return false}}return View.prototype.addView.call(this,b,a)
},removeView:function(a){if(a===this._strip){this.setStrip(null)}else{if(a===this._switch){this.setSwitch(null)
}else{return false}}return View.prototype.removeView.call(this,a)}});Unitest("View.TabView()",function(){var a=new View.TabView();
var b=a.getStrip();test(b instanceof View.TabStrip);var c=a.getSwitch();test(c instanceof View.ViewSwitch);
a.removeView(a.getStrip());test(a.getStrip()===null);a.removeView(a.getSwitch());
test(a.getSwitch()===null);a.addView(c);test(a.getSwitch()===c);a.addView(b);test(a.getStrip()===b)
});"use strict";View.Txt=function(a){View.call(this,"span");this._element.classList.add("Txt");
if(a){this.setText(a)}};View.Txt.fromTemplate=function(b){var c=b.getAttribute("text");
var a=new View.Txt();ViewTemplate.setupViewFromAttributes(a,b);if(c===null){a.setText(b.textContent)
}return a};View.Txt.extend(View,{setText:function(a){if(a!==null){a=(typeof R!="undefined"?R.render(a)||a:a)
}return View.prototype.setText.call(this,a)}});Unitest("View.Txt.*",function(){var a=new View.Txt("txt");
test(a instanceof View.Txt);test(a.getElement().textContent=="txt");var b=window.R;
window.R=new Config({str:{asd:"asd"}});test(a.setText("{str.asd}")===a);test(a.getElement().textContent=="asd");
window.R=b;a.setText("qwe");test(a.getElement().textContent=="qwe");test(a.setText(null)===a);
test(a.getElement().textContent=="")});"use strict";View.Img=function(a,b){View.call(this,"img");
this._element.classList.add("Img");if(a){this.setImage(a)}if(b){this.setText(b)}};
View.Img.extend(View,{setImage:function(a){return this._element.src=(typeof R!="undefined"?R.render(a)||a:a)
},setText:function(a){if(a===null){this._element.removeAttribute("title");return null
}else{a=(typeof R!="undefined"?R.render(a)||a:a);this._element.setAttribute("title",a);
return a}}});Unitest("View.Img.*",function(){var c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAIAAAD4cAhVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD8SURBVGhD7ZNBDoJQEEM9iEvvfzPPgD+hMUMVBJyZhqQvXdnPpG/hbbo4FlBjATUWUGMBNRZQYwE1FlBjATVKgef98TN4uo5AgCbuD75f0i1Am44GVwJ9AjTlXHAr0CRAO04H5wIdAjQiBi9W2PO4XIBGvIP6b2oFaPQcdEl0C6DIo1CApo+gSMUCK9D0ERTZlAjQ9BEUBVjgA5o+gqKGcgH8WkayAK0fQVFGpgBNH0FRSZoATZ+DrpIcAdo9B10xLHB0QXwfg7qehQCNOB2cayFfALe6SBbAoUa2/gOHgu/bYYEITfwaPNWxJXAJLKDGAmosoMYCaiygZZpe7U0ia+UfXOwAAAAASUVORK5CYII=";
var a=new View.Img(c,"titl");test(a instanceof View.Img);test(a.getElement().src==c);
test(a.getElement().getAttribute("title")=="titl");var b=window.R;window.R=new Config({str:{asd:"asd"}});
test(a.setText("{str.asd}")==="asd");test(a.getElement().getAttribute("title")=="asd");
window.R=b;a.setText("qwe");test(a.getElement().getAttribute("title")=="qwe");a.setText(null);
test(a.getElement().getAttribute("title")==null);test(a.setImage(c)==c)});"use strict";
View.StockImg=function(a,b){View.call(this,"span");this._element.classList.add("StockImg");
this._lastImage=null;if(a){this.setImage(a)}if(b){this.setText(b)}};View.StockImg.extend(View,{setImage:function(b){var a=this._lastImage;
if(b==a){return this}var c=this._element.classList;if(a!==null){c.remove(a)}this._lastImage=b;
if(b!==null){c.add(b)}return b},setText:function(a){if(a===null){this._element.removeAttribute("title");
return null}else{a=(typeof R!="undefined"?R.render(a)||a:a);this._element.setAttribute("title",a);
return a}}});Unitest("View.StockImg.*",function(){var a=new View.StockImg("stock0","title");
test(a.getElement().getAttribute("title")=="title");test(a.getElement().classList.contains("stock0"));
var b=window.R;window.R=new Config({str:{asd:"asd"}});test(a.setText("{str.asd}")==="asd");
test(a.getElement().getAttribute("title")=="asd");window.R=b;a.setText("qwe");test(a.getElement().getAttribute("title")=="qwe");
a.setText(null);test(a.getElement().getAttribute("title")==null);test(a.setImage("stock1")==="stock1");
test(!a.getElement().classList.contains("stock0"));test(a.getElement().classList.contains("stock1"));
a.setImage("stock2");test(!a.getElement().classList.contains("stock1"));test(a.getElement().classList.contains("stock2"));
a.setImage(null);test(!a.getElement().classList.contains("stock2"))});"use strict";
View.Label=function(a){View.call(this);View.TLabel.call(this);this._element.classList.add("Label");
if(a){ViewTemplate.setupViewFromProperties(this,a)}};View.Label.extend(View).mixin(View.TLabel,ResolveMixins({setText:View.TLabel}));
"use strict";View.Accordion=function(){View.call(this);View.TActiveView.call(this);
this._element.classList.add("Accordion")};View.Accordion.defineStatic({fromTemplate:function(b){var a=ViewTemplate.classFromTemplate(View.Accordion,b);
if(b.getAttribute("behavior")===null){a.setBehavior("auto")}View.TActiveView.fromTemplate(a,b);
return a}});View.Accordion.extend(View).mixin(View.TActiveView);"use strict";View.AccordionItem=function(){View.call(this);
this._element.classList.add("AccordionItem")};View.AccordionItem.extend(View);"use strict";
View.Spinner=function(){View.call(this);this._element.classList.add("Spinner")};View.Spinner.extend(View);
"use stict";function Behavior(){}Behavior.findByName=function(e){if(String.isString(e)&&e){var b=window[e]||Behavior[e];
if(b===undefined){if(e.indexOf(".")>=0){var a=e.split(".");b=window[a[0]];for(var c=1,d=a.length;
c<d&&b!==undefined;++c){b=b[a[c]]}}}return b||null}return null};Behavior.define({detach:function(){}});
"use strict";(function(c){var a=null;function b(){return(a||(a=new EventListener("click",function(e){var f=this.getTarget();
if(f){window.open(this.getUrl(),f)}else{window.location.href=this.getUrl()}},"bubble")))
}function d(e){this._link=e;this._onClick=b().add(e)}d.extend(Behavior,{detach:function(){this._onClick.remove(this._link);
this._onClick=null;this._link=null}});View.Link.prototype.AutoBehavior=d;c.AutoLink=d
})(this.Behavior);"use strict";(function(a){function b(d){var e=d;while(d&&!(d._view instanceof View.Accordion)){if(d.classList.contains("AccordionItem")){if(e.classList.contains("AccordionItemTitle")){return d._view
}else{break}}else{e=d;d=d.parentNode}}return false}function c(d){this._accordion=d;
this._onClick=new EventListener("click",function(e){var f=b(e.target);if(f!==false){d.setActive(d.getActive()!==f&&!f.hasState("disabled")?f:null);
e.preventDefault()}},"bubble").add(d)}c.extend(Behavior,{detach:function(){this._onClick().remove(this._accordion);
this._onClick=null;this._accordion=null}});View.Accordion.prototype.AutoBehavior=c;
a.AutoAccordion=c})(this.Behavior);Unitest("AutoAccordion()",function(){var a=new View.Accordion();
a.setBehavior("auto");var c=new View.AccordionItem();var e=new View();e.setClass("AccordionItemTitle");
c.addView(e);c.addView(new View());var b=new View.AccordionItem();var d=new View();
d.setClass("AccordionItemTitle");b.addView(d);b.addView(new View());a.addView(c);
a.addView(b);document.body.appendChild(a.getElement());test(a.getActive()===null);
e.getElement().click();test(a.getActive()===c);d.getElement().click();test(a.getActive()===b);
document.body.removeChild(a.getElement())});"use strict";(function(c){function e(g){var f=-1;
while(g){g=g.previousSibling;++f}return f}var a=null;function b(){return(a||(a=new EventListener("ActiveView.Activated",function(h){var g=this;
if(g&&h.detail.Parent===g.getStrip()){var f=g.getSwitch();if(f){var i=e(h.target);
var j=f.getElement().children[i];var g=j?j._view:null;f.setActive(g)}}},"bubble")))
}function d(f){this._tabview=f;this._onActivated=b().add(f)}d.extend(Behavior,{detach:function(){this._onActivated.remove(this._tabview);
this._onActivated=null;this._tabview=null}});View.TabView.prototype.AutoBehavior=d;
c.AutoTabView=d})(this.Behavior);Unitest("AutoTabView()",function(){var a=new View.TabView();
a.setBehavior("auto");var c=new View.Tab();var b=new View.Tab();var e=new View();
var d=new View();a.getStrip().addView(c);a.getStrip().addView(b);a.getStrip().setBehavior("auto");
a.getSwitch().addView(e);a.getSwitch().addView(d);document.body.appendChild(a.getElement());
test(a.getStrip().getActive()===null);test(a.getSwitch().getActive()===null);c.getElement().click();
test(a.getStrip().getActive()===c);test(a.getSwitch().getActive()===e);b.getElement().click();
test(a.getStrip().getActive()===b);test(a.getSwitch().getActive()===d);document.body.removeChild(a.getElement())
});"use strict";(function(a){function b(f,d){var e=d;var d=d.parentNode;while(d){if(d._view===f){if(e.classList.contains("Tab")){return e._view
}else{break}}else{e=d;d=d.parentNode}}return false}function c(d){this._strip=d;this._onClick=new EventListener("click",function(e){var f=b(d,e.target);
if(f&&f!==d.getActive()&&!f.hasState("disabled")){d.setActive(f);e.preventDefault()
}},"bubble").add(d)}c.extend(Behavior,{detach:function(){this._onClick.remove(this._strip);
this._onClick=null;this._strip=null}});View.TabStrip.prototype.AutoBehavior=c;a.AutoTabStrip=c
})(this.Behavior);Unitest("AutoTabStrip()",function(){var a=new View.TabStrip();a.setBehavior("auto");
var c=new View.Tab();var b=new View.Tab();a.addView(c);a.addView(b);document.body.appendChild(a.getElement());
test(a.getActive()===null);c.getElement().click();test(a.getActive()===c);b.getElement().click();
test(a.getActive()===b);document.body.removeChild(a.getElement())});"use strict";
Behavior.auto=function(a){if(a.AutoBehavior instanceof Function){return new a.AutoBehavior(a)
}else{return null}};"use strict";function Layout(a){this._view=a;a.getElement().classList.add("Layout")
}Layout.findByName=function(a){if(typeof a=="string"||a instanceof String){return Layout[a]||null
}return null};Layout.define({detach:function(){this._view.getElement().classList.remove("Layout");
this._view=null}});Unitest("Layout()/Layout.detach()",function(){var a=new View();
var b=new Layout(a);test(a.getElement().classList.contains("Layout"));b.detach();
test(!a.getElement().classList.contains("Layout"))});"use strict";Layout.Horizontal=function(a){Layout.call(this,a);
a.getElement().classList.add("Horizontal")};Layout.Horizontal.extend(Layout,{detach:function(){this._view.getElement().classList.remove("Horizontal");
Layout.prototype.detach.call(this)}});Layout.HorizontalFlex=function(a){Layout.Horizontal.call(this,a);
a.getElement().classList.add("flex")};Layout.HorizontalFlex.extend(Layout.Horizontal,{detach:function(){this._view.getElement().classList.remove("flex");
Layout.Horizontal.prototype.detach.call(this)}});Unitest("Layout.Horizontal()/Layout.Horizontal.detach()",function(){var a=new View();
var b=new Layout.Horizontal(a);test(a.getElement().classList.contains("Horizontal"));
b.detach();test(!a.getElement().classList.contains("Horizontal"))});"use strict";
Layout.Vertical=function(a){Layout.call(this,a);a.getElement().classList.add("Vertical")
};Layout.Vertical.extend(Layout,{detach:function(){this._view.getElement().classList.remove("Vertical");
Layout.prototype.detach.call(this)}});Layout.VerticalFlex=function(a){Layout.Vertical.call(this,a);
a.getElement().classList.add("flex")};Layout.VerticalFlex.extend(Layout.Vertical,{detach:function(){this._view.getElement().classList.remove("flex");
Layout.Vertical.prototype.detach.call(this)}});Unitest("Layout.Vertical()/Layout.Vertical.detach()",function(){var a=new View();
var b=new Layout.Vertical(a);test(a.getElement().classList.contains("Vertical"));
b.detach();test(!a.getElement().classList.contains("Vertical"))});"use strict";(function(e){function d(m,n){var o=this;
var k=function(){};k.prototype=n||this;var l=new k;if(n){l.parent=n}if(m){l.merge(m)
}return l}var h={};var b=/[\?\.\+\[\]\(\)\{\}\$\^\\\|]/g;var a=/\*\*/g;var j=/\*(?!\?)/g;
var f=/{([\s\S]+?)}/g;function i(m,p,o,l){for(var k in m){var n=m[k];if(Object.isObject(n)){i(n,p,o,l?l+k+".":k+".")
}p(o,l?l+k:k,n)}if(l===undefined&&m.parent){o.config=m.parent;i(m.parent,p,o)}}function g(o,l,n){var k=l.match(o.regex);
if(k&&o.ret[l]===undefined){o.ret[l]=new d.Match(o.config,l,n,k.slice(0))}}function c(k){return !(k instanceof Object)
}d.defineStatic({Match:function(l,k,n,m){this.config=l;this.name=k;this.value=n;this.matches=m
}});d.define({match:function(l){var k=h[l];if(k===undefined){l="^"+l.replace(b,"\\$&").replace(a,"(.*?)").replace(j,"([^.]*?)")+"$";
k=new RegExp(l);h[l]=k}var m={regex:k,ret:{},config:this};i(this,g,m);return m.ret
},get:function(r){if(r.indexOf("*")>0){var k=this.match(r);for(var m in k){var q=k[m].value;
arguments[0]=q;k[m]=this.render.apply(this,arguments)}return k.filter(c)}else{var p;
if(r.indexOf(".")>0){var o=r.split(".");p=this;for(var l=0,n=o.length;p!==undefined&&l<n;
++l){p=p[o[l]]}}else{p=this[r]}if(p===undefined&&this.parent){return this.parent.get.apply(this.parent,arguments)
}arguments[0]=p;return this.render.apply(this,arguments)}},render:function(m){if(m instanceof Function){return m.apply(Array.prototype.slice.call(arguments,1))
}else{if(String.isString(m)&&m.indexOf("{")>=0){var l=this;var k=arguments;return m.replace(f,function(o,r){var q=parseInt(r);
var p=l.get(r)||(q>0&&k.length>q?k[q]:undefined);return p!==undefined?l.render(p):o
})}else{return m}}}});e.Config=d})(this);Unitest("Config.*",function(){var c=new Config({a:{b:2}});
var b=new Config({a:1},c);test(b.get("a.b")==2);var c=new Config({a:{b:2}});var b=new Config({a:{c:3}},c);
testeqdeep(b.get("a.*"),{"a.b":2,"a.c":3});var c=new Config({a:1,b:2});test(c instanceof Config);
test(c.a==1);var b=new Config({b:3,c:4},c);test(b instanceof Config);test(b.a==1);
test(b.b==3);test(b.parent.b==2);var c=new Config({a:1,b:2});test(c.get("a")===1);
var b=new Config({a:2,b:1},c);test(b.get("a")===2);var b=new Config({c:"ccc",d:"{a} {b} {c}"},c);
test(b.get("a")===1);test(b.get("c")=="ccc");test(b.get("d")=="1 2 ccc");b.e="ee";
test(b.get("e")=="ee");test(c.get("e")===undefined);var c=new Config({a:{b:{c:1,d:"{1}"},bb:2}});
test(c.a.b.c==1);test(c.get("a.b.c")==1);test(c.get("a.b.d",2)==2);test(c.get("a.b.d",function(){return 3
})==3);var a=c.match("a.*");test(Object.keys(a).length==2);test(a["a.b"].name=="a.b");
test(a["a.b"].value.c==1);test(a["a.bb"].name=="a.bb");test(a["a.bb"].value==2);var a=c.match("a.**");
test(Object.keys(a).length==4);test(a["a.b.d"].name=="a.b.d");test(a["a.b.d"].value=="{1}");
test(a["a.b.d"].matches[1]=="b.d");var c=new Config({bb00:"11",aa00:"00",aabb:{ccdd:"{1} {aabb.eeff}",eeff:function(){return"--"
}}});test(c.get("aabb.ccdd")=="{1} --");test(c.get("aabb.ccdd",1)=="1 --");test(c.get("aa*0")["aa00"]=="00");
test(Object.keys(c.get("aa*0")).length==1);test(Object.keys(c.get("aa**")).length==3);
test(c.get("aa**")["aabb.ccdd"]=="{1} --");test(c.get("aa**",2)["aabb.ccdd"]=="2 --")
});"use strict";(function(e){if(window.UNITESTS!==false){var h=XMLHttpRequest}function c(){var n=this._request;
var m=true;var o=null;var l=null;if(n.status<200||n.status>=400){l=n.status;m=false
}else{var k=this._options.responseType;if(k!==undefined&&k!=n.getResponseHeader("Content-Type")){l="UNEXPECTED_RESPONSE_TYPE";
m=false}}var r;if(m){var q=this._options.forceResponseEncoding;if(q=="json"||n.getResponseHeader("Content-Type")=="application/json"){try{o=(n.responseType=="json"?n.response:JSON.parse(n.responseText))
}catch(p){if(q){l="UNEXPECTED_RESPONSE_TYPE";m=false}else{o=n.response||n.responseText
}}}else{o=n.response||n.responseText}}if(m){r={Success:true,Data:o,Cancelled:false,Request:n};
if(this._callback instanceof Function){this._callback(r)}this.dispatchEvent(new CustomEvent("Request.Success",{bubbles:false,cancelable:false,detail:{Request:n}}));
this.resolve()}else{r={Success:false,Error:l,Cancelled:false,Request:n};if(this._callback instanceof Function){this._callback(r)
}this.dispatchEvent(new CustomEvent("Request.Error",{bubbles:false,cancelable:false,detail:{Request:n}}));
this.reject()}this.dispatchEvent(new CustomEvent("Request.Finished",{bubbles:false,cancelable:false,detail:r}))
}function d(){var l=this._request;var k=null;if(l.status<200||l.status>=400){k=l.status
}else{k=l.statusText||k}var m={Success:false,Error:k,Cancelled:false,Request:l};if(this._callback instanceof Function){this._callback(m)
}this.dispatchEvent(new CustomEvent("Request.Error",{bubbles:false,cancelable:false,detail:{Request:l}}));
this.reject();this.dispatchEvent(new CustomEvent("Request.Finished",{bubbles:false,cancelable:false,detail:m}))
}function a(){var l=this._request;var k=null;if(l.status<200||l.status>=400){k=l.status
}else{k=l.statusText||k}var m={Success:false,Error:k,Cancelled:true,Request:l};if(this._callback instanceof Function){this._callback(m)
}this.dispatchEvent(new CustomEvent("Request.Cancelled",{bubbles:false,cancelable:false,detail:{Request:l}}));
Task.prototype.cancel.call(this);this.dispatchEvent(new CustomEvent("Request.Finished",{bubbles:false,cancelable:false,detail:m}))
}function i(){var k=this._request;if(k.readyState===k.HEADERS_RECEIVED){this.dispatchEvent(new CustomEvent("Request.Headers",{bubbles:false,cancelable:false,detail:{Request:k}}))
}}function j(l,p){Task.call(this);if(typeof l=="string"||l instanceof String){l={}.merge(j.DefaultOptions).merge({url:l})
}else{l={}.merge(j.DefaultOptions).merge(l)}if(window.UNITESTS!==false){var n=new h()
}else{var n=new XMLHttpRequest}this._callback=p;this._request=n;n.onreadystatechange=i.bind(this);
n.addEventListener("load",this._onLoad=c.bind(this));n.addEventListener("error",this._onError=d.bind(this));
n.addEventListener("abort",this._onAbort=a.bind(this));var o={};var k=l.dataEncoding;
if(k=="url"){o["Content-Type"]="application/x-www-form-urlencoded"}else{if(k=="json"){o["Content-Type"]="application/json"
}}if(l.headers instanceof Object){o.merge(l.headers)}this._options=l;n.open(l.method,l.url);
this._headers=o;for(var m in o){n.setRequestHeader(m,o[m])}}j.DefaultOptions={method:"get",dataEncoding:"url"};
function f(k){if(typeof k=="number"||k instanceof Number){k=String(k)}return encodeURIComponent(k)
}function b(q,p){var l="";for(var m=0,n=q.length;m<n;++m){var k=p+"["+m+"]";var o=q[m];
if(o instanceof Array){o=b(o,k);l+=(l.length>0?"&":"")+o}else{if(o instanceof Object){o=g(o,k);
l+=(l.length>0?"&":"")+o}else{o=f(o);l+=(l.length>0?"&":"")+k+"="+o}}}return l}function g(m,p){var l="";
for(var n in m){var k=p?p+"["+encodeURIComponent(n)+"]":encodeURIComponent(n);var o=m[n];
if(o instanceof Array){o=b(o,k);l+=(l.length>0?"&":"")+o}else{if(o instanceof Object){o=g(o,k);
l+=(l.length>0?"&":"")+o}else{o=f(o);l+=(l.length>0?"&":"")+k+"="+o}}}return l}j.urlEncode=function(k){if(!(k instanceof Object)){return null
}return g(k)};j.extend(Task,{send:function(m){if(m instanceof Object){var k=this._options.dataEncoding;
if(k=="url"){m=j.urlEncode(m)}else{if(k=="json"){m=JSON.stringify(m)}}}var l=this._request;
if(l.readyState===l.OPENED){this.dispatchEvent(new CustomEvent("Request.Started",{bubbles:false,cancelable:false,detail:{Request:l,data:m}}));
this.start();if(l.readyState===l.OPENED){l.send(m)}}return this},abort:function(){var k=this._request;
k.removeEventListener("load",this._onLoad);k.abort();return this},cancel:function(){return this.abort()
},addEventListener:function(k,l){this._request.addEventListener(k,l);return this},removeEventListener:function(k,l){this._request.removeEventListener(k,l);
return this},dispatchEvent:function(k){this._request.dispatchEvent(k);return this
}});Unitest("HttpRequest.urlEncode()",function(){test(j.urlEncode(5)===null);test(j.urlEncode({a:1,b:2})==="a=1&b=2");
test(j.urlEncode({c:"asd",d:"q&a"})==="c=asd&d="+encodeURIComponent("q&a"));test(j.urlEncode({a:{aa:1,bb:2},b:2})==="a[aa]=1&a[bb]=2&b=2");
test(j.urlEncode({a:[1,2],b:2})==="a[0]=1&a[1]=2&b=2");test(j.urlEncode({a:[{aa:1},{bb:[{cc:{dd:2}}]}],b:2})==="a[0][aa]=1&a[1][bb][0][cc][dd]=2&b=2")
});Unitest("HttpRequest()",function(){h=function(){return{send:function(p){test(p=="a=1&b=2")
},open:function(q,p){test(q=="get"&&p=="asdf")},setRequestHeader:function(p,q){test(p=="Content-Type"&&q=="application/x-www-form-urlencoded")
},addEventListener:function(){},dispatchEvent:function(){}}};new j("asdf").send({a:1,b:2});
h=function(){return{send:function(p){test(p=='{"a":1,"b":2}')},open:function(q,p){test(q=="get"&&p=="asdf")
},setRequestHeader:function(p,q){test((p=="Content-Type"&&q=="application/json")||(p=="Content-Type2"&&q=="funny"))
},addEventListener:function(){},dispatchEvent:function(){}}};new j({url:"asdf",dataEncoding:"json",headers:{"Content-Type2":"funny"}}).send({a:1,b:2});
h=function(){return{send:function(p){test(p=='{"a":1,"b":2}')},open:function(q,p){test(q=="get"&&p=="asdf")
},setRequestHeader:function(p,q){test((p=="Content-Type"&&q=="funny"))},addEventListener:function(){},dispatchEvent:function(){}}
};new j({url:"asdf",dataEncoding:"json",headers:{"Content-Type":"funny"}}).send({a:1,b:2});
h=XMLHttpRequest;var l=[];var k=[];var n=[];var m=[];var o=[];new j(location.href,function(p){test(l[1]);
test(p.Success===true);test(p.Request.status===200);test(p.Request.getResponseHeader("Content-Type")=="text/html")
}).addEventListener("Request.Started",function(){l[1]=true}).addEventListener("Request.Error",function(){k[1]=true
}).addEventListener("Request.Success",function(){n[1]=true}).addEventListener("Request.Cancelled",function(){m[1]=true
}).addEventListener("Request.Finished",function(){o[1]=true;test(l[1]&&n[1]&&!m[1]&&!k[1])
}).send();new j({url:location.href,responseType:"application/bson"},function(p){test(l[2]);
test(p.Success===false);test(p.Cancelled===false);test(p.Error==="UNEXPECTED_RESPONSE_TYPE")
}).addEventListener("Request.Started",function(){l[2]=true}).addEventListener("Request.Error",function(){k[2]=true
}).addEventListener("Request.Success",function(){n[2]=true}).addEventListener("Request.Cancelled",function(){m[2]=true
}).addEventListener("Request.Finished",function(){o[2]=true;test(l[2]&&!n[2]&&!m[2]&&k[2])
}).send();new j(location.href,function(p){test(p.Success===false);test(p.Cancelled===true)
}).addEventListener("Request.Headers",function(p){p.detail.Request.abort()}).addEventListener("Request.Cancelled",function(){m[3]=true
}).addEventListener("Request.Finished",function(){o[3]=true;test(m[3])}).send();setTimeout(function(){test(o[1]);
test(o[2]);test(o[3])},2000)});e.HttpRequest=j})(this);"use strict";(function(a){function e(g){this._request=null;
this.dispatchEvent(new CustomEvent("RequestGroup.Finished",{bubbles:false,cancelable:false}))
}function b(g,h){TEventDispatcher.call(this);this._name=g;this._policy=h||"ignore";
this._request=null;this._onRequestFinished=new EventListener("Request.Finished",e.bind(this))
}b.define({addRequest:function(g,i){if(this._request){if(this._policy=="abort"){this._onRequestFinished.remove(this._request);
this._request.abort()}else{if(this._policy=="ignore"){return false}}}else{this.dispatchEvent(new CustomEvent("RequestGroup.Started",{bubbles:false,cancelable:false}))
}var h=new HttpRequest(g,i);this._request=h;this._onRequestFinished.add(h);return h
},abort:function(){if(this._request){this._request.abort();return true}else{return false
}}}).mixin(TEventDispatcher,TEventDispatcher2);function d(){if(++this._activeRequests==1){this.dispatchEvent(new CustomEvent("RequestManager.Started",{bubbles:false,cancelable:false}))
}}function f(){if(--this._activeRequests==0){this.dispatchEvent(new CustomEvent("RequestManager.Finished",{bubbles:false,cancelable:false}))
}}function c(){TEventDispatcher.call(this);this._groups=[];this._activeRequests=0;
this._onRequestGroupStarted=null;this._onRequestGroupFinished=null;this._onRequestGroupStarted=new EventListener("RequestGroup.Started",d.bind(this));
this._onRequestGroupFinished=new EventListener("RequestGroup.Finished",f.bind(this))
}c.define({defineGroup:function(g,i){var h=new b(g,i);this._onRequestGroupStarted.add(h);
this._onRequestGroupFinished.add(h);this._groups[g]=h;return this},addRequest:function(h,g,i){return this._groups[h].addRequest(g,i)
},abortGroup:function(g){return this._groups[g].abort()}}).mixin(TEventDispatcher,TEventDispatcher2);
a.RequestManager=c})(this);Unitest("RequestManager.*",function(){var b=0;var g=0;
var f=new RequestManager();f.defineGroup("1","abort");f.addEventListener("RequestManager.Started",function(){++b
});f.addEventListener("RequestManager.Finished",function(){++g;test(g==1)});var e=f.addRequest("1",location.href,function(h){test(h.Cancelled)
});e.addEventListener("Request.Started",function(i){var h=f.addRequest("1",location.href);
test(b==1);test(g==0);h.send()});e.send();setTimeout(function(){test(b==1);test(g==1)
},2000);var d=0;var c=0;f=new RequestManager();f.addEventListener("RequestManager.Started",function(){++d;
test(d==1)});f.addEventListener("RequestManager.Finished",function(){++c;test(c==1)
});f.defineGroup("2","ignore");e=f.addRequest("2",location.href);test(e instanceof HttpRequest);
var a=f.addRequest("2",location.href);test(a===false);e.send();setTimeout(function(){test(d==1);
test(c==1)},2000)});"use strict";var R=new Config();function App(b){var a=this;this._onReady=new EventListener("DOMContentLoaded",function(){if(b instanceof Function){b(a)
}},"bubble").add(document)}App.include=function(c,l,g){if(!(c instanceof Array)){c=[c]
}var j=0;var n=c.length;if(l instanceof Function){g=l;l=null}function e(){if(++j==n&&g instanceof Function){g.call(this,j==n)
}}var m=document.getElementsByTagName("head")[0];for(var h=0,d=c.length;h<d;++h){var k=c[h];
var a=l||k.splitLast(".").right;if(a=="js"){var b=document.createElement("script");
b.type="text/javascript";b.src=k;b.addEventListener("load",e);m.appendChild(b)}else{if(a=="css"){var b=document.createElement("link");
b.rel="stylesheet";b.href=k;b.addEventListener("load",e);m.appendChild(b)}}}};"use strict";
var DocviewjsTheme={DeviceSizes:{"device-large":[1200,-1],"device-desktop":[992,1999],"device-tablet":[768,991],"device-phone":[-1,767]}};