import{pG as j,e as $,S as ft,pH as Mt,k as g,y as R,a as mt,cB as M,pI as wt,pJ as z,pK as rt,pL as O,nU as vt,pM as yt,pN as At,ka as B,aA as lt,u as ot,J as Z,hz as q,nF as G,pO as ct,pP as ht,pQ as St,pR as k,pS as Tt,pT as xt,cC as et,bW as L,kk as U,nP as A,pU as d,pV as _,pW as bt,nS as W,nO as Ot,dU as m,nR as N,pX as ut,hS as pt,B as V,P as dt,cI as J,pY as Et,pZ as $t,p_ as Ct,p$ as I,cV as Pt,q0 as Dt,m7 as Rt,q1 as zt,q2 as It,q3 as Lt,q4 as Ut,dV as Xt,bV as at,nH as jt,bU as it,kl as Ft,q5 as Wt,bX as K,hJ as Yt,bl as qt,bn as Nt}from"./index-2x4JY06U.js";var f;(function(r){r[r.TRANSLATE_Z=0]="TRANSLATE_Z",r[r.TRANSLATE_XY=1]="TRANSLATE_XY",r[r.SCALE=2]="SCALE",r[r.ROTATE=3]="ROTATE",r[r.SCALE_ROTATE=4]="SCALE_ROTATE"})(f||(f={}));let F=class{constructor(){this._available=!0}set location(t){this._forEachManipulator3D(e=>e.location=t)}set elevationAlignedLocation(t){this._forEachManipulator3D(e=>e.elevationAlignedLocation=t)}set elevationInfo(t){this._forEachManipulator3D(e=>e.elevationInfo=t)}get renderLocation(){let t;return this._forEachManipulator3D(e=>{t||(t=e.renderLocation)}),t}get available(){return this._available}set available(t){this._available=t,this._forEachManipulator3D(e=>e.available=t)}get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}get selected(){return this.someManipulator(t=>t.selected)}hasManipulator(t){return this.someManipulator(e=>e===t)}someManipulator(t){let e=!1;return this.forEachManipulator(a=>{!e&&t(a)&&(e=!0)}),e}_forEachManipulator3D(t){this.forEachManipulator((e,a)=>{e instanceof j&&t(e,a)})}};const P=.3;function D(r,t){t&&Object.assign(r,t)}let Ht=class{constructor(t){this.height=90,this.coneHeight=40,this.coneWidth=23,this.width=3,this.renderOccluded=M.Opaque,this.color=t.accent}},Y=class{constructor({colors:t,...e}){this.size=11,this.outlineSize=1,this.collisionPadding=9,this.color=t.accent,this.outlineColor=t.outline,this.renderOccluded=M.Opaque,this.hoverOutlineColor=t.selectedOutline,D(this,e)}applyColor(t){this._apply(this.color,t)}applyOutline(t){this._apply(this.outlineColor,t)}applyHoverOutline(t){this._apply(this.hoverOutlineColor,t)}_apply(t,e){e.setParameters({color:O(t),renderOccluded:this.renderOccluded})}};class Bt{constructor({colors:t,...e}){this.size=40,this.height=.2,this.offset=.25,this.collisionPadding=2,this.renderOccluded=M.Transparent,this.minSquaredEdgeLength=900,this.color=z(t.accent,.5),this.hoverColor=t.accent,D(this,e)}applyColor(t){this._apply(this.color,t)}applyHover(t){this._apply(this.hoverColor,t)}_apply(t,e){e.setParameters({color:O(t),renderOccluded:this.renderOccluded})}}let Zt=class{constructor(t){this.vertex=new Y({colors:t,color:t.accent,outlineColor:t.outline}),this.edge=new Y({colors:t,color:wt(z(t.accent,2/3),.5),outlineColor:z(t.outline,.5),size:8,collisionPadding:8}),this.selected=new Y({colors:t,color:t.selected,outlineColor:t.outline}),this.edgeOffset=new Bt({colors:t})}},H=class{constructor({colors:t,...e}){this.width=1.5,this.stipplePattern=vt(3.3),this.falloff=0,this.innerWidth=1.5,this.renderOccluded=M.OccludeAndTransparent,this.color=t.selected,this.stippleOffColor=t.outline,this.innerColor=t.selected,D(this,e)}apply(t){t.color=O(this.color),t.width=this.width,t.stipplePattern=this.stipplePattern,t.stippleOffColor=O(this.stippleOffColor),t.falloff=this.falloff,t.innerWidth=this.innerWidth,t.innerColor=O(this.innerColor),t.renderOccluded=this.renderOccluded}},Gt=class{constructor({colors:t,...e}){this.size=4,this.outlineSize=1,this.shape="square",this.color=t.selected,this.outlineColor=t.outline,D(this,e)}apply(t){t.color=O(this.color),t.size=this.size,t.outlineSize=this.outlineSize,t.outlineColor=O(this.outlineColor),t.primitive=this.shape}};class X{constructor({colors:t,...e}){this.innerWidth=1,this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=P,this.globalAlphaContrastBoost=1.5,this.radius=3,this.innerColor=t.selected,this.glowColor=t.accent,this.heightFillColor=t.accent,D(this,e)}apply(t,e=1){const a={glowColor:g.toUnitRGB(this.glowColor),glowFalloff:this.glowFalloff,glowWidth:this.glowWidth,innerColor:g.toUnitRGB(this.innerColor),innerWidth:this.innerWidth,globalAlpha:this.globalAlpha*e*this.glowColor.a,globalAlphaContrastBoost:this.globalAlphaContrastBoost,intersectsLineRadius:this.radius};"style"in t?t.style=a:t.laserlineStyle=a}}class kt{constructor(t){this.outline=new H({colors:t,color:t.stippleOff,renderOccluded:M.OccludeAndTransparentStencil,stippleOffColor:t.stippleOn,innerWidth:0}),this.staged=new H({colors:t,color:t.stippleOn,renderOccluded:M.OccludeAndTransparentStencil,innerColor:t.stagedSolid,stippleOffColor:t.stippleOff}),this.shadowStyle=new X({colors:t,globalAlpha:P,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:1})}}class Vt{constructor(t){this.outline=new Gt({colors:t,color:t.selected,outlineColor:t.outline,outlineSize:1,shape:"circle",size:4}),this.shadowStyle=new X({colors:t,globalAlpha:P,glowColor:t.accent,glowFalloff:1.5,glowWidth:6,innerColor:t.selected,innerWidth:1,radius:2})}}let Jt=class extends H{constructor({colors:t,...e}){super({colors:t}),this.extensionType=rt.GROUND_RAY,D(this,e)}},Kt=class{constructor(t){this.laserlineAlphaMultiplier=1.5,this.heightPlaneAngleCutoff=20,this.lineObjects=new kt(t),this.pointObjects=new Vt(t),this.heightPlane=new X({colors:t,globalAlpha:P,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:1}),this.heightBox=new X({colors:t,globalAlpha:P,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:0,heightFillColor:t.accent}),this.zVerticalLine=new Jt({colors:t,color:z(t.accent,5*P/3),falloff:2,innerColor:z(t.selected,0),renderOccluded:M.OccludeAndTransparent,stipplePattern:null,width:5,extensionType:rt.GROUND_RAY})}},S=class extends ft{constructor(t){super(t)}get colors(){const t=this.getTheme().accentColor,e=t.a;return{accent:t,contrast:Mt(t),selected:g.fromArray([255,255,255,e]),selectedOutline:g.fromArray([255,255,255,e]),staged:g.fromArray([12,207,255,e]),stagedSolid:g.fromArray([12,207,255,1]),outline:g.fromArray([0,0,0,.5*e]),stippleOn:g.fromArray([255,255,255,1]),stippleOff:g.fromArray([0,0,0,.5])}}get visualElements(){return new Kt(this.colors)}get manipulators(){return new Zt(this.colors)}get zManipulator(){return new Ht(this.colors)}};$([R()],S.prototype,"colors",null),$([R()],S.prototype,"visualElements",null),$([R()],S.prototype,"manipulators",null),$([R()],S.prototype,"zManipulator",null),$([R()],S.prototype,"getTheme",void 0),S=$([mt("esri.views.3d.interactive.editingTools.settings")],S);const Qt=128,w=70,te=80,_t=.02,ee=54,ae=100,ie=Math.ceil(w/3*2),gt=160,ve=.5,ye=24,Ae=9,Se=gt+30,Te=gt+53,xe=60,be=23,Oe=5*Math.PI/12,Ee=1*Math.PI/3,$e=10,Ce=.2,Pe=30,De=53,Re=.2,ze=.3,Ie=200,Le=3,Ue=1e6;function Q(r,t,e){const a=(i,s)=>{t({action:i,object:r,dxScreen:s.screenDeltaX,dyScreen:s.screenDeltaY})};return e((i,s,l)=>(s.next(n=>(n.action==="start"&&a("start",n),n)).next(yt(r)).next(n=>{switch(n.action){case"start":case"update":(n.translationX||n.translationY||n.translationZ)&&a("update",n);break;case"end":a("end",n)}return n}),{steps:s,cancel:l=l.next(At(r)).next(n=>(a("end",{screenDeltaX:0,screenDeltaY:0}),n))}))}function Xe(r){if((r==null?void 0:r.axis)==null)return 1;const{mapStart:t,mapEnd:e,axis:a}=r,i=[e.x-t.x,e.y-t.y];return i[0]*a[0]+i[1]*a[1]>0?1:-1}let se=class extends F{constructor(t){super(),this._handles=new B,this._arrowManipulatorInfos=new Array,this._angle=0,this._scale=1,this._radius=w,this._updateAfterDrag=!1,this.events=new lt,this._tool=t.tool,this._view=t.view,this._opaqueMaterial=this._createMaterial(),this._transparentMaterial=this._createMaterial(.5),t.radius!=null&&(this._radius=t.radius),this._createManipulators(),this.forEachManipulator(e=>this._tool.manipulators.add(e))}set orthogonalAvailable(t){this._arrowManipulatorInfos.length>=3&&(this._arrowManipulatorInfos[1].manipulator.available=t,this._arrowManipulatorInfos[3].manipulator.available=t)}destroy(){this._handles=ot(this._handles),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._arrowManipulatorInfos.length=0}forEachManipulator(t){for(const{manipulator:e}of this._arrowManipulatorInfos)t(e,f.TRANSLATE_XY)}createManipulatedObjectDragPipeline(t,e,a){if(!e.operations)return Z();const i=e.operations.data.spatialReference,s=e.graphic;return Q(e,a,l=>this.createDragPipeline((n,o,c,h,u)=>({steps:o,cancel:c}=t(n,o,c,h,u),l(n,o,c)),e.elevationInfo,i,s))}createDragPipeline(t,e,a,i){return q(this._arrowManipulatorInfos.map(({manipulator:s},l)=>G(s,(n,o,c,h,u)=>{const p=o.next(v=>({...v,manipulatorType:f.TRANSLATE_XY})).next(ct(this._view,n.elevationAlignedLocation)).next(ht(this._view,n.elevationAlignedLocation,e,a,i)).next(St(n.location,this.angle+(l+1)*Math.PI*.5)).next(k());t(n,p,c,h,u)})))}get angle(){return this._angle}set angle(t){this._angle=t,this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get radius(){return this._radius}set radius(t){this._radius!==t&&(this._radius=t,this._updateManipulators())}_updateManipulators(){for(let t=0;t<this._arrowManipulatorInfos.length;t++)this._updateArrowManipulator(this._arrowManipulatorInfos[t],t);this._updateManipulatorTransform()}_updateArrowManipulator({manipulator:t,transform:e},a){const i=this._radius/w,s=ee*i,l=s*Math.sqrt(3)/2,n=Tt(this._opaqueMaterial,l,s/2,s/2,_t);xt(n,et(A.get(),L(U.get(),0,-l/3,0))),t.renderObjects=[new d(n,_.Focused),new d(n.instantiate({material:this._transparentMaterial}),_.Unfocused)],t.radius=l/3*2*1.2;const o=bt(A.get(),a*Math.PI/2),c=et(A.get(),L(U.get(),0,ae*i,0));W(e,o,c)}_createManipulators(){for(let t=0;t<4;t++){const e=this._createArrowManipulator(t);this._arrowManipulatorInfos.push(e)}this._updateManipulatorTransform()}_updateManipulatorTransform(){const t=this.angle,e=Ot(A.get(),t,m(0,0,1));if(e==null)return;const a=N(A.get(),L(U.get(),this.displayScale,this.displayScale,this.displayScale)),i=W(A.get(),a,e);for(const s of this._arrowManipulatorInfos){const l=W(A.get(),i,s.transform);s.manipulator.modelTransform=l}}_createArrowManipulator(t){const e=new j({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:m(0,0,1)}}),a={manipulator:e,transform:J()};return this._updateArrowManipulator(a,t),this._handles.add(e.events.on("drag",i=>{this._updateAfterDrag&&i.action==="end"&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)})),a}_createMaterial(t=1){const e=new ut({cullFace:pt.Back,renderOccluded:M.Transparent,isDecoration:!0});return this._handles.add(V(()=>g.toUnitRGBA(this._view.effectiveTheme.accentColor),a=>{a[3]*=t,e.setParameters({color:a})},dt)),e}get test(){}};class ne{constructor(){this._view=null,this._elevationInfo=null,this._lastDragEvent=null,this._next=null,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&this._lastDragEvent!=null&&this._next!=null){const e=this._lastDragEvent.mapEnd,a=this._snap(this._lastDragEvent.screenEnd);if(a!=null){const i={action:"update",mapStart:this._lastDragEvent.mapStart,mapEnd:t===!0?a:e,screenStart:this._lastDragEvent.screenEnd,screenEnd:this._lastDragEvent.screenEnd};this._next.execute(i)}}this._enabled=t}_snap(t){const e=this._view!=null?this._view.toMap(t,{exclude:[]}):null;return e!=null&&this._view!=null&&(e.z=Et(e,this._view,this._elevationInfo)),e}createDragEventPipelineStep(t,e){this._view=t,this._elevationInfo=e,this._lastDragEvent=null;const a=new $t;return this._next=a,[i=>{if(this._lastDragEvent=i.action!=="end"?{...i}:null,this._enabled){const s=this._snap(i.screenEnd);return s!=null?{action:i.action,mapStart:i.mapStart,mapEnd:s,screenStart:i.screenStart,screenEnd:i.screenEnd}:null}return{action:i.action,mapStart:i.mapStart,mapEnd:i.mapEnd,screenStart:i.screenStart,screenEnd:i.screenEnd}},a]}}class re extends F{constructor(t){super(),this._handles=new B,this._snapToScene=new ne,this._scale=1,this._radius=w,this._view=t.view,this._tool=t.tool,this._discMaterial=this._createMaterial(),this._discMaterialTransparent=this._createMaterial(.5),t.snapToScene!=null&&(this.snapToScene=t.snapToScene),t.radius!=null&&(this._radius=t.radius),this._createManipulator(),this.forEachManipulator(e=>this._tool.manipulators.add(e))}destroy(){this._handles=ot(this._handles),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null}forEachManipulator(t){t(this._manipulator,f.TRANSLATE_XY)}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get snapToScene(){return this._snapToScene.enabled}set snapToScene(t){this._snapToScene.enabled=t}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}get discManipulator(){return this._manipulator}createManipulatedObjectDragPipeline(t,e,a){if(!e.operations)return Z();const i=e.graphic,s=e.elevationInfo,l=e.operations.data.spatialReference;return Q(e,a,n=>this.createDragPipeline((o,c,h,u,p)=>({steps:c,cancel:h}=t(o,c,h,u,p),n(o,c,h)),s,l,i))}createDragPipeline(t,e,a,i){const s=this._view;return G(this._manipulator,(l,n,o,c,h)=>{const u=n.next(ct(s,l.elevationAlignedLocation)).next(ht(s,l.elevationAlignedLocation,e,a,i)).next(...this._snapToScene.createDragEventPipelineStep(s,e)).next(p=>({...p,manipulatorType:f.TRANSLATE_XY})).next(k());t(l,u,o,c,h)})}_updateManipulatorTransform(){const t=N(A.get(),L(U.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=t}_createManipulator(){const t=this._view;this._manipulator=new j({view:t,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:m(0,0,1)},worldOriented:!0}),this._updateManipulator()}_updateManipulator(){const t=Ct(this._discMaterial,_t,1,Qt,m(0,0,1),m(0,0,0));t.transformation=N(J(),m(this._radius,this._radius,this._radius)),this._manipulator.renderObjects=[new d(t,_.Focused),new d(t.instantiate({material:this._discMaterialTransparent}),_.Unfocused)],this._manipulator.radius=te*(this._radius/w)}_createMaterial(t=1){const e=new ut({cullFace:pt.Back,renderOccluded:M.Transparent,isDecoration:!0});return this._handles.add(V(()=>g.toUnitRGBA(this._view.effectiveTheme.accentColor),a=>{a[3]*=t,e.setParameters({color:a})},dt)),e}get test(){}}class le extends F{constructor(t){super(),this._radius=w,this.events=new lt,this._tool=t.tool,this._view=t.view;const e=new S({getTheme:()=>this._view.effectiveTheme});this._settings=e,t.radius!=null&&(this._radius=t.radius);const a=this._view.effectiveTheme.accentColor;this._materials={materialUnfocused:I(y(a,1,.25),M.Occlude),materialFocused:I(y(a,1,0),M.Occlude),materialOccludedUnfocused:I(y(a,.7,0),e.zManipulator.renderOccluded),materialOccludedFocused:I(y(a,.85,0),e.zManipulator.renderOccluded)},this._themeHandle=V(()=>this._view.effectiveTheme.accentColor,i=>{const s=y(i,1,.25),l=y(i,1,0),n=y(i,.7,0),o=y(i,.85,0),{materialUnfocused:c,materialFocused:h,materialOccludedUnfocused:u,materialOccludedFocused:p}=this._materials;c.setParameters({color:s}),h.setParameters({color:l}),u.setParameters({color:n}),p.setParameters({color:o})}),this._createManipulator(),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this._themeHandle=Pt(this._themeHandle),this._manipulator.applyObjectTransform=ce,this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()})}forEachManipulator(t){t(this._manipulator,f.TRANSLATE_Z)}createManipulatedObjectDragPipeline(t,e,a){if(!e.operations)return Z();const i=e.operations.data.spatialReference;return Q(e,a,s=>this.createDragPipeline((l,n,o,c,h)=>({steps:n,cancel:o}=t(l,n,o,c,h),s(l,n,o)),i))}createDragPipeline(t,e){const a=this._view;return G(this._manipulator,(i,s,l,n,o)=>{const c=s.next(h=>({...h,manipulatorType:f.TRANSLATE_Z})).next(Dt(a,i.renderLocation,e)).next(k());t(i,c,l,n,o)})}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}_updateManipulator(){const t=this._settings,e=this._radius/w,a=t.zManipulator.height*e,i=t.zManipulator.coneHeight*e,s=t.zManipulator.coneWidth*e,l=t.zManipulator.width*e,n=[m(0,0,0),m(0,0,a)],o=[m(0,0,0),m(0,0,a+i)],c=(tt=>{const b=J();return Rt(b,b,[0,0,a]),zt(b,b,Math.PI/2),b})(),{materialUnfocused:h,materialFocused:u,materialOccludedUnfocused:p,materialOccludedFocused:v}=this._materials,E=It(h,n,l/2,16,!1),x=Lt(h,i,s/2,16,!1);x.transformation=c,this._manipulator.renderObjects=[new d(x,_.Unfocused),new d(E,_.Unfocused),new d(x.instantiate({material:u}),_.Focused),new d(E.instantiate({material:u}),_.Focused),new d(x.instantiate({material:p}),_.Unfocused),new d(E.instantiate({material:p}),_.Unfocused),new d(x.instantiate({material:v}),_.Focused),new d(E.instantiate({material:v}),_.Focused)],this._manipulator.radius=l/2+2,this._manipulator.collisionType={type:"line",paths:[o]}}_createManipulator(){const t=this._view,e=new j({view:t,autoScaleRenderObjects:!1,worldSized:!1,selectable:!1,cursor:"ns-resize",elevationInfo:this.elevationInfo,worldOriented:!0,collisionPriority:1.6});e.applyObjectTransform=a=>{const i=t.state.camera,s=st;t.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation,s);const l=Ut(i.eye,s),n=i.computeRenderPixelSizeAtDist(l),o=Xt(C,s,i.eye);at(o,o);const c=oe;t.renderCoordsHelper.worldUpAtPosition(st,c);const h=Math.abs(jt(o,c)),u=it(C,o,c),p=it(C,u,c),v=Yt(h,.01,1),E=1-Math.sqrt(1-v*v)/v/i.fullWidth,x=this._settings,tt=this._radius/w,b=x.zManipulator.width*tt;Ft(p,at(p,p),(1/E-1)*l+n*b),a[12]-=C[0],a[13]-=C[1],a[14]-=C[2]},this._manipulator=e,this._updateManipulator()}get test(){}}function y(r,t,e){const a=Wt(r,e);return a.a*=t,g.toUnitRGBA(a)}const st=K(),C=K(),oe=K(),ce=()=>{};class Fe extends F{constructor(t){super(),this._handles=new B,this._interactive=!0;const{tool:e,view:a,snapToScene:i,radius:s}=t;this._view=a,this.xyManipulation=new re({tool:e,view:a,snapToScene:i,radius:s}),this.xyAxisManipulation=new se({tool:e,view:a,radius:s}),this.zManipulation=new le({tool:e,view:a,radius:s}),this.xyManipulation.available=t.xyAvailable,this.xyAxisManipulation.available=t.xyAxisAvailable,this.zManipulation.available=t.zAvailable,this._autoHideXYAxis(),this.forEachManipulator(l=>this._handles.add(l.events.on("grab-changed",()=>this._updateManipulatorInteractivity())))}destroy(){this._handles.destroy(),this.xyManipulation.destroy(),this.xyAxisManipulation.destroy(),this.zManipulation.destroy()}createManipulatedObjectDragPipeline(t,e,a){return q([this.xyManipulation.createManipulatedObjectDragPipeline((i,s,l,n,o)=>t(T.XY,i,s,l,n,o),e,a),this.xyAxisManipulation.createManipulatedObjectDragPipeline((i,s,l,n,o)=>t(T.XY_AXIS,i,s,l,n,o),e,a),this.zManipulation.createManipulatedObjectDragPipeline((i,s,l,n,o)=>t(T.Z,i,s,l,n,o),e,a)])}createDragPipeline(t,e,a,i){return q([this.xyManipulation.createDragPipeline((s,l,n,o,c)=>t(T.XY,s,l,n,o,c),e,a,i),this.xyAxisManipulation.createDragPipeline((s,l,n,o,c)=>t(T.XY_AXIS,s,l,n,o,c),e,a,i),this.zManipulation.createDragPipeline((s,l,n,o,c)=>t(T.Z,s,l,n,o,c),a)])}set snapToScene(t){this.xyManipulation.snapToScene=t}set angle(t){this.xyAxisManipulation.angle=t}set interactive(t){this._interactive!==t&&(this._interactive=t,this._updateManipulatorInteractivity())}set radius(t){this.xyAxisManipulation.radius=t,this.xyManipulation.radius=t,this.zManipulation.radius=t}set displayScale(t){this.xyManipulation.displayScale=t,this.xyAxisManipulation.displayScale=t}forEachManipulator(t){this.xyManipulation.forEachManipulator(e=>t(e,f.TRANSLATE_XY)),this.xyAxisManipulation.forEachManipulator(e=>t(e,f.TRANSLATE_XY)),this.zManipulation.forEachManipulator(e=>t(e,f.TRANSLATE_Z))}get _xyAxisVisible(){const t=this.xyManipulation.someManipulator(e=>e.focused)||this.xyAxisManipulation.someManipulator(e=>e.focused);return this._view.inputManager&&this._view.inputManager.latestPointerType==="touch"||t}_autoHideXYAxis(){const t=this.xyAxisManipulation,e=this.xyManipulation;if(qt("esri-mobile"))return;const a=[];e.forEachManipulator(s=>a.push(s)),t.forEachManipulator(s=>a.push(s));const i=()=>{const s=[];this._xyAxisVisible||t.forEachManipulator(l=>s.push(l.disableDisplay())),this._handles.remove(nt),this._handles.add(s,nt)};for(const s of a)this._handles.add(s.events.on("focus-changed",i));this._view.inputManager&&this._handles.add(Nt(()=>{var s;return(s=this._view.inputManager)==null?void 0:s.latestPointerType},i)),i()}_updateManipulatorInteractivity(){const t=this.grabbing;this.forEachManipulator(e=>{e.interactive=!t&&this._interactive||e.grabbing})}static radiusForSymbol(t){const e=t!=null&&t.type==="point-3d"&&t.symbolLayers;return e&&e.some(a=>a.type==="icon")?ie:w}}const nt="disable-xy-axis-display";var T;(function(r){r[r.XY=0]="XY",r[r.XY_AXIS=1]="XY_AXIS",r[r.Z=2]="Z"})(T||(T={}));export{f as A,gt as I,ve as P,w as a,Xe as b,T as c,Se as d,De as e,Ce as f,Pe as g,$e as h,ye as i,S as j,Re as k,Ae as l,ze as m,Q as n,ie as o,Te as p,Ie as q,Qt as r,be as s,F as t,Fe as u,xe as v,Le as w,Oe as x,Ee as y,Ue as z};
