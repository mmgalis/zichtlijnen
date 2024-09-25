import{e as o,y as p,a as h,D as l,kt as g,ch as x,ku as m,kv as y}from"./index-FXsJ6CNr.js";import{O as D}from"./WhereClause-DdRE8w39.js";import{t as F}from"./QueryEngine-B4VL97fz.js";import{i as w}from"./timeSupport-D1zt8t0p.js";const v="updating";function A(n){return n==="updating"?null:n}function I(n){return n==="updating"}const N=n=>{let r=class extends n{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=e=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&l.getLogger(this).error("Error while evaluating definitionExpression: "+e),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&l.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var e;if(!((e=this.i3slayer)!=null&&e.definitionExpression))return null;try{const t=D.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!t.isStandardized)return l.getLogger(this).error("definitionExpression is using non standard function"),null;const i=[],s=t.fieldNames;return g(s,this.i3slayer.fields,{missingFields:i}),i.length>0?(l.getLogger(this).error(`definitionExpression references unknown fields: ${i.join(", ")}`),null):(this._definitionExpressionErrors=0,t)}catch(t){return l.getLogger(this).error("Failed to parse definitionExpression: "+t),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(e,t){try{return e.testFeature(t)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(e){if(!this.parsedDefinitionExpression)return e;const t=this.i3slayer.definitionExpression,i=e.clone();return i.where?i.where=`(${t}) AND (${i.where})`:i.where=t,i}};return o([p({readOnly:!0})],r.prototype,"parsedDefinitionExpression",null),o([p({readOnly:!0})],r.prototype,"definitionExpressionFields",null),r=o([h("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],r),r},S=n=>{let r=class extends n{get timeExtent(){var e;return w(this.i3slayer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}get mergedFilter(){var s;const{filter:e,timeExtent:t}=this;if(t==null)return e;const i=(e==null?void 0:e.clone())??new x;return t!=null&&(i.timeExtent=((s=i.timeExtent)==null?void 0:s.intersection(t))??t),i}getTimeFilterDependencies(){const{timeInfo:e}=this.i3slayer;if(e==null)return[];const{startField:t,endField:i}=e;return[t,i]}addTimeFilter(e,t){if(t==null)return;const{timeInfo:i}=this.i3slayer;if(i==null)return;const{startField:s,endField:u,useTime:a}=i;if(!a||s==null&&u==null)return;const f=i.toJSON(),d=t.toJSON();e.push((c,E)=>_(c,E,f,d))}};return o([p({readOnly:!0})],r.prototype,"timeExtent",null),o([p()],r.prototype,"mergedFilter",null),r=o([h("esri.views.3d.layers.support.TemporalSceneLayerView")],r),r};function _(n,r,e,t){var d;const i=(d=r.attributeInfo)==null?void 0:d.attributeData;if(i==null)return;const{startTimeField:s,endTimeField:u}=e;if(s!=null&&i[s]==null||u!=null&&i[u]==null)return;const a=F(e,t,new b(i));if(a==null)return;const{featureIds:f}=r;m(n,f,a)}class b{constructor(r){this.attributeData=r}getAttribute(r,e){return y(this.attributeData[e],r)}getAttributeAsTimestamp(r,e){const t=this.getAttribute(r,e);return typeof t=="string"?new Date(t).getTime():typeof t=="number"||t==null?t:null}}export{A as a,I as b,v as n,N as t,S as u};
