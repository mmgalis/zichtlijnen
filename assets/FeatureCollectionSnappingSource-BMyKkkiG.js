import{S as F,g3 as E,B as h,P as d,aB as V,g4 as C,g5 as D,g6 as $,an as p,e as r,y as o,a as A,g7 as I}from"./index-2x4JY06U.js";import{i as P,o as G}from"./queryEngineUtils-S3J4IWLC.js";import{i as S,r as q,n as v}from"./symbologySnappingCandidates-rQ3z5O3K.js";import"./VertexSnappingCandidate-Bax0Qmz-.js";let a=class extends F{get availability(){return 1}get updating(){return this.layerSource.updating}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,n=e!=null&&e.type==="3d";if(!n||t.type==="subtype-group")return S();const i=async(l,s)=>(await I(e.whenLayerView(t),s)).elevationAlignPointsInFeatures(l,s);return S(n,{elevationInfo:t.elevationInfo,alignPointsInFeatures:i})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return q(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?v(this._symbologySnappingSupported,async(n,i)=>{const l=await e.whenLayerView(t);return p(i),l.queryForSymbologySnapping({candidates:n,spatialReference:e.spatialReference},i)}):v()}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&(e.whenLayerView(t).then(n=>this._layerView3D=n),this.addHandles([e.elevationProvider.on("elevation-change",({context:n})=>{const{elevationInfo:i}=t;E(n,i)&&this._snappingElevationAligner.notifyElevationSourceChange()}),h(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),d),h(()=>{var n;return this._layerView3D!=null?(n=this._layerView3D.layer)==null?void 0:n.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),d),V(()=>{var n;return(n=this._layerView3D)==null?void 0:n.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())]))}constructor(e){super(e),this.view=null,this._layerView3D=null,this._memoizedMakeGetGroundElevation=C(P)}refresh(){}async fetchCandidates(e,t){var c;const{layer:n}=this.layerSource,i=n.source;if(!(i!=null&&i.querySnapping))return[];const l=D(n),s=$(e,((c=this.view)==null?void 0:c.type)??"2d",l),w=await i.querySnapping(s,{signal:t});p(t);const g=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(w.candidates,g,t);p(t);const u=await this._symbologySnappingFetcher.fetch(y,t);p(t);const _=u.length===0?y:[...y,...u],m=this._snappingElevationFilter.filter(s,_),f=this._memoizedMakeGetGroundElevation(this.view,g);return m.map(b=>G(b,f))}};r([o({constructOnly:!0})],a.prototype,"layerSource",void 0),r([o({constructOnly:!0})],a.prototype,"view",void 0),r([o()],a.prototype,"_snappingElevationAligner",null),r([o()],a.prototype,"_snappingElevationFilter",null),r([o()],a.prototype,"_symbologySnappingFetcher",null),r([o()],a.prototype,"_layerView3D",void 0),r([o()],a.prototype,"_symbologySnappingSupported",null),a=r([A("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],a);export{a as FeatureCollectionSnappingSource};
