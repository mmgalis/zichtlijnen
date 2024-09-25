import{eb as v,dT as P,gE as h,gF as x,gD as N,gA as S,gv as f,k as c,gG as b}from"./index-CY8jQoH7.js";function O(e,a,r){const t=r(e);if(!t.isValid)throw new c(`${a}:invalid-parameters`,t.errorMessage,{layer:e})}async function y(e){const{layer:a,errorNamePrefix:r,validateLayer:t}=e;await a.load(),O(a,r,t)}function d(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function w(e){const{item:a,errorNamePrefix:r,layer:t,validateItem:i}=e;if(b(a),E(e),i){const s=i(a);if(!s.isValid)throw new c(`${r}:invalid-parameters`,s.errorMessage,{layer:t})}}function E(e){const{item:a,itemType:r,additionalItemType:t,errorNamePrefix:i,layer:s}=e,n=[r];if(t&&n.push(t),!n.includes(a.type)){const p=n.map(o=>`'${o}'`).join(", ");throw new c(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${p}"`,{item:a,layer:s})}}function J(e){const{layer:a,errorNamePrefix:r}=e,{portalItem:t}=a;if(!t)throw new c(`${r}:portal-item-not-set`,d(a,"requires the portalItem property to be set"));if(!t.loaded)throw new c(`${r}:portal-item-not-loaded`,d(a,"cannot be saved to a portal item that does not exist or is inaccessible"));w({...e,item:t})}function C(e){const{newItem:a,itemType:r}=e;let t=v.from(a);return t.id&&(t=t.clone(),t.id=null),t.type??(t.type=r),t.portal??(t.portal=P.getDefault()),w({...e,item:t}),t}function I(e){return h(e,"portal-item")}async function $(e,a,r){var i;"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const t=e.write({},a);return await Promise.all(((i=a.resources)==null?void 0:i.pendingOperations)??[]),x(a,{errorName:"layer-write:unsupported"},r),t}function g(e){N(e,S.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,r,t)=>t.indexOf(a)===r))}async function D(e,a,r){var i;const t=e.portal;await t.signIn(),await((i=t.user)==null?void 0:i.addItem({item:e,data:a,folder:r==null?void 0:r.folder}))}async function U(e,a){const{layer:r,createItemData:t,createJSONContext:i,setItemProperties:s,saveResources:n,supplementalUnsupportedErrors:p}=e;await y(e),J(e);const o=r.portalItem,l=i?i(o):I(o),u=await $(r,l,{...a,supplementalUnsupportedErrors:p}),m=await t({layer:r,layerJSON:u},o);return await(s==null?void 0:s(r,o)),g(o),await o.update({data:m}),f(l),await(n==null?void 0:n(o,l)),o}async function K(e,a){const{layer:r,createItemData:t,createJSONContext:i,setItemProperties:s,saveResources:n,supplementalUnsupportedErrors:p}=e;await y(e);const o=C(e),l=i?i(o):I(o),u=await $(r,l,{...a,supplementalUnsupportedErrors:p}),m=await t({layer:r,layerJSON:u},o);return await s(r,o),g(o),await D(o,m,a),r.portalItem=o,f(l),await(n==null?void 0:n(o,l)),o}export{U as $,$ as I,D as P,d as c,J as d,K as j,O as l,g as v,I as w,C as y};
