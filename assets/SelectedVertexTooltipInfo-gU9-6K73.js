import{e,y as s,a as r}from"./index-FXsJ6CNr.js";import{r as a}from"./Tooltip-B4D-fhsV.js";import{h as n,M as h,U as p}from"./automaticAreaMeasurementUtils-D6W1f5Wv.js";let o=class extends n(a){constructor(l){super(l),this.type="move-point",this.allFields.forEach(t=>{t.lockable=!1,t.setActual(null)})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation]}};e([s()],o.prototype,"allFields",null),o=e([r("esri.views.interactive.tooltip.infos.MovePointTooltipInfo")],o);let i=class extends n(a){constructor(l){super(l),this.type="selected-vertex",this.area=h(),this.totalLength=p(),this.geometryType="polyline",this.allFields.forEach(t=>{t.lockable=!1,t.setActual(null)})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,this.geometryType==="polygon"?this.area:this.totalLength]}};e([s()],i.prototype,"geometryType",void 0),e([s()],i.prototype,"allFields",null),i=e([r("esri.views.interactive.tooltip.infos.SelectedVertexTooltipInfo")],i);export{o as i,i as p};
