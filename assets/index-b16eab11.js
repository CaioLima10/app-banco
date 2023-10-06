function e0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function t0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rc={exports:{}},Si={},Lc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=Symbol.for("react.element"),n0=Symbol.for("react.portal"),r0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),s0=Symbol.for("react.forward_ref"),u0=Symbol.for("react.suspense"),c0=Symbol.for("react.memo"),d0=Symbol.for("react.lazy"),Gs=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var Dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Bc={};function qn(e,t,n){this.props=e,this.context=t,this.refs=Bc,this.updater=n||Dc}qn.prototype.isReactComponent={};qn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _c(){}_c.prototype=qn.prototype;function Ra(e,t,n){this.props=e,this.context=t,this.refs=Bc,this.updater=n||Dc}var La=Ra.prototype=new _c;La.constructor=Ra;Mc(La,qn.prototype);La.isPureReactComponent=!0;var Js=Array.isArray,Uc=Object.prototype.hasOwnProperty,Da={current:null},Vc={key:!0,ref:!0,__self:!0,__source:!0};function $c(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Uc.call(t,r)&&!Vc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Zr,type:e,key:i,ref:l,props:o,_owner:Da.current}}function f0(e,t){return{$$typeof:Zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ma(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zr}function h0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xs=/\/+/g;function Yi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?h0(""+e.key):t.toString(36)}function No(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Zr:case n0:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Yi(l,0):r,Js(o)?(n="",e!=null&&(n=e.replace(Xs,"$&/")+"/"),No(o,t,n,"",function(c){return c})):o!=null&&(Ma(o)&&(o=f0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Xs,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Js(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Yi(i,a);l+=No(i,t,n,u,o)}else if(u=p0(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Yi(i,a++),l+=No(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function lo(e,t,n){if(e==null)return e;var r=[],o=0;return No(e,r,"","",function(i){return t.call(n,i,o++)}),r}function m0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Po={transition:null},g0={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Po,ReactCurrentOwner:Da};M.Children={map:lo,forEach:function(e,t,n){lo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lo(e,function(){t++}),t},toArray:function(e){return lo(e,function(t){return t})||[]},only:function(e){if(!Ma(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=qn;M.Fragment=r0;M.Profiler=i0;M.PureComponent=Ra;M.StrictMode=o0;M.Suspense=u0;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=g0;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Da.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Uc.call(t,u)&&!Vc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Zr,type:e.type,key:o,ref:i,props:r,_owner:l}};M.createContext=function(e){return e={$$typeof:a0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l0,_context:e},e.Consumer=e};M.createElement=$c;M.createFactory=function(e){var t=$c.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:s0,render:e}};M.isValidElement=Ma;M.lazy=function(e){return{$$typeof:d0,_payload:{_status:-1,_result:e},_init:m0}};M.memo=function(e,t){return{$$typeof:c0,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=Po.transition;Po.transition={};try{e()}finally{Po.transition=t}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(e,t){return Pe.current.useCallback(e,t)};M.useContext=function(e){return Pe.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};M.useEffect=function(e,t){return Pe.current.useEffect(e,t)};M.useId=function(){return Pe.current.useId()};M.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Pe.current.useMemo(e,t)};M.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};M.useRef=function(e){return Pe.current.useRef(e)};M.useState=function(e){return Pe.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return Pe.current.useTransition()};M.version="18.2.0";Lc.exports=M;var v=Lc.exports;const pe=t0(v),x0=e0({__proto__:null,default:pe},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=v,y0=Symbol.for("react.element"),w0=Symbol.for("react.fragment"),S0=Object.prototype.hasOwnProperty,C0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k0={key:!0,ref:!0,__self:!0,__source:!0};function Hc(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)S0.call(t,r)&&!k0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:y0,type:e,key:i,ref:l,props:o,_owner:C0.current}}Si.Fragment=w0;Si.jsx=Hc;Si.jsxs=Hc;Rc.exports=Si;var s=Rc.exports,Fl={},Wc={exports:{}},We={},Qc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(F,b){var O=F.length;F.push(b);e:for(;0<O;){var $=O-1>>>1,W=F[$];if(0<o(W,b))F[$]=b,F[O]=W,O=$;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var b=F[0],O=F.pop();if(O!==b){F[0]=O;e:for(var $=0,W=F.length,_e=W>>>1;$<_e;){var ce=2*($+1)-1,Oe=F[ce],ne=ce+1,we=F[ne];if(0>o(Oe,O))ne<W&&0>o(we,Oe)?(F[$]=we,F[ne]=O,$=ne):(F[$]=Oe,F[ce]=O,$=ce);else if(ne<W&&0>o(we,O))F[$]=we,F[ne]=O,$=ne;else break e}}return b}function o(F,b){var O=F.sortIndex-b.sortIndex;return O!==0?O:F.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],h=1,m=null,g=3,y=!1,S=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(F){for(var b=n(c);b!==null;){if(b.callback===null)r(c);else if(b.startTime<=F)r(c),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(c)}}function w(F){if(C=!1,p(F),!S)if(n(u)!==null)S=!0,ue(k);else{var b=n(c);b!==null&&X(w,b.startTime-F)}}function k(F,b){S=!1,C&&(C=!1,f(N),N=-1),y=!0;var O=g;try{for(p(b),m=n(u);m!==null&&(!(m.expirationTime>b)||F&&!se());){var $=m.callback;if(typeof $=="function"){m.callback=null,g=m.priorityLevel;var W=$(m.expirationTime<=b);b=e.unstable_now(),typeof W=="function"?m.callback=W:m===n(u)&&r(u),p(b)}else r(u);m=n(u)}if(m!==null)var _e=!0;else{var ce=n(c);ce!==null&&X(w,ce.startTime-b),_e=!1}return _e}finally{m=null,g=O,y=!1}}var z=!1,x=null,N=-1,R=5,I=-1;function se(){return!(e.unstable_now()-I<R)}function Be(){if(x!==null){var F=e.unstable_now();I=F;var b=!0;try{b=x(!0,F)}finally{b?ze():(z=!1,x=null)}}else z=!1}var ze;if(typeof d=="function")ze=function(){d(Be)};else if(typeof MessageChannel<"u"){var Ie=new MessageChannel,be=Ie.port2;Ie.port1.onmessage=Be,ze=function(){be.postMessage(null)}}else ze=function(){P(Be,0)};function ue(F){x=F,z||(z=!0,ze())}function X(F,b){N=P(function(){F(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){S||y||(S=!0,ue(k))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(F){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var O=g;g=b;try{return F()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,b){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var O=g;g=F;try{return b()}finally{g=O}},e.unstable_scheduleCallback=function(F,b,O){var $=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?$+O:$):O=$,F){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=O+W,F={id:h++,callback:b,priorityLevel:F,startTime:O,expirationTime:W,sortIndex:-1},O>$?(F.sortIndex=O,t(c,F),n(u)===null&&F===n(c)&&(C?(f(N),N=-1):C=!0,X(w,O-$))):(F.sortIndex=W,t(u,F),S||y||(S=!0,ue(k))),F},e.unstable_shouldYield=se,e.unstable_wrapCallback=function(F){var b=g;return function(){var O=g;g=b;try{return F.apply(this,arguments)}finally{g=O}}}})(Kc);Qc.exports=Kc;var j0=Qc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yc=v,He=j0;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gc=new Set,br={};function fn(e,t){_n(e,t),_n(e+"Capture",t)}function _n(e,t){for(br[e]=t,e=0;e<t.length;e++)Gc.add(t[e])}var St=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nl=Object.prototype.hasOwnProperty,E0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zs={},qs={};function z0(e){return Nl.call(qs,e)?!0:Nl.call(Zs,e)?!1:E0.test(e)?qs[e]=!0:(Zs[e]=!0,!1)}function F0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function N0(e,t,n,r){if(t===null||typeof t>"u"||F0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ba=/[\-:]([a-z])/g;function _a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ba,_a);ye[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ba,_a);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ba,_a);ye[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ua(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(N0(t,n,o,r)&&(n=null),r||o===null?z0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),Va=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),Jc=Symbol.for("react.provider"),Xc=Symbol.for("react.context"),$a=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),Il=Symbol.for("react.suspense_list"),Ha=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Zc=Symbol.for("react.offscreen"),eu=Symbol.iterator;function ar(e){return e===null||typeof e!="object"?null:(e=eu&&e[eu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Gi;function xr(e){if(Gi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Gi=t&&t[1]||""}return`
`+Gi+e}var Ji=!1;function Xi(e,t){if(!e||Ji)return"";Ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function P0(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=Xi(e.type,!1),e;case 11:return e=Xi(e.type.render,!1),e;case 1:return e=Xi(e.type,!0),e;default:return""}}function bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case Sn:return"Portal";case Pl:return"Profiler";case Va:return"StrictMode";case Al:return"Suspense";case Il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xc:return(e.displayName||"Context")+".Consumer";case Jc:return(e._context.displayName||"Context")+".Provider";case $a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ha:return t=e.displayName||null,t!==null?t:bl(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return bl(e(t))}catch{}}return null}function A0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bl(t);case 8:return t===Va?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function I0(e){var t=qc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function so(e){e._valueTracker||(e._valueTracker=I0(e))}function ed(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function tu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function td(e,t){t=t.checked,t!=null&&Ua(e,"checked",t,!1)}function Tl(e,t){td(e,t);var n=Qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Rl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Rl(e,t.type,Qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Rl(e,t,n){(t!=="number"||Ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vr=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ru(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(vr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Qt(n)}}function nd(e,t){var n=Qt(t.value),r=Qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ou(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Or(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b0=["Webkit","ms","Moz","O"];Object.keys(Cr).forEach(function(e){b0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cr[t]=Cr[e]})});function id(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cr.hasOwnProperty(e)&&Cr[e]?(""+t).trim():t+"px"}function ld(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=id(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var O0=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ml(e,t){if(t){if(O0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _l=null;function Wa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ul=null,Rn=null,Ln=null;function iu(e){if(e=to(e)){if(typeof Ul!="function")throw Error(E(280));var t=e.stateNode;t&&(t=zi(t),Ul(e.stateNode,e.type,t))}}function ad(e){Rn?Ln?Ln.push(e):Ln=[e]:Rn=e}function sd(){if(Rn){var e=Rn,t=Ln;if(Ln=Rn=null,iu(e),t)for(e=0;e<t.length;e++)iu(t[e])}}function ud(e,t){return e(t)}function cd(){}var Zi=!1;function dd(e,t,n){if(Zi)return e(t,n);Zi=!0;try{return ud(e,t,n)}finally{Zi=!1,(Rn!==null||Ln!==null)&&(cd(),sd())}}function Tr(e,t){var n=e.stateNode;if(n===null)return null;var r=zi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Vl=!1;if(St)try{var sr={};Object.defineProperty(sr,"passive",{get:function(){Vl=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Vl=!1}function T0(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var kr=!1,Wo=null,Qo=!1,$l=null,R0={onError:function(e){kr=!0,Wo=e}};function L0(e,t,n,r,o,i,l,a,u){kr=!1,Wo=null,T0.apply(R0,arguments)}function D0(e,t,n,r,o,i,l,a,u){if(L0.apply(this,arguments),kr){if(kr){var c=Wo;kr=!1,Wo=null}else throw Error(E(198));Qo||(Qo=!0,$l=c)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lu(e){if(hn(e)!==e)throw Error(E(188))}function M0(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return lu(o),e;if(i===r)return lu(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function fd(e){return e=M0(e),e!==null?hd(e):null}function hd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hd(e);if(t!==null)return t;e=e.sibling}return null}var md=He.unstable_scheduleCallback,au=He.unstable_cancelCallback,B0=He.unstable_shouldYield,_0=He.unstable_requestPaint,oe=He.unstable_now,U0=He.unstable_getCurrentPriorityLevel,Qa=He.unstable_ImmediatePriority,gd=He.unstable_UserBlockingPriority,Ko=He.unstable_NormalPriority,V0=He.unstable_LowPriority,xd=He.unstable_IdlePriority,Ci=null,pt=null;function $0(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(Ci,e,void 0,(e.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Q0,H0=Math.log,W0=Math.LN2;function Q0(e){return e>>>=0,e===0?32:31-(H0(e)/W0|0)|0}var co=64,po=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=yr(a):(i&=l,i!==0&&(r=yr(i)))}else l=n&~o,l!==0?r=yr(l):i!==0&&(r=yr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ot(t),o=1<<n,r|=e[n],t&=~o;return r}function K0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ot(i),a=1<<l,u=o[l];u===-1?(!(a&n)||a&r)&&(o[l]=K0(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vd(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function qi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ot(t),e[t]=n}function G0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ot(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var Q=0;function yd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wd,Ya,Sd,Cd,kd,Wl=!1,fo=[],Rt=null,Lt=null,Dt=null,Rr=new Map,Lr=new Map,At=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function su(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Dt=null;break;case"pointerover":case"pointerout":Rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function ur(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=to(t),t!==null&&Ya(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function X0(e,t,n,r,o){switch(t){case"focusin":return Rt=ur(Rt,e,t,n,r,o),!0;case"dragenter":return Lt=ur(Lt,e,t,n,r,o),!0;case"mouseover":return Dt=ur(Dt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Rr.set(i,ur(Rr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Lr.set(i,ur(Lr.get(i)||null,e,t,n,r,o)),!0}return!1}function jd(e){var t=en(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=pd(n),t!==null){e.blockedOn=t,kd(e.priority,function(){Sd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_l=r,n.target.dispatchEvent(r),_l=null}else return t=to(n),t!==null&&Ya(t),e.blockedOn=n,!1;t.shift()}return!0}function uu(e,t,n){Ao(e)&&n.delete(t)}function Z0(){Wl=!1,Rt!==null&&Ao(Rt)&&(Rt=null),Lt!==null&&Ao(Lt)&&(Lt=null),Dt!==null&&Ao(Dt)&&(Dt=null),Rr.forEach(uu),Lr.forEach(uu)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wl||(Wl=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Z0)))}function Dr(e){function t(o){return cr(o,e)}if(0<fo.length){cr(fo[0],e);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&cr(Rt,e),Lt!==null&&cr(Lt,e),Dt!==null&&cr(Dt,e),Rr.forEach(t),Lr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)jd(n),n.blockedOn===null&&At.shift()}var Dn=Et.ReactCurrentBatchConfig,Go=!0;function q0(e,t,n,r){var o=Q,i=Dn.transition;Dn.transition=null;try{Q=1,Ga(e,t,n,r)}finally{Q=o,Dn.transition=i}}function e1(e,t,n,r){var o=Q,i=Dn.transition;Dn.transition=null;try{Q=4,Ga(e,t,n,r)}finally{Q=o,Dn.transition=i}}function Ga(e,t,n,r){if(Go){var o=Ql(e,t,n,r);if(o===null)ul(e,t,r,Jo,n),su(e,r);else if(X0(o,e,t,n,r))r.stopPropagation();else if(su(e,r),t&4&&-1<J0.indexOf(e)){for(;o!==null;){var i=to(o);if(i!==null&&wd(i),i=Ql(e,t,n,r),i===null&&ul(e,t,r,Jo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ul(e,t,r,null,n)}}var Jo=null;function Ql(e,t,n,r){if(Jo=null,e=Wa(r),e=en(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jo=e,null}function Ed(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U0()){case Qa:return 1;case gd:return 4;case Ko:case V0:return 16;case xd:return 536870912;default:return 16}default:return 16}}var bt=null,Ja=null,Io=null;function zd(){if(Io)return Io;var e,t=Ja,n=t.length,r,o="value"in bt?bt.value:bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Io=o.slice(e,1<r?1-r:void 0)}function bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function cu(){return!1}function Qe(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ho:cu,this.isPropagationStopped=cu,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xa=Qe(er),eo=te({},er,{view:0,detail:0}),t1=Qe(eo),el,tl,dr,ki=te({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==dr&&(dr&&e.type==="mousemove"?(el=e.screenX-dr.screenX,tl=e.screenY-dr.screenY):tl=el=0,dr=e),el)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),du=Qe(ki),n1=te({},ki,{dataTransfer:0}),r1=Qe(n1),o1=te({},eo,{relatedTarget:0}),nl=Qe(o1),i1=te({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),l1=Qe(i1),a1=te({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),s1=Qe(a1),u1=te({},er,{data:0}),pu=Qe(u1),c1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},p1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=p1[e])?!!t[e]:!1}function Za(){return f1}var h1=te({},eo,{key:function(e){if(e.key){var t=c1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?d1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Za,charCode:function(e){return e.type==="keypress"?bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),m1=Qe(h1),g1=te({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fu=Qe(g1),x1=te({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Za}),v1=Qe(x1),y1=te({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),w1=Qe(y1),S1=te({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C1=Qe(S1),k1=[9,13,27,32],qa=St&&"CompositionEvent"in window,jr=null;St&&"documentMode"in document&&(jr=document.documentMode);var j1=St&&"TextEvent"in window&&!jr,Fd=St&&(!qa||jr&&8<jr&&11>=jr),hu=String.fromCharCode(32),mu=!1;function Nd(e,t){switch(e){case"keyup":return k1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function E1(e,t){switch(e){case"compositionend":return Pd(t);case"keypress":return t.which!==32?null:(mu=!0,hu);case"textInput":return e=t.data,e===hu&&mu?null:e;default:return null}}function z1(e,t){if(kn)return e==="compositionend"||!qa&&Nd(e,t)?(e=zd(),Io=Ja=bt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fd&&t.locale!=="ko"?null:t.data;default:return null}}var F1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!F1[e.type]:t==="textarea"}function Ad(e,t,n,r){ad(r),t=Xo(t,"onChange"),0<t.length&&(n=new Xa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Er=null,Mr=null;function N1(e){Ud(e,0)}function ji(e){var t=zn(e);if(ed(t))return e}function P1(e,t){if(e==="change")return t}var Id=!1;if(St){var rl;if(St){var ol="oninput"in document;if(!ol){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),ol=typeof xu.oninput=="function"}rl=ol}else rl=!1;Id=rl&&(!document.documentMode||9<document.documentMode)}function vu(){Er&&(Er.detachEvent("onpropertychange",bd),Mr=Er=null)}function bd(e){if(e.propertyName==="value"&&ji(Mr)){var t=[];Ad(t,Mr,e,Wa(e)),dd(N1,t)}}function A1(e,t,n){e==="focusin"?(vu(),Er=t,Mr=n,Er.attachEvent("onpropertychange",bd)):e==="focusout"&&vu()}function I1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ji(Mr)}function b1(e,t){if(e==="click")return ji(t)}function O1(e,t){if(e==="input"||e==="change")return ji(t)}function T1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:T1;function Br(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Nl.call(t,o)||!at(e[o],t[o]))return!1}return!0}function yu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wu(e,t){var n=yu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yu(n)}}function Od(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Od(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Td(){for(var e=window,t=Ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ho(e.document)}return t}function es(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function R1(e){var t=Td(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Od(n.ownerDocument.documentElement,n)){if(r!==null&&es(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=wu(n,i);var l=wu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var L1=St&&"documentMode"in document&&11>=document.documentMode,jn=null,Kl=null,zr=null,Yl=!1;function Su(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yl||jn==null||jn!==Ho(r)||(r=jn,"selectionStart"in r&&es(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Br(zr,r)||(zr=r,r=Xo(Kl,"onSelect"),0<r.length&&(t=new Xa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:mo("Animation","AnimationEnd"),animationiteration:mo("Animation","AnimationIteration"),animationstart:mo("Animation","AnimationStart"),transitionend:mo("Transition","TransitionEnd")},il={},Rd={};St&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Ei(e){if(il[e])return il[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rd)return il[e]=t[n];return e}var Ld=Ei("animationend"),Dd=Ei("animationiteration"),Md=Ei("animationstart"),Bd=Ei("transitionend"),_d=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){_d.set(e,t),fn(t,[e])}for(var ll=0;ll<Cu.length;ll++){var al=Cu[ll],D1=al.toLowerCase(),M1=al[0].toUpperCase()+al.slice(1);Yt(D1,"on"+M1)}Yt(Ld,"onAnimationEnd");Yt(Dd,"onAnimationIteration");Yt(Md,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Bd,"onTransitionEnd");_n("onMouseEnter",["mouseout","mouseover"]);_n("onMouseLeave",["mouseout","mouseover"]);_n("onPointerEnter",["pointerout","pointerover"]);_n("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B1=new Set("cancel close invalid load scroll toggle".split(" ").concat(wr));function ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,D0(r,t,void 0,e),e.currentTarget=null}function Ud(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;ku(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;ku(o,a,c),i=u}}}if(Qo)throw e=$l,Qo=!1,$l=null,e}function Y(e,t){var n=t[ql];n===void 0&&(n=t[ql]=new Set);var r=e+"__bubble";n.has(r)||(Vd(t,e,2,!1),n.add(r))}function sl(e,t,n){var r=0;t&&(r|=4),Vd(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[go]){e[go]=!0,Gc.forEach(function(n){n!=="selectionchange"&&(B1.has(n)||sl(n,!1,e),sl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,sl("selectionchange",!1,t))}}function Vd(e,t,n,r){switch(Ed(t)){case 1:var o=q0;break;case 4:o=e1;break;default:o=Ga}n=o.bind(null,t,n,e),o=void 0,!Vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ul(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=en(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}dd(function(){var c=i,h=Wa(n),m=[];e:{var g=_d.get(e);if(g!==void 0){var y=Xa,S=e;switch(e){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":y=m1;break;case"focusin":S="focus",y=nl;break;case"focusout":S="blur",y=nl;break;case"beforeblur":case"afterblur":y=nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=du;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=r1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=v1;break;case Ld:case Dd:case Md:y=l1;break;case Bd:y=w1;break;case"scroll":y=t1;break;case"wheel":y=C1;break;case"copy":case"cut":case"paste":y=s1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=fu}var C=(t&4)!==0,P=!C&&e==="scroll",f=C?g!==null?g+"Capture":null:g;C=[];for(var d=c,p;d!==null;){p=d;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,f!==null&&(w=Tr(d,f),w!=null&&C.push(Ur(d,w,p)))),P)break;d=d.return}0<C.length&&(g=new y(g,S,null,n,h),m.push({event:g,listeners:C}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&n!==_l&&(S=n.relatedTarget||n.fromElement)&&(en(S)||S[Ct]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(S=n.relatedTarget||n.toElement,y=c,S=S?en(S):null,S!==null&&(P=hn(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(y=null,S=c),y!==S)){if(C=du,w="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(C=fu,w="onPointerLeave",f="onPointerEnter",d="pointer"),P=y==null?g:zn(y),p=S==null?g:zn(S),g=new C(w,d+"leave",y,n,h),g.target=P,g.relatedTarget=p,w=null,en(h)===c&&(C=new C(f,d+"enter",S,n,h),C.target=p,C.relatedTarget=P,w=C),P=w,y&&S)t:{for(C=y,f=S,d=0,p=C;p;p=vn(p))d++;for(p=0,w=f;w;w=vn(w))p++;for(;0<d-p;)C=vn(C),d--;for(;0<p-d;)f=vn(f),p--;for(;d--;){if(C===f||f!==null&&C===f.alternate)break t;C=vn(C),f=vn(f)}C=null}else C=null;y!==null&&ju(m,g,y,C,!1),S!==null&&P!==null&&ju(m,P,S,C,!0)}}e:{if(g=c?zn(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=P1;else if(gu(g))if(Id)k=O1;else{k=I1;var z=A1}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=b1);if(k&&(k=k(e,c))){Ad(m,k,n,h);break e}z&&z(e,g,c),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Rl(g,"number",g.value)}switch(z=c?zn(c):window,e){case"focusin":(gu(z)||z.contentEditable==="true")&&(jn=z,Kl=c,zr=null);break;case"focusout":zr=Kl=jn=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Su(m,n,h);break;case"selectionchange":if(L1)break;case"keydown":case"keyup":Su(m,n,h)}var x;if(qa)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else kn?Nd(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Fd&&n.locale!=="ko"&&(kn||N!=="onCompositionStart"?N==="onCompositionEnd"&&kn&&(x=zd()):(bt=h,Ja="value"in bt?bt.value:bt.textContent,kn=!0)),z=Xo(c,N),0<z.length&&(N=new pu(N,e,null,n,h),m.push({event:N,listeners:z}),x?N.data=x:(x=Pd(n),x!==null&&(N.data=x)))),(x=j1?E1(e,n):z1(e,n))&&(c=Xo(c,"onBeforeInput"),0<c.length&&(h=new pu("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=x))}Ud(m,t)})}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Tr(e,n),i!=null&&r.unshift(Ur(e,i,o)),i=Tr(e,t),i!=null&&r.push(Ur(e,i,o))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=Tr(n,i),u!=null&&l.unshift(Ur(n,u,a))):o||(u=Tr(n,i),u!=null&&l.push(Ur(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var _1=/\r\n?/g,U1=/\u0000|\uFFFD/g;function Eu(e){return(typeof e=="string"?e:""+e).replace(_1,`
`).replace(U1,"")}function xo(e,t,n){if(t=Eu(t),Eu(e)!==t&&n)throw Error(E(425))}function Zo(){}var Gl=null,Jl=null;function Xl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,V1=typeof clearTimeout=="function"?clearTimeout:void 0,zu=typeof Promise=="function"?Promise:void 0,$1=typeof queueMicrotask=="function"?queueMicrotask:typeof zu<"u"?function(e){return zu.resolve(null).then(e).catch(H1)}:Zl;function H1(e){setTimeout(function(){throw e})}function cl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Dr(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),dt="__reactFiber$"+tr,Vr="__reactProps$"+tr,Ct="__reactContainer$"+tr,ql="__reactEvents$"+tr,W1="__reactListeners$"+tr,Q1="__reactHandles$"+tr;function en(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ct]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fu(e);e!==null;){if(n=e[dt])return n;e=Fu(e)}return t}e=n,n=e.parentNode}return null}function to(e){return e=e[dt]||e[Ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function zi(e){return e[Vr]||null}var ea=[],Fn=-1;function Gt(e){return{current:e}}function J(e){0>Fn||(e.current=ea[Fn],ea[Fn]=null,Fn--)}function K(e,t){Fn++,ea[Fn]=e.current,e.current=t}var Kt={},Ee=Gt(Kt),Le=Gt(!1),sn=Kt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function De(e){return e=e.childContextTypes,e!=null}function qo(){J(Le),J(Ee)}function Nu(e,t,n){if(Ee.current!==Kt)throw Error(E(168));K(Ee,t),K(Le,n)}function $d(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,A0(e)||"Unknown",o));return te({},n,r)}function ei(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,sn=Ee.current,K(Ee,e),K(Le,Le.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=$d(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,J(Le),J(Ee),K(Ee,e)):J(Le),K(Le,n)}var xt=null,Fi=!1,dl=!1;function Hd(e){xt===null?xt=[e]:xt.push(e)}function K1(e){Fi=!0,Hd(e)}function Jt(){if(!dl&&xt!==null){dl=!0;var e=0,t=Q;try{var n=xt;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}xt=null,Fi=!1}catch(o){throw xt!==null&&(xt=xt.slice(e+1)),md(Qa,Jt),o}finally{Q=t,dl=!1}}return null}var Nn=[],Pn=0,ti=null,ni=0,Ke=[],Ye=0,un=null,vt=1,yt="";function Zt(e,t){Nn[Pn++]=ni,Nn[Pn++]=ti,ti=e,ni=t}function Wd(e,t,n){Ke[Ye++]=vt,Ke[Ye++]=yt,Ke[Ye++]=un,un=e;var r=vt;e=yt;var o=32-ot(r)-1;r&=~(1<<o),n+=1;var i=32-ot(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,vt=1<<32-ot(t)+o|n<<o|r,yt=i+e}else vt=1<<i|n<<o|r,yt=e}function ts(e){e.return!==null&&(Zt(e,1),Wd(e,1,0))}function ns(e){for(;e===ti;)ti=Nn[--Pn],Nn[Pn]=null,ni=Nn[--Pn],Nn[Pn]=null;for(;e===un;)un=Ke[--Ye],Ke[Ye]=null,yt=Ke[--Ye],Ke[Ye]=null,vt=Ke[--Ye],Ke[Ye]=null}var $e=null,Ve=null,Z=!1,rt=null;function Qd(e,t){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Au(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Ve=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:vt,overflow:yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Ve=null,!0):!1;default:return!1}}function ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(Z){var t=Ve;if(t){var n=t;if(!Au(e,t)){if(ta(e))throw Error(E(418));t=Mt(n.nextSibling);var r=$e;t&&Au(e,t)?Qd(r,n):(e.flags=e.flags&-4097|2,Z=!1,$e=e)}}else{if(ta(e))throw Error(E(418));e.flags=e.flags&-4097|2,Z=!1,$e=e}}}function Iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function vo(e){if(e!==$e)return!1;if(!Z)return Iu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xl(e.type,e.memoizedProps)),t&&(t=Ve)){if(ta(e))throw Kd(),Error(E(418));for(;t;)Qd(e,t),t=Mt(t.nextSibling)}if(Iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=$e?Mt(e.stateNode.nextSibling):null;return!0}function Kd(){for(var e=Ve;e;)e=Mt(e.nextSibling)}function Vn(){Ve=$e=null,Z=!1}function rs(e){rt===null?rt=[e]:rt.push(e)}var Y1=Et.ReactCurrentBatchConfig;function tt(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ri=Gt(null),oi=null,An=null,os=null;function is(){os=An=oi=null}function ls(e){var t=ri.current;J(ri),e._currentValue=t}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mn(e,t){oi=e,os=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Re=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(os!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(oi===null)throw Error(E(308));An=e,oi.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var tn=null;function as(e){tn===null?tn=[e]:tn.push(e)}function Yd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,as(t)):(n.next=o.next,o.next=n),t.interleaved=n,kt(e,r)}function kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function ss(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,V&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,kt(e,n)}return o=r.interleaved,o===null?(t.next=t,as(r)):(t.next=o.next,o.next=t),r.interleaved=t,kt(e,n)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ka(e,n)}}function bu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ii(e,t,n,r){var o=e.updateQueue;Pt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(i!==null){var m=o.baseState;l=0,h=c=u=null,a=i;do{var g=a.lane,y=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,C=a;switch(g=t,y=n,C.tag){case 1:if(S=C.payload,typeof S=="function"){m=S.call(y,m,g);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,g=typeof S=="function"?S.call(y,m,g):S,g==null)break e;m=te({},m,g);break e;case 2:Pt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=m):h=h.next=y,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(h===null&&(u=m),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);dn|=l,e.lanes=l,e.memoizedState=m}}function Ou(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Jd=new Yc.Component().refs;function oa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ni={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Ut(e),i=wt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(it(t,e,o,r),Oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),o=Ut(e),i=wt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Bt(e,i,o),t!==null&&(it(t,e,o,r),Oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=Ut(e),o=wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Bt(e,o,r),t!==null&&(it(t,e,r,n),Oo(t,e,r))}};function Tu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(o,i):!0}function Xd(e,t,n){var r=!1,o=Kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(o=De(t)?sn:Ee.current,r=t.contextTypes,i=(r=r!=null)?Un(e,o):Kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ni,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ru(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ni.enqueueReplaceState(t,t.state,null)}function ia(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Jd,ss(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Xe(i):(i=De(t)?sn:Ee.current,o.context=Un(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(oa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ni.enqueueReplaceState(o,o.state,null),ii(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Jd&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lu(e){var t=e._init;return t(e._payload)}function Zd(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Vt(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,d,p,w){return d===null||d.tag!==6?(d=vl(p,f.mode,w),d.return=f,d):(d=o(d,p),d.return=f,d)}function u(f,d,p,w){var k=p.type;return k===Cn?h(f,d,p.props.children,w,p.key):d!==null&&(d.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Lu(k)===d.type)?(w=o(d,p.props),w.ref=pr(f,d,p),w.return=f,w):(w=Bo(p.type,p.key,p.props,null,f.mode,w),w.ref=pr(f,d,p),w.return=f,w)}function c(f,d,p,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=yl(p,f.mode,w),d.return=f,d):(d=o(d,p.children||[]),d.return=f,d)}function h(f,d,p,w,k){return d===null||d.tag!==7?(d=ln(p,f.mode,w,k),d.return=f,d):(d=o(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=vl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ao:return p=Bo(d.type,d.key,d.props,null,f.mode,p),p.ref=pr(f,null,d),p.return=f,p;case Sn:return d=yl(d,f.mode,p),d.return=f,d;case Nt:var w=d._init;return m(f,w(d._payload),p)}if(vr(d)||ar(d))return d=ln(d,f.mode,p,null),d.return=f,d;yo(f,d)}return null}function g(f,d,p,w){var k=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(f,d,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ao:return p.key===k?u(f,d,p,w):null;case Sn:return p.key===k?c(f,d,p,w):null;case Nt:return k=p._init,g(f,d,k(p._payload),w)}if(vr(p)||ar(p))return k!==null?null:h(f,d,p,w,null);yo(f,p)}return null}function y(f,d,p,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(p)||null,a(d,f,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ao:return f=f.get(w.key===null?p:w.key)||null,u(d,f,w,k);case Sn:return f=f.get(w.key===null?p:w.key)||null,c(d,f,w,k);case Nt:var z=w._init;return y(f,d,p,z(w._payload),k)}if(vr(w)||ar(w))return f=f.get(p)||null,h(d,f,w,k,null);yo(d,w)}return null}function S(f,d,p,w){for(var k=null,z=null,x=d,N=d=0,R=null;x!==null&&N<p.length;N++){x.index>N?(R=x,x=null):R=x.sibling;var I=g(f,x,p[N],w);if(I===null){x===null&&(x=R);break}e&&x&&I.alternate===null&&t(f,x),d=i(I,d,N),z===null?k=I:z.sibling=I,z=I,x=R}if(N===p.length)return n(f,x),Z&&Zt(f,N),k;if(x===null){for(;N<p.length;N++)x=m(f,p[N],w),x!==null&&(d=i(x,d,N),z===null?k=x:z.sibling=x,z=x);return Z&&Zt(f,N),k}for(x=r(f,x);N<p.length;N++)R=y(x,f,N,p[N],w),R!==null&&(e&&R.alternate!==null&&x.delete(R.key===null?N:R.key),d=i(R,d,N),z===null?k=R:z.sibling=R,z=R);return e&&x.forEach(function(se){return t(f,se)}),Z&&Zt(f,N),k}function C(f,d,p,w){var k=ar(p);if(typeof k!="function")throw Error(E(150));if(p=k.call(p),p==null)throw Error(E(151));for(var z=k=null,x=d,N=d=0,R=null,I=p.next();x!==null&&!I.done;N++,I=p.next()){x.index>N?(R=x,x=null):R=x.sibling;var se=g(f,x,I.value,w);if(se===null){x===null&&(x=R);break}e&&x&&se.alternate===null&&t(f,x),d=i(se,d,N),z===null?k=se:z.sibling=se,z=se,x=R}if(I.done)return n(f,x),Z&&Zt(f,N),k;if(x===null){for(;!I.done;N++,I=p.next())I=m(f,I.value,w),I!==null&&(d=i(I,d,N),z===null?k=I:z.sibling=I,z=I);return Z&&Zt(f,N),k}for(x=r(f,x);!I.done;N++,I=p.next())I=y(x,f,N,I.value,w),I!==null&&(e&&I.alternate!==null&&x.delete(I.key===null?N:I.key),d=i(I,d,N),z===null?k=I:z.sibling=I,z=I);return e&&x.forEach(function(Be){return t(f,Be)}),Z&&Zt(f,N),k}function P(f,d,p,w){if(typeof p=="object"&&p!==null&&p.type===Cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ao:e:{for(var k=p.key,z=d;z!==null;){if(z.key===k){if(k=p.type,k===Cn){if(z.tag===7){n(f,z.sibling),d=o(z,p.props.children),d.return=f,f=d;break e}}else if(z.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&Lu(k)===z.type){n(f,z.sibling),d=o(z,p.props),d.ref=pr(f,z,p),d.return=f,f=d;break e}n(f,z);break}else t(f,z);z=z.sibling}p.type===Cn?(d=ln(p.props.children,f.mode,w,p.key),d.return=f,f=d):(w=Bo(p.type,p.key,p.props,null,f.mode,w),w.ref=pr(f,d,p),w.return=f,f=w)}return l(f);case Sn:e:{for(z=p.key;d!==null;){if(d.key===z)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=o(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=yl(p,f.mode,w),d.return=f,f=d}return l(f);case Nt:return z=p._init,P(f,d,z(p._payload),w)}if(vr(p))return S(f,d,p,w);if(ar(p))return C(f,d,p,w);yo(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,p),d.return=f,f=d):(n(f,d),d=vl(p,f.mode,w),d.return=f,f=d),l(f)):n(f,d)}return P}var $n=Zd(!0),qd=Zd(!1),no={},ft=Gt(no),$r=Gt(no),Hr=Gt(no);function nn(e){if(e===no)throw Error(E(174));return e}function us(e,t){switch(K(Hr,t),K($r,e),K(ft,no),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dl(t,e)}J(ft),K(ft,t)}function Hn(){J(ft),J($r),J(Hr)}function ep(e){nn(Hr.current);var t=nn(ft.current),n=Dl(t,e.type);t!==n&&(K($r,e),K(ft,n))}function cs(e){$r.current===e&&(J(ft),J($r))}var q=Gt(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pl=[];function ds(){for(var e=0;e<pl.length;e++)pl[e]._workInProgressVersionPrimary=null;pl.length=0}var To=Et.ReactCurrentDispatcher,fl=Et.ReactCurrentBatchConfig,cn=0,ee=null,de=null,he=null,ai=!1,Fr=!1,Wr=0,G1=0;function Se(){throw Error(E(321))}function ps(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function fs(e,t,n,r,o,i){if(cn=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?q1:eh,e=n(r,o),Fr){i=0;do{if(Fr=!1,Wr=0,25<=i)throw Error(E(301));i+=1,he=de=null,t.updateQueue=null,To.current=th,e=n(r,o)}while(Fr)}if(To.current=si,t=de!==null&&de.next!==null,cn=0,he=de=ee=null,ai=!1,t)throw Error(E(300));return e}function hs(){var e=Wr!==0;return Wr=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ee.memoizedState=he=e:he=he.next=e,he}function Ze(){if(de===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=he===null?ee.memoizedState:he.next;if(t!==null)he=t,de=e;else{if(e===null)throw Error(E(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},he===null?ee.memoizedState=he=e:he=he.next=e}return he}function Qr(e,t){return typeof t=="function"?t(e):t}function hl(e){var t=Ze(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=de,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var h=c.lane;if((cn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=m,l=r):u=u.next=m,ee.lanes|=h,dn|=h}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,at(r,t.memoizedState)||(Re=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,dn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ml(e){var t=Ze(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);at(i,t.memoizedState)||(Re=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function tp(){}function np(e,t){var n=ee,r=Ze(),o=t(),i=!at(r.memoizedState,o);if(i&&(r.memoizedState=o,Re=!0),r=r.queue,ms(ip.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Kr(9,op.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(E(349));cn&30||rp(n,t,o)}return o}function rp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function op(e,t,n,r){t.value=n,t.getSnapshot=r,lp(t)&&ap(e)}function ip(e,t,n){return n(function(){lp(t)&&ap(e)})}function lp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function ap(e){var t=kt(e,1);t!==null&&it(t,e,1,-1)}function Du(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Z1.bind(null,ee,e),[t.memoizedState,e]}function Kr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function sp(){return Ze().memoizedState}function Ro(e,t,n,r){var o=ut();ee.flags|=e,o.memoizedState=Kr(1|t,n,void 0,r===void 0?null:r)}function Pi(e,t,n,r){var o=Ze();r=r===void 0?null:r;var i=void 0;if(de!==null){var l=de.memoizedState;if(i=l.destroy,r!==null&&ps(r,l.deps)){o.memoizedState=Kr(t,n,i,r);return}}ee.flags|=e,o.memoizedState=Kr(1|t,n,i,r)}function Mu(e,t){return Ro(8390656,8,e,t)}function ms(e,t){return Pi(2048,8,e,t)}function up(e,t){return Pi(4,2,e,t)}function cp(e,t){return Pi(4,4,e,t)}function dp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pp(e,t,n){return n=n!=null?n.concat([e]):null,Pi(4,4,dp.bind(null,t,e),n)}function gs(){}function fp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ps(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hp(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ps(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mp(e,t,n){return cn&21?(at(n,t)||(n=vd(),ee.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Re=!0),e.memoizedState=n)}function J1(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=fl.transition;fl.transition={};try{e(!1),t()}finally{Q=n,fl.transition=r}}function gp(){return Ze().memoizedState}function X1(e,t,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xp(e))vp(t,n);else if(n=Yd(e,t,n,r),n!==null){var o=Ne();it(n,e,r,o),yp(n,t,r)}}function Z1(e,t,n){var r=Ut(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xp(e))vp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,at(a,l)){var u=t.interleaved;u===null?(o.next=o,as(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Yd(e,t,o,r),n!==null&&(o=Ne(),it(n,e,r,o),yp(n,t,r))}}function xp(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function vp(e,t){Fr=ai=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ka(e,n)}}var si={readContext:Xe,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},q1={readContext:Xe,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Mu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,dp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=X1.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:Du,useDebugValue:gs,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=Du(!1),t=e[0];return e=J1.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=ut();if(Z){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ge===null)throw Error(E(349));cn&30||rp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Mu(ip.bind(null,r,i,e),[e]),r.flags|=2048,Kr(9,op.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ut(),t=ge.identifierPrefix;if(Z){var n=yt,r=vt;n=(r&~(1<<32-ot(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=G1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},eh={readContext:Xe,useCallback:fp,useContext:Xe,useEffect:ms,useImperativeHandle:pp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:hp,useReducer:hl,useRef:sp,useState:function(){return hl(Qr)},useDebugValue:gs,useDeferredValue:function(e){var t=Ze();return mp(t,de.memoizedState,e)},useTransition:function(){var e=hl(Qr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:tp,useSyncExternalStore:np,useId:gp,unstable_isNewReconciler:!1},th={readContext:Xe,useCallback:fp,useContext:Xe,useEffect:ms,useImperativeHandle:pp,useInsertionEffect:up,useLayoutEffect:cp,useMemo:hp,useReducer:ml,useRef:sp,useState:function(){return ml(Qr)},useDebugValue:gs,useDeferredValue:function(e){var t=Ze();return de===null?t.memoizedState=e:mp(t,de.memoizedState,e)},useTransition:function(){var e=ml(Qr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:tp,useSyncExternalStore:np,useId:gp,unstable_isNewReconciler:!1};function Wn(e,t){try{var n="",r=t;do n+=P0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var nh=typeof WeakMap=="function"?WeakMap:Map;function wp(e,t,n){n=wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ci||(ci=!0,ga=r),la(e,t)},n}function Sp(e,t,n){n=wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){la(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){la(e,t),typeof r!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Bu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new nh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=gh.bind(null,e,t,n),t.then(e,e))}function _u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=wt(-1,1),t.tag=2,Bt(n,t,1))),n.lanes|=1),e)}var rh=Et.ReactCurrentOwner,Re=!1;function Fe(e,t,n,r){t.child=e===null?qd(t,null,n,r):$n(t,e.child,n,r)}function Vu(e,t,n,r,o){n=n.render;var i=t.ref;return Mn(t,o),r=fs(e,t,n,r,i,o),n=hs(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(Z&&n&&ts(t),t.flags|=1,Fe(e,t,r,o),t.child)}function $u(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!js(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Cp(e,t,i,r,o)):(e=Bo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(l,r)&&e.ref===t.ref)return jt(e,t,o)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Cp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Br(i,r)&&e.ref===t.ref)if(Re=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Re=!0);else return t.lanes=e.lanes,jt(e,t,o)}return aa(e,t,n,r,o)}function kp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(bn,Ue),Ue|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(bn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(bn,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(bn,Ue),Ue|=r;return Fe(e,t,o,n),t.child}function jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function aa(e,t,n,r,o){var i=De(n)?sn:Ee.current;return i=Un(t,i),Mn(t,o),n=fs(e,t,n,r,i,o),r=hs(),e!==null&&!Re?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(Z&&r&&ts(t),t.flags|=1,Fe(e,t,n,o),t.child)}function Hu(e,t,n,r,o){if(De(n)){var i=!0;ei(t)}else i=!1;if(Mn(t,o),t.stateNode===null)Lo(e,t),Xd(t,n,r),ia(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=De(n)?sn:Ee.current,c=Un(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Ru(t,l,r,c),Pt=!1;var g=t.memoizedState;l.state=g,ii(t,r,l,o),u=t.memoizedState,a!==r||g!==u||Le.current||Pt?(typeof h=="function"&&(oa(t,n,h,r),u=t.memoizedState),(a=Pt||Tu(t,n,a,r,g,u,c))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Gd(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:tt(t.type,a),l.props=c,m=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xe(u):(u=De(n)?sn:Ee.current,u=Un(t,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==m||g!==u)&&Ru(t,l,r,u),Pt=!1,g=t.memoizedState,l.state=g,ii(t,r,l,o);var S=t.memoizedState;a!==m||g!==S||Le.current||Pt?(typeof y=="function"&&(oa(t,n,y,r),S=t.memoizedState),(c=Pt||Tu(t,n,c,r,g,S,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return sa(e,t,n,r,i,o)}function sa(e,t,n,r,o,i){jp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Pu(t,n,!1),jt(e,t,i);r=t.stateNode,rh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=$n(t,e.child,null,i),t.child=$n(t,null,a,i)):Fe(e,t,a,i),t.memoizedState=r.state,o&&Pu(t,n,!0),t.child}function Ep(e){var t=e.stateNode;t.pendingContext?Nu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nu(e,t.context,!1),us(e,t.containerInfo)}function Wu(e,t,n,r,o){return Vn(),rs(o),t.flags|=256,Fe(e,t,n,r),t.child}var ua={dehydrated:null,treeContext:null,retryLane:0};function ca(e){return{baseLanes:e,cachePool:null,transitions:null}}function zp(e,t,n){var r=t.pendingProps,o=q.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(q,o&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=bi(l,r,0,null),e=ln(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ca(n),t.memoizedState=ua,e):xs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return oh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Vt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Vt(a,i):(i=ln(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ca(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=ua,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xs(e,t){return t=bi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wo(e,t,n,r){return r!==null&&rs(r),$n(t,e.child,null,n),e=xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function oh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=gl(Error(E(422))),wo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=bi({mode:"visible",children:r.children},o,0,null),i=ln(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&$n(t,e.child,null,l),t.child.memoizedState=ca(l),t.memoizedState=ua,i);if(!(t.mode&1))return wo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(E(419)),r=gl(i,r,void 0),wo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Re||a){if(r=ge,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,kt(e,o),it(r,e,o,-1))}return ks(),r=gl(Error(E(421))),wo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=xh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ve=Mt(o.nextSibling),$e=t,Z=!0,rt=null,e!==null&&(Ke[Ye++]=vt,Ke[Ye++]=yt,Ke[Ye++]=un,vt=e.id,yt=e.overflow,un=t),t=xs(t,r.children),t.flags|=4096,t)}function Qu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Fp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qu(e,n,t);else if(e.tag===19)Qu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}xl(t,!0,n,null,i);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ih(e,t,n){switch(t.tag){case 3:Ep(t),Vn();break;case 5:ep(t);break;case 1:De(t.type)&&ei(t);break;case 4:us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(ri,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?zp(e,t,n):(K(q,q.current&1),e=jt(e,t,n),e!==null?e.sibling:null);K(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Fp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,kp(e,t,n)}return jt(e,t,n)}var Np,da,Pp,Ap;Np=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};da=function(){};Pp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,nn(ft.current);var i=null;switch(n){case"input":o=Ol(e,o),r=Ol(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=Ll(e,o),r=Ll(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}Ml(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(br.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(br.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Y("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Ap=function(e,t,n,r){n!==r&&(t.flags|=4)};function fr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lh(e,t,n){var r=t.pendingProps;switch(ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return De(t.type)&&qo(),Ce(t),null;case 3:return r=t.stateNode,Hn(),J(Le),J(Ee),ds(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(ya(rt),rt=null))),da(e,t),Ce(t),null;case 5:cs(t);var o=nn(Hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Pp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Ce(t),null}if(e=nn(ft.current),vo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[dt]=t,r[Vr]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<wr.length;o++)Y(wr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":tu(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":ru(r,i),Y("invalid",r)}Ml(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&xo(r.textContent,a,e),o=["children",""+a]):br.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&Y("scroll",r)}switch(n){case"input":so(r),nu(r,i,!0);break;case"textarea":so(r),ou(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[dt]=t,e[Vr]=r,Np(e,t,!1,!1),t.stateNode=e;e:{switch(l=Bl(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<wr.length;o++)Y(wr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":tu(e,r),o=Ol(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),Y("invalid",e);break;case"textarea":ru(e,r),o=Ll(e,r),Y("invalid",e);break;default:o=r}Ml(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ld(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&od(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Or(e,u):typeof u=="number"&&Or(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(br.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Y("scroll",e):u!=null&&Ua(e,i,u,l))}switch(n){case"input":so(e),nu(e,r,!1);break;case"textarea":so(e),ou(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Tn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)Ap(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=nn(Hr.current),nn(ft.current),vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[dt]=t,(i=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=t,t.stateNode=r}return Ce(t),null;case 13:if(J(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Ve!==null&&t.mode&1&&!(t.flags&128))Kd(),Vn(),t.flags|=98560,i=!1;else if(i=vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[dt]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else rt!==null&&(ya(rt),rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?fe===0&&(fe=3):ks())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Hn(),da(e,t),e===null&&_r(t.stateNode.containerInfo),Ce(t),null;case 10:return ls(t.type._context),Ce(t),null;case 17:return De(t.type)&&qo(),Ce(t),null;case 19:if(J(q),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)fr(i,!1);else{if(fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=li(e),l!==null){for(t.flags|=128,fr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(q,q.current&1|2),t.child}e=e.sibling}i.tail!==null&&oe()>Qn&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304)}else{if(!r)if(e=li(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return Ce(t),null}else 2*oe()-i.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,fr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=q.current,K(q,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return Cs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function ah(e,t){switch(ns(t),t.tag){case 1:return De(t.type)&&qo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),J(Le),J(Ee),ds(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cs(t),null;case 13:if(J(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(q),null;case 4:return Hn(),null;case 10:return ls(t.type._context),null;case 22:case 23:return Cs(),null;case 24:return null;default:return null}}var So=!1,ke=!1,sh=typeof WeakSet=="function"?WeakSet:Set,A=null;function In(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function pa(e,t,n){try{n()}catch(r){re(e,t,r)}}var Ku=!1;function uh(e,t){if(Gl=Go,e=Td(),es(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,h=0,m=e,g=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(a=l+o),m!==i||r!==0&&m.nodeType!==3||(u=l+r),m.nodeType===3&&(l+=m.nodeValue.length),(y=m.firstChild)!==null;)g=m,m=y;for(;;){if(m===e)break t;if(g===n&&++c===o&&(a=l),g===i&&++h===r&&(u=l),(y=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},Go=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,P=S.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:tt(t.type,C),P);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){re(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return S=Ku,Ku=!1,S}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&pa(t,n,i)}o=o.next}while(o!==r)}}function Ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ip(e){var t=e.alternate;t!==null&&(e.alternate=null,Ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[dt],delete t[Vr],delete t[ql],delete t[W1],delete t[Q1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bp(e){return e.tag===5||e.tag===3||e.tag===4}function Yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ma(e,t,n),e=e.sibling;e!==null;)ma(e,t,n),e=e.sibling}var xe=null,nt=!1;function zt(e,t,n){for(n=n.child;n!==null;)Op(e,t,n),n=n.sibling}function Op(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(Ci,n)}catch{}switch(n.tag){case 5:ke||In(n,t);case 6:var r=xe,o=nt;xe=null,zt(e,t,n),xe=r,nt=o,xe!==null&&(nt?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(nt?(e=xe,n=n.stateNode,e.nodeType===8?cl(e.parentNode,n):e.nodeType===1&&cl(e,n),Dr(e)):cl(xe,n.stateNode));break;case 4:r=xe,o=nt,xe=n.stateNode.containerInfo,nt=!0,zt(e,t,n),xe=r,nt=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&pa(n,t,l),o=o.next}while(o!==r)}zt(e,t,n);break;case 1:if(!ke&&(In(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,t,a)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,zt(e,t,n),ke=r):zt(e,t,n);break;default:zt(e,t,n)}}function Gu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sh),t.forEach(function(r){var o=vh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,nt=!1;break e;case 3:xe=a.stateNode.containerInfo,nt=!0;break e;case 4:xe=a.stateNode.containerInfo,nt=!0;break e}a=a.return}if(xe===null)throw Error(E(160));Op(i,l,o),xe=null,nt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){re(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tp(t,e),t=t.sibling}function Tp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(et(t,e),st(e),r&4){try{Nr(3,e,e.return),Ai(3,e)}catch(C){re(e,e.return,C)}try{Nr(5,e,e.return)}catch(C){re(e,e.return,C)}}break;case 1:et(t,e),st(e),r&512&&n!==null&&In(n,n.return);break;case 5:if(et(t,e),st(e),r&512&&n!==null&&In(n,n.return),e.flags&32){var o=e.stateNode;try{Or(o,"")}catch(C){re(e,e.return,C)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&td(o,i),Bl(a,l);var c=Bl(a,i);for(l=0;l<u.length;l+=2){var h=u[l],m=u[l+1];h==="style"?ld(o,m):h==="dangerouslySetInnerHTML"?od(o,m):h==="children"?Or(o,m):Ua(o,h,m,c)}switch(a){case"input":Tl(o,i);break;case"textarea":nd(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Tn(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?Tn(o,!!i.multiple,i.defaultValue,!0):Tn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Vr]=i}catch(C){re(e,e.return,C)}}break;case 6:if(et(t,e),st(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(C){re(e,e.return,C)}}break;case 3:if(et(t,e),st(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(C){re(e,e.return,C)}break;case 4:et(t,e),st(e);break;case 13:et(t,e),st(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ws=oe())),r&4&&Gu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ke=(c=ke)||h,et(t,e),ke=c):et(t,e),st(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(A=e,h=e.child;h!==null;){for(m=A=h;A!==null;){switch(g=A,y=g.child,g.tag){case 0:case 11:case 14:case 15:Nr(4,g,g.return);break;case 1:In(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(C){re(r,n,C)}}break;case 5:In(g,g.return);break;case 22:if(g.memoizedState!==null){Xu(m);continue}}y!==null?(y.return=g,A=y):Xu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=id("display",l))}catch(C){re(e,e.return,C)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(C){re(e,e.return,C)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:et(t,e),st(e),r&4&&Gu(e);break;case 21:break;default:et(t,e),st(e)}}function st(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Or(o,""),r.flags&=-33);var i=Yu(e);ma(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Yu(e);ha(e,a,l);break;default:throw Error(E(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ch(e,t,n){A=e,Rp(e)}function Rp(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||So;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||ke;a=So;var c=ke;if(So=l,(ke=u)&&!c)for(A=o;A!==null;)l=A,u=l.child,l.tag===22&&l.memoizedState!==null?Zu(o):u!==null?(u.return=l,A=u):Zu(o);for(;i!==null;)A=i,Rp(i),i=i.sibling;A=o,So=a,ke=c}Ju(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):Ju(e)}}function Ju(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ke||Ai(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ou(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ou(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}ke||t.flags&512&&fa(t)}catch(g){re(t,t.return,g)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Xu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Zu(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ai(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){re(t,o,u)}}var i=t.return;try{fa(t)}catch(u){re(t,i,u)}break;case 5:var l=t.return;try{fa(t)}catch(u){re(t,l,u)}}}catch(u){re(t,t.return,u)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var dh=Math.ceil,ui=Et.ReactCurrentDispatcher,vs=Et.ReactCurrentOwner,Je=Et.ReactCurrentBatchConfig,V=0,ge=null,le=null,ve=0,Ue=0,bn=Gt(0),fe=0,Yr=null,dn=0,Ii=0,ys=0,Pr=null,Te=null,ws=0,Qn=1/0,mt=null,ci=!1,ga=null,_t=null,Co=!1,Ot=null,di=0,Ar=0,xa=null,Do=-1,Mo=0;function Ne(){return V&6?oe():Do!==-1?Do:Do=oe()}function Ut(e){return e.mode&1?V&2&&ve!==0?ve&-ve:Y1.transition!==null?(Mo===0&&(Mo=vd()),Mo):(e=Q,e!==0||(e=window.event,e=e===void 0?16:Ed(e.type)),e):1}function it(e,t,n,r){if(50<Ar)throw Ar=0,xa=null,Error(E(185));qr(e,n,r),(!(V&2)||e!==ge)&&(e===ge&&(!(V&2)&&(Ii|=n),fe===4&&It(e,ve)),Me(e,r),n===1&&V===0&&!(t.mode&1)&&(Qn=oe()+500,Fi&&Jt()))}function Me(e,t){var n=e.callbackNode;Y0(e,t);var r=Yo(e,e===ge?ve:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?K1(qu.bind(null,e)):Hd(qu.bind(null,e)),$1(function(){!(V&6)&&Jt()}),n=null;else{switch(yd(r)){case 1:n=Qa;break;case 4:n=gd;break;case 16:n=Ko;break;case 536870912:n=xd;break;default:n=Ko}n=$p(n,Lp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Lp(e,t){if(Do=-1,Mo=0,V&6)throw Error(E(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=Yo(e,e===ge?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pi(e,r);else{t=r;var o=V;V|=2;var i=Mp();(ge!==e||ve!==t)&&(mt=null,Qn=oe()+500,on(e,t));do try{hh();break}catch(a){Dp(e,a)}while(1);is(),ui.current=i,V=o,le!==null?t=0:(ge=null,ve=0,t=fe)}if(t!==0){if(t===2&&(o=Hl(e),o!==0&&(r=o,t=va(e,o))),t===1)throw n=Yr,on(e,0),It(e,r),Me(e,oe()),n;if(t===6)It(e,r);else{if(o=e.current.alternate,!(r&30)&&!ph(o)&&(t=pi(e,r),t===2&&(i=Hl(e),i!==0&&(r=i,t=va(e,i))),t===1))throw n=Yr,on(e,0),It(e,r),Me(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:qt(e,Te,mt);break;case 3:if(It(e,r),(r&130023424)===r&&(t=ws+500-oe(),10<t)){if(Yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Zl(qt.bind(null,e,Te,mt),t);break}qt(e,Te,mt);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ot(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dh(r/1960))-r,10<r){e.timeoutHandle=Zl(qt.bind(null,e,Te,mt),r);break}qt(e,Te,mt);break;case 5:qt(e,Te,mt);break;default:throw Error(E(329))}}}return Me(e,oe()),e.callbackNode===n?Lp.bind(null,e):null}function va(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=pi(e,t),e!==2&&(t=Te,Te=n,t!==null&&ya(t)),e}function ya(e){Te===null?Te=e:Te.push.apply(Te,e)}function ph(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!at(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~ys,t&=~Ii,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function qu(e){if(V&6)throw Error(E(327));Bn();var t=Yo(e,0);if(!(t&1))return Me(e,oe()),null;var n=pi(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=va(e,r))}if(n===1)throw n=Yr,on(e,0),It(e,t),Me(e,oe()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qt(e,Te,mt),Me(e,oe()),null}function Ss(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Qn=oe()+500,Fi&&Jt())}}function pn(e){Ot!==null&&Ot.tag===0&&!(V&6)&&Bn();var t=V;V|=1;var n=Je.transition,r=Q;try{if(Je.transition=null,Q=1,e)return e()}finally{Q=r,Je.transition=n,V=t,!(V&6)&&Jt()}}function Cs(){Ue=bn.current,J(bn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,V1(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ns(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qo();break;case 3:Hn(),J(Le),J(Ee),ds();break;case 5:cs(r);break;case 4:Hn();break;case 13:J(q);break;case 19:J(q);break;case 10:ls(r.type._context);break;case 22:case 23:Cs()}n=n.return}if(ge=e,le=e=Vt(e.current,null),ve=Ue=t,fe=0,Yr=null,ys=Ii=dn=0,Te=Pr=null,tn!==null){for(t=0;t<tn.length;t++)if(n=tn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}tn=null}return e}function Dp(e,t){do{var n=le;try{if(is(),To.current=si,ai){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ai=!1}if(cn=0,he=de=ee=null,Fr=!1,Wr=0,vs.current=null,n===null||n.return===null){fe=1,Yr=t,le=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=ve,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=_u(l);if(y!==null){y.flags&=-257,Uu(y,l,a,i,t),y.mode&1&&Bu(i,c,t),t=y,u=c;var S=t.updateQueue;if(S===null){var C=new Set;C.add(u),t.updateQueue=C}else S.add(u);break e}else{if(!(t&1)){Bu(i,c,t),ks();break e}u=Error(E(426))}}else if(Z&&a.mode&1){var P=_u(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Uu(P,l,a,i,t),rs(Wn(u,a));break e}}i=u=Wn(u,a),fe!==4&&(fe=2),Pr===null?Pr=[i]:Pr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=wp(i,u,t);bu(i,f);break e;case 1:a=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(_t===null||!_t.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Sp(i,a,t);bu(i,w);break e}}i=i.return}while(i!==null)}_p(n)}catch(k){t=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Mp(){var e=ui.current;return ui.current=si,e===null?si:e}function ks(){(fe===0||fe===3||fe===2)&&(fe=4),ge===null||!(dn&268435455)&&!(Ii&268435455)||It(ge,ve)}function pi(e,t){var n=V;V|=2;var r=Mp();(ge!==e||ve!==t)&&(mt=null,on(e,t));do try{fh();break}catch(o){Dp(e,o)}while(1);if(is(),V=n,ui.current=r,le!==null)throw Error(E(261));return ge=null,ve=0,fe}function fh(){for(;le!==null;)Bp(le)}function hh(){for(;le!==null&&!B0();)Bp(le)}function Bp(e){var t=Vp(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?_p(e):le=t,vs.current=null}function _p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ah(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{fe=6,le=null;return}}else if(n=lh(n,t,Ue),n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);fe===0&&(fe=5)}function qt(e,t,n){var r=Q,o=Je.transition;try{Je.transition=null,Q=1,mh(e,t,n,r)}finally{Je.transition=o,Q=r}return null}function mh(e,t,n,r){do Bn();while(Ot!==null);if(V&6)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(G0(e,i),e===ge&&(le=ge=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,$p(Ko,function(){return Bn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Je.transition,Je.transition=null;var l=Q;Q=1;var a=V;V|=4,vs.current=null,uh(e,n),Tp(n,e),R1(Jl),Go=!!Gl,Jl=Gl=null,e.current=n,ch(n),_0(),V=a,Q=l,Je.transition=i}else e.current=n;if(Co&&(Co=!1,Ot=e,di=o),i=e.pendingLanes,i===0&&(_t=null),$0(n.stateNode),Me(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ci)throw ci=!1,e=ga,ga=null,e;return di&1&&e.tag!==0&&Bn(),i=e.pendingLanes,i&1?e===xa?Ar++:(Ar=0,xa=e):Ar=0,Jt(),null}function Bn(){if(Ot!==null){var e=yd(di),t=Je.transition,n=Q;try{if(Je.transition=null,Q=16>e?16:e,Ot===null)var r=!1;else{if(e=Ot,Ot=null,di=0,V&6)throw Error(E(331));var o=V;for(V|=4,A=e.current;A!==null;){var i=A,l=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(A=c;A!==null;){var h=A;switch(h.tag){case 0:case 11:case 15:Nr(8,h,i)}var m=h.child;if(m!==null)m.return=h,A=m;else for(;A!==null;){h=A;var g=h.sibling,y=h.return;if(Ip(h),h===c){A=null;break}if(g!==null){g.return=y,A=g;break}A=y}}}var S=i.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var P=C.sibling;C.sibling=null,C=P}while(C!==null)}}A=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,A=l;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Nr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,A=f;break e}A=i.return}}var d=e.current;for(A=d;A!==null;){l=A;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,A=p;else e:for(l=d;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ai(9,a)}}catch(k){re(a,a.return,k)}if(a===l){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(V=o,Jt(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(Ci,e)}catch{}r=!0}return r}finally{Q=n,Je.transition=t}}return!1}function ec(e,t,n){t=Wn(n,t),t=wp(e,t,1),e=Bt(e,t,1),t=Ne(),e!==null&&(qr(e,1,t),Me(e,t))}function re(e,t,n){if(e.tag===3)ec(e,e,n);else for(;t!==null;){if(t.tag===3){ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_t===null||!_t.has(r))){e=Wn(n,e),e=Sp(t,e,1),t=Bt(t,e,1),e=Ne(),t!==null&&(qr(t,1,e),Me(t,e));break}}t=t.return}}function gh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(ve&n)===n&&(fe===4||fe===3&&(ve&130023424)===ve&&500>oe()-ws?on(e,0):ys|=n),Me(e,t)}function Up(e,t){t===0&&(e.mode&1?(t=po,po<<=1,!(po&130023424)&&(po=4194304)):t=1);var n=Ne();e=kt(e,t),e!==null&&(qr(e,t,n),Me(e,n))}function xh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Up(e,n)}function vh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Up(e,n)}var Vp;Vp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)Re=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Re=!1,ih(e,t,n);Re=!!(e.flags&131072)}else Re=!1,Z&&t.flags&1048576&&Wd(t,ni,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lo(e,t),e=t.pendingProps;var o=Un(t,Ee.current);Mn(t,n),o=fs(null,t,r,e,o,n);var i=hs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(i=!0,ei(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ss(t),o.updater=Ni,t.stateNode=o,o._reactInternals=t,ia(t,r,e,n),t=sa(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&ts(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=wh(r),e=tt(r,e),o){case 0:t=aa(null,t,r,e,n);break e;case 1:t=Hu(null,t,r,e,n);break e;case 11:t=Vu(null,t,r,e,n);break e;case 14:t=$u(null,t,r,tt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),aa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Hu(e,t,r,o,n);case 3:e:{if(Ep(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Gd(e,t),ii(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Wn(Error(E(423)),t),t=Wu(e,t,r,n,o);break e}else if(r!==o){o=Wn(Error(E(424)),t),t=Wu(e,t,r,n,o);break e}else for(Ve=Mt(t.stateNode.containerInfo.firstChild),$e=t,Z=!0,rt=null,n=qd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===o){t=jt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return ep(t),e===null&&na(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Xl(r,o)?l=null:i!==null&&Xl(r,i)&&(t.flags|=32),jp(e,t),Fe(e,t,l,n),t.child;case 6:return e===null&&na(t),null;case 13:return zp(e,t,n);case 4:return us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$n(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Vu(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,K(ri,r._currentValue),r._currentValue=l,i!==null)if(at(i.value,l)){if(i.children===o.children&&!Le.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=wt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),ra(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ra(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Mn(t,n),o=Xe(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=tt(r,t.pendingProps),o=tt(r.type,o),$u(e,t,r,o,n);case 15:return Cp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:tt(r,o),Lo(e,t),t.tag=1,De(r)?(e=!0,ei(t)):e=!1,Mn(t,n),Xd(t,r,o),ia(t,r,o,n),sa(null,t,r,!0,e,n);case 19:return Fp(e,t,n);case 22:return kp(e,t,n)}throw Error(E(156,t.tag))};function $p(e,t){return md(e,t)}function yh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(e,t,n,r){return new yh(e,t,n,r)}function js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wh(e){if(typeof e=="function")return js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$a)return 11;if(e===Ha)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=Ge(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")js(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Cn:return ln(n.children,o,i,t);case Va:l=8,o|=8;break;case Pl:return e=Ge(12,n,t,o|2),e.elementType=Pl,e.lanes=i,e;case Al:return e=Ge(13,n,t,o),e.elementType=Al,e.lanes=i,e;case Il:return e=Ge(19,n,t,o),e.elementType=Il,e.lanes=i,e;case Zc:return bi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jc:l=10;break e;case Xc:l=9;break e;case $a:l=11;break e;case Ha:l=14;break e;case Nt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Ge(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function ln(e,t,n,r){return e=Ge(7,e,r,t),e.lanes=n,e}function bi(e,t,n,r){return e=Ge(22,e,r,t),e.elementType=Zc,e.lanes=n,e.stateNode={isHidden:!1},e}function vl(e,t,n){return e=Ge(6,e,null,t),e.lanes=n,e}function yl(e,t,n){return t=Ge(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qi(0),this.expirationTimes=qi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Es(e,t,n,r,o,i,l,a,u){return e=new Sh(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ge(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ss(i),e}function Ch(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hp(e){if(!e)return Kt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(De(n))return $d(e,n,t)}return t}function Wp(e,t,n,r,o,i,l,a,u){return e=Es(n,r,!0,e,o,i,l,a,u),e.context=Hp(null),n=e.current,r=Ne(),o=Ut(n),i=wt(r,o),i.callback=t??null,Bt(n,i,o),e.current.lanes=o,qr(e,o,r),Me(e,r),e}function Oi(e,t,n,r){var o=t.current,i=Ne(),l=Ut(o);return n=Hp(n),t.context===null?t.context=n:t.pendingContext=n,t=wt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Bt(o,t,l),e!==null&&(it(e,o,l,i),Oo(e,o,l)),l}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zs(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}function kh(){return null}var Qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fs(e){this._internalRoot=e}Ti.prototype.render=Fs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Oi(e,t,null,null)};Ti.prototype.unmount=Fs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Oi(null,e,null,null)}),t[Ct]=null}};function Ti(e){this._internalRoot=e}Ti.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&jd(e)}};function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nc(){}function jh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=fi(l);i.call(c)}}var l=Wp(t,r,e,0,null,!1,!1,"",nc);return e._reactRootContainer=l,e[Ct]=l.current,_r(e.nodeType===8?e.parentNode:e),pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=fi(u);a.call(c)}}var u=Es(e,0,!1,null,null,!1,!1,"",nc);return e._reactRootContainer=u,e[Ct]=u.current,_r(e.nodeType===8?e.parentNode:e),pn(function(){Oi(t,u,n,r)}),u}function Li(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=fi(l);a.call(u)}}Oi(t,l,e,o)}else l=jh(n,t,e,o,r);return fi(l)}wd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(Ka(t,n|1),Me(t,oe()),!(V&6)&&(Qn=oe()+500,Jt()))}break;case 13:pn(function(){var r=kt(e,1);if(r!==null){var o=Ne();it(r,e,1,o)}}),zs(e,1)}};Ya=function(e){if(e.tag===13){var t=kt(e,134217728);if(t!==null){var n=Ne();it(t,e,134217728,n)}zs(e,134217728)}};Sd=function(e){if(e.tag===13){var t=Ut(e),n=kt(e,t);if(n!==null){var r=Ne();it(n,e,t,r)}zs(e,t)}};Cd=function(){return Q};kd=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};Ul=function(e,t,n){switch(t){case"input":if(Tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=zi(r);if(!o)throw Error(E(90));ed(r),Tl(r,o)}}}break;case"textarea":nd(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};ud=Ss;cd=pn;var Eh={usingClientEntryPoint:!1,Events:[to,zn,zi,ad,sd,Ss]},hr={findFiberByHostInstance:en,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zh={bundleType:hr.bundleType,version:hr.version,rendererPackageName:hr.rendererPackageName,rendererConfig:hr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fd(e),e===null?null:e.stateNode},findFiberByHostInstance:hr.findFiberByHostInstance||kh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Ci=ko.inject(zh),pt=ko}catch{}}We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eh;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ns(t))throw Error(E(200));return Ch(e,t,null,n)};We.createRoot=function(e,t){if(!Ns(e))throw Error(E(299));var n=!1,r="",o=Qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Es(e,1,!1,null,null,n,!1,r,o),e[Ct]=t.current,_r(e.nodeType===8?e.parentNode:e),new Fs(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=fd(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return pn(e)};We.hydrate=function(e,t,n){if(!Ri(t))throw Error(E(200));return Li(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Ns(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Qp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Wp(t,null,e,1,n??null,o,!1,i,l),e[Ct]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ti(t)};We.render=function(e,t,n){if(!Ri(t))throw Error(E(200));return Li(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(E(40));return e._reactRootContainer?(pn(function(){Li(null,null,e,!1,function(){e._reactRootContainer=null,e[Ct]=null})}),!0):!1};We.unstable_batchedUpdates=Ss;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Li(e,t,n,!1,r)};We.version="18.2.0-next-9e3b772b8-20220608";function Kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp)}catch(e){console.error(e)}}Kp(),Wc.exports=We;var Fh=Wc.exports,rc=Fh;Fl.createRoot=rc.createRoot,Fl.hydrateRoot=rc.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gr(){return Gr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gr.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const oc="popstate";function Nh(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return wa("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:hi(o)}return Ah(t,n,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ps(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ph(){return Math.random().toString(36).substr(2,8)}function ic(e,t){return{usr:e.state,key:e.key,idx:t}}function wa(e,t,n,r){return n===void 0&&(n=null),Gr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?nr(t):t,{state:n,key:t&&t.key||r||Ph()})}function hi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function nr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ah(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Tt.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(Gr({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function m(){a=Tt.Pop;let P=h(),f=P==null?null:P-c;c=P,u&&u({action:a,location:C.location,delta:f})}function g(P,f){a=Tt.Push;let d=wa(C.location,P,f);n&&n(d,P),c=h()+1;let p=ic(d,c),w=C.createHref(d);try{l.pushState(p,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(w)}i&&u&&u({action:a,location:C.location,delta:1})}function y(P,f){a=Tt.Replace;let d=wa(C.location,P,f);n&&n(d,P),c=h();let p=ic(d,c),w=C.createHref(d);l.replaceState(p,"",w),i&&u&&u({action:a,location:C.location,delta:0})}function S(P){let f=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof P=="string"?P:hi(P);return ae(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let C={get action(){return a},get location(){return e(o,l)},listen(P){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(oc,m),u=P,()=>{o.removeEventListener(oc,m),u=null}},createHref(P){return t(o,P)},createURL:S,encodeLocation(P){let f=S(P);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:y,go(P){return l.go(P)}};return C}var lc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(lc||(lc={}));function Ih(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?nr(t):t,o=As(r.pathname||"/",n);if(o==null)return null;let i=Yp(e);bh(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=Uh(i[a],Hh(o));return l}function Yp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(ae(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=$t([r,u.relativePath]),h=n.concat(u);i.children&&i.children.length>0&&(ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Yp(i.children,t,h,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Bh(c,i.index),routesMeta:h})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let u of Gp(i.path))o(i,l,u)}),t}function Gp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Gp(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function bh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_h(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Oh=/^:\w+$/,Th=3,Rh=2,Lh=1,Dh=10,Mh=-2,ac=e=>e==="*";function Bh(e,t){let n=e.split("/"),r=n.length;return n.some(ac)&&(r+=Mh),t&&(r+=Rh),n.filter(o=>!ac(o)).reduce((o,i)=>o+(Oh.test(i)?Th:i===""?Lh:Dh),r)}function _h(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Uh(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],u=l===n.length-1,c=o==="/"?t:t.slice(o.length)||"/",h=Vh({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},c);if(!h)return null;Object.assign(r,h.params);let m=a.route;i.push({params:r,pathname:$t([o,h.pathname]),pathnameBase:Yh($t([o,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(o=$t([o,h.pathnameBase]))}return i}function Vh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$h(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,h,m)=>{if(h==="*"){let g=a[m]||"";l=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return c[h]=Wh(a[m]||"",h),c},{}),pathname:i,pathnameBase:l,pattern:e}}function $h(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ps(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Hh(e){try{return decodeURI(e)}catch(t){return Ps(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Wh(e,t){try{return decodeURIComponent(e)}catch(n){return Ps(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function As(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qh(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?nr(e):e;return{pathname:n?n.startsWith("/")?n:Kh(n,t):t,search:Gh(r),hash:Jh(o)}}function Kh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function wl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xp(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=nr(e):(o=Gr({},e),ae(!o.pathname||!o.pathname.includes("?"),wl("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),wl("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),wl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let m=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}a=m>=0?t[m]:"/"}let u=Qh(o,a),c=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const $t=e=>e.join("/").replace(/\/\/+/g,"/"),Yh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zp=["post","put","patch","delete"];new Set(Zp);const Zh=["get",...Zp];new Set(Zh);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mi.apply(this,arguments)}const Is=v.createContext(null),qh=v.createContext(null),rr=v.createContext(null),Di=v.createContext(null),mn=v.createContext({outlet:null,matches:[],isDataRoute:!1}),qp=v.createContext(null);function em(e,t){let{relative:n}=t===void 0?{}:t;ro()||ae(!1);let{basename:r,navigator:o}=v.useContext(rr),{hash:i,pathname:l,search:a}=tf(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:$t([r,l])),o.createHref({pathname:u,search:a,hash:i})}function ro(){return v.useContext(Di)!=null}function oo(){return ro()||ae(!1),v.useContext(Di).location}function ef(e){v.useContext(rr).static||v.useLayoutEffect(e)}function bs(){let{isDataRoute:e}=v.useContext(mn);return e?fm():tm()}function tm(){ro()||ae(!1);let e=v.useContext(Is),{basename:t,navigator:n}=v.useContext(rr),{matches:r}=v.useContext(mn),{pathname:o}=oo(),i=JSON.stringify(Jp(r).map(u=>u.pathnameBase)),l=v.useRef(!1);return ef(()=>{l.current=!0}),v.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let h=Xp(u,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:$t([t,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[t,n,i,o,e])}function tf(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=v.useContext(mn),{pathname:o}=oo(),i=JSON.stringify(Jp(r).map(l=>l.pathnameBase));return v.useMemo(()=>Xp(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function nm(e,t){return rm(e,t)}function rm(e,t,n){ro()||ae(!1);let{navigator:r}=v.useContext(rr),{matches:o}=v.useContext(mn),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let u=oo(),c;if(t){var h;let C=typeof t=="string"?nr(t):t;a==="/"||(h=C.pathname)!=null&&h.startsWith(a)||ae(!1),c=C}else c=u;let m=c.pathname||"/",g=a==="/"?m:m.slice(a.length)||"/",y=Ih(e,{pathname:g}),S=sm(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:$t([a,r.encodeLocation?r.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?a:$t([a,r.encodeLocation?r.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),o,n);return t&&S?v.createElement(Di.Provider,{value:{location:mi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Tt.Pop}},S):S}function om(){let e=pm(),t=Xh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:o},n):null,i)}const im=v.createElement(om,null);class lm extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?v.createElement(mn.Provider,{value:this.props.routeContext},v.createElement(qp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function am(e){let{routeContext:t,match:n,children:r}=e,o=v.useContext(Is);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(mn.Provider,{value:t},r)}function sm(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=i.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id]));a>=0||ae(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,u,c)=>{let h=u.route.id?l==null?void 0:l[u.route.id]:null,m=null;n&&(m=u.route.errorElement||im);let g=t.concat(i.slice(0,c+1)),y=()=>{let S;return h?S=m:u.route.Component?S=v.createElement(u.route.Component,null):u.route.element?S=u.route.element:S=a,v.createElement(am,{match:u,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:S})};return n&&(u.route.ErrorBoundary||u.route.errorElement||c===0)?v.createElement(lm,{location:n.location,revalidation:n.revalidation,component:m,error:h,children:y(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):y()},null)}var Sa;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Sa||(Sa={}));var Jr;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Jr||(Jr={}));function um(e){let t=v.useContext(Is);return t||ae(!1),t}function cm(e){let t=v.useContext(qh);return t||ae(!1),t}function dm(e){let t=v.useContext(mn);return t||ae(!1),t}function nf(e){let t=dm(),n=t.matches[t.matches.length-1];return n.route.id||ae(!1),n.route.id}function pm(){var e;let t=v.useContext(qp),n=cm(Jr.UseRouteError),r=nf(Jr.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function fm(){let{router:e}=um(Sa.UseNavigateStable),t=nf(Jr.UseNavigateStable),n=v.useRef(!1);return ef(()=>{n.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,mi({fromRouteId:t},i)))},[e,t])}function ht(e){ae(!1)}function hm(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Tt.Pop,navigator:i,static:l=!1}=e;ro()&&ae(!1);let a=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=nr(r));let{pathname:c="/",search:h="",hash:m="",state:g=null,key:y="default"}=r,S=v.useMemo(()=>{let C=As(c,a);return C==null?null:{location:{pathname:C,search:h,hash:m,state:g,key:y},navigationType:o}},[a,c,h,m,g,y,o]);return S==null?null:v.createElement(rr.Provider,{value:u},v.createElement(Di.Provider,{children:n,value:S}))}function mm(e){let{children:t,location:n}=e;return nm(Ca(t),n)}var sc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(sc||(sc={}));new Promise(()=>{});function Ca(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(r,o)=>{if(!v.isValidElement(r))return;let i=[...t,o];if(r.type===v.Fragment){n.push.apply(n,Ca(r.props.children,i));return}r.type!==ht&&ae(!1),!r.props.index||!r.props.children||ae(!1);let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ca(r.props.children,i)),n.push(l)}),n}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}function gm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function xm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vm(e,t){return e.button===0&&(!t||t==="_self")&&!xm(e)}const ym=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],wm="startTransition",uc=x0[wm];function Sm(e){let{basename:t,children:n,future:r,window:o}=e,i=v.useRef();i.current==null&&(i.current=Nh({window:o,v5Compat:!0}));let l=i.current,[a,u]=v.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=v.useCallback(m=>{c&&uc?uc(()=>u(m)):u(m)},[u,c]);return v.useLayoutEffect(()=>l.listen(h),[l,h]),v.createElement(hm,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l})}const Cm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",km=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mi=v.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:u,to:c,preventScrollReset:h}=t,m=gm(t,ym),{basename:g}=v.useContext(rr),y,S=!1;if(typeof c=="string"&&km.test(c)&&(y=c,Cm))try{let d=new URL(window.location.href),p=c.startsWith("//")?new URL(d.protocol+c):new URL(c),w=As(p.pathname,g);p.origin===d.origin&&w!=null?c=w+p.search+p.hash:S=!0}catch{}let C=em(c,{relative:o}),P=jm(c,{replace:l,state:a,target:u,preventScrollReset:h,relative:o});function f(d){r&&r(d),d.defaultPrevented||P(d)}return v.createElement("a",ka({},m,{href:y||C,onClick:S||i?r:f,ref:n,target:u}))});var cc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(cc||(cc={}));var dc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dc||(dc={}));function jm(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=bs(),u=oo(),c=tf(e,{relative:l});return v.useCallback(h=>{if(vm(h,n)){h.preventDefault();let m=r!==void 0?r:hi(u)===hi(c);a(e,{replace:m,state:o,preventScrollReset:i,relative:l})}},[u,a,c,r,o,n,e,i,l])}var je=function(){return je=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},je.apply(this,arguments)};function Kn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var G="-ms-",Ir="-moz-",H="-webkit-",rf="comm",Bi="rule",Os="decl",Em="@import",of="@keyframes",zm="@layer",Fm=Math.abs,Ts=String.fromCharCode,ja=Object.assign;function Nm(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function lf(e){return e.trim()}function gt(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function _o(e,t){return e.indexOf(t)}function me(e,t){return e.charCodeAt(t)|0}function Yn(e,t,n){return e.slice(t,n)}function ct(e){return e.length}function af(e){return e.length}function Sr(e,t){return t.push(e),e}function Pm(e,t){return e.map(t).join("")}function pc(e,t){return e.filter(function(n){return!gt(n,t)})}var _i=1,Gn=1,sf=0,qe=0,ie=0,or="";function Ui(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:_i,column:Gn,length:l,return:"",siblings:a}}function Ft(e,t){return ja(Ui("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function yn(e){for(;e.root;)e=Ft(e.root,{children:[e]});Sr(e,e.siblings)}function Am(){return ie}function Im(){return ie=qe>0?me(or,--qe):0,Gn--,ie===10&&(Gn=1,_i--),ie}function lt(){return ie=qe<sf?me(or,qe++):0,Gn++,ie===10&&(Gn=1,_i++),ie}function an(){return me(or,qe)}function Uo(){return qe}function Vi(e,t){return Yn(or,e,t)}function Ea(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bm(e){return _i=Gn=1,sf=ct(or=e),qe=0,[]}function Om(e){return or="",e}function Sl(e){return lf(Vi(qe-1,za(e===91?e+2:e===40?e+1:e)))}function Tm(e){for(;(ie=an())&&ie<33;)lt();return Ea(e)>2||Ea(ie)>3?"":" "}function Rm(e,t){for(;--t&&lt()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return Vi(e,Uo()+(t<6&&an()==32&&lt()==32))}function za(e){for(;lt();)switch(ie){case e:return qe;case 34:case 39:e!==34&&e!==39&&za(ie);break;case 40:e===41&&za(e);break;case 92:lt();break}return qe}function Lm(e,t){for(;lt()&&e+ie!==47+10;)if(e+ie===42+42&&an()===47)break;return"/*"+Vi(t,qe-1)+"*"+Ts(e===47?e:lt())}function Dm(e){for(;!Ea(an());)lt();return Vi(e,qe)}function Mm(e){return Om(Vo("",null,null,null,[""],e=bm(e),0,[0],e))}function Vo(e,t,n,r,o,i,l,a,u){for(var c=0,h=0,m=l,g=0,y=0,S=0,C=1,P=1,f=1,d=0,p="",w=o,k=i,z=r,x=p;P;)switch(S=d,d=lt()){case 40:if(S!=108&&me(x,m-1)==58){_o(x+=L(Sl(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:x+=Sl(d);break;case 9:case 10:case 13:case 32:x+=Tm(S);break;case 92:x+=Rm(Uo()-1,7);continue;case 47:switch(an()){case 42:case 47:Sr(Bm(Lm(lt(),Uo()),t,n,u),u);break;default:x+="/"}break;case 123*C:a[c++]=ct(x)*f;case 125*C:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+h:f==-1&&(x=L(x,/\f/g,"")),y>0&&ct(x)-m&&Sr(y>32?hc(x+";",r,n,m-1,u):hc(L(x," ","")+";",r,n,m-2,u),u);break;case 59:x+=";";default:if(Sr(z=fc(x,t,n,c,h,o,a,p,w=[],k=[],m,i),i),d===123)if(h===0)Vo(x,t,z,z,w,i,m,a,k);else switch(g===99&&me(x,3)===110?100:g){case 100:case 108:case 109:case 115:Vo(e,z,z,r&&Sr(fc(e,z,z,0,0,o,a,p,o,w=[],m,k),k),o,k,m,a,r?w:k);break;default:Vo(x,z,z,z,[""],k,0,a,k)}}c=h=y=0,C=f=1,p=x="",m=l;break;case 58:m=1+ct(x),y=S;default:if(C<1){if(d==123)--C;else if(d==125&&C++==0&&Im()==125)continue}switch(x+=Ts(d),d*C){case 38:f=h>0?1:(x+="\f",-1);break;case 44:a[c++]=(ct(x)-1)*f,f=1;break;case 64:an()===45&&(x+=Sl(lt())),g=an(),h=m=ct(p=x+=Dm(Uo())),d++;break;case 45:S===45&&ct(x)==2&&(C=0)}}return i}function fc(e,t,n,r,o,i,l,a,u,c,h,m){for(var g=o-1,y=o===0?i:[""],S=af(y),C=0,P=0,f=0;C<r;++C)for(var d=0,p=Yn(e,g+1,g=Fm(P=l[C])),w=e;d<S;++d)(w=lf(P>0?y[d]+" "+p:L(p,/&\f/g,y[d])))&&(u[f++]=w);return Ui(e,t,n,o===0?Bi:a,u,c,h,m)}function Bm(e,t,n,r){return Ui(e,t,n,rf,Ts(Am()),Yn(e,2,-2),0,r)}function hc(e,t,n,r,o){return Ui(e,t,n,Os,Yn(e,0,r),Yn(e,r+1,-1),r,o)}function uf(e,t,n){switch(Nm(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return Ir+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+Ir+e+G+e+e;case 5936:switch(me(e,t+11)){case 114:return H+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+G+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+G+e+e;case 6165:return H+e+G+"flex-"+e+e;case 5187:return H+e+L(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return H+e+G+"flex-item-"+L(e,/flex-|-self/g,"")+(gt(e,/flex-|baseline/)?"":G+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return H+e+G+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+G+L(e,"shrink","negative")+e;case 5292:return H+e+G+L(e,"basis","preferred-size")+e;case 6060:return H+"box-"+L(e,"-grow","")+H+e+G+L(e,"grow","positive")+e;case 4554:return H+L(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!gt(e,/flex-|baseline/))return G+"grid-column-align"+Yn(e,t)+e;break;case 2592:case 3360:return G+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,gt(r.props,/grid-\w+-end/)})?~_o(e+(n=n[t].value),"span")?e:G+L(e,"-start","")+e+G+"grid-row-span:"+(~_o(n,"span")?gt(n,/\d+/):+gt(n,/\d+/)-+gt(e,/\d+/))+";":G+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return gt(r.props,/grid-\w+-start/)})?e:G+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ct(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+Ir+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~_o(e,"stretch")?uf(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,u,c){return G+o+":"+i+c+(l?G+o+"-span:"+(a?u:+u-+i)+c:"")+e});case 4949:if(me(e,t+6)===121)return L(e,":",":"+H)+e;break;case 6444:switch(me(e,me(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(me(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+G+"$2box$3")+e;case 100:return L(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function gi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function _m(e,t,n,r){switch(e.type){case zm:if(e.children.length)break;case Em:case Os:return e.return=e.return||e.value;case rf:return"";case of:return e.return=e.value+"{"+gi(e.children,r)+"}";case Bi:if(!ct(e.value=e.props.join(",")))return""}return ct(n=gi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Um(e){var t=af(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Vm(e){return function(t){t.root||(t=t.return)&&e(t)}}function $m(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Os:e.return=uf(e.value,e.length,n);return;case of:return gi([Ft(e,{value:L(e.value,"@","@"+H)})],r);case Bi:if(e.length)return Pm(n=e.props,function(o){switch(gt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yn(Ft(e,{props:[L(o,/:(read-\w+)/,":"+Ir+"$1")]})),yn(Ft(e,{props:[o]})),ja(e,{props:pc(n,r)});break;case"::placeholder":yn(Ft(e,{props:[L(o,/:(plac\w+)/,":"+H+"input-$1")]})),yn(Ft(e,{props:[L(o,/:(plac\w+)/,":"+Ir+"$1")]})),yn(Ft(e,{props:[L(o,/:(plac\w+)/,G+"input-$1")]})),yn(Ft(e,{props:[o]})),ja(e,{props:pc(n,r)});break}return""})}}var Hm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Rs=typeof window<"u"&&"HTMLElement"in window,Wm=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Qm={},$i=Object.freeze([]),Xn=Object.freeze({});function cf(e,t,n){return n===void 0&&(n=Xn),e.theme!==n.theme&&e.theme||t||n.theme}var df=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Km=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ym=/(^-|-$)/g;function mc(e){return e.replace(Km,"-").replace(Ym,"")}var Gm=/(a)(d)/gi,gc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=gc(t%52)+n;return(gc(t%52)+n).replace(Gm,"$1-$2")}var Cl,On=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},pf=function(e){return On(5381,e)};function Ls(e){return Fa(pf(e)>>>0)}function Jm(e){return e.displayName||e.name||"Component"}function kl(e){return typeof e=="string"&&!0}var ff=typeof Symbol=="function"&&Symbol.for,hf=ff?Symbol.for("react.memo"):60115,Xm=ff?Symbol.for("react.forward_ref"):60112,Zm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eg=((Cl={})[Xm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cl[hf]=mf,Cl);function xc(e){return("type"in(t=e)&&t.type.$$typeof)===hf?mf:"$$typeof"in e?eg[e.$$typeof]:Zm;var t}var tg=Object.defineProperty,ng=Object.getOwnPropertyNames,vc=Object.getOwnPropertySymbols,rg=Object.getOwnPropertyDescriptor,og=Object.getPrototypeOf,yc=Object.prototype;function gf(e,t,n){if(typeof t!="string"){if(yc){var r=og(t);r&&r!==yc&&gf(e,r,n)}var o=ng(t);vc&&(o=o.concat(vc(t)));for(var i=xc(e),l=xc(t),a=0;a<o.length;++a){var u=o[a];if(!(u in qm||n&&n[u]||l&&u in l||i&&u in i)){var c=rg(t,u);try{tg(e,u,c)}catch{}}}}return e}function Zn(e){return typeof e=="function"}function Ds(e){return typeof e=="object"&&"styledComponentId"in e}function rn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xi(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Xr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Na(e,t,n){if(n===void 0&&(n=!1),!n&&!Xr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Na(e[r],t[r]);else if(Xr(t))for(var r in t)e[r]=Na(e[r],t[r]);return e}function Ms(e,t){Object.defineProperty(e,"toString",{value:t})}function io(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ig=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw io(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),$o=new Map,vi=new Map,jl=1,jo=function(e){if($o.has(e))return $o.get(e);for(;vi.has(jl);)jl++;var t=jl++;return $o.set(e,t),vi.set(t,e),t},lg=function(e,t){$o.set(e,t),vi.set(t,e)},ag="style[".concat(Jn,"][").concat("data-styled-version",'="').concat("6.0.5",'"]'),sg=new RegExp("^".concat(Jn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ug=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},cg=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var u=a.match(sg);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(lg(h,c),ug(e,h,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}};function dg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Jn,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Jn,"active"),r.setAttribute("data-styled-version","6.0.5");var l=dg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},pg=function(){function e(t){this.element=xf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw io(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),fg=function(){function e(t){this.element=xf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),hg=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),wc=Rs,mg={isServer:!Rs,useCSSOMInjection:!Wm},yi=function(){function e(t,n,r){t===void 0&&(t=Xn),n===void 0&&(n={});var o=this;this.options=je(je({},mg),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Rs&&wc&&(wc=!1,function(i){for(var l=document.querySelectorAll(ag),a=0,u=l.length;a<u;a++){var c=l[a];c&&c.getAttribute(Jn)!=="active"&&(cg(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Ms(this,function(){return function(i){for(var l=i.getTag(),a=l.length,u="",c=function(m){var g=function(f){return vi.get(f)}(m);if(g===void 0)return"continue";var y=i.names.get(g),S=l.getGroup(m);if(y===void 0||S.length===0)return"continue";var C="".concat(Jn,".g").concat(m,'[id="').concat(g,'"]'),P="";y!==void 0&&y.forEach(function(f){f.length>0&&(P+="".concat(f,","))}),u+="".concat(S).concat(C,'{content:"').concat(P,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)c(h);return u}(o)})}return e.registerId=function(t){return jo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(je(je({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new hg(o):r?new pg(o):new fg(o)}(this.options),new ig(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(jo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(jo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(jo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),gg=/&/g,xg=/^\s*\/\/.*$/gm;function vf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vf(n.children,t)),n})}function vg(e){var t,n,r,o=e===void 0?Xn:e,i=o.options,l=i===void 0?Xn:i,a=o.plugins,u=a===void 0?$i:a,c=function(g,y,S){return S===n||S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):g},h=u.slice();h.push(function(g){g.type===Bi&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(gg,n).replace(r,c))}),l.prefix&&h.push($m),h.push(_m);var m=function(g,y,S,C){y===void 0&&(y=""),S===void 0&&(S=""),C===void 0&&(C="&"),t=C,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var P=g.replace(xg,""),f=Mm(S||y?"".concat(S," ").concat(y," { ").concat(P," }"):P);l.namespace&&(f=vf(f,l.namespace));var d=[];return gi(f,Um(h.concat(Vm(function(p){return d.push(p)})))),d};return m.hash=u.length?u.reduce(function(g,y){return y.name||io(15),On(g,y.name)},5381).toString():"",m}var yg=new yi,Pa=vg(),yf=pe.createContext({shouldForwardProp:void 0,styleSheet:yg,stylis:Pa});yf.Consumer;pe.createContext(void 0);function Aa(){return v.useContext(yf)}var wf=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Pa);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ms(this,function(){throw io(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Pa),this.name+t.hash},e}(),wg=function(e){return e>="A"&&e<="Z"};function Sc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;wg(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sf=function(e){return e==null||e===!1||e===""},Cf=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Sf(i)&&(Array.isArray(i)&&i.isCss||Zn(i)?r.push("".concat(Sc(o),":"),i,";"):Xr(i)?r.push.apply(r,Kn(Kn(["".concat(o," {")],Cf(i),!1),["}"],!1)):r.push("".concat(Sc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Hm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ht(e,t,n,r){if(Sf(e))return[];if(Ds(e))return[".".concat(e.styledComponentId)];if(Zn(e)){if(!Zn(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Ht(o,t,n,r)}var i;return e instanceof wf?n?(e.inject(n,r),[e.getName(r)]):[e]:Xr(e)?Cf(e):Array.isArray(e)?Array.prototype.concat.apply($i,e.map(function(l){return Ht(l,t,n,r)})):[e.toString()]}function kf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zn(n)&&!Ds(n))return!1}return!0}var Sg=pf("6.0.5"),Cg=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&kf(t),this.componentId=n,this.baseHash=On(Sg,n),this.baseStyle=r,yi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=rn(o,this.staticRulesId);else{var i=xi(Ht(this.rules,t,n,r)),l=Fa(On(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=rn(o,l),this.staticRulesId=l}else{for(var u=On(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var m=this.rules[h];if(typeof m=="string")c+=m;else if(m){var g=xi(Ht(m,t,n,r));u=On(u,g),c+=g}}if(c){var y=Fa(u>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),o=rn(o,y)}}return o},e}(),Bs=pe.createContext(void 0);Bs.Consumer;var El={};function kg(e,t,n){var r=Ds(e),o=e,i=!kl(e),l=t.attrs,a=l===void 0?$i:l,u=t.componentId,c=u===void 0?function(p,w){var k=typeof p!="string"?"sc":mc(p);El[k]=(El[k]||0)+1;var z="".concat(k,"-").concat(Ls("6.0.5"+k+El[k]));return w?"".concat(w,"-").concat(z):z}(t.displayName,t.parentComponentId):u,h=t.displayName;h===void 0&&function(p){return kl(p)?"styled.".concat(p):"Styled(".concat(Jm(p),")")}(e);var m=t.displayName&&t.componentId?"".concat(mc(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;y=function(p,w){return S(p,w)&&C(p,w)}}else y=S}var P=new Cg(n,m,r?o.componentStyle:void 0);function f(p,w){return function(k,z,x){var N=k.attrs,R=k.componentStyle,I=k.defaultProps,se=k.foldedComponentIds,Be=k.styledComponentId,ze=k.target,Ie=pe.useContext(Bs),be=Aa(),ue=k.shouldForwardProp||be.shouldForwardProp,X=function(_e,ce,Oe){for(var ne,we=je(je({},ce),{className:void 0,theme:Oe}),xn=0;xn<_e.length;xn+=1){var D=Zn(ne=_e[xn])?ne(we):ne;for(var T in D)we[T]=T==="className"?rn(we[T],D[T]):T==="style"?je(je({},we[T]),D[T]):D[T]}return ce.className&&(we.className=rn(we.className,ce.className)),we}(N,z,cf(z,Ie,I)||Xn),F=X.as||ze,b={};for(var O in X)X[O]===void 0||O[0]==="$"||O==="as"||O==="theme"||(O==="forwardedAs"?b.as=X.forwardedAs:ue&&!ue(O,F)||(b[O]=X[O]));var $=function(_e,ce){var Oe=Aa(),ne=_e.generateAndInjectStyles(ce,Oe.styleSheet,Oe.stylis);return ne}(R,X),W=rn(se,Be);return $&&(W+=" "+$),X.className&&(W+=" "+X.className),b[kl(F)&&!df.has(F)?"class":"className"]=W,b.ref=x,v.createElement(F,b)}(d,p,w)}var d=pe.forwardRef(f);return d.attrs=g,d.componentStyle=P,d.shouldForwardProp=y,d.foldedComponentIds=r?rn(o.foldedComponentIds,o.styledComponentId):"",d.styledComponentId=m,d.target=r?o.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?function(w){for(var k=[],z=1;z<arguments.length;z++)k[z-1]=arguments[z];for(var x=0,N=k;x<N.length;x++)Na(w,N[x],!0);return w}({},o.defaultProps,p):p}}),Ms(d,function(){return".".concat(d.styledComponentId)}),i&&gf(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Cc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var kc=function(e){return Object.assign(e,{isCss:!0})};function ir(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Zn(e)||Xr(e)){var r=e;return kc(Ht(Cc($i,Kn([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Ht(o):kc(Ht(Cc(o,t)))}function Ia(e,t,n){if(n===void 0&&(n=Xn),!t)throw io(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,ir.apply(void 0,Kn([o],i,!1)))};return r.attrs=function(o){return Ia(e,t,je(je({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Ia(e,t,je(je({},n),o))},r}var jf=function(e){return Ia(kg,e)},j=jf;df.forEach(function(e){j[e]=jf(e)});var jg=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=kf(t),yi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(xi(Ht(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&yi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Eg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ir.apply(void 0,Kn([e],t,!1)),o="sc-global-".concat(Ls(JSON.stringify(r))),i=new jg(r,o),l=function(u){var c=Aa(),h=pe.useContext(Bs),m=pe.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(m,u,c.styleSheet,h,c.stylis),pe.useLayoutEffect(function(){if(!c.styleSheet.server)return a(m,u,c.styleSheet,h,c.stylis),function(){return i.removeStyles(m,c.styleSheet)}},[m,u,c.styleSheet,h,c.stylis]),null};function a(u,c,h,m,g){if(i.isStatic)i.renderStyles(u,Qm,h,g);else{var y=je(je({},c),{theme:cf(c,m,l.defaultProps)});i.renderStyles(u,y,h,g)}}return pe.memo(l)}function _s(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=xi(ir.apply(void 0,Kn([e],t,!1))),o=Ls(r);return new wf(o,r)}var Ef={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jc=pe.createContext&&pe.createContext(Ef),Wt=globalThis&&globalThis.__assign||function(){return Wt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Wt.apply(this,arguments)},zg=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function zf(e){return e&&e.map(function(t,n){return pe.createElement(t.tag,Wt({key:n},t.attr),zf(t.child))})}function U(e){return function(t){return pe.createElement(Fg,Wt({attr:Wt({},e.attr)},t),zf(e.child))}}function Fg(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=zg(e,["attr","size","title"]),a=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),pe.createElement("svg",Wt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Wt(Wt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&pe.createElement("title",null,i),e.children)};return jc!==void 0?pe.createElement(jc.Consumer,null,function(n){return t(n)}):t(Ef)}function Ff(e){return U({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FF9800",d:"M5,35V13c0-2.2,1.8-4,4-4h30c2.2,0,4,1.8,4,4v22c0,2.2-1.8,4-4,4H9C6.8,39,5,37.2,5,35z"}},{tag:"g",attr:{fill:"#FFD54F"},child:[{tag:"path",attr:{d:"M43,21v-2H31c-1.1,0-2-0.9-2-2s0.9-2,2-2h1v-2h-1c-2.2,0-4,1.8-4,4s1.8,4,4,4h3v6h-3c-2.8,0-5,2.2-5,5 s2.2,5,5,5h2v-2h-2c-1.7,0-3-1.3-3-3s1.3-3,3-3h12v-2h-7v-6H43z"}},{tag:"path",attr:{d:"M17,27h-3v-6h3c2.2,0,4-1.8,4-4s-1.8-4-4-4h-3v2h3c1.1,0,2,0.9,2,2s-0.9,2-2,2H5v2h7v6H5v2h12 c1.7,0,3,1.3,3,3s-1.3,3-3,3h-2v2h2c2.8,0,5-2.2,5-5S19.8,27,17,27z"}}]}]})(e)}function Nf(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z"}}]})(e)}function Ng(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v160h896V192c0-17.7-14.3-32-32-32zM64 832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V440H64v392zm579-184c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72z"}}]})(e)}function Ec(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"}}]})(e)}function zl(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(e)}function Pf(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attr:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]})(e)}function Us(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]})(e)}function Af(e){return U({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 1 0 128 0 64 64 0 1 0-128 0z"}}]})(e)}function Pg(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M396.6 69c-6.2-.15-13.3.95-21.5 3.47L54.52 171.3c-16.44 5.1-25.94 12.4-30.67 21.4-4.78 8.9-5.39 21-.36 37.4l5.9 19.2L439.7 122.9l-5.9-19.3c-5.1-16.42-12.4-26-21.4-30.67-4.5-2.41-9.7-3.79-15.8-3.93zm59.3 106.7L45.65 302.2l32.66 106.3c5.03 16.3 12.32 25.9 21.29 30.6 9 4.8 21 5.5 37.4.5l320.5-98.8c16.4-5.1 25.9-12.4 30.6-21.4 4.8-9 5.5-21 .5-37.4z"}}]})(e)}const zc=j.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 440px;
  margin-top: 15px;

  img{
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    width: 70%;
    position: absolute;
  }

  .border-color{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 100%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  @media (max-width: 1260px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;
      margin: auto;
    }

    @media (max-width: 926px) {
      width: 300px;
      height: 200px;
    }
`,Ag=j.div`
    width: 100%;
    height: 200px;
    max-width: 320px;
    position: relative; 
    border-radius: 16px;
    border: 3px dashed #3D3B37;
    background-color: #D9D9D999;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    
    text-align: center;
    align-items: center;
    justify-content: center;

    span{
      font-size: 20px;
      font-weight: 700;
      color: #3D3B3799;
      margin-bottom: 20px;
    }
`,Ig=j(Pg)`
    font-size: 80px;
    color: #3D3B3799;

`,bg=j(Af)`
  position: absolute;
  font-size: 26px;
  display: flex;
  right: 28px;
  top: 10px;
  transform: rotate(90deg);
  z-index: 2;
`,Og=j.div`
  width: 100%;
  height: 200px;
  max-width: 320px;
  position: relative; 
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.60);
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,Tg=j.div`
.custom-title{
  width: 100%;
  margin-top: 20px;
}

label{
    text-align: center;
    margin: auto;
    font-size: 14px;
    opacity: 0.8;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  select{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 70%;
    padding: 12px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
    background-color: #E9E9E9;
  }

  @media ( max-width: 1080px ){

    .title-color{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

}

  @media ( max-width: 926px ){
  
    select{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
      width: 74%;
  }
    .custom-title{
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
      font-size: 16px;
      
    }
  }

  @media (max-width: 1260px) {
    .custom-title{
          width: 400px;
          display: flex;
          text-align: center;
          align-items: center;
          justify-content: center;
          margin: 10px auto;

        }
    }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    .custom-title{
      font-size: 14px;
      width: 300px;
      }
  }
`,Rg=j.div`
color: #000000;
color: -webkit-linear-gradient(to bottom, #434343, #000000);
color: linear-gradient(to bottom, #434343, #000000);


  h3 {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
    margin-top: 130px;
    font-size: 22px;
    color: rgb(157,156,156);
    color: linear-gradient(0deg, rgba(157,156,156,1) 0%, rgba(237,237,237,1) 52%, rgba(157,156,156,1) 100%);
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    
  }
`,Lg=j(Nf)`
  position: absolute;
  font-size: 50px;
  display: flex;
  right: 16px;
  bottom: 0px;
  z-index: 2;
`;j(Ff)`
  font-size: 50px;
`;const Dg=j.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: auto;
  `,Mg=j.div`
  display: flex;
  margin-top: 45px;
  border-radius: 8px;
  min-height: 450px;
  background-color: #fff;
  


  @media (max-width: 1260px) {
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: 50px auto;
    }

    @media (max-width: 926px) {
      width: 380px;
    }
    @media (max-width: 926px) {
      width: 340px;
    }
`,Bg=j.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 550px;
  background-color: #272521;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;


  .label-name,
  .label {
    display: flex;
    font-size: 14px;
    width: 81%;
    margin-bottom: 7px;
    margin-top: 15px;
    color: #fff;
  }

  .container-label{
    width: 81%;
  }

  .container-content-input{
    display: flex; 
    flex-direction: column;
  }

  input {
    background-color: #3D3B37;
    color: #FF9900;
    width: 445px;
    margin-bottom: 10px;
    padding: 14px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
  }

  input::placeholder{
    color: #FF9900;
  }

  input:focus {
    border: 2px solid rgba(255,214,0,1);
  }

  small {
    width: 81%;
    margin-top: 5px;
    padding: 6px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #ff3b3f99;
  }

  .container-expiry-cvc {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  button {
    width: 50%;
    margin-top: 20px;
    padding: 10px;
    background: rgb(255,214,0);
    background: linear-gradient(90deg, rgba(255,214,0,1) 0%, rgba(255,153,0,1) 100%);
    border: 2px solid #FFFFFF;
    color: #111111;
    font-size: 18px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
  }

  @media (max-width: 1260px) {
    flex-direction: column; 
    width: 100%;

    .btn-confirm{
      margin-bottom: 20px;
    }
  }

  @media (max-width: 926px) {
      align-items: center;
      justify-content: center;
      margin: auto;
      min-height: 370px;
      
    .label-name,
    .label {
      width: 300px;
      padding-left: 3px;
      font-size: 12px;
      margin-top: 10px;

    }
    small{
      width: 298px;
    }

    input {
      
      width: 300px;
    }

    button {
      width: 300px;
    }
    .btn-confirm{
      margin-bottom: 20px;
    }
  }

`;function _g(e){return U({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function Ug(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function Vg(e){return U({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function If(e){return U({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function $g(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"}}]})(e)}const Hg=j.header`
    height: 60px;
    display: flex;
    background-color: #161616;

`,Wg=j(_g)`
    color: #ededed;
    width: 20px;
    height: 30px;
    margin-top: 14px;
    margin-left: 32px;
    cursor: pointer;
`,Qg=j.div`
    background-color: #272521;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 340px;
    box-shadow: 0 0 4px 4px rgba(0 ,0 ,0 ,0.25);
    left: ${e=>e.sidebar?"0":"-100%"};
    animation: showSideBar .4s;
    z-index: 996;

`,Kg=j.div`
    z-index: 2;

`,Yg=j(If)`
    position: fixed;
    color: #FF9900;
    width: 20px;
    height: 30px;
    margin-top: 14px;
    margin-left: 32px;
    cursor: pointer;

    @keyframes showSideBar {
        from{
            opacity: 0;
            width: 0;
        }to{
            opacity: 1;
            width: 300px;
        }
    }
`,Gg=j.div`
    position: fixed;
    margin-top: 70px;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
    

    img{
        display: flex;
        left: 38%;
        right: 50%;
        bottom: -60px;
        position: absolute;
        width: 80px;
    }
`,Jg=j.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #fff;
    border-radius: 5px;
    padding: 18px;
    left: ${e=>e.sidebar?"0":"-100%"};
    animation: showSideBar .4s;
    cursor: pointer;
    margin: 10px 6px 8px;
    width: 328px;
    
    &:hover{
        background-color: #403820;
    }
    &:active{
        border-bottom: 1px solid  #FF9900;;
    }
    
    > svg{
        margin: 0 20px;
        
    }

`,Xg=j(Mi)`
    text-decoration: none;
    font-weight: 700;
`;function wn({Icon:e,Text:t,to:n}){return s.jsx(s.Fragment,{children:s.jsx(Xg,{to:n,children:s.jsxs(Jg,{children:[s.jsx(e,{}),t]})})})}function Zg(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z",fill:"currentColor",strokeWidth:"0"}}]})(e)}function bf(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}},{tag:"path",attr:{d:"M12 7a5 5 0 1 0 5 5"}},{tag:"path",attr:{d:"M13 3.055a9 9 0 1 0 7.941 7.945"}},{tag:"path",attr:{d:"M15 6v3h3l3 -3h-3v-3z"}},{tag:"path",attr:{d:"M15 9l-3 3"}}]})(e)}function qg(e){return U({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M216,36H40A20,20,0,0,0,20,56V216a12,12,0,0,0,17.37,10.73L64,213.42l26.63,13.31a12,12,0,0,0,10.74,0L128,213.42l26.63,13.31a12,12,0,0,0,10.74,0L192,213.42l26.63,13.31A12,12,0,0,0,236,216V56A20,20,0,0,0,216,36Zm-4,160.58-14.63-7.31a12,12,0,0,0-10.74,0L160,202.58l-26.63-13.31a12,12,0,0,0-10.74,0L96,202.58,69.37,189.27a12,12,0,0,0-10.74,0L44,196.58V60H212ZM136,108a12,12,0,0,1,12-12h36a12,12,0,0,1,0,24H148A12,12,0,0,1,136,108Zm0,40a12,12,0,0,1,12-12h36a12,12,0,0,1,0,24H148A12,12,0,0,1,136,148ZM72,172h40a12,12,0,0,0,12-12V96a12,12,0,0,0-12-12H72A12,12,0,0,0,60,96v64A12,12,0,0,0,72,172Zm12-64h16v40H84Z"}}]})(e)}function Of(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.45 16.52l-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7a3 3 0 004.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89zM8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71a3 3 0 00-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89z"}},{tag:"path",attr:{d:"M21.11 9.85l-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42a1.5 1.5 0 01-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3a3 3 0 000 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26a3.042 3.042 0 00-.02-4.29z"}}]})(e)}function e2(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h10v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm4 9v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3z"}}]})(e)}const Tf="/app-banco/assets/BANK-removebg-preview 1-7f81a305.png";function t2(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z"}}]})(e)}function n2(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"}}]})(e)}function r2(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"}}]})(e)}function o2(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z"}}]})(e)}function i2(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"}},{tag:"path",attr:{d:"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z"}}]})(e)}function l2(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"}},{tag:"path",attr:{d:"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"}},{tag:"path",attr:{d:"M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"}}]})(e)}function a2(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}},{tag:"path",attr:{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"}}]})(e)}function s2(e){return U({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"}},{tag:"path",attr:{d:"M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"}}]})(e)}const u2=j.div`
    width: 92%;
    display: flex;
    text-align: center;
    justify-content: flex-end;
    align-items: center;

    #title-balance{
        display: flex;
        flex-direction: column;
        color:#fff;
    }
    
    #number-open{
        display: flex;
        flex-direction: column;
        color: #FF9900;
        font-size: 26px;
    }

    #number-hide{
        font-size: 26px;
    }

    .btn__open__hide{
        border-radius: 20px;
        cursor: pointer;
        height: 28px;
        width: 30px;
        font-size: 26px;
        color: #fff;
    }

    .number__open__hide{
        width: 140px;
        display: flex;
        flex-direction: column;

    }
`;function Rf(){const[e,t]=v.useState(!1),n=JSON.parse(localStorage.getItem("Pix"))||[],r=JSON.parse(localStorage.getItem("inputValue"))||0;let o=JSON.parse(localStorage.getItem("accountBalance"))||3e4;const[i,l]=v.useState(0);v.useEffect(()=>{const c=JSON.parse(localStorage.getItem("toggle"));c!==null&&t(c)},[]);const a=c=>{c.preventDefault(),t(!e),localStorage.setItem("toggle",JSON.stringify(!e))},u=()=>{let c=o;for(const h of n)c-=h.number||0;return r===3e4&&(c-=r,o=c,i=o,l(i),localStorage.setItem("accountBalance",JSON.stringify(o))),o<r?(alert("Infelizmente você não tem dinheiro suficiente"),c):(localStorage.setItem("totalValue",JSON.stringify(c)),c)};return s.jsxs(u2,{children:[s.jsxs("div",{className:"number__open__hide",children:[s.jsx("div",{id:"title-balance",children:s.jsx("span",{children:"Saldo disponível"})}),s.jsxs("span",{id:"number-open",children:[" R$ ",e?u():"******"]})]}),s.jsx("div",{className:"btn__open__hide",onClick:a,children:e?s.jsx(a2,{}):s.jsx(l2,{})}),n.map(c=>s.jsx("div",{},c.id))]})}function c2({active:e}){const t=()=>{e(!1)};return s.jsx(s.Fragment,{children:s.jsxs(Qg,{sidebar:e,children:[s.jsx(Yg,{onClick:t}),s.jsx(Kg,{children:s.jsxs(Gg,{children:[s.jsx(Rf,{}),s.jsx(wn,{Icon:Vg,Text:"Home",to:"/"}),s.jsx(wn,{Icon:Zg,Text:"Criar Cartões",to:"/criar"}),s.jsx(wn,{Icon:Ng,Text:"Meus Cartões",to:"/meus-cartoes"}),s.jsx(wn,{Icon:Of,Text:"Faça seu Pix",to:"/pagamentos"}),s.jsx(wn,{Icon:qg,Text:"Extrato",to:"/extrato"}),s.jsx(wn,{Icon:bf,Text:"POUPA HEROI!",to:"/poupanca"}),s.jsx("label",{}),s.jsx("div",{children:s.jsx("img",{src:Tf,alt:"LOGO"})})]})})]})})}function gn(){const[e,t]=v.useState(!1),n=()=>t(!e);return s.jsxs(Hg,{children:[s.jsx(Wg,{onClick:n}),e&&s.jsx(c2,{active:t})]})}function d2(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11V17H13V11H11ZM11 7V9H13V7H11Z"}}]})(e)}const p2=j.div`
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
`,f2=j.button`
    width: 100%;
    position: absolute;
    max-width: 30px;
    height: 25px;
    border-radius: 50%;
    right: -18px;
    font-size: 22px;
    background: none;
    border: none;
    cursor: pointer;

`,h2=j(d2)`
    color: #A9A9A9;
`,m2=j.div`
    position: absolute;
    width: 378px;
    height: 60px;
    top: -5.2rem;
    right: 0;
    background-color: #FFFFFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.10);
    border: 1px solid #FF3B3F;
    z-index: 2;
    padding: 7px;
    transition: all 1s ease-in-out; 

    @media (max-width: 786px){
     width: 300px;
     height: 65px;
    }

    `,g2=j.span`
    font-size: 12px;

`;function x2(){const[e,t]=v.useState(!1),n=v.useRef(null);v.useEffect(()=>{const o=i=>{n.current&&n.current.contains(i.target)&&t(!1)};return document.addEventListener("click",o),()=>{document.removeEventListener("click",o)}},[]);const r=()=>{t(o=>!o),window.onsubmit()};return s.jsxs(p2,{children:[s.jsx(f2,{onClick:r,children:s.jsx(h2,{title:"informação"})}),e&&s.jsx(m2,{ref:n,children:s.jsx(g2,{children:"O número do seu cartão, código de segurança e a data de validade, é gerada automaticamente pelo sistema."})})]})}function Fc(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,12 L6,12 C6.5,14.5 9.27272727,17 12,17 C14.7272727,17 17.5,14.5 18,12 L21,12 M12,17 L12,20 M7.5,15.5 L5.5,17.5 M16.5,15.5 L18.5,17.5"}}]})(e)}const Eo=j(Ug)`
    display: flex;
    opacity: 1;
    font-size: 14px;
    margin-right: 5px;
    color: #7FFF09;
`,zo=j(If)`
    display: flex;
    opacity: 0.5;
    font-size: 16px;
    margin-right: 5px;
    color: #F80000;
    `,v2=j.div`

div{
    display: inline-flex;
}

.btn-is-hidden {
    display: flex;
    margin-top: 1px;
    height: 45px;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 10%;
    background-color: #007bff;
    border: 2px solid #fff;
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 6px;
}

.input-password{
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-is-hidden {
    width: 410px;
    display: flex;
    border-radius: 4px;
}

    .container-isValid{
        display: flex;
        flex-direction: column;
        margin: auto;
        border-radius: 4px;
        width: 81%;
        margin-bottom: 10px;
        padding: 10px 5px;
        background-color: #3D3B37;
        color: #FF9900;
    }
    p{
        display: flex;
        font-size: 16px;
        margin-top: 4px;
        color: #FFFFFF;
    }

    @media (max-width: 1260px) {
      .container-isValid{
        width: 445px;

        margin: 5px 5px 0 0 auto;
      }
    }

    @media (max-width: 926px) {
      .input-is-hidden {
        width: 268px;
      }
      .container-isValid{
        width: 300px;

        margin: 5px 5px 0 0 auto;
      }
      p{
        padding-left: 2px;
        width: 268px;
      }
    }

`,Lf="/app-banco/assets/Mask-0298d74e.png",y2="/app-banco/assets/capa-fundo-7199ec96.png",w2=j.img`
position: fixed;
bottom: 0;
height: 100vh;
z-index: -1;
width: 100%;
`;function lr(){return s.jsx(s.Fragment,{children:s.jsx(w2,{src:y2,alt:"CAPA"})})}const S2=()=>{const e=JSON.parse(localStorage.getItem("backgroundCard")),[t,n]=v.useState(""),[r,o]=v.useState([]),[i,l]=v.useState(e),[a,u]=v.useState(""),[c,h]=v.useState(""),[m,g]=v.useState(!1),[y,S]=v.useState(!1),[C,P]=v.useState(!1),[f,d]=v.useState(!1),[p,w]=v.useState(!1),[k,z]=v.useState(!1),[x,N]=v.useState(!1),[R,I]=v.useState(!1),[se,Be]=v.useState(!1),[ze,Ie]=v.useState(!1),[be,ue]=v.useState(""),[X,F]=v.useState(""),[b,O]=v.useState(!1),[$,W]=v.useState(!1),[_e,ce]=v.useState(!1),[Oe,ne]=v.useState("#000000"),[we,xn]=v.useState("#FFFFFF"),[D,T]=v.useState("#E9E9E9"),[Wi,Xt]=v.useState("#242424"),[Hs,Vf]=v.useState("#E9E9E9"),$f=bs(),Qi=v.useRef(null),Ws=v.useRef(null),Qs=v.useRef(null);function Ks(B){const _=B.charCode;(_>=48&&_<=57||_===59||_===45||_===43||_===47||_===42||_===46)&&B.preventDefault()}function Hf(){const B=Qi.current.value;g(!B)}function Wf(){const B=Ws.current.value;S(!B)}function Qf(){const B=Qs.current.value;P(!B)}const Kf=B=>typeof B=="string"?B.replace(/[^a-zA-Z ]/g,""):"",Yf=B=>{const _=B.target.value.trim();ue(_),Ie(/[A-Z]/.test(_)&&/\d/.test(_)&&/[!@#$%^&*]/.test(_)&&_.length>=8),ce(_!==""&&_===X),z(/[A-Z]/.test(_)),N(/\d/.test(_)),I(/[!@#$%^&*]/.test(_)),Be(_.length>=8)},Gf=B=>{const _=B.target.value.trim();F(_)};v.useEffect(()=>{const B=Math.floor(1e15+Math.random()*9e15);h(B);const _=Math.floor(100+Math.random()*899);u(_)},[]),v.useEffect(()=>{const B=localStorage.getItem("cards");if(B){const _=JSON.parse(B);o(Array.isArray(_)?_:[])}},[]);const Jf=B=>{if(B.preventDefault(),t)g(!1);else{g(!0);return}if(t.length<6){S(!0);return}else S(!1);if(!be||!X||be!==X){P(!0),ce(C);return}else P(!1);const _={id:Date.now(),number:c,name:t,expiry:new Date().toLocaleDateString("pt-br",{month:"2-digit",year:"2-digit"}),cvc:a,color:i,colorOne:"#000000",colorTwo:"#e3e3e3",subColorCard:"#242424",subColorCardOne:"#E9E9E9",colorIcons:"#E9E9E9",password:be,subPassword:X};if(r.some(Ki=>Ki.name.toLowerCase()===t.toLowerCase())){alert("Já existe um usuario com esse nome cadastrado!!"),n("");return}if(!i){alert("escolha seu cartão!");return}o(Ki=>{const Ys=[...Ki,_];return localStorage.setItem("cards",JSON.stringify(Ys)),$f("/meus-cartoes"),Ys})},Xf=B=>{const _=B.target.value.trimStart();n(_)},Zf=B=>{B.preventDefault(),d(_=>!_)},qf=B=>{B.preventDefault(),w(_=>!_)};return v.useEffect(()=>{i?(O(!0),W(!1)):(O(!1),W(!0))},[i]),s.jsxs("div",{children:[s.jsx(gn,{}),s.jsx(Dg,{children:s.jsxs(Mg,{children:[s.jsxs(Tg,{children:[s.jsxs("h3",{className:"custom-title",children:["Crie agora seu Cartão SIGMABANK ",s.jsx("br",{})," personalizado do seu jeito!"]}),$&&s.jsx(zc,{children:s.jsxs(Ag,{children:[s.jsx(Ig,{}),s.jsx("span",{children:"Crie seu cartão"})]})}),b&&s.jsx(zc,{children:s.jsxs(Og,{style:{backgroundColor:i},children:[s.jsxs(Rg,{children:[s.jsx(x2,{}),s.jsx("img",{src:Lf,alt:"LOGO"}),s.jsx("h3",{style:{color:i===Oe?we:Oe,marginLeft:"20px"},children:Kf(t)})]}),s.jsx(Lg,{style:{color:D}}),s.jsx(bg,{style:{color:D}}),s.jsx("div",{className:"border-color",style:{background:i===Hs?Hs:Wi}})]})}),s.jsx("label",{className:"title-color",children:" Escolha a cor do seu Cartão"}),s.jsxs("select",{value:i,onChange:B=>{l(B.target.value),B.target.value==="#E9E9E9"?(ne("#000000"),Vf("#E9E9E9"),T("#000000")):B.target.value==="#000000"?(ne("#000000"),Xt("#242424"),T("#e9e9e9")):(B.target.value==="#323232"||B.target.value==="#323B44"||B.target.value==="#443333")&&(ne("#e3e3e3"),Xt("#242424"),T("#e3e3e3"))},children:[i?s.jsx("option",{disabled:!0,children:"Opções"}):s.jsx("option",{hidden:!0,children:"Opções"}),s.jsx("option",{value:"#E9E9E9",children:"modern White"}),s.jsx("option",{value:"#000000",children:"modern Black"}),s.jsx("option",{value:"#323232",children:"modern gray"}),s.jsx("option",{value:"#323B44",children:"modern blue"}),s.jsx("option",{value:"#443333",children:"modern crimson"})]})]}),s.jsxs(Bg,{onSubmit:Jf,children:[s.jsx("label",{className:"label-name",children:"Digite seu nome completo"}),s.jsx("input",{type:"text",name:"name",placeholder:"Ex: Amanda silva",maxLength:16,onKeyPress:Ks||Wf,ref:Qi||Ws,onBlur:Hf,value:t,onChange:Xf}),m&&s.jsx("small",{children:"Preencha o nome completo!"}),y&&s.jsx("small",{children:"Necessário ter 6 ou mais caracteres"}),s.jsxs(v2,{children:[s.jsx("div",{className:"container-label",children:s.jsx("label",{className:"label",children:"Crie sua senha digital"})}),s.jsxs("div",{children:[s.jsx("input",{className:"input-is-hidden",type:f?"text":"password",placeholder:"Senha",onChange:Yf,ref:Qs,onBlur:Qf}),s.jsx("button",{className:"btn-is-hidden",onClick:Zf,children:f?s.jsx(Ec,{}):s.jsx(Fc,{})})]}),s.jsxs("div",{className:"container-isValid",children:[s.jsxs("p",{className:"capital",children:[k?s.jsx(Eo,{}):s.jsx(zo,{}),s.jsx("span",{children:"letra maiúscula"})]}),s.jsxs("p",{children:[x?s.jsx(Eo,{}):s.jsx(zo,{}),s.jsx("span",{children:"usar números"})]}),s.jsxs("p",{children:[R?s.jsx(Eo,{}):s.jsx(zo,{}),s.jsx("span",{children:"caracteres especiais"})]}),s.jsxs("p",{children:[se?s.jsx(Eo,{}):s.jsx(zo,{}),s.jsx("span",{children:"8+ caracteres"})]})]}),s.jsxs("div",{children:[s.jsx("input",{className:"input-is-hidden",type:p?"text":"password",placeholder:"Confirme sua senha",onChange:Gf}),s.jsx("button",{className:"btn-is-hidden",onClick:qf,children:p?s.jsx(Ec,{}):s.jsx(Fc,{})})]})]}),_e&&C?s.jsx("small",{children:"A senha de confirmação deve ser igual"}):!1,s.jsx("button",{className:"btn-confirm",type:"submit",disabled:!ze,children:"Confirmar"})]})]})}),s.jsx(lr,{})]})};function C2(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(e)}function k2(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"}}]})(e)}function Df(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(e)}function j2(e){return U({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"}}]})(e)}const E2=j.div`
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;

  .border-color{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 100%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`,z2=j.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,F2=j.div`
  position: relative;
  width: 100%;
  max-width: 340px;
  height: 365px;
  background-color: #fff;
  margin: 40px 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
`,N2=j.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 210px;
  background-color: #272521;
  border-radius: 8px;

`,P2=j.div`
  width: 280px;
  height: 170px;
  margin: 10px;
  padding: 10px;
  border-radius: 16px;
  position: relative;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.60);
  z-index: 1;

  .container-number{
    display: flex;
    align-items: end;
    text-align: end;
    margin: auto;
    width: 100%;
    height: 100px;
  }

  .container-name-expiry{
    display: flex;
    width: 70%;
    justify-content: space-evenly;
    font-size: 12px;
    margin-top: 20px;
  }

  .title-name{
    font-weight: 900;
  }
  
  .container-expiry{
    width: 20%;
    height: 15px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  h2 , h3{
    font-family: 'Inter', sans-serif;
    font-weight: 500;
  }

  h2{
    font-size: 20px;
  }
  
  h3{
    display: flex;
    font-size: 12px;
    width: 100%;
  }
  
  .sub-color{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 70px;
    height: 100%;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .btnBlock {
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content:center;
    margin:auto;
    top: 8px;
    left: 10px;
    width: 35px;
    height: 30px;
    background-color: #D9D9D9;
    border: none;
    border-radius: 50%;
  }
  h2{
    display: flex;

  }

 h3{
    display: flex;  
  }

  small{
    margin-bottom: -10px;
  }

  img{
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    left: 0;
    width: 70%;
    position: absolute;
  }
`,A2=j(Af)`
  display: flex;
  position: absolute;
  font-size: 24px;
  right: 24px;
  top: 10px;
  transform: rotate(90deg);
  z-index: 2;
`,I2=j.div`
    width: 340px;
    min-height: 365px;
    background-color: #272521;
    padding: 10px;
    margin: 40px 10px 0;
    margin-bottom: 40px;
    border-radius: 8px;

    img{
      margin-top: 30px;
    }

    p{
      color: #FFFFFF;
    }

    .border-color-plus{
      height: 2px; 
      width: 80%;
      background-color: #B3B3B3;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
      margin-top: 10px;
    }

    .btn-card-plus{
      margin-top: 20px;
      height: 40px;
      width: 300px;
      border: none;
      color: #FFFFFF;
      font-size: 16px;
      border-radius: 6px;
      height: 50px;
      padding-left: 10px;
      cursor: pointer;
      background-color: #3D3B37;
    }

    button{
      position: relative;
    }

    button:hover{
    border: 2px solid #FF9900;
  }
  
    @media (max-width: 1080px){
      &{
        margin-bottom: 50px;
      } 
    }
`,b2=j(n2)`
  font-size: 20px;
  border-radius: 50px;
  text-align: center;
  align-items: center;
  justify-content:center;
  margin:auto;
  cursor: pointer;
`,O2=j(o2)`
  font-size: 20px;
  border-radius: 50px;
  color: #000;
  cursor: pointer;
`,T2=j.div`
  display:flex;
  flex-direction: column;
  text-align: center;
  align-items:center;
  justify-content: center;
  margin: 50px auto;
  width: 100%;
  gap: 5px;

  .title-digital{
    font-size: 18px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #fff;
  }

  .border-card{
    height: 2px;
    margin-bottom: 10px;
    width: 100%;
    background-color: #D8D7D6;
  }
`,R2=j.div`

${e=>e.$completed==="checked-block"&&ir`
      opacity: ${t=>t.disabled?"0.6":"1"};
      pointer-events: ${t=>t.disabled?"none":"auto"};
    `}
`,L2=j(Mi)`
  text-decoration: none;
`;j.button`
  display: flex;
  text-align: center;
  align-items: center;
  border: none;
  width: 300px;
  border-radius: 6px;
  height: 50px;
  padding-left: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  background-color: #3D3B37;

  &:hover{
    border: 2px solid #FF9900;
  }

`;const D2=j.button`
  display: flex;
  text-align: center;
  align-items: center;
  border: none;
  width: 300px;
  border-radius: 6px;
  height: 50px;
  padding-left: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  background-color: #3D3B37;

  &:hover{
    border: 2px solid #FF9900;
  }

${e=>e.$completed==="checked-block"&&ir`
      opacity: ${t=>t.disabled?"0.4":"1"};
      pointer-events: ${t=>t.disabled?"none":"auto"};
    `}
`,M2=j(Df)`
  position: absolute;
  right: 30px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;j(Ff)`
  font-size: 50px;
  display: flex;
  margin-bottom: 5px;
`;const B2=j.div`
display: flex;
text-align: center;
align-items: center;
justify-content: flex-end;
margin: auto;
width: 100%;
`,_2=j(Nf)`
  font-size: 40px;
  position: absolute;
  display: flex;
  right: 16px;
  bottom: 0px;
  z-index: 2;
  z-index: 2;
`;j.button`
  background: none;
  border: none;
  display: flex;
  text-align: center;
  align-items: center;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;


${e=>e.$completed==="checked-block"&&ir`
    opacity: ${t=>t.disabled?"0.4":"1"};
    pointer-events: ${t=>t.disabled?"none":"auto"};
  `}
`;const U2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAYAAAAYefKRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiWSURBVHgB7Z1/ThNbFMcPtFowkte3gjc7eDUuAFiBugJp4j+Iv1gB7QrAGOEfE2AF4AqoCzAPV2DfCqwxMQGtvO/hDabK9P7o3M6PzveTNAXmls7c+c65Z845c68IIYQQQgghhBBCCCGEEEIIIYQQQiZkTjJke3u7ubCw0Pz+/XuEX5sXFxdNKThzc3MD7O/p5uZmX6aM9k+9Xl/RfsH39p8+fdqTnJiaMF6/ft3CAa7UarW/f/z4oT9HONjCC2Ec8/PznfX19a5Mid3d3fvop/3f+qiP14ONjY1TyZigwnj16pUK4R4OcK3MIhgHjmnz8ePHOxIYWIro5s2bH8dsHpyfn9/JwmKNMi8BUEFA8Se4qk5gGV7MoigUHNuWmnsJTKPR2DdsbkI0wcVooy4pUKXrQemQgZdUAD1JEd6DmnbtP0uTZcmYiYWhVgKW4agMDmRIMEzmcbyZf+dEQwmGjYc6bMzqkGFC71CkAngLA8OH3mEcSDXpwgkcSAXwEkbsPR9JBcHFcIjbxo5UBC8fA6LYwlsk6eijk/WqG2gQR4rPZ/gVx3kGm/LAWRhqLfC2Jn6oAA6Hw+HpjRs3eggQ9YWUAmdhxNbCCViEHl7dql1ls4STMDytRffJkycdIaXGyfnEMHBf3OhWyUGbZZwsBmIW92yRTXUkkUfoCLlkb28virPIQdCAoks7fGc/RF7FmkTT3AD8i09ipw1rcSAVR08gLqRt/NiS/Ogj8baaRiDWoaRerzsdIHbkWCqOps41Iiz5ikLReNM/WvogE2IVBoaIlkObXlUigiYw3G5LcdBin7H7g301jhZWYWiBja0N4hTvpOLEV2ckBUKztuPKBCAa42etwtAKLLFTicSSiZyyrlaWlpb+GLMpncVwPODKDyNFzbo+evToX5kAFx8jsrVZXFz8KBVHfSz0VdEc8JeGbekshjgUiUyqylnj7OysXZTEoKYlbt261ZEJMarGMYYxQPziTyE/gSO6hhPz0LU9xLRia6MnWhzQxx3w9tYhplTDazhuozHyqc+AwMcQC5X3L34nPikHru0hJGvBLPJPqxIW43cGqRInpcQojFRV4jFN5AX2ZUbB3Yb6T71ZKyHQ3JcplhFEGPqAkcwoCHHr2xbC3TtIEm7KjABRcCgJgT5IBV+gIxWBwvDj+TSeRCsiFIYfV0+izTwUhidFzYmEhsLwIO85K7KEwvAA1uKlVAQKw40B7ko2EX2c1nQEtuhx5pnbEHGMwXA4nJn7+ySWlpaO2+321EL/aokQLxn73A6GsEPJmCDCePbs2YGQiUF0dafRaDxMqpaDKE6nMYuPDQ4lBUBrOZCyv6OWYyRt38fv3cXFxdDJMydCWAwSgLiY+kX8yh1aDJIIhUESoTBIIhQGSYTCIInwrmRG0CfhEGhshcrnUBglZ3QS3lqtdvk3iERjIJsQyMTPuXAoKTHxLIonCTMLRwixH7nOqZEEhVFi6vW6BsOicdvjeToSsU2EQ2GUGIcHzltv3rz5K2nDnOVxdwqjxLhMUWGAwiCJzIlBHBRGdaHFIMmYHFAKo7rQYpDr3L1717idwqgo79+/vzDdslIY1UVFMdbJoDBIIhQGSYTCqC46jNDHIL+CuxL6GMQfCoMkQmGQRCiMiqIBLtN2CqO6MO1OrqO5kgtDejXXKvF4rvLIZ14rn8XgtKR+WnNmlX3KpZFcSaI4chMGTtpzCLaDH5vxJKtOQEj62YPz8/PuOIHo2mTxMlSRz//2QUv00a8v85i7IhDFi2OgU3X2mB107KRX85qWzSfNuRmL4kimvwxVpOLD9xVi2oIJuChUoU686nNH0qPPVFw7KVkvWIfv2yrjpLAa+TQVimcuDI9Vn63gwJZHf89pwbpmrVYLdkxZAR/DuD1zYeAKC3Z1/f6/qjI5ayAKl0TrSTh+meYwrwXrirLclQ86lJicjBDC8LpK9TYvYEf+MiGrzmOFY8106sOcZwu29v2XL18+J/1dh5KJfYz19fW+2PE239ih1QDi6G5sbFyzEN++fVOHNBPLocegxyL5Ye17wwraxpC4ebleuXToPtl2oNFoRL4rKe7t7Wlga8VnUTkFJ+IDPndsu0p1wTq83Qvp04zswwD78OH27ds705wY1kTcf7ZlTU0LGWoMSxfLmzjApQdu7NyzszP9ci9hxNboQDwWlfPBd8G6sgF/yiV41x+3QX0MUyLNxcewmmWdyUVI1lgtYbzUZiKps6swxZ9tbXAfT2Fkj7XPce4+yIQEsRhQpm2eBhIYXIzLtjYQRt+02bDNyWKcOrRpVWWtsCKgfZ0wvdI1LOcunTAcg0ZNhLrXhGQCckROIfg0AT+rMPQ+GENFz9YObZ4LyYotWwM9Z4YYhjm1Ko6RT9x1vHNoFuHe2rrDJB1xyUJka4cYx1vTdssUXG7C0IVWXNphZzoUx/SIRdFxaQvn9FhSYI18XrG7u3vi4vDEnMYTkPaEpEbn68SJ3vLo/wME+NqSAufSPgwnXUTaVhybt9D2RMvf8HNPzRp+7yflNsh1NNyNnM9KvV7/G323ppVutnk5R0FfdyUlzhZDgdU4wg6mLUrpXyXQypiungY6LWOc09FXJOlIbS0Ur2Jg5ETaSJi1Us4vGV193ucqIHbibG9qa3H5v8QTHe90mBBSRO6EGq69C3VihzK1qSLBaYf04Saq4NKUNpyiB/QRCoHWhqzGZQbB8B5KRomLRbRcv3RV0rMAfLQebmPbjpV2XqQSxhVaLQXrsZXSKSWOqCDw6k4zThREGFeoYwqBrME5XaZIgqN5j0OXssYQBBXGKPrwj0bq9KEgvUfHuxaWMDXvhla7663nqRbbaEIs6+Dg1ISRxP7+fvPr168/n26nVfmfuARvgEhnf2FhYZBXgTEhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIWQG+A+KnowntZbQoAAAAABJRU5ErkJggg==",V2=j.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 997;
`,$2=_s`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;j(Us)`
    font-size: 70px;
    color: #ED8181;
    margin-top: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;const H2=j.div`
    background-color: #E3E3E3;
    padding: 10px;
    width: 340px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    animation: ${$2} 0.2s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    z-index: 998;

    h3{
        position: absolute;
        margin:10px 10px;
        color: #242424;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 16px;
        top: 80px;
    }

    .bar-color{
      position: absolute;
      top: 140px;
      left: 0;
      right: 0;
      text-align: center;
      margin: auto;
      width: 80%;
      height: 2px;
      background-color: #8c8c8c;
    }

@keyframes fadeInOut {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 250px;
  }
}

.hiding {
  width: 250px;
  position: absolute;
  left: -50px;
  top: 120px;

  animation: fadeInOut 0.2s ease-in-out;
}

.celebrating{
  width: 250px;
  right: 0px;
  margin-top: 86px;
}

  .container-text{
        position: absolute;
        width: 150px;
        height: 80px;
        right: 50px;
        top: 200px;
        border-radius: 48%;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        border: 2px solid #FF9900;
    }

    p{
        color: #242424;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 14px;
        margin: 15px;
    }

  .container-btn {
    display: flex;
    align-items: center;
  }

  .logo{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 60px;
    margin: auto;
  }

  .cancel{
    background-color: #242424;
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #E3E3E3;
    top: 0;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 22px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.80);
    width: 70px;
    height: 40px;
    border-top-right-radius: 12px;
  }

  .cancel:hover{
    background-color: green;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
  }

  .confirm{
    background-color: #242424;
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #E3E3E3;;
    left:0 ;
    bottom: 20px;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.80);
  }

  .confirm:hover{
    background-color: red;
    border: 1px solid #FFFFFF;
  }
  button {
    height: 50px;
    width: 270px;
    cursor: pointer;
  }

  @media (max-width: 520px){
    width: 350px;
  }

`,W2="/app-banco/assets/hiding-5b6cb35d.png",Q2="/app-banco/assets/BANK-logo-afffecba.png";function K2({message:e,onDialog:t}){const[n,r]=v.useState(!1),[o,i]=v.useState(!0);function l(){r(!1),i(!0)}function a(){r(!0),i(!1)}return s.jsxs(s.Fragment,{children:[s.jsx(V2,{onClick:()=>t(!1)}),s.jsxs(H2,{children:[s.jsx("button",{className:"cancel",onClick:()=>t(!1),children:s.jsx($g,{})}),o&&s.jsx("img",{className:"logo",src:Q2,alt:"Logo"}),n&&s.jsxs(s.Fragment,{children:[s.jsx("img",{className:"hiding",src:W2,alt:"Personagem-Escondido"}),s.jsx("div",{className:"container-text",children:s.jsx("p",{children:"Não faz isso cartão tão bonito!!"})})]}),s.jsx("h3",{children:e}),s.jsx("div",{className:"bar-color"}),s.jsx("div",{className:"container-btn",children:s.jsx("button",{onMouseEnter:a,onMouseLeave:l,className:"confirm",onClick:()=>t(!0),children:"Confirmar"})})]})]})}const Y2=j.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: #FF9900;
    border: none;
    cursor: pointer;
`,G2=j(t2)`
    font-size: 46px;
    color: #3D3B37;
    border-radius: 8px;
    
`;function Vs(){const[e,t]=v.useState(!1);v.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>100?t(!0):t(!1)})},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsx("div",{children:e&&s.jsx(Y2,{onClick:n,children:s.jsx(G2,{})})})}const J2="/app-banco/assets/Capa-links-607c5ee6.png";function X2(){const t=(JSON.parse(localStorage.getItem("cards"))||[]).filter(x=>x!==null),r=JSON.parse(localStorage.getItem("backgroundCard"))||"#E9E9E9",o=t.map(x=>({...x})),[i,l]=v.useState(o),[a,u]=v.useState(o),c=v.useRef(),h=(x,N)=>{g({message:x,isLoading:N})},[m,g]=v.useState({message:"deseja realmente deletar",isLoading:!1});v.useEffect(()=>{localStorage.setItem("cards",JSON.stringify(a))},[a]);const y=x=>x.replace(/[^a-zA-Z]+/g," "),S=x=>{const R=[...a].map(I=>I.id===x?{...I,isCompleted:!I.isCompleted}:I);u(R)},C=x=>{h("Deseja mesmo deletar... essa ação não poderá voltar atrás",!0),c.current=x},P=x=>{if(x){const N=i.findIndex(I=>I.id===c.current),R=[...i];R.splice(N,1),localStorage.setItem("cards",JSON.stringify(R)),l(R),u(R),h("",!1)}else h("",!1)},[f,d]=v.useState("#FFFFFF");function p(x){const N=parseInt(x.slice(1,3),16),R=parseInt(x.slice(3,5),16),I=parseInt(x.slice(5,7),16);return(N*299+R*587+I*114)/1e3}const[w,k]=v.useState("#FFFFFF");function z(x){const N=parseInt(x.slice(1,3),16),R=parseInt(x.slice(3,5),16),I=parseInt(x.slice(5,7),16);return(N*299+R*587+I*114)/1e3}return console.log(f),console.log(w),v.useEffect(()=>{const x=p(r)<128?"#FFFFFF":"#000000";d(x)},[r]),v.useEffect(()=>{const x=z(r)<128?"#FFFFFF":"#242424";k(x)},[r]),s.jsxs(s.Fragment,{children:[s.jsx(gn,{}),s.jsx(lr,{}),s.jsxs(E2,{children:[s.jsxs(z2,{children:[a.map((x,N)=>s.jsx(pe.Fragment,{children:s.jsxs(F2,{children:[s.jsxs(P2,{style:{backgroundColor:x.color},children:[r&&s.jsx("img",{src:Lf,alt:"LOGO"})||s.jsx("img",{src:J2,alt:"LOGO"}),s.jsxs(R2,{$completed:x.isCompleted?"checked-block":"remove-block",className:x.isCompleted?"checked-block":"",disabled:x.isCompleted,children:[s.jsx("div",{className:"container-option-card",children:s.jsx("small",{className:"option-card",children:x.option})}),s.jsx("div",{className:"container-number",children:x.colorOne&&x.colorTwo?s.jsx("h2",{style:{color:p(x.color)<128?x.colorTwo:x.colorOne},children:x.number}):null}),s.jsxs("div",{className:"container-name-expiry",children:[s.jsx("h3",{className:"title-name",style:{color:p(x.color)<128?x.colorTwo:x.colorOne},children:y(x.name)}),s.jsx("div",{className:"container-expiry",children:s.jsx("p",{style:{color:p(x.color)<128?x.colorTwo:x.colorOne},children:x.expiry})})]}),s.jsx("div",{className:"sub-color",style:{backgroundColor:z(x.color)<128?x.subColorCard:x.subColorCardOne}}),s.jsxs(B2,{children:[s.jsx(A2,{style:{color:p(x.color)<128?x.colorTwo:x.colorOne}}),s.jsx(_2,{style:{color:p(x.color)<128?x.colorTwo:x.colorOne}})]})]}),s.jsxs(T2,{children:[s.jsx("p",{className:"title-digital",children:"Cartão Digital"}),s.jsx("div",{className:"border-card"}),s.jsxs(D2,{$completed:x.isCompleted?"checked-block":"remove-block",className:x.isCompleted?"checked-block":"",disabled:x.isCompleted,onClick:()=>C(x.id),children:[s.jsx("p",{children:"Excluir o cartão"}),s.jsx(M2,{})]})]}),s.jsx("button",{className:"btnBlock",onClick:()=>S(x.id),children:x.isCompleted?s.jsx(b2,{}):s.jsx(O2,{})})]}),s.jsx(N2,{})]})},N)),s.jsx(I2,{children:s.jsxs("div",{children:[s.jsx("img",{src:U2,alt:"image-plus"}),s.jsx("p",{children:"Espaço vazio para cartão"}),s.jsx("div",{className:"border-color-plus"}),s.jsx(L2,{to:"/criar",children:s.jsx("button",{className:"btn-card-plus",children:"Criar novo Cartão "})})]})})]}),m.isLoading&&s.jsx(K2,{onDialog:P,message:m.message})]}),s.jsx(Vs,{})]})}const Z2=j.section`

  @media (max-width: 1280px){
    display: flex;
    flex-direction: column;
  }
`;j.div`
  width: 76%;
  background-color: #fff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);

  #number{
    display: flex;
    }

  p{
    font-size: 32px;
    line-height: 1px;
  }
`;const q2=j.div`
    border-radius: 8px;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: inline-flex; 
  p{
    margin-top: 5px;
    margin-bottom: 5px;
  }
`,ex=j.form`
  width: 800px;
  padding-top: 27px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;
  background-color: #272521;
  border-radius: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);

  small{
    width: 84%;
    padding: 6px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: #FF3B3F99;
  }

  gap: 10px;


  label {
    font-weight: bold;
    font-size: 14px;
    padding: 6px;
  }

  p{
    display: flex;
    margin: auto;
    width: 84%;
    margin-bottom: 5px ;
    color: #FFFFFF;
  }

  .input-price {
    background-color: #3D3B37;
    height: 80px;
    border-radius: 4px;
    border: none;
    outline: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #FF9900;
    margin: auto;
    display: flex;
  }

  .input-price::placeholder{
    color: #FF9900;
    font-size: 30px;
    text-align: center;
    margin: auto;
  }

  .input-price:focus{
    border: 2px solid #FF9900;
  }

  .container-value{
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  .input-price{
    width: 84%;
  }

  .input-name{
    width: 84%;
  color: #FFFFFF;
  }


  .container-input{
      width: 84%;  
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: auto;
    }


    .info-select{
      width: 84%;   
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin: auto;
      font-size: 16px;
      color: #FFFFFF;
      
  }
  .info-select-two , 
  .title-optional{
    color: #FFFFFF;
    width: 84%;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: auto;
    
  }
  
  select{
    display: flex;
    width: 270px;
    height: 40px;
    color: #FF9900;
    justify-content: flex-start;
    background-color: #3D3B37;
    border: none;
  }


  .input-select{
    display:flex;
    height: 40px;
    width: 450px;
    font-size: 18px;
    margin-left: 10px;
    padding-left: 10px;
    margin-bottom: 10px;
    background-color: #3D3B37;
    color: #FF9900;
    border: none;
  }

  .input-select::placeholder{
    font-size: 14px;
    color: #FF9900;
  }

  textarea{
    width: 84%;
    resize: none;
    padding: 12px;
    margin-top: 5px;
    font-size: 16px;
    color: #FF9900;
    outline: none;
    border: none;
    background-color: #3D3B37;
  }

  textarea:focus{
    border: 2px solid #FF9900;
  }

  textarea::placeholder{
    color: #FF9900;
  }

  button{
    width: 84%;
    padding: 12px;
    background: rgb(255,214,0);
    background: linear-gradient(90deg, rgba(255,214,0,1) 0%, rgba(255,153,0,1) 100%);
    border: 2px solid #FFFFFF;
    color: #111;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  .icon-fill{
    display: flex; 
    padding-right: 5px;
    font-size: 12px;
  }

  .error-message{
      width: 84%;
      padding: 6px;
      font-size: 14px;
      background-color: #FF3B3F99;
      color: #000;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

  @media (max-width: 740px){
    margin-top: 50px;

    &{
      width: 90%;
    }

  .input-select{
    display: flex;

    margin:0 5px auto;
    width: 100%;
  }

}
`;function tx(){const e=JSON.parse(localStorage.getItem("totalValue")),[t,n]=v.useState("Caio Lima"),[r,o]=v.useState("Ygor Mendes"),[i,l]=v.useState("Gael Edward"),[a,u]=v.useState(""),[c,h]=v.useState(""),[m,g]=v.useState(""),[y,S]=v.useState(""),[C,P]=v.useState(""),[f,d]=v.useState([]),[p,w]=v.useState(!1),[k,z]=v.useState(!1),[x,N]=v.useState(!1),[R,I]=v.useState(0),[se,Be]=v.useState(0),[ze,Ie]=v.useState(""),[be,ue]=v.useState("");console.log(f);const X=v.useRef(),F=bs();function b(D){const T=D.charCode;(T<48||T>57)&&T!==8&&T!==13&&D.preventDefault()}v.useEffect(()=>{const D=localStorage.getItem("Pix"),T=D?JSON.parse(D):[];d(T)},[]);function O(D){if(D.preventDefault(),e<parseFloat(y)){alert("Você está sem saldo suficiente para realizar essa transação."),S("");return}if(!y||!t||!r||!i||!p&&!k&&!x)return;I(0);const T={userCpf:t,userCnpj:r,userTelephone:i,number:y,describe:C,cpf:p,cnpj:k,telephone:x,date:new Date().toLocaleDateString("pt-br",{hour:"2-digit",minute:"2-digit",second:"2-digit"})};if(p&&$())if(p==="111.111.111-11")n(t);else{u(" CPF digitado não foi encontrado.");return}if(k&&W())if(k==="11.111.111.1111/11")o(r);else{h(" CNPJ digitado não foi encontrado.");return}if(x&&_e())if(x==="(11) 11111-1111")l(i);else{g("Telefone digitado não foi encontrado.");return}open&&d(Wi=>{const Xt=[...Wi,T];return Be(se+R),localStorage.setItem("Pix",JSON.stringify(Xt)),F("/enviado",{state:{...T,selectedOption:be}}),Xt})}function $(){return!0}function W(){return!0}function _e(){return!0}function ce(D){let T=D.currentTarget.value;T=T.replace(/\D/g,"").trim(),T=T.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4"),D.currentTarget.value=T,w(T)}function Oe(D){let T=D.currentTarget.value;T=T.replace(/\D/g,"").trim(),T=T.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,"$1.$2.$3.$4/$5"),D.currentTarget.value=T,z(T)}function ne(D){let T=D.currentTarget.value;T=T.replace(/[^\d.]/g,"").trim(),T.length<=11&&(T=T.replace(/(\d{2})(\d)/,"($1) $2"),T=T.replace(T.length===11?/(\d{4})(\d)/:/(\d{5})(\d)/,"$1-$2"),D.currentTarget.value=T),N(T)}const we=D=>{const T=D.target.value.trim();D.target.value=T,S(T)};function xn(){const D=X.current.value;Ie(!D)}return s.jsxs(s.Fragment,{children:[s.jsx(gn,{}),s.jsx(lr,{}),s.jsx(Z2,{children:s.jsx(q2,{children:s.jsxs(ex,{children:[s.jsx(Rf,{}),s.jsxs("div",{className:"container-value",children:[s.jsx("p",{children:"Digite o valor a ser enviado"}),s.jsx("input",{className:"input-price",value:y,maxLength:10,onChange:we,onKeyPress:b,placeholder:"R$ 0.00",ref:X,onBlur:xn})]}),ze&&s.jsx("small",{children:"Digite o valor"}),s.jsx("span",{className:"info-select",children:"Para quem você quer transferir"}),s.jsx("span",{className:"info-select-two",children:"Escolha o tipo de dado e preencha o campo."}),s.jsxs("div",{className:"container-input",children:[s.jsxs("select",{value:be,onChange:D=>{ue(D.target.value),D.target.value==="cpf"?(w(!0),z(!1),N(!1)):D.target.value==="telephone"?(w(!1),z(!1),N(!0)):D.target.value==="cnpj"&&(w(!1),z(!0),N(!1))},children:[s.jsx("option",{selected:!0,hidden:!0,children:"Escolha opção"}),s.jsx("option",{value:"cpf",children:"CPF"}),s.jsx("option",{value:"cnpj",children:"CNPJ"}),s.jsx("option",{value:"telephone",children:"Telefone"})]}),p&&s.jsx("input",{type:"text",maxLength:11,className:"input-select",id:"inputCpf",onBlur:ce,onKeyUp:ce,placeholder:"digite seu cpf"}),k&&s.jsx("input",{type:"text",className:"input-select",maxLength:14,onBlur:Oe,onKeyUp:Oe,placeholder:"digite seu cnpj"}),x&&s.jsx("input",{type:"text",className:"input-select",maxLength:15,onBlur:ne,onKeyUp:ne,placeholder:"digite seu telefone"})]}),a&&a?s.jsxs("p",{className:"error-message",children:[s.jsx("span",{className:"icon-fill",children:s.jsx(zl,{})}),a]}):c&&c?s.jsxs("p",{className:"error-message",children:[s.jsx("span",{className:"icon-fill",children:s.jsx(zl,{})}),c]}):m&&m?s.jsxs("p",{className:"error-message",children:[s.jsx("span",{className:"icon-fill",children:s.jsx(zl,{})}),m]}):"",s.jsxs("div",{className:"container-texterea",children:[s.jsx("span",{className:"title-optional",children:"Digite uma descrição"}),s.jsx("textarea",{onChange:D=>P(D.target.value),cols:"30",rows:"4",placeholder:"Opcional"})]}),s.jsx("div",{children:s.jsx("button",{type:"submit",onClick:O,children:"Prosseguir"})})]})})})]})}const nx=j.section`
  min-height: 100vh;
  background-color: #FFFFFF;
`,rx=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,ox=j.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-height: 500px;
  border-radius: 6px;
  text-align: center;
  align-items: center;
  margin-top: 30px;
  background-color: #ECECEC;

  img{
    margin-top: 30px;
  }

  h2 {
    color: #05AC62;
  }

  .border {
    width: 100%;
    height: 1px;
    background-color: #3B3B3B;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }

  span {
    text-align: center;
    font-size: 26px;
    color: #0375B4;
  }
  
  small {
    font-size: 16px;
    margin-bottom: 20px;
    color: #3B3B3B;
  }

  #send {
    display: flex;
    font-weight: 400;
    width: 80%;
    flex-direction: column;
  }
  
  .name {
    color: #3B3B3B;
    margin-top: 10px;
    font-weight: bold;
  }
  
  .type-dados {
    margin-top: 10px;
    font-size: 14px;
  }
  
  .title-sigmabank {
    margin-bottom: 10px;
  }

  @media (max-width: 1280px) {
    margin-bottom: 50px;
    min-height: 520px;

  }
  
  @media (max-width: 768px) {
    margin-bottom: 50px;
    min-height: 540px;
    width: 330px;
  }
`,ix=j.div`
  width: 400px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 10px;

  .date {
    margin-bottom: 100px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`,lx=j.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;

  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;j(r2)`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 90px;
  color: #00ff00;
`;const ax="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqxSURBVHgB7VwNcBTVHf+993Zzl8TkAgQikCAjaBGIgsY6UEohDrVYakfR1mlrO9ap9mOsKCDgR+cQjIAoCDNMC23Bdoax0kqHqSItoO3wKagEIVGqFCuQQEJyyeWS+9h9r/89ykfkdsnHuxAz/Ca5u923+/a93/7f/+u9XeAyLgHUPQK1ZbdAPWhCF/Y+aGZXzipO1p1GcKQRombkXQLyTaN20AZRNXcywmV90UEUlM/Izq2YeXsgq9dGodjrgYrBdyGNYEgX6M4aVw3aTb9GJ7eVitLl3qMLrkxkiA3Im1Pflmry3p+WJ32+O5RiP2EMN9KurGR1DOXhYf4SsKCFNCBtxPCa+dNIHJcg9VUPwlavWT6sRuCpI2BMnV88+D9Bf11LpIhBfEcpTKXjR7tc5rHG4QuW0reCZqSHmOb5A0VE7WJghV6HUadrGGNrODNWx/NnVTr7fB/PHpqRUA9B8u8TX/29zic6jwoZH1tX/OJn0Az9xBwIZhgFxkL6Na3N5zCWoM9tmTWN1Fk2jn63Q1mzpY3SNwsjg3FohHbla/QTpTT+v9uuk5Qy6X8ikTIR7SIlefK9OWj5MjRDLzHHglmK8wdIxPuj63AlSdy0wh2PZkIjtBIjsjLuYUrdji4GWavJ4YBvCjRCGzHZJ54tYJZ8DP83p12MLMnZU9kHZl4JTdBGTMxg95EqH45LBJLUERz8h9CEjlmlKvJgDWs4NeRLDOpGDjaJHImr0Ulk1TShs6B2HKc2bZWKbYdtV9rS+rjlhiXHqaft8nW8iVGvClRXFME0h5BoDSO/YhSTajR5oYWMw0eWJJeq0CZ1Oog5B0XNZHGSpLACqyI9tJ927bFtVmkaOBSK1B1DycqE29muxJjVz9yihJhNMjqENgcQ372RzhACuolJBXIpFepJW5+gjU9szp+MDCvbn+pIw60KyVVvBllKQUkuegxIbljyBjv/hQZYhtuRrsPABqsmUlxFrQcgHhVx10DWQz/IKsVUDD0XMX+LqHMrdCem78EaGo8t6LFgzQ3F/ga3Undi2DobPKmkeiQU5EnK5Ui38ouYWtIzPReeffMmRskeLDGs48QoJY6jx0JVeZV6EsOE7ZysPW146UFOcWeIIUpO0We3s0wGNXu42ReiwzEwj9DHKc8jvAqZEI4DFEE3w0TfYKzrczfK8kqRzzuS5VBNJDSexLhPWqkg543Mmbu5jdxofRNmHjCbvdO2jj9fkjEAK3rdjn4iG8VmAXpzPz60atEg2+6L0jASVNensQkDdmBdRUpV4Soxos64k06fTrVcisRTSoyg4fNsbikKiBQHghp3Z+Z1+JrvqvZU41ikTFIyD+cOu/rrcAmMUxJj1jxzE+Vtf08h+wB0ExSKXPwqdzxGZRS02v/H5nL8teUjtB/sSmJ2be6Bx29OVXohMTXzSyT4eqK120TVARoui/MmXSAZm6KfYEF4OxplB0M6xvIonfTn3AOzLyCnNTEn511Dg+8lkq0idBNkMIHniZQJpHDPQNJd2xM/jkdCmxCRnUwAMOorV8sCH8wccv7uc8TUzh9IyZnf0RAaAw3IJn3NO5nXcszx9JwxuMN/TauayuMn8NPQ66iXujwJ5iTlfp115Imz0z6niQk918tQWEWi5cwCdjpL15dl4pUrpuAR341JBdlRPJJzC36WXZK0Rmdw2KrDL0MbcdRqhEbQBdStIiJf8ldMT45XAfV8tmi2FlHJ3fAy323EUNELizPH4w5zCMaZA3FSRrDPrmmT+3zGXJuURr43cyRm545FJjvnKRyxQniiYSv2JqqgHzSLzjCMSx4I/HzSVsOojQWJr/up5QY6iV7Mj6B/DKaa1ya3M6nKFzMnwont18QPJnVDWzAmoxBPB76K7PMyjxEVx/Kmd7A1dgRphGCc3RdDS1jrTGSIEn7brGMIq3OOWiYzsDyrFNPaOKzG+Iqwqte3yHE7N+MaVzZmNWzB2uYD6AqQ6NhCLpq8g0VlP2ryKGiYgHvXPokQYig1i5IxjQNHiY4zBiIKC7vtale5GZUIYHneNzBA5Jzd5xz7TOO/kqTYaY5naQ4hTvfuDz7pnyMw9x8J9fD4HUzwG2iMDYUG5fs+kRNBAuONwrPkOHrjK+YA1JIlSaVzBvIr8Irvmxhq9m61f03zPrzQtJMolUgviBbGX2bSP6t+ZLDhtLJd8naLCt72NrfUSNpy7HmnyHE6vceqJrmxMcEoOmu2TZKdUnNQUiGXn0dOgPmwKus23ITWS/Q2tBzCk6Rsoyotq8latZgSETtMKR4OFc9LJufOWaGyzWH5xMTtXDFnrUmnHTyn07us45SzsJPD6Kzk0Pet5lXJzjrDqojnYhFZsakZ18BKnHbWbLp5b8U+xYyGv5PeiqILsAs2f6Dh+rLDZ3a0Ns8L3grJmZPKKfqcTPc4AA3YZVUhRsrTMd3nk+OQVU+dnkJm/QHfyKSvcoaYSoqWfxF6A9Uy3TOTSfwX0ro/XLyo1Yxk6iFTO+86Q7FtOD1j12k4F3nIdwPK/OOQ4z75h2ikGR8RKd879RqO2mGkHQw1UqqJTSMWHvx8UWor1OfpD7nEgzQpriXn6wyr38T2Y050W9IyueGo3YjHGzZ3CSmkVaqRUD9qGr6wIlV5amJoLMX7WesVxzLaaoaehmBtvBLzortTktNEvo/jq+yKHUP6wZqh+AuNxQvedFse4jHhFpRkpXbSL223z3H8Fkf3YG50Zysn0CHq6eh2bI4eRpdAqojg2PP59cXnwzMMUFzlM8WugM420Q16IbqXiEkkYyonbbA4vhcrYuXwo2tAIyHHsuw+Xsd4x0dKkfJl2lObzm1aSToniy6fTUHisuh7bY6jdIBGjw9CeRoWb4mB6M+cVftpgKNzlsTexaWBE0hzz4WM3tMnrEvX63YxmGffvINGhgL0UCgnGe4Bb4mxu88sgW5c7AEOd2JevUeQHujwg1fdHor1RTDo2n93YiaMcEjpNpNt+qGycu9uyHMrdSWGAj2ySB6BzRcfPvpzNdmuxEjD6E+lPZmYDJjSlRhXP4aCyFMUef6TpGYweTJO6jMfaX64NP1QjhfZSPqlin4cYgnuumrz4kvmaysKDPiulUKOYLYc7eSGnSXzcBJvTPl1LhbXvWSePpwKY2eXzDP5Dmzj38qyDocTocMdWjLvfj06p6ks34zLIVJKSoWyEvqfxLrRQxYk11soN7ZDSByO27GD+h+yaAeMmvkz6Os5oOPzU50kxqL80Zzwdc8thgZo0xkWT6ykrwpcMrB9RkSugiboU6Z95jZK8BXQlNhqJ5qVbc2tL1nYAE3QamVkfuaflFJvoIvBlNoYCFtboBF6zS97NMSUWEpaLh2z7i5Q1Uqw3x4du0Tr6lLtfonVb+guMo2r0T4kSHGuJ0KdlVztWglEyck1jZZ/KzTj8isM3OpGmmDWzJ+m3F56ATjzOH8RMNfG8ls+o8R7a4Wtgtx/sK7Qx7PuI501lXIEPeSlFw6c16QMKtp9plMkHVHGWTlX9tK4aW5qz2tSbDPj2+D8x5SYLyExOf2aFKXKwy31N3t5r51BWh/+FNXzpkCwleAUc9l42aoLb8ewRR2ajsmpnNNHSjZKQP6AYrexRPh0cub+hi8k0vUqpg9mXJ/uVzFdhgv+B9Ms/PGTm/RMAAAAAElFTkSuQmCC";function sx(){const t=oo().state;return s.jsxs(nx,{children:[s.jsx(gn,{}),s.jsx(rx,{children:s.jsxs(ox,{children:[s.jsx("img",{src:ax,alt:""}),s.jsx("h2",{children:"Transferencia enviada com sucesso!"}),t&&s.jsx(s.Fragment,{children:s.jsxs(ix,{children:[s.jsx("small",{className:"date",children:t.date}),s.jsx("div",{className:"border"}),s.jsx("br",{}),s.jsxs("span",{children:["R$ ",t.number]}),s.jsx("div",{className:"border"}),s.jsx("br",{}),s.jsxs("div",{className:"name",children:[s.jsx("p",{id:"send",children:"De: "}),"SigmaBank "]}),s.jsxs("div",{className:"name",children:[s.jsx("p",{id:"send",children:"Para: "}),t.selectedOption==="cpf"&&s.jsx("div",{children:t.userCpf}),t.selectedOption==="cnpj"&&s.jsx("div",{children:t.userCnpj}),t.selectedOption==="telephone"&&s.jsx("div",{children:t.userTelephone})]}),t.cpf&&s.jsxs("div",{className:"type-dados",children:["cpf: ",t.cpf]}),t.cnpj&&s.jsxs("div",{className:"type-dados",children:["cnpj: ",t.cnpj]}),t.telephone&&s.jsxs("div",{className:"type-dados",children:["telefone: ",t.telephone]}),s.jsx("div",{className:"title-sigmabank",children:" conta: SigmaBank "}),s.jsx(Mi,{to:"/pagamentos",children:s.jsx(lx,{children:"fazer nova transação"})})]})})]})})]})}const ux=j.div`

    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    height: 100px;
    flex-direction: column;

        img{
            width: 120px;
            height: 60px;
        }

`,cx=j.section`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    position: fixed;
    gap: 20px;



    @media (max-width: 1090px) {
        &{
            text-align: center;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin: auto;
            display: grid;
            grid-template-columns: 50% 1fr;
            position: relative;
            }
        .container-card{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            margin-bottom: 40px;
        }

    @media (max-width: 738px) {
        display: flex;
        flex-direction: column;
    }
    }

    .container-card:hover{
        border: 2px solid #FF9900;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .container-card{
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 250px;
        border-radius: 8px;
        background-color: #3D3B37;
    }
    
    .content , .content-extract{
        width: 100%;
        min-height: 100%;
        border-radius: 8px;

        background-color: #3D3B37;
        color: #fff;

        border: none;
        cursor: pointer;
        
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
    }

    span{
        font-size: 22px;
    }

    .img{
        width: 60px;
    }
`,mr=j(Mi)`
        width: 100%;
        min-height: 100%;
        border-radius: 8px;

        border: none;
        cursor: pointer;
        
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;

        text-decoration: none;
    
`,gr=j.svg`
    font-size: 60px;
    color: #FF9900;
`;function Nc(){return s.jsxs(s.Fragment,{children:[s.jsx(gn,{}),s.jsx(ux,{className:"logo",children:s.jsx("img",{src:Tf,alt:"Logo"})}),s.jsxs(cx,{children:[s.jsx("div",{className:"container-card",children:s.jsx(mr,{to:"/criar",children:s.jsxs("button",{className:"content",children:[s.jsx(gr,{as:e2}),s.jsx("span",{children:"Criar cartão digital"})]})})}),s.jsx("div",{className:"container-card",children:s.jsx(mr,{to:"/meus-cartoes",children:s.jsxs("button",{className:"content",children:[s.jsx(gr,{as:i2}),s.jsx("span",{children:"Seus cartões"})]})})}),s.jsx("div",{className:"container-card",children:s.jsx(mr,{to:"/pagamentos",children:s.jsxs("button",{className:"content",children:[s.jsx(gr,{as:Of}),s.jsx("span",{children:"Pix"})]})})}),s.jsx("div",{className:"container-card",children:s.jsx(mr,{to:"/extrato",children:s.jsxs("button",{className:"content-extract",children:[s.jsx(gr,{as:s2}),s.jsx("span",{children:"Extrato"})]})})}),s.jsx("div",{className:"container-card",children:s.jsx(mr,{to:"/poupanca",children:s.jsxs("button",{className:"content-extract",children:[s.jsx(gr,{as:bf}),s.jsx("span",{children:"POUPA HEROI!"})]})})})]}),s.jsx(lr,{}),s.jsx(Vs,{})]})}function dx(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M4 9C4 8.44772 4.44772 8 5 8H9C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9Z",fill:"currentColor"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4 3C1.79086 3 0 4.79086 0 7V17C0 19.2091 1.79086 21 4 21H20C22.2091 21 24 19.2091 24 17V7C24 4.79086 22.2091 3 20 3H4ZM20 5H4C2.89543 5 2 5.89543 2 7V14H22V7C22 5.89543 21.1046 5 20 5ZM22 16H2V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V16Z",fill:"currentColor"}}]})(e)}function px(e){return U({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14.341 5.579c-0.347-0.473-0.831-1.027-1.362-1.558s-1.085-1.015-1.558-1.362c-0.806-0.591-1.197-0.659-1.421-0.659h-5.75c-0.689 0-1.25 0.561-1.25 1.25v11.5c0 0.689 0.561 1.25 1.25 1.25h9.5c0.689 0 1.25-0.561 1.25-1.25v-7.75c0-0.224-0.068-0.615-0.659-1.421zM12.271 4.729c0.48 0.48 0.856 0.912 1.134 1.271h-2.406v-2.405c0.359 0.278 0.792 0.654 1.271 1.134v0zM14 14.75c0 0.136-0.114 0.25-0.25 0.25h-9.5c-0.136 0-0.25-0.114-0.25-0.25v-11.5c0-0.135 0.114-0.25 0.25-0.25 0 0 5.749-0 5.75 0v3.5c0 0.276 0.224 0.5 0.5 0.5h3.5v7.75z"}},{tag:"path",attr:{d:"M9.421 0.659c-0.806-0.591-1.197-0.659-1.421-0.659h-5.75c-0.689 0-1.25 0.561-1.25 1.25v11.5c0 0.604 0.43 1.109 1 1.225v-12.725c0-0.135 0.115-0.25 0.25-0.25h7.607c-0.151-0.124-0.297-0.238-0.437-0.341z"}}]})(e)}const fx=j.section`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
`,hx=j.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
`;j(k2)`
  font-size: 22px;
  color: #FFFFFF;
`;j(j2)`
  font-size: 22px;
  color: #FFFFFF;
`;const mx=j.div`
    width: 20%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    display: inline-flex;

    @media (max-width: 1280px){
      width: 500px;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
    @media (max-width: 630px){
      width: 450px;
    }

    @media (max-width: 560px){
      width: 350px;
      text-align: center;
      align-items: center;
      justify-content: center;
      margin: auto;
    }
`,gx=j.div`
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: 300px;
  width: 800px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
  border-radius: 5px;
  background-color: #272521;

  .container-extract-empty{
    margin-top: 40px;
  }

  h3{
    color: #D9D9D9;
    font-size: 30px;
    opacity: 0.2;
  }


  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #22222299;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }

  .container-info {
    display: flex;
    flex-direction: column;
    width: 600px;
    min-height: 150px;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
    position: relative;
    background-color: #3D3B37;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  }

  .title-extract {
    display: flex;
    width: 76%;
    padding-top: 30px;
    padding-bottom: 10px;
    text-align: center;
    align-items: center;
    justify-content: flex-start;
    margin: auto;
    color: #fff;
    font-size: 30px;
  }

  .icon-container {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:auto;
    width: 50px;
    height: 46px;
    top: 8px;
    left: 8px;
    background-color: #D9D9D9;
    border-radius: 50%;
    color: #222222;
  }

  .name {
    display: flex;
    font-weight: 300;
    color: #FF9900;
    font-size: 14px;
    margin-bottom: 5px;
  }

  .name__number {
    display: flex;
    justify-content: space-between;
  }

  .number{
    display: flex;
    color: #fc1313;
    font-size: 22px;
    font-weight: 500;
    background-color: #D9D9D9;
    border-bottom-left-radius: 16px;
    justify-content: flex-end;
    padding-right: 5px;
   
    width: 93%;

  }

  .type-date {
    display: flex;
    justify-content: space-between;
    color: #D9D9D9;
    margin-top: 5px;
  }
  .title-type {
    font-size: 16px;
  }

  .date {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    font-size: 16px;
  }
  .dados {
    margin-top: 6px;
    color: #D9D9D9;
    font-size: 14px;
  }
  .describe {
    color: #D9D9D9;
    word-break: break-word;
    margin-bottom: 5px;
  }

  span,
  small {
    font-size: 14px;
    margin-top: 10px;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    word-break: break-word;
  }

  .border-info {
    margin-top: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 15px auto;
    width: 340px;
    height: 1px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 880px) {
    width: 640px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @media (max-width: 680px){
    width: 500px;

    .container-info {
      width: 440px;
      
    }
    small, .title-type {
      font-size: 18px;
    }
    
    .dados {
      margin-top: 10px;
    }
    .describe {
      margin-top: 6px;
      font-size: 18px;
    }

  }
  @media (max-width: 550px){
    width: 400px;

    .container-info {
      width: 380px;
    }
    small, .title-type {
      font-size: 16px;
    }

    .dados {
      margin-top: 10px;
      font-size: 14px;
    }
    .describe {
      margin-top: 8px;
    }
  }
  @media (max-width: 430px){
    width: 350px;

    .container-info {
      width: 330px;
      min-height: 180px;
    }

    .title-type{
      font-size: 14px;
      width: 280px;
    }
    .date {
      font-size: 12px;
      width: 220px;
    }

    .dados {
      margin-top: 10px;
      font-size: 14px;
    }

    .describe{
      font-size: 14px;
    }
  }
`,xx=j(px)`
  color: #D9D9D9;
  font-size: 70px;
  opacity: 0.2;

`,vx=j(dx)`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:auto;
`;function yx(){const e=JSON.parse(localStorage.getItem("Pix"))||[],[t,n]=v.useState(!0);return v.useEffect(()=>{n(e.length===0)},[e.length]),s.jsxs(s.Fragment,{children:[s.jsx(gn,{}),s.jsxs(fx,{children:[s.jsxs(mx,{children:[s.jsx(lr,{}),s.jsx(hx,{children:s.jsxs(gx,{children:[s.jsx("p",{className:"title-extract",children:"Extrato"}),t?s.jsxs("div",{className:"container-extract-empty",children:[s.jsx(xx,{}),s.jsx("h3",{children:"Extrato esta vazio"})]}):e.map((r,o)=>s.jsxs("div",{children:[s.jsxs("div",{className:"container-info",children:[s.jsx("div",{className:"icon-container",children:s.jsx(vx,{})}),s.jsx("div",{className:"name__number",children:s.jsxs("span",{className:"number",children:[" - R$",r.number]})}),s.jsxs("div",{className:"type-date",children:[s.jsx("span",{className:"title-type",children:"tipo de transferencia: PIX "}),s.jsxs("small",{className:"date",children:[" ",r.date]})]}),e&&(r.cpf?s.jsxs("span",{className:"name",children:["para: ",r.userCpf]}):r.cnpj?s.jsxs("span",{className:"name",children:["para: ",r.userCnpj]}):r.telephone?s.jsxs("span",{className:"name",children:["para: ",r.userTelephone]}):null),r.cpf&&s.jsxs("small",{className:"dados",children:["cpf: ",r.cpf]}),r.cnpj&&s.jsxs("small",{className:"dados",children:["cnpj: ",r.cnpj]}),r.telephone&&s.jsxs("small",{className:"dados",children:["telefone: ",r.telephone]}),s.jsxs("small",{className:"describe",children:[" Descrição: ",r.describe]})]}),s.jsx("div",{className:"border-info"})]},o))]})})]}),s.jsx(Vs,{})]})]})}const wx=j.section`
  width: 100%;

  @media screen and (max-width: 970px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`,Sx=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  margin-top: 45px;
  overflow-y: hidden;

  @media screen and (max-width: 970px) {
    & {
      flex-direction: column;
      margin-bottom: 40px ;
    }
  }
  @media screen and (max-width: 580px) {
    & {
      width: 400px;
      margin: 50px auto;
      overflow: hidden;
    }
  }
  @media screen and (max-width: 430px) {
    & {
      width: 350px;
      margin: 25px auto;
    }
  }
`,Cx=j.div`
  height: 450px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  position: relative;
  display: flex;
  overflow: hidden;
  transition: width 0.8s ease-in-out;
  width: ${e=>e.isOpen?"400px":"0"};

  .hero {
    position: absolute;
    bottom: 25px;
    right: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 970px) {
    & {
      margin-top: 24px;
      width: 550px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 0;
      display: flex;
      flex-direction: column;
      transition: height 0.8s ease-in-out;
      height: ${e=>e.isOpen?"400px":"0"};
    }
  }
  @media screen and (max-width: 580px) {
    & {
      width: 400px;
      margin: auto;
    }
  }
  @media screen and (max-width: 430px) {
    & {
      width: 350px;
      margin: auto;
    }
    .hero{
      right: 5px;
    }
  }
`,kx=j.div`
  position: fixed;
  width: 370px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 30px;
    margin-top: 15px;
    color: #d08009;
  }

  h3 {
    font-size: 26px;
    margin-top: 5px;
  }

  H2 {
    margin-top: 10px;
    color: #0375b4;
  }
  p {
    margin-top: 15px;
    font-weight: 600;
  }

  span {
    color: #0375b4;
  }
`,jx=j.button`
  cursor: pointer;
  position: absolute;
  margin-left: -25px;
  top: 34%;

  background-color: #272521;
  border-bottom: 2px solid #ff9900;
  border-top: 2px solid #ff9900;
  border-left: 2px solid #ff9900;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 150px;
  width: 25px;

  > svg {
    color: #ff9900;
    font-size: 18px;
  }

  @media screen and (max-width: 970px) {
    & {
     display: none;
    }
  }

`,Ex=j.div`
  width: 550px;
  height: 450px;
  background-color: #272521;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 2;
  position: relative;

  .container-cover {
    height: 450px;
    width: 180px;
  }

  .img-bottom {
    position: absolute;
    top: 0;
    width: 200px;
  }
`,zx="/app-banco/assets/noto_man-superhero-ef21e515.png",Fx=j.div`
    width: 100%;
    display: flex;
    margin-top: 45px;
    justify-content: center;
    gap: 2px;


`,Nx=j.div`
    width: 210px;
    height: 130px;
    background-color: #3D3B37;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    position: relative;

    .content-total{
        text-align: center;
    }

    .icon-three-points{
        font-size: 20px;
        color: #FFFFFF;
    }
    span{
        color: #FFFFFF;
        font-size: 26px;
    }
    hr{
        margin-top: 5px;
    }
    p{
        margin-top: 5px;
        color: #FFFFFF;
        font-size: 16px;
    }
    @media screen and (max-width: 580px) {
    & {
      width: 155px;
  }
  }
`,Px=j.div`
    min-width: 210px;
    height: 130px;
    background-color: #3D3B37;
    display: inline-flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    z-index: 1;

    span{
        color: #FFFFFF;
        font-size: 26px;
    }
    hr{
        margin-top: 5px;
    }
    p{
        margin-top: 5px;
        color: #FFFFFF;
        font-size: 14px;
    }

    @media screen and (max-width: 580px) {
    & {
      min-width: 155px;
    }

    span{
        color: #FFFFFF;
        font-size: 20px;
    }
  }
`,Ax=j.div`
  height: 20px;
  width: 100%;
  border-radius: 16px;
  border: 2px solid #fff;
  margin-bottom: 35px;
  position: relative;
  z-index: 1;

  .circle{
    background-color: #FFFFFF;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    position: absolute;
    right: -4px;
    bottom: -5px;
  }

  .children-circle{
    background-color: #3D3B37;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50px;
    bottom: 3px;
    right: 3px;
  }

  @media screen and (max-width: 580px) {
    & {
    margin: auto;
    max-width: 320px;      
    }
  }
  `,Ix=j.div`
max-width: 420px;
width: ${e=>e.style.width||"0"}; 
background-color: ${e=>e.style.backgroundColor||"transparent"}; 
height: 16px;
background-color: #00C2FF;
border-radius: 16px;

@media screen and (max-width: 580px) {
    & {
      max-width: 320px;      
    }
  }

`,bx=j.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    margin: 10px auto;

    input{
        height: 70px;
        padding: 5px;
        font-size: 22px;
        text-align: center;
        background-color: #D8D7D6;
        border: none;
        z-index: 1;
    }

    input::placeholder{
        font-size: 22px;
        text-align: center;
        color: #50340B;
    }

    button{
        height: 40px;
        background: rgb(255,214,0);
        background: linear-gradient(90deg, rgba(255,214,0,1) 0%, rgba(255,153,0,1) 100%);
        border: 2px solid #FFFFFF;
        color: #111111;
        border-radius: 4px;
        font-size: 18px;
        font-weight: 700;
        margin-top: 10px;
        cursor: pointer;
        z-index: 1;
    }

    @media screen and (max-width: 580px) {
    & {
      max-width: 320px;   
      margin-top:20px;
    }
    input{
        margin-top: 20px;
    }
  }

    `,Ox=j.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 10px 0px;
    position: relative;
    
    label{
        position: absolute;
        font-size: 14px;
        color: #fff;
        bottom: 20px;
        right: -10px;
        padding: 4px;
        width: 25px;
        background-color: red;
        text-align: center;
        border-radius: 50%;
    }

    span{
        color: #FFFFFF;
        font-size: 14px;
    }

    img{
        width: 25px;
        height: 25px;
        margin-left: 5px;
        margin-bottom: 5px;
        cursor: pointer;
    }

`,Tx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAeCAYAAACiyHcXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF7SURBVHgB7VfRUYNAEH3cUAAlnB2YCjQVxFRgGCuwAk0JfjtqUoFaQSghHUgHUoADvoO7eMPcgYEJ4YM3s0NgX/Ze9jZ7S4B/oHjGNUI88OMlLaIltDiIkTo4kpbR9rS1zfEhaCMUb2XgR497zkWS4hW3jLRx+DPN2aOrCAqQvHw1UDL8YMkMvKPKkAspbUYhmS+IQBNy3NSCzVVA4BAwooAd/gSk2m9zZC3OkSKCsgaMoK1KfZnaAlu4RT8pv+Z8Wh6JziIKay8FFtyeSBnFLTzRbM6V9by9JnTxrTwcWbtXafbtv/GjxkmdPJW5O2yCluo/PXLcKxHfaP5lp0Ya9hRwoa+StkNHhOgB0w2ZzV4QGAGUiAznRaa2Y8YKXaEf1N9tjS4QzjNneFTN6oV9QpT94rgvx4dmJ9F80LmRcxxgsxpNYZ4dkwiDSYTBJMJgEmEwChFmqOl0nPPMKNAHolpX6JsPDD9XpKjeVysRekxbmocDIFHrmfHwF8jWaeEw2BP0AAAAAElFTkSuQmCC",Rx="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG3SURBVHgB5Zb/VYMwEMcPnwPgBjiBOIG4gSPQDbqBOkG7Ad3AEXidoG6QbtA6wde75tqGCJSQ4j/9vHcE8usbLscRIg8AKXUgbWzvbDtYjDxTDDxBxlbjTCV1Xh+Ddmoaiwr5iFCp7aXXtvOeSwqFB72hH4Pm28513NKpq0I0E53AcJEFjHtIkmTP43K+32jdN9srW8n2pHVr7rdqnUEGI5yFeukLTdfvWvpu0BawsJG6wbQsqAvY4DGIx8B6Y+7UiSfSPnF5+w/EMXfmcz2Z0yVgv+kVLr+ZaamvnTnc9pSGwp0LdLs/0z5DPDQuweDv/leed/ow8DJgqLgILP2J0J7xfKoocRVKnfuQHGDgBF6CcP/POBttVVjGFhTGliTDIRzjzgL7vRqEUUcJQ92OYZ9fgzuKI9eFFOz+kstHsj+Li+6OFRYytgoaK7yAZy5mZPeyi89YVxct7RX6k4s5Dr628KEPzocFf/+zKYXdBZTOAk454J6mJSO7/y9crnUBKcfBcmrhI6WasJLLNaJ6FLcnLHu8Zxt+OuCAgZevA/k5XNE8ov4H+VFYDnhBCX4kctI8/Y9/AUdfkynucn47AAAAAElFTkSuQmCC",Lx=j.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;  
    z-index: 997;

`,Pc=_s`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;j(Us)`
    font-size: 70px;
    color: #ED8181;
    margin-top: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;const Dx=j.div`
    background-color: #FF9900;
    padding: 10px;
    width: 550px;
    height: 328px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    animation: ${Pc} 0.2s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    z-index: 998;

    .gold{
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      font-weight: bold;
      font-size: 18px;
    }

    .circle{
      position: absolute;
      left: 0px;
      top: 40%;
      width: 30px;
      height: 60px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      background-color: #242424;
    }

    .circle-two{
      position: absolute;
      right: 0px;
      top: 40%;
      width: 30px;
      height: 60px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      background-color: #242424;
    }


    h1{
        font-weight: 900;
        font-size: 70px;
        color: #761f75;
        font-family: 'Inter', sans-serif;
    }

    span{
      color: #242424;
      font-size: 18px;
    }

    .container-coupon{
        width: 400px;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding: 10px;
        border: 2px dashed #242424;
        background-color: #E3E3E3;
    }

    .coupon{
        color: #242424;
        font-size: 18px;
    }

    .coupon-code{
        font-weight: 900;
        font-size: 24px;
        color: #761f75;
    }

    .copied{
      align-items: center;
      justify-content: center;
      margin: 3px auto;
      width: 268px;
      background-color: green;
      color: #E3E3E3;
      animation: ${Pc} 0.2s ease-in-out;
      padding: 4px;
      
    }

    small{
      color: #E3E3E3;
      font-weight: 600;
    }

@keyframes fadeInOut {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 250px;
  }
}

.hiding {
  width: 250px;
  position: absolute;
  left: -50px;
  top: 120px;

  animation: fadeInOut 0.2s ease-in-out;
}

.celebrating{
  width: 250px;
  right: 0px;
  margin-top: 86px;
}

  .container-text{
        position: absolute;
        width: 150px;
        height: 80px;
        right: 50px;
        top: 200px;
        border-radius: 48%;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        border: 2px solid #FF9900;
    }

    p{
        color: #242424;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 14px;
        margin: 15px;
    }

  .container-btn {
    display: flex;
    align-items: center;
  }

  .logo{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 60px;
    margin: auto;
  }

  .cancel{
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #761f75;
    top: 0;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 22px;
    cursor: pointer;
    width: 38px;
    height: 38px;
    border-radius: 50px;
  }

  .cancel:hover{
    background-color: #761f75;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
  }

  .confirm{
    background-color: #242424;
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #E3E3E3;;
    left:0 ;
    bottom: 20px;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.80);
  }

  .confirm:hover{
    background-color: red;
    border: 1px solid #FFFFFF;
  }
  button {
    height: 50px;
    width: 270px;
    cursor: pointer;
  }

  .container-date{
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px dashed #242424;
    width: 100%;
    padding: 6px;
    background-color: #E3E3E3;
  }

  @media screen and (max-width: 580px) {
          &{
            width: 90%;
          }
      .container-coupon {
        width: 320px;
      }
    }
    @media screen and (max-width: 480px) {
          &{
            width: 400px;
          }
      .container-coupon {
        width: 320px;
      }
    }
    @media screen and (max-width: 400px) {
          &{
            width: 360px;
          }

          h1{
            font-size: 50px;
          }
      .container-coupon {
        width: 320px;
      }
    }
`;var Hi={},Mx=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||n.forEach(function(o){e.addRange(o)}),t&&t.focus()}},Bx=Mx,Ac={"text/plain":"Text","text/html":"Url",default:"Text"},_x="Copy to clipboard: #{key}, Enter";function Ux(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Vx(e,t){var n,r,o,i,l,a,u=!1;t||(t={}),n=t.debug||!1;try{o=Bx(),i=document.createRange(),l=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(h){if(h.stopPropagation(),t.format)if(h.preventDefault(),typeof h.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var m=Ac[t.format]||Ac.default;window.clipboardData.setData(m,e)}else h.clipboardData.clearData(),h.clipboardData.setData(t.format,e);t.onCopy&&(h.preventDefault(),t.onCopy(h.clipboardData))}),document.body.appendChild(a),i.selectNodeContents(a),l.addRange(i);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");u=!0}catch(h){n&&console.error("unable to copy using execCommand: ",h),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(m){n&&console.error("unable to copy using clipboardData: ",m),n&&console.error("falling back to prompt"),r=Ux("message"in t?t.message:_x),window.prompt(r,e)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(i):l.removeAllRanges()),a&&document.body.removeChild(a),o()}return u}var $x=Vx;function ba(e){"@babel/helpers - typeof";return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ba(e)}Object.defineProperty(Hi,"__esModule",{value:!0});Hi.CopyToClipboard=void 0;var Fo=Mf(v),Hx=Mf($x),Wx=["text","onCopy","options","children"];function Mf(e){return e&&e.__esModule?e:{default:e}}function Ic(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function bc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ic(Object(n),!0).forEach(function(r){$s(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ic(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qx(e,t){if(e==null)return{};var n=Kx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Kx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Yx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gx(e,t,n){return t&&Oc(e.prototype,t),n&&Oc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Oa(e,t)}function Oa(e,t){return Oa=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Oa(e,t)}function Xx(e){var t=qx();return function(){var r=wi(e),o;if(t){var i=wi(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Zx(this,o)}}function Zx(e,t){if(t&&(ba(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Bf(e)}function Bf(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function qx(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function wi(e){return wi=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},wi(e)}function $s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _f=function(e){Jx(n,e);var t=Xx(n);function n(){var r;Yx(this,n);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=t.call.apply(t,[this].concat(i)),$s(Bf(r),"onClick",function(a){var u=r.props,c=u.text,h=u.onCopy,m=u.children,g=u.options,y=Fo.default.Children.only(m),S=(0,Hx.default)(c,g);h&&h(c,S),y&&y.props&&typeof y.props.onClick=="function"&&y.props.onClick(a)}),r}return Gx(n,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var i=o.children,l=Qx(o,Wx),a=Fo.default.Children.only(i);return Fo.default.cloneElement(a,bc(bc({},l),{},{onClick:this.onClick}))}}]),n}(Fo.default.PureComponent);Hi.CopyToClipboard=_f;$s(_f,"defaultProps",{onCopy:void 0,options:void 0});var ev=Hi,Ta=ev.CopyToClipboard;Ta.CopyToClipboard=Ta;var Uf=Ta;function tv({setOpenModal:e,closeBox:t}){const[n,r]=v.useState(""),[o,i]=v.useState(!1),l=new Date;function a(c){c.preventDefault(),r("Copiado"),o||setTimeout(()=>{i(!1),r("")},1500)}function u(){e(t)}return s.jsxs(s.Fragment,{children:[s.jsx(Lx,{onClick:u}),s.jsxs(Dx,{children:[s.jsx("div",{className:"circle"}),s.jsxs("div",{children:[s.jsx("p",{className:"gold",children:"Gold"}),s.jsx("h1",{children:"10% OFF"}),s.jsx("span",{children:"esse cupom pode ser usado em lojas parceiras"}),s.jsx("div",{className:"container-coupon",children:s.jsxs("p",{className:"coupon",children:["CUPOM:"," ",s.jsx("span",{className:"coupon-code",children:"SIGMA10"})]})}),s.jsx(Pf,{className:"cancel",onClick:t}),s.jsx(Uf.CopyToClipboard,{text:"SIGMA10",onCopy:()=>i(!0),children:s.jsx("button",{onClick:a,children:"Copiar"})}),n&&s.jsx("p",{className:"copied",children:n})]}),s.jsx("div",{className:"circle-two"}),s.jsx("div",{className:"container-date",children:s.jsxs("span",{className:"info-date",children:[" valido por 30 dias inicio: ",l.toLocaleDateString()]})})]})]})}const nv=j.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 997;

`,Tc=_s`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;j(Us)`
    font-size: 70px;
    color: #ED8181;
    margin-top: 30px;
    text-align: center;
    align-items: center;
    justify-content: center;
`;const rv=j.div`
    background-color: #242424;
    padding: 10px;
    width: 550px;
    height: 328px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    animation: ${Tc} 0.2s ease-in-out;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    z-index: 998;

    .premium{
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      font-weight: bold;
      font-size: 18px;
    }

    .circle{
      position: absolute;
      left: 0px;
      top: 40%;
      width: 30px;
      height: 60px;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      background-color: #E3E3E3;
    }

    .circle-two{
      position: absolute;
      right: 0px;
      top: 40%;
      width: 30px;
      height: 60px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      background-color: #E3E3E3;
    }

    h1{
        font-weight: 900;
        font-size: 70px;
        color: #761f75;
        font-family: 'Inter', sans-serif;
    }

    #span{
      color: #761f99;
      font-size: 18px;
    }

    .container-coupon{
        width: 400px;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding: 10px;
        border: 2px dashed #242424;
        background-color: #E3E3E3;
    }

    .coupon{
        color: #242424;
        font-size: 18px;
    }

    .coupon-code{
        font-weight: 900;
        font-size: 24px;
        color: #761f75;
    }

    .copied{
      align-items: center;
      justify-content: center;
      margin: 3px auto;
      width: 268px;
      background-color: green;
      color: #E3E3E3;
      animation: ${Tc} 0.2s ease-in-out;
      padding: 4px;
      
    }

    small{
      color: #E3E3E3;
      font-weight: 600;
    }

@keyframes fadeInOut {
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 250px;
  }
}

.hiding {
  width: 250px;
  position: absolute;
  left: -50px;
  top: 120px;

  animation: fadeInOut 0.2s ease-in-out;
}

.celebrating{
  width: 250px;
  right: 0px;
  margin-top: 86px;
}

  .container-text{
        position: absolute;
        width: 150px;
        height: 80px;
        right: 50px;
        top: 200px;
        border-radius: 48%;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin: auto;
        border: 2px solid #FF9900;
    }

    p{
        color: #242424;
        font-family: "Inter", sans-serif;
        font-weight: 500;
        font-size: 14px;
        margin: 15px;
    }

  .container-btn {
    display: flex;
    align-items: center;
  }

  .logo{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 60px;
    margin: auto;
  }

  .cancel{
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #761f75;
    top: 0;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-size: 22px;
    cursor: pointer;
    width: 38px;
    height: 38px;
    border-radius: 50px;
  }

  .cancel:hover{
    background-color: #761f75;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
  }

  .confirm{
    background-color: #242424;
    border-radius: 5px;
    margin-bottom: 20px;
    position: absolute;
    border: none;
    color: #E3E3E3;;
    left:0 ;
    bottom: 20px;
    right: 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: auto;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.80);
  }

  .confirm:hover{
    background-color: red;
    border: 1px solid #FFFFFF;
  }
  button {
    height: 50px;
    width: 270px;
    cursor: pointer;
  }

  .container-date{
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px dashed #242424;
    width: 100%;
    padding: 6px;
    background-color: #E3E3E3;


  }

  @media screen and (max-width: 580px) {
          &{
            width: 90%;
          }
      .container-coupon {
        width: 320px;
      }
    }
    @media screen and (max-width: 480px) {
          &{
            width: 400px;
          }
      .container-coupon {
        width: 320px;
      }
    }
    @media screen and (max-width: 400px) {
          &{
            width: 360px;
          }

          h1{
            font-size: 50px;
          }
      .container-coupon {
        width: 320px;
      }
    }
`;function ov({setOpenModalPremium:e,closeBox:t}){const[n,r]=v.useState(""),[o,i]=v.useState(!1),l=new Date;function a(c){c.preventDefault(),r("Copiado"),o||setTimeout(()=>{i(!1),r("")},1500)}function u(){e(t)}return s.jsxs(s.Fragment,{children:[s.jsx(nv,{onClick:u}),s.jsxs(rv,{children:[s.jsx("div",{className:"circle"}),s.jsxs("div",{children:[s.jsx("p",{className:"premium",children:"Premium"}),s.jsx("h1",{children:"20% OFF"}),s.jsx("span",{id:"span",children:"esse cupom pode ser usado em lojas parceiras"}),s.jsx("div",{className:"container-coupon",children:s.jsxs("p",{className:"coupon",children:["CUPOM:"," ",s.jsx("span",{className:"coupon-code",children:"SIGMA20"})]})}),s.jsx(Pf,{className:"cancel",onClick:u}),s.jsx(Uf.CopyToClipboard,{text:"SIGMA20",onCopy:()=>i(!0),children:s.jsx("button",{onClick:a,children:"Copiar"})}),n&&s.jsx("p",{className:"copied",children:n})]}),s.jsx("div",{className:"circle-two"}),s.jsx("div",{className:"container-date",children:s.jsxs("span",{className:"info-date",children:[" valido por 60 dias inicio: ",l.toLocaleDateString()]})})]})]})}function iv({total:e,progress:t,cdi:n,inputValue:r,setInputValue:o,handleAddTransaction:i,presentNumber:l,setPresentNumber:a,fullTotal:u}){const c=JSON.parse(localStorage.getItem("presentNumber"))||0,[h,m]=v.useState(!1),[g,y]=v.useState(!1),[S,C]=v.useState(!1);function P(){c===1?(m(!0),localStorage.setItem("presentNumber",JSON.stringify(0)),a(0),C(!0)):c>=2?(y(!0),localStorage.setItem("presentNumber",JSON.stringify(0)),a(0),C(!0)):(m(!1),C(!1))}function f(){c===1||c>=2?C(!0):(m(!1),C(!1))}function d(p){const w=p.charCode;(w<48||w>57)&&w!==8&&w!==13&&p.preventDefault()}return s.jsxs(s.Fragment,{children:[s.jsxs(Fx,{children:[s.jsx(Nx,{children:s.jsxs("div",{className:"content-total",children:[s.jsx("span",{children:u}),s.jsx("hr",{}),s.jsx("p",{children:"Sua Poupança Atual"})]})}),s.jsx(Px,{children:s.jsxs("div",{className:"content-total",children:[s.jsxs("span",{children:["R$ ",n]}),s.jsx("hr",{}),s.jsxs("p",{children:["Expectativa de doação ",s.jsx("br",{})," por mês"]})]})})]}),s.jsxs(bx,{children:[h&&s.jsx(tv,{setOpenModal:m,closeBox:f}),g&&s.jsx(ov,{setOpenModalPremium:y,closeBox:f}),s.jsxs(Ox,{children:[s.jsx("span",{children:`${e} /10000`}),s.jsx("label",{children:l}),S?s.jsx("img",{onClick:f,src:Rx,alt:"Caixa"}):s.jsx("img",{onClick:P,src:Tx,alt:"Caixa"})]}),s.jsxs(Ax,{children:[s.jsx("div",{className:"circle",children:s.jsx("div",{className:"children-circle"})}),s.jsx(Ix,{style:{width:`${t}%`}})]}),s.jsx("input",{type:"text",placeholder:"R$ 0,00",maxLength:5,onKeyPress:d,value:r,onChange:p=>o(p.target.value)}),r?s.jsx("button",{type:"button",onClick:i,children:"Depositar"}):s.jsx("button",{type:"button",disabled:!0,onClick:i,children:"Depositar"})]})]})}const lv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVESURBVHgBtVntcds4EH3gKLGc/NFVYKYCUxWcVEF8FcSuwHYFpiqIXYGdCqwOzKtAcgXHdMBfluSLieySkEQswC8leTOeEcnF4mGxeFjACgdiEY9GwDoKoD5rIKRXEf2NzB8jA1QK6ExD/0vPyTheJ03+AmxuTuPVte+7Qm+Cw4khd14h1RWJxtE/4zjLIEgqvD4BeRbF66mv4QA9CCqoG/o50TgIKUX2op6k5hlJ6hq3Et1OCZG7wuFgklOa+hT1JBsxaCY5DBU2TyYH67Ck75SDesmErC+aCKiA2urbXyHZSHQRv4toqsmRNw95gdwBw1s5lQKJ33c/kgxVT3LgI9mVYC1aSLLPJVySS+U64ukuIhmKT5RnP2jF/r/EgTgkkkSTUuv9dOA62nhIapKVIZFcZXUESFPPuJ1CcBLFLxfeLrG5R6m3vUjy7FlEzeoOpXEUr0jb1nAJbiVrM9lnUSFeXqLopbt7kvw0qHQaeiQoZWPgRRLk9ODoTPBHYJNkBLtPZccWSu2zF83z7OMXsl0cSLJDRF2SjCKiHCHZMZGcudr34Uzr/KGmh8yrpQbL+MN9+yLyk9wRpey6Ee9TlqBqXpbTre893nnXmZH9vE6yDMlzHEhyR5SMzqwmwDwSDXziTwS/EcGr0vkaPUkuubIynkifjz11AAcneCQVGQ945UoCeSHqVoNzCDWghXdHqXFVR7CJJA+Q2or3G7gkOTg6ZI4c0Yn0L3OTGnwRNvT9KAZWkCjz/Y30+N1ld5KoIbkLzmRAL/62HXGBITv2LTSpBseXWiNGMTsDGD3tTbKEuoI1gyoawJEMLbbIIBKdZtTZQ/UFpwaRvEUDupPcctjv7vTrNIBnT7cf88h1YsMU1L+JJCOQK3/ERNtEOBRO0urTIv4YobleJbzdohdyh2jno0gDiazv0YtS5cFeoOqhrpDZgiPaVlem9qMOq09GIZp8pLI0JJInlkfk39GMLNiL7g6h7Eg8R2VZV+lIY4YalLuWA5H3+bKNQ8Bbl/1OCSfDuWi0rT13GM9Wt3zChD2ojAZw7VMIOOsiaOGgs4CExwo7ZZulq0YvE9tG3cioMiGqWz/RKWBMpD/R7794ADZJLsylQujE3WDgaDtPvYyYO7Xu9NHO8foVHnA+yo634MIc7lb8DdZgig1GVlkJER1y2EWe8h5e7by4iklsG33+HB9/lYPygW143/cV5jI16BbmUtjwBpMEPLVyVDQ9l56oXsgBccd0DlqYvPMS5G9s49n3+UQ7lfbk88w2U8WMGx3l6bdGMjJRjbcveDqp02vPSaA4liwpuihKN74YK3yGVBHRFCpvxDUUlXWrtPouUK9cL4S2XV6k3U6pqSOuViawRvxjKjWQq3xTQPc4qFngSPrUgAf8n22qk+2lWbBn7iwYWqGDR3d1v8zJdoyaI0cz+Nitxy7JQg2eHOvKaTbYE1gnXAwLW757epQOOA1KKeK81Qm6EZxydHyKUF5KeAvzdG9TgbmAWMBztm86z5SSwuVgTldBODEdsT6nTWcp0x8HYiI+0TnsaFxtV3elw2RHbmM9rdPIvjD3W0wy7NJP30syKKXiXL+/+5VLsnJ16yt4L+HcBVxLtELWN2JGSqfDeY63u64RbiHYSLKRaOm89mav6oKuBHVCJ9dnuEoQ0k5zSpo5abl8aE2r1oq3lKdNTIaX+AMoleYobkulzqV5GV2Q0HN0fgdYsjBr+pdOFf3OENhVNxRh9Rn9dydTV+h5V4Jb9CZahbllmZT1Y7Gnh7D+IaaLizON4HtZTwyXh6rFTzIf5BVtAKJWAAAAAElFTkSuQmCC",av=j.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    position: relative;
    
    .content-poupa-hero{
        width: 300px;
        height: 380px;
        position: absolute;
    }

    h1{
        color: #D08009;
    }

    .target{
        width: 25px;
    }

    p{
        margin: 20px 0;
    }

    h3{
        font-size: 22px;
    }

    span{
        color: #0375B4;
    }

    h2{
        font-size: 23px;
        color: #0375B4;
    }

`;function sv(){return s.jsx(av,{children:s.jsxs("div",{className:"content-poupa-hero",children:[s.jsxs("h1",{children:["POUPA HEROI ",s.jsx("img",{className:"target",src:lv,alt:"Image-alvo"})," "]}),s.jsx("p",{children:"Programa de ajuda a institutos que cuidam de crianças e adolescentes."}),s.jsx("h3",{children:"Faça parte desta campanha!"}),s.jsx("p",{children:"Ao poupar com POUPA HERÓI!!, o valor do juros do CDI (100% CDI) será doado para instituição carentes."}),s.jsxs("p",{children:["Com isso Ao alcançar a meta do POUPA HERÓI, você Ganha ",s.jsx("span",{children:"CASHBACK e DESCONTOS em lojas parceiras! "})," "]}),s.jsx("h2",{children:"Você ganha e nossas Crianças tambem!"})]})})}const uv="/app-banco/assets/capa-fundo-2-35e7c7ad.png";function cv(){const e=JSON.parse(localStorage.getItem("cdi"))||0,t=JSON.parse(localStorage.getItem("inputValue"))||"",n=JSON.parse(localStorage.getItem("total"))||0,r=JSON.parse(localStorage.getItem("presentNumber"))||0,o=JSON.parse(localStorage.getItem("fullTotal"))||0,i=JSON.parse(localStorage.getItem("progress"))||0,l=JSON.parse(localStorage.getItem("accountBalance"))||3e4;localStorage.getItem("transaction");const a=JSON.parse(localStorage.getItem("transaction"))||[],[u,c]=v.useState(a),[h,m]=v.useState(e),[g,y]=v.useState(t),[S,C]=v.useState(n),[P,f]=v.useState(r),[d,p]=v.useState(o),[w,k]=v.useState(i);v.useEffect(()=>{const ze=u.map(Ie=>parseFloat(Ie.amount)).reduce((Ie,be)=>Ie+be,0);p(ze)},[u]),v.useEffect(()=>{localStorage.setItem("cdi",JSON.stringify(h)),localStorage.setItem("inputValue",JSON.stringify(g)),localStorage.setItem("total",JSON.stringify(S)),localStorage.setItem("presentNumber",JSON.stringify(P)),localStorage.setItem("fullTotal",JSON.stringify(d)),localStorage.setItem("progress",JSON.stringify(w))},[h,g,S,P,d,w]);const z=()=>{const ze=u.filter(ue=>ue.expense).map(ue=>Number(ue.amount)).reduce((ue,X)=>ue+X,0);C(ze);const Ie=parseFloat(g)/1e3*10.9,be=h+Ie;if(m(be),parseFloat(g)>l){alert("Você está sem saldo suficiente para realizar essa transação."),y(""),m(h);return}if(g.trim()!==""){const ue=l-parseFloat(g);localStorage.setItem("accountBalance",JSON.stringify(ue));const X={id:Math.random(),expense:!0,amount:parseFloat(g)},F=S+parseFloat(g);if(C(F),F>=1e4){const O=Math.floor(F/1e4);f(W=>W+O);const $=F%1e4;C($),k(F/1e4*100)}else k(F/1e4*100);const b=[...u,X];c(b),localStorage.setItem("transaction",JSON.stringify(b)),y("");return}},[x,N]=v.useState(!0),[R,I]=v.useState(!0),se=()=>{N(!x),I(!R)};return s.jsxs(s.Fragment,{children:[s.jsx(gn,{}),s.jsxs(wx,{children:[s.jsxs(Sx,{children:[s.jsxs(Cx,{isOpen:x,children:[s.jsx(kx,{}),s.jsx(sv,{}),s.jsx("div",{children:s.jsx("img",{className:"hero",src:zx,alt:"Heroi"})})]}),s.jsxs(Ex,{children:[s.jsx(jx,{onClick:se,children:R?s.jsx(C2,{}):s.jsx(Df,{})}),s.jsx("form",{children:s.jsx(iv,{fullTotal:`R$ ${d}`,total:`R$ ${S}`,progress:w,presentNumber:P,setPresentNumber:f,cdi:h,inputValue:g,setInputValue:y,handleAddTransaction:z})}),s.jsx("img",{className:"img-bottom",src:uv,alt:"capa-do-container"})]})]}),s.jsx(lr,{})]})]})}function dv(){return s.jsx(s.Fragment,{children:s.jsx(Sm,{children:s.jsxs(mm,{children:[s.jsx(ht,{path:"/",element:s.jsx(Nc,{})}),s.jsx(ht,{path:"/criar",element:s.jsx(S2,{})}),s.jsx(ht,{path:"/meus-cartoes",element:s.jsx(X2,{})}),s.jsx(ht,{path:"/pagamentos",element:s.jsx(tx,{})}),s.jsx(ht,{path:"/enviado",element:s.jsx(sx,{})}),s.jsx(ht,{path:"/extrato",element:s.jsx(yx,{})}),s.jsx(ht,{path:"/poupanca",element:s.jsx(cv,{})}),s.jsx(ht,{path:"*",element:s.jsx(Nc,{})})]})})})}const pv=Eg`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
body{
    background-color: #161616;
    overflow-y: scroll; 
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-thumb {
    background-color: #FF9900;
  }


`;function fv(){return s.jsxs(s.Fragment,{children:[s.jsx(pv,{}),s.jsx(dv,{})]})}Fl.createRoot(document.getElementById("root")).render(s.jsx(pe.StrictMode,{children:s.jsx(fv,{})}));
