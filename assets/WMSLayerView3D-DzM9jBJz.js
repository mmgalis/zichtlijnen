import{e as o,y as h,a as y,u as f,k as m,n as g,b5 as P}from"./index-CY8jQoH7.js";import{N as v}from"./DynamicLayerView3D-2uuWEK1F.js";import{a as E}from"./ExportWMSImageParameters-DRlXm2Bp.js";import{i as I}from"./timeSupport-Db9yj-ae.js";import"./LayerView3D-DvONMQSx.js";import"./projectExtentUtils-B5u_JQ_F.js";import"./ImageMaterial.glsl-C_JtlGsz.js";import"./LayerView-BOG982Qk.js";import"./RefreshableLayerView-v7g2czr-.js";const F=r=>{let t=class extends r{initialize(){this.exportImageParameters=new E({layer:this.layer})}destroy(){this.exportImageParameters=f(this.exportImageParameters)}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return I(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,i){const{layer:a}=this;if(!e)throw new m("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:n}=a;if(!n)throw new m("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:n});const p=this.createFetchPopupFeaturesQuery(e);if(!p)return[];const{extent:s,width:u,height:l,x:d,y:w}=p;if(!(s&&u&&l))throw new m("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:s,width:u,height:l});const x=await a.fetchFeatureInfo(s,u,l,d,w);return g(i),x}};return o([h()],t.prototype,"exportImageParameters",void 0),o([h({readOnly:!0})],t.prototype,"exportImageVersion",null),o([h()],t.prototype,"layer",void 0),o([h({readOnly:!0})],t.prototype,"timeExtent",null),t=o([y("esri.views.layers.WMSLayerView")],t),t};let c=class extends F(v){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new m("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this._updatingHandles.add(()=>{var r;return(r=this.exportImageParameters)==null?void 0:r.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(r){const t=this.findExtentInfoAt(r),e=t.extent,i=new P(e[0],e[1],e[2],e[3],this._spatialReference),a=t.imageSize,n=a.width,p=a.height,s=i.width/n;return{extent:i,width:n,height:p,x:Math.round((r.x-i.xmin)/s),y:Math.round((i.ymax-r.y)/s)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};c=o([y("esri.views.3d.layers.WMSLayerView3D")],c);const z=c;export{z as default};
