// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function r(e){return"number"==typeof e}function i(e){var t,r="";for(t=0;t<e;t++)r+="0";return r}function n(e,t,r){var n=!1,a=t-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=r?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var t,i,s;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!r(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==t)&&(s=4294967295+s+1),s<0?(i=(-s).toString(t),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(t),s||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===t&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===t&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,c=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var t,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!r(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((t=e.precision)>0&&(t-=1),i=n.toExponential(t)):i=n.toPrecision(e.precision),e.alternate||(i=u.call(i,v,"$1e"),i=u.call(i,y,"e"),i=u.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,f,"e+0$1"),i=u.call(i,g,"e-0$1"),e.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):c.call(i)}function m(e){var t,r="";for(t=0;t<e;t++)r+=" ";return r}var x=String.fromCharCode,$=Array.isArray;function _(e){return e!=e}function S(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function E(e){var t,r,i,a,o,l,c,p,u,f,g,d,h;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,p=0;p<e.length;p++)if("string"==typeof(i=e[p]))l+=i;else{if(t=void 0!==i.precision,!(i=S(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),r=i.flags,u=0;u<r.length;u++)switch(a=r.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=r.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,_(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(t&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,_(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,t=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=t?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!_(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=_(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(i.precision=6),i.arg=w(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(f=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),l+=i.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function C(e){var t,r,i,n;for(r=[],n=0,i=k.exec(e);i;)(t=e.slice(n,k.lastIndex-i[0].length)).length&&r.push(t),r.push(j(i)),n=k.lastIndex,i=k.exec(e);return(t=e.slice(n)).length&&r.push(t),r}function R(e){var t,r;if("string"!=typeof e)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[C(e)],r=1;r<arguments.length;r++)t.push(arguments[r]);return E.apply(null,t)}var T=Object.prototype,z=T.toString,V=T.__defineGetter__,F=T.__defineSetter__,O=T.__lookupGetter__,A=T.__lookupSetter__,I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,r){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((n="value"in r)&&(O.call(e,t)||A.call(e,t)?(i=e.__proto__,e.__proto__=T,delete e[t],e[t]=r.value,e.__proto__=i):e[t]=r.value),a="get"in r,o="set"in r,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(e,t,r.get),o&&F&&F.call(e,t,r.set),e};function P(e,t,r){I(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function W(e){return"string"==typeof e}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return L&&"symbol"==typeof Symbol.toStringTag}var G,U=Object.prototype.toString,X=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,q="function"==typeof M?M.toStringTag:"";G=Z()?function(e){var t,r,i,n,a;if(null==e)return U.call(e);r=e[q],a=q,t=null!=(n=e)&&X.call(n,a);try{e[q]=void 0}catch(t){return U.call(e)}return i=U.call(e),t?e[q]=r:delete e[q],i}:function(e){return U.call(e)};var B=G,D=String.prototype.valueOf,H=Z();function J(e){return"object"==typeof e&&(e instanceof String||(H?function(e){try{return D.call(e),!0}catch(e){return!1}}(e):"[object String]"===B(e)))}function K(e){return W(e)||J(e)}P(K,"isPrimitive",W),P(K,"isObject",J);var N=void 0!==String.prototype.endsWith,Q=String.prototype.endsWith,Y=N?function(e,t,r){var i,n;return n=t.length,0===r?0===n:(i=r<0?e.length+r:r,0===n||!(i-n<0||i>e.length)&&Q.call(e,t,i))}:function(e,t,r){var i,n,a;if(n=t.length,0===r)return 0===n;if(i=r<0?e.length+r:r,0===n)return!0;if((i-=n)<0)return!1;for(a=0;a<n;a++)if(e.charCodeAt(i+a)!==t.charCodeAt(a))return!1;return!0};function ee(e,t,r){return e.replace(t,r)}var te={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},re={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},ie="[aeiouy]",ne="[^aeiou][^aeiouy]*",ae=ie+"[aeiou]*",oe=new RegExp("^"+ne+ie+"[^aeiouwxy]$"),se=new RegExp("^("+ne+")?"+ae+ne),le=new RegExp("^("+ne+")?"+ae+ne+"("+ae+")?$"),ce=new RegExp("^("+ne+")?"+ae+ne+ae+ne),pe=new RegExp("^("+ne+")?"+ie),ue=/^(.+?)(ss|i)es$/,fe=/^(.+?)([^s])s$/,ge=/^(.+?)eed$/,de=/^(.+?)(ed|ing)$/,he=/^(.+?)y$/,be=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,ye=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,ve=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,we=/^(.+?)(s|t)(ion)$/,me=/^(.+?)e$/,xe=/.$/,$e=/(at|bl|iz)$/,_e=new RegExp("([^aeiouylsz])\\1$");return function(e){var t,r,i,n;if(!W(e))throw new TypeError(function(){var e,t=arguments,r="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}("0kb3F",e));return e.length<3||("y"===(t=(e=e.toLowerCase())[0])&&(e=t.toUpperCase()+e.substr(1)),ue.test(e)?e=ee(e,ue,"$1$2"):fe.test(e)&&(e=ee(e,fe,"$1$2")),ge.test(e)?(n=ge.exec(e),se.test(n[1])&&(e=ee(e,xe,""))):de.test(e)&&(i=(n=de.exec(e))[1],pe.test(i)&&(e=i,$e.test(e)?e+="e":_e.test(e)?e=ee(e,xe,""):oe.test(e)&&(e+="e"))),he.test(e)&&(i=(n=he.exec(e))[1],pe.test(i)&&(e=i+"i")),be.test(e)&&(i=(n=be.exec(e))[1],r=n[2],se.test(i)&&(e=i+te[r])),ye.test(e)&&(i=(n=ye.exec(e))[1],r=n[2],se.test(i)&&(e=i+re[r])),ve.test(e)?(i=(n=ve.exec(e))[1],ce.test(i)&&(e=i)):we.test(e)&&(i=(n=we.exec(e))[1]+n[2],ce.test(i)&&(e=i)),me.test(e)&&(i=(n=me.exec(e))[1],(ce.test(i)||le.test(i)&&!oe.test(i))&&(e=i)),Y(e,"ll",e.length)&&ce.test(e)&&(e=ee(e,xe,"")),"y"===t&&(e=t.toLowerCase()+e.substr(1))),e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).porterStemmer=t();
//# sourceMappingURL=browser.js.map