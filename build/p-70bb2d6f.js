import{dR as t,dS as e,dX as i,dU as s,dY as n}from"./p-3013819f.js";import{t as o,f as a}from"./p-49ae4733.js";import{g as c}from"./p-fe91e791.js";import{i as l}from"./p-43877d33.js";import{s as r,a as h,c as d}from"./p-77f2a655.js";import{d as u}from"./p-9131549e.js";import{d as p}from"./p-39f987a6.js";import{d as f}from"./p-7dec6513.js";import{d as m}from"./p-df5915d3.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */function x(t,e){return(t+e)%e}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */const b={menu:"menu",defaultTrigger:"default-trigger"};const g={tooltip:"tooltip",trigger:"trigger"};const v={menu:"ellipsis"};const I="data-active";const E=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-color-text-2)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}::slotted(calcite-action-group:last-child){border-block-end:0}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}";const k=["ArrowUp","ArrowDown","End","Home"];const w=t(class t extends e{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteActionMenuOpen=i(this,"calciteActionMenuOpen",6);this.actionElements=[];this.guid=`calcite-action-menu-${c()}`;this.menuId=`${this.guid}-menu`;this.menuButtonId=`${this.guid}-menu-button`;this.connectMenuButtonEl=()=>{const{menuButtonId:t,menuId:e,open:i,label:s}=this;const n=this.slottedMenuButtonEl||this.defaultMenuButtonEl;if(this.menuButtonEl===n){return}this.disconnectMenuButtonEl();this.menuButtonEl=n;this.setTooltipReferenceElement();if(!n){return}n.active=i;n.setAttribute("aria-controls",e);n.setAttribute("aria-expanded",o(i));n.setAttribute("aria-haspopup","true");if(!n.id){n.id=t}if(!n.label){n.label=s}if(!n.text){n.text=s}n.addEventListener("click",this.menuButtonClick);n.addEventListener("keydown",this.menuButtonKeyDown)};this.disconnectMenuButtonEl=()=>{const{menuButtonEl:t}=this;if(!t){return}t.removeEventListener("click",this.menuButtonClick);t.removeEventListener("keydown",this.menuButtonKeyDown)};this.setMenuButtonEl=t=>{const e=t.target.assignedElements({flatten:true}).filter((t=>t?.matches("calcite-action")));this.slottedMenuButtonEl=e[0];this.connectMenuButtonEl()};this.setDefaultMenuButtonEl=t=>{this.defaultMenuButtonEl=t;this.connectMenuButtonEl()};this.handleCalciteActionClick=()=>{this.open=false;this.setFocus()};this.menuButtonClick=()=>{this.toggleOpen()};this.updateTooltip=t=>{const e=t.target.assignedElements({flatten:true}).filter((t=>t?.matches("calcite-tooltip")));this.tooltipEl=e[0];this.setTooltipReferenceElement()};this.setTooltipReferenceElement=()=>{const{tooltipEl:t,expanded:e,menuButtonEl:i,open:s}=this;if(t){t.referenceElement=!e&&!s?i:null}};this.updateAction=(t,e)=>{const{guid:i,activeMenuItemIndex:s}=this;const n=`${i}-action-${e}`;t.tabIndex=-1;t.setAttribute("role","menuitem");if(!t.id){t.id=n}t.toggleAttribute(I,e===s)};this.updateActions=t=>{t?.forEach(this.updateAction)};this.handleDefaultSlotChange=t=>{const e=t.target.assignedElements({flatten:true}).reduce(((t,e)=>{if(e?.matches("calcite-action")){t.push(e);return t}if(e?.matches("calcite-action-group")){return t.concat(Array.from(e.querySelectorAll("calcite-action")))}return t}),[]);this.actionElements=e.filter((t=>!t.disabled&&!t.hidden))};this.menuButtonKeyDown=t=>{const{key:e}=t;const{actionElements:i,activeMenuItemIndex:s,open:n}=this;if(!i.length){return}if(l(e)){t.preventDefault();if(!n){this.toggleOpen();return}const e=i[s];e?e.click():this.toggleOpen(false)}if(e==="Tab"){this.open=false;return}if(e==="Escape"){this.toggleOpen(false);t.preventDefault();return}this.handleActionNavigation(t,e,i)};this.handleActionNavigation=(t,e,i)=>{if(!this.isValidKey(e,k)){return}t.preventDefault();if(!this.open){this.toggleOpen();if(e==="Home"||e==="ArrowDown"){this.activeMenuItemIndex=0}if(e==="End"||e==="ArrowUp"){this.activeMenuItemIndex=i.length-1}return}if(e==="Home"){this.activeMenuItemIndex=0}if(e==="End"){this.activeMenuItemIndex=i.length-1}const s=this.activeMenuItemIndex;if(e==="ArrowUp"){this.activeMenuItemIndex=x(Math.max(s-1,-1),i.length)}if(e==="ArrowDown"){this.activeMenuItemIndex=x(s+1,i.length)}};this.toggleOpenEnd=()=>{this.setFocus();this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)};this.toggleOpen=(t=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd);this.open=t};this.handlePopoverOpen=()=>{this.open=true};this.handlePopoverClose=()=>{this.open=false};this.appearance="solid";this.expanded=false;this.flipPlacements=undefined;this.label=undefined;this.open=false;this.overlayPositioning="absolute";this.placement="auto";this.scale=undefined;this.menuButtonEl=undefined;this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){r(this)}componentDidLoad(){h(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=false;this.setTooltipReferenceElement()}openHandler(t){this.activeMenuItemIndex=this.open?0:-1;if(this.menuButtonEl){this.menuButtonEl.active=t}this.calciteActionMenuOpen.emit();this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){await d(this);return a(this.menuButtonEl)}renderMenuButton(){const{appearance:t,label:e,scale:i,expanded:n}=this;const o=s("slot",{name:g.trigger,onSlotchange:this.setMenuButtonEl},s("calcite-action",{appearance:t,class:b.defaultTrigger,icon:v.menu,scale:i,text:e,textEnabled:n,ref:this.setDefaultMenuButtonEl}));return o}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:i,menuId:n,menuButtonEl:o,label:a,placement:c,overlayPositioning:l,flipPlacements:r}=this;const h=t[e];const d=h?.id||null;return s("calcite-popover",{autoClose:true,flipPlacements:r,focusTrapDisabled:true,label:a,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:i,overlayPositioning:l,placement:c,pointerDisabled:true,referenceElement:o},s("div",{"aria-activedescendant":d,"aria-labelledby":o?.id,class:b.menu,id:n,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},s("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return s(n,null,this.renderMenuButton(),this.renderMenuItems(),s("slot",{name:g.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(t,e){return!!e.find((e=>e===t))}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return E}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},undefined,{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}]);function y(){if(typeof customElements==="undefined"){return}const t=["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"];t.forEach((t=>{switch(t){case"calcite-action-menu":if(!customElements.get(t)){customElements.define(t,w)}break;case"calcite-action":if(!customElements.get(t)){u()}break;case"calcite-icon":if(!customElements.get(t)){p()}break;case"calcite-loader":if(!customElements.get(t)){f()}break;case"calcite-popover":if(!customElements.get(t)){m()}break}}))}y();export{w as A,g as S,y as d};
//# sourceMappingURL=p-70bb2d6f.js.map