// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function r(e){return"number"==typeof e}function i(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function a(e,t,r){var a=!1,n=t-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(a=!0,e=e.substr(1)),e=r?e+i(n):i(n)+e,a&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var t,i,s;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!r(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==t)&&(s=4294967295+s+1),s<0?(i=(-s).toString(t),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(t),s||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===t&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===t&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function w(e){var t,i,a=parseFloat(e.arg);if(!isFinite(a)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+i);a=e.arg}switch(e.specifier){case"e":case"E":i=a.toExponential(e.precision);break;case"f":case"F":i=a.toFixed(e.precision);break;case"g":case"G":c(a)<1e-4?((t=e.precision)>0&&(t-=1),i=a.toExponential(t)):i=a.toPrecision(e.precision),e.alternate||(i=u.call(i,y,"$1e"),i=u.call(i,b,"e"),i=u.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),a>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):l.call(i)}function m(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}var x=String.fromCharCode,$=isNaN,_=Array.isArray;function E(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function S(e){var t,r,i,n,o,c,l,p,u,f,g,d,h;if(!_(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",l=1,p=0;p<e.length;p++)if(i=e[p],"string"==typeof i)c+=i;else{if(t=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),r=i.flags,u=0;u<r.length;u++)switch(n=r.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=r.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,$(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(t&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,$(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,t=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=t?i.precision:-1;break;case"c":if(!$(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),c+=i.arg||"",l+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function C(e){var t,r,i,a;for(r=[],a=0,i=k.exec(e);i;)(t=e.slice(a,k.lastIndex-i[0].length)).length&&r.push(t),r.push(j(i)),a=k.lastIndex,i=k.exec(e);return(t=e.slice(a)).length&&r.push(t),r}function R(e){var t,r;if("string"!=typeof e)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[C(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return S.apply(null,t)}var z=Object.prototype,T=z.toString,V=z.__defineGetter__,F=z.__defineSetter__,O=z.__lookupGetter__,A=z.__lookupSetter__;var I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((a="value"in r)&&(O.call(e,t)||A.call(e,t)?(i=e.__proto__,e.__proto__=z,delete e[t],e[t]=r.value,e.__proto__=i):e[t]=r.value),n="get"in r,o="set"in r,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&V&&V.call(e,t,r.get),o&&F&&F.call(e,t,r.set),e};function P(e,t,r){I(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function W(e){return"string"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var N,X="function"==typeof Symbol?Symbol:void 0,M="function"==typeof X?X.toStringTag:"";N=Z()?function(e){var t,r,i,a,n;if(null==e)return G.call(e);r=e[M],n=M,t=null!=(a=e)&&U.call(a,n);try{e[M]=void 0}catch(t){return G.call(e)}return i=G.call(e),t?e[M]=r:delete e[M],i}:function(e){return G.call(e)};var q=N,B=String.prototype.valueOf;var D=Z();function H(e){return"object"==typeof e&&(e instanceof String||(D?function(e){try{return B.call(e),!0}catch(e){return!1}}(e):"[object String]"===q(e)))}function J(e){return W(e)||H(e)}P(J,"isPrimitive",W),P(J,"isObject",H);var K=void 0!==String.prototype.endsWith;var Q=String.prototype.endsWith;var Y=K?function(e,t,r){var i,a;return a=t.length,0===r?0===a:(i=r<0?e.length+r:r,0===a||!(i-a<0||i>e.length)&&Q.call(e,t,i))}:function(e,t,r){var i,a,n;if(a=t.length,0===r)return 0===a;if(i=r<0?e.length+r:r,0===a)return!0;if((i-=a)<0)return!1;for(n=0;n<a;n++)if(e.charCodeAt(i+n)!==t.charCodeAt(n))return!1;return!0};function ee(e,t,r){return e.replace(t,r)}var te={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},re={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},ie="[aeiouy]",ae="[^aeiou][^aeiouy]*",ne=ie+"[aeiou]*",oe=new RegExp("^"+ae+ie+"[^aeiouwxy]$"),se=new RegExp("^("+ae+")?"+ne+ae),ce=new RegExp("^("+ae+")?"+ne+ae+"("+ne+")?$"),le=new RegExp("^("+ae+")?"+ne+ae+ne+ae),pe=new RegExp("^("+ae+")?"+ie),ue=/^(.+?)(ss|i)es$/,fe=/^(.+?)([^s])s$/,ge=/^(.+?)eed$/,de=/^(.+?)(ed|ing)$/,he=/^(.+?)y$/,ve=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,be=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,ye=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,we=/^(.+?)(s|t)(ion)$/,me=/^(.+?)e$/,xe=/.$/,$e=/(at|bl|iz)$/,_e=new RegExp("([^aeiouylsz])\\1$");function Ee(e){var t,r,i,a;if(!W(e))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("0kb3F",e));return e.length<3||("y"===(t=(e=e.toLowerCase())[0])&&(e=t.toUpperCase()+e.substr(1)),ue.test(e)?e=ee(e,ue,"$1$2"):fe.test(e)&&(e=ee(e,fe,"$1$2")),ge.test(e)?(a=ge.exec(e),se.test(a[1])&&(e=ee(e,xe,""))):de.test(e)&&(i=(a=de.exec(e))[1],pe.test(i)&&(e=i,$e.test(e)?e+="e":_e.test(e)?e=ee(e,xe,""):oe.test(e)&&(e+="e"))),he.test(e)&&(i=(a=he.exec(e))[1],pe.test(i)&&(e=i+"i")),ve.test(e)&&(i=(a=ve.exec(e))[1],r=a[2],se.test(i)&&(e=i+te[r])),be.test(e)&&(i=(a=be.exec(e))[1],r=a[2],se.test(i)&&(e=i+re[r])),ye.test(e)?(i=(a=ye.exec(e))[1],le.test(i)&&(e=i)):we.test(e)&&(i=(a=we.exec(e))[1]+a[2],le.test(i)&&(e=i)),me.test(e)&&(i=(a=me.exec(e))[1],(le.test(i)||ce.test(i)&&!oe.test(i))&&(e=i)),Y(e,"ll",e.length)&&le.test(e)&&(e=ee(e,xe,"")),"y"===t&&(e=t.toLowerCase()+e.substr(1))),e}export{Ee as default};
//# sourceMappingURL=mod.js.map
