import{aX as e,a as t,hV as s,hR as i,hT as n,aM as r,hS as a,br as o,cs as l}from"./p-3013819f.js";import{e as d,n as p,t as u}from"./p-ec95a4fb.js";import{t as f,n as c}from"./p-b0cbd61d.js";import{m}from"./p-aa275c19.js";import{x as y,j as h}from"./p-8b1f6523.js";import{$ as j}from"./p-37d27f4e.js";import{i as I,o as b,a as g}from"./p-a047dd27.js";import{j as F,f as T,p as R,d as x,y as w}from"./p-8c0cd8a3.js";import"./p-3b51db5e.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-94b15954.js";import"./p-6dec395d.js";import"./p-9a9a9a0b.js";import"./p-4f73c6ea.js";import"./p-a20ea8a0.js";import"./p-1cf43261.js";import"./p-976040d8.js";import"./p-9a63ab56.js";import"./p-c1b8730f.js";import"./p-2779f4bc.js";import"./p-b821ae32.js";const v=l,E={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:l},S={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function D(e){return o(e)?null!=e.z:!!e.hasZ}function O(e){return o(e)?null!=e.m:!!e.hasM}class Q{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(r){const o=[],{features:l}=r,d=this._inferLayerProperties(l,r.fields),p=r.fields||[],u=null!=r.hasM?r.hasM:!!d.hasM,h=null!=r.hasZ?r.hasZ:!!d.hasZ,F=!r.spatialReference&&!d.spatialReference,T=F?v:r.spatialReference||d.spatialReference,R=F?E:null,x=r.geometryType||d.geometryType,w=!x;let D=r.objectIdField||d.objectIdField,O=r.timeInfo;const Q=new e(p);if(!w&&(F&&o.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!x))throw new t("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!D)throw new t("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(d.objectIdField&&D!==d.objectIdField&&(o.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${D}" doesn't match the field name "${d.objectIdField}", found in the provided fields`}),D=d.objectIdField),D&&!d.objectIdField){const e=Q.get(D);e?(D=e.name,e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):p.unshift({alias:D,name:D,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const e of p){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),!e.name)throw new t("feature-layer:invalid-field-name","field name is missing",{field:e});if(e.name===D&&(e.type="esriFieldTypeOID"),!s.jsonValues.includes(e.type))throw new t("feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e});null==e.length&&(e.length=i(e))}const M={};for(const e of p)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=n(e);void 0!==t&&(M[e.name]=t)}if(O){if(O.startTimeField){const e=Q.get(O.startTimeField);e?(O.startTimeField=e.name,e.type="esriFieldTypeDate"):O.startTimeField=null}if(O.endTimeField){const e=Q.get(O.endTimeField);e?(O.endTimeField=e.name,e.type="esriFieldTypeDate"):O.endTimeField=null}if(O.trackIdField){const e=Q.get(O.trackIdField);e?O.trackIdField=e.name:(O.trackIdField=null,o.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:O}}))}O.startTimeField||O.endTimeField||(o.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:O}}),O=null)}const Z=Q.dateFields.length?{timeZoneIANA:r.dateFieldsTimeZone??a}:null;this._createDefaultAttributes=I(M,D);const q={warnings:o,featureErrors:[],layerDefinition:{...S,drawingInfo:b(x),templates:g(M),extent:R,geometryType:x,objectIdField:D,fields:p,hasZ:h,hasM:u,timeInfo:O,dateFieldsTimeReference:Z},assignedObjectIds:{}};if(this._queryEngine=new j({fieldsIndex:e.fromLayerJSON({fields:p,timeInfo:O,dateFieldsTimeReference:Z}),geometryType:x,hasM:u,hasZ:h,objectIdField:D,spatialReference:T,featureStore:new m({geometryType:x,hasM:u,hasZ:h}),timeInfo:O,cacheSpatialQueries:!0}),!l?.length)return this._nextObjectId=f,q;const P=c(D,l);return this._nextObjectId=P+1,await y(l,T),this._loadInitialFeatures(q,l)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([F(t,s),y(e.adds,t),y(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,i,n=null,a=null,o=null;for(const t of e){const e=t.geometry;if(null!=e&&(n||(n=r(e)),a||(a=e.spatialReference),null==s&&(s=D(e)),null==i&&(i=O(e)),n&&a&&null!=s&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||i}))&&(o=e.name)}return{geometryType:n,spatialReference:a,objectIdField:o,hasM:i,hasZ:s}}async _loadInitialFeatures(e,t){const{geometryType:s,hasM:i,hasZ:n,objectIdField:a,spatialReference:o,featureStore:l,fieldsIndex:p}=this._queryEngine,u=[];for(const i of t){if(null!=i.uid&&(e.assignedObjectIds[i.uid]=-1),i.geometry&&s!==r(i.geometry)){e.featureErrors.push(T("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),n=R(p,t,i.attributes,!0);n?e.featureErrors.push(n):(this._assignObjectId(t,i.attributes,!0),i.attributes=t,null!=i.uid&&(e.assignedObjectIds[i.uid]=i.attributes[a]),null!=i.geometry&&(i.geometry=h(i.geometry,i.geometry.spatialReference,o)),u.push(i))}l.addMany(d([],u,s,n,i,a));const{fullExtent:f,timeExtent:c}=await this._queryEngine.fetchRecomputedExtents();if(e.layerDefinition.extent=f,c){const{start:t,end:s}=c;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}async _applyEdits(e){const{adds:t,updates:s,deletes:i}=e,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t?.length&&this._applyAddEdits(n,t),s?.length&&this._applyUpdateEdits(n,s),i?.length){for(const e of i)n.deleteResults.push(x(e));this._queryEngine.featureStore.removeManyById(i)}const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:a,featureEditResults:n}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:n,hasZ:a,objectIdField:o,spatialReference:l,featureStore:p,fieldsIndex:u}=this._queryEngine,f=[];for(const n of t){if(n.geometry&&i!==r(n.geometry)){s.push(T("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=R(u,t,n.attributes);if(a)s.push(a);else{if(this._assignObjectId(t,n.attributes),n.attributes=t,null!=n.uid){const t=n.attributes[o];e.uidToObjectId[n.uid]=t}if(null!=n.geometry){const e=n.geometry.spatialReference??l;n.geometry=h(w(n.geometry,e),e,l)}f.push(n),s.push(x(n.attributes[o]))}}p.addMany(d([],f,i,a,n,o))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:n,objectIdField:a,spatialReference:o,featureStore:l,fieldsIndex:d}=this._queryEngine;for(const f of t){const{attributes:t,geometry:c}=f,m=t?.[a];if(null==m){e.push(T(`Identifier field ${a} missing`));continue}if(!l.has(m)){e.push(T(`Feature with object id ${m} missing`));continue}const y=p(l.getFeature(m),s,n,i);if(null!=c){if(s!==r(c)){e.push(T("Incorrect geometry type."));continue}const t=c.spatialReference??o;y.geometry=h(w(c,t),t,o)}if(t){const s=R(d,y.attributes,t);if(s){e.push(s);continue}}l.add(u(y,s,n,i,a)),e.push(x(m))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;s&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}export default Q;
//# sourceMappingURL=p-6a0282d8.js.map