import{cL as b,cW as F,c2 as J,cP as W,c5 as K,c7 as p,c6 as De,cV as N,qD as Fe,yw as We,cU as V,c4 as Re,kb as Ue,s4 as qe,ka as ke,ig as He,yx as Oe,ih as je,kY as de,pl as Be,J as Ne,pf as te,mU as ce,dt as Je,cB as Ke,h$ as ne,yy as ae,sx as Ze,yz as ue,db as Qe,hK as pe,yA as Ye,mb as Xe,yB as et,vM as ge,t0 as me,io as tt,ic as _e,dD as st,cx as it,yC as rt,iz as k,cu as nt,e as l,y as d,a as X,S as he,Z as I,$ as ye,aS as at,bz as fe,yD as ot,a6 as oe,ct as lt,D as ht,lh as ve,qq as dt,lf as ct,yE as ut,b7 as pt,xt as gt,xu as mt,df as Z,xw as se,xy as _t,yd as yt,yF as we,xC as ft,xB as z,xG as vt,_ as wt,yG as Lt,vq as H,xI as St,xJ as $t,yh as Pt,xK as Mt,xL as Ct,xN as bt,xO as xt,xP as At,xQ as Vt,xR as Gt,xF as D,xH as Dt,xW as Rt,lV as ie,xY as re,y0 as Ot,x_ as Et,yH as It,y3 as zt,pG as Ee,b3 as Q,d1 as R,yI as Tt,d4 as Le,d5 as Se,mA as Ft,dy as Wt,dz as $e,q2 as Ut,qR as Pe,q0 as Me,vN as qt,ne as Ce,dA as kt,op as Ht,sJ as jt,P as Bt,u as C,yJ as Nt,sB as be,dw as Jt,sK as Kt,yK as Zt,yL as Qt,yM as Yt,yN as Xt}from"./index-FXsJ6CNr.js";import{e as le,a as es}from"./interfaces-CK1wjSMZ.js";import{s as ts}from"./AnalysisView3D-CGz-pZh5.js";import{o as ss,k as xe}from"./euclideanAreaMeasurementUtils-DU_QJbTL.js";import{t as is}from"./projectionUtils-EA0StB0t.js";import{g as Ie}from"./quantityFormatUtils-2QkOAwak.js";import{f as Ae,_ as rs,m as ns}from"./Segment-DstnNNp2.js";import{a as as,f as T}from"./LineVisualElement-CNYeZUos.js";import"./TextOverlayItem-C1yPvzQ5.js";function Ve(t,e,s,r,i){b(j,t),F(B,t,e),J(j,s,j,i),J(B,s,B,i),W(r,B,j),K(r,r)}const j=p(),B=p();function os(t,e){const s=Ue(e);De(s,0,0,0);for(let i=0;i<t.length;++i)F(s,s,t[i]);N(s,s,1/t.length);let r=0;for(let i=0;i<t.length;++i)r=Math.max(r,Fe(s,t[i]));e[3]=Math.sqrt(r)}function ls(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");We(t[0],t[1],t[2],e)}function hs(t,e){return V(t,e)+t[3]}function ds(t,e,s,r){const i=us;return b(i.rings[0][0],t),b(i.rings[0][1],e),b(i.rings[0][2],s),b(i.rings[0][3],t),i.spatialReference=r,ss(i)}function cs(t,e=null,s=!0){const i=(n,a)=>{if(a[0]===0&&a[1]===0&&a[2]===0)return!1;for(let o=0;o<n.length;++o)if(V(a,n[o])<-1e-6)return!1;return!0};if(t.length===0)return!1;if(t.length===1)return e&&b(e,t[0]),!0;De($,0,0,0);for(let n=0;n<t.length;++n)F($,$,t[n]);if(K($,$),i(t,$))return e&&b(e,$),!0;if(!s)return!1;for(let n=0;n<t.length;++n)for(let a=0;a<t.length;++a)if(n!==a&&(Re($,t[n],t[a]),K($,$),i(t,$)))return e&&b(e,$),!0;return!1}const us={hasM:!1,hasZ:!0,rings:[[p(),p(),p(),p()]],spatialReference:null,type:"polygon"},$=p();class ps{get numVertices(){return this._length}get hasStagedVertex(){return this._hasCursorPoint}constructor(e){this.validMeasurement=!1,this.positionsWorld=[],this.positionsRender=[],this.positionsFittedWorld=[],this.positionsFittedRender=[],this.positionsGeodesic=[],this.positionsSpherical=[],this.positionsStereographic=[],this.pathSegmentLengths=[],this.geodesicPathSegmentLengths=[],this.perimeterSegmentLengths=[],this.intersectingSegments=new Set,this.geodesicIntersectingSegments=new Set,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.areaCentroidWorldCoords=p(),this.areaCentroidRenderCoords=p(),this.geodesicAreaCentroidRenderCoords=p(),this.fittingMode=null,this.area=null,this.geodesicArea=null,this.pathLength=null,this.geodesicPathLength=null,this.perimeterLength=null,this._length=0,this._centroidRenderCoords=p(),this._planeWorldCoords=qe(),this._worldUp=p(),this._worldTangent=p(),this._frame=[p(),p(),p()],this._pathVersion=-1,this._hasCursorPoint=!1,this._mode=null,this._tempU=p(),this._tempV=p(),this._tempVec3=p(),this._tempSphere=ke(),this._sceneView=e;const s=He(e.spatialReference);this._measurementSR=s,this._lengthMeasurementUnit=Oe(s)??"meters",this._areaMeasurementUnit=je(s)??"square-meters"}update(e,s,r,i,n,a){const o=s!=null,h=this._pathVersion===e.version,c=this._hasCursorPoint===o,u=this._mode===n;return!(h&&!a&&c&&u&&e.isValidPolygon)&&(this._pathVersion=e.version,this._hasCursorPoint=o,this._updateCursorSegmentLength(e,s),this._update(e,s,r,i,n),!0)}_update(e,s,r,i,n){const a=this._sceneView.renderSpatialReference,o=this._measurementSR,h=r.spatialReference;let c=e.numVertices;const u=!(s==null||s.equals(e.lastPoint)||c>2&&s.equals(e.firstPoint));u&&(c+=1);const g=!e.polygonIsClosed&&c>2,v=e.polygonIsClosed||g;this._resize(c);const y=de(h),_=h!=null&&Be(h)?h:null,M=_!=null&&Ne(h,y),{positionsGeodesic:w,positionsWorld:U,positionsRender:q,positionsSpherical:S}=this,G=(L,x)=>{gs(r.elevationProvider,L),k(L,U[x],o),k(L,q[x],a),M&&(k(L,w[x],_),k(L,S[x],y),K(S[x],S[x]))};e.forEachVertexPosition((L,x)=>G(L,x)),u&&G(s,c-1);const O=this._updatePathLengths(v);if(this.pathLength=this._length>1?te(O,this._lengthMeasurementUnit):null,M){const L=this._updateGeodesicPathLengths(v,_);this.geodesicPathLength=L!=null&&this._length>1?L:null}else this.geodesicPathLength=null;if(this._updateMode(n),!v)return this.area=null,this.geodesicArea=null,this.perimeterLength=null,this.triangleIndices=null,this.geodesicTriangleIndices=null,this.intersectingSegments.clear(),this.geodesicIntersectingSegments.clear(),void(this.validMeasurement=!1);this._updateAreaAndPerimeterLength(r,a,o,i),M&&this._updateGeodesicArea(r,_),this.validMeasurement=!0}getData(){return{validMeasurement:this.validMeasurement,numVertices:this.numVertices,hasStagedVertex:this.hasStagedVertex,positionsRender:this.positionsRender,positionsFittedWorld:this.positionsFittedWorld,positionsFittedRender:this.positionsFittedRender,intersectingSegments:this.intersectingSegments,geodesicIntersectingSegments:this.geodesicIntersectingSegments,triangleIndices:this.triangleIndices,geodesicTriangleIndices:this.geodesicTriangleIndices,areaCentroidRenderCoords:this.areaCentroidRenderCoords,geodesicAreaCentroidRenderCoords:this.geodesicAreaCentroidRenderCoords,area:this.area,geodesicArea:this.geodesicArea,pathLength:this.pathLength,geodesicPathLength:this.geodesicPathLength,perimeterLength:this.perimeterLength,actualMeasurementMode:this.actualMeasurementMode}}_resize(e){for(e<this._length&&(this.positionsWorld.length=e,this.positionsRender.length=e,this.positionsFittedWorld.length=e,this.positionsFittedRender.length=e,this.positionsGeodesic.length=e,this.positionsSpherical.length=e,this.positionsStereographic.length=e,this.pathSegmentLengths.length=e,this.geodesicPathSegmentLengths.length=e,this.perimeterSegmentLengths.length=e,this._length=e);this._length<e;)this.positionsWorld.push(p()),this.positionsRender.push(p()),this.positionsFittedWorld.push(ce()),this.positionsFittedRender.push(p()),this.positionsGeodesic.push(p()),this.positionsSpherical.push(p()),this.positionsStereographic.push(ce()),this.pathSegmentLengths.push(0),this.geodesicPathSegmentLengths.push(0),this.perimeterSegmentLengths.push(0),++this._length}_updatePathLengths(e){const s=this.positionsWorld,r=this.pathSegmentLengths;let i=0;const n=this._length;for(let a=0;a<n;++a){const o=r[a]=Je(s[a],s[(a+1)%n]);(a<n-1||e)&&(i+=o)}return i}_updateGeodesicPathLengths(e,s){const r=this.positionsGeodesic,i=this.geodesicPathSegmentLengths;let n=0;const a=this._length;for(let o=0;o<a;++o){const h=Ke(r[o],r[(o+1)%a],s);if(h==null)return null;const c=ne(h,"meters").value,u=i[o]=c;(o<a-1||e)&&(n+=u)}return te(n,"meters")}_updateAreaAndPerimeterLength(e,s,r,i){const n=e.renderCoordsHelper,a=this.positionsWorld,o=this.positionsRender,h=this.positionsFittedWorld,c=this.positionsFittedRender,u=this._planeWorldCoords,g=this._centroidRenderCoords;ae(o,g),n.worldUpAtPosition(g,this._worldUp),n.worldBasisAtPosition(g,Ze.X,this._worldTangent),Ve(g,this._worldUp,s,this._worldUp,r),Ve(g,this._worldTangent,s,this._worldTangent,r),a.length>2&&ls(a,u),this.fittingMode=this._selectFittingMode(u,a,this._worldUp,i);let v=0;if(this.fittingMode==="horizontal"){let S=-1/0;o.forEach((G,O)=>{const L=n.getAltitude(o[O]);L>S&&(S=L,v=O)})}const y=a[v];let _=u,M=this._worldTangent;this.fittingMode==="horizontal"?_=this._worldUp:this.fittingMode==="vertical"&&(_=this._tempVec3,M=this._worldUp,ue(u,this._worldUp,_)),b(this._frame[2],_),ue(M,_,this._frame[0]),Re(this._frame[1],this._frame[0],this._frame[2]),Qe(this._frame[1],this._frame[1]);const w=this._tempVec3,U=this._tempU,q=this._tempV;for(let S=0;S<this._length;++S){const G=h[S],O=c[S];W(w,a[S],y),pe(G,V(this._frame[0],w),V(this._frame[1],w)),N(U,this._frame[0],G[0]),N(q,this._frame[1],G[1]),F(w,U,q),F(w,w,y),J(w,r,O,s)}this.perimeterLength=this._length>0?this._updatePerimeterLengths():null,ae(c,this.areaCentroidRenderCoords),J(this.areaCentroidRenderCoords,s,this.areaCentroidWorldCoords,r),this._updateIntersectingSegments(),this.area=this.intersectingSegments.size===0?this._computeArea():null}_updateGeodesicArea(e,s){const{renderCoordsHelper:r,spatialReference:i}=e,{positionsSpherical:n,positionsStereographic:a}=this,o=this._tempVec3,h=cs(n,o);if(!h)return void(this.geodesicArea=null);const c=this._tempU,u=this._tempV;Ye(o,c,u);for(let g=0;g<this._length;++g){const v=V(n[g],c),y=V(n[g],u),_=V(n[g],o);pe(a[g],v/_,y/_)}N(o,o,Xe(i).radius),r.toRenderCoords(o,de(i),this.geodesicAreaCentroidRenderCoords),this._updateGeodesicIntersectingSegments(),this.geodesicArea=h&&this.geodesicIntersectingSegments.size===0?this._computeGeodesicArea(s):null}_updatePerimeterLengths(){const e=this.positionsFittedWorld,s=this.perimeterSegmentLengths;let r=0;for(let i=0;i<this._length;++i)r+=s[i]=et(e[i],e[(i+1)%this._length]);return te(r,this._lengthMeasurementUnit)}_updateIntersectingSegments(){const e=this.positionsFittedWorld,s=this.intersectingSegments;s.clear();for(let r=0;r<this._length;++r)for(let i=r+2;i<this._length;++i){if((i+1)%this._length===r)continue;const n=e[r],a=e[(r+1)%this._length],o=e[i],h=e[(i+1)%this._length];ge(n,a,o,h)&&(s.add(r),s.add(i))}}_computeArea(){const e=this.positionsFittedWorld,s=this.triangleIndices=me(xe(e));let r=0;for(let i=0;i<s.length;i+=3)r+=tt(e[s[i]],e[s[i+1]],e[s[i+2]]);return _e(r,this._areaMeasurementUnit)}_updateGeodesicIntersectingSegments(){const e=this.positionsStereographic,s=this.geodesicIntersectingSegments;s.clear();for(let r=0;r<this._length;++r)for(let i=r+2;i<this._length;++i){if((i+1)%this._length===r)continue;const n=e[r],a=e[(r+1)%this._length],o=e[i],h=e[(i+1)%this._length];ge(n,a,o,h)&&(s.add(r),s.add(i))}}_computeGeodesicArea(e){const s=this.positionsGeodesic,r=this.positionsStereographic,i=this.geodesicTriangleIndices=me(xe(r));let n=0;for(let a=0;a<i.length;a+=3){const o=ds(s[i[a]],s[i[a+1]],s[i[a+2]],e);if(o==null)return null;n+=ne(o,"square-meters").value}return _e(n,"square-meters")}_selectFittingMode(e,s,r,i){const n=s.map(u=>Math.abs(hs(e,u))).reduce((u,g)=>Math.max(u,g),0);os(s,this._tempSphere);const a=n/(2*this._tempSphere[3]),o=a<i.maxRelativeErrorCoplanar,h=a<i.maxRelativeErrorAlmostCoplanar;let c="horizontal";return o?c="oblique":h&&(c=Math.abs(V(r,e))>Math.cos(st(i.verticalAngleThreshold))?"horizontal":"vertical"),c}_updateCursorSegmentLength(e,s){var i;const r=e.lastPoint;e.isValidPolygon||r==null||s==null?(this.geodesicStagedSegmentLength=null,this.stagedSegmentLength=null):(this.geodesicStagedSegmentLength=it(r,s),this.stagedSegmentLength=(i=rt(r,s))==null?void 0:i.direct)}_updateMode(e){if(e===le.Auto){this.actualMeasurementMode="euclidean";let s=0;this.geodesicPathLength!=null&&(s+=this.geodesicPathLength.value),s>ms&&(this.actualMeasurementMode="geodesic")}else this.actualMeasurementMode=e===le.Euclidean?"euclidean":"geodesic";this.geodesicPathLength==null&&(this.actualMeasurementMode="euclidean"),this._mode=e}}function gs(t,e){e.hasZ||(e.z=nt(t,e,"ground")??0)}const ms=1e5;let E=class extends he{constructor(e){super(e)}initialize(){this._measurementDataManager=new ps(this.view),this.addHandles([this.analysisViewData.path.on("change",()=>this._update()),I(()=>this.analysisViewData.stagedPoint,()=>this._update(),ye),I(()=>this.analysisViewData.mode,()=>this._update(),ye)]),this._update()}_update(e=!1){const{analysisViewData:s,view:r}=this,i={maxRelativeErrorCoplanar:.005,maxRelativeErrorAlmostCoplanar:.01,verticalAngleThreshold:80};this._measurementDataManager.update(s.path,s.stagedPoint,r,i,s.mode,e)&&(s.measurementData=this._measurementDataManager.getData())}};l([d({constructOnly:!0})],E.prototype,"view",void 0),l([d({constructOnly:!0})],E.prototype,"analysis",void 0),l([d({constructOnly:!0})],E.prototype,"analysisViewData",void 0),E=l([X("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementController")],E);let P=class extends at.EventedAccessor{constructor(e={}){super(e),this._version=0,this._internalGeometryChange=!1,this._extent=fe()}set areaMeasurement(e){this._set("areaMeasurement",e),e!=null&&this.view!=null&&this._initialize(e,this.view)}set view(e){this._set("view",e),e!=null&&this.areaMeasurement!=null&&this._initialize(this.areaMeasurement,e)}get constructed(){return this.areaMeasurement!=null&&this.view!=null}get version(){return this._version}get isEmptyPolygon(){return!this.constructed||this._editGeometry.components.length===0}get isValidPolygon(){return this.constructed&&this.polygonIsClosed}get extent(){if(this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].vertices.length>0){const e=fe(this._extent);return this.forEachVertex(s=>{ot(e,s.pos)}),e}return null}get spatialReference(){return this.constructed?this._editGeometry.coordinateHelper.spatialReference:null}_initialize(e,s){this.removeAllHandles(),this.addHandles(I(()=>e.geometry,()=>{this._updateEditGeometryFromModelGeometry(e,s)},oe)),this._makeDirty(!0)}_makeDirty(e=!1){this.notifyChange("polygonIsClosed"),this.notifyChange("isValidPolygon"),this.notifyChange("initialized"),this.notifyChange("extent"),e&&this.notifyChange("numVertices")}_updateEditGeometryFromModelGeometry(e,s){if(this._version++,this._internalGeometryChange)return;this.removeHandles("EditGeometry");let r=e.geometry;if(r!=null){const i=lt(r,s.spatialReference);i==null&&is(e,r.spatialReference,ht.getLogger(this)),r=i}this._editGeometryOperations=r!=null?ve.fromGeometry(r,s.state.viewingMode):new ve(new dt("polygon",ct(!0,!1,s.spatialReference)),s.state.viewingMode),this._makeDirty(!0),this.emit("change"),this.addHandles(this._editGeometry.on("change",i=>{this._makeDirty(i.addedVertices!=null||i.removedVertices!=null),this._internalGeometryChange=!0,e.geometry=this.numVertices>0?this._editGeometry.geometry:null,this._internalGeometryChange=!1}),"EditGeometry")}get _editGeometry(){return this._editGeometryOperations.data}get vertices(){const e=[];return this.forEachVertex(s=>{e.push(s)}),e}get numVertices(){return this.constructed&&this._editGeometry.components.length>0?this._editGeometry.components[0].vertices.length:0}get polygonIsClosed(){return this._editGeometry.components.length>0&&this._editGeometry.components[0].isClosed()}get firstPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getFirstVertex();if(e!=null)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}get lastPoint(){if(this.constructed&&this._editGeometry.components.length>0){const e=this._editGeometry.components[0].getLastVertex();if(e!=null)return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}return null}getVertex(e){if(!this.constructed||this._editGeometry.components.length===0||this._editGeometry.components[0].vertices.length===0)return null;const s=this._editGeometry.components[0].vertices[0];let r=s;do{if(r.index===e)return r;r=r.rightEdge.rightVertex}while(r!==s&&r!=null);return null}getVertexPositionAsPoint(e){return this._editGeometry.coordinateHelper.vectorToPoint(e.pos)}getVertexPositionAsPointFromIndex(e){return this._editGeometry.coordinateHelper.vectorToPoint(this.getVertex(e).pos)}forEachVertex(e){this.constructed&&this._editGeometry.components.length>0&&this._editGeometry.components[0].iterateVertices(e)}forEachVertexPosition(e){const s=this._editGeometry.coordinateHelper;this.forEachVertex((r,i)=>{s.vectorToPoint(r.pos,Ge),e(Ge,i)})}clear(){this.areaMeasurement!=null&&(this.areaMeasurement.geometry=null)}add(e){if(!this.constructed)return null;if(this._editGeometry.components.length===0){const r=this.view;this._editGeometry.components.push(new ut(r.spatialReference,r.state.viewingMode))}const s=this._editGeometryOperations.appendVertex(this._editGeometry.coordinateHelper.pointToVector(e));return this.emit("change"),s}close(){if(!this.constructed||this._editGeometry.components.length===0)return null;const e=this._editGeometryOperations.closeComponent(this._editGeometry.components[0]);return this.emit("change"),e}ensureContains(e,s=""){let r=!1;if(this._editGeometry.components.forEach(i=>{i.iterateVertices(n=>{n===e&&(r=!0)})}),!r)throw new Error(`vertex doesnt exist ${s}`);return r}setVertexPosition(e,s){if(!this.constructed)return null;const r=this._editGeometryOperations.setVertexPosition(e,this._editGeometry.coordinateHelper.pointToVector(s));return this.emit("change"),r}equals(e){if(this.numVertices!==e.numVertices)return!1;let s=!0;return this.forEachVertexPosition((r,i)=>{const n=e.getVertexPositionAsPointFromIndex(i);r.equals(n)||(s=!1)}),!!s}};l([d({value:null})],P.prototype,"areaMeasurement",null),l([d({value:null})],P.prototype,"view",null),l([d()],P.prototype,"isEmptyPolygon",null),l([d()],P.prototype,"isValidPolygon",null),l([d()],P.prototype,"extent",null),l([d()],P.prototype,"spatialReference",null),l([d()],P.prototype,"numVertices",null),l([d()],P.prototype,"polygonIsClosed",null),P=l([X("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementPathHelper")],P);const Ge=new pt;function ze(t){const e=new gt,{vertex:s,fragment:r}=e;return mt(s,t),e.attributes.add(Z.POSITION,"vec3"),e.attributes.add(Z.UV0,"vec2"),e.varyings.add("vUV","vec2"),t.multipassEnabled&&e.varyings.add("depth","float"),s.code.add(se`
    void main(void) {
      vUV = uv0;
      ${t.multipassEnabled?"depth = (view * vec4(position, 1.0)).z;":""}
      gl_Position = proj * view * vec4(position, 1.0);
    }
  `),e.include(_t,t),r.uniforms.add(new yt("size",i=>i.size)),r.uniforms.add(new we("color1",i=>i.color1)),r.uniforms.add(new we("color2",i=>i.color2)),r.include(ft),t.transparencyPassType===z.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),r.code.add(se`
    void main() {
      ${t.multipassEnabled?"terrainDepthTest(depth);":""}
      vec2 uvScaled = vUV / (2.0 * size);

      vec2 uv = fract(uvScaled - 0.25);
      vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
      float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
      float t = mix(abs(ab.x + ab.y), 0.5, fade);

      fragColor = mix(color2, color1, t);
      ${t.transparencyPassType===z.ColorAlpha?se`
              fragColor = premultiplyAlpha(fragColor);
              fragAlpha = fragColor.a;`:""}
    }
  `),e}const _s=Object.freeze(Object.defineProperty({__proto__:null,build:ze},Symbol.toStringTag,{value:"Module"}));class ee extends St{initializeProgram(e){return new $t(e.rctx,ee.shader.get().build(this.configuration),Pt)}_setPipelineState(e){const s=this.configuration,r=e===z.NONE,i=e===z.FrontFace;return Mt({blending:s.transparent?r?fs:Ct(e):null,depthTest:{func:bt(e)},depthWrite:r?s.writeDepth?xt:null:At(e),drawBuffers:Vt(e),colorWrite:Gt,polygonOffset:r||i?s.polygonOffset?ys:null:{factor:-1,units:-25}})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}ee.shader=new vt(_s,()=>wt(()=>Promise.resolve().then(()=>Vs),void 0));const ys={factor:0,units:-25},fs=Lt(H.SRC_ALPHA,H.ONE,H.ONE_MINUS_SRC_ALPHA,H.ONE_MINUS_SRC_ALPHA);class A extends Dt{constructor(){super(...arguments),this.transparencyPassType=z.NONE,this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1,this.multipassEnabled=!1,this.cullAboveGround=!1}}l([D({count:z.COUNT})],A.prototype,"transparencyPassType",void 0),l([D()],A.prototype,"transparent",void 0),l([D()],A.prototype,"writeDepth",void 0),l([D()],A.prototype,"polygonOffset",void 0),l([D()],A.prototype,"multipassEnabled",void 0),l([D()],A.prototype,"cullAboveGround",void 0),l([D({constValue:!1})],A.prototype,"occlusionPass",void 0);class vs extends Rt{constructor(e){super(e,new Ls),this.produces=new Map([[ie.OPAQUE_MATERIAL,s=>re(s)&&!this.parameters.transparent],[ie.TRANSPARENT_MATERIAL,s=>re(s)&&this.parameters.transparent&&this.parameters.writeDepth],[ie.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,s=>re(s)&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new A}getConfiguration(e,s){return this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.transparencyPassType=s.transparencyPassType,this._configuration.multipassEnabled=s.multipassEnabled,this._configuration.cullAboveGround=s.multipassTerrain.cullAboveGround,this._configuration}createGLMaterial(e){return new ws(e)}createBufferWriter(){return new Ot(Et)}}class ws extends It{beginSlot(e){return this.ensureTechnique(ee,e)}}let Ls=class extends zt{constructor(){super(...arguments),this.size=Ee(1,1),this.color1=Q(.75,.75,.75,1),this.color2=Q(.5,.5,.5,1),this.transparent=!1,this.writeDepth=!0,this.polygonOffset=!1}};class Ss extends as{constructor(e){super(e),this._checkerBoardMaterial=null,this._renderOccluded=R.OccludeAndTransparent,this._geometry=null,this._size=Ee(1,1),this._color1=Q(1,.5,0,.5),this._color2=Q(1,1,1,.5),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){Tt(this._size,e),this._updateMaterial()}get color1(){return this._color1}set color1(e){Le(e,this._color1)||(Se(this._color1,e),this._updateMaterial())}get color2(){return this._color2}set color2(e){Le(e,this._color2)||(Se(this._color2,e),this._updateMaterial())}_updateMaterial(){this._checkerBoardMaterial!=null&&this._checkerBoardMaterial.setParameters({size:this._size,color1:this._color1,color2:this._color2,renderOccluded:this._renderOccluded})}createExternalResources(){this._checkerBoardMaterial=new vs({size:this._size,color1:this._color1,color2:this._color2,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:this.isDecoration})}destroyExternalResources(){this._checkerBoardMaterial=null}forEachExternalMaterial(e){this._checkerBoardMaterial!=null&&e(this._checkerBoardMaterial)}createGeometries(e){if(this._geometry==null||this._checkerBoardMaterial==null)return;const s=$s;Ft(s,this.transform);const r=this._geometry,i=[],n=p();r.position.forEach(h=>{W(n,h,s),i.push(n[0],n[1],n[2])});const a=[];r.uv.forEach(h=>{a.push(h[0],h[1])});const o=new Wt(this._checkerBoardMaterial,[[Z.POSITION,new $e(i,r.triangleIndices,3,!0)],[Z.UV0,new $e(a,r.triangleIndices,2,!0)]]);e.addGeometry(o)}}const $s=p();let f=class extends he{get _parameters(){const{accentColor:t,textColor:e}=this.view.effectiveTheme,s=Ut(t),r=Pe(t,.5),i=Pe(Me(t),.5),n=Me(e,qt.Low);return{accentColor:s,transparentAccentColor:r,transparentContrastColor:i,intersectingLineColor:[1,.2,0,1],textColor:e,textBackgroundColor:Ce(n,.6),textCalloutColor:Ce(n,.5),pathLineWidth:3,perimeterLineWidth:2,projectionLineWidth:2,projectionLineStippleSize:5,labelDistance:25}}get visible(){return this.analysisViewData.visible}get _renderUnits(){const t=this.view.renderCoordsHelper.spatialReference;return Oe(t)??"meters"}get testData(){}constructor(t){super(t),this._path=null,this._intersectedPath=null,this._perimeter=null,this._intersectedPerimeter=null,this._projectionLines=null,this._measurementArea=null,this._areaLabel=null,this._perimeterLengthLabel=null,this._pathSegments=[],this._perimeterSegments=[],this._origin=p(),this._originTransform=kt(),this.messages=null,this.viewData=As,this.areaLabel=null,this.perimeterLengthLabel=null,this.loadingMessages=!0}initialize(){const{analysisViewData:t,_parameters:e,view:s}=this;this._path=new T({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._intersectedPath=new T({view:s,attached:!0,width:e.pathLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._perimeter=new T({view:s,attached:!0,width:e.perimeterLineWidth,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._intersectedPerimeter=new T({view:s,attached:!0,width:e.perimeterLineWidth,color:e.intersectingLineColor,polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._projectionLines=new T({view:s,attached:!0,width:e.projectionLineWidth,stipplePattern:Ht(e.projectionLineStippleSize),polygonOffset:!0,renderOccluded:R.OccludeAndTransparent,isDecoration:!0}),this._measurementArea=new Ss({view:s,attached:!0,isDecoration:!0});const r={attached:!0,view:s,isDecoration:!0};this._areaLabel=new Ae({...r,fontSize:Y.Large}),this._perimeterLengthLabel=new Ae({...r,fontSize:Y.Small}),this.addHandles([I(()=>[t.mode,this.visible,t.unit,t.measurementData,t.stagedPoint],()=>this._update(),oe),I(()=>{var i;return(i=s.state)==null?void 0:i.camera},()=>this._updateLabels(),oe),jt(()=>this._updateMessageBundle()),I(()=>this._parameters,({accentColor:i,transparentAccentColor:n,transparentContrastColor:a,textColor:o,textBackgroundColor:h,textCalloutColor:c})=>{const{_path:u,_intersectedPath:g,_perimeter:v,_projectionLines:y,_measurementArea:_,_areaLabel:M,_perimeterLengthLabel:w}=this;u.color=i,g.color=i,v.color=i,y.color=i,_.color1=n,_.color2=a,M.textColor=o,M.backgroundColor=h,M.calloutColor=c,w.textColor=o,w.backgroundColor=h,w.calloutColor=c},Bt)]),this._updateMessageBundle()}destroy(){this._measurementArea=C(this._measurementArea),this._path=C(this._path),this._intersectedPath=C(this._intersectedPath),this._perimeter=C(this._perimeter),this._intersectedPerimeter=C(this._intersectedPerimeter),this._areaLabel=C(this._areaLabel),this._perimeterLengthLabel=C(this._perimeterLengthLabel),this._projectionLines=C(this._projectionLines),this.set("view",null)}_update(){if(this.destroyed||!this.view.ready||!this.view.renderCoordsHelper)return;const{analysisViewData:{measurementData:t},analysisViewData:e}=this;t!=null&&(this._updateViewData(t,e.path),this._updateOrigin(),this._updatePathSegments(),this._updatePerimeterSegments(),this._updateArea(),this._updateProjectionLines(),this._updateLabels())}_updateViewData(t,e){const s=t.validMeasurement,r=t.actualMeasurementMode==="geodesic",i=r?t.geodesicArea:t.area;let n=1;if(i){const o=Ms(i,this.analysisViewData.unit);n=Nt(Math.sqrt(o.value)/Math.sqrt(300)),n*=Math.sqrt(be(1,o.unit,"square-meters")),n=be(n,"meters",this._renderUnits)}const a={validMeasurement:s,numVertices:t.numVertices,hasStagedVertex:t.hasStagedVertex,path:e,mode:t.actualMeasurementMode,positionsRender:t.positionsRender,positionsFittedWorld:t.positionsFittedWorld,positionsFittedRender:t.positionsFittedRender,intersectingSegments:r?t.geodesicIntersectingSegments:t.intersectingSegments,triangleIndices:r?t.geodesicTriangleIndices:t.triangleIndices,areaCentroid:r?t.geodesicAreaCentroidRenderCoords:t.areaCentroidRenderCoords,perimeterLengthLabelSegmentIndex:0,area:r?t.geodesicArea:t.area,pathLength:r?t.geodesicPathLength:t.pathLength,perimeterLength:t.perimeterLength,checkerSize:n};this._set("viewData",a)}_updateOrigin(){const t=this.viewData;ae(t.positionsRender,this._origin),Jt(this._originTransform,this._origin),this._measurementArea.transform=this._originTransform,this._projectionLines.transform=this._originTransform}_createSegments(t){const e=this.viewData,s=this.view.renderCoordsHelper.spatialReference,r=e.mode,i=[],n=[],a=[],o=e.numVertices,h=e.validMeasurement?o:o-1;for(let u=0;u<h;++u){const g=e[t][u],v=e[t][(u+1)%o];let y=null;switch(r){case"euclidean":y=new ns(g,v);break;case"geodesic":y=new rs(g,v,s)}e.intersectingSegments.has(u)?a.push(y):n.push(y),i.push(y)}let c=null;return e.validMeasurement&&e.hasStagedVertex&&h>=2?c=i[i.length-2]:e.hasStagedVertex&&h>=1&&(c=i[i.length-1]),{all:i,nonIntersecting:n,intersecting:a,stagedSegment:c}}_updatePathSegments(){const{visible:t}=this,e=this._createSegments("positionsRender");this._path.setGeometryFromSegments(e.nonIntersecting,this._origin),this._path.visible=t,this._intersectedPath.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPath.visible=t,this._pathSegments=e.all}_updatePerimeterSegments(){const t=this.visible&&this.viewData.mode==="euclidean",e=this._createSegments("positionsFittedRender");this._perimeter.setGeometryFromSegments(e.nonIntersecting,this._origin),this._perimeter.visible=t,this._intersectedPerimeter.setGeometryFromSegments(e.intersecting,this._origin),this._intersectedPerimeter.visible=t,this._perimeterSegments=e.all}_updateArea(){const t=this.viewData;switch(t.mode){case"euclidean":this._updateAreaEuclidean(t);break;case"geodesic":this._updateAreaGeodesic()}}_updateAreaEuclidean(t){const e=this.visible;t.validMeasurement&&t.intersectingSegments.size===0&&t.triangleIndices?(this._measurementArea.geometry={uv:t.positionsFittedWorld,position:t.positionsFittedRender,triangleIndices:t.triangleIndices},this._measurementArea.size=[t.checkerSize,t.checkerSize],this._measurementArea.visible=e):this._measurementArea.visible=!1}_updateAreaGeodesic(){this._measurementArea.visible=!1}_updateProjectionLines(){const t=this.viewData,e=this.visible,s=t.mode,r=t.numVertices;if(r>0&&t.validMeasurement&&s==="euclidean"){const i=[];for(let n=0;n<r;++n){const a=p();W(a,t.positionsRender[n],this._origin);const o=p();W(o,t.positionsFittedRender[n],this._origin),i.push([a,o])}this._projectionLines.geometry=i,this._projectionLines.visible=e}else this._projectionLines.geometry=null,this._projectionLines.visible=!1}_updateLabels(){if(this.destroyed)return;const{viewData:t}=this,{area:e,path:s}=t;if(!s)return;const r=this.visible,i=Ps(this.messages,e,this.analysisViewData.unit);if(i!=null?(this._areaLabel.geometry={type:"point",point:t.areaCentroid},this._areaLabel.text=i,this._areaLabel.visible=t.validMeasurement&&t.intersectingSegments.size===0&&r):this._areaLabel.visible=!1,this._set("areaLabel",i),t.validMeasurement&&t.intersectingSegments.size===0){const n=t.mode==="geodesic"||!t.validMeasurement,a=n?t.pathLength:t.perimeterLength,o=Cs(this.messages,a,this.analysisViewData.unit);this._set("perimeterLengthLabel",o),this._perimeterLengthLabel.distance=this._parameters.labelDistance,this._perimeterLengthLabel.anchor="top",this._perimeterLengthLabel.text=o,this._perimeterLengthLabel.visible=!0;let h=!0;for(let c=0;c<t.numVertices;++c){const u=(t.perimeterLengthLabelSegmentIndex+c)%t.numVertices,g=n?this._pathSegments[u]:this._perimeterSegments[u];if(h=!0,this._perimeterLengthLabel.geometry={type:"segment",segment:g,sampleLocation:"center"},!this._perimeterLengthLabel.overlaps(this._areaLabel))break;h=!1}this._perimeterLengthLabel.visible=h&&r}else this._perimeterLengthLabel.visible=!1}_updateMessageBundle(){this.loadingMessages=!0,Kt("esri/core/t9n/Units").then(t=>{this.messages=t,this.view&&this._update()}).finally(()=>{this.loadingMessages=!1})}};function Ps(t,e,s){return t&&e&&Ie(t,e,Te(e,s))}function Ms(t,e){return ne(t,Te(t,e))}function Te(t,e){switch(e){case"metric":return Qt(t.value,t.unit);case"imperial":return Zt(t.value,t.unit);default:return e}}function Cs(t,e,s){return t&&e&&Ie(t,e,bs(e,s))}function bs(t,e){const s=xs(e);switch(s){case"metric":return Xt(t.value,t.unit);case"imperial":return Yt(t.value,t.unit);default:return s}}function xs(t){switch(t){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";case"square-meters":return"meters";case"square-kilometers":return"kilometers"}throw new Error("unhandled area unit")}var Y;l([d()],f.prototype,"_parameters",null),l([d()],f.prototype,"view",void 0),l([d()],f.prototype,"messages",void 0),l([d()],f.prototype,"analysis",void 0),l([d()],f.prototype,"viewData",void 0),l([d()],f.prototype,"analysisViewData",void 0),l([d({readOnly:!0})],f.prototype,"areaLabel",void 0),l([d({readOnly:!0})],f.prototype,"perimeterLengthLabel",void 0),l([d()],f.prototype,"loadingMessages",void 0),l([d()],f.prototype,"visible",null),l([d()],f.prototype,"_renderUnits",null),f=l([X("esri.views.3d.analysis.AreaMeasurement.support.AreaMeasurementVisualization")],f),function(t){t[t.Small=12]="Small",t[t.Large=16]="Large"}(Y||(Y={}));const As={validMeasurement:!1,numVertices:0,hasStagedVertex:!1,path:null,mode:null,positionsRender:null,positionsFittedWorld:null,positionsFittedRender:null,intersectingSegments:null,triangleIndices:null,areaCentroid:null,perimeterLengthLabelSegmentIndex:null,checkerSize:null,area:null,pathLength:null,perimeterLength:null};let m=class extends ts(he){constructor(t){super(t),this.type="area-measurement-view-3d",this.analysis=null,this.measurementData=null,this.lastDraggedVertex=null,this.stagedPoint=null,this.mode=le.Auto}initialize(){const{analysis:t,view:e}=this;this.path=new P({view:e,areaMeasurement:t}),this.analysisVisualization=new f({view:e,analysis:t,analysisViewData:this}),this.analysisController=new E({view:e,analysis:t,analysisViewData:this})}destroy(){this.analysisController=C(this.analysisController),this.analysisVisualization=C(this.analysisVisualization),this.path.destroy()}get updating(){var t;return!!((t=this.analysisVisualization)!=null&&t.loadingMessages)}get result(){const{measurementData:t}=this;return t==null?{area:null,mode:null,perimeter:null}:t.actualMeasurementMode==="euclidean"?{area:t.area,perimeter:t.perimeterLength,mode:"euclidean"}:{area:t.geodesicArea,perimeter:t.pathLength,mode:"geodesic"}}get viewData(){return this.analysisVisualization.viewData}get validMeasurement(){return this.path.isValidPolygon}get unit(){return this.analysis.unit??this._defaultUnit}get testData(){}};l([d({readOnly:!0})],m.prototype,"type",void 0),l([d({constructOnly:!0,nonNullable:!0})],m.prototype,"analysis",void 0),l([d()],m.prototype,"updating",null),l([d()],m.prototype,"analysisVisualization",void 0),l([d()],m.prototype,"analysisController",void 0),l([d()],m.prototype,"result",null),l([d()],m.prototype,"measurementData",void 0),l([d()],m.prototype,"viewData",null),l([d()],m.prototype,"validMeasurement",null),l([d()],m.prototype,"path",void 0),l([d()],m.prototype,"lastDraggedVertex",void 0),l([d()],m.prototype,"stagedPoint",void 0),l([d()],m.prototype,"mode",void 0),l([d()],m.prototype,"unit",null),l([d(es)],m.prototype,"_defaultUnit",void 0),m=l([X("esri.views.3d.analysis.AreaMeasurementAnalysisView3D")],m);const ks=m,Vs=Object.freeze(Object.defineProperty({__proto__:null,build:ze},Symbol.toStringTag,{value:"Module"}));export{ks as default};
