import{e as s,y as i,a as h,az as C,S as M,u as _,f2 as O,B as g,g as R,c5 as G,v as U,a4 as k,L as $}from"./index-2x4JY06U.js";import{o as x}from"./StreamFeatureManager-OFkKAmGc.js";import{createConnection as T}from"./createConnection-CaBA5EyW.js";import{h as V}from"./EventedSet-ImuMeeXR.js";import{C as E,u as j}from"./HeatmapDensity.glsl-BoSfYqEY.js";import{l as L}from"./LayerView3D-M1UbMu_z.js";import{y as D}from"./LayerView-DvlHVGG6.js";import"./timeSupport-C0jc2-ix.js";import"./projectExtentUtils-DUnsVfft.js";import"./queryForSymbologySnapping-DAtmBQWu.js";import"./hash-CcEbRgUF.js";import"./Graphics3DObjectStates-BAi_ctn_.js";import"./optimizedFeatureQueryEngineAdapter-mPhVzWef.js";import"./PooledRBush-vVDNK59T.js";import"./quickselect-7l5F7t24.js";import"./QueryEngine-DVq5k5xk.js";import"./WhereClause-BKRVEuyU.js";import"./TimeOnly-Bw25zvTr.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-BrKi29MX.js";import"./utils-CBWFSJLJ.js";import"./ClassBreaksDefinition-D1r9ERhZ.js";import"./FeatureStore-BBRPLLIA.js";import"./BoundsStore-CHBlhSoI.js";const F=2500;let d=class extends R{constructor(t){super(t)}getObjectId(){return this.objectId}};s([i({type:Number,json:{read:!0}})],d.prototype,"objectId",void 0),d=s([h("esri.layers.graphics.controllers.StreamController.StreamGraphic")],d);class N{constructor(t){this.onUpdate=t,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(t){this._idToGraphic.set(t.objectId,t)}get(t){return this._idToGraphic.get(t)}forEach(t){this._idToGraphic.forEach(t)}removeById(t){const r=this._idToGraphic.get(t);return r?(r.sourceLayer=r.layer=null,this._idToGraphic.delete(t),r):null}update(t,r){this.onUpdate(t,r)}get size(){return this._idToGraphic.size}}let n=class extends C(M){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new V,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId!==null&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._shutdown(),this.graphics.clear()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_shutdown(){this._clearInterval(),this.connection=_(this.connection),this.store=_(this.store),this.removeAllHandles()}_startup(){const{layer:e,layerView:t}=this,{spatialReference:r,definitionExpression:l,geometryDefinition:p,objectIdField:u,timeInfo:f,purgeOptions:v,maxReconnectionAttempts:I,maxReconnectionInterval:w,customParameters:S}=e,P=e.geometryType?O.toJSON(e.geometryType):null,b=r,m=t.view.spatialReference;this.clear(),this._set("connection",T(e.parsedUrl,b,m,P,l,p,I,w,S??void 0)),this._outSpatialReference=m.toJSON(),this.store=new N(this._onUpdate.bind(this)),this.featuresManager=new x(this.store,u,f.toJSON(),v);const y="startup-watches";this.removeHandles(y),this.addHandles([e.on("send-message-to-socket",a=>this.connection.sendMessageToSocket(a)),e.on("send-message-to-client",a=>this.connection.sendMessageToClient(a)),this.connection.on("data-received",a=>this._onFeature(a)),this.connection.on("message-received",a=>this._onWebSocketMessage(a)),g(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],y),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const t of e.objectIds)this.featuresManager.removeById(t);if(e.trackIds)for(const t of e.trackIds)this.featuresManager.removeByTrackId(t);break;case"clear":this.store.forEach(t=>this.featuresManager.removeById(t.objectId))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{e.geometry==null||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const t=d.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){t!=null&&this.graphics.removeMany(t),e!=null&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const r=performance.now(),l=r-t;if(l>F){t=r;const p=Math.round(this._updateInfo.client/(l/1e3)),u=Math.round(this._updateInfo.websocket/(l/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:p,websocket:u})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}disconnect(){this._shutdown()}connect(){this.connection==null&&this._startup()}clearGraphics(){this.graphics.clear()}};s([i()],n.prototype,"isPaused",void 0),s([i({constructOnly:!0})],n.prototype,"layer",void 0),s([i({constructOnly:!0})],n.prototype,"layerView",void 0),s([i()],n.prototype,"connection",void 0),s([i({readOnly:!0})],n.prototype,"updating",null),n=s([h("esri.layers.graphics.controllers.StreamController")],n);let c=class extends E{constructor(e){super(e),this.suspendResumeExtentMode="computed"}get connection(){var e;return(e=this.controller)==null?void 0:e.connection}createController(){return new n({layer:this.layer,layerView:this.layerView})}beforeSetController(){}pause(){var e;(e=this.controller)==null||e.pauseStream()}resume(){var e;(e=this.controller)==null||e.resumeStream()}disconnect(){var e;(e=this.controller)==null||e.disconnect()}connect(){var e;(e=this.controller)==null||e.connect()}clear(){var e;(e=this.controller)==null||e.clearGraphics()}};s([i()],c.prototype,"controller",void 0),s([i()],c.prototype,"connection",null),s([i()],c.prototype,"suspendResumeExtentMode",void 0),c=s([h("esri.views.3d.layers.graphics.StreamGraphics3DGraphicsPipeline")],c);const z=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([i()],t.prototype,"_isUserPaused",void 0),s([i({readOnly:!0})],t.prototype,"connectionStatus",null),s([i({type:G})],t.prototype,"filter",void 0),t=s([h("esri.views.layers.StreamLayerView")],t),t};let o=class extends z(j(L(D))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=U.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.addHandles(g(()=>this.suspended,e=>{this.graphicsPipeline&&this._onSuspendedChange(e)}))}get connectionError(){var t,r;const e=(r=(t=this.graphicsPipeline)==null?void 0:t.connection)==null?void 0:r.errorString;return e?new k("stream-controller",e):null}createQuery(){return new $({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t==null?void 0:t.signal)}get _streamConnectionStatus(){var e,t;return((t=(e=this.graphicsPipeline)==null?void 0:e.connection)==null?void 0:t.connectionStatus)??"disconnected"}createGraphicsPipeline(){return new c({layerView:this})}createController(){return new n({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){var e;(e=this.graphicsPipeline)==null||e.pause()}_doResume(){var e;(e=this.graphicsPipeline)==null||e.resume()}_doDisconnect(){var e;(e=this.graphicsPipeline)==null||e.disconnect(),this._doPause()}_doConnect(){var e;(e=this.graphicsPipeline)==null||e.connect(),this.resume()}_doClear(){var e;(e=this.graphicsPipeline)==null||e.clear()}};s([i({readOnly:!0})],o.prototype,"updatePolicy",void 0),s([i({readOnly:!0})],o.prototype,"connectionError",null),s([i()],o.prototype,"graphicsPipeline",void 0),s([i({readOnly:!0})],o.prototype,"hasZ",void 0),s([i({readOnly:!0})],o.prototype,"hasM",void 0),s([i({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([h("esri.views.3d.layers.StreamLayerView3D")],o);const ye=o;export{ye as default};
