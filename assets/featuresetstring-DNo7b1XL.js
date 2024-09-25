import{a as o,H as m,a1 as T,m as y,B as c,a2 as f,b as d,r as u,a3 as b,N as v,A as w,a4 as A,a5 as g,a6 as x,a7 as V,P as F,a8 as P,a9 as D,aa as l}from"./arcadeUtils-t9AlR5fJ.js";import"./index-FXsJ6CNr.js";import"./TimeOnly-DTwWyTcN.js";import"./ImmutableArray-BPVd6ESQ.js";import"./number-BTRYSgO3.js";import"./hash-CcEbRgUF.js";function p(t,e){return t&&t.domain?t.domain.type==="coded-value"||t.domain.type==="codedValue"?v.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:l[t.field.type],codedValues:t.domain.codedValues.map(a=>({name:a.name,code:a.code}))},w(e)):v.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:l[t.field.type],min:t.domain.minValue,max:t.domain.maxValue},w(e)):null}function B(t){t.mode==="async"&&(t.functions.domain=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,3,e,a),m(n[0]))return p(T(n[0],y(n[1]),n[2]===void 0?void 0:n[2]),e);if(c(n[0]))return await n[0]._ensureLoaded(),p(f(y(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new d(e,u.InvalidParameter,a)})},t.functions.subtypes=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),m(n[0])){const r=b(n[0]);return r?v.convertObjectToArcadeDictionary(r,w(e)):null}if(c(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypeMetaData();return r?v.convertObjectToArcadeDictionary(r,w(e)):null}throw new d(e,u.InvalidParameter,a)})},t.functions.domainname=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,4,e,a),m(n[0]))return A(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=f(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return g(r,n[2])}throw new d(e,u.InvalidParameter,a)})},t.signatures.push({name:"domainname",min:2,max:4}),t.functions.domaincode=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,2,4,e,a),m(n[0]))return x(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(c(n[0])){await n[0]._ensureLoaded();const r=f(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return V(r,n[2])}throw new d(e,u.InvalidParameter,a)})},t.signatures.push({name:"domaincode",min:2,max:4}),t.functions.text=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,2,e,a),c(n[0])){const r=F(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal);throw new d(e,u.InvalidParameter,a)}return P(n[0],n[1])})},t.functions.gdbversion=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),m(n[0]))return n[0].gdbVersion();if(c(n[0]))return(await n[0].load()).gdbVersion;throw new d(e,u.InvalidParameter,a)})},t.functions.schema=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(o(n,1,1,e,a),c(n[0]))return await n[0].load(),v.convertObjectToArcadeDictionary(n[0].schema(),w(e));if(m(n[0])){const r=D(n[0]);return r?v.convertObjectToArcadeDictionary(r,w(e)):null}throw new d(e,u.InvalidParameter,a)})})}export{B as registerFunctions};
