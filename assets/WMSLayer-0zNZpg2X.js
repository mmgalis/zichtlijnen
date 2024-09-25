import{s as Ue,aT as q,$ as F,Z as J,lz as Me,V as Q,e as a,y as u,b5 as R,q as O,ff as je,a as xe,hf as Te,k as _e,bu as M,aB as I,dM as we,lM as Ce,lN as qe,bo as Ve,dX as Be,eD as We,dY as ke,dZ as De,f as Ge,g as Xe,i as He,c8 as Je,m as Ze,eV as se,eG as ie,U as k,lO as ze,ax as Qe,gJ as Ye,hs as Ke,F as et,jl as tt,d_ as rt,an as nt,aZ as D,e0 as st,eL as it,w as at,x as ot,lP as lt}from"./index-CY8jQoH7.js";import{o as Z}from"./crsUtils-DAndLU68.js";import{a as ae}from"./ExportWMSImageParameters-DRlXm2Bp.js";import{t as ut}from"./imageBitmapUtils-DPLPHiDb.js";var T;let pt=0,h=T=class extends Ue(Te){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([q(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},F),q(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},F),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=this,n.layer=this.layer},F),J(()=>this.layer,t=>{if(this.sublayers)for(const r of this.sublayers)r.layer=t},F)])}get id(){return this._get("id")??pt++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return Me(Q.ofType(T),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var t,r,n;const e=new T;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=((t=this.fullExtents)==null?void 0:t.map(s=>s.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=(r=this.sublayers)==null?void 0:r.map(s=>s.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(n=this.spatialReferences)==null?void 0:n.map(s=>s)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};a([u()],h.prototype,"description",void 0),a([u({readOnly:!0})],h.prototype,"dimensions",void 0),a([u({type:R,json:{name:"extent"}})],h.prototype,"fullExtent",void 0),a([u()],h.prototype,"fullExtents",void 0),a([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],h.prototype,"id",null),a([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],h.prototype,"legendUrl",void 0),a([O("legendUrl",["legendUrl","legendURL"])],h.prototype,"readLegendUrl",null),a([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],h.prototype,"legendEnabled",void 0),a([u()],h.prototype,"layer",void 0),a([u()],h.prototype,"maxScale",void 0),a([u()],h.prototype,"minScale",void 0),a([u({readOnly:!0})],h.prototype,"effectiveScaleRange",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"name",void 0),a([u()],h.prototype,"parent",void 0),a([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],h.prototype,"popupEnabled",void 0),a([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],h.prototype,"queryable",void 0),a([u()],h.prototype,"sublayers",void 0),a([je("sublayers")],h.prototype,"castSublayers",null),a([u({type:[Number],json:{read:{source:"spatialReferences"}}})],h.prototype,"spatialReferences",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],h.prototype,"title",void 0),a([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],h.prototype,"visible",null),h=T=a([xe("esri.layers.support.WMSSublayer")],h);const z=h,oe={84:4326,83:4269,27:4267};function ct(e){if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const r=e.documentElement;if(r.nodeName==="ServiceExceptionReport"){const b=Array.prototype.slice.call(r.childNodes).map(P=>P.textContent).join(`\r
`);throw new _e("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",b)}const n=x("Capability",r),s=x("Service",r),l=n&&x("Request",n);if(!n||!s||!l)return null;const o=x("Layer",n);if(!o)return null;const d=r.nodeName==="WMS_Capabilities"||r.nodeName==="WMT_MS_Capabilities"?r.getAttribute("version"):"1.3.0",i=v("Title",s,"")||v("Name",s,""),m=v("AccessConstraints",s,""),c=/^none$/i.test(m)?"":m,f=v("Abstract",s,""),y=parseInt(v("MaxWidth",s,"5000"),10),w=parseInt(v("MaxHeight",s,"5000"),10),S=ue(l,"GetMap"),N=le(l,"GetMap"),g=U(o,d,t);if(!g)return null;let Y,V=0;const Ie=Array.prototype.slice.call(n.childNodes),Ee=g.sublayers??[],B=b=>{b!=null&&Ee.push(b)};Ie.forEach(b=>{b.nodeName==="Layer"&&(V===0?Y=b:(V===1&&g.name&&(g.name="",B(U(Y,d,t))),B(U(b,d,t))),V++)});let E=g.sublayers,W=g.extent;const $e=g.fullExtents??[];if(E||(E=[]),E.length===0&&E.push(g),!W){const b=new R(E[0].extent);g.extent=b.toJSON(),W=g.extent}const Oe=g.spatialReferences.length>0?g.spatialReferences:ve(g),K=le(l,"GetFeatureInfo"),Re=K?ue(l,"GetFeatureInfo"):null,ee=Se(E),Pe=g.minScale||0,Le=g.maxScale||0,te=g.dimensions??[],Ae=ee.reduce((b,P)=>b.concat(P.dimensions??[]),[]),re=te.concat(Ae).filter(Fe);let ne=null;if(re.length){const b=re.map(P=>{const{extent:L}=P;return ft(L)?L.map(j=>j.getTime()):L==null?void 0:L.map(j=>[j.min.getTime(),j.max.getTime()])}).flat(2).filter(M);ne={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...b),Math.max(...b)]}}return{copyright:c,description:f,dimensions:te,extent:W,fullExtents:$e,featureInfoFormats:Re,featureInfoUrl:K,mapUrl:N,maxWidth:y,maxHeight:w,maxScale:Le,minScale:Pe,layers:ee,spatialReferences:Oe,supportedImageFormatTypes:S,timeInfo:ne,title:i,version:d}}function dt(e){const t=e.filter(r=>r.popupEnabled&&r.name&&r.queryable);return t.length?t.map(({name:r})=>r).join():null}function ve(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const r=ve(t);if(r.length>0)return r}return[]}function Se(e){var r;let t=[];for(const n of e)t.push(n),(r=n.sublayers)!=null&&r.length&&(t=t.concat(Se(n.sublayers)),delete n.sublayers);return t}function _(e,t,r){return t.getAttribute(e)??r}function mt(e,t,r,n){const s=x(e,r);return s?_(t,s,n):n}function x(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(Ne(n)&&n.nodeName===e)return n}return null}function C(e,t){if(t==null)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];Ne(s)&&s.nodeName===e&&r.push(s)}return r}function v(e,t,r){var n;return((n=x(e,t))==null?void 0:n.textContent)??r}function A(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),o=parseFloat(e.getAttribute("maxy"));let d,i,m,c;r?(d=isNaN(s)?-Number.MAX_VALUE:s,i=isNaN(n)?-Number.MAX_VALUE:n,m=isNaN(o)?Number.MAX_VALUE:o,c=isNaN(l)?Number.MAX_VALUE:l):(d=isNaN(n)?-Number.MAX_VALUE:n,i=isNaN(s)?-Number.MAX_VALUE:s,m=isNaN(l)?Number.MAX_VALUE:l,c=isNaN(o)?Number.MAX_VALUE:o);const f=new I({wkid:t});return new R({xmin:d,ymin:i,xmax:m,ymax:c,spatialReference:f})}function le(e,t){const r=x(t,e);if(r){const n=x("DCPType",r);if(n){const s=x("HTTP",n);if(s){const l=x("Get",s);if(l){let o=mt("OnlineResource","xlink:href",l,null);if(o)return o.indexOf("&")===o.length-1&&(o=o.substring(0,o.length-1)),ht(o,["service","request"])}}}}return null}function ue(e,t){const r=C("Operation",e);if(!r.length)return C("Format",x(t,e)).map(({textContent:s})=>s).filter(M);const n=[];for(const s of r)if(s.getAttribute("name")===t){const l=C("Format",s);for(const{textContent:o}of l)o!=null&&n.push(o)}return n}function pe(e,t,r){const n=x(t,e);if(!n)return r;const{textContent:s}=n;if(s==null||s==="")return r;const l=Number(s);return isNaN(l)?r:l}function U(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=x("LatLonBoundingBox",e),l=x("EX_GeographicBoundingBox",e);let o=null;s&&(o=A(s,4326)),l&&(o=new R(0,0,0,0,new I({wkid:4326})),o.xmin=parseFloat(v("westBoundLongitude",l,"0")),o.ymin=parseFloat(v("southBoundLatitude",l,"0")),o.xmax=parseFloat(v("eastBoundLongitude",l,"0")),o.ymax=parseFloat(v("northBoundLatitude",l,"0"))),s||l||(o=new R(-180,-90,180,90,new I({wkid:4326}))),n.minScale=pe(e,"MaxScaleDenominator",0),n.maxScale=pe(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(i=>{var m;if(i.nodeName==="Name")n.name=i.textContent||"";else if(i.nodeName==="Title")n.title=i.textContent||"";else if(i.nodeName==="Abstract")n.description=i.textContent||"";else if(i.nodeName==="BoundingBox"){const c=i.getAttribute(d);if(c&&c.indexOf("EPSG:")===0){const y=parseInt(c.substring(5),10);y===0||isNaN(y)||o||(o=t==="1.3.0"?A(i,y,Z(y)):A(i,y))}const f=c==null?void 0:c.indexOf(":");if(f&&f>-1){let y=parseInt(c.substring(f+1,c.length),10);y===0||isNaN(y)||(y=oe[y]??y);const w=t==="1.3.0"?A(i,y,Z(y)):A(i,y);w&&n.fullExtents&&n.fullExtents.push(w)}}else if(i.nodeName===d)(((m=i.textContent)==null?void 0:m.split(" "))??[]).forEach(c=>{const f=c.includes(":")?parseInt(c.split(":")[1],10):parseInt(c,10);if(f!==0&&!isNaN(f)){const y=oe[f]??f;n.spatialReferences.includes(y)||n.spatialReferences.push(y)}});else if(i.nodeName!=="Style"||n.legendUrl){if(i.nodeName==="Layer"){const c=U(i,t,r);c&&(c.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(c))}}else{const c=x("LegendURL",i);if(c){const f=x("OnlineResource",c);f&&(n.legendUrl=f.getAttribute("xlink:href"))}}}),n.extent=o==null?void 0:o.toJSON(),n.dimensions=C("Dimension",e).filter(i=>i.getAttribute("name")&&i.getAttribute("units")&&i.textContent).map(i=>{const m=i.getAttribute("name"),c=i.getAttribute("units"),f=i.textContent,y=i.getAttribute("unitSymbol")??void 0,w=i.getAttribute("default")??void 0,S=_("default",i,"0")!=="0",N=_("nearestValue",i,"0")!=="0",g=_("current",i,"0")!=="0";return Fe({name:m,units:c})?{name:"time",units:"ISO8601",extent:me(f),default:me(w),multipleValues:S,nearestValue:N,current:g}:yt({name:m,units:c})?{name:"elevation",units:c,extent:ce(f),unitSymbol:y,default:ce(w),multipleValues:S,nearestValue:N}:{name:m,units:c,extent:de(f),unitSymbol:y,default:de(w),multipleValues:S,nearestValue:N}}),n}function ft(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function Ne(e){return e.nodeType===Node.ELEMENT_NODE}function yt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Fe(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ht(e,t){const r=[],n=we(e);for(const s in n.query)n.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||r.push(s+"="+n.query[s]));return n.path+(r.length?"?"+r.join("&"):"")}function ce(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(M):r.map(n=>parseFloat(n))}function de(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(M):r}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map(n=>{const s=n.split("/");return s.length<2?null:{min:G(s[0]),max:G(s[1]),resolution:s.length>=3&&s[2]!=="0"?gt(s[2]):void 0}}).filter(M):r.map(n=>G(n))}function G(e){return Ce.fromISO(e,{zone:qe.utcInstance}).toJSDate()}function gt(e){const t=/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i,r=e.match(t);return r?{years:$(r[1]),months:$(r[2]),days:$(r[3]),hours:$(r[4]),minutes:$(r[5]),seconds:$(r[6])}:null}function $(e){if(!e)return 0;const t=/(?:\d+(?:\.|,)\d+|\d+)/,r=e.match(t);if(!r)return 0;const n=r[0].replace(",",".");return Number(n)}function X(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const bt="0000-01-01T00:00:00Z",xt="9999-12-31T23:59:59Z";function fe(e){if(!e||e.isAllTime||e.isEmpty)return;const{start:t,end:r}=e;return t&&r&&t.getTime()===r.getTime()?`${X(t)}`:`${t?X(t):bt}/${r?X(r):xt}`}const ye=new Set([102100,3857,102113,900913]),wt=new Set([3395,54004]);function vt(e,t){let r=e.wkid;return t==null?r:(r!=null&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),r!=null&&ye.has(r)?t.find(n=>ye.has(n))||t.find(n=>wt.has(n))||102100:r)}const H=new Ve({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function he(e){return e==="text/html"}function ge(e){return e==="text/plain"}let p=class extends Be(We(ke(De(Ge(Xe(He(ot))))))){constructor(...e){super(...e),this.allSublayers=new Je({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([q(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},F),q(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},F),J(()=>this.sublayers,(t,r)=>{if(r)for(const n of r)n.layer=n.parent=null;if(t)for(const n of t)n.parent=n.layer=this},F)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Ze).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new R({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return this.featureInfoFormats==null?null:this.featureInfoFormats.find(he)??this.featureInfoFormats.find(ge)??null}set featureInfoFormat(e){e==null?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(he(e)||ge(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new I(t.spatialReferences[0])}writeSpatialReferences(e,t){var n;const r=(n=this.spatialReference)==null?void 0:n.wkid;e&&r?(t.spatialReferences=e.filter(s=>s!==r),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return be(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return be(t.layers,r)}writeSublayers(e,t,r,n){var o,d;t.layers=[];const s=new Map,l=e.flatten(({sublayers:i})=>i??[]);for(const i of l)if(typeof((o=i.parent)==null?void 0:o.id)=="number"){const m=s.get(i.parent.id);m!=null?m.push(i.id):s.set(i.parent.id,[i.id])}for(const i of l){const m={sublayer:i,...n},c=i.write({parentLayerId:typeof((d=i.parent)==null?void 0:d.id)=="number"?i.parent.id:-1},m);if(s.has(i.id)&&(c.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const f=i.write({},m);delete f.id,t.layers.push(f)}}t.visibleLayers=l.filter(({visible:i,sublayers:m})=>i&&!m).map(({name:i})=>i).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=we(e);for(const s in r)/^(request|service)$/i.test(s)&&delete r[s];const n=se(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const s=(n==null?void 0:n.pixelRatio)??1,l=ie({extent:e,width:t})*s,o=new ae({layer:this,scale:l}),{xmin:d,ymin:i,xmax:m,ymax:c,spatialReference:f}=e,y=vt(f,this.spatialReferences),w=this.version==="1.3.0"&&Z(y)?`${i},${d},${c},${m}`:`${d},${i},${m},${c}`,S=o.toJSON(),N=this.version==="1.3.0"?"crs":"srs";return{bbox:w,[N]:y==null||isNaN(y)?void 0:"EPSG:"+y,...S}}async fetchImage(e,t,r,n){const s=this.mapUrl,l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const i=document.createElement("canvas");return i.width=t,i.height=r,i}const o=fe(n==null?void 0:n.timeExtent),d={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...l,time:o,...this.refreshParameters}),signal:n==null?void 0:n.signal};return k(s??"",d).then(i=>i.data)}async fetchImageBitmap(e,t,r,n){const s=this.mapUrl??"",l=this.createExportImageParameters(e,t,r,n);if(!l.layers){const m=document.createElement("canvas");return m.width=t,m.height=r,m}const o=fe(n==null?void 0:n.timeExtent),d={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...l,time:o,...this.refreshParameters}),signal:n==null?void 0:n.signal},{data:i}=await k(s,d);return ut(i,s,n==null?void 0:n.signal)}fetchFeatureInfo(e,t,r,n,s){const l=ie({extent:e,width:t}),o=new ae({layer:this,scale:l}),d=dt(o.visibleSublayers);if(this.featureInfoUrl==null||d==null)return Promise.resolve([]);if(this.fetchFeatureInfoFunction==null&&this.featureInfoFormat==null)return Promise.resolve([]);const i=this.version==="1.3.0"?{I:n,J:s}:{x:n,y:s},m={query_layers:d,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...i},c={...this.createExportImageParameters(e,t,r),...m},f=this._mixCustomParameters(c);return this.fetchFeatureInfoFunction!=null?this.fetchFeatureInfoFunction(f):this._defaultFetchFeatureInfoFunction(se(this.featureInfoUrl,f))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return ze(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const r=t===900913?I.WebMercator:new I({wkid:t});return Qe(r,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=Ye(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new Ke({title:this.title,content:t}),n=new et({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){var t;if(!this.resourceInfo&&((t=this.parsedUrl)!=null&&t.path)){const{path:r,query:n}=this.parsedUrl,{data:s}=await k(r,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...n,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=ct(s)}if(this.parsedUrl){const r=new tt(this.parsedUrl.path),{httpsDomains:n}=rt.request;r.scheme!=="https"||r.port&&r.port!=="443"||!r.host||n.includes(r.host)||n.push(r.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function St(e,t){return e.some(r=>{for(const n in r)if(lt(r,n,null,t))return!0;return!1})}function be(e,t,r){e=e??[];const n=new Map;e.every(l=>l.id==null)&&(e=nt(e)).forEach((l,o)=>l.id=o);for(const l of e){const o=new z;o.read(l,t),r&&!r.includes(o.name)&&(o.visible=!1),n.set(o.id,o)}const s=[];for(const l of e){const o=l.id!=null?n.get(l.id):null;if(o)if(l.parentLayerId!=null&&l.parentLayerId>=0){const d=n.get(l.parentLayerId);if(!d)continue;d.sublayers||(d.sublayers=new Q),d.sublayers.push(o)}else s.push(o)}return s}a([u({readOnly:!0})],p.prototype,"allSublayers",void 0),a([u({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),a([u({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),a([u({type:String,json:{write:!0}})],p.prototype,"copyright",void 0),a([u()],p.prototype,"description",void 0),a([u({readOnly:!0})],p.prototype,"dimensions",void 0),a([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],p.prototype,"fullExtent",void 0),a([O(["web-document","portal-item"],"fullExtent",["extent"])],p.prototype,"readFullExtentFromItemOrMap",null),a([D(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],p.prototype,"writeFullExtent",null),a([u()],p.prototype,"fullExtents",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"featureInfoFormat",null),a([u({type:[String],readOnly:!0})],p.prototype,"featureInfoFormats",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"featureInfoUrl",void 0),a([u()],p.prototype,"fetchFeatureInfoFunction",void 0),a([u({type:String,json:{origins:{"web-document":{default:"image/png",type:H.jsonValues,read:{reader:H.read,source:"format"},write:{writer:H.write,target:"format"}}}}})],p.prototype,"imageFormat",void 0),a([O("imageFormat",["supportedImageFormatTypes"])],p.prototype,"readImageFormat",null),a([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],p.prototype,"imageMaxHeight",void 0),a([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],p.prototype,"imageMaxWidth",void 0),a([u()],p.prototype,"imageTransparency",void 0),a([u(st)],p.prototype,"legendEnabled",void 0),a([u({type:["show","hide","hide-children"]})],p.prototype,"listMode",void 0),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"mapUrl",void 0),a([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],p.prototype,"isReference",void 0),a([u({type:["WMS"]})],p.prototype,"operationalLayerType",void 0),a([u()],p.prototype,"resourceInfo",void 0),a([u({type:I,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],p.prototype,"spatialReference",void 0),a([O(["web-document","portal-item"],"spatialReference",["spatialReferences"])],p.prototype,"readSpatialReferenceFromItemOrDocument",null),a([u({type:[it],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],p.prototype,"spatialReferences",void 0),a([D(["web-document","portal-item"],"spatialReferences")],p.prototype,"writeSpatialReferences",null),a([u({type:Q.ofType(z),json:{write:{target:"layers",overridePolicy(e,t,r){if(St(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],p.prototype,"sublayers",void 0),a([O(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],p.prototype,"readSublayersFromItemOrMap",null),a([O("service","sublayers",["layers"])],p.prototype,"readSublayers",null),a([D("sublayers",{layers:{type:[z]},visibleLayers:{type:[String]}})],p.prototype,"writeSublayers",null),a([u({json:{read:!1},readOnly:!0,value:"wms"})],p.prototype,"type",void 0),a([u(at)],p.prototype,"url",null),a([u({type:String,json:{write:{ignoreOrigin:!0}}})],p.prototype,"version",void 0),p=a([xe("esri.layers.WMSLayer")],p);const $t=p;export{$t as default};
