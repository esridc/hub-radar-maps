import{hs as e,ht as s,fa as t,nj as r,an as a,ao as o,ap as n,a as i}from"./p-3013819f.js";import"./p-3b51db5e.js";let p=class extends(e(s(t))){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((e,s)=>{r((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let t="Unsupported layer type";e&&(t+=" "+e),s(new i("layer:unsupported-layer-type",t,{layerType:e}))}))})))}read(e,s){const t={resourceInfo:e};null!=e.id&&(t.id=e.id),null!=e.title&&(t.title=e.title),super.read(t,s)}write(e,s){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};a([o({readOnly:!0})],p.prototype,"resourceInfo",void 0),a([o({type:["show","hide"]})],p.prototype,"listMode",void 0),a([o({type:Boolean,readOnly:!1})],p.prototype,"persistenceEnabled",void 0),a([o({json:{read:!1},readOnly:!0,value:"unsupported"})],p.prototype,"type",void 0),p=a([n("esri.layers.UnsupportedLayer")],p);const l=p;export default l;
//# sourceMappingURL=p-8edc12c4.js.map