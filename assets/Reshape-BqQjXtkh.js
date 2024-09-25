import{e as l,y as d,a as H,dI as T,gX as Z,Z as V,a6 as X,$ as j,ld as Y,le as K,b7 as w,e4 as G,aS as N,V as S,iD as R,bA as q,u as E,lf as B,lg as J,iA as Q,lh as W,li as tt,eT as et,j1 as I,lj as it,lk as st,bG as O,F as k,ll as ot,bF as rt,dF as b,lm as nt,D as at,k as ht,iE as pt,lc as ct,P as lt}from"./index-CY8jQoH7.js";import{i as dt}from"./drawUtils-DPRVGbxF.js";import{h as vt,U as yt}from"./GraphicMover-d5LgX9d-.js";import{T as mt,u as A,V as _t,G as gt}from"./automaticAreaMeasurementUtils-lAnAlYoW.js";import{i as ut,p as ft}from"./SelectedVertexTooltipInfo-CxoxYAWY.js";import{i as xt}from"./TranslateTooltipInfo-BOkvZaPi.js";import{r as Gt,h as bt}from"./Tooltip-5JKBKY0M.js";import{c as L,m as Vt}from"./automaticLengthMeasurementUtils-HpCLTHLb.js";import{h as wt}from"./settings-BDhvhHlJ.js";import"./GraphicManipulator-z40BDuRw.js";import"./quantityFormatUtils-wNdHqHUo.js";import"./euclideanAreaMeasurementUtils-DOiB3nMR.js";let x=class extends Gt{constructor(t){super(t),this.type="translate-vertex",this.distance=T,this.elevation=null,this.area=null,this.totalLength=null}clear(){this.distance=T,this.elevation=null,this.area=null,this.totalLength=null}};l([d()],x.prototype,"type",void 0),l([d()],x.prototype,"distance",void 0),l([d()],x.prototype,"elevation",void 0),l([d()],x.prototype,"area",void 0),l([d()],x.prototype,"totalLength",void 0),x=l([H("esri.views.interactive.tooltip.infos.TranslateVertexTooltipInfo")],x);function Mt(t){const e={sketchOptions:t,viewType:"2d"};return{movePoint:new ut(e),selectedVertex:new ft(e),translateGraphic:new xt(e),translateVertices:new x(e)}}function St(t,e){let i=!1;function s(){const o=e(),r=o.sketchOptions.tooltips.effectiveEnabled?o.activeTooltipInfo:null;return{...o,activeTooltipInfo:r}}return Z([V(()=>{var r,n;const o=s();return{context:o,geometry:(r=o.graphic)==null?void 0:r.geometry,vertexGeometry:(n=o.selectedVertex)==null?void 0:n.geometry}},({context:o})=>{i=!0,Et(o),t.info=o.activeTooltipInfo,i=!1},X),V(()=>{const o=s(),{activeTooltipInfo:r}=o;if(r&&"key"in r)return{context:o,key:r.key}},(o,r)=>{o&&!i&&r&&o.key!==r.key&&It(o.context)},j),mt(t)])}function Et(t){const e=t.activeTooltipInfo;if(e){switch(e==null?void 0:e.type){case"move-point":return Tt(e,t);case"selected-vertex":return kt(e,t)}e.sketchOptions=t.sketchOptions}}function Tt(t,{graphic:e}){F(t,e,e==null?void 0:e.geometry)}function kt(t,{graphic:e,selectedVertex:i}){F(t,e,i==null?void 0:i.geometry);const s=e==null?void 0:e.geometry;switch(s==null?void 0:s.type){case"polygon":t.geometryType="polygon",t.totalLength.visible=!1,t.area.actual=A(s);break;case"polyline":t.geometryType="polyline",t.totalLength.actual=L(s),t.area.visible=!1}}function F(t,e,i){var s;e&&(i==null?void 0:i.type)==="point"&&(t.setLocationFromPoint(i),t.elevation.actual=Y(i),t.elevation.visible=!!((s=e.geometry)!=null&&s.hasZ),t.elevation.readOnly=!1,t.elevation.showAsZ=!0)}function It(t){function e(r,n){const a=n==null?void 0:n.geometry;if(!a||a.type!=="point")return;const{dx:h,dy:c,dz:p}=_t(r,a);if(h===0&&c===0&&p===0)return;const{x:v,y:_,z:g,m:u,spatialReference:f}=a,M=new w({x:v+h,y:_+c,z:g!=null?g+p:void 0,m:u,spatialReference:f});t.updateGeometry(n,M,a,h,c)}const{activeTooltipInfo:i,graphic:s,selectedVertex:o}=t;switch(i==null?void 0:i.type){case"move-point":return e(i,s);case"selected-vertex":return e(i,o)}}function Ot(t,e,i){t.clear(),z(t,e,i)}function Ct(t,e,i,s){t.clear(),(i==null?void 0:i.type)==="polygon"?t.area=A(i):(i==null?void 0:i.type)==="polyline"&&(t.totalLength=L(i)),z(t,e,s)}function z(t,e,i){if(!i)return;const{x:s,y:o}=i.origin,r=e.toMap(i),n=e.toMap(K(s,o)),a=Vt(n,r);t.distance=a??T}class $t{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape-start"}}class Ht{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape"}}class Rt{constructor(e,i,s){this.graphic=e,this.mover=i,this.selected=s,this.type="reshape-stop"}}class At{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move-start"}}class Lt{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move"}}class Ft{constructor(e,i,s){this.mover=e,this.dx=i,this.dy=s,this.type="move-stop"}}class zt{constructor(e){this.added=e,this.type="vertex-select"}}class Pt{constructor(e){this.removed=e,this.type="vertex-deselect"}}class Ut{constructor(e,i,s,o){this.added=e,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-add"}}class Dt{constructor(e,i,s,o){this.removed=e,this.graphic=i,this.oldGraphic=s,this.vertices=o,this.type="vertex-remove"}}const m=wt.reshapeGraphics,Zt={vertices:{default:new G({style:"circle",size:m.vertex.size,color:m.vertex.color,outline:{color:m.vertex.outlineColor,width:1}}),hover:new G({style:"circle",size:m.vertex.hoverSize,color:m.vertex.hoverColor,outline:{color:m.vertex.hoverOutlineColor,width:1}}),selected:new G({style:"circle",size:m.selected.size,color:m.selected.color,outline:{color:m.selected.outlineColor,width:1}})},midpoints:{default:new G({style:"circle",size:m.midpoint.size,color:m.midpoint.color,outline:{color:m.midpoint.outlineColor,width:1}}),hover:new G({style:"circle",size:m.midpoint.size,color:m.midpoint.color,outline:{color:m.midpoint.outlineColor,width:1}})}};let y=class extends N.EventedAccessor{constructor(t){super(t),this._activeOperationInfo=null,this._editGeometryOperations=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._snappingContext=null,this._snappingGraphicsLayer=null,this._hoverGraphic=null,this._snappingTask=null,this._stagedVertex=null,this.tooltip=null,this.activeTooltipInfo=null,this.callbacks={onReshapeStart(){},onReshape(){},onReshapeStop(){},onMoveStart(){},onMove(){},onMoveStop(){},onGraphicClick(){}},this.enableMidpoints=!0,this.enableMovement=!0,this.enableVertices=!0,this.graphic=null,this.layer=null,this.midpointGraphics=new S,this.midpointSymbol=new G({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}}),this.selectedVertices=new S,this.snappingManager=null,this.symbols=Zt,this.sketchOptions=new R,this.type="reshape",this.vertexGraphics=new S,this.view=null}initialize(){const t=this.view;this._highlightHelper=new vt({view:t}),this._setup(),this.tooltip=new bt({view:this.view}),this.tooltipInfos=Mt(this.sketchOptions),this.addHandles([q(()=>t==null?void 0:t.ready,()=>{const{layer:e,view:i}=this;pt(i,e),this.addHandles(i.on("key-down",s=>this._keyDownHandler(s),ct.TOOL))},{once:!0,initial:!0}),V(()=>this.graphic,()=>this.refresh()),V(()=>this.layer,(e,i)=>{i&&(this._clearSelection(),this._resetGraphics(i)),this.refresh()}),V(()=>this.enableMidpoints,()=>this.refresh()),St(this.tooltip,()=>this._tooltipsContext),V(()=>this.view.effectiveTheme.accentColor,()=>this._updateSymbolsForTheme(),lt)]),this._updateTooltip()}destroy(){var t;this._reset(),(t=this._mover)==null||t.destroy(),this._mover=null,this.tooltip=E(this.tooltip)}get _coordinateHelper(){var t,e,i;return((t=this._editGeometryOperations)==null?void 0:t.data.coordinateHelper)??B(!!((e=this.graphic.geometry)!=null&&e.hasZ),!!((i=this.graphic.geometry)!=null&&i.hasM),this.view.spatialReference)}get _selectedVertex(){return this.selectedVertices.length===1?this.selectedVertices.at(0):void 0}get _tooltipsContext(){return{sketchOptions:this.sketchOptions,activeTooltipInfo:this.activeTooltipInfo,graphic:this.graphic,selectedVertex:this._selectedVertex,updateGeometry:(t,e,i,s,o)=>{this._setUpGeometryHelper();const r=t===this.graphic;if(r?this._emitMoveStartEvent(0,0):this._emitReshapeStartEvent(t),this._syncGeometryAfterVertexMove(t,e,s,o,!0),r){const{view:a}=this,h=a.toScreen(i),c=a.toScreen(e),p=((c==null?void 0:c.x)??0)-((h==null?void 0:h.x)??0),v=((c==null?void 0:c.y)??0)-((h==null?void 0:h.y)??0);this._emitMoveEvent(p,v),this._emitMoveStopEvent(p,v)}else this._emitReshapeEvent(t),this._emitReshapeStopEvent(t);this._editGeometryOperations=E(this._editGeometryOperations)}}}set highlightsEnabled(t){var e;(e=this._highlightHelper)==null||e.removeAll(),this._set("highlightsEnabled",t),this._setUpHighlights()}get state(){const t=this.view.ready,e=!(!this.graphic||!this.layer);return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){const e=[];return this.graphic&&e.push(this.graphic),e.concat(this.vertexGraphics.items,this.midpointGraphics.items),e.length>0&&e.includes(t)}refresh(){this._reset(),this._setup()}reset(){this.graphic=null}clearSelection(){this._clearSelection()}removeSelectedVertices(){const{selectedVertices:t}=this;t.length&&this._removeVertices(t)}_setup(){const{graphic:t,layer:e}=this;if(!e||(t==null?void 0:t.geometry)==null)return;const i=t.geometry;i.type!=="mesh"&&i.type!=="extent"?(i.type==="polygon"&&J(i),this._setUpHighlights(),this._setupGraphics(),this._setupMover()):this._logGeometryTypeError()}_setUpHighlights(){var t;this.highlightsEnabled&&this.graphic&&((t=this._highlightHelper)==null||t.add(this.graphic))}_setUpGeometryHelper(){const t=this.graphic.geometry;if(t==null||t.type==="mesh"||t.type==="extent")return void this._logGeometryTypeError();const e=t.type==="multipoint"?new Q({paths:t.points,spatialReference:t.spatialReference}):t;this._editGeometryOperations=W.fromGeometry(e,tt.Local)}_saveSnappingContextForHandle(t,e){var s;this._snappingGraphicsLayer=new et({listMode:"hide",internal:!0,title:"Reshape snapping layer"}),this.view.map.layers.add(this._snappingGraphicsLayer);const i=this._editGeometryOperations;I(i),this._snappingContext=new it({editGeometryOperations:i,elevationInfo:{mode:"on-the-ground",offset:0},pointer:((s=e.viewEvent)==null?void 0:s.pointerType)||"mouse",excludeFeature:this.graphic,feature:this.graphic,visualizer:new st(this._snappingGraphicsLayer),vertexHandle:this._getVertexFromEditGeometry(t)})}_reset(){var t;this._clearSelection(),(t=this._highlightHelper)==null||t.removeAll(),this._updateTooltip(),this._resetGraphics(),this._resetSnappingStateVars(),this._activeOperationInfo=null,this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetSnappingStateVars(){var t;this.snappingManager!=null&&this.snappingManager.doneSnapping(),this._snappingGraphicsLayer!=null&&((t=this.view)!=null&&t.map&&this.view.map.layers.remove(this._snappingGraphicsLayer),this._snappingGraphicsLayer.destroy()),this._editGeometryOperations=E(this._editGeometryOperations),this._snappingTask=O(this._snappingTask),this._snappingTask=null,this._snappingContext=null,this._stagedVertex=null}_resetGraphics(t){this._removeMidpointGraphics(t),this._removeVertexGraphics(t),this.selectedVertices.removeAll(),this._updateTooltip()}_removeMidpointGraphics(t){const e=t||this.layer;e&&e.removeMany(this.midpointGraphics.items),this.midpointGraphics.items.forEach(i=>i.destroy()),this.midpointGraphics.removeAll()}_removeVertexGraphics(t){const e=t||this.layer;e&&e.removeMany(this.vertexGraphics.items),this.vertexGraphics.items.forEach(i=>i.destroy()),this.vertexGraphics.removeAll()}_setupGraphics(){const t=this.graphic.geometry;if(t!=null&&(t.type==="polyline"||t.type==="polygon")){const e=C(t);this.enableMidpoints&&this._setUpMidpointGraphics(e),this.enableVertices&&this._setUpVertexGraphics(e)}}_setUpMidpointGraphics(t){this._removeMidpointGraphics();const e=this._createMidpointGraphics(t);this.midpointGraphics.addMany(e),this.layer.addMany(e)}_setUpVertexGraphics(t){this._removeVertexGraphics();const e=this._createVertexGraphics(t);this.vertexGraphics.addMany(e),this._storeRelatedVertexIndices(),this.layer.addMany(e)}_createVertexGraphics(t){const{_graphicAttributes:e,symbols:i}=this,s=[];return t==null||t.forEach((o,r)=>{o.forEach((n,a)=>{var h;s.push(new k({geometry:this._coordinateHelper.arrayToPoint(n),symbol:(h=i==null?void 0:i.vertices)==null?void 0:h.default,attributes:{...e,pathIndex:r,pointIndex:a}}))})}),s}_createMidpointGraphics(t){var o;const{_graphicAttributes:e,symbols:i}=this,s=[];for(let r=0;r<t.length;r++){const n=t[r];for(let a=0;a<n.length;a++){const h=(a+1)%n.length;if(((o=this.graphic.geometry)==null?void 0:o.type)==="polyline"&&h===0)continue;const c=n[a],p=n[h],v=this._getMidpoint(c,p);s.push(new k({geometry:v,symbol:i.midpoints.default,attributes:{...e,pathIndex:r,pointIndexStart:a,pointIndexEnd:h}}))}}return s}_updateSymbolsForTheme(){var e;const t=this.view.effectiveTheme.accentColor;this.symbols={vertices:{...this.symbols.vertices,default:this.symbols.vertices.default.clone().set("color",t),hover:(e=this.symbols.vertices.hover)==null?void 0:e.clone().set("color",t)},midpoints:{...this.symbols.midpoints}};for(const i of this.vertexGraphics)this._isSelected(i)?i.symbol=this.symbols.vertices.selected:this._hoverGraphic===i?i.symbol=this.symbols.vertices.hover:i.symbol=this.symbols.vertices.default}_storeRelatedVertexIndices(){const t=this.vertexGraphics.items;if(!t)return;const e=t.map(({geometry:i})=>({x:i.x,y:i.y}));for(let i=0;i<e.length;i++){const s=[];for(let o=0;o<e.length;o++){if(i===o)continue;const r=e[i],n=e[o];r.x===n.x&&r.y===n.y&&s.push(o)}t[i].attributes.relatedGraphicIndices=s}}_setupMover(){const{enableMovement:t,graphic:e,midpointGraphics:i,vertexGraphics:s,view:o}=this,r=s.concat(i).items;t&&r.push(e),this._mover=new yt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,graphics:r,view:o,callbacks:{onGraphicClick:n=>this._onGraphicClickCallback(n),onGraphicMoveStart:n=>this._onGraphicMoveStartCallback(n),onGraphicMove:n=>this._onGraphicMoveCallback(n),onGraphicMoveStop:n=>this._onGraphicMoveStopCallback(n),onGraphicPointerOver:n=>this._onGraphicPointerOverCallback(n),onGraphicPointerOut:n=>this._onGraphicPointerOutCallback(n)}})}_onGraphicClickCallback(t){var i,s;t.viewEvent.stopPropagation();const e=t.graphic;if(e===this.graphic)this.clearSelection(),this.emit("graphic-click",t),(s=(i=this.callbacks).onGraphicClick)==null||s.call(i,t);else if(this._isMidpoint(e)){if(t.viewEvent.button===2)return;const o=this.graphic.clone(),r=this._createVertexFromMidpoint(e);this.refresh(),this._emitVertexAddEvent([e],o,r)}else this._isVertex(e)&&(t.viewEvent.stopPropagation(),t.viewEvent.button===2?this._removeVertices(e):(t.viewEvent.native.shiftKey||this._clearSelection(),this.selectedVertices.includes(e)?this._removeFromSelection(e,!0):this._addToSelection(e)))}_setUpOperation(t){const{graphic:e,dx:i,dy:s}=t,o=e===this.graphic;this._resetSnappingStateVars(),this._setUpGeometryHelper(),this._saveSnappingContextForHandle(e,t),this._activeOperationInfo={target:this.graphic,mover:e,operationType:o?"move":"reshape",totalDx:i,totalDy:s}}_onGraphicMoveStartCallback(t){const{dx:e,dy:i,graphic:s}=t;if(s===this.graphic){const{geometry:o}=s;return this._setUpOperation(t),this._emitMoveStartEvent(e,i),void(o!=null&&o.type==="point"&&this._onHandleMove(s,e,i,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(e,i)}))}if(!this.selectedVertices.includes(s)){if(this._clearSelection(),this._isMidpoint(s)){const o=this.graphic.clone(),r=this._createVertexFromMidpoint(s);this._emitVertexAddEvent([s],o,r)}this._addToSelection(s)}this._setUpOperation(t),this._emitReshapeStartEvent(s),this._onHandleMove(s,e,i,t,()=>{this._updateTooltip(s,t.viewEvent),this._emitReshapeEvent(s)})}_onGraphicMoveCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:s,graphic:o}=t;e.totalDx+=i,e.totalDy+=s;const{operationType:r}=e,{geometry:n}=o;if(n!=null){if(r!=="move")this._onHandleMove(o,i,s,t,()=>{this._updateTooltip(o,t.viewEvent),this._emitReshapeEvent(o)});else if(n.type==="point")this._onHandleMove(o,i,s,t,()=>{this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,s)});else if(n.type==="polyline"||n.type==="polygon"){const a=C(n);this._updateVertexGraphicLocations(a),this._updateTooltip(this.graphic,t.viewEvent),this._emitMoveEvent(i,s)}}}_onGraphicMoveStopCallback(t){const e=this._activeOperationInfo;if(!e)return;const{dx:i,dy:s,graphic:o}=t,{operationType:r}=e;e.totalDx+=i,e.totalDy+=s,this._onHandleMove(o,i,s,t,()=>r==="move"?this._emitMoveStopEvent():this._emitReshapeStopEvent(o)),this._isMidpoint(o)?this.refresh():(this._updateTooltip(this._isVertex(o)?o:null),this._resetSnappingStateVars(),this._activeOperationInfo=null)}_updateVertexGraphicLocations(t){const{_coordinateHelper:e}=this;for(const i of this.vertexGraphics){const{pathIndex:s,pointIndex:o}=i.attributes;i.geometry=e.arrayToPoint(t[s][o])}this._updateMidpointGraphicLocations(t)}_updateMidpointGraphicLocations(t){for(const e of this.midpointGraphics){const{pathIndex:i,pointIndexStart:s,pointIndexEnd:o}=e.attributes,r=t[i];e.geometry=this._getMidpoint(r[s],r[o])}}_getMidpoint(t,e){const{_coordinateHelper:i}=this,s=i.arrayToVector(t),o=i.arrayToVector(e),r=i.toXYZ(s),n=i.toXYZ(o),[a,h,c]=ot(r,n),p=i.hasM()?0:void 0;return new w({x:a,y:h,z:c,m:p,spatialReference:i.spatialReference})}_getVertexFromEditGeometry(t){const[e,i]=$(t);return I(this._editGeometryOperations),this._editGeometryOperations.data.components[e].vertices[i]}_onHandleMove(t,e,i,s,o){O(this._snappingTask);const r=this._snappingContext;if(!r)return;const n=t.geometry,a=s.type==="graphic-move-stop";if(this.snappingManager!=null&&this.selectedVertices.length<2&&!a){const h=this.snappingManager;this._stagedVertex=h.update({point:n,context:r}),this._syncGeometryAfterVertexMove(t,new w(this._stagedVertex),e,i,a),o(),this._snappingTask=rt(async c=>{const p=await h.snap({point:n,context:r,signal:c});p.valid&&(this._stagedVertex=p.apply(),this._syncGeometryAfterVertexMove(t,new w(this._stagedVertex),e,i,a),o())})}else{const h=this._stagedVertex!=null?new w(this._stagedVertex):n;this._syncGeometryAfterVertexMove(t,h,e,i,a),o()}}_syncGeometryAfterVertexMove(t,e,i,s,o=!1){var n,a;const r=(n=this._editGeometryOperations)==null?void 0:n.data.geometry;if(r)if(r.type==="point")t.geometry=e;else if(r.type==="mesh")t.geometry=r.centerAt(e);else{const{_coordinateHelper:h}=this,[c,p]=$(t);let v=b(r);const _=v[c].length-1,g=h.pointToArray(e);v[c][p]=g,r.type==="polygon"&&(p===0?v[c][_]=g:p===_&&(v[c][0]=g)),this._isVertex(t)&&(v=this._moveRelatedCoordinates(v,t,g),v=this._moveSelectedHandleCoordinates(v,t,i,s,r.type==="polygon"),this._updateMidpointGraphicLocations(v)),this.graphic.geometry=r.clone();const u=h.pointToVector(e),f=this._getVertexFromEditGeometry(t),M=h.getZ(u),P=u[0]-f.pos[0],U=u[1]-f.pos[1],D=M!=null?M-f.pos[2]:0;(a=this._editGeometryOperations)==null||a.moveVertices([f],P,U,D),o&&(this._mover?this._mover.updateGeometry(this._mover.graphics.indexOf(t),e):t.geometry=e)}}_moveRelatedCoordinates(t,e,i){const{relatedGraphicIndices:s}=e.attributes;for(const o of s){const r=this.vertexGraphics.at(o),{pathIndex:n,pointIndex:a}=r.attributes;t[n][a]=i,r.geometry=e.geometry}return t}_moveSelectedHandleCoordinates(t,e,i,s,o){for(const r of this.selectedVertices)if(r!==e){const{pathIndex:n,pointIndex:a,relatedGraphicIndices:h}=r.attributes,c=dt(r.geometry,i,s,this.view),p=b(c),v=t[n].length-1;t[n][a]=p,r.geometry=c,o&&(a===0?t[n][v]=p:a===v&&(t[n][0]=p));for(const _ of h){const g=this.vertexGraphics.at(_),{pathIndex:u,pointIndex:f}=g.attributes;t[u][f]=p,g.geometry=c}}return t}_onGraphicPointerOverCallback(t){const e=t.graphic;this._hoverGraphic=e;const i=this._isVertex(e);i&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.hover),this._updateTooltip(i?e:null),this._updateHoverCursor(e)}_onGraphicPointerOutCallback(t){const e=t.graphic;this._hoverGraphic=null,this._isVertex(e)&&!this._isSelected(e)&&(e.symbol=this.symbols.vertices.default),this.view.cursor="default",this._updateTooltip()}_createVertexFromMidpoint(t){const{_graphicAttributes:e,graphic:i}=this,s=i.geometry;if(s==null||s.type!=="polygon"&&s.type!=="polyline")return[];const o=s.clone(),r=[],{pathIndex:n,pointIndexStart:a,pointIndexEnd:h}=t.attributes,c=b(t.geometry),p=h===0?a+1:h,v=b(o);return v[n].splice(p,0,c),t.attributes={...e,pathIndex:n,pointIndex:p,relatedGraphicIndices:[]},r.push({coordinates:v[n][p],componentIndex:n,vertexIndex:p}),this.graphic.geometry=o,r}_addToSelection(t){t.symbol=this.symbols.vertices.selected,this.selectedVertices.add(t),this._emitSelectEvent([t]),this._updateTooltip(t)}_removeFromSelection(t,e){const{vertices:i}=this.symbols,s=e?i.hover:i.default;this.selectedVertices.remove(t),t.symbol=s,this._emitDeselectEvent([t]),this._updateTooltip()}_clearSelection(){const t=this.selectedVertices.toArray();if(t.length>0){for(const e of t)e.set("symbol",this.symbols.vertices.default);this.selectedVertices.removeAll(),this._emitDeselectEvent(t),this._updateTooltip()}}_keyDownHandler(t){this._activeOperationInfo==null&&gt(t,this.tooltip)||nt.delete.includes(t.key)&&!t.repeat&&this.selectedVertices.length&&this._removeVertices(this.selectedVertices)}_removeVertices(t){const e=this.graphic.geometry;if(e==null||e.type!=="polygon"&&e.type!=="polyline"||e.type==="polygon"&&this.vertexGraphics.length<4||this.vertexGraphics.length<3)return;const i=this.graphic.clone(),s=e.clone();let o=b(s);const r=[],n=Xt(t);for(const a of n){const{x:h,y:c}=a.geometry;for(let p=0;p<o.length;p++){const v=o[p];for(let _=0;_<v.length;_++){const[g,u]=v[_];h===g&&c===u&&(r.push({coordinates:o[p][_],componentIndex:p,vertexIndex:_}),o[p].splice(Number(_),1))}}}if(s.type==="polygon")o=o.filter(a=>{if(a.length<2)return!1;const[h,c]=a[0],[p,v]=a[a.length-1];return(a.length!==2||h!==p||c!==v)&&(h===p&&c===v||a.push(a[0]),!0)}),s.rings=o;else{for(const a of o)a.length===1&&o.splice(o.indexOf(a),1);s.paths=o}this.graphic.geometry=s,this.refresh(),this._emitVertexRemoveEvent(n,i,r)}_isVertex(t){return this.vertexGraphics.includes(t)}_isSelected(t){return this._isVertex(t)&&this.selectedVertices.includes(t)}_isMidpoint(t){return this.midpointGraphics.includes(t)}_updateHoverCursor(t){this.view.cursor=this._isMidpoint(t)?"copy":"move"}_updateTooltip(t,e){let i=null;const{graphic:s,view:o,tooltipInfos:r}=this,n=s==null?void 0:s.geometry;(n==null?void 0:n.type)==="point"?i=r.movePoint:this._selectedVertex?i=r.selectedVertex:t===this.graphic?(i=r.translateGraphic,Ot(i,o,e)):t&&this.selectedVertices.length>1&&(i=r.translateVertices,Ct(i,o,n,e)),this.activeTooltipInfo=i}_emitMoveStartEvent(t,e){var s,o;const i=new At(this.graphic,t,e);this.emit("move-start",i),(o=(s=this.callbacks).onMoveStart)==null||o.call(s,i)}_emitMoveEvent(t,e){var s,o;const i=new Lt(this.graphic,t,e);this.emit("move",i),(o=(s=this.callbacks).onMove)==null||o.call(s,i)}_emitMoveStopEvent(t,e){var s,o;if(t==null||e==null){const r=this._activeOperationInfo;if(!r)return;t=r.totalDx,e=r.totalDy}const i=new Ft(this.graphic,t,e);this.emit("move-stop",i),(o=(s=this.callbacks).onMoveStop)==null||o.call(s,i)}_emitReshapeStartEvent(t){var i,s;const e=new $t(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape-start",e),(s=(i=this.callbacks).onReshapeStart)==null||s.call(i,e)}_emitReshapeEvent(t){var i,s;const e=new Ht(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape",e),(s=(i=this.callbacks).onReshape)==null||s.call(i,e)}_emitReshapeStopEvent(t){var i,s;const e=new Rt(this.graphic,t,this.selectedVertices.toArray());this.emit("reshape-stop",e),(s=(i=this.callbacks).onReshapeStop)==null||s.call(i,e)}_emitSelectEvent(t){var i,s;const e=new zt(t);this.emit("select",e),(s=(i=this.callbacks).onVertexSelect)==null||s.call(i,e)}_emitDeselectEvent(t){var i,s;const e=new Pt(t);this.emit("deselect",e),(s=(i=this.callbacks).onVertexDeselect)==null||s.call(i,e)}_emitVertexAddEvent(t,e,i){var o,r;const s=new Ut(t,this.graphic,e,i);this.emit("vertex-add",s),(r=(o=this.callbacks).onVertexAdd)==null||r.call(o,s)}_emitVertexRemoveEvent(t,e,i){var o,r;const s=new Dt(t,this.graphic,e,i);this.emit("vertex-remove",s),(r=(o=this.callbacks).onVertexRemove)==null||r.call(o,s)}_logGeometryTypeError(){at.getLogger(this).error(new ht("reshape:invalid-geometry","Reshape operation not supported for the provided graphic. The geometry type is not supported."))}};function C(t){const e=b(t.clone());if(t.type==="polygon")for(const i of e){const s=i[i.length-1];i[0][0]===s[0]&&i[0][1]===s[1]&&i.length>2&&i.pop()}return e}function $({attributes:t}){return[(t==null?void 0:t.pathIndex)||0,(t==null?void 0:t.pointIndex)||0]}function Xt(t){return t instanceof k?[t]:[...t]}l([d()],y.prototype,"_activeOperationInfo",void 0),l([d()],y.prototype,"_coordinateHelper",null),l([d()],y.prototype,"_editGeometryOperations",void 0),l([d()],y.prototype,"tooltip",void 0),l([d()],y.prototype,"tooltipInfos",void 0),l([d()],y.prototype,"activeTooltipInfo",void 0),l([d()],y.prototype,"_selectedVertex",null),l([d()],y.prototype,"_tooltipsContext",null),l([d()],y.prototype,"callbacks",void 0),l([d()],y.prototype,"enableMidpoints",void 0),l([d()],y.prototype,"enableMovement",void 0),l([d()],y.prototype,"enableVertices",void 0),l([d()],y.prototype,"graphic",void 0),l([d({value:!0})],y.prototype,"highlightsEnabled",null),l([d()],y.prototype,"layer",void 0),l([d({readOnly:!0})],y.prototype,"midpointGraphics",void 0),l([d()],y.prototype,"midpointSymbol",void 0),l([d({readOnly:!0})],y.prototype,"selectedVertices",void 0),l([d()],y.prototype,"snappingManager",void 0),l([d({readOnly:!0})],y.prototype,"state",null),l([d()],y.prototype,"symbols",void 0),l([d({type:R})],y.prototype,"sketchOptions",void 0),l([d({readOnly:!0})],y.prototype,"type",void 0),l([d({readOnly:!0})],y.prototype,"vertexGraphics",void 0),l([d()],y.prototype,"view",void 0),y=l([H("esri.views.draw.support.Reshape")],y);const se=y;export{se as default};
