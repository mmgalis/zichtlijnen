const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/meshFeatureSet-BjEFfeWX.js","assets/index-CY8jQoH7.js","assets/index-1kXkUciu.css","assets/executeRelationshipQuery-RkcpWKO0.js","assets/queryAttachments-Tkt3uFh4.js","assets/executeTopFeaturesQuery-DV-CotBR.js","assets/queryTopFeatures-DeGSlSbf.js","assets/executeForTopIds-CmpltAls.js","assets/executeForTopExtents-C8r5PqHH.js","assets/executeForTopCount-7H2JAkkn.js"])))=>i.map(i=>d[i]);
import{fu as _,iX as A,a5 as S,b5 as T,e as n,y as l,iY as D,a as N,S as Q,dM as j,by as q,iZ as P,b4 as $,gq as p,_ as u,at as f,au as h,k as y,ax as L}from"./index-CY8jQoH7.js";import{s as J,a as z}from"./executeForIds-DOHKF5Qa.js";import{n as C}from"./executeQueryPBF-CIRmD1Rc.js";async function U(e,t,r){const o=_(e),i=await A(o,S.from(t),{...r}),s=i.data.extent;return!s||isNaN(s.xmin)||isNaN(s.ymin)||isNaN(s.xmax)||isNaN(s.ymax)?{count:i.data.count,extent:null}:{count:i.data.count,extent:T.fromJSON(s)}}let a=class extends Q{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return j(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){var c;const r=this._normalizeQuery(e),o=((c=e.outStatistics)==null?void 0:c[0])!=null,i=q("featurelayer-pbf-statistics"),s=!o||i;let d;if(this.pbfSupported&&s)try{d=await C(this.url,r,t)}catch(m){if(m.name!=="query:parsing-pbf")throw m;this.pbfSupported=!1}return this.pbfSupported&&s||(d=await P(this.url,r,t)),this._normalizeFields(d.fields),d}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||this.infoFor3D==null||!t.features)return $.fromJSON(t);const{meshFeatureSetFromJSON:o}=await p(u(()=>import("./meshFeatureSet-BjEFfeWX.js"),__vite__mapDeps([0,1,2])),r);return o(e,this.infoFor3D,t)}executeForCount(e,t){return J(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return U(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return z(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:o}]=await p(Promise.all([u(()=>import("./index-CY8jQoH7.js").then(i=>i.Ad),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-RkcpWKO0.js"),__vite__mapDeps([3,1,2]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:o}]=await p(Promise.all([u(()=>import("./index-CY8jQoH7.js").then(i=>i.Ad),__vite__mapDeps([1,2])),u(()=>import("./executeRelationshipQuery-RkcpWKO0.js"),__vite__mapDeps([3,1,2]))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),o(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:o,processAttachmentQueryResult:i}=await p(u(()=>import("./queryAttachments-Tkt3uFh4.js"),__vite__mapDeps([4,1,2])),t),s=_(this.url);return i(s,await(this.queryAttachmentsSupported?r(s,e,t):o(s,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await p(u(()=>import("./executeTopFeaturesQuery-DV-CotBR.js"),__vite__mapDeps([5,1,2,6])),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await p(u(()=>import("./executeForTopIds-CmpltAls.js"),__vite__mapDeps([7,1,2,6])),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await p(u(()=>import("./executeForTopExtents-C8r5PqHH.js"),__vite__mapDeps([8,1,2,6])),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await p(u(()=>import("./executeForTopCount-7H2JAkkn.js"),__vite__mapDeps([9,1,2,6])),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=S.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?D.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(r!=null&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:i}=r,s=f("model/gltf-binary",o)??h("glb",o),d=f("model/gltf+json",o)??h("gltf",o);for(const c of i){if(c===s){t.formatOf3DObjects=c;break}c!==d||t.formatOf3DObjects||(t.formatOf3DObjects=c)}if(!t.formatOf3DObjects)throw new y("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!L(t.outSpatialReference,this.sourceSpatialReference))throw new y("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===e?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:c,originY:m,originZ:b,translationX:x,translationY:F,translationZ:O,scaleX:g,scaleY:R,scaleZ:V,rotationX:E,rotationY:I,rotationZ:v,rotationDeg:w}=r.transformFieldRoles;t.outFields.push(c,m,b,x,F,O,g,R,V,E,I,v,w)}}return t}_normalizeFields(e){if(this.fieldsIndex!=null&&e!=null)for(const t of e){const r=this.fieldsIndex.get(t.name);r&&Object.assign(t,r.toJSON())}}_queryIs3DObjectFormat(e){return this.infoFor3D!=null&&e.returnGeometry===!0&&e.multipatchOption!=="xyFootprint"&&!e.outStatistics}};n([l({type:D})],a.prototype,"dynamicDataSource",void 0),n([l()],a.prototype,"fieldsIndex",void 0),n([l()],a.prototype,"gdbVersion",void 0),n([l()],a.prototype,"infoFor3D",void 0),n([l({readOnly:!0})],a.prototype,"parsedUrl",null),n([l()],a.prototype,"pbfSupported",void 0),n([l()],a.prototype,"queryAttachmentsSupported",void 0),n([l()],a.prototype,"sourceSpatialReference",void 0),n([l({type:String})],a.prototype,"url",void 0),a=n([N("esri.layers.graphics.sources.support.QueryTask")],a);const k=a;export{k as x};
