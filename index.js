// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,i=Object.prototype,o=i.toString,n=i.__defineGetter__,r=i.__defineSetter__,a=i.__lookupGetter__,l=i.__lookupSetter__,u=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,u){var s,c,f,y;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof u||null===u||"[object Array]"===o.call(u))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+u+"`.");if((c="value"in u)&&(a.call(e,t)||l.call(e,t)?(s=e.__proto__,e.__proto__=i,delete e[t],e[t]=u.value,e.__proto__=s):e[t]=u.value),f="get"in u,y="set"in u,c&&(f||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&n&&n.call(e,t,u.get),y&&r&&r.call(e,t,u.set),e};function s(e,t,i){u(e,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}function c(e){return"string"==typeof e}var f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return f&&"symbol"==typeof Symbol.toStringTag}var p,b=Object.prototype.toString,g=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"";p=y()?function(e){var t,i,o,n,r;if(null==e)return b.call(e);i=e[v],r=v,t=null!=(n=e)&&g.call(n,r);try{e[v]=void 0}catch(t){return b.call(e)}return o=b.call(e),t?e[v]=i:delete e[v],o}:function(e){return b.call(e)};var d=p,_=String.prototype.valueOf,m=y();function h(e){return"object"==typeof e&&(e instanceof String||(m?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object String]"===d(e)))}function w(e){return c(e)||h(e)}s(w,"isPrimitive",c),s(w,"isObject",h);var $=void 0!==String.prototype.endsWith,x=String.prototype.endsWith,S=$?function(e,t,i){var o,n;return n=t.length,0===i?0===n:(o=i<0?e.length+i:i,0===n||!(o-n<0||o>e.length)&&x.call(e,t,o))}:function(e,t,i){var o,n,r;if(n=t.length,0===i)return 0===n;if(o=i<0?e.length+i:i,0===n)return!0;if((o-=n)<0)return!1;for(r=0;r<n;r++)if(e.charCodeAt(o+r)!==t.charCodeAt(r))return!1;return!0};function j(e,t,i){return e.replace(t,i)}var z={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},E={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},O="[aeiouy]",C="[^aeiou][^aeiouy]*",R=new RegExp("^"+C+O+"[^aeiouwxy]$"),T=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),P=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),A=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),k=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),G=/^(.+?)(ss|i)es$/,L=/^(.+?)([^s])s$/,U=/^(.+?)eed$/,V=/^(.+?)(ed|ing)$/,W=/^(.+?)y$/,F=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,I=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,N=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,q=/^(.+?)(s|t)(ion)$/,B=/^(.+?)e$/,D=/.$/,H=/(at|bl|iz)$/,J=new RegExp("([^aeiouylsz])\\1$");return function(e){var t,i,o,n;if(!c(e))throw new TypeError(function(){var e,t=arguments,i="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)i+="&arg[]="+encodeURIComponent(t[e]);return i}("0NC3R",e));return e.length<3||("y"===(t=(e=e.toLowerCase())[0])&&(e=t.toUpperCase()+e.substr(1)),G.test(e)?e=j(e,G,"$1$2"):L.test(e)&&(e=j(e,L,"$1$2")),U.test(e)?(n=U.exec(e),T.test(n[1])&&(e=j(e,D,""))):V.test(e)&&(o=(n=V.exec(e))[1],k.test(o)&&(e=o,H.test(e)?e+="e":J.test(e)?e=j(e,D,""):R.test(e)&&(e+="e"))),W.test(e)&&(o=(n=W.exec(e))[1],k.test(o)&&(e=o+"i")),F.test(e)&&(o=(n=F.exec(e))[1],i=n[2],T.test(o)&&(e=o+z[i])),I.test(e)&&(o=(n=I.exec(e))[1],i=n[2],T.test(o)&&(e=o+E[i])),N.test(e)?(o=(n=N.exec(e))[1],A.test(o)&&(e=o)):q.test(e)&&(o=(n=q.exec(e))[1]+n[2],A.test(o)&&(e=o)),B.test(e)&&(o=(n=B.exec(e))[1],(A.test(o)||P.test(o)&&!R.test(o))&&(e=o)),S(e,"ll",e.length)&&A.test(e)&&(e=j(e,D,"")),"y"===t&&(e=t.toLowerCase()+e.substr(1))),e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).porterStemmer=t();
//# sourceMappingURL=index.js.map
