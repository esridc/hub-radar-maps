import{h0 as s,h1 as e,fa as t,fh as i,an as r,ao as a,h2 as h,h3 as n,ap as o}from"./p-3013819f.js";let d=class extends(s(e(t))){constructor(s){super(s),this.elevationInfo=null,this.graphics=new i,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(s){return this.graphics.add(s),this}addMany(s){return this.graphics.addMany(s),this}removeAll(){return this.graphics.removeAll(),this}remove(s){this.graphics.remove(s)}removeMany(s){this.graphics.removeMany(s)}on(s,e){return super.on(s,e)}graphicChanged(s){this.emit("graphic-update",s)}};r([a({type:h})],d.prototype,"elevationInfo",void 0),r([a(n(i,"graphics"))],d.prototype,"graphics",void 0),r([a({type:["show","hide"]})],d.prototype,"listMode",void 0),r([a()],d.prototype,"screenSizePerspectiveEnabled",void 0),r([a({readOnly:!0})],d.prototype,"type",void 0),r([a({constructOnly:!0})],d.prototype,"internal",void 0),d=r([o("esri.layers.GraphicsLayer")],d);const p=d;export{p as h};
//# sourceMappingURL=p-b4639a86.js.map