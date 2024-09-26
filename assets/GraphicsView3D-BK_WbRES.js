import{s as i,u as p,e as s,y as t,o as a,a as c,S as h}from"./index-2x4JY06U.js";import{O as n}from"./GraphicsProcessor-COolW_0k.js";import"./Graphics3DObjectStates-BAi_ctn_.js";import"./optimizedFeatureQueryEngineAdapter-mPhVzWef.js";import"./PooledRBush-vVDNK59T.js";import"./quickselect-7l5F7t24.js";let r=class extends i(h){constructor(e){super(e),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new d,this.suspended=!1}initialize(){this._set("processor",new n({owner:this}))}destroy(){this._set("processor",p(this.processor))}get graphics(){var e;return(e=this.view)==null?void 0:e.graphics}get loadedGraphics(){return this.graphics}get updating(){var e;return!!((e=this.processor)!=null&&e.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,o){return this.processor.whenGraphicBounds(e,o)}graphicChanged(e){this.processor.graphicsCore.graphicUpdateHandler(e)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}highlight(e){return this.processor.highlight(e)}maskOccludee(e){return this.processor.maskOccludee(e)}get test(){return{graphics3DProcessor:this.processor}}};s([t({readOnly:!0})],r.prototype,"graphics",null),s([t()],r.prototype,"loadedGraphics",null),s([t({readOnly:!0})],r.prototype,"updating",null),s([t({constructOnly:!0})],r.prototype,"view",void 0),s([t()],r.prototype,"processor",void 0),s([t({type:Boolean})],r.prototype,"slicePlaneEnabled",void 0),s([t()],r.prototype,"layer",void 0),s([t()],r.prototype,"suspended",void 0),r=s([c("esri.views.3d.layers.GraphicsView3D")],r);class d extends a{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const w=r;export{w as default};
