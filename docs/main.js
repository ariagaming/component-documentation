var MyLibrary=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function u(e,t){this.name=e.name,this.fields=t}t.default=function(e){function t(e){return Object.entries(e).map(function(e){var t=o(e,2),r=t[0],u=t[1];return"function"==typeof u?{name:r,type:u,isRequired:!1}:n({},u,{type:u.type||String,name:u.name||r})}).reduce(function(e,t){return n({},e,(r={},o=t.key,u=t,o in r?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,r));var r,o,u},{})}return e.fields&&e.name?new u({name:e.name},t(e.fields)):new u({name:"no-name"},t(e))}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n=function(e){};e.exports=function(e,t,r,o,u,i,a,c){if(n(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,u,i,a,c],s=0;(f=new Error(t.replace(/%s/g,function(){return l[s++]}))).name="Invariant Violation"}throw f.framesToPop=1,f}}},function(e,t,r){"use strict";var n=r(0),o=r(3),u=r(2);e.exports=function(){function e(e,t,r,n,i,a){a!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){e.exports=r(4)()},function(e,t,r){"use strict";e.exports={}},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,a=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var f in r=Object(arguments[c]))o.call(r,f)&&(a[f]=r[f]);if(n){i=n(r);for(var l=0;l<i.length;l++)u.call(r,i[l])&&(a[i[l]]=r[i[l]])}}return a}},function(e,t,r){"use strict";
/** @license React v16.3.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7),o=r(6),u=r(0),i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.element"):60103,c=i?Symbol.for("react.portal"):60106,f=i?Symbol.for("react.fragment"):60107,l=i?Symbol.for("react.strict_mode"):60108,s=i?Symbol.for("react.provider"):60109,p=i?Symbol.for("react.context"):60110,y=i?Symbol.for("react.async_mode"):60111,d=i?Symbol.for("react.forward_ref"):60112,h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t=arguments.length-1,r="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);throw(t=Error(r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function m(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||b}function _(){}function O(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||b}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&v("85"),this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var g=O.prototype=new _;g.constructor=O,n(g,m.prototype),g.isPureReactComponent=!0;var j={current:null},w=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n=void 0,o={},u=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var f=Array(c),l=0;l<c;l++)f[l]=arguments[l+2];o.children=f}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:a,type:e,key:u,ref:i,props:o,_owner:j.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var x=/\/+/g,R=[];function E(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function C(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return r(n,e,""===t?"."+$(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=t+$(o=e[i],i);u+=C(o,f,r,n)}else if(null===e||void 0===e?f=null:f="function"==typeof(f=h&&e[h]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),i=0;!(o=e.next()).done;)u+=C(o=o.value,f=t+$(o,i++),r,n);else"object"===o&&v("31","[object Object]"===(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return u}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,n,r,u.thatReturnsArgument):null!=e&&(k(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+r,e={$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),n.push(e))}function I(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(x,"$&/")+"/"),t=E(t,u,n,o),null==e||C(e,"",M,t),T(t)}var q={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return I(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;t=E(null,null,t,r),null==e||C(e,"",A,t),T(t)},count:function(e){return null==e?0:C(e,"",u.thatReturnsNull,null)},toArray:function(e){var t=[];return I(e,t,null,u.thatReturnsArgument),t},only:function(e){return k(e)||v("143"),e}},createRef:function(){return{current:null}},Component:m,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_changedBits:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},Fragment:f,StrictMode:l,unstable_AsyncMode:y,createElement:S,cloneElement:function(e,t,r){var o=void 0,u=n({},e.props),i=e.key,c=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,f=j.current),void 0!==t.key&&(i=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)w.call(t,o)&&!P.hasOwnProperty(o)&&(u[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))u.children=r;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];u.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:u,_owner:f}},createFactory:function(e){var t=S.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.3.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:j,assign:n}},U=Object.freeze({default:q}),N=U&&q||U;e.exports=N.default?N.default:N},function(e,t,r){"use strict";e.exports=r(8)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=i(r(9)),u=i(r(5));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.PureComponent),n(t,[{key:"render",value:function(){return o.default.createElement("div",null,"This is a simple component")}}]),t}();a.propTypes={title:u.default.string.isRequired,something:u.default.element},t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(10);Object.defineProperty(t,"SimpleComponent",{enumerable:!0,get:function(){return u(n).default}});var o=r(1);function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"createModel",{enumerable:!0,get:function(){return u(o).default}});t.MyComponent=function(e){return React.createElement("div",null,"Woot Guido")}}]);
//# sourceMappingURL=main.js.map