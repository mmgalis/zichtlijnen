import{dr as a,dt as p,eX as d,e as s,y as i,a as l,G as u,a4 as y}from"./index-2x4JY06U.js";let r=class extends a(p(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{d(()=>{const t=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unsupported layer type";t&&(n+=" "+t),o(new y("layer:unsupported-layer-type",n,{layerType:t}))})}))}read(e,o){const t={resourceInfo:e};e.id!=null&&(t.id=e.id),e.title!=null&&(t.title=e.title),super.read(t,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};s([i({readOnly:!0})],r.prototype,"resourceInfo",void 0),s([i({type:["show","hide"]})],r.prototype,"listMode",void 0),s([i({type:Boolean,readOnly:!1})],r.prototype,"persistenceEnabled",void 0),s([i({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=s([l("esri.layers.UnsupportedLayer")],r);const h=r;export{h as default};
