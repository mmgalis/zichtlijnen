import{b0 as m,b1 as f,b2 as C,b3 as b}from"./index-CY8jQoH7.js";class I extends m{constructor(i,n){super(NaN,NaN),this.id=i,this.serviceMbsInIndexSR=n,this.serviceMbsInRenderSR=f(0,0,0,-1)}invalidateServiceBVsInRenderSR(){var i;C(this.serviceMbsInRenderSR),(i=this.serviceObbInRenderSR)==null||i.invalidate()}shareServiceBVsInRenderSRWith(i){this.serviceObbInRenderSR=i.serviceObbInRenderSR,this.serviceMbsInRenderSR=i.serviceMbsInRenderSR}}var d,o,r,a,c;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(d||(d={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(o||(o={}));class N extends I{constructor(i,n,s,t,h,l,R,u,v,S){super(i,s),this.index=n,this.childCount=t,this.level=h,this.resources=l,this.version=R,this.lodMetric=u,this.maxError=v,this.numFeatures=S,this.failed=!1,this.cacheState=r.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=o.NotChecked,this.elevationAgnosticBoundingVolume=b(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(r||(r={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(a||(a={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(c||(c={}));class U{constructor(i,n,s,t){this.nodeHasLOD=i,this.isChosen=n,this.lodLevel=s,this.version=t}}export{r as a,c,a as d,N as h,U as l,d as o,o as r,I as s};
