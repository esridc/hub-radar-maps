import{dK as t,an as e,ao as i,ap as s}from"./p-3013819f.js";import{m as r,u as a}from"./p-4e55d8f0.js";import"./p-3b51db5e.js";import"./p-0d83e514.js";import"./p-7b13247d.js";import"./p-b362a32c.js";import"./p-8567e6fe.js";import"./p-c268fbe3.js";let p=class extends(r(a)){constructor(){super(...arguments),this.layerViews=new t}get dynamicGroupLayerView(){return this.layerViews.find((t=>t.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((t=>t.layer===this.layer?.footprintLayer))}update(t){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})])}detach(){this.container.removeAllChildren()}isUpdating(){return this.layerViews.some((t=>t.updating))}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((t,e)=>this.container.addChildAt(t.container,e)))}};e([i()],p.prototype,"dynamicGroupLayerView",null),e([i()],p.prototype,"footprintLayerView",null),e([i()],p.prototype,"layerViews",void 0),p=e([s("esri.views.2d.layers.CatalogLayerView2D")],p);const o=p;export default o;
//# sourceMappingURL=p-36decdea.js.map