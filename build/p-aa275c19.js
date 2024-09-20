import{y as t,aY as s,hU as i,s as e,a as r,aO as h,gn as n}from"./p-3013819f.js";import{g as a}from"./p-ec95a4fb.js";import{o}from"./p-6dec395d.js";import{h as u}from"./p-8b1f6523.js";import{o as l}from"./p-37d27f4e.js";const f=n();class c{constructor(s){this.geometryInfo=s,this._boundsStore=new o,this._featuresById=new Map,this._markedIds=new Set,this.events=new t,this.featureAdapter=l}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((s=>{null!=s.geometry&&s.geometry.coords&&(t+=s.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(t){if(null==this.fullBounds)return null;const[s,i,e,r]=this.fullBounds;return{xmin:s,ymin:i,xmax:e,ymax:r,spatialReference:u(t)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const s of t)this._add(s);this._emitChanged()}upsertMany(t){const i=t.map((t=>this._upsert(t)));return this._emitChanged(),i.filter(s)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const s=this._featuresById.get(t);return s?(this._remove(s),this._emitChanged(),s):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const s of t){const t=this._featuresById.get(s);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,s){for(const e of t){const t=this._boundsStore.get(e.objectId);t&&s(i(f,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((s=>t(s)))}forEachInBounds(t,s){this._boundsStore.forEachInBounds(t,(t=>{s(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((s,i)=>{this._markedIds.has(i)||(t=!0,this._remove(s))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const s=t.objectId;if(null==s)return void e.getLogger("esri.layers.graphics.data.FeatureStore").error(new r("featurestore:invalid-feature","feature id is missing",{feature:t}));const i=this._featuresById.get(s);let n;if(this._markedIds.add(s),i?(t.displayId=i.displayId,n=this._boundsStore.get(s),this._boundsStore.delete(s)):null!=this.onFeatureAdd&&this.onFeatureAdd(t),!t.geometry?.coords?.length)return this._boundsStore.set(s,null),void this._featuresById.set(s,t);n=a(null!=n?n:h(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=n&&this._boundsStore.set(s,n),this._featuresById.set(s,t)}_upsert(t){const s=t?.objectId;if(null==s)return e.getLogger("esri.layers.graphics.data.FeatureStore").error(new r("featurestore:invalid-feature","feature id is missing",{feature:t})),null;const i=this._featuresById.get(s);if(!i)return this._add(t),t;this._markedIds.add(s);const{geometry:n,attributes:o}=t;for(const t in o)i.attributes[t]=o[t];return n&&(i.geometry=n,this._boundsStore.set(s,a(h(),n,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),i}_remove(t){null!=this.onFeatureRemove&&this.onFeatureRemove(t);const s=t.objectId;return this._markedIds.delete(s),this._boundsStore.delete(s),this._featuresById.delete(s),t}}export{c as m};
//# sourceMappingURL=p-aa275c19.js.map