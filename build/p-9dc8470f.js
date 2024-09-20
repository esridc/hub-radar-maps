import{hQ as e,hR as t,a as i,aj as n,X as s,s as r,c_ as o,U as a,aX as l,hS as c,hT as f,ch as u,cj as d,cf as p,ck as m,bt as h,cs as y,hf as b}from"./p-3013819f.js";import{e as w,n as g}from"./p-b821ae32.js";import{t as j}from"./p-4f73c6ea.js";import{t as N}from"./p-1f0b604e.js";import{e as F}from"./p-94b15954.js";import{m as x}from"./p-aa275c19.js";import{x as I}from"./p-8b1f6523.js";import{$ as T}from"./p-37d27f4e.js";import{a as v}from"./p-4953a39e.js";import{i as _,o as E}from"./p-a047dd27.js";import"./p-3b51db5e.js";import"./p-ec95a4fb.js";import"./p-347800d3.js";import"./p-6dec395d.js";import"./p-9a9a9a0b.js";import"./p-a20ea8a0.js";import"./p-1cf43261.js";import"./p-976040d8.js";import"./p-9a63ab56.js";import"./p-c1b8730f.js";import"./p-2779f4bc.js";const S=/^\s*"([\S\s]*)"\s*$/,D=/""/g,C="\n",O=[","," ",";","|","\t"];function*k(e,t,i){let n=0;for(;n<=e.length;){const s=e.indexOf(t,n),r=e.substring(n,s>-1?s:void 0);n+=r.length+t.length,i&&!r.trim()||(yield r)}}function P(e){const t=e.includes("\r\n")?"\r\n":C;return k(e,t,!0)}function R(e,t){return k(e,t,!1)}function q(e,t,i){e=e.trim(),t=t?.trim();const n=[],s=Array.from(new Set([i?.delimiter,...O])).filter((e=>null!=e));for(const i of s){const s=V(e,i).length,r=V(t,i).length??s;s>1&&n.push({weight:Math.min(s,r),delimiter:i})}const r=n.sort((({weight:e},{weight:t})=>t-e)).map((({delimiter:e})=>e));for(const t of r){const n=M(L(e,t).names,i?.longitudeField,i?.latitudeField);if(n.longitudeFieldName&&n.latitudeFieldName)return{delimiter:t,locationInfo:n}}return{delimiter:r[0],locationInfo:null}}function*A(e,t,i,n=(()=>Object.create(null))){const s=P(e);s.next();let r="",o="",a=0,l=n(),c=0;e:for(const e of s){const s=R(e,i);for(const e of s)if(r+=o+e,o="",a+=G(e),a%2==0){if(a>0){const e=S.exec(r);if(!e){l=n(),c=0,r="",a=0;continue e}l[t[c]]=e[1].replaceAll(D,'"'),c++}else l[t[c]]=r,c++;r="",a=0}else o=i;0===a?(yield l,l=n(),c=0):o=C}}function L(t,i){const n=V(t,i).filter((e=>null!=e)),s=n.map((t=>e(t)));for(let e=s.length-1;e>=0;e--)s[e]||(s.splice(e,1),n.splice(e,1));return{names:s,aliases:n}}function V(e,t){if(!e?.length)return[];const i=[];let n="",s="",r=0;const o=R(e,t);for(const e of o)if(n+=s+e,s="",r+=G(e),r%2==0){if(r>0){const e=S.exec(n);e&&i.push(e[1].replaceAll(D,'"'))}else i.push(n);n="",r=0}else s=t;return i}function G(e){let t=0,i=0;for(i=e.indexOf('"',i);i>=0;)t++,i=e.indexOf('"',i+1);return t}function M(t,i,n){i=e(i)?.toLowerCase(),n=e(n)?.toLowerCase();const s=t.map((e=>e.toLowerCase())),r=i?t[s.indexOf(i)]:null,o=n?t[s.indexOf(n)]:null;return{longitudeFieldName:r||t[s.indexOf(U.find((e=>s.includes(e))))],latitudeFieldName:o||t[s.indexOf(J.find((e=>s.includes(e))))]}}function Z(e,i,n,s,r){const o=[],a=A(e,n,i),l=[];for(const e of a){if(10===l.length)break;l.push(e)}for(let e=0;e<n.length;e++){const i=n[e],a=s[e];if(i===r.longitudeFieldName||i===r.latitudeFieldName)o.push({name:i,type:"esriFieldTypeDouble",alias:a});else{let e;switch(Q(l.map((e=>e[i])))){case"integer":e="esriFieldTypeInteger";break;case"double":e="esriFieldTypeDouble";break;case"date":e="esriFieldTypeDate";break;default:e="esriFieldTypeString"}o.push({name:i,type:e,alias:a,length:t(e)})}}return o}function Q(e){if(!e.length)return"string";const t=/[^+\-.,0-9]/;return e.map((e=>{if(""!==e){if(!t.test(e)){let t=B(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!Number.isNaN(t))return"double";if(e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t)))return"double"}}return w(e)?"date":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const B=function(){const e=v(),t=new RegExp("^"+e.regexp+"$"),i=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return s=>{const r=t.exec(s);if(e.factor=n,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(i,"").replace(e.decimal,"."),+o*e.factor}}(),J=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],U=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];const X=E("esriGeometryPoint"),$=["csv"],z=[0,0];class H{constructor(e,t){this.x=e,this.y=t}}class K{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t={}){this._loadOptions=e;const[i]=await Promise.all([this._fetch(t.signal),this._checkProjection(e?.parsingOptions?.spatialReference)]),n=W(i,e);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const s=await this._createFeatures(i);this._queryEngine.featureStore.addMany(s);const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=r,o){const{start:e,end:t}=o;n.layerDefinition.timeInfo.timeExtent=[e,t]}return n}async applyEdits(){throw new i("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=n(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),s(e)||r.getLogger("esri.layers.CSVLayer").error(new i("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:o}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions;if(!t)throw new i("csv-layer:invalid-source","url not defined");const s=o(t);return(await a(s.path,{query:{...s.query,...n},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:i,extent:n,timeInfo:s}=e.layerDefinition,r=new x({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new T({fieldsIndex:l.fromLayerJSON({fields:i,dateFieldsTimeReference:{timeZoneIANA:c}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:t,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:i}=this._locationInfo,{objectIdField:n,fieldsIndex:s,spatialReference:r}=this._queryEngine;let o=[];const a=[],l=s.fields.filter((e=>e.name!==n)).map((e=>e.name));let c=0;const y={};for(const e of s.fields)if("esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type){const t=f(e);void 0!==t&&(y[e.name]=t)}const b=A(e,l,this._delimiter,_(y,n));for(const e of b){const r=this._parseCoordinateValue(e[t]),l=this._parseCoordinateValue(e[i]);if(null!=l&&null!=r&&!isNaN(r)&&!isNaN(l)){e[t]=r,e[i]=l;for(const n in e)if(n!==t&&n!==i)if(s.isDateField(n))e[n]=g(e[n]);else if(s.isNumericField(n)){const t=B(e[n]);isNaN(t)?e[n]=null:e[n]=t}e[n]=c,c++,o.push(new H(l,r)),a.push(e)}}if(!u({wkid:4326},r))if(d(r))for(const e of o)[e.x,e.y]=p(e.x,e.y,z);else o=m(j,o,h.WGS84,r,null,null);const w=[];for(let e=0;e<o.length;e++){const{x:t,y:i}=o[e],s=a[e];s[n]=e+1,w.push(new N(new F([],[t,i]),s,null,s[n]))}return w}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=B(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await I(y,e)}catch{throw new i("csv-layer:projection-not-supported","Projection not supported")}}}function W(e,t){const n=t.parsingOptions||{},s={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},r=s.layerDefinition={name:b(t.url,$)||"csv",dateFieldsTimeReference:{timeZoneIANA:c},drawingInfo:X,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:4326}}},o=P(e),a=o.next().value?.trim(),f=o.next().value?.trim();if(!a)throw new i("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:u,locationInfo:d}=q(a,f,n);if(!u)throw new i("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:a,secondLine:f,parsingOptions:n});if(!d)throw new i("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:a,secondLine:f,parsingOptions:n});s.locationInfo=d,s.delimiter=u;const{names:p,aliases:m}=L(a,u),h=Z(e,s.delimiter,p,m,s.locationInfo);if(n.fields?.length){const e=new l(n.fields);for(const t of h){const i=e.get(t.name);i&&Object.assign(t,i)}}if(!h.some((e=>"esriFieldTypeOID"===e.type&&(r.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};r.objectIdField=e.name,h.unshift(e)}r.fields=h;const y=new l(r.fields);if(s.locationInfo&&(s.locationInfo.latitudeFieldName=y.get(s.locationInfo.latitudeFieldName).name,s.locationInfo.longitudeFieldName=y.get(s.locationInfo.longitudeFieldName).name),r.timeInfo){const e=r.timeInfo;if(e.startTimeField){const t=y.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=y.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=y.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(r.timeInfo=null)}return s}export default K;
//# sourceMappingURL=p-9dc8470f.js.map