import{is as R,G as u,e as t,y as n,eL as y,ls as g,g9 as N,a as m,iu as O,V as x,bB as $,lt as S,Z as b,a6 as v,bC as j,lu as E,b5 as f,f as q,i as C,aZ as D,x as k}from"./index-CY8jQoH7.js";import{u as P}from"./LengthDimension-DboozyJW.js";let r=class extends R(O){constructor(e){super(e),this.type="simple",this.color=new u("black"),this.lineSize=2,this.fontSize=10,this.textColor=new u("black"),this.textBackgroundColor=new u([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],r.prototype,"type",void 0),t([n({type:u,nonNullable:!0,json:{type:[y],write:{isRequired:!0}}})],r.prototype,"color",void 0),t([n({type:Number,cast:g,nonNullable:!0,range:{min:N(1)},json:{write:{isRequired:!0}}})],r.prototype,"lineSize",void 0),t([n({type:Number,cast:g,nonNullable:!0,json:{write:{isRequired:!0}}})],r.prototype,"fontSize",void 0),t([n({type:u,nonNullable:!0,json:{type:[y],write:{isRequired:!0}}})],r.prototype,"textColor",void 0),t([n({type:u,nonNullable:!0,json:{type:[y],write:{isRequired:!0}}})],r.prototype,"textBackgroundColor",void 0),r=t([m("esri.analysis.DimensionSimpleStyle")],r);const h=r,c=x.ofType(P);let l=class extends S{constructor(e){super(e),this.type="dimension",this.style=new h,this.extent=null}initialize(){this.addHandles(b(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},v))}get dimensions(){return this._get("dimensions")||new c}set dimensions(e){this._set("dimensions",j(e,this.dimensions,c))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,s)=>(e.push(s.startPoint,s.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const s=[];for(const o of this.dimensions)o.startPoint!=null&&s.push(o.startPoint),o.endPoint!=null&&s.push(o.endPoint);const a=E(s,e);if(a.pending!=null)return{pending:a.pending,extent:null};let d=null;return a.geometries!=null&&(d=a.geometries.reduce((o,p)=>o==null?p!=null?f.fromPoint(p):null:p!=null?o.union(f.fromPoint(p)):o,null)),{pending:null,extent:d}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],l.prototype,"type",void 0),t([n({cast:$,type:c,nonNullable:!0})],l.prototype,"dimensions",null),t([n({readOnly:!0})],l.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:h}},nonNullable:!0})],l.prototype,"style",void 0),t([n({value:null,readOnly:!0})],l.prototype,"extent",void 0),t([n({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=t([m("esri.analysis.DimensionAnalysis")],l);const w=l;let i=class extends q(C(k)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new w,this.opacity=1,e){const{source:s,style:a}=e;s&&a&&(s.style=a)}}initialize(){this.addHandles([b(()=>this.source,(e,s)=>{s!=null&&s.parent===this&&(s.parent=null),e!=null&&(e.parent=this)},v)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new w)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,s,a,d){s.dimensions=e.filter(({startPoint:o,endPoint:p})=>o!=null&&p!=null).map(o=>o.toJSON(d)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],i.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],i.prototype,"source",void 0),t([n({readOnly:!0})],i.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:h}},json:{write:{ignoreOrigin:!0}}})],i.prototype,"style",null),t([n({readOnly:!0})],i.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),t([n({type:["show","hide"]})],i.prototype,"listMode",void 0),t([n({type:x.ofType(P),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],i.prototype,"dimensions",null),t([D("web-scene","dimensions")],i.prototype,"writeDimensions",null),i=t([m("esri.layers.DimensionLayer")],i);const L=i;export{L as default};
