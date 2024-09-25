import{p as B,H as L,c as l,b as e,d as H}from"./index-FXsJ6CNr.js";import{c as I,d as z}from"./conditionalSlot-_hv4vx9O.js";import{s as p,a as O,u as g,t as f}from"./dom-BoO_qjUK.js";import{c as M,d as A,u as T,I as $}from"./interactive-x5IxAmGS.js";import{c as F,d as R}from"./locale-B9RhJo2Y.js";import{u as P,c as D,d as _,s as j}from"./t9n-IsHayLJU.js";import{H as q}from"./Heading-OTxsaW3m.js";import{c as U,s as V,a as W}from"./loadable-DbyaB6qw.js";import{o as u}from"./openCloseComponent-Ds8puke0.js";import{d as G}from"./action-Dp2zpbX7.js";import{d as J}from"./action-menu-BhPl6Bs-.js";import{d as K}from"./handle-DV41Jo2a.js";import{d as Q}from"./icon-BX_XaV7k.js";import{d as X}from"./loader-Birj53Vs.js";import{d as Y}from"./popover-D-f09ILD.js";import{d as Z}from"./scrim-ifluZttv.js";import"./observers-D-J1oWvk.js";import"./key-D5DPfjW0.js";import"./component-ByvC-PUv.js";import"./array-DofFqflK.js";import"./floating-ui-BwztCXBg.js";import"./debounce-C5YDvsuO.js";import"./focusTrapComponent-BIUHdKCi.js";import"./FloatingArrow-C13f9Vk3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const s={content:"content",toggle:"toggle",header:"header"},n={actionsEnd:"actions-end",button:"button",container:"container",content:"content",contentStart:"content-start",controlContainer:"control-container",description:"description",header:"header",headerContainer:"header-container",headerHasText:"header--has-text",heading:"heading",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end",iconEndContainer:"icon-end-container",invalid:"invalid",statusIcon:"status-icon",summary:"summary",title:"title",toggle:"toggle",toggleIcon:"toggle-icon",valid:"valid"},c={actionsEnd:"actions-end",contentStart:"content-start",control:"control",headerMenuActions:"header-menu-actions",icon:"icon"},m={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},N=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto;transition-duration:var(--calcite-animation-timing)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start}.header--has-text{padding:var(--calcite-spacing-md)}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu actions-end";grid-column:header-start/actions-end;grid-row:1/2}.content-start,.icon,.icon--start,.icon--end{margin-inline-end:var(--calcite-spacing-md)}.icon calcite-loader{margin-inline-end:var(--calcite-spacing-xxxs)}.icon--start,.icon--end{color:var(--calcite-color-text-3)}.actions-end{grid-area:actions-end}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:var(--calcite-font-family);outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-color-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-color-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-color-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex}.status-icon.valid{color:var(--calcite-color-status-success)}.status-icon.invalid{color:var(--calcite-color-status-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.icon-end-container{display:flex;align-items:center;margin-inline-start:auto}.toggle-icon{align-self:center;justify-self:end;color:var(--calcite-color-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-spacing-md)}.toggle:hover .toggle-icon{color:var(--calcite-color-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, var(--calcite-spacing-sm));padding-inline:var(--calcite-block-padding, var(--calcite-spacing-md))}.content-start{display:flex;align-items:center;color:var(--calcite-color-text-3)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}.actions-end{display:flex;align-items:stretch}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}`,ee=N,b=B(class extends L{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockBeforeClose=l(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=l(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=l(this,"calciteBlockClose",6),this.calciteBlockOpen=l(this,"calciteBlockOpen",6),this.calciteBlockToggle=l(this,"calciteBlockToggle",6),this.openTransitionProp="margin-top",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.actionsEndSlotChangeHandler=t=>{this.hasEndActions=p(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=p(t)},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0,this.iconStart=void 0,this.loading=!1,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.defaultMessages=void 0,this.effectiveLocale=void 0,this.hasContentStart=!1,this.hasEndActions=!1}openHandler(){u(this)}onMessagesChange(){}async setFocus(){await U(this),O(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){P(this,this.effectiveLocale)}connectedCallback(){I(this),M(this),F(this),D(this),this.transitionEl=this.el}disconnectedCallback(){A(this),R(this),_(this),z(this)}async componentWillLoad(){await j(this),V(this),this.open&&u(this)}componentDidLoad(){W(this)}componentDidRender(){T(this)}renderScrim(){const{loading:t}=this,i=e("slot",null);return[t?e("calcite-scrim",{loading:t}):null,i]}renderLoaderStatusIcon(){const{loading:t,messages:i,status:o}=this,a=!!g(this.el,c.icon);return t?e("div",{class:n.icon,key:"loader"},e("calcite-loader",{inline:!0,label:i.loading})):o?e("div",{class:n.icon,key:"status-icon"},e("calcite-icon",{class:{[n.statusIcon]:!0,[n.valid]:o=="valid",[n.invalid]:o=="invalid"},icon:m[o],scale:"s"})):a?e("div",{class:n.icon,key:"icon-slot"},e("slot",{key:"icon-slot",name:c.icon})):null}renderActionsEnd(){return e("div",{class:n.actionsEnd},e("slot",{name:c.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler}))}renderContentStart(){const{hasContentStart:t}=this;return e("div",{class:n.contentStart,hidden:!t},e("slot",{name:c.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderTitle(){const{heading:t,headingLevel:i,description:o}=this;return t||o?e("div",{class:n.title},e(q,{class:n.heading,level:i},t),o?e("div",{class:n.description},o):null):null}renderIcon(t){const{iconFlipRtl:i}=this,o=i==="both"||t==="start"?i==="start":i==="end",a=t==="start"?this.iconStart:this.iconEnd,r=t==="start"?n.iconStart:n.iconEnd;if(a)return e("calcite-icon",{class:r,flipRtl:o,icon:a,key:a,scale:"s"})}render(){const{collapsible:t,el:i,loading:o,open:a,heading:r,messages:d,description:C}=this,x=a?d.collapse:d.expand,h=e("header",{key:"91deb640f5a591cd70dbb6328cdc588a40b600d5",class:{[n.header]:!0,[n.headerHasText]:!!(r||C)},id:s.header},this.renderIcon("start"),this.renderContentStart(),this.renderLoaderStatusIcon(),this.renderTitle()),y=!!g(i,c.control),E=!!g(i,c.headerMenuActions),S=a?m.opened:m.closed,w=e("div",{key:"ebba82b4e065978eaa9ed1e59f05ad80843cc9ab",class:n.headerContainer},this.dragHandle?e("calcite-handle",{label:r}):null,t?e("button",{"aria-controls":s.content,"aria-describedby":s.header,"aria-expanded":t?f(a):null,class:n.toggle,id:s.toggle,onClick:this.onHeaderClick,title:x},h,e("div",{class:n.iconEndContainer},this.renderIcon("end"),e("calcite-icon",{class:n.toggleIcon,icon:S,scale:"s"}))):this.iconEnd?e("div",null,h,e("div",{class:n.iconEndContainer},this.renderIcon("end"))):h,y?e("div",{"aria-labelledby":s.header,class:n.controlContainer},e("slot",{name:c.control})):null,E?e("calcite-action-menu",{label:d.options,overlayPositioning:this.overlayPositioning},e("slot",{name:c.headerMenuActions})):null,this.renderActionsEnd());return e(H,{key:"b5c12059b36785bf45ce61e7309a35278b928088"},e($,{key:"90a5013ca2e30dadbd76c146700a53391f3aea62",disabled:this.disabled},e("article",{key:"825f15336afb992c7ea8c718b5ffad7c4bf2507e","aria-busy":f(o),class:{[n.container]:!0}},w,e("section",{key:"4f690563d78615b68a225456aaae593af6adb826","aria-labelledby":s.toggle,class:n.content,hidden:!a,id:s.content},this.renderScrim()))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ee}},[1,"calcite-block",{collapsible:[516],disabled:[516],dragHandle:[516,"drag-handle"],heading:[1],headingLevel:[514,"heading-level"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"],iconStart:[513,"icon-start"],loading:[516],open:[1540],status:[513],description:[1],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],defaultMessages:[32],effectiveLocale:[32],hasContentStart:[32],hasEndActions:[32],setFocus:[64]},void 0,{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function v(){if(typeof customElements>"u")return;["calcite-block","calcite-action","calcite-action-menu","calcite-handle","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-block":customElements.get(t)||customElements.define(t,b);break;case"calcite-action":customElements.get(t)||G();break;case"calcite-action-menu":customElements.get(t)||J();break;case"calcite-handle":customElements.get(t)||K();break;case"calcite-icon":customElements.get(t)||Q();break;case"calcite-loader":customElements.get(t)||X();break;case"calcite-popover":customElements.get(t)||Y();break;case"calcite-scrim":customElements.get(t)||Z();break}})}v();const Be=b,Le=v;export{Be as CalciteBlock,Le as defineCustomElement};
