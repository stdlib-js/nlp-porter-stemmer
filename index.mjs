// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-ends-with@v0.0.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.0.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";var o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},n={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},l="[aeiouy]",u="[^aeiou][^aeiouy]*",r=new RegExp("^"+u+l+"[^aeiouwxy]$"),c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),m=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),g=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),p=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,x=/^(.+?)eed$/,v=/^(.+?)(ed|ing)$/,b=/^(.+?)y$/,$=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,j=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,f=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,h=/^(.+?)(s|t)(ion)$/,w=/^(.+?)e$/,z=/.$/,E=/(at|bl|iz)$/,R=new RegExp("([^aeiouylsz])\\1$");function C(l){var u,C,L,N;if(!e(l))throw new TypeError(a("0NC3R",l));return l.length<3||("y"===(u=(l=t(l))[0])&&(l=u.toUpperCase()+l.substr(1)),p.test(l)?l=s(l,p,"$1$2"):y.test(l)&&(l=s(l,y,"$1$2")),x.test(l)?(N=x.exec(l),c.test(N[1])&&(l=s(l,z,""))):v.test(l)&&(L=(N=v.exec(l))[1],g.test(L)&&(l=L,E.test(l)?l+="e":R.test(l)?l=s(l,z,""):r.test(l)&&(l+="e"))),b.test(l)&&(L=(N=b.exec(l))[1],g.test(L)&&(l=L+"i")),$.test(l)&&(L=(N=$.exec(l))[1],C=N[2],c.test(L)&&(l=L+o[C])),j.test(l)&&(L=(N=j.exec(l))[1],C=N[2],c.test(L)&&(l=L+n[C])),f.test(l)?(L=(N=f.exec(l))[1],d.test(L)&&(l=L)):h.test(l)&&(L=(N=h.exec(l))[1]+N[2],d.test(L)&&(l=L)),w.test(l)&&(L=(N=w.exec(l))[1],(d.test(L)||m.test(L)&&!r.test(L))&&(l=L)),i(l,"ll",l.length)&&d.test(l)&&(l=s(l,z,"")),"y"===u&&(l=u.toLowerCase()+l.substr(1))),l}export{C as default};
//# sourceMappingURL=index.mjs.map
