import{e as t,y as o,a as x,kp as u,d8 as f}from"./index-2x4JY06U.js";import{r as v}from"./Tooltip-CaukDEJK.js";import{u as r}from"./automaticLengthMeasurementUtils-kcStMint.js";let s=class extends v{constructor(i){super(i),this.type="extent-rotate",this.angle=0}};t([o()],s.prototype,"type",void 0),t([o()],s.prototype,"angle",void 0),s=t([x("esri.views.interactive.tooltip.infos.ExtentRotateTooltipInfo")],s);function m({topLeft:i,topRight:n,bottomRight:l,bottomLeft:a,spatialReference:p}){const c=u(r(a,l,p),r(i,n,p));if(c==null)return null;const y=u(r(l,n,p),r(a,i,p));return y==null?null:{xSize:c,ySize:y}}let e=class extends v{constructor(i){super(i),this.type="extent-scale",this.xScale=0,this.yScale=0,this.xSize=f,this.ySize=f}};t([o()],e.prototype,"type",void 0),t([o()],e.prototype,"xScale",void 0),t([o()],e.prototype,"yScale",void 0),t([o()],e.prototype,"xSize",void 0),t([o()],e.prototype,"ySize",void 0),e=t([x("esri.views.interactive.tooltip.infos.ExtentScaleTooltipInfo")],e);export{e as i,m as o,s};
