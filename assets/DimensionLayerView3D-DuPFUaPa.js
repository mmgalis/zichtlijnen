const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DimensionAnalysisView3D-Be3wqQYA.js","assets/index-2x4JY06U.js","assets/index-BCwB8mD8.css","assets/AnalysisView3D-BNQM-i8s.js","assets/LengthDimension-BYWwhrWm.js","assets/Segment-Bf5HrbeE.js","assets/TextOverlayItem-DvLS6p4P.js","assets/automaticLengthMeasurementUtils-kcStMint.js","assets/ImageMaterial.glsl-BwqMvwJJ.js","assets/Factory-CGAPJWh_.js","assets/LineVisualElement--c8hqcQb.js","assets/VerticesVisualElement-HSDpig7u.js","assets/ToolIntersector-COR3cJdh.js","assets/quantityFormatUtils-CXp-XE8X.js","assets/projectionUtils-CxoSw_Aw.js","assets/analysisViewUtils-Cve8PpDV.js"])))=>i.map(i=>d[i]);
import{e as a,y as t,a as o,V as h,ax as w,B as u,M as V,a4 as c,bs as d,u as p,bt as _,aw as m,bu as v}from"./index-2x4JY06U.js";import{l as A}from"./LayerView3D-M1UbMu_z.js";import{y as f}from"./LayerView-DvlHVGG6.js";const D=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),s=a([o("esri.views.layers.DimensionLayerView")],s),s},y="analysis-view-handles";let n=class extends A(D(f)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.addHandles(u(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},V),y)}destroy(){this.removeHandles(y),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new c("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=d(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D-Be3wqQYA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([o("esri.views.3d.layers.DimensionLayerView3D")],n);const L=n;export{L as default};
