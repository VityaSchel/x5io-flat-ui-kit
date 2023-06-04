(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("._button_zhq6l_1{border:0;border-radius:100px;align-self:center;padding:21.5px 40px;text-transform:none;font-weight:600;font-size:18px;line-height:21px;letter-spacing:.02em;--accent: rgba(60, 81, 255, 1)}._button_zhq6l_1._contained_zhq6l_13{background:var(--accent)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
(function(i,f){typeof exports=="object"&&typeof module!="undefined"?module.exports=f(require("react")):typeof define=="function"&&define.amd?define(["react"],f):(i=typeof globalThis!="undefined"?globalThis:i||self,i.button=f(i.React))})(this,function(i){"use strict";function f(n){return n&&typeof n=="object"&&"default"in n?n:{default:n}}var m=f(i),a={button:"_button_zhq6l_1",contained:"_contained_zhq6l_13"},p={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var o={}.hasOwnProperty;function r(){for(var t=[],s=0;s<arguments.length;s++){var e=arguments[s];if(!!e){var u=typeof e;if(u==="string"||u==="number")t.push(e);else if(Array.isArray(e)){if(e.length){var v=r.apply(null,e);v&&t.push(v)}}else if(u==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var l in e)o.call(e,l)&&e[l]&&t.push(l)}}}return t.join(" ")}n.exports?(r.default=r,n.exports=r):window.classNames=r})()})(p);var y=p.exports,d={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=m.default,x=Symbol.for("react.element"),b=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,O=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function _(n,o,r){var t,s={},e=null,u=null;r!==void 0&&(e=""+r),o.key!==void 0&&(e=""+o.key),o.ref!==void 0&&(u=o.ref);for(t in o)j.call(o,t)&&!S.hasOwnProperty(t)&&(s[t]=o[t]);if(n&&n.defaultProps)for(t in o=n.defaultProps,o)s[t]===void 0&&(s[t]=o[t]);return{$$typeof:x,type:n,key:e,ref:u,props:s,_owner:O.current}}c.Fragment=b,c.jsx=_,c.jsxs=_,d.exports=c;const w=d.exports.jsx;function R({variant:n="contained",className:o,children:r,...t}){return w("button",{...t,className:y(a.button,{[a.contained]:n==="contained"},o),children:r})}return R});
