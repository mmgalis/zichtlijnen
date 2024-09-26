const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-2x4JY06U.js","assets/index-BCwB8mD8.css"])))=>i.map(i=>d[i]);
import{e as a,y as n,dx as S,aU as z,dy as te,hg as re,aT as X,a as k,kT as ie,kU as B,an as Q,dJ as p,eb as J,dv as R,d9 as W,aZ as se,dt as ae,s as oe,a4 as f,f9 as le,kV as ne,ez as ye,kW as ue,bl as pe,iy as de,kX as ce,a7 as E,kY as M,kR as he,V as N,eT as fe,dP as P,h7 as be,L as me,bu as ge,a3 as F,kH as Se,kZ as Ie,hB as we,k_ as ve,f2 as $,eo as Ee,k$ as Le,en as C,iB as xe,aL as v,hh as Te,l0 as Oe,iE as Fe,hf as De,io as H,fc as K,eW as _e,iL as Pe,e7 as L,h5 as Ae,bY as Ce,B as G,D as Z,l1 as qe,e5 as je}from"./index-2x4JY06U.js";import{x as Ve}from"./QueryTask-dSIIOeJB.js";const Ue=t=>{let e=class extends t{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(r,i){const s=i.capabilities&&i.capabilities.split(",").map(ee=>ee.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,u=l!=="tile"&&!!i.supportsDynamicLayers,y=s.includes("query"),d=s.includes("map"),h=!!i.exportTilesAllowed,m=s.includes("tilemap"),I=s.includes("data"),w=l!=="tile"&&(!i.tileInfo||u),x=l!=="tile"&&(!i.tileInfo||u),c=l!=="tile",b=i.cimVersion&&ie.parse(i.cimVersion),T=(b==null?void 0:b.since(1,4))??!1,O=(b==null?void 0:b.since(2,0))??!1;return{operations:{supportsExportMap:d,supportsExportTiles:h,supportsIdentify:y,supportsQuery:I,supportsTileMap:m},exportMap:d?{supportsArcadeExpressionForLabeling:T,supportsSublayersChanges:c,supportsDynamicLayers:u,supportsSublayerVisibility:w,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:O}:null,exportTiles:h?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(r,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchRelatedService(r){const i=this.portalItem;if(!i||!B(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},r).then(l=>l.find(u=>u.type==="Feature Service")??null,()=>null));const s=await this._relatedFeatureServicePromise;return Q(r),s?{itemId:s.id,url:s.url}:null}async fetchSublayerInfo(r,i){var y;const{source:s}=r;if(this!=null&&this.portalItem&&this.type==="tile"&&(s==null?void 0:s.type)==="map-layer"&&B(this.portalItem)&&r.originIdOf("url")<p.SERVICE){const d=await this.fetchRelatedService(i);d&&(r.url=J(d.url,s.mapLayerId.toString()),r.layerItemId=d.itemId)}const{url:l}=r;let u;if(s.type==="data-layer")u=(await R(l,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data;else if(l&&r.originIdOf("url")>p.SERVICE)try{const d=await this._fetchAllLayersAndTablesFromService(l),h=((y=W(l))==null?void 0:y.sublayer)??s.mapLayerId;u=d.get(h)}catch{}else{let d=r.id;(s==null?void 0:s.type)==="map-layer"&&(d=s.mapLayerId);try{u=(await this.fetchAllLayersAndTables(i)).get(d)}catch{}}return u}async fetchAllLayersAndTables(r){var i;return this._fetchAllLayersAndTablesFromService((i=this.parsedUrl)==null?void 0:i.path,r)}async _fetchAllLayersAndTablesFromService(r,i){await this.load(i),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const s=W(r),l=se(this._allLayersAndTablesMap,s==null?void 0:s.url.path,()=>R(J(s==null?void 0:s.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(y=>{const d=new Map,{layers:h,tables:m}=y.data,I=[...h??[],...m??[]];for(const w of I)d.set(w.id,w);return{result:d}},y=>({error:y}))),u=await l;if(Q(i),"result"in u)return u.result;throw u.error}};return a([n({readOnly:!0})],e.prototype,"capabilities",void 0),a([S("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],e.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],e.prototype,"copyright",void 0),a([n({type:z})],e.prototype,"fullExtent",void 0),a([n(te)],e.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],e.prototype,"legendEnabled",void 0),a([n(re)],e.prototype,"popupEnabled",void 0),a([n({type:X})],e.prototype,"spatialReference",void 0),a([n({readOnly:!0})],e.prototype,"version",void 0),a([S("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],e.prototype,"readVersion",null),e=a([k("esri.layers.mixins.ArcGISMapService")],e),e};var A;function q(t){return(t==null?void 0:t.type)==="esriSMS"}function j(t,e,r){var s;const i=this.originIdOf(e)>=L(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&((s=r.layer)==null?void 0:s.type)==="map-image"&&(r.writeSublayerStructure||i)}}function V(t,e,r){var i;return{enabled:!!r&&((i=r.layer)==null?void 0:i.type)==="tile"&&(r.origin&&this.originIdOf(e)>=L(r.origin)||this._isOverridden(e))}}function g(t,e,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function D(t,e,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(e)>=L(r.origin))}}let Re=0;const Me=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]);let o=A=class extends ae(oe(Ae)){constructor(t){super(t),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(t){return this.addResolvingPromise((async()=>{const{layer:e,url:r}=this;if(!e&&!r)throw new f("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=e?await e.fetchSublayerInfo(this,t):(await R(r,{responseType:"json",query:{f:"json"},...t})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:e,url:le(r)}))})()),this}readCapabilities(t,e){e=e.layerDefinition||e;const{operations:{supportsQuery:r,supportsQueryAttachments:i},query:{supportsFormatPBF:s,supportsOrderBy:l,supportsPagination:u},data:{supportsAttachment:y},queryRelated:d}=ne(e,this.url);return{exportMap:{supportsModification:!!e.canModifyLayer},operations:{supportsQuery:r,supportsQueryAttachments:i},data:{supportsAttachment:y},query:{supportsFormatPBF:s,supportsOrderBy:l,supportsPagination:u},queryRelated:d}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(t){this._setAndNotifyLayer("definitionExpression",t)}get effectiveScaleRange(){const{minScale:t,maxScale:e}=this;return{minScale:t,maxScale:e}}readMaxScaleRange(t,e){return{minScale:(e=e.layerDefinition||e).minScale??0,maxScale:e.maxScale??0}}get fieldsIndex(){return new ye(this.fields||[])}set floorInfo(t){this._setAndNotifyLayer("floorInfo",t)}readGlobalIdFieldFromService(t,e){if((e=e.layerDefinition||e).globalIdField)return e.globalIdField;if(e.fields){for(const r of e.fields)if(r.type==="esriFieldTypeGlobalID")return r.name}}get id(){return this._get("id")??Re++}set id(t){var e,r,i;this._get("id")!==t&&(((i=(r=(e=this.layer)==null?void 0:e.capabilities)==null?void 0:r.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",t):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(t,e){return e.type==="Table"}set labelingInfo(t){this._setAndNotifyLayer("labelingInfo",t)}writeLabelingInfo(t,e,r,i){t&&t.length&&(e.layerDefinition={drawingInfo:{labelingInfo:t.map(s=>s.write({},i))}})}set labelsVisible(t){this._setAndNotifyLayer("labelsVisible",t)}set layer(t){var e;this._set("layer",t),(e=this.sublayers)==null||e.forEach(r=>r.layer=t)}set listMode(t){this._set("listMode",t)}set minScale(t){this._setAndNotifyLayer("minScale",t)}readMinScale(t,e){var r;return e.minScale||((r=e.layerDefinition)==null?void 0:r.minScale)||0}set maxScale(t){this._setAndNotifyLayer("maxScale",t)}readMaxScale(t,e){var r;return e.maxScale||((r=e.layerDefinition)==null?void 0:r.maxScale)||0}readObjectIdFieldFromService(t,e){var i;if((e=e.layerDefinition||e).objectIdField)return e.objectIdField;const r=(i=e.fields)==null?void 0:i.find(s=>s.type==="esriFieldTypeOID");return r==null?void 0:r.name}set opacity(t){this._setAndNotifyLayer("opacity",t)}readOpacity(t,e){var i;const{layerDefinition:r}=e;return 1-.01*((r==null?void 0:r.transparency)??((i=r==null?void 0:r.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(t,e,r,i){e.layerDefinition={drawingInfo:{transparency:100-100*t}}}writeParent(t,e){this.parent&&this.parent!==this.layer?e.parentLayerId=ue(this.parent.id):e.parentLayerId=-1}get queryTask(){var y;if(!this.layer)return null;const{capabilities:t,fieldsIndex:e,layer:r,url:i}=this,{spatialReference:s}=r,l="gdbVersion"in r?r.gdbVersion:void 0,u=pe("featurelayer-pbf")&&(t==null?void 0:t.query.supportsFormatPBF);return new Ve({fieldsIndex:e,gdbVersion:l,pbfSupported:u,queryAttachmentsSupported:((y=t==null?void 0:t.operations)==null?void 0:y.supportsQueryAttachments)??!1,sourceSpatialReference:s,url:i})}set renderer(t){if(de(t,this.fieldsIndex),t){for(const e of t.getSymbols())if(ce(e)){E.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",t)}get source(){return this._get("source")||new M({mapLayerId:this.id})}set source(t){this._setAndNotifyLayer("source",t)}set sublayers(t){this._handleSublayersChange(t,this._get("sublayers")),this._set("sublayers",t)}castSublayers(t){return he(N.ofType(A),t)}writeSublayers(t,e,r){var i;(i=this.sublayers)!=null&&i.length&&(e[r]=this.sublayers.map(s=>s.id).toArray().reverse())}readTitle(t,e){var r;return((r=e.layerDefinition)==null?void 0:r.name)??e.name}readTypeIdField(t,e){let r=(e=e.layerDefinition||e).typeIdField;if(r&&e.fields){r=r.toLowerCase();const i=e.fields.find(s=>s.name.toLowerCase()===r);i&&(r=i.name)}return r}get url(){var i;const t=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,e=this.source;if(!t)return null;if(this._lastParsedUrl=t,(e==null?void 0:e.type)==="map-layer")return`${t.path}/${e.mapLayerId}`;const r={layer:JSON.stringify({source:this.source})};return`${t.path}/dynamicLayer?${fe(r)}`}set url(t){this._overrideIfSome("url",t)}set visible(t){this._setAndNotifyLayer("visible",t)}writeVisible(t,e,r,i){e[r]=this.getAtOrigin("defaultVisibility","service")||t}clone(){const{store:t}=P(this),e=new A;return P(e).store=t.clone(Me),this.commitProperty("url"),e._lastParsedUrl=this._lastParsedUrl,e}createPopupTemplate(t){return be(this,t)}createQuery(){return new me({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var s;if(this.hasOwnProperty("sublayers"))return null;const t=(await ge(async()=>{const{default:l}=await import("./index-2x4JY06U.js").then(u=>u.Am);return{default:l}},__vite__mapDeps([0,1]))).default,{layer:e,url:r}=this;let i;if(r&&this.originIdOf("url")>p.SERVICE)i=new t({url:r});else{if(!(e!=null&&e.parsedUrl))throw new f("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const l=e.parsedUrl;i=new t({url:l.path}),l&&this.source&&(this.source.type==="map-layer"?i.layerId=this.source.mapLayerId:i.dynamicDataSource=this.source)}}return(e==null?void 0:e.refreshInterval)!=null&&(i.refreshInterval=e.refreshInterval),this.definitionExpression&&(i.definitionExpression=this.definitionExpression),this.floorInfo&&(i.floorInfo=F(this.floorInfo)),this.originIdOf("labelingInfo")>p.SERVICE&&(i.labelingInfo=F(this.labelingInfo)),this.originIdOf("labelsVisible")>p.DEFAULTS&&(i.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>p.DEFAULTS&&(i.legendEnabled=this.legendEnabled),this.originIdOf("visible")>p.DEFAULTS&&(i.visible=this.visible),this.originIdOf("minScale")>p.DEFAULTS&&(i.minScale=this.minScale),this.originIdOf("maxScale")>p.DEFAULTS&&(i.maxScale=this.maxScale),this.originIdOf("opacity")>p.DEFAULTS&&(i.opacity=this.opacity),this.originIdOf("popupTemplate")>p.DEFAULTS&&(i.popupTemplate=F(this.popupTemplate)),this.originIdOf("renderer")>p.SERVICE&&(i.renderer=F(this.renderer)),((s=this.source)==null?void 0:s.type)==="data-layer"&&(i.dynamicDataSource=this.source.clone()),this.originIdOf("title")>p.DEFAULTS&&(i.title=this.title),(e==null?void 0:e.type)==="map-image"&&e.originIdOf("customParameters")>p.DEFAULTS&&(i.customParameters=e.customParameters),(e==null?void 0:e.type)==="tile"&&e.originIdOf("customParameters")>p.DEFAULTS&&(i.customParameters=e.customParameters),i}getField(t){return this.fieldsIndex.get(t)}getFeatureType(t){return Se(this.types,this.typeIdField,t)}getFieldDomain(t,e){const r=e==null?void 0:e.feature,i=this.getFeatureType(r);if(i){const s=i.domains&&i.domains[t];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(t)}async queryAttachments(t,e){var m,I;await this.load(),t=Ie.from(t);const r=this.capabilities;if(!((m=r==null?void 0:r.data)!=null&&m.supportsAttachment))throw new f("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:l,num:u,size:y,start:d,where:h}=t;if(!((I=r==null?void 0:r.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(l==null?void 0:l.length)>0||(y==null?void 0:y.length)>0||u||d||h))throw new f("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",t);if(!(s!=null&&s.length||l!=null&&l.length||h))throw new f("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",t);return this.queryTask.executeAttachmentQuery(t,e)}async queryFeatureCount(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryFeatureCount:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeForCount(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryFeatures(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryFeatures:not-supported","this layer has no url.");const r=await this.queryTask.execute(t,{...e,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(s=this.layer)==null?void 0:s.apiKey}});if(r!=null&&r.features)for(const l of r.features)l.sourceLayer=this;return r}async queryObjectIds(t=this.createQuery(),e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryObjectIds:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeForIds(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryRelatedFeatures(t,e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new f("queryRelatedFeatures:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeRelationshipQuery(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}async queryRelatedFeaturesCount(t,e){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new f("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new f("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new f("queryRelatedFeaturesCount:not-supported","this layer has no url.");const r=(i=this.layer)==null?void 0:i.apiKey;return await this.queryTask.executeRelationshipQueryForCount(t,{...e,query:{...(s=this.layer)==null?void 0:s.customParameters,token:r}})}toExportImageJSON(t){var l,u;const e={id:this.id,source:((l=this.source)==null?void 0:l.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},r=we(t,this.definitionExpression);r!=null&&(e.definitionExpression=r);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((y,d)=>(y[d]=this.originIdOf(d),y),{});if(Object.keys(i).some(y=>i[y]>p.SERVICE)){const y=e.drawingInfo={};if(i.renderer>p.SERVICE&&(y.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>p.SERVICE&&(y.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>p.SERVICE)if(this.labelingInfo){!this.loaded&&((u=this.labelingInfo)!=null&&u.some(h=>!h.labelPlacement))&&E.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let d=this.labelingInfo;this.geometryType!=null&&(d=ve(this.labelingInfo,$.toJSON(this.geometryType))),y.showLabels=!0,y.labelingInfo=d.filter(h=>h.labelPlacement).map(h=>h.toJSON({origin:"service",layer:this.layer}))}else y.showLabels=!1;i.opacity>p.SERVICE&&(y.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(y.renderer)}return e}_assignDefaultSymbolColors(t){this._forEachSimpleMarkerSymbols(t,e=>{var r;e.color||e.style!=="esriSMSX"&&e.style!=="esriSMSCross"||((r=e.outline)!=null&&r.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(t,e){if(t){const r=("uniqueValueInfos"in t?t.uniqueValueInfos:"classBreakInfos"in t?t.classBreakInfos:null)??[];for(const i of r)q(i.symbol)&&e(i.symbol);"symbol"in t&&q(t.symbol)&&e(t.symbol),"defaultSymbol"in t&&q(t.defaultSymbol)&&e(t.defaultSymbol)}}_setAndNotifyLayer(t,e){var y,d,h,m;const r=this.layer,i=this._get(t);let s,l;switch(t){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",l="supportsModification"}const u=P(this).getDefaultOrigin();if(u!=="service"){if(s&&((h=(d=(y=this.layer)==null?void 0:y.capabilities)==null?void 0:d.exportMap)==null?void 0:h[s])===!1)return void this._logLockedError(t,`capability not available 'layer.capabilities.exportMap.${s}'`);if(l&&((m=this.capabilities)==null?void 0:m.exportMap[l])===!1)return void this._logLockedError(t,`capability not available 'capabilities.exportMap.${l}'`)}t!=="source"||this.loadStatus==="not-loaded"?(this._set(t,e),u!=="service"&&i!==e&&r&&r.emit&&r.emit("sublayer-update",{propertyName:t,target:this})):this._logLockedError(t,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(t,e){e&&(e.forEach(r=>{r.parent=null,r.layer=null}),this.removeAllHandles()),t&&(t.forEach(r=>{r.parent=this,r.layer=this.layer}),this.addHandles([t.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),t.on("after-remove",({item:r})=>{r.parent=null,r.layer=null}),t.on("before-changes",r=>{var i,s,l;(((l=(s=(i=this.layer)==null?void 0:i.capabilities)==null?void 0:s.exportMap)==null?void 0:l.supportsSublayersChanges)??1)||(E.getLogger(this).error(new f("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),r.preventDefault())})]))}_logLockedError(t,e){const{layer:r,declaredClass:i}=this;E.getLogger(i).error(new f("sublayer:locked",`Property '${String(t)}' can't be changed on Sublayer from the layer '${r==null?void 0:r.id}'`,{reason:e,sublayer:this,layer:r}))}_getLayerDomain(t){var e;return((e=this.fieldsIndex.get(t))==null?void 0:e.domain)??null}};o.test={isMapImageLayerOverridePolicy:t=>t===g||t===j,isTileImageLayerOverridePolicy:t=>t===V},a([n({readOnly:!0})],o.prototype,"capabilities",void 0),a([S("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],o.prototype,"readCapabilities",null),a([n()],o.prototype,"defaultPopupTemplate",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:j}}})],o.prototype,"definitionExpression",null),a([n({readOnly:!0})],o.prototype,"effectiveScaleRange",null),a([S("service","maxScaleRange",["minScale","maxScale"])],o.prototype,"readMaxScaleRange",null),a([n({type:[Ee],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],o.prototype,"fields",void 0),a([n({readOnly:!0})],o.prototype,"fieldsIndex",null),a([n({type:Le,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:j},origins:{"web-scene":{read:!1,write:!1}}}})],o.prototype,"floorInfo",null),a([n({type:z,json:{read:{source:"layerDefinition.extent"}}})],o.prototype,"fullExtent",void 0),a([n({type:$.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:$.read}}}}})],o.prototype,"geometryType",void 0),a([n({type:String})],o.prototype,"globalIdField",void 0),a([S("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],o.prototype,"readGlobalIdFieldFromService",null),a([n({type:C,json:{write:{ignoreOrigin:!0}}})],o.prototype,"id",null),a([n({readOnly:!0})],o.prototype,"isTable",void 0),a([S("service","isTable",["type"])],o.prototype,"readIsTable",null),a([n({value:null,type:[xe],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:g}}})],o.prototype,"labelingInfo",null),a([v("labelingInfo")],o.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:g}}})],o.prototype,"labelsVisible",null),a([n({value:null})],o.prototype,"layer",null),a([n({type:String,json:{write:{overridePolicy:V}}})],o.prototype,"layerItemId",void 0),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:D}}})],o.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:g}}})],o.prototype,"minScale",null),a([S("minScale",["minScale","layerDefinition.minScale"])],o.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:g}}})],o.prototype,"maxScale",null),a([S("maxScale",["maxScale","layerDefinition.maxScale"])],o.prototype,"readMaxScale",null),a([n()],o.prototype,"objectIdField",void 0),a([S("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],o.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:g}}})],o.prototype,"opacity",null),a([S("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],o.prototype,"readOpacity",null),a([v("opacity")],o.prototype,"writeOpacity",null),a([n({json:{type:C,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:g}}})],o.prototype,"parent",void 0),a([v("parent")],o.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(t,e)=>!e.disablePopup},write:{target:"disablePopup",overridePolicy:D,writer(t,e,r){e[r]=!t}}}})],o.prototype,"popupEnabled",void 0),a([n({type:Te,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:D}}})],o.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],o.prototype,"queryTask",null),a([n({type:[Oe],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],o.prototype,"relationships",void 0),a([n({types:Fe,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:g},origins:{"web-scene":{types:De,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:g}}}}})],o.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":H,"map-layer":M}},cast(t){if(t){if("mapLayerId"in t)return K(M,t);if("dataSource"in t)return K(H,t)}return t},json:{name:"layerDefinition.source",write:{overridePolicy:g}}})],o.prototype,"source",null),a([n()],o.prototype,"sourceJSON",void 0),a([n({type:X,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],o.prototype,"spatialReference",void 0),a([n({value:null,json:{type:[C],write:{target:"subLayerIds",allowNull:!0,overridePolicy:g}}})],o.prototype,"sublayers",null),a([_e("sublayers")],o.prototype,"castSublayers",null),a([v("sublayers")],o.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:D}}})],o.prototype,"title",void 0),a([S("service","title",["name","layerDefinition.name"])],o.prototype,"readTitle",null),a([n({type:String})],o.prototype,"typeIdField",void 0),a([n({json:{read:!1},readOnly:!0,value:"sublayer"})],o.prototype,"type",void 0),a([S("typeIdField",["layerDefinition.typeIdField"])],o.prototype,"readTypeIdField",null),a([n({type:[Pe],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],o.prototype,"types",void 0),a([n({type:String,json:{name:"layerUrl",write:{overridePolicy:V}}})],o.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:g}}})],o.prototype,"visible",null),a([v("visible")],o.prototype,"writeVisible",null),o=A=a([k("esri.layers.support.Sublayer")],o);const U=o;function $e(t,e){const r=[],i={};return t&&t.forEach(s=>{const l=new U;if(l.read(s,e),i[l.id]=l,s.parentLayerId!=null&&s.parentLayerId!==-1){const u=i[s.parentLayerId];u.sublayers||(u.sublayers=[]),u.sublayers.unshift(l)}else r.unshift(l)}),r}const _=N.ofType(U);function Y(t,e){t&&t.forEach(r=>{e(r),r.sublayers&&r.sublayers.length&&Y(r.sublayers,e)})}const Be=t=>{let e=class extends t{constructor(...r){super(...r),this.allSublayers=new Ce({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[p.SERVICE]:{},[p.PORTAL_ITEM]:{},[p.WEB_SCENE]:{},[p.WEB_MAP]:{}},this.subtables=null,this.addHandles([G(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),Z),G(()=>this.subtables,(i,s)=>this._handleSublayersChange(i,s),Z)])}destroy(){this.allSublayers.destroy()}readSublayers(r,i){if(!i||!r)return;const{sublayersSourceJSON:s}=this,l=L(i.origin);if(l<p.SERVICE||(s[l]={context:i,visibleLayers:r.visibleLayers||s[l].visibleLayers,layers:r.layers||s[l].layers},l>p.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:u,origin:y}=this.createSublayersForOrigin("web-document"),d=P(this);d.setDefaultOrigin(y),this._set("sublayers",new _(u)),d.setDefaultOrigin("user")}findSublayerById(r){return this.allSublayers.find(i=>i.id===r)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(r){const i=L(r==="web-document"?"web-map":r);let s=p.SERVICE,l=this.sublayersSourceJSON[p.SERVICE].layers,u=this.sublayersSourceJSON[p.SERVICE].context,y=null;const d=[p.PORTAL_ITEM,p.WEB_SCENE,p.WEB_MAP].filter(c=>c<=i);for(const c of d){const b=this.sublayersSourceJSON[c];qe(b.layers)&&(s=c,l=b.layers,u=b.context,b.visibleLayers&&(y={visibleLayers:b.visibleLayers,context:b.context}))}const h=[p.PORTAL_ITEM,p.WEB_SCENE,p.WEB_MAP].filter(c=>c>s&&c<=i);let m=null;for(const c of h){const{layers:b,visibleLayers:T,context:O}=this.sublayersSourceJSON[c];b&&(m={layers:b,context:O}),T&&(y={visibleLayers:T,context:O})}const I=$e(l,u),w=new Map,x=new Set;if(m)for(const c of m.layers)w.set(c.id,c);if(y!=null&&y.visibleLayers)for(const c of y.visibleLayers)x.add(c);return Y(I,c=>{m&&c.read(w.get(c.id),m.context),y&&c.read({defaultVisibility:x.has(c.id)},y.context)}),{origin:je(s),sublayers:new _({items:I})}}read(r,i){super.read(r,i),this.readSublayers(r,i)}_handleSublayersChange(r,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.removeHandles("sublayers-owner")),r&&(r.forEach(s=>{s.parent=this,s.layer=this}),this.addHandles([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.addHandles(r.on("before-changes",s=>{E.getLogger("esri.layers.TileLayer").error(new f("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],e.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:N.ofType(U)})],e.prototype,"serviceSublayers",void 0),a([n({value:null,type:_,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],e.prototype,"sublayers",void 0),a([n({readOnly:!0})],e.prototype,"sublayersSourceJSON",void 0),a([n({type:_,json:{read:{source:"tables"}}})],e.prototype,"subtables",void 0),e=a([k("esri.layers.mixins.SublayersOwner")],e),e};export{Ue as f,Be as m,U as t};
