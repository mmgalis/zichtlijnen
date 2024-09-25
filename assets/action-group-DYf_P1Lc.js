import{p as u,H as m,b as t}from"./index-FXsJ6CNr.js";import{c as p,d as h}from"./conditionalSlot-_hv4vx9O.js";import{c as f,s as g,a as b}from"./loadable-DbyaB6qw.js";import{c as v,d as x}from"./locale-B9RhJo2Y.js";import{u as C,c as y,d as M,s as E}from"./t9n-IsHayLJU.js";import{d as L,S as s}from"./action-menu-BhPl6Bs-.js";import{s as S}from"./dom-BoO_qjUK.js";import{d as O}from"./action-Dp2zpbX7.js";import{d as k}from"./icon-BX_XaV7k.js";import{d as A}from"./loader-Birj53Vs.js";import{d as z}from"./popover-D-f09ILD.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const a={menuActions:"menu-actions",menuTooltip:"menu-tooltip"},w={menu:"ellipsis"},H={container:"container"},$=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}',P=$,F=u(class extends m{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.setMenuOpen=e=>{this.menuOpen=!!e.target.open},this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=S(e)},this.expanded=!1,this.label=void 0,this.layout="vertical",this.columns=void 0,this.menuOpen=!1,this.overlayPositioning="absolute",this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.hasMenuActions=!1}expandedHandler(){this.menuOpen=!1}onMessagesChange(){}effectiveLocaleChange(){C(this,this.effectiveLocale)}async setFocus(){await f(this),this.el.focus()}connectedCallback(){v(this),y(this),p(this)}disconnectedCallback(){x(this),M(this),h(this)}async componentWillLoad(){g(this),await E(this)}componentDidLoad(){b(this)}renderMenu(){const{expanded:e,menuOpen:c,scale:o,layout:l,messages:n,overlayPositioning:r,hasMenuActions:d}=this;return t("calcite-action-menu",{expanded:e,flipPlacements:["left","right"],hidden:!d,label:n.more,onCalciteActionMenuOpen:this.setMenuOpen,open:c,overlayPositioning:r,placement:l==="horizontal"?"bottom-start":"leading-start",scale:o},t("calcite-action",{icon:w.menu,scale:o,slot:s.trigger,text:n.more,textEnabled:e}),t("slot",{name:a.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),t("slot",{name:a.menuTooltip,slot:s.tooltip}))}render(){return t("div",{key:"53e37d8cb8d51e6809c35b035483218ce2f43bff","aria-label":this.label,class:H.container,role:"group"},t("slot",{key:"967676dd0b0fec78f278da527f4695decf7fe47a"}),this.renderMenu())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return P}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function G(){if(typeof customElements>"u")return;["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-group":customElements.get(e)||customElements.define(e,F);break;case"calcite-action":customElements.get(e)||O();break;case"calcite-action-menu":customElements.get(e)||L();break;case"calcite-icon":customElements.get(e)||k();break;case"calcite-loader":customElements.get(e)||A();break;case"calcite-popover":customElements.get(e)||z();break}})}G();export{F as A,a as S,G as d};
