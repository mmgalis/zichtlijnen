import{gN as R,gO as E,gP as W,gQ as j,gR as q,gS as F,gT as k,gU as b,gV as M,t as J,v as Y,dI as Z,A as $,a7 as x,br as B,J as Q,es as X,bk as C,aU as N,gW as K,gX as ee,bt as H,cU as te,aw as ae,ax as ie,gY as D,an as O,gZ as P,g_ as re,g$ as U,gJ as se,h0 as v,h1 as ne,h2 as oe,am as le,e as f,y,a as he}from"./index-2x4JY06U.js";import{l as de}from"./LayerView3D-M1UbMu_z.js";import{l as ge}from"./projectExtentUtils-DUnsVfft.js";import{g as ce}from"./ImageMaterial.glsl-BwqMvwJJ.js";import{y as ue}from"./LayerView-DvlHVGG6.js";import{i as me}from"./RefreshableLayerView-Djstywlw.js";function pe(t,e,a){const r=R(t)/E(t),i={width:a,height:a};return r>1.0001?i.height=a/r:r<.9999&&(i.width=a*r),i.width=Math.round(i.width/(R(t)/R(e))),i.height=Math.round(i.height/(E(t)/E(e))),i}function V(t,e){return W(t,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function fe(t,e,a){if(!j(e,a))return V(t,a);const r=[e[1]-a[1],Math.min(e[3],a[3])-Math.max(e[1],a[1]),a[3]-e[3],123456],i=[e[0]-a[0],Math.min(e[2],a[2])-Math.max(e[0],a[0]),a[2]-e[2],123456],l=a[2]-a[0],n=a[3]-a[1],s=i[0]>0&&i[2]>0?3:2,h=r[0]>0&&r[2]>0?3:2,o=(h+1)*(s+1),g=q(3*o),c=F(2*o),d=new Array(6*(h*s-1));let S=0,I=0,T=0,m=0,p=0;for(let w=0;w<4;w++){const G=r[w];if(G<=0)continue;let A=0;for(let _=0;_<4;_++){const L=i[_];L<=0||(g[I++]=a[0]+A,g[I++]=a[1]+S,g[I++]=-1,c[T++]=A/l,c[T++]=S/n,_<3&&w<3&&(_!==1||w!==1)&&(d[p++]=m,d[p++]=m+1,d[p++]=m+s+1,d[p++]=m+1,d[p++]=m+s+2,d[p++]=m+s+1),m++,A+=L)}S+=G}const z=new Array(d.length);return new k(t,[[b.POSITION,new M(g,d,3,!0)],[b.NORMAL,new M(we,z,3,!0)],[b.UV0,new M(c,d,2,!0)]])}const we=[0,0,1];let u=class extends me(de(ue)){constructor(){super(...arguments),this.drapeSourceType=J.RasterImage,this.updatePolicy=Y.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=Z(async t=>{this.destroyed||await this._doRefresh(t).catch(e=>{$(e)||x.getLogger(this).error(e)})},2e3)}get visibleAtCurrentScale(){const t=this.layer,e="effectiveScaleRange"in t?t.effectiveScaleRange:null;return B(e,this.view.terrainScale)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(Q(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ge(this).then(t=>this._set("fullExtentInLocalViewSpatialReference",t))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler())}destroy(){this.clear()}setDrapingExtent(t,e){this._spatialReference=e,t.forEach((a,r)=>{this._overlays[r]=a,this._updateImageExtent(a,r)})}_updateImageExtent(t,e){const a=this._clippedExtent(t.extent,_e);if(a==null)return;const r=pe(t.extent,a,t.resolution);let i=t.pixelRatio*this.view.state.pixelRatio;const{layer:l}=this;if("imageMaxWidth"in l&&l.imageMaxWidth!=null||"imageMaxHeight"in l&&l.imageMaxHeight!=null){const s=l.imageMaxWidth,h=l.imageMaxHeight;if(r.width>s){const o=s/r.width;r.height=Math.floor(r.height*o),r.width=s,i*=o}if(r.height>h){const o=h/r.height;r.width=Math.floor(r.width*o),r.height=h,i*=o}}const n=this._extents[e];n&&X(n.extent,a)&&this._imageSizeEquals(a,n.imageSize,r)||(this._extents[e]={extent:C(a),imageSize:r,pixelRatio:i},this.suspended||this._fetch(e).catch(s=>{$(s)||x.getLogger(this).error(s)}))}clear(){for(let t=0;t<this._images.length;t++)this._clearImage(t)}async doRefresh(){return this._doRefresh()}async _doRefresh(t){if(this.suspended)return;const e=[];for(let a=0;a<this._extents.length;a++)this._extents[a]&&e.push(this._fetch(a,t));await Promise.allSettled(e)}async processResult(t,e,a){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(t.image=e)}findExtentInfoAt(t){for(const e of this._extents){const a=e.extent;if(new N(a[0],a[1],a[2],a[3],this._spatialReference).contains(t))return e}return null}getFetchOptions(){}async redraw(t,e){await K(this._images,async(a,r)=>{a&&(await t(a,e),await this._createStageObjects(r,a.image,e))})}_imageSizeEquals(t,e,a){if(!this.maximumDataResolution)return!1;const r=R(t)/this.maximumDataResolution.x,i=E(t)/this.maximumDataResolution.y,l=r/e.width,n=i/e.height,s=r/a.width,h=i/a.height,o=Math.abs(l-s),g=Math.abs(n-h),c=ee.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return o<=c&&g<=c}async _fetch(t,e){if(this.suspended)return;const a=this._extents[t],r=a.extent;this._images[t]||(this._images[t]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:C(r)});const i=this._images[t];i.loadingAbortController=H(i.loadingAbortController);const l=new N(r[0],r[1],r[2],r[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(t);const n=new AbortController;i.loadingAbortController=n,te(e,()=>n.abort());const s=n.signal,h=this._waitFetchReady(s).then(async()=>{const o={requestAsImageElement:!0,pixelRatio:this._overlays[t].pixelRatio,...this.getFetchOptions(),signal:s},{height:g,width:c}=a.imageSize;return this.layer.fetchImage(l,c,g,o)}).then(o=>{if(ae(s))throw x.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),ie();return this.processResult(i,o)}).then(()=>{D(i.renderExtent,r)});i.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{O(s),await this._createStageObjects(t,i.image,s)}).catch(o=>{throw o&&!$(o)&&x.getLogger(this).error(o),o}).finally(()=>{h===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)}))}_clearImage(t){const e=this._images[t];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],P.UPDATE),e.renderGeometry=null);const a=this.view._stage,r=e.texture;r==null||r.unload(),a.remove(r),e.texture=null,a.remove(e.material),e.material=null,e.loadingAbortController=H(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(t,e,a){const r=this.view._stage,i=this._images[t],l=()=>{var n;(n=i.texture)==null||n.unload(),r.remove(i.texture),i.texture=null,i.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([i.renderGeometry],P.UPDATE),i.renderGeometry=null)};if(e){const n=new re(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:U.CLAMP_TO_EDGE,t:U.CLAMP_TO_EDGE}});let s;if(await se(this._images[t===v.INNER?v.OUTER:v.INNER].loadingPromise),O(a),l(),await r.schedule(()=>n.load(r.renderView.renderingContext),a),r.add(n),i.texture=n,i.material==null?(i.material=new ce({transparent:!0,textureId:n.id}),r.add(i.material)):i.material.setParameters({textureId:n.id}),t===v.INNER)s=V(i.material,i.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void l();s=fe(i.material,h,i.renderExtent)}i.renderGeometry=new ne(s),i.renderGeometry.localOrigin=this._overlays[t].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([i.renderGeometry],P.UPDATE)}else l(),r.remove(i.material),i.material=null}_clippedExtent(t,e){if(this.view.viewingMode!=="local")return D(e,t);const a=this.view.basemapTerrain;return a.ready?oe(t,a.extent,e):D(e,t)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(t){await le(()=>this.view.stationary,t),O(t)}};f([y()],u.prototype,"layer",void 0),f([y()],u.prototype,"suspended",void 0),f([y({readOnly:!0})],u.prototype,"fullExtentInLocalViewSpatialReference",void 0),f([y({readOnly:!0})],u.prototype,"visibleAtCurrentScale",null),f([y()],u.prototype,"updating",void 0),u=f([he("esri.views.3d.layers.DynamicLayerView3D")],u);const Ie=u,_e=C();export{Ie as N};
