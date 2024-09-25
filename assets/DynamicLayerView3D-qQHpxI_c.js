import{g_ as E,g$ as R,h0 as W,h1 as j,h2 as q,h3 as F,dy as B,df as A,dz as M,T as Y,W as k,e8 as Q,Y as $,D as x,bE as Z,a3 as J,eQ as K,bx as C,b5 as N,h4 as X,h5 as ee,bG as H,h6 as te,B as ae,aP as ie,h7 as D,n as O,h8 as P,h9 as re,ha as z,hb as se,hc as v,d7 as ne,hd as oe,aH as le,e as f,y as _,a as he}from"./index-FXsJ6CNr.js";import{l as de}from"./LayerView3D-jP1spFJU.js";import{l as ce}from"./projectExtentUtils-D-8oqGD7.js";import{g as ue}from"./ImageMaterial.glsl-CmxQ-bYp.js";import{y as ge}from"./LayerView-BifhNKud.js";import{i as me}from"./RefreshableLayerView-CVFeQasK.js";function pe(t,e,a){const r=E(t)/R(t),i={width:a,height:a};return r>1.0001?i.height=a/r:r<.9999&&(i.width=a*r),i.width=Math.round(i.width/(E(t)/E(e))),i.height=Math.round(i.height/(R(t)/R(e))),i}function V(t,e){return W(t,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function fe(t,e,a){if(!j(e,a))return V(t,a);const r=[e[1]-a[1],Math.min(e[3],a[3])-Math.max(e[1],a[1]),a[3]-e[3],123456],i=[e[0]-a[0],Math.min(e[2],a[2])-Math.max(e[0],a[0]),a[2]-e[2],123456],l=a[2]-a[0],n=a[3]-a[1],s=i[0]>0&&i[2]>0?3:2,h=r[0]>0&&r[2]>0?3:2,o=(h+1)*(s+1),c=q(3*o),u=F(2*o),d=new Array(6*(h*s-1));let S=0,b=0,G=0,m=0,p=0;for(let w=0;w<4;w++){const T=r[w];if(T<=0)continue;let I=0;for(let y=0;y<4;y++){const L=i[y];L<=0||(c[b++]=a[0]+I,c[b++]=a[1]+S,c[b++]=-1,u[G++]=I/l,u[G++]=S/n,y<3&&w<3&&(y!==1||w!==1)&&(d[p++]=m,d[p++]=m+1,d[p++]=m+s+1,d[p++]=m+1,d[p++]=m+s+2,d[p++]=m+s+1),m++,I+=L)}S+=T}const U=new Array(d.length);return new B(t,[[A.POSITION,new M(c,d,3,!0)],[A.NORMAL,new M(we,U,3,!0)],[A.UV0,new M(u,d,2,!0)]])}const we=[0,0,1];let g=class extends me(de(ge)){constructor(){super(...arguments),this.drapeSourceType=Y.RasterImage,this.updatePolicy=k.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=Q(async t=>{this.destroyed||await this._doRefresh(t).catch(e=>{$(e)||x.getLogger(this).error(e)})},2e3)}get visibleAtCurrentScale(){const t=this.layer,e="effectiveScaleRange"in t?t.effectiveScaleRange:null;return Z(e,this.view.terrainScale)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(J(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ce(this).then(t=>this._set("fullExtentInLocalViewSpatialReference",t))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler())}destroy(){this.clear()}setDrapingExtent(t,e){this._spatialReference=e,t.forEach((a,r)=>{this._overlays[r]=a,this._updateImageExtent(a,r)})}_updateImageExtent(t,e){const a=this._clippedExtent(t.extent,ye);if(a==null)return;const r=pe(t.extent,a,t.resolution);let i=t.pixelRatio*this.view.state.pixelRatio;const{layer:l}=this;if("imageMaxWidth"in l&&l.imageMaxWidth!=null||"imageMaxHeight"in l&&l.imageMaxHeight!=null){const s=l.imageMaxWidth,h=l.imageMaxHeight;if(r.width>s){const o=s/r.width;r.height=Math.floor(r.height*o),r.width=s,i*=o}if(r.height>h){const o=h/r.height;r.width=Math.floor(r.width*o),r.height=h,i*=o}}const n=this._extents[e];n&&K(n.extent,a)&&this._imageSizeEquals(a,n.imageSize,r)||(this._extents[e]={extent:C(a),imageSize:r,pixelRatio:i},this.suspended||this._fetch(e).catch(s=>{$(s)||x.getLogger(this).error(s)}))}clear(){for(let t=0;t<this._images.length;t++)this._clearImage(t)}async doRefresh(){return this._doRefresh()}async _doRefresh(t){if(this.suspended)return;const e=[];for(let a=0;a<this._extents.length;a++)this._extents[a]&&e.push(this._fetch(a,t));await Promise.allSettled(e)}async processResult(t,e,a){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(t.image=e)}findExtentInfoAt(t){for(const e of this._extents){const a=e.extent;if(new N(a[0],a[1],a[2],a[3],this._spatialReference).contains(t))return e}return null}getFetchOptions(){}async redraw(t,e){await X(this._images,async(a,r)=>{a&&(await t(a,e),await this._createStageObjects(r,a.image,e))})}_imageSizeEquals(t,e,a){if(!this.maximumDataResolution)return!1;const r=E(t)/this.maximumDataResolution.x,i=R(t)/this.maximumDataResolution.y,l=r/e.width,n=i/e.height,s=r/a.width,h=i/a.height,o=Math.abs(l-s),c=Math.abs(n-h),u=ee.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return o<=u&&c<=u}async _fetch(t,e){if(this.suspended)return;const a=this._extents[t],r=a.extent;this._images[t]||(this._images[t]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:C(r)});const i=this._images[t];i.loadingAbortController=H(i.loadingAbortController);const l=new N(r[0],r[1],r[2],r[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(t);const n=new AbortController;i.loadingAbortController=n,te(e,()=>n.abort());const s=n.signal,h=this._waitFetchReady(s).then(async()=>{const o={requestAsImageElement:!0,pixelRatio:this._overlays[t].pixelRatio,...this.getFetchOptions(),signal:s},{height:c,width:u}=a.imageSize;return this.layer.fetchImage(l,u,c,o)}).then(o=>{if(ae(s))throw x.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),ie();return this.processResult(i,o)}).then(()=>{D(i.renderExtent,r)});i.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{O(s),await this._createStageObjects(t,i.image,s)}).catch(o=>{throw o&&!$(o)&&x.getLogger(this).error(o),o}).finally(()=>{h===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)}))}_clearImage(t){const e=this._images[t];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],P.UPDATE),e.renderGeometry=null);const a=this.view._stage,r=e.texture;r==null||r.unload(),a.remove(r),e.texture=null,a.remove(e.material),e.material=null,e.loadingAbortController=H(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(t,e,a){const r=this.view._stage,i=this._images[t],l=()=>{var n;(n=i.texture)==null||n.unload(),r.remove(i.texture),i.texture=null,i.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([i.renderGeometry],P.UPDATE),i.renderGeometry=null)};if(e){const n=new re(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:z.CLAMP_TO_EDGE,t:z.CLAMP_TO_EDGE}});let s;if(await se(this._images[t===v.INNER?v.OUTER:v.INNER].loadingPromise),O(a),l(),await r.schedule(()=>n.load(r.renderView.renderingContext),a),r.add(n),i.texture=n,i.material==null?(i.material=new ue({transparent:!0,textureId:n.id}),r.add(i.material)):i.material.setParameters({textureId:n.id}),t===v.INNER)s=V(i.material,i.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void l();s=fe(i.material,h,i.renderExtent)}i.renderGeometry=new ne(s),i.renderGeometry.localOrigin=this._overlays[t].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([i.renderGeometry],P.UPDATE)}else l(),r.remove(i.material),i.material=null}_clippedExtent(t,e){if(this.view.viewingMode!=="local")return D(e,t);const a=this.view.basemapTerrain;return a.ready?oe(t,a.extent,e):D(e,t)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(t){await le(()=>this.view.stationary,t),O(t)}};f([_()],g.prototype,"layer",void 0),f([_()],g.prototype,"suspended",void 0),f([_({readOnly:!0})],g.prototype,"fullExtentInLocalViewSpatialReference",void 0),f([_({readOnly:!0})],g.prototype,"visibleAtCurrentScale",null),f([_()],g.prototype,"updating",void 0),g=f([he("esri.views.3d.layers.DynamicLayerView3D")],g);const be=g,ye=C();export{be as N};
