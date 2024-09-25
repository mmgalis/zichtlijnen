import{e as o,y as m,a as c,k as v,bW as D,n as E,a5 as _,b7 as u,e8 as b,bA as H}from"./index-CY8jQoH7.js";import{N as I}from"./DynamicLayerView3D-2uuWEK1F.js";import{i as P}from"./timeSupport-Db9yj-ae.js";import"./LayerView3D-DvONMQSx.js";import"./projectExtentUtils-B5u_JQ_F.js";import"./ImageMaterial.glsl-C_JtlGsz.js";import"./LayerView-BOG982Qk.js";import"./RefreshableLayerView-v7g2czr-.js";const F=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){var a;return P(this.layer,(a=this.view)==null?void 0:a.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(a,i){const{layer:r}=this;if(!a)throw new v("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:s}=r,n=D(r,i);if(!s||n==null)return[];const y=await n.getRequiredFields();E(i);const l=new _;l.timeExtent=this.timeExtent,l.geometry=a,l.outFields=y,l.outSpatialReference=a.spatialReference;const{resolution:d,spatialReference:p}=this.view,g=this.view.type==="2d"?new u(d,d,p):new u(.5*d,.5*d,p),{returnTopmostRaster:w,showNoDataRecords:x}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:g,showNoDataRecords:x,signal:i==null?void 0:i.signal};return r.queryVisibleRasters(l,f).then(R=>R)}canResume(){var a;return!!super.canResume()&&!((a=this.timeExtent)!=null&&a.isEmpty)}};return o([m()],t.prototype,"layer",void 0),o([m()],t.prototype,"suspended",void 0),o([m({readOnly:!0})],t.prototype,"timeExtent",null),o([m()],t.prototype,"view",void 0),t=o([c("esri.views.layers.ImageryLayerView")],t),t};let h=class extends F(I){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=b(async e=>{this.redraw((t,a)=>this._redrawImage(t,a),e)},2e3)}initialize(){this.addHandles([H(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this._updatingHandles.addPromise(this.redrawDebounced()))]),this._updatingHandles.add(()=>{var e,t;return(t=(e=this.layer)==null?void 0:e.exportImageServiceParameters)==null?void 0:t.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>{var e;return(e=this.layer)==null?void 0:e.renderer},()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.timeExtent,()=>this._updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||e.pixelData==null)throw new Error;const a=e.image,i=a.getContext("2d"),r=await this.layer.applyRenderer(e.pixelData,{signal:t}),s=this.layer.applyFilter(r).pixelBlock;if(s==null)throw new Error;a.width=s.width,a.height=s.height;const n=i.createImageData(s.width,s.height);n.data.set(s.getAsRGBA()),i.putImageData(n,0,0)}};h=o([c("esri.views.3d.layers.ImageryLayerView3D")],h);const S=h;export{S as default};
