const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-2x4JY06U.js","assets/index-BCwB8mD8.css"])))=>i.map(i=>d[i]);
import{e as c,y as p,c5 as ye,a as q,bg as J,S as U,am as he,bu as ge,k1 as fe,c4 as me,lI as Ee,aG as Z,aT as z,c7 as Se,c8 as H,lJ as we,lK as _e,eq as Ie,R as be,lL as Re,jQ as ve,aP as ie,ag as Fe,ah as $e,hJ as xe,hp as Oe,a7 as Qe,T as je,dU as C,hC as k,dW as D,bS as N,bW as K,L as Me,u as Te,aU as Ce,a4 as X,aS as ke,k6 as De,ez as Ne,jR as Y,eJ as V,bk as Ge,aA as Ae,gQ as Je,lM as Pe}from"./index-2x4JY06U.js";import{a as Q,n as ee,b as te}from"./TemporalSceneLayerView-CArHHh3h.js";import{O as Le}from"./WhereClause-BKRVEuyU.js";import{a as A}from"./RenderTexture-ClJgas7i.js";import{$ as We}from"./QueryEngine-DVq5k5xk.js";import{n as Ke}from"./optimizedFeatureQueryEngineAdapter-mPhVzWef.js";import{o as T}from"./I3SMeshView3D-b1BBzIoe.js";const oe="esri.views.3d.layers.i3s.I3SMeshViewFilter",j=()=>Qe.getLogger(oe);let g=class extends U{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){he(()=>{var t;return((t=this.viewFilter)==null?void 0:t.geometry)||this.layerFilter!=null}).then(()=>this.loadAsyncModule(ge(()=>import("./index-2x4JY06U.js").then(t=>t.Ak),__vite__mapDeps([0,1])).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){var e;if(((e=this.viewFilter)==null?void 0:e.objectIds)==null)return null;const t=fe(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){var e;const t=(e=this.viewFilter)==null?void 0:e.where;if(t==null||!t)return null;try{return Le.create(t,this.layerFieldsIndex)}catch(r){j().error(`Failed to parse filter where clause: ${r}`)}return null}addFilters(t,e,r,s){var l;const n=this.sortedObjectIds;n!=null&&t.push(u=>me(n,!0,u)),this.addSqlFilter(t,this.parsedWhereClause),this.addTimeFilter(t,(l=this.viewFilter)==null?void 0:l.timeExtent);const i=Q(this._layerMaskGeometries),o=this._geometryEngine;if(i!=null&&this.layerFilter!=null&&o!=null){const u=this.layerFilter.spatialRelationship;t.push((h,d)=>ne(o,h,d,s,e,r,i,u))}const a=Q(this._viewMaskGeometries);if(a!=null&&this.viewFilter!=null&&o!=null){const u=this.viewFilter.spatialRelationship;t.push((h,d)=>ne(o,h,d,s,e,r,a,u))}}isMBSGeometryVisible(t,e,r){const s=Q(this._layerMaskGeometries),n=this._geometryEngine;if(s!=null&&this.layerFilter!=null&&n!=null){const o=this.layerFilter.spatialRelationship,a=s[0].spatialReference||e;return A(t,r,M,a)?re(n,M,s,a,o):(j().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const i=Q(this._viewMaskGeometries);if(i!=null&&this.viewFilter!=null&&n!=null){const o=this.viewFilter.spatialRelationship,a=i[0].spatialReference||e;return A(t,r,M,a)?re(n,M,i,a,o):(j().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=Q(this._viewMaskGeometries),e=Q(this._layerMaskGeometries);return t==null||e==null?t||e:e.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return t==null?null:this._geometryEngine==null?ee:t.spatialRelationship==="disjoint"?t.geometries.map(e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}})):[t.geometries.reduce((e,r)=>(e.rings=[...e.rings,...r.rings],e),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(this.viewFilter==null)return null;const{geometry:t}=this.viewFilter;if(t==null)return null;if(this.viewFilter==null||this._geometryEngine==null)return ee;const{distance:e,units:r}=this.viewFilter,s=this.viewFilter.spatialRelationship,n=t.type==="mesh"?t.extent:t;if(e==null||e===0)return G(this._geometryEngine,n,s);const i=r||Ee(n.spatialReference);if(n.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(n,e,i);return G(this._geometryEngine,l,s)}const o=Z(n,z.WGS84);if(o!=null){const l=Z(this._geometryEngine.geodesicBuffer(o,e,i),n.spatialReference);return G(this._geometryEngine,l,s)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Se().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let a=null;try{a=H(n,z.WGS84)}catch{}if(a)try{a=H(this._geometryEngine.geodesicBuffer(a,e,i),n.spatialReference)}catch{a=null}return a||j().error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),G(this._geometryEngine,a,s)}get updating(){return te(this._layerMaskGeometries)||te(this._viewMaskGeometries)}static checkSupport(t){return t!=null&&(!!Ve(t.spatialRelationship)||(j().warn(`Filters with spatialRelationship other than ${ae.join(", ")} are not supported for mesh scene layers`),!1))}};c([p()],g.prototype,"layerFilter",void 0),c([p({type:ye})],g.prototype,"viewFilter",void 0),c([p()],g.prototype,"layerFieldsIndex",void 0),c([p()],g.prototype,"loadAsyncModule",void 0),c([p()],g.prototype,"addSqlFilter",void 0),c([p()],g.prototype,"addTimeFilter",void 0),c([p({readOnly:!0})],g.prototype,"sortedObjectIds",null),c([p({readOnly:!0})],g.prototype,"parsedWhereClause",null),c([p({readOnly:!0})],g.prototype,"parsedGeometry",null),c([p({readOnly:!0})],g.prototype,"_layerMaskGeometries",null),c([p({readOnly:!0})],g.prototype,"_viewMaskGeometries",null),c([p()],g.prototype,"updating",null),c([p()],g.prototype,"_projectionEngineLoaded",void 0),c([p()],g.prototype,"_geometryEngine",void 0),g=c([q(oe)],g);const ae=(t=>t)(["contains","intersects","disjoint"]);function Ve(t){return t!=null&&ae.includes(t)}var y;function G(t,e,r){if(e==null)return null;if(r==="disjoint"&&e.type==="polygon"){const s=e.rings.length,n=e.spatialReference,i=new Array(s);for(let l=0;l<s;++l){const u=we(1/0,1/0,-1/0,-1/0);_e(u,e.rings[l]),i[l]={type:"polygon",rings:[e.rings[l]],spatialReference:n,cache:{},aabr:u}}i.sort((l,u)=>l.aabr[0]-u.aabr[0]);const o=new Set,a=new je;for(let l=0;l<i.length;++l){const u=i[l],h=u.aabr[0];o.forEach(d=>{if(h>=d.aabr[2])return void o.delete(d);if(u.aabr[1]>d.aabr[3]||u.aabr[3]<d.aabr[1]||!t.intersects(u,d))return;u.rings=u.rings.concat(d.rings),Ie(u.aabr,d.aabr,u.aabr),u.cache={},o.delete(d);const m=be(i,d,i.length,a);i.splice(m,1)}),o.add(u)}for(const l of i)l.aabr=void 0;return i}return[e]}function re(t,e,r,s,n){if(e[3]>=.5*(e[2]+Re(s).radius))return!0;const i=le(t,e,s);return r.every(o=>ue(t,o,i,n)!==y.DISCARD)}function ne(t,e,r,s,n,i,o,a){const l=o[0].spatialReference||n.spatialReference;if(!A(r.node.serviceMbsInIndexSR,i,M,l))return void j().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const u=le(t,M,l),h=Be(a,n,l,s,r.objectHandle);for(const d of o){if(e.length===0)return;switch(ue(t,d,u,a)){case y.DISCARD:return void(e.length=0);case y.KEEP:continue}ve(e,r.featureIds,m=>qe(t,d,m,h))}}(function(t){t[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST"})(y||(y={}));const M=ie(0,0,0,0);function Be(t,e,r,s,n){const i=e.renderSpatialReference,o=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let u,h;switch(t){case"intersects":u=(d,m,I)=>d.intersects(m,I)?y.KEEP:y.TEST,h=B;break;case"contains":u=(d,m,I)=>d.contains(m,I)?y.TEST:y.DISCARD,h=B;break;default:u=(d,m,I)=>d.disjoint(m,I)?y.TEST:y.DISCARD,h=ce}return{collection:s,object:n,type:t,maskSR:r,renderSR:i,aabbCache:o,triangle:a,positions:l,triangleTest:u,geometryTest:h}}function le(t,e,r){const s={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:r},n=!Fe(r)&&!$e(r),i=Number.isNaN(e[3])?0:xe(e[3],0,2*Oe.radius),o=n?t.buffer(s,i,1):t.geodesicBuffer(s,i,1);return o.type="polygon",o}function ue(t,e,r,s){switch(s){case"intersects":case"contains":return B(t,e,r);case"disjoint":return ce(t,e,r)}}function B(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.KEEP:y.TEST:y.DISCARD}function ce(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.DISCARD:y.TEST:y.KEEP}function qe(t,e,r,s){const{collection:n,object:i,renderSR:o,maskSR:a,geometryTest:l,aabbCache:u}=s;let h=u.get(r);if(!h){const b=n.getObjectTransform(i);n.getComponentAabb(i,r,_);const E=[C(_[0],_[1],0),C(_[0],_[4],0),C(_[3],_[4],0),C(_[3],_[1],0)];for(let f=0;f<4;++f)k(E[f],E[f],b.rotationScale),D(E[f],E[f],b.position),N(E[f],o,E[f],a);h={type:"polygon",rings:[E],spatialReference:a,cache:{}},h.rings[0][4]=h.rings[0][0],u.set(r,h)}switch(l(t,e,h)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:d,triangleTest:m,positions:I}=s,v=d.rings[0][0],F=d.rings[0][1],$=d.rings[0][2],O=n.getObjectTransform(i);n.getComponentPositions(i,r,I);const{indices:P,data:w,stride:L,startIndex:de,endIndex:pe}=I;for(let b=de;b<pe;b+=3){const E=L*P[b],f=L*P[b+1],W=L*P[b+2];switch(K(v,w[E],w[E+1],w[E+2]),K(F,w[f],w[f+1],w[f+2]),K($,w[W],w[W+1],w[W+2]),k(v,v,O.rotationScale),k(F,F,O.rotationScale),k($,$,O.rotationScale),D(v,v,O.position),D(F,F,O.position),D($,$,O.position),N(v,o,v,a),N(F,o,F,a),N($,o,$,a),m(t,e,d)){case y.DISCARD:return!1;case y.KEEP:return!0}}return s.type!=="intersects"}const _=J(),Ue=We;let R=class extends U{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Me({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e)}initialize(){this.addHandles(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=Te(this._dataQueryEngineInstance),this._set("layerView",null)}async executeQueryForCount(e,r){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:s,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:s,extent:Ce.fromJSON(n)}}async executeQueryForIds(e,r){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const s=this._ensureQueryJSON(e);if(s.returnGeometry)throw new X("unsupported-query","returnGeometry is not supported when querying a mesh scene layer view, it is only supported when directly querying a scene layer");if(s.returnCentroid)throw new X("unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(s,r),i=ke.fromJSON(n);return i.features.forEach(o=>o.geometry=null),i}_ensureQueryJSON(e){return e==null?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var l;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||De,r="esriGeometryPolygon",s=((l=this.layer.fieldsIndex)==null?void 0:l.toJSON())||new Ne([]),n=this.layerView.view.resourceController.scheduler,i=this.spatialReference.toJSON(),o=this.priority,a=this.spatialIndex;return this._dataQueryEngineInstance=new Ue({hasZ:!0,hasM:!1,geometryType:r,fieldsIndex:s,timeInfo:null,spatialReference:i,objectIdField:e,featureStore:a,scheduler:n,priority:o}),this._dataQueryEngineInstance}};c([p({constructOnly:!0})],R.prototype,"layerView",void 0),c([p({constructOnly:!0})],R.prototype,"priority",void 0),c([p({constructOnly:!0})],R.prototype,"spatialIndex",void 0),c([p()],R.prototype,"spatialReference",null),c([p()],R.prototype,"layer",null),c([p()],R.prototype,"defaultQueryJSON",null),R=c([q("esri.views.3d.layers.i3s.I3SQueryEngine")],R);class ot{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){var o;const{meta:r,index:s}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const i=(o=r.attributeInfo)==null?void 0:o.attributeData;if(i!=null)for(const a of Object.keys(i))n[a]=Y(i[a],s);return n}getAttribute(e,r){var o;if(r===this._objectIdField)return e.id;const{meta:s,index:n}=e,i=(o=s.attributeInfo)==null?void 0:o.attributeData;return i!=null?Y(i[r],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[r,s,n,i,o]=this._getFeatureExtent(e,se);return new V([5],[r,s,n,i,s,n,i,o,n,r,o,n,r,s,n])}getCentroid(e,r){if(e.geometry)return Ke(new V,e.geometry,r.hasZ,r.hasM);const[s,n,i,o,a,l]=this._getFeatureExtent(e,se);return new V([0],[(s+o)/2,(n+a)/2,(i+l)/2])}cloneWithGeometry(e,r){const{id:s,index:n,meta:i}=e;return{id:s,index:n,meta:i,geometry:r}}}const se=J(),Ze=J();let x=class extends U{constructor(t){super(t),this.events=new Ae}forEach(t){this.forAllFeatures(e=>(t(e),T.CONTINUE))}forEachBounds(t,e){const r=this.getFeatureExtent;for(const s of t)e(r(s,Ze))}forEachInBounds(t,e){this.forAllFeatures(r=>{const s=this.getFeatureExtent(r,ze);return Je(t,Pe(s,He))&&e(r),T.CONTINUE},r=>{if(A(r.node.serviceMbsInIndexSR,this.sourceSpatialReference,S,this.viewSpatialReference),S[0]>=t[0]&&S[2]<=t[2]&&S[1]>=t[1]&&S[3]<=t[3])return T.CONTINUE;const s=Math.max(t[0],Math.min(S[0],t[2])),n=Math.max(t[1],Math.min(S[1],t[3])),i=S[0]-s,o=S[1]-n;return i*i+o*o<=S[3]*S[3]?T.CONTINUE:T.SKIP})}};c([p({constructOnly:!0})],x.prototype,"featureAdapter",void 0),c([p({constructOnly:!0})],x.prototype,"forAllFeatures",void 0),c([p({constructOnly:!0})],x.prototype,"getFeatureExtent",void 0),c([p({constructOnly:!0})],x.prototype,"sourceSpatialReference",void 0),c([p({constructOnly:!0})],x.prototype,"viewSpatialReference",void 0),x=c([q("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],x);const S=ie(0,0,0,0),ze=J(),He=Ge();export{g as P,R as d,x as h,ot as o};
