import{e as t,y as s,a,a_ as d,an as y,V as j,bp as G,rg as Q,ey as Y,hg as ee,aR as te,D as b,U as re,jg as se,l as ie,f as oe,g as le,dZ as ae,i as ne,eh as pe,ei as ye,c8 as ue,k as q,ez as de,m as ce,ed as he,jh as P,dN as ge,ep as V,eq as ve,er as fe,q as K,rh as me,e0 as be,he as Se,es as we,x as $e,aB as xe}from"./index-FXsJ6CNr.js";import{A as C}from"./BuildingComponentSublayer-6FoQ-Xzz.js";import{d as c}from"./BuildingGroupSublayer-BxwvUj8s.js";let S=class extends d{constructor(){super(...arguments),this.type=null}};t([s({type:String,readOnly:!0,json:{write:!0}})],S.prototype,"type",void 0),S=t([a("esri.layers.support.BuildingFilterAuthoringInfo")],S);const Z=S;var F;let g=F=class extends d{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new F({filterType:this.filterType,filterValues:y(this.filterValues)})}};t([s({type:String,json:{write:!0}})],g.prototype,"filterType",void 0),t([s({type:[String],json:{write:!0}})],g.prototype,"filterValues",void 0),g=F=t([a("esri.layers.support.BuildingFilterAuthoringInfoType")],g);const Oe=g;var I;const je=j.ofType(Oe);let w=I=class extends d{clone(){return new I({filterTypes:y(this.filterTypes)})}};t([s({type:je,json:{write:!0}})],w.prototype,"filterTypes",void 0),w=I=t([a("esri.layers.support.BuildingFilterAuthoringInfoBlock")],w);const Be=w;var _;const Te=j.ofType(Be);let v=_=class extends Z{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _({filterBlocks:y(this.filterBlocks)})}};t([s({type:["checkbox"]})],v.prototype,"type",void 0),t([s({type:Te,json:{write:!0}})],v.prototype,"filterBlocks",void 0),v=_=t([a("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],v);const U=v;let $=class extends d{};t([s({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),$=t([a("esri.layers.support.BuildingFilterMode")],$);const B=$;var A;let x=A=class extends B{constructor(){super(...arguments),this.type="solid"}clone(){return new A}};t([s({type:["solid"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),x=A=t([a("esri.layers.support.BuildingFilterModeSolid")],x);const k=x;var L;let f=L=class extends B{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new L({edges:y(this.edges)})}};t([G({wireFrame:"wire-frame"})],f.prototype,"type",void 0),t([s(Q)],f.prototype,"edges",void 0),f=L=t([a("esri.layers.support.BuildingFilterModeWireFrame")],f);const H=f;var E;let O=E=class extends B{constructor(){super(...arguments),this.type="x-ray"}clone(){return new E}};t([s({type:["x-ray"],readOnly:!0,json:{write:!0}})],O.prototype,"type",void 0),O=E=t([a("esri.layers.support.BuildingFilterModeXRay")],O);const J=O;var N;const Fe={nonNullable:!0,types:{key:"type",base:B,typeMap:{solid:k,"wire-frame":H,"x-ray":J}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return k.fromJSON(e);case"wireFrame":return H.fromJSON(e);case"x-ray":return J.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let h=N=class extends d{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new k,this.title=""}clone(){return new N({filterExpression:this.filterExpression,filterMode:y(this.filterMode),title:this.title})}};t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"filterExpression",void 0),t([s(Fe)],h.prototype,"filterMode",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],h.prototype,"title",void 0),h=N=t([a("esri.layers.support.BuildingFilterBlock")],h);const Ie=h;var R;const _e=j.ofType(Ie);let u=R=class extends d{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Y(),this.name=null}clone(){return new R({description:this.description,filterBlocks:y(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:y(this.filterAuthoringInfo)})}};t([s({type:String,json:{write:!0}})],u.prototype,"description",void 0),t([s({type:_e,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"filterBlocks",void 0),t([s({types:{key:"type",base:Z,typeMap:{checkbox:U}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?U.fromJSON(e):null,write:!0}})],u.prototype,"filterAuthoringInfo",void 0),t([s({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"id",void 0),t([s({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"name",void 0),u=R=t([a("esri.layers.support.BuildingFilter")],u);const Ae=u;let p=class extends d{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([s({type:String})],p.prototype,"fieldName",void 0),t([s({type:String})],p.prototype,"modelName",void 0),t([s({type:String})],p.prototype,"label",void 0),t([s({type:Number})],p.prototype,"min",void 0),t([s({type:Number})],p.prototype,"max",void 0),t([s({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],p.prototype,"mostFrequentValues",void 0),t([s({type:[Number]})],p.prototype,"subLayerIds",void 0),p=t([a("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],p);let m=class extends ee.LoadableMixin(te(d)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(b.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await re(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([s({constructOnly:!0,type:String})],m.prototype,"url",void 0),t([s({readOnly:!0,type:[p],json:{read:{source:"summary"}}})],m.prototype,"fields",null),m=t([a("esri.layers.support.BuildingSummaryStatistics")],m);const D=m,W=j.ofType(Ae),X=y(c.sublayersProperty);var z;const T=(z=X.json)==null?void 0:z.origins;T&&(T["web-scene"]={type:[C],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},T["portal-item"]={type:[C],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let i=class extends se(ie(oe(le(ae(ne(pe(ye($e)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new ue({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new W,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,o){const l=c.readSublayers(e,r,o);return c.forEachSublayer(l,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(l,this._sublayerOverrides),this._sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:o}){c.forEachSublayer(e,l=>l.read(r.get(l.id),o))}readSublayerOverrides(e,r){var l;const o=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?o.set(n.id,n):(l=r.messages)==null||l.push(new q("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:o,context:r}}writeSublayerOverrides(e,r,o){const l=[];c.forEachSublayer(this.sublayers,n=>{const M=n.write({},o);Object.keys(M).length>1&&l.push(M)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(o=>{r.sublayers.push(y(o))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const o=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,o):this._sublayerOverrides=o}}readSummaryStatistics(e,r){var o;if(typeof r.statisticsHRef=="string"){const l=de((o=this.parsedUrl)==null?void 0:o.path,r.statisticsHRef);return new D({url:l})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ce).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return he(this,e=>{c.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(P.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(P.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new q("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await ge(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){b.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";V(b.getLogger(this),ve(r,"absolute-height",e)),V(b.getLogger(this),fe(r,e))}};t([s({type:["BuildingSceneLayer"]})],i.prototype,"operationalLayerType",void 0),t([s({readOnly:!0})],i.prototype,"allSublayers",void 0),t([s(X)],i.prototype,"sublayers",void 0),t([K("service","sublayers")],i.prototype,"readSublayers",null),t([s({type:W,nonNullable:!0,json:{write:!0}})],i.prototype,"filters",void 0),t([s({type:String,json:{write:!0}})],i.prototype,"activeFilterId",void 0),t([s({readOnly:!0,type:D})],i.prototype,"summaryStatistics",void 0),t([K("summaryStatistics",["statisticsHRef"])],i.prototype,"readSummaryStatistics",null),t([s({type:[String],json:{read:!1}})],i.prototype,"outFields",void 0),t([s(me)],i.prototype,"fullExtent",void 0),t([s(be)],i.prototype,"legendEnabled",void 0),t([s({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),t([s(Se(xe))],i.prototype,"spatialReference",void 0),t([s(we)],i.prototype,"elevationInfo",null),t([s({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([s()],i.prototype,"associatedFeatureServiceItem",void 0),i=t([a("esri.layers.BuildingSceneLayer")],i);const Re=i;export{Re as default};
