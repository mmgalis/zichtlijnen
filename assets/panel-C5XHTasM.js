import{p as k,H,c as u,b as t,d as w}from"./index-2x4JY06U.js";import{s as r,b as v,a as z,t as x}from"./dom-BtaRyJrQ.js";import{c as F,u as B,d as T,I as L}from"./interactive-BRGH6NSy.js";import{s as P,a as M,c as O}from"./loadable-Cxtjdu47.js";import{c as D}from"./observers-dChcJbLk.js";import{d as I,S as $}from"./action-menu-CJIvJcHj.js";import{H as j}from"./Heading-Bh8IujNP.js";import{c as N,d as R}from"./locale-DZk4zs3G.js";import{c as U,s as _,d as K,u as W}from"./t9n-DGAjjwCE.js";import{d as q}from"./action-BXf1wMpe.js";import{d as G}from"./icon-e4UOkQGY.js";import{d as J}from"./loader-BHY6j7Y5.js";import{d as Q}from"./popover-D28pVoSI.js";import{d as V}from"./scrim-BvsM6Btn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.12.2
 */const a={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",contentBottom:"content-bottom",contentTop:"content-top",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer",footerContent:"footer-content",footerActions:"footer-actions",footerStart:"footer-start",footerEnd:"footer-end"},S={close:"close",collapse:"collapse"},p={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},i={actionBar:"action-bar",alerts:"alerts",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerEnd:"footer-end",footerStart:"footer-start",footerActions:"footer-actions"},X=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0);line-height:1.25rem}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{position:relative;display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background);outline-color:transparent;padding:var(--calcite-panel-content-space, 0)}.content-wrapper:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}`,Y=X,Z=k(class extends H{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=u(this,"calcitePanelClose",6),this.calcitePanelToggle=u(this,"calcitePanelToggle",6),this.calcitePanelScroll=u(this,"calcitePanelScroll",6),this.resizeObserver=D("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;if(!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number")return;e.scrollHeight>e.offsetHeight?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())},this.handleUserClose=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.open=()=>{this.isClosed=!1},this.close=async()=>{const e=this.beforeClose??(()=>Promise.resolve());try{await e()}catch{requestAnimationFrame(()=>{this.closed=!1});return}this.isClosed=!0},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=r(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=r(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=r(e)},this.handleActionBarSlotChange=e=>{const n=v(e).filter(o=>o==null?void 0:o.matches("calcite-action-bar"));n.forEach(o=>o.layout="horizontal"),this.hasActionBar=!!n.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=r(e)},this.handleFabSlotChange=e=>{this.hasFab=r(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=r(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=r(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=r(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=r(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=r(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=r(e)},this.setPanelScrollEl=e=>{var n,o;this.panelScrollEl=e,(n=this.resizeObserver)==null||n.disconnect(),e&&((o=this.resizeObserver)==null||o.observe(e),this.resizeHandler())},this.handleAlertsSlotChange=e=>{var n;(n=v(e))==null||n.map(o=>{o.nodeName==="CALCITE-ALERT"&&(o.embedded=!0)})},this.beforeClose=void 0,this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.isClosed=!1,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}toggleDialog(e){e?this.close():this.open()}onMessagesChange(){}connectedCallback(){F(this),N(this),U(this)}async componentWillLoad(){P(this),await _(this)}componentDidLoad(){M(this)}componentDidRender(){B(this)}disconnectedCallback(){var e;T(this),R(this),K(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){W(this,this.effectiveLocale)}async setFocus(){await O(this),z(this.containerEl)}async scrollContentTo(e){var n;(n=this.panelScrollEl)==null||n.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:n,description:o,hasHeaderContent:s}=this,l=e?t(j,{class:a.heading,level:n},e):null,c=o?t("span",{class:a.description},o):null;return!s&&(l||c)?t("div",{class:a.headerContent,key:"header-content"},l,c):null}renderActionBar(){return t("div",{class:a.actionBarContainer,hidden:!this.hasActionBar},t("slot",{name:i.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return t("div",{class:a.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},t("slot",{name:i.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return t("div",{class:{[a.headerActionsStart]:!0,[a.headerActions]:!0},hidden:!e,key:"header-actions-start"},t("slot",{name:i.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:n,closable:o,collapsed:s,collapseDirection:l,collapsible:c,hasMenuItems:f}=this,{collapse:d,expand:h,close:g}=n,m=[p.expand,p.collapse];l==="up"&&m.reverse();const b=c?t("calcite-action",{"aria-expanded":x(!s),"aria-label":d,icon:s?m[0]:m[1],id:S.collapse,onClick:this.collapse,scale:this.scale,text:d,title:s?h:d}):null,C=o?t("calcite-action",{"aria-label":g,icon:p.close,id:S.close,onClick:this.handleUserClose,scale:this.scale,text:g,title:g}):null,A=t("slot",{name:i.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),E=e||b||C||f;return t("div",{class:{[a.headerActionsEnd]:!0,[a.headerActions]:!0},hidden:!E,key:"header-actions-end"},A,this.renderMenu(),b,C)}renderMenu(){const{hasMenuItems:e,messages:n,menuOpen:o}=this;return t("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:n.options,open:o,overlayPositioning:this.overlayPositioning,placement:"bottom-end"},t("calcite-action",{icon:p.menu,scale:this.scale,slot:$.trigger,text:n.options}),t("slot",{name:i.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:n,hasEndActions:o,closable:s,collapsible:l,hasMenuItems:c,hasActionBar:f}=this,d=this.renderHeaderContent(),h=e||!!d||n||o||l||s||c;return this.showHeaderContent=h,t("header",{class:a.header,hidden:!(h||f)},t("div",{class:{[a.headerContainer]:!0,[a.headerContainerBorderEnd]:f},hidden:!h},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),d,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:n,hasFooterContent:o,hasFooterActions:s}=this,l=n||e||o||s;return t("footer",{class:a.footer,hidden:!l},t("div",{class:a.footerContent,hidden:!o},t("slot",{name:i.footer,onSlotchange:this.handleFooterSlotChange})),t("div",{class:a.footerStart,hidden:o||!n},t("slot",{name:i.footerStart,onSlotchange:this.handleFooterStartSlotChange})),t("div",{class:a.footerEnd,hidden:o||!e},t("slot",{name:i.footerEnd,onSlotchange:this.handleFooterEndSlotChange})),t("div",{class:a.footerActions,hidden:o||!s},t("slot",{key:"footer-actions-slot",name:i.footerActions,onSlotchange:this.handleFooterActionsSlotChange})))}renderContent(){return t("div",{class:a.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},t("slot",null),this.renderFab())}renderContentBottom(){return t("div",{class:a.contentBottom,hidden:!this.hasContentBottom},t("slot",{name:i.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return t("div",{class:a.contentTop,hidden:!this.hasContentTop},t("slot",{name:i.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return t("div",{class:a.fabContainer,hidden:!this.hasFab},t("slot",{name:i.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:n,panelKeyDownHandler:o,isClosed:s}=this,l=t("article",{key:"94df4953da14ffe331994b99f62c18fdaa3b900b","aria-busy":x(n),class:a.container,hidden:s,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode(),t("slot",{key:"alerts",name:i.alerts,onSlotchange:this.handleAlertsSlotChange}));return t(w,{key:"01e56f24f7ad90c69f1415f4417b35ed9539e58d",onKeyDown:o},t(L,{key:"6274bdb95260746ce36cd731d363a2d3447cfe80",disabled:e},n?t("calcite-scrim",{loading:n}):null,l))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Y}},[1,"calcite-panel",{beforeClose:[16],closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],isClosed:[32],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFab:[32],hasFooterActions:[32],hasFooterContent:[32],hasFooterEndContent:[32],hasFooterStartContent:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function ee(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,Z);break;case"calcite-action":customElements.get(e)||q();break;case"calcite-action-menu":customElements.get(e)||I();break;case"calcite-icon":customElements.get(e)||G();break;case"calcite-loader":customElements.get(e)||J();break;case"calcite-popover":customElements.get(e)||Q();break;case"calcite-scrim":customElements.get(e)||V();break}})}ee();export{Z as P,i as S,ee as d};
