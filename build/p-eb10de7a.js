import{$ as e,j as r}from"./p-296bc59a.js";import{cK as a,da as t,cN as s,d0 as o}from"./p-3013819f.js";import{p}from"./p-52a3c31d.js";import"./p-055b59cb.js";import"./p-8be499c9.js";import"./p-5f878e96.js";import"./p-897087fa.js";import"./p-3b51db5e.js";import"./p-a76822de.js";const i="Media Layer",n="media-layer-save",m="media-layer-save-as",c=["media-layer:unsupported-source"];function u(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function l(e){return a(e,"portal-item",!0)}function d(e){return e.layerJSON}async function f(e,r){const{title:a,fullExtent:p}=e;r.title||=a,r.extent=p?await t(p):null,s(r,o.METADATA)}async function y(r,a){return e({layer:r,itemType:i,validateLayer:u,createJSONContext:e=>l(e),createItemData:d,errorNamePrefix:n,supplementalUnsupportedErrors:c,saveResources:(e,a)=>p(r.resourceReferences,a)},a)}async function j(e,a,t){return r({layer:e,itemType:i,validateLayer:u,createJSONContext:e=>l(e),createItemData:d,errorNamePrefix:m,supplementalUnsupportedErrors:c,newItem:a,setItemProperties:f,saveResources:(r,a)=>p(e.resourceReferences,a)},t)}export{y as save,j as saveAs};
//# sourceMappingURL=p-eb10de7a.js.map