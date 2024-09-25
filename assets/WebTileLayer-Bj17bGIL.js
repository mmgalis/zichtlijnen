import{e as l,y as i,a as T,a_ as P,an as v,dX as x,dY as I,dZ as U,f as M,g as W,i as L,b5 as j,aB as y,aC as S,b7 as $,fc as s,jl as d,k as D,jm as E,jn as O,jo as z,U as w,jp as _,q as g,aZ as q,x as A}from"./index-FXsJ6CNr.js";import{o as b}from"./imageBitmapUtils-BLFUmUQy.js";var m;let c=m=class extends P{constructor(e){super(e)}clone(){return new m({customLayerParameters:v(this.customLayerParameters),customParameters:v(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};l([i({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),l([i({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"layerIdentifier",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"tileMatrixSet",void 0),l([i({type:String,json:{write:!0}})],c.prototype,"url",void 0),c=m=l([T("esri.layers.support.WMTSLayerInfo")],c);var f;let o=f=class extends x(I(U(M(W(L(A)))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new j(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,y.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=y.WebMercator,this.subDomains=null,this.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new $({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:y.WebMercator}),spatialReference:y.WebMercator,lods:[new s({level:0,scale:591657527591555e-6,resolution:156543.033928}),new s({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new s({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new s({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new s({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new s({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new s({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new s({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new s({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new s({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new s({level:10,scale:577790.554289,resolution:152.874056570411}),new s({level:11,scale:288895.277144,resolution:76.4370282850732}),new s({level:12,scale:144447.638572,resolution:38.2185141425366}),new s({level:13,scale:72223.819286,resolution:19.1092570712683}),new s({level:14,scale:36111.909643,resolution:9.55462853563415}),new s({level:15,scale:18055.954822,resolution:4.77731426794937}),new s({level:16,scale:9027.977411,resolution:2.38865713397468}),new s({level:17,scale:4513.988705,resolution:1.19432856685505}),new s({level:18,scale:2256.994353,resolution:.597164283559817}),new s({level:19,scale:1128.497176,resolution:.298582141647617}),new s({level:20,scale:564.248588,resolution:.14929107082380833}),new s({level:21,scale:282.124294,resolution:.07464553541190416}),new s({level:22,scale:141.062147,resolution:.03732276770595208}),new s({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return typeof e=="string"?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{var a;let r="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const n=new d(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&((a=n.authority)!=null&&a.includes("{subDomain}"))&&(r="is missing 'subDomains' property")}else r="spatialReference must match tileInfo.spatialReference";else r="is missing the required 'urlTemplate' property value";if(r)throw new D("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${r}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){var r;return e||y.fromJSON((r=t.fullExtent)==null?void 0:r.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,a=new d(t),n=a.scheme?a.scheme+"://":"//",u=n+a.authority+"/",p=a.authority;if(p!=null&&p.includes("{subDomain}")){if(r&&r.length>0&&p.split(".").length>1)for(const h of r)e.push(n+p.replaceAll(/\{subDomain\}/gi,h)+"/")}else e.push(u);return e.map(E)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new d(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){O(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=z(e)),t.templateUrl=e}fetchTile(e,t,r,a={}){const{signal:n}=a,u=this.getTileUrl(e,t,r),p={responseType:"image",signal:n,query:{...this.refreshParameters}};return w(u,p).then(h=>h.data)}async fetchImageBitmapTile(e,t,r,a={}){const{signal:n}=a;if(this.fetchTile!==f.prototype.fetchTile){const R=await this.fetchTile(e,t,r,a);return b(R,e,t,r,n)}const u=this.getTileUrl(e,t,r),p={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:h}=await w(u,p);return b(h,e,t,r,n)}getTileUrl(e,t,r){const{levelValues:a,tileServers:n,urlPath:u}=this;if(!a||!n||!u)return"";const p=a[e];return n[t%n.length]+_(u,{level:p,z:p,col:r,x:r,row:t,y:t})}};l([i({type:String,value:"",json:{write:!0}})],o.prototype,"copyright",void 0),l([i({type:j,json:{write:!0},nonNullable:!0})],o.prototype,"fullExtent",void 0),l([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"legendEnabled",void 0),l([i({type:["show","hide"]})],o.prototype,"listMode",void 0),l([i({json:{read:!0,write:!0}})],o.prototype,"blendMode",void 0),l([i()],o.prototype,"levelValues",null),l([i({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],o.prototype,"isReference",void 0),l([i({type:["WebTiledLayer"],value:"WebTiledLayer"})],o.prototype,"operationalLayerType",void 0),l([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"popupEnabled",void 0),l([i({type:y})],o.prototype,"spatialReference",void 0),l([g("spatialReference",["spatialReference","fullExtent.spatialReference"])],o.prototype,"readSpatialReference",null),l([i({type:[String],json:{write:!0}})],o.prototype,"subDomains",void 0),l([i({type:S,json:{write:!0}})],o.prototype,"tileInfo",void 0),l([i({readOnly:!0})],o.prototype,"tileServers",null),l([i({json:{read:!1}})],o.prototype,"type",void 0),l([i()],o.prototype,"urlPath",null),l([i({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],o.prototype,"urlTemplate",void 0),l([g("urlTemplate",["urlTemplate","templateUrl"])],o.prototype,"readUrlTemplate",null),l([q("urlTemplate",{templateUrl:{type:String}})],o.prototype,"writeUrlTemplate",null),l([i({type:c,json:{write:!0}})],o.prototype,"wmtsInfo",void 0),o=f=l([T("esri.layers.WebTileLayer")],o);const V=o,N=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{V as I,N as W,c as p};
