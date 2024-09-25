import{e as $,S as gt,q0 as Mt,G as f,y as z,a as mt,d1 as M,q1 as wt,ne as R,q2 as O,op as vt,q3 as yt,q4 as At,kO as B,aS as rt,u as ot,a3 as G,gX as W,og as Z,q5 as lt,q6 as St,q7 as k,q8 as Tt,q9 as xt,dw as et,c6 as L,dq as q,ol as A,qa as p,qb as bt,on as U,ok as Ot,d0 as m,om as N,du as ct,mn as ht,Z as V,P as ut,dA as J,cJ as Et,cS as $t,qc as Ct,ir as Dt,mz as Pt,qd as zt,qe as Rt,qf as It,qg as Lt,cP as qt,c5 as at,cU as Xt,c4 as it,cV as jt,qh as Ft,c7 as K,dl as Ut,by as Yt,bA as Wt}from"./index-CY8jQoH7.js";import{e as j,b as _,f as I}from"./ShadedColorMaterial.glsl-bG6trUdA.js";import{D as dt,G as Nt}from"./dragEventPipeline3D-Cr0VR7_F.js";import{M as pt}from"./ExtendedLineVisualElement-CtMU5uvk.js";var g;(function(r){r[r.TRANSLATE_Z=0]="TRANSLATE_Z",r[r.TRANSLATE_XY=1]="TRANSLATE_XY",r[r.SCALE=2]="SCALE",r[r.ROTATE=3]="ROTATE",r[r.SCALE_ROTATE=4]="SCALE_ROTATE"})(g||(g={}));let F=class{constructor(){this._available=!0}set location(t){this._forEachManipulator3D(e=>e.location=t)}set elevationAlignedLocation(t){this._forEachManipulator3D(e=>e.elevationAlignedLocation=t)}set elevationInfo(t){this._forEachManipulator3D(e=>e.elevationInfo=t)}get renderLocation(){let t;return this._forEachManipulator3D(e=>{t||(t=e.renderLocation)}),t}get available(){return this._available}set available(t){this._available=t,this._forEachManipulator3D(e=>e.available=t)}get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}get selected(){return this.someManipulator(t=>t.selected)}hasManipulator(t){return this.someManipulator(e=>e===t)}someManipulator(t){let e=!1;return this.forEachManipulator(a=>{!e&&t(a)&&(e=!0)}),e}_forEachManipulator3D(t){this.forEachManipulator((e,a)=>{e instanceof j&&t(e,a)})}};const D=.3;function P(r,t){t&&Object.assign(r,t)}let Ht=class{constructor(t){this.height=90,this.coneHeight=40,this.coneWidth=23,this.width=3,this.renderOccluded=M.Opaque,this.color=t.accent}},Y=class{constructor({colors:t,...e}){this.size=11,this.outlineSize=1,this.collisionPadding=9,this.color=t.accent,this.outlineColor=t.outline,this.renderOccluded=M.Opaque,this.hoverOutlineColor=t.selectedOutline,P(this,e)}applyColor(t){this._apply(this.color,t)}applyOutline(t){this._apply(this.outlineColor,t)}applyHoverOutline(t){this._apply(this.hoverOutlineColor,t)}_apply(t,e){e.setParameters({color:O(t),renderOccluded:this.renderOccluded})}};class Bt{constructor({colors:t,...e}){this.size=40,this.height=.2,this.offset=.25,this.collisionPadding=2,this.renderOccluded=M.Transparent,this.minSquaredEdgeLength=900,this.color=R(t.accent,.5),this.hoverColor=t.accent,P(this,e)}applyColor(t){this._apply(this.color,t)}applyHover(t){this._apply(this.hoverColor,t)}_apply(t,e){e.setParameters({color:O(t),renderOccluded:this.renderOccluded})}}let Gt=class{constructor(t){this.vertex=new Y({colors:t,color:t.accent,outlineColor:t.outline}),this.edge=new Y({colors:t,color:wt(R(t.accent,2/3),.5),outlineColor:R(t.outline,.5),size:8,collisionPadding:8}),this.selected=new Y({colors:t,color:t.selected,outlineColor:t.outline}),this.edgeOffset=new Bt({colors:t})}},H=class{constructor({colors:t,...e}){this.width=1.5,this.stipplePattern=vt(3.3),this.falloff=0,this.innerWidth=1.5,this.renderOccluded=M.OccludeAndTransparent,this.color=t.selected,this.stippleOffColor=t.outline,this.innerColor=t.selected,P(this,e)}apply(t){t.color=O(this.color),t.width=this.width,t.stipplePattern=this.stipplePattern,t.stippleOffColor=O(this.stippleOffColor),t.falloff=this.falloff,t.innerWidth=this.innerWidth,t.innerColor=O(this.innerColor),t.renderOccluded=this.renderOccluded}},Zt=class{constructor({colors:t,...e}){this.size=4,this.outlineSize=1,this.shape="square",this.color=t.selected,this.outlineColor=t.outline,P(this,e)}apply(t){t.color=O(this.color),t.size=this.size,t.outlineSize=this.outlineSize,t.outlineColor=O(this.outlineColor),t.primitive=this.shape}};class X{constructor({colors:t,...e}){this.innerWidth=1,this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=D,this.globalAlphaContrastBoost=1.5,this.radius=3,this.innerColor=t.selected,this.glowColor=t.accent,this.heightFillColor=t.accent,P(this,e)}apply(t,e=1){const a={glowColor:f.toUnitRGB(this.glowColor),glowFalloff:this.glowFalloff,glowWidth:this.glowWidth,innerColor:f.toUnitRGB(this.innerColor),innerWidth:this.innerWidth,globalAlpha:this.globalAlpha*e*this.glowColor.a,globalAlphaContrastBoost:this.globalAlphaContrastBoost,intersectsLineRadius:this.radius};"style"in t?t.style=a:t.laserlineStyle=a}}class kt{constructor(t){this.outline=new H({colors:t,color:t.stippleOff,renderOccluded:M.OccludeAndTransparentStencil,stippleOffColor:t.stippleOn,innerWidth:0}),this.staged=new H({colors:t,color:t.stippleOn,renderOccluded:M.OccludeAndTransparentStencil,innerColor:t.stagedSolid,stippleOffColor:t.stippleOff}),this.shadowStyle=new X({colors:t,globalAlpha:D,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:1})}}class Vt{constructor(t){this.outline=new Zt({colors:t,color:t.selected,outlineColor:t.outline,outlineSize:1,shape:"circle",size:4}),this.shadowStyle=new X({colors:t,globalAlpha:D,glowColor:t.accent,glowFalloff:1.5,glowWidth:6,innerColor:t.selected,innerWidth:1,radius:2})}}let Jt=class extends H{constructor({colors:t,...e}){super({colors:t}),this.extensionType=pt.GROUND_RAY,P(this,e)}},Kt=class{constructor(t){this.laserlineAlphaMultiplier=1.5,this.heightPlaneAngleCutoff=20,this.lineObjects=new kt(t),this.pointObjects=new Vt(t),this.heightPlane=new X({colors:t,globalAlpha:D,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:1}),this.heightBox=new X({colors:t,globalAlpha:D,glowColor:t.accent,glowFalloff:8,glowWidth:8,innerColor:t.selected,innerWidth:0,heightFillColor:t.accent}),this.zVerticalLine=new Jt({colors:t,color:R(t.accent,5*D/3),falloff:2,innerColor:R(t.selected,0),renderOccluded:M.OccludeAndTransparent,stipplePattern:null,width:5,extensionType:pt.GROUND_RAY})}},S=class extends gt{constructor(t){super(t)}get colors(){const t=this.getTheme().accentColor,e=t.a;return{accent:t,contrast:Mt(t),selected:f.fromArray([255,255,255,e]),selectedOutline:f.fromArray([255,255,255,e]),staged:f.fromArray([12,207,255,e]),stagedSolid:f.fromArray([12,207,255,1]),outline:f.fromArray([0,0,0,.5*e]),stippleOn:f.fromArray([255,255,255,1]),stippleOff:f.fromArray([0,0,0,.5])}}get visualElements(){return new Kt(this.colors)}get manipulators(){return new Gt(this.colors)}get zManipulator(){return new Ht(this.colors)}};$([z()],S.prototype,"colors",null),$([z()],S.prototype,"visualElements",null),$([z()],S.prototype,"manipulators",null),$([z()],S.prototype,"zManipulator",null),$([z()],S.prototype,"getTheme",void 0),S=$([mt("esri.views.3d.interactive.editingTools.settings")],S);const Qt=128,w=70,te=80,_t=.02,ee=54,ae=100,ie=Math.ceil(w/3*2),ft=160,Se=.5,Te=24,xe=9,be=ft+30,Oe=ft+53,Ee=60,$e=23,Ce=5*Math.PI/12,De=1*Math.PI/3,Pe=10,ze=.2,Re=30,Ie=53,Le=.2,qe=.3,Xe=200,je=3,Fe=1e6;function Q(r,t,e){const a=(i,s)=>{t({action:i,object:r,dxScreen:s.screenDeltaX,dyScreen:s.screenDeltaY})};return e((i,s,o)=>(s.next(n=>(n.action==="start"&&a("start",n),n)).next(yt(r)).next(n=>{switch(n.action){case"start":case"update":(n.translationX||n.translationY||n.translationZ)&&a("update",n);break;case"end":a("end",n)}return n}),{steps:s,cancel:o=o.next(At(r)).next(n=>(a("end",{screenDeltaX:0,screenDeltaY:0}),n))}))}function Ue(r){if((r==null?void 0:r.axis)==null)return 1;const{mapStart:t,mapEnd:e,axis:a}=r,i=[e.x-t.x,e.y-t.y];return i[0]*a[0]+i[1]*a[1]>0?1:-1}let se=class extends F{constructor(t){super(),this._handles=new B,this._arrowManipulatorInfos=new Array,this._angle=0,this._scale=1,this._radius=w,this._updateAfterDrag=!1,this.events=new rt,this._tool=t.tool,this._view=t.view,this._opaqueMaterial=this._createMaterial(),this._transparentMaterial=this._createMaterial(.5),t.radius!=null&&(this._radius=t.radius),this._createManipulators(),this.forEachManipulator(e=>this._tool.manipulators.add(e))}set orthogonalAvailable(t){this._arrowManipulatorInfos.length>=3&&(this._arrowManipulatorInfos[1].manipulator.available=t,this._arrowManipulatorInfos[3].manipulator.available=t)}destroy(){this._handles=ot(this._handles),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._arrowManipulatorInfos.length=0}forEachManipulator(t){for(const{manipulator:e}of this._arrowManipulatorInfos)t(e,g.TRANSLATE_XY)}createManipulatedObjectDragPipeline(t,e,a){if(!e.operations)return G();const i=e.operations.data.spatialReference,s=e.graphic;return Q(e,a,o=>this.createDragPipeline((n,l,c,h,u)=>({steps:l,cancel:c}=t(n,l,c,h,u),o(n,l,c)),e.elevationInfo,i,s))}createDragPipeline(t,e,a,i){return W(this._arrowManipulatorInfos.map(({manipulator:s},o)=>Z(s,(n,l,c,h,u)=>{const d=l.next(v=>({...v,manipulatorType:g.TRANSLATE_XY})).next(lt(this._view,n.elevationAlignedLocation)).next(dt(this._view,n.elevationAlignedLocation,e,a,i)).next(St(n.location,this.angle+(o+1)*Math.PI*.5)).next(k());t(n,d,c,h,u)})))}get angle(){return this._angle}set angle(t){this._angle=t,this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get radius(){return this._radius}set radius(t){this._radius!==t&&(this._radius=t,this._updateManipulators())}_updateManipulators(){for(let t=0;t<this._arrowManipulatorInfos.length;t++)this._updateArrowManipulator(this._arrowManipulatorInfos[t],t);this._updateManipulatorTransform()}_updateArrowManipulator({manipulator:t,transform:e},a){const i=this._radius/w,s=ee*i,o=s*Math.sqrt(3)/2,n=Tt(this._opaqueMaterial,o,s/2,s/2,_t);xt(n,et(A.get(),L(q.get(),0,-o/3,0))),t.renderObjects=[new _(n,p.Focused),new _(n.instantiate({material:this._transparentMaterial}),p.Unfocused)],t.radius=o/3*2*1.2;const l=bt(A.get(),a*Math.PI/2),c=et(A.get(),L(q.get(),0,ae*i,0));U(e,l,c)}_createManipulators(){for(let t=0;t<4;t++){const e=this._createArrowManipulator(t);this._arrowManipulatorInfos.push(e)}this._updateManipulatorTransform()}_updateManipulatorTransform(){const t=this.angle,e=Ot(A.get(),t,m(0,0,1));if(e==null)return;const a=N(A.get(),L(q.get(),this.displayScale,this.displayScale,this.displayScale)),i=U(A.get(),a,e);for(const s of this._arrowManipulatorInfos){const o=U(A.get(),i,s.transform);s.manipulator.modelTransform=o}}_createArrowManipulator(t){const e=new j({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:m(0,0,1)}}),a={manipulator:e,transform:J()};return this._updateArrowManipulator(a,t),this._handles.add(e.events.on("drag",i=>{this._updateAfterDrag&&i.action==="end"&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)})),a}_createMaterial(t=1){const e=new ct({cullFace:ht.Back,renderOccluded:M.Transparent,isDecoration:!0});return this._handles.add(V(()=>f.toUnitRGBA(this._view.effectiveTheme.accentColor),a=>{a[3]*=t,e.setParameters({color:a})},ut)),e}get test(){}};class ne{constructor(){this._view=null,this._elevationInfo=null,this._lastDragEvent=null,this._next=null,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&this._lastDragEvent!=null&&this._next!=null){const e=this._lastDragEvent.mapEnd,a=this._snap(this._lastDragEvent.screenEnd);if(a!=null){const i={action:"update",mapStart:this._lastDragEvent.mapStart,mapEnd:t===!0?a:e,screenStart:this._lastDragEvent.screenEnd,screenEnd:this._lastDragEvent.screenEnd};this._next.execute(i)}}this._enabled=t}_snap(t){const e=this._view!=null?this._view.toMap(t,{exclude:[]}):null;return e!=null&&this._view!=null&&(e.z=Et(e,this._view,this._elevationInfo)),e}createDragEventPipelineStep(t,e){this._view=t,this._elevationInfo=e,this._lastDragEvent=null;const a=new $t;return this._next=a,[i=>{if(this._lastDragEvent=i.action!=="end"?{...i}:null,this._enabled){const s=this._snap(i.screenEnd);return s!=null?{action:i.action,mapStart:i.mapStart,mapEnd:s,screenStart:i.screenStart,screenEnd:i.screenEnd}:null}return{action:i.action,mapStart:i.mapStart,mapEnd:i.mapEnd,screenStart:i.screenStart,screenEnd:i.screenEnd}},a]}}class re extends F{constructor(t){super(),this._handles=new B,this._snapToScene=new ne,this._scale=1,this._radius=w,this._view=t.view,this._tool=t.tool,this._discMaterial=this._createMaterial(),this._discMaterialTransparent=this._createMaterial(.5),t.snapToScene!=null&&(this.snapToScene=t.snapToScene),t.radius!=null&&(this._radius=t.radius),this._createManipulator(),this.forEachManipulator(e=>this._tool.manipulators.add(e))}destroy(){this._handles=ot(this._handles),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null}forEachManipulator(t){t(this._manipulator,g.TRANSLATE_XY)}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get snapToScene(){return this._snapToScene.enabled}set snapToScene(t){this._snapToScene.enabled=t}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}get discManipulator(){return this._manipulator}createManipulatedObjectDragPipeline(t,e,a){if(!e.operations)return G();const i=e.graphic,s=e.elevationInfo,o=e.operations.data.spatialReference;return Q(e,a,n=>this.createDragPipeline((l,c,h,u,d)=>({steps:c,cancel:h}=t(l,c,h,u,d),n(l,c,h)),s,o,i))}createDragPipeline(t,e,a,i){const s=this._view;return Z(this._manipulator,(o,n,l,c,h)=>{const u=n.next(lt(s,o.elevationAlignedLocation)).next(dt(s,o.elevationAlignedLocation,e,a,i)).next(...this._snapToScene.createDragEventPipelineStep(s,e)).next(d=>({...d,manipulatorType:g.TRANSLATE_XY})).next(k());t(o,u,l,c,h)})}_updateManipulatorTransform(){const t=N(A.get(),L(q.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=t}_createManipulator(){const t=this._view;this._manipulator=new j({view:t,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:m(0,0,1)},worldOriented:!0}),this._updateManipulator()}_updateManipulator(){const t=Ct(this._discMaterial,_t,1,Qt,m(0,0,1),m(0,0,0));t.transformation=N(J(),m(this._radius,this._radius,this._radius)),this._manipulator.renderObjects=[new _(t,p.Focused),new _(t.instantiate({material:this._discMaterialTransparent}),p.Unfocused)],this._manipulator.radius=te*(this._radius/w)}_createMaterial(t=1){const e=new ct({cullFace:ht.Back,renderOccluded:M.Transparent,isDecoration:!0});return this._handles.add(V(()=>f.toUnitRGBA(this._view.effectiveTheme.accentColor),a=>{a[3]*=t,e.setParameters({color:a})},ut)),e}get test(){}}class oe extends F{constructor(t){super(),this._radius=w,this.events=new rt,this._tool=t.tool,this._view=t.view;const e=new S({getTheme:()=>this._view.effectiveTheme});this._settings=e,t.radius!=null&&(this._radius=t.radius);const a=this._view.effectiveTheme.accentColor;this._materials={materialUnfocused:I(y(a,1,.25),M.Occlude),materialFocused:I(y(a,1,0),M.Occlude),materialOccludedUnfocused:I(y(a,.7,0),e.zManipulator.renderOccluded),materialOccludedFocused:I(y(a,.85,0),e.zManipulator.renderOccluded)},this._themeHandle=V(()=>this._view.effectiveTheme.accentColor,i=>{const s=y(i,1,.25),o=y(i,1,0),n=y(i,.7,0),l=y(i,.85,0),{materialUnfocused:c,materialFocused:h,materialOccludedUnfocused:u,materialOccludedFocused:d}=this._materials;c.setParameters({color:s}),h.setParameters({color:o}),u.setParameters({color:n}),d.setParameters({color:l})}),this._createManipulator(),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this._themeHandle=Dt(this._themeHandle),this._manipulator.applyObjectTransform=ce,this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()})}forEachManipulator(t){t(this._manipulator,g.TRANSLATE_Z)}createManipulatedObjectDragPipeline(t,e,a){if(!e.operations)return G();const i=e.operations.data.spatialReference;return Q(e,a,s=>this.createDragPipeline((o,n,l,c,h)=>({steps:n,cancel:l}=t(o,n,l,c,h),s(o,n,l)),i))}createDragPipeline(t,e){const a=this._view;return Z(this._manipulator,(i,s,o,n,l)=>{const c=s.next(h=>({...h,manipulatorType:g.TRANSLATE_Z})).next(Nt(a,i.renderLocation,e)).next(k());t(i,c,o,n,l)})}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}_updateManipulator(){const t=this._settings,e=this._radius/w,a=t.zManipulator.height*e,i=t.zManipulator.coneHeight*e,s=t.zManipulator.coneWidth*e,o=t.zManipulator.width*e,n=[m(0,0,0),m(0,0,a)],l=[m(0,0,0),m(0,0,a+i)],c=(tt=>{const b=J();return Pt(b,b,[0,0,a]),zt(b,b,Math.PI/2),b})(),{materialUnfocused:h,materialFocused:u,materialOccludedUnfocused:d,materialOccludedFocused:v}=this._materials,E=Rt(h,n,o/2,16,!1),x=It(h,i,s/2,16,!1);x.transformation=c,this._manipulator.renderObjects=[new _(x,p.Unfocused),new _(E,p.Unfocused),new _(x.instantiate({material:u}),p.Focused),new _(E.instantiate({material:u}),p.Focused),new _(x.instantiate({material:d}),p.Unfocused),new _(E.instantiate({material:d}),p.Unfocused),new _(x.instantiate({material:v}),p.Focused),new _(E.instantiate({material:v}),p.Focused)],this._manipulator.radius=o/2+2,this._manipulator.collisionType={type:"line",paths:[l]}}_createManipulator(){const t=this._view,e=new j({view:t,autoScaleRenderObjects:!1,worldSized:!1,selectable:!1,cursor:"ns-resize",elevationInfo:this.elevationInfo,worldOriented:!0,collisionPriority:1.6});e.applyObjectTransform=a=>{const i=t.state.camera,s=st;t.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation,s);const o=Lt(i.eye,s),n=i.computeRenderPixelSizeAtDist(o),l=qt(C,s,i.eye);at(l,l);const c=le;t.renderCoordsHelper.worldUpAtPosition(st,c);const h=Math.abs(Xt(l,c)),u=it(C,l,c),d=it(C,u,c),v=Ut(h,.01,1),E=1-Math.sqrt(1-v*v)/v/i.fullWidth,x=this._settings,tt=this._radius/w,b=x.zManipulator.width*tt;jt(d,at(d,d),(1/E-1)*o+n*b),a[12]-=C[0],a[13]-=C[1],a[14]-=C[2]},this._manipulator=e,this._updateManipulator()}get test(){}}function y(r,t,e){const a=Ft(r,e);return a.a*=t,f.toUnitRGBA(a)}const st=K(),C=K(),le=K(),ce=()=>{};class We extends F{constructor(t){super(),this._handles=new B,this._interactive=!0;const{tool:e,view:a,snapToScene:i,radius:s}=t;this._view=a,this.xyManipulation=new re({tool:e,view:a,snapToScene:i,radius:s}),this.xyAxisManipulation=new se({tool:e,view:a,radius:s}),this.zManipulation=new oe({tool:e,view:a,radius:s}),this.xyManipulation.available=t.xyAvailable,this.xyAxisManipulation.available=t.xyAxisAvailable,this.zManipulation.available=t.zAvailable,this._autoHideXYAxis(),this.forEachManipulator(o=>this._handles.add(o.events.on("grab-changed",()=>this._updateManipulatorInteractivity())))}destroy(){this._handles.destroy(),this.xyManipulation.destroy(),this.xyAxisManipulation.destroy(),this.zManipulation.destroy()}createManipulatedObjectDragPipeline(t,e,a){return W([this.xyManipulation.createManipulatedObjectDragPipeline((i,s,o,n,l)=>t(T.XY,i,s,o,n,l),e,a),this.xyAxisManipulation.createManipulatedObjectDragPipeline((i,s,o,n,l)=>t(T.XY_AXIS,i,s,o,n,l),e,a),this.zManipulation.createManipulatedObjectDragPipeline((i,s,o,n,l)=>t(T.Z,i,s,o,n,l),e,a)])}createDragPipeline(t,e,a,i){return W([this.xyManipulation.createDragPipeline((s,o,n,l,c)=>t(T.XY,s,o,n,l,c),e,a,i),this.xyAxisManipulation.createDragPipeline((s,o,n,l,c)=>t(T.XY_AXIS,s,o,n,l,c),e,a,i),this.zManipulation.createDragPipeline((s,o,n,l,c)=>t(T.Z,s,o,n,l,c),a)])}set snapToScene(t){this.xyManipulation.snapToScene=t}set angle(t){this.xyAxisManipulation.angle=t}set interactive(t){this._interactive!==t&&(this._interactive=t,this._updateManipulatorInteractivity())}set radius(t){this.xyAxisManipulation.radius=t,this.xyManipulation.radius=t,this.zManipulation.radius=t}set displayScale(t){this.xyManipulation.displayScale=t,this.xyAxisManipulation.displayScale=t}forEachManipulator(t){this.xyManipulation.forEachManipulator(e=>t(e,g.TRANSLATE_XY)),this.xyAxisManipulation.forEachManipulator(e=>t(e,g.TRANSLATE_XY)),this.zManipulation.forEachManipulator(e=>t(e,g.TRANSLATE_Z))}get _xyAxisVisible(){const t=this.xyManipulation.someManipulator(e=>e.focused)||this.xyAxisManipulation.someManipulator(e=>e.focused);return this._view.inputManager&&this._view.inputManager.latestPointerType==="touch"||t}_autoHideXYAxis(){const t=this.xyAxisManipulation,e=this.xyManipulation;if(Yt("esri-mobile"))return;const a=[];e.forEachManipulator(s=>a.push(s)),t.forEachManipulator(s=>a.push(s));const i=()=>{const s=[];this._xyAxisVisible||t.forEachManipulator(o=>s.push(o.disableDisplay())),this._handles.remove(nt),this._handles.add(s,nt)};for(const s of a)this._handles.add(s.events.on("focus-changed",i));this._view.inputManager&&this._handles.add(Wt(()=>{var s;return(s=this._view.inputManager)==null?void 0:s.latestPointerType},i)),i()}_updateManipulatorInteractivity(){const t=this.grabbing;this.forEachManipulator(e=>{e.interactive=!t&&this._interactive||e.grabbing})}static radiusForSymbol(t){const e=t!=null&&t.type==="point-3d"&&t.symbolLayers;return e&&e.some(a=>a.type==="icon")?ie:w}}const nt="disable-xy-axis-display";var T;(function(r){r[r.XY=0]="XY",r[r.XY_AXIS=1]="XY_AXIS",r[r.Z=2]="Z"})(T||(T={}));export{g as A,ft as I,Se as P,w as a,Ue as b,T as c,be as d,Ie as e,ze as f,Re as g,Pe as h,Te as i,S as j,Le as k,xe as l,qe as m,Q as n,ie as o,Oe as p,Xe as q,Qt as r,$e as s,F as t,We as u,Ee as v,je as w,Ce as x,De as y,Fe as z};
