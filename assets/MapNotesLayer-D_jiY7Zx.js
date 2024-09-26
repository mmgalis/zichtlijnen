import{eo as C,e as o,y as s,a as I,f as P,dC as B,dE as L,q as F,dn as k,ds as q,dq as z,dr as W,dt as A,aT as h,V as w,ep as K,a3 as N,bm as M,eq as J,er as S,es as $,et as E,d4 as R,g as U,a4 as V,eu as H,af as Z,aj as Q,c6 as X,c7 as Y,c8 as ee,aa as te,aI as T,dx as f,aL as re,aU as le,ev as oe,G as ae}from"./index-2x4JY06U.js";import{n as ie}from"./objectIdUtils-4dd1rf9p.js";function b(t){return t.featureCollectionType==="markup"||t.layers.some(e=>e.layerDefinition.visibilityField!=null||!D(e))}function D({layerDefinition:t,featureSet:e}){const r=t.geometryType??e.geometryType;return v.find(l=>{var a,n,y;return r===l.geometryTypeJSON&&((y=(n=(a=t.drawingInfo)==null?void 0:a.renderer)==null?void 0:n.symbol)==null?void 0:y.type)===l.identifyingSymbol.type})}function j(){return new le({xmin:-180,ymin:-90,xmax:180,ymax:90})}const x=new C({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),ne=new C({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let u=class extends oe{constructor(t){super(t),this.visibilityMode="inherited"}initialize(){for(const t of this.graphics)t.sourceLayer=this.layer;this.graphics.on("after-add",t=>{t.item.sourceLayer=this.layer}),this.graphics.on("after-remove",t=>{t.item.sourceLayer=null})}get fullExtent(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference,e=this.fullBounds;return t?e==null?S(j(),t).geometry:R(e,t):null}get fullBounds(){var r;const t=(r=this.layer)==null?void 0:r.spatialReference;if(!t)return null;const e=M();return this.graphics.forEach(l=>{const a=l.geometry!=null?S(l.geometry,t).geometry:null;a!=null&&J(e,a.type==="point"?a:a.extent,e)}),$(e,E)?null:e}get sublayers(){return this.graphics}};o([s({readOnly:!0})],u.prototype,"fullExtent",null),o([s({readOnly:!0})],u.prototype,"fullBounds",null),o([s({readOnly:!0})],u.prototype,"sublayers",null),o([s()],u.prototype,"layer",void 0),o([s()],u.prototype,"layerId",void 0),o([s({readOnly:!0})],u.prototype,"visibilityMode",void 0),u=o([I("esri.layers.MapNotesLayer.MapNotesSublayer")],u);const v=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:new P().toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:new B().toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:new L().toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:new F().toJSON()}];let i=class extends k(q(z(W(A(ae))))){constructor(t){super(t),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=h.WGS84,this.sublayers=new w(v.map(e=>new u({id:e.id,layerId:e.layerId,title:e.title,layer:this}))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(t,e,r){return{operations:{supportsMapNotesEditing:!b(e)&&(r==null?void 0:r.origin)!=="portal-item"}}}readFeatureCollections(t,e,r){if(!b(e))return null;const l=e.layers.map(a=>{const n=new K;return n.read(a,r),n});return new w({items:l})}readLegacyfeatureCollectionJSON(t,e){return b(e)?N(e.featureCollection):null}get fullExtent(){var r;const t=this.spatialReference,e=M();return this.sublayers!=null?this.sublayers.forEach(({fullBounds:l})=>l!=null?J(e,l,e):e,e):(r=this.featureCollectionJSON)!=null&&r.layers.some(l=>l.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(l=>{const a=S(l.layerDefinition.extent,t).geometry;a!=null&&J(e,a,e)}),$(e,E)?S(j(),t).geometry:R(e,t)}readMinScale(t,e){for(const r of e.layers)if(r.layerDefinition.minScale!=null)return r.layerDefinition.minScale;return 0}readMaxScale(t,e){for(const r of e.layers)if(r.layerDefinition.maxScale!=null)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(t,e){return e.layers.length?h.fromJSON(e.layers[0].layerDefinition.spatialReference):h.WGS84}readSublayers(t,e,r){if(b(e))return null;const l=[];let a=e.layers.reduce((n,y)=>Math.max(n,y.layerDefinition.id??-1),-1)+1;for(const n of e.layers){const{layerDefinition:y,featureSet:p}=n,d=y.id??a++,c=D(n);if(c!=null){const m=new u({id:c.id,title:y.name,layerId:d,layer:this,graphics:p.features.map(({geometry:g,symbol:O,attributes:_,popupInfo:G})=>U.fromJSON({attributes:_,geometry:g,symbol:O,popupTemplate:G}))});l.push(m)}}return new w(l)}writeSublayers(t,e,r,l){var c;const{minScale:a,maxScale:n}=this;if(t==null)return;const y=t.some(m=>m.graphics.length>0);if(!this.capabilities.operations.supportsMapNotesEditing)return void(y&&((c=l==null?void 0:l.messages)==null?void 0:c.push(new V("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))));const p=[];let d=this.spatialReference.toJSON();e:for(const m of t)for(const g of m.graphics)if(g.geometry!=null){d=g.geometry.spatialReference.toJSON();break e}for(const m of v){const g=t.find(O=>m.id===O.id);this._writeMapNoteSublayer(p,g,m,a,n,d,l)}H("featureCollection.layers",p,e)}get textLayer(){return this._findSublayer("textLayer")}load(t){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},t)),Promise.resolve(this)}read(t,e){"featureCollection"in t&&(t=N(t),Object.assign(t,t.featureCollection)),super.read(t,e)}async beforeSave(){if(this.sublayers==null)return;let t=null;const e=[];for(const l of this.sublayers)for(const a of l.graphics)if(a.geometry!=null){const n=a.geometry;t?Z(n.spatialReference,t)||(Q(n.spatialReference,t)||X()||await Y(),a.geometry=ee(n,t)):t=n.spatialReference,e.push(a)}const r=await te(e.map(l=>l.geometry));e.forEach((l,a)=>l.geometry=r[a])}_findSublayer(t){var e;return this.sublayers==null?null:((e=this.sublayers)==null?void 0:e.find(r=>r.id===t))??null}_writeMapNoteSublayer(t,e,r,l,a,n,y){const p=[];if(e!=null){for(const d of e.graphics)this._writeMapNote(p,d,r.geometryType,y);this._normalizeObjectIds(p,x),t.push({layerDefinition:{name:e.title,drawingInfo:{renderer:{type:"simple",symbol:N(r.identifyingSymbol)}},id:e.layerId,geometryType:r.geometryTypeJSON,minScale:l,maxScale:a,objectIdField:"OBJECTID",fields:[x.toJSON(),ne.toJSON()],spatialReference:n},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(t,e,r,l){var d,c;if(e==null)return;const{geometry:a,symbol:n,popupTemplate:y}=e;if(a==null)return;if(a.type!==r)return void((d=l==null?void 0:l.messages)==null?void 0:d.push(new T("map-notes-layer:invalid-geometry-type",`Geometry "${a.type}" cannot be saved in "${r}" layer`,{graphic:e})));if(n==null)return void((c=l==null?void 0:l.messages)==null?void 0:c.push(new T("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:e})));const p={attributes:{...e.attributes},geometry:a.toJSON(),symbol:n.toJSON()};y!=null&&(p.popupInfo=y.toJSON()),t.push(p)}_normalizeObjectIds(t,e){const r=e.name;let l=ie(r,t)+1;const a=new Set;for(const n of t){n.attributes||(n.attributes={});const{attributes:y}=n;(y[r]==null||a.has(y[r]))&&(y[r]=l++),a.add(y[r])}}};o([s({readOnly:!0})],i.prototype,"capabilities",void 0),o([f(["portal-item","web-map"],"capabilities",["layers"])],i.prototype,"readCapabilities",null),o([s({readOnly:!0})],i.prototype,"featureCollections",void 0),o([f(["web-map","portal-item"],"featureCollections",["layers"])],i.prototype,"readFeatureCollections",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],i.prototype,"featureCollectionJSON",void 0),o([f(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],i.prototype,"readLegacyfeatureCollectionJSON",null),o([s({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],i.prototype,"featureCollectionType",void 0),o([s({readOnly:!0})],i.prototype,"fullExtent",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:this.featureCollectionJSON!=null}}}}}}})],i.prototype,"legendEnabled",void 0),o([s({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),o([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"minScale",void 0),o([f(["web-map","portal-item"],"minScale",["layers"])],i.prototype,"readMinScale",null),o([s({type:Number,nonNullable:!0,json:{write:!1}})],i.prototype,"maxScale",void 0),o([f(["web-map","portal-item"],"maxScale",["layers"])],i.prototype,"readMaxScale",null),o([s({readOnly:!0})],i.prototype,"multipointLayer",null),o([s({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],i.prototype,"operationalLayerType",void 0),o([s({readOnly:!0})],i.prototype,"pointLayer",null),o([s({readOnly:!0})],i.prototype,"polygonLayer",null),o([s({readOnly:!0})],i.prototype,"polylineLayer",null),o([s({type:h})],i.prototype,"spatialReference",void 0),o([f(["web-map","portal-item"],"spatialReference",["layers"])],i.prototype,"readSpatialReference",null),o([s({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],i.prototype,"sublayers",void 0),o([f("web-map","sublayers",["layers"])],i.prototype,"readSublayers",null),o([re("web-map","sublayers")],i.prototype,"writeSublayers",null),o([s({readOnly:!0})],i.prototype,"textLayer",null),o([s()],i.prototype,"title",void 0),o([s({readOnly:!0,json:{read:!1}})],i.prototype,"type",void 0),i=o([I("esri.layers.MapNotesLayer")],i);const pe=i;export{pe as default};
