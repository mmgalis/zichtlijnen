import{gv as E,gw as j,gx as z,dO as B,dJ as d,bu as G,gy as x,gz as T,gA as u,gB as $,gC as k,k as y,gD as b}from"./index-FXsJ6CNr.js";import{$ as C,w as L,I as N,v as O,j as V,y as q,P as H,l as J,d as Q,c as A}from"./utils-BKJohcwI.js";import{a as W,i as X}from"./fetchService-hxMcFEhj.js";const h="Feature Service",w="feature-layer-utils",Z=`${w}-save`,aa=`${w}-save-as`,f=`${w}-saveall`,p=`${w}-saveall-as`;function v(a){return{isValid:k(a)&&(a.type!=="feature"||!a.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function M(a){const e=[],t=[];for(const{layer:r,layerJSON:o}of a)r.isTable?t.push(o):e.push(o);return{layers:e,tables:t}}function D(a){return M([a])}async function R(a,e){return/\/\d+\/?$/.test(a.url)?D(e[0]):F(e,a)}async function F(a,e){if(a.reverse(),!e)return M(a);const t=await ea(e,a);for(const r of a)U(r.layer,r.layerJSON,t);return na(t,a),t}async function ea(a,e){let t=await a.fetchData("json");if(ta(t))return t;t||(t={}),ra(t);const{layer:{url:r,customParameters:o,apiKey:s}}=e[0];return await sa(t,{url:r??"",customParameters:o,apiKey:s},e.map(n=>n.layer.layerId)),t}function ta(a){return!!(a&&Array.isArray(a.layers)&&Array.isArray(a.tables))}function ra(a){a.layers||(a.layers=[]),a.tables||(a.tables=[])}function na(a,e){const t=[],r=[];for(const{layer:o}of e){const{isTable:s,layerId:n}=o;s?r.push(n):t.push(n)}I(a.layers,t),I(a.tables,r)}function I(a,e){if(a.length<2)return;const t=[];for(const{id:r}of a)t.push(r);j(t.sort(g),e.slice().sort(g))&&a.sort((r,o)=>{const s=e.indexOf(r.id),n=e.indexOf(o.id);return s<n?-1:s>n?1:0})}function g(a,e){return a<e?-1:a>e?1:0}async function sa(a,e,t){const{url:r,customParameters:o,apiKey:s}=e,{serviceJSON:n,layersJSON:l}=await W(r,{customParameters:o,apiKey:s}),i=P(a.layers,n.layers,t),c=P(a.tables,n.tables,t);a.layers=i.itemResources,a.tables=c.itemResources;const m=[...i.added,...c.added],_=l?[...l.layers,...l.tables]:[];await oa(a,m,r,_)}function P(a,e,t){const r=z(a,e,(s,n)=>s.id===n.id);a=a.filter(s=>!r.removed.some(n=>n.id===s.id));const o=r.added;return o.forEach(({id:s})=>{a.push({id:s})}),{itemResources:a,added:o.filter(({id:s})=>!t.includes(s))}}async function oa(a,e,t,r){const o=await la(e),s=e.map(({id:n,type:l})=>new(o.get(l))({url:t,layerId:n,sourceJSON:r.find(({id:i})=>i===n)}));await Promise.allSettled(s.map(n=>n.load())),s.forEach(n=>{const{layerId:l,loaded:i,defaultPopupTemplate:c}=n;if(!i||c==null)return;const m={id:l,popupInfo:c.toJSON()};n.operationalLayerType!=="ArcGISFeatureLayer"&&(m.layerType=n.operationalLayerType),U(n,m,a)})}async function la(a){const e=[];a.forEach(({type:o})=>{const s=X(o),n=B[s];e.push(n())});const t=await Promise.all(e),r=new Map;return a.forEach(({type:o},s)=>{r.set(o,t[s])}),r}function U(a,e,t){a.isTable?S(t.tables,e):S(t.layers,e)}function S(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function K(a,e){if(!a.length)throw new y(`${e}:missing-parameters`,"'layers' array should contain at least one feature layer")}function ia(a,e){const t=a.map(r=>r.portalItem.id);if(new Set(t).size>1)throw new y(`${e}:invalid-parameters`,"All layers in the 'layers' array should be loaded from the same portal item")}function Y(a,e){const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new y(`${e}:invalid-parameters`,"'layers' array should contain only one instance each of layer or table in a feature service")}async function ca(a){K(a,f),await Promise.all(a.map(e=>e.load()));for(const e of a)J(e,f,v),Q({layer:e,itemType:h,errorNamePrefix:f});ia(a,f),Y(a,f)}async function ua(a,e){const{url:t,layerId:r,title:o,fullExtent:s,isTable:n}=a,l=d(t);e.url=((l==null?void 0:l.serverType)==="FeatureServer"?t:`${t}/${r}`)??null,e.title||(e.title=o),e.extent=null,n||s==null||(e.extent=await x(s)),T(e,u.METADATA),T(e,u.MULTI_LAYER),b(e,u.SINGLE_LAYER),n&&b(e,u.TABLE)}function ya(a,e){for(const s of a){const n=s.parsedUrl.path,l=d(n);if(!(l==null?void 0:l.url.path))throw new y(`${e}:invalid-parameters`,A(s,`has unsupported url pattern: ${n}`),{layer:s});const c=l==null?void 0:l.serverType;if(c!=="FeatureServer"&&c!=="MapServer")throw new y(`${e}:invalid-parameters`,A(s,`has unsupported server type: ${c}`),{layer:s});if(c==="MapServer"&&a.length>1)throw new y(`${e}:invalid-parameters`,"Only one layer or table in a map service can be saved")}const t=d(a[0].parsedUrl.path),r=t==null?void 0:t.url.path;if(!a.every(s=>{const n=d(s.parsedUrl.path);return(n==null?void 0:n.url.path)===r}))throw new y(`${e}:invalid-parameters`,"'layers' array should only contain layers or tables that belong to the same feature service")}async function fa(a){K(a,p),await Promise.all(a.map(e=>e.load()));for(const e of a)J(e,p,v);ya(a,p),Y(a,p)}async function pa(a,e){let t=0,r=0;for(const{isTable:n}of e)n?r++:t++;const o=e[0].parsedUrl.path,s=d(o);if(a.url=(s==null?void 0:s.serverType)==="FeatureServer"?s.url.path:o,a.title||(a.title=s.title),a.extent=null,t>0){const n=e.map(l=>l.fullExtent).filter(G).reduce((l,i)=>l.clone().union(i));n&&(a.extent=await x(n))}T(a,u.METADATA),$(a,u.MULTI_LAYER,e.length>1),$(a,u.SINGLE_LAYER,e.length===1),$(a,u.TABLE,r>0&&t===0),O(a)}async function wa(a,e){return C({layer:a,itemType:h,validateLayer:v,createItemData:(t,r)=>R(r,[t]),errorNamePrefix:Z},e)}async function va(a,e){await ca(a);const t=a[0].portalItem,r=L(t),o=await Promise.all(a.map(n=>N(n,r,e))),s=await R(t,a.map((n,l)=>({layer:n,layerJSON:o[l]})));return O(t),await t.update({data:s}),await Promise.all(a.slice(1).map(n=>n.portalItem.reload())),E(r),t.clone()}async function $a(a,e,t){return V({layer:a,itemType:h,validateLayer:v,createItemData:(r,o)=>Promise.resolve(D(r)),errorNamePrefix:aa,newItem:e,setItemProperties:ua},t)}async function Ta(a,e,t){await fa(a);const r=q({itemType:h,errorNamePrefix:p,newItem:e}),o=L(r),s=await Promise.all(a.map(l=>N(l,o,t))),n=await F(a.map((l,i)=>({layer:l,layerJSON:s[i]})));await pa(r,a),await H(r,n,t);for(const l of a)l.portalItem=r.clone();return E(o),r}export{wa as save,va as saveAll,Ta as saveAllAs,$a as saveAs};
