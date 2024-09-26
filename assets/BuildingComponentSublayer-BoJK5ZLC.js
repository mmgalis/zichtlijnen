import{s as m,e as t,y as r,dx as y,en as f,h3 as u,a as c,h4 as b,h5 as v,az as L,ez as w,ep as g,h6 as F,a7 as I,h7 as O,dv as S,h8 as x,L as j,bL as T,bM as $,bK as P,h9 as q,a4 as p,g as E,ha as Q,hb as U,hc as A,hd as D,aU as N,aT as R,he as _,hf as B,hg as K,hh as C,bc as M,bb as Z,hi as k}from"./index-2x4JY06U.js";let o=class extends m(b){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,s){return typeof s.alias=="string"?s.alias:typeof s.name=="string"?s.name:""}readIdOnlyOnce(e){return this.id!==-1?this.id:typeof e=="number"?e:-1}};t([r({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],o.prototype,"title",void 0),t([y("service","title",["alias","name"])],o.prototype,"readTitle",null),t([r()],o.prototype,"layer",void 0),t([r({type:f,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],o.prototype,"id",void 0),t([y("service","id")],o.prototype,"readIdOnlyOnce",null),t([r(u(String))],o.prototype,"modelName",void 0),t([r(u(Boolean))],o.prototype,"isEmpty",void 0),t([r({type:Boolean,nonNullable:!0})],o.prototype,"legendEnabled",void 0),t([r({type:Boolean,json:{name:"visibility",write:!0}})],o.prototype,"visible",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"opacity",void 0),o=t([c("esri.layers.buildingSublayers.BuildingSublayer")],o);const z=o,h=k();let a=class extends v.LoadableMixin(L(z)){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){var e,s;return this.layer?{path:`${(e=this.layer.parsedUrl)==null?void 0:e.path}/sublayers/${this.id}`,query:(s=this.layer.parsedUrl)==null?void 0:s.query}:{path:""}}get fieldsIndex(){return new w(this.fields)}readAssociatedLayer(e,s){const i=this.layer.associatedFeatureServiceItem,n=s.associatedLayerID;return i!=null&&typeof n=="number"?new g({portalItem:i,customParameters:this.customParameters,layerId:n}):null}get objectIdField(){if(this.fields!=null){for(const e of this.fields)if(e.type==="oid")return e.name}return null}get displayField(){return this.associatedLayer!=null?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const s=e!=null?e.signal:null,i=this._fetchService(s).then(()=>{this.indexInfo=F(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,I.getLogger(this),s)});return this.addResolvingPromise(i),Promise.resolve(this)}createPopupTemplate(e){return O(this,e)}async _fetchService(e){const s=(await S(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(s,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,s){var n,l,d;const i=(l=(n=this.getFeatureType(s==null?void 0:s.feature))==null?void 0:n.domains)==null?void 0:l[e];return i&&i.type!=="inherited"?i:((d=this.getField(e))==null?void 0:d.domain)??null}getFeatureType(e){return e&&this.associatedLayer!=null?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer!=null?this.associatedLayer.types??[]:[]}get typeIdField(){return this.associatedLayer!=null?this.associatedLayer.typeIdField:null}get geometryType(){return this.layerType==="3d-object"?"mesh":"point"}get profile(){return this.layerType==="3d-object"?"mesh-pyramids":"points"}get capabilities(){const e=this.associatedLayer!=null&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:x,{query:s,data:{supportsZ:i,supportsM:n,isVersioned:l}}=e;return{query:s,data:{supportsZ:i,supportsM:n,isVersioned:l}}}createQuery(){const e=new j;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryExtent(e||this.createQuery(),s))}queryFeatureCount(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatureCount(e||this.createQuery(),s))}queryFeatures(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryFeatures(e||this.createQuery(),s)).then(i=>{if(i!=null&&i.features)for(const n of i.features)n.layer=this.layer,n.sourceLayer=this;return i})}queryObjectIds(e,s){return this._getAssociatedLayerForQuery().then(i=>i.queryObjectIds(e||this.createQuery(),s))}async queryCachedAttributes(e,s){const i=T(this.fieldsIndex,await $(this,P(this)));return q(this.parsedUrl.path,this.attributeStorageInfo,e,s,i,this.apiKey,this.customParameters)}async queryCachedFeature(e,s){const i=await this.queryCachedAttributes(e,[s]);if(!i||i.length===0)throw new p("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new E({attributes:i[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:this.associatedLayer!=null}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),this.associatedLayer==null)throw new p("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new p("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};t([r({readOnly:!0})],a.prototype,"parsedUrl",null),t([r({type:Q,readOnly:!0})],a.prototype,"nodePages",void 0),t([r({type:[U],readOnly:!0})],a.prototype,"materialDefinitions",void 0),t([r({type:[A],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0),t([r({type:[D],readOnly:!0})],a.prototype,"geometryDefinitions",void 0),t([r({readOnly:!0})],a.prototype,"serviceUpdateTimeStamp",void 0),t([r({readOnly:!0})],a.prototype,"store",void 0),t([r({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),t([r({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0),t([r(h.fields)],a.prototype,"fields",void 0),t([r({readOnly:!0})],a.prototype,"fieldsIndex",null),t([r({readOnly:!0,type:g})],a.prototype,"associatedLayer",void 0),t([y("service","associatedLayer",["associatedLayerID"])],a.prototype,"readAssociatedLayer",null),t([r(h.outFields)],a.prototype,"outFields",void 0),t([r({type:String,readOnly:!0})],a.prototype,"objectIdField",null),t([r({readOnly:!0,type:String,json:{read:!1}})],a.prototype,"displayField",null),t([r({readOnly:!0,type:String})],a.prototype,"apiKey",null),t([r({readOnly:!0,type:String})],a.prototype,"customParameters",null),t([r({readOnly:!0,type:N})],a.prototype,"fullExtent",null),t([r({readOnly:!0,type:R})],a.prototype,"spatialReference",null),t([r({readOnly:!0})],a.prototype,"version",null),t([r({readOnly:!0,type:_})],a.prototype,"elevationInfo",null),t([r({readOnly:!0,type:Number})],a.prototype,"minScale",null),t([r({readOnly:!0,type:Number})],a.prototype,"maxScale",null),t([r({readOnly:!0,type:Number})],a.prototype,"effectiveScaleRange",null),t([r({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0),t([r({types:B,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],a.prototype,"renderer",void 0),t([r({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],a.prototype,"definitionExpression",void 0),t([r(K)],a.prototype,"popupEnabled",void 0),t([r({type:C,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",void 0),t([r({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0),t([r({readOnly:!0,json:{read:!1}})],a.prototype,"defaultPopupTemplate",null),t([r()],a.prototype,"types",null),t([r()],a.prototype,"typeIdField",null),t([r({json:{write:!1}}),M(new Z({"3DObject":"3d-object",Point:"point"}))],a.prototype,"layerType",void 0),t([r()],a.prototype,"geometryType",null),t([r()],a.prototype,"profile",null),t([r({readOnly:!0,json:{read:!1}})],a.prototype,"capabilities",null),t([r({readOnly:!0})],a.prototype,"statisticsInfo",void 0),a=t([c("esri.layers.buildingSublayers.BuildingComponentSublayer")],a);const G=a;export{G as A,z as a};
