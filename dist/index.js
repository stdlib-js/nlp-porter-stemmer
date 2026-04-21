"use strict";var q=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var y=q(function(k,P){"use strict";var h=require("@stdlib/assert-is-string").isPrimitive,C=require("@stdlib/string-base-ends-with"),V=require("@stdlib/string-base-lowercase"),l=require("@stdlib/string-base-replace"),A=require("@stdlib/string-format"),B={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},L={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},M="[^aeiou]",c="[aeiouy]",s=M+"[^aeiouy]*",n=c+"[aeiou]*",r=new RegExp("^"+s+c+"[^aeiouwxy]$"),G="^("+s+")?"+n+s,u=new RegExp(G),U="^("+s+")?"+n+s+"("+n+")?$",D=new RegExp(U),F="^("+s+")?"+n+s+n+s,f=new RegExp(F),I="^("+s+")?"+c,R=new RegExp(I),$=/^(.+?)(ss|i)es$/,g=/^(.+?)([^s])s$/,x=/^(.+?)eed$/,_=/^(.+?)(ed|ing)$/,m=/^(.+?)y$/,p=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,S=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,T=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,b=/^(.+?)(s|t)(ion)$/,z=/^(.+?)e$/,E=/.$/,O=/(at|bl|iz)$/,Q=new RegExp("([^aeiouylsz])\\1$");function W(e){var a,v,i,t;if(!h(e))throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));return e.length<3||(e=V(e),a=e[0],a==="y"&&(e=a.toUpperCase()+e.substr(1)),$.test(e)?e=l(e,$,"$1$2"):g.test(e)&&(e=l(e,g,"$1$2")),x.test(e)?(t=x.exec(e),u.test(t[1])&&(e=l(e,E,""))):_.test(e)&&(t=_.exec(e),i=t[1],R.test(i)&&(e=i,O.test(e)?e+="e":Q.test(e)?e=l(e,E,""):r.test(e)&&(e+="e"))),m.test(e)&&(t=m.exec(e),i=t[1],R.test(i)&&(e=i+"i")),p.test(e)&&(t=p.exec(e),i=t[1],v=t[2],u.test(i)&&(e=i+B[v])),S.test(e)&&(t=S.exec(e),i=t[1],v=t[2],u.test(i)&&(e=i+L[v])),T.test(e)?(t=T.exec(e),i=t[1],f.test(i)&&(e=i)):b.test(e)&&(t=b.exec(e),i=t[1]+t[2],f.test(i)&&(e=i)),z.test(e)&&(t=z.exec(e),i=t[1],(f.test(i)||D.test(i)&&!r.test(i))&&(e=i)),C(e,"ll",e.length)&&f.test(e)&&(e=l(e,E,"")),a==="y"&&(e=a.toLowerCase()+e.substr(1))),e}P.exports=W});var Z=y();module.exports=Z;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* This code is a modification of an existing JavaScript implementation of their [Porter stemming algorithm]{@link https://tartarus.org/martin/PorterStemmer/}.
*
* ```text
* Release 1 by 'andargor', Jul 2004
* Release 2 (substantially revised) by Christopher McKenzie, Aug 2009
* ```
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
