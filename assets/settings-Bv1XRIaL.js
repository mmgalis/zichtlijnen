import{k as t}from"./index-2x4JY06U.js";const e={main:new t([255,127,0]),selected:new t([255,255,255]),outline:new t([0,0,0,.5]),selectedOutline:new t([255,255,255]),hoverOutline:new t([255,255,255]),secondary:new t([255,255,255]),secondaryOutline:new t([100,100,100]),transparent:new t([0,0,0,0])};function n(s,o){Object.assign(s,o)}class r{constructor(o){this.size=8,this.hoverSize=10,this.color=e.main,this.hoverColor=e.main,this.outlineColor=e.outline,this.hoverOutlineColor=e.hoverOutline,n(this,o)}}class i{constructor(o){this.color=e.secondary,this.hoverColor=e.main,n(this,o)}}class l{constructor(o){this.color=e.transparent,this.hoverColor=e.transparent,this.outlineColor=e.main,this.hoverOutlineColor=e.main,this.stagedColor=e.transparent,this.stagedOutlineColor=e.secondary,n(this,o)}}class c{constructor(o){this.vertex=new r,this.midpoint=new r({color:e.secondary,outlineColor:e.secondaryOutline,size:6}),this.selected=new r({color:e.selected,hoverColor:e.selected,hoverOutlineColor:e.hoverOutline}),n(this,o)}}class h{constructor(o){this.center=new r({color:e.secondaryOutline}),this.fill=new l,this.line=new i,this.vertex=new r({color:e.selected,outlineColor:e.main,hoverColor:e.selected,hoverOutlineColor:e.secondaryOutline}),n(this,o)}}class a{constructor(o){this.reshapeGraphics=new c,this.transformGraphics=new h,n(this,o)}}const d=new a;export{d as h};
