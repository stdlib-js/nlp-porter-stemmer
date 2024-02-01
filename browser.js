// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function i(e){return"number"==typeof e}function r(e){var t,i="";for(t=0;t<e;t++)i+="0";return i}function a(e,t,i){var a=!1,n=t-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=i?e+r(n):r(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var t,r,s;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,s=parseInt(r,10),!isFinite(s)){if(!i(r))throw new Error("invalid integer. Value: "+r);s=0}return s<0&&("u"===e.specifier||10!==t)&&(s=4294967295+s+1),s<0?(r=(-s).toString(t),e.precision&&(r=a(r,e.precision,e.padRight)),r="-"+r):(r=s.toString(t),s||e.precision?e.precision&&(r=a(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=e.specifier===o.call(e.specifier)?o.call(r):n.call(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function l(e){return"string"==typeof e}var c=Math.abs,u=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var t,r,a=parseFloat(e.arg);if(!isFinite(a)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+r);a=e.arg}switch(e.specifier){case"e":case"E":r=a.toExponential(e.precision);break;case"f":case"F":r=a.toFixed(e.precision);break;case"g":case"G":c(a)<1e-4?((t=e.precision)>0&&(t-=1),r=a.toExponential(t)):r=a.toPrecision(e.precision),e.alternate||(r=f.call(r,w,"$1e"),r=f.call(r,v,"e"),r=f.call(r,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=f.call(r,g,"e+0$1"),r=f.call(r,d,"e-0$1"),e.alternate&&(r=f.call(r,h,"$1."),r=f.call(r,y,"$1.e")),a>=0&&e.sign&&(r=e.sign+r),r=e.specifier===p.call(e.specifier)?p.call(r):u.call(r)}function x(e){var t,i="";for(t=0;t<e;t++)i+=" ";return i}function $(e,t,i){var r=t-e.length;return r<0?e:e=i?e+x(r):x(r)+e}var _=String.fromCharCode,S=isNaN,E=Array.isArray;function k(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function j(e){var t,i,r,n,o,c,u,p,f;if(!E(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",u=1,p=0;p<e.length;p++)if(l(r=e[p]))c+=r;else{if(t=void 0!==r.precision,!(r=k(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+r+"`.");for(r.mapping&&(u=r.mapping),i=r.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=i.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===r.width){if(r.width=parseInt(arguments[u],10),u+=1,S(r.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&"*"===r.precision){if(r.precision=parseInt(arguments[u],10),u+=1,S(r.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[u],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=s(r);break;case"s":r.maxWidth=t?r.precision:-1;break;case"c":if(!S(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=S(o)?String(r.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=m(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=a(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=$(r.arg,r.width,r.padRight)),c+=r.arg||"",u+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function z(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function C(e){var t,i,r,a;for(i=[],a=0,r=T.exec(e);r;)(t=e.slice(a,T.lastIndex-r[0].length)).length&&i.push(t),i.push(z(r)),a=T.lastIndex,r=T.exec(e);return(t=e.slice(a)).length&&i.push(t),i}function R(e){return"string"==typeof e}function V(e){var t,i,r;if(!R(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=C(e),(i=new Array(arguments.length))[0]=t,r=1;r<i.length;r++)i[r]=arguments[r];return j.apply(null,i)}var A=Object.prototype,F=A.toString,O=A.__defineGetter__,I=A.__defineSetter__,P=A.__lookupGetter__,W=A.__lookupSetter__,L=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,i){var r,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===F.call(i))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(P.call(e,t)||W.call(e,t)?(r=e.__proto__,e.__proto__=A,delete e[t],e[t]=i.value,e.__proto__=r):e[t]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(e,t,i.get),o&&I&&I.call(e,t,i.set),e};function Z(e,t,i){L(e,t,{configurable:!1,enumerable:!1,writable:!1,value:i})}function G(e){return"string"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function N(){return U&&"symbol"==typeof Symbol.toStringTag}var X,M=Object.prototype.toString,q=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";X=N()?function(e){var t,i,r,a,n;if(null==e)return M.call(e);i=e[D],n=D,t=null!=(a=e)&&q.call(a,n);try{e[D]=void 0}catch(t){return M.call(e)}return r=M.call(e),t?e[D]=i:delete e[D],r}:function(e){return M.call(e)};var H=X,J=String.prototype.valueOf,K=N();function Q(e){return"object"==typeof e&&(e instanceof String||(K?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function Y(e){return G(e)||Q(e)}Z(Y,"isPrimitive",G),Z(Y,"isObject",Q);var ee=void 0!==String.prototype.endsWith,te=String.prototype.endsWith,ie=ee?function(e,t,i){var r,a;return a=t.length,0===i?0===a:(r=i<0?e.length+i:i,0===a||!(r-a<0||r>e.length)&&te.call(e,t,r))}:function(e,t,i){var r,a,n;if(a=t.length,0===i)return 0===a;if(r=i<0?e.length+i:i,0===a)return!0;if((r-=a)<0)return!1;for(n=0;n<a;n++)if(e.charCodeAt(r+n)!==t.charCodeAt(n))return!1;return!0};function re(e,t,i){return e.replace(t,i)}var ae={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},ne={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},oe="[aeiouy]",se="[^aeiou][^aeiouy]*",le=new RegExp("^"+se+oe+"[^aeiouwxy]$"),ce=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),ue=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),pe=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),fe=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),ge=/^(.+?)(ss|i)es$/,de=/^(.+?)([^s])s$/,he=/^(.+?)eed$/,ye=/^(.+?)(ed|ing)$/,be=/^(.+?)y$/,ve=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,we=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,me=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,xe=/^(.+?)(s|t)(ion)$/,$e=/^(.+?)e$/,_e=/.$/,Se=/(at|bl|iz)$/,Ee=new RegExp("([^aeiouylsz])\\1$");return function(e){var t,i,r,a;if(!G(e))throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",e));return e.length<3||("y"===(t=(e=e.toLowerCase())[0])&&(e=t.toUpperCase()+e.substr(1)),ge.test(e)?e=re(e,ge,"$1$2"):de.test(e)&&(e=re(e,de,"$1$2")),he.test(e)?(a=he.exec(e),ce.test(a[1])&&(e=re(e,_e,""))):ye.test(e)&&(r=(a=ye.exec(e))[1],fe.test(r)&&(e=r,Se.test(e)?e+="e":Ee.test(e)?e=re(e,_e,""):le.test(e)&&(e+="e"))),be.test(e)&&(r=(a=be.exec(e))[1],fe.test(r)&&(e=r+"i")),ve.test(e)&&(r=(a=ve.exec(e))[1],i=a[2],ce.test(r)&&(e=r+ae[i])),we.test(e)&&(r=(a=we.exec(e))[1],i=a[2],ce.test(r)&&(e=r+ne[i])),me.test(e)?(r=(a=me.exec(e))[1],pe.test(r)&&(e=r)):xe.test(e)&&(r=(a=xe.exec(e))[1]+a[2],pe.test(r)&&(e=r)),$e.test(e)&&(r=(a=$e.exec(e))[1],(pe.test(r)||ue.test(r)&&!le.test(r))&&(e=r)),ie(e,"ll",e.length)&&pe.test(e)&&(e=re(e,_e,"")),"y"===t&&(e=t.toLowerCase()+e.substr(1))),e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).porterStemmer=t();
//# sourceMappingURL=browser.js.map
