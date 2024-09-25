const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mediaLayerUtils-XUhYG0Xu.js","assets/utils-mBU9z_tV.js","assets/index-CY8jQoH7.js","assets/index-1kXkUciu.css"])))=>i.map(i=>d[i]);
import{V as f,hg as b,aR as I,aS as M,Z as O,n as A,aB as L,bC as V,b5 as T,D as w,fm as P,ax as C,ck as $,hP as j,ji as B,e as i,y as o,a as S,dX as H,dZ as N,f as k,g as F,i as G,e8 as z,k as h,ee as p,e9 as m,q as g,ff as W,aZ as Z,x as q,_ as D}from"./index-CY8jQoH7.js";import{j as K,b as x,a as v,X,f as J}from"./VideoElement-2mZuZLXn.js";import{o as Q}from"./BoundsStore-BW-p4UO6.js";import{m as U}from"./MediaElementView-CSB-4I1x.js";import"./PooledRBush-dZV2HI6q.js";import"./quickselect-muTgvbw3.js";import"./normalizeUtilsSync-tBzRk_OA.js";const Y={key:"type",defaultKeyValue:"image",base:K,typeMap:{image:x,video:v}},_=f.ofType(Y);let d=class extends b.LoadableMixin(I(M.EventedAccessor)){constructor(e){super(e),this._index=new Q,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=s=>{for(const t of s.removed){const n=this._elementViewsMap.get(t);this._elementViewsMap.delete(t),this._index.delete(n),this.removeHandles(n),n.destroy(),this.notifyChange("fullExtent")}const{spatialReference:r}=this;for(const t of s.added){if(this._elementViewsMap.get(t))continue;const n=new U({spatialReference:r,element:t});this._elementViewsMap.set(t,n);const l=O(()=>n.coords,()=>this._updateIndexForElement(n,!1));this._updateIndexForElement(n,!0),this.addHandles(l,n)}this._elementsIndexes.clear(),this.elements.forEach((t,n)=>this._elementsIndexes.set(t,n)),this.emit("refresh")},this.elements=new _}async load(e){if(A(e),!this.spatialReference){const s=this.elements.find(r=>{var t;return((t=r.georeference)==null?void 0:t.coords)!=null});this._set("spatialReference",s?s.georeference.coords.spatialReference:L.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",V(e,this._get("elements"),_))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new T({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):w.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,s){await this.load(),await P(e.spatialReference,this.spatialReference,null,s);const r=C(e.spatialReference,this.spatialReference)?e:$(e,this.spatialReference);if(!r)return[];const t=r.normalize(),n=[];for(const l of t)this._index.forEachInBounds(j(l),({normalizedCoords:u,element:R})=>{u!=null&&B(l,u)&&n.push(R)});return n.sort((l,u)=>this._elementsIndexes.get(l)-this._elementsIndexes.get(u)),n}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,s){const r=e.normalizedBounds,t=this._index.has(e),n=r!=null;this._index.delete(e),n&&this._index.set(e,r),this.notifyChange("fullExtent"),s||(t!==n?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([o()],d.prototype,"elements",null),i([o({readOnly:!0})],d.prototype,"fullExtent",null),i([o()],d.prototype,"spatialReference",null),d=i([S("esri.layers.support.LocalMediaElementSource")],d);const c=d;function y(e){return typeof e=="object"&&e!=null&&"type"in e}function E(e){return y(e)&&e.type==="image"}let a=class extends H(N(k(F(G(q))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=z(async(s,r,t)=>{const{save:n,saveAs:l}=await D(()=>import("./mediaLayerUtils-XUhYG0Xu.js"),__vite__mapDeps([0,1,2,3]));switch(s){case p.SAVE:return n(this,r);case p.SAVE_AS:return l(this,t,r)}}),this.source=new c}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let s=this.source;if(!s)throw new h("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const r=this._getSourceOverride(s,this.georeference);r&&(this.setAtOrigin("source",r,"web-map"),this.setAtOrigin("source",r,"web-scene"),s=r);const t=y(s)?new c({elements:new f([s])}):s;this._set("effectiveSource",t),this.spatialReference&&(t.spatialReference=this.spatialReference),await t.load(e),this.spatialReference=t.spatialReference}destroy(){var e,s;(e=this.effectiveSource)==null||e.destroy(),this.effectiveSource!==this.source&&((s=this.source)==null||s.destroy())}readGeoreference(e,s){return e&&"itemId"in s&&s.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):w.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new c({elements:new f(e)}):e instanceof f?new c({elements:e}):e:null}readSource(e,s,r){if("itemId"in s&&s.itemId)return;const t=this._createSource(s);return t==null||t.read(s,r),t}writeSource(e,s,r,t){if(e&&e instanceof c){const n=e.elements.length;if(n!==1)return void((t==null?void 0:t.messages)&&t.messages.push(new h("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${n}.`)));e=e.elements.at(0)}E(e)?e.write(s,t):t!=null&&t.messages&&(e?t.messages.push(new h("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):t.messages.push(new h("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(p.SAVE,e)}async saveAs(e,s){return this._debouncedSaveOperations(p.SAVE_AS,s,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new x;case"video":return new v}return null}_getSourceOverride(e,s){if(y(e)&&this.originIdOf("source")===m.PORTAL_ITEM&&s&&(this.originIdOf("georeference")===m.WEB_MAP||this.originIdOf("georeference")===m.WEB_SCENE)){const r=e.toJSON(),t=this._createSource(r);return t.read({...r},{origin:"portal-item"}),t.read({georeference:s},{origin:"web-map"}),t.read({georeference:s},{origin:"web-scene"}),t}return null}};i([o({readOnly:!0})],a.prototype,"effectiveSource",void 0),i([o({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],a.prototype,"georeference",void 0),i([g("web-document","georeference")],a.prototype,"readGeoreference",null),i([o({type:String})],a.prototype,"copyright",void 0),i([o({readOnly:!0})],a.prototype,"fullExtent",null),i([o({type:["MediaLayer"]})],a.prototype,"operationalLayerType",void 0),i([o({type:["show","hide"]})],a.prototype,"listMode",void 0),i([o({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:X}},overridePolicy(e,s,r){return{enabled:!0,allowNull:!1,ignoreOrigin:J(this,r==null?void 0:r.origin)&&E(e)&&!!e.georeference&&e.originIdOf("georeference")>m.PORTAL_ITEM}}}}})],a.prototype,"source",null),i([W("source")],a.prototype,"castSource",null),i([g("source",["url"])],a.prototype,"readSource",null),i([Z("source")],a.prototype,"writeSource",null),i([o()],a.prototype,"spatialReference",void 0),i([o({readOnly:!0})],a.prototype,"type",void 0),a=i([S("esri.layers.MediaLayer")],a);const oe=a;export{oe as default};
