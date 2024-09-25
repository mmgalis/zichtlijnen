import{p as o,H as r,b as t}from"./index-CY8jQoH7.js";import{c as l,d}from"./locale-BJuGd9rr.js";import{u as h,c as f,s as m,d as g}from"./t9n-BLGdiB6s.js";import{c as u}from"./observers-syUpCeA1.js";import{r as p}from"./dom-BoO_qjUK.js";import{d as b}from"./loader-Bgmoa3K6.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const i={scrim:"scrim",content:"content"},a={s:72,l:480},v=":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}",C=v,S=o(class extends r{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.resizeObserver=u("resize",()=>this.handleResize()),this.handleDefaultSlotChange=e=>{this.hasContent=p(e)},this.storeLoaderEl=e=>{this.loaderEl=e,this.handleResize()},this.loading=!1,this.messages=void 0,this.messageOverrides=void 0,this.loaderScale=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.hasContent=!1}onMessagesChange(){}effectiveLocaleChange(){h(this,this.effectiveLocale)}connectedCallback(){var e;l(this),f(this),(e=this.resizeObserver)==null||e.observe(this.el)}async componentWillLoad(){await m(this)}disconnectedCallback(){var e;d(this),g(this),(e=this.resizeObserver)==null||e.disconnect()}render(){const{hasContent:e,loading:s,messages:c}=this;return t("div",{key:"e31839948c0689b6daeac22f3b2471fb049c834b",class:i.scrim},s?t("calcite-loader",{label:c.loading,ref:this.storeLoaderEl,scale:this.loaderScale}):null,t("div",{key:"500b2dcbdcb6c3287ea613fd0f1357de7f3ff347",class:i.content,hidden:!e},t("slot",{key:"eea29ac4a454cf3cd51933a73911b70114ab6f77",onSlotchange:this.handleDefaultSlotChange})))}getScale(e){return e<a.s?"s":e>=a.l?"l":"m"}handleResize(){const{loaderEl:e,el:s}=this;e&&(this.loaderScale=this.getScale(Math.min(s.clientHeight,s.clientWidth)??0))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return C}},[1,"calcite-scrim",{loading:[516],messages:[1040],messageOverrides:[1040],loaderScale:[32],defaultMessages:[32],effectiveLocale:[32],hasContent:[32]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function y(){if(typeof customElements>"u")return;["calcite-scrim","calcite-loader"].forEach(e=>{switch(e){case"calcite-scrim":customElements.get(e)||customElements.define(e,S);break;case"calcite-loader":customElements.get(e)||b();break}})}y();export{S,y as d};
