import{db as W,iT as Y,b8 as Q,p4 as tt,kf as et,p5 as at,cV as nt,c7 as E,p6 as C,p7 as G,p8 as it,p9 as I,pa as z,az as st,j$ as A,pb as lt,pc as ot,gX as rt,bF as P,a3 as ut,pd as V,pe as v,e as l,y as o,a as x,S as ct,ey as pt,dI as H,pf as N,h$ as $,pg as j,ph as L,pi as T,pj as g,pk as ft,ic as ht,pl as dt,pm as mt}from"./index-FXsJ6CNr.js";import{G as gt,M as vt,_ as yt,w as B,B as h,H as kt,L as bt,J as xt,A as $t,K as X}from"./Tooltip-B4D-fhsV.js";import{U as It}from"./quantityFormatUtils-2QkOAwak.js";import{U as Z,o as At,j as wt}from"./euclideanAreaMeasurementUtils-DU_QJbTL.js";function Yt(e,a){const t=Y(a.vertexSpace),{scale:n,orientation:i}=e,{transform:u}=a,r=Lt(u);t&&r!=null?(i.actual=V(r,"degrees","arithmetic"),i.visible=!0):(i.actual=null,i.visible=!1),t?(n.actual=v(J(u)),n.visible=!0):(n.actual=null,n.visible=!1)}function Et(e,a,t){var F,_,U,R,S,D,O;if(!a||!Y(a.vertexSpace))return;const n=a.transform??(a.transform=new Q),{rotationAngle:i,rotationAxis:u}=n,r=tt(e.orientation.actual),c=q(u);if(r!=null&&c!=null&&r!==i){(F=t==null?void 0:t.onRotateStart)==null||F.call(t,i);const f=r*c;n.rotationAngle=f,(_=t==null?void 0:t.onRotate)==null||_.call(t,f),(U=t==null?void 0:t.onRotateStop)==null||U.call(t,f)}const d=(R=e.scale.actual)==null?void 0:R.value,m=J(n);if(d!=null&&d!==m){const{scale:f}=n;let p;if((S=t==null?void 0:t.onScaleStart)==null||S.call(t,f[0],f[1],f[2]),m===0)p=et(at);else{const K=d/m;p=nt(E(),f,K)}n.scale=p,(D=t==null?void 0:t.onScale)==null||D.call(t,p[0],p[1],p[2]),(O=t==null?void 0:t.onScaleStop)==null||O.call(t,p[0],p[1],p[2])}}function Gt(e,a){const{x:t,y:n,z:i}=a,{x:u,y:r,z:c}=Vt(e,a.spatialReference);return{dx:u==null||I(u,t)?0:u-t,dy:r==null||I(r,n)?0:r-n,dz:c==null||i==null||I(c,i)?0:c-i}}function Vt(e,a){var u,r,c;let t,n,i;if(e.geographic){t=z(e.longitude.actual),n=z(e.latitude.actual),st(a)&&(t!=null&&n!=null?[t,n]=A(t,n,w):t!=null?t=A(t,0,w)[0]:n!=null&&(n=A(0,n,w)[1]));const d=e.elevation.actual,m=lt(a);i=m!=null&&d!=null?ot(d,m):void 0}else t=(u=e.x.actual)==null?void 0:u.value,n=(r=e.y.actual)==null?void 0:r.value,i=(c=e.elevation.actual)==null?void 0:c.value;return{x:t,y:n,z:i}}const w=[0,0];function Lt(e){if(!e)return 0;const a=q(e.rotationAxis);return a!=null?a*e.rotationAngle:null}function q(e){return C(e,G)?1:C(e,Mt)?-1:null}const Mt=W(E(),G);function J(e){return e?Math.max(...e.scale):1}function Ht(e,a){return!(e.type!=="key-down"||e.key!==it.enterInputMode||!a||!Ft(a.info))&&(a.enterInputMode(),e.stopPropagation(),!0)}function Ft(e){const a=e==null?void 0:e.sketchOptions;if(!a)return!1;const{inputEnabled:t,visibleElements:n}=a.tooltips;return t&&e.editableFields.some(({name:i})=>i==="x"||i==="y"?n.coordinates:n[i])===!0}function Nt(e){let a=null;return rt([e.on("paste",async t=>{a==null||a.abort(),a=P(async()=>{yt()||await B(),_t(t,e.info)})}),P(()=>B()),ut(()=>a==null?void 0:a.abort())])}function _t(e,a){var n;if(!a||!("geographic"in a))return;const t=(n=e.clipboardData)==null?void 0:n.getData("text");if(t)if(a.geographic){const i=gt(t);i&&(a.longitude.applyValue(i.longitude),a.latitude.applyValue(i.latitude),e.stopPropagation(),e.preventDefault())}else{const i=vt(t);i&&(a.x.applyValue(i.x),a.y.applyValue(i.y),e.stopPropagation(),e.preventDefault())}}let s=class extends ct{constructor(e){super(e),this.actual=null,this.lockable=!0,this.id=pt(),this.inputValue=null,this.readOnly=!1,this.suffix=null,this.visible=!0,this.invalid=!1,this.unlockOnVertexPlacement=!0}get committed(){return this.lockable?this._get("committed"):null}set committed(e){this.lockable&&this._set("committed",e)}get dirty(){return this.inputValue!=null}get locked(){return this.lockable&&this.committed!=null}onInput(e){this.inputValue=e}onCommit(e,a,t){this.lockable?this._onCommitLockable(e,t):this._onCommitNonLockable(t),this.invalid&&e==="commit-and-exit"||t.onCommit(a,e)}_onCommitLockable(e,a){const{inputValue:t,locked:n}=this;n&&y(t)?this.unlock():(e==="commit-and-exit"&&!n||t!=null)&&this._parseInputAndLock(a)}_onCommitNonLockable(e){const{inputValue:a}=this;y(a)?this.setActual(null):a!=null&&this._parseInputAndSetActual(e)}applyValue(e){this.lockable?this.lock(e):this.setActual(e)}clearInputValue(){this.inputValue=null,this.invalid=!1}setActual(e){this.actual=e,this.clearInputValue()}lock(e){this.lockable&&(this.committed=e??this.actual,this.clearInputValue())}unlock(){this.lockable&&(this.committed=null,this.clearInputValue())}toggleLock(e){this.lockable&&(this.locked?this.unlock():this._parseInputAndLock(e))}getSuffix(e){const{suffix:a}=this;return typeof a=="function"?a(e):a}getFormattedValue(e){const{actual:a,committed:t,format:n}=this;return t!=null?n(t,e):a!=null?n(a,e):null}getRawDisplayValue(e){const{actual:a,committed:t,inputValue:n}=this;return n??(this.lockable&&t!=null?this.formatForInputMode(t,e):a!=null?this.formatForInputMode(a,e):null)}_parseInputAndSetActual(e){const{inputValue:a}=this;if(a==null||y(a))return this.setActual(null);const t=this.parse(a,e);t!=null?this.setActual(t):this.invalid=!0}_parseInputAndLock(e){const{inputValue:a,actual:t}=this;if(y(a))return this.unlock();if(a==null)return this.lock(t);const n=this.parse(a,e);n!=null?this.lock(n):this.invalid=!0}};function y(e){return e!=null&&e.trim()===""}l([o()],s.prototype,"actual",void 0),l([o()],s.prototype,"committed",null),l([o()],s.prototype,"dirty",null),l([o()],s.prototype,"format",void 0),l([o()],s.prototype,"formatForInputMode",void 0),l([o()],s.prototype,"lockable",void 0),l([o()],s.prototype,"locked",null),l([o()],s.prototype,"id",void 0),l([o()],s.prototype,"inputValue",void 0),l([o()],s.prototype,"name",void 0),l([o()],s.prototype,"parse",void 0),l([o()],s.prototype,"readOnly",void 0),l([o()],s.prototype,"suffix",void 0),l([o()],s.prototype,"title",void 0),l([o()],s.prototype,"visible",void 0),l([o()],s.prototype,"invalid",void 0),l([o()],s.prototype,"unlockOnVertexPlacement",void 0),s=l([x("esri.views.interactive.tooltip.fields.TooltipField")],s);let k=class extends s{constructor(e){super(e),this.showAsZ=!1}normalizeCtorArgs(e){const a=t=>t.inputUnitInfos.verticalLength.unit;return{name:"elevation",actual:H,parse:h((t,n)=>N(t,a(n))),format:(t,n)=>n.formatters.verticalLength(t),formatForInputMode:(t,n)=>n.formatters.scalar($(t,a(n))),suffix:t=>t.inputUnitInfos.verticalLength.abbreviation,title:t=>t.messages.sketch[this.showAsZ?"z":"elevation"],unlockOnVertexPlacement:!1,...e}}};l([o()],k.prototype,"showAsZ",void 0),k=l([x("esri.views.interactive.tooltip.fields.TooltipFieldElevation")],k);let b=class extends s{constructor(e){super(e),this.precision=1}normalizeCtorArgs(e){const a=t=>t.inputUnitInfos.orientation.unit;return{name:"orientation",actual:null,parse:h((t,n)=>V(t,a(n),"geographic")),format:t=>{const n=j(t);return It(n,"geographic",this.precision)},formatForInputMode:(t,n)=>{const i=j(t);return n.formatters.scalar(i)},suffix:t=>t.inputUnitInfos.orientation.abbreviation,title:t=>t.messages.sketch.orientation,...e}}};l([o()],b.prototype,"precision",void 0),b=l([x("esri.views.interactive.tooltip.fields.TooltipFieldOrientation")],b);function Zt(e){const a=n=>n.inputUnitInfos.direction.unit,t=n=>n.sketchOptions.values.effectiveDirectionMode;return new s({name:"direction",actual:L,parse:h((n,i)=>V(n,a(i),"geographic")),format:(n,i)=>{const u=t(i),r=T(n,u);switch(u){case g.Absolute:return i.formatters.direction(r);case g.Relative:return i.formatters.directionRelative(r);case g.RelativeBilateral:return i.formatters.directionRelativeBilateral(r)}},formatForInputMode:(n,i)=>{const u=T(n,t(i));return i.formatters.scalar($(u,a(i)))},suffix:n=>n.inputUnitInfos.direction.abbreviation,title:n=>{const i=t(n),{absolute:u,relative:r}=n.messages.sketch.direction;switch(i){case g.Absolute:return u;case g.Relative:case g.RelativeBilateral:return r}},...e})}function Ut(e){const a=t=>t.inputUnitInfos.length.unit;return new s({name:"distance",actual:H,parse:h((t,n)=>N(Math.max(t,0),a(n))),format:(t,n)=>n.formatters.length(t),formatForInputMode:(t,n)=>n.formatters.scalar($(t,a(n))),suffix:t=>t.inputUnitInfos.length.abbreviation,title:t=>t.messages.sketch.distance,...e})}function qt(){return Ut({format:(e,a)=>a.formatters.totalLength(e),title:e=>e.messages.sketch.totalLength,readOnly:!0})}function Rt(e){return new k(e)}function Jt(e){return new b(e)}function Kt(e){return M("scale",{name:"scale",actual:null,parse:h(a=>v(Math.abs(a))),...e})}function Wt(e){const a=t=>t.inputUnitInfos.area.unit;return new s({name:"area",actual:ft,parse:h((t,n)=>ht(t,a(n))),format:(t,n)=>n.formatters.area(t),formatForInputMode:(t,n)=>n.formatters.scalar($(t,a(n))),suffix:t=>t.inputUnitInfos.area.abbreviation,title:t=>t.messages.sketch.area,readOnly:!0,...e})}function St(e){return new s({name:"x",actual:L,parse:kt,format:(a,t)=>t.formatters.longitudeDecimalDegrees(a),formatForInputMode:a=>bt(a),suffix:a=>a.inputUnitInfos.longitudeLatitude.abbreviation,title:a=>a.messages.sketch.longitude,...e})}function Dt(e){return new s({name:"y",actual:L,parse:xt,format:(a,t)=>t.formatters.latitudeDecimalDegrees(a),formatForInputMode:a=>$t(a),suffix:a=>a.inputUnitInfos.longitudeLatitude.abbreviation,title:a=>a.messages.sketch.latitude,...e})}function Ot(e){return M("x",{name:"x",...e})}function Ct(e){return M("y",{name:"y",...e})}function M(e,a){return new s({actual:v(0),parse:h(t=>v(t)),format:(t,n)=>n.formatters.scalar(t),formatForInputMode:(t,n)=>n.formatters.scalar(t),title:t=>t.messages.sketch[e],...a})}const Qt=e=>{let a=class extends e{constructor(){super(...arguments),this.longitude=St(),this.latitude=Dt(),this.x=Ot(),this.y=Ct(),this.elevation=Rt(),this.geographic=!1}get effectiveX(){return this.geographic?this.longitude:this.x}get effectiveY(){return this.geographic?this.latitude:this.y}get key(){return{longitude:this.longitude.actual,latitude:this.latitude.actual,x:this.x.actual,y:this.y.actual,elevation:this.elevation.actual,geographic:this.geographic}}setLocationFromPoint(t,n=t==null?void 0:t.spatialReference){if(this.geographic=!!n&&dt(n),t==null)return this._setActualLonLat(null,null),void this._setActualXY(null,null);if(this.geographic){const i=mt(t,zt);this._setActualLonLat(X(i==null?void 0:i[0]),X(i==null?void 0:i[1]))}else this._setActualXY(v(t.x),v(t.y))}_setActualLonLat(t,n){this.longitude.actual=t,this.latitude.actual=n}_setActualXY(t,n){this.x.actual=t,this.y.actual=n}};return l([o()],a.prototype,"geographic",void 0),l([o()],a.prototype,"effectiveX",null),l([o()],a.prototype,"effectiveY",null),l([o()],a.prototype,"key",null),a=l([x("esri.views.interactive.tooltip.infos.TooltipInfoWithCoordinates")],a),a},zt=[0,0];function Pt(e,a,t=Z()){{const n=At(e);return n??wt(e,t)}}function te(e,a=Z()){return Pt(e,"on-the-ground",a)}export{_t as B,Kt as F,Ht as G,Ut as I,Wt as M,Yt as R,Nt as T,qt as U,Gt as V,Zt as b,Qt as h,Et as k,te as u,Jt as x};
