import{dO as n,co as t,U as r,d5 as e,aM as o,dP as u,c_ as s}from"./p-3013819f.js";import{t as l}from"./p-71d25f62.js";const a="Layer does not support extent calculation.";function c(n,t){const r=n.geometry,e=n.toJSON(),s=e;if(null!=r&&(s.geometry=JSON.stringify(r),s.geometryType=o(r),s.inSR=u(r.spatialReference)),e.topFilter?.groupByFields&&(s.topFilter.groupByFields=e.topFilter.groupByFields.join(",")),e.topFilter?.orderByFields&&(s.topFilter.orderByFields=e.topFilter.orderByFields.join(",")),e.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),e.objectIds&&(s.objectIds=e.objectIds.join(",")),e.orderByFields&&(s.orderByFields=e.orderByFields.join(",")),e.outFields&&!(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?e.outFields.includes("*")?s.outFields="*":s.outFields=e.outFields.join(","):delete s.outFields,e.outSR?s.outSR=u(e.outSR):r&&e.returnGeometry&&(s.outSR=s.inSR),e.returnGeometry&&delete e.returnGeometry,e.timeExtent){const n=e.timeExtent,{start:t,end:r}=n;null==t&&null==r||(s.time=t===r?t:`${t??"null"},${r??"null"}`),delete e.timeExtent}return s}async function f(t,r,e,o){const u=await p(t,r,"json",o);return n(r,e,u.data),u}async function i(n,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{objectIds:[]}}:p(n,t,"json",r,{returnIdsOnly:!0})}async function d(n,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{count:0,extent:null}}:p(n,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((n=>{const t=n.data;if(t.hasOwnProperty("extent"))return n;if(t.features)throw new Error(a);if(t.hasOwnProperty("count"))throw new Error(a);return n}))}function y(n,t,r){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):p(n,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function p(n,o,u,a={},f={}){const i="string"==typeof n?s(n):n,d=o.geometry?[o.geometry]:[];return a.responseType="pbf"===u?"array-buffer":"json",t(d,null,a).then((n=>{const t=n?.[0];null!=t&&((o=o.clone()).geometry=t);const s=l({...i.query,f:u,...f,...c(o,f)});return r(e(i.path,"queryTopFeatures"),{...a,query:{...s,...a.query}})}))}export{y as a,d,i as m,f as p};
//# sourceMappingURL=p-5d36a036.js.map