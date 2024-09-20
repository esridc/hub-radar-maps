import{e as t}from"./p-53be785a.js";import{ij as e,nU as r,nV as n,nW as o,mf as s,W as a,nX as i,U as u,hj as l,du as f,a as c,nY as d,bn as h,e5 as p,iG as w,nP as m,nZ as g,iH as b,ju as y,lY as T,mT as x,s as v,nI as _}from"./p-3013819f.js";import{e as M,r as O}from"./p-5f148c96.js";import{D as A,L as S,C as N,E as R}from"./p-8567e6fe.js";import{v as E}from"./p-9b885976.js";import{e as C}from"./p-897991e6.js";import{B as F,g as U,d as I,i as j,c as L,u as V,x as P,L as k,O as B,E as D,F as $,w as G,q as z,A as H,V as J}from"./p-7020cf1b.js";import{n as Y,t as K,o as X,r as q}from"./p-f9d50c5f.js";import{l as W,i as Q}from"./p-2e59108c.js";function Z(e,r,n){if(e.count!==r.count)return void t().error("source and destination buffers need to have the same number of elements");const o=e.count,s=n[0],a=n[1],i=n[2],u=n[3],l=n[4],f=n[5],c=n[6],d=n[7],h=n[8],p=n[9],w=n[10],m=n[11],g=n[12],b=n[13],y=n[14],T=n[15],x=e.typedBuffer,v=e.typedBufferStride,_=r.typedBuffer,M=r.typedBufferStride;for(let t=0;t<o;t++){const e=t*v,r=t*M,n=_[r],o=_[r+1],O=_[r+2],A=_[r+3];x[e]=s*n+l*o+h*O+g*A,x[e+1]=a*n+f*o+p*O+b*A,x[e+2]=i*n+c*o+w*O+y*A,x[e+3]=u*n+d*o+m*O+T*A}}function tt(t,e,r){et(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function et(e,r,n,o=4,s=o){if(e.length/o!=r.length/s)return void t().error("source and destination buffers need to have the same number of elements");const a=e.length/o,i=n[0],u=n[1],l=n[2],f=n[3],c=n[4],d=n[5],h=n[6],p=n[7],w=n[8];let m=0,g=0;for(let t=0;t<a;t++){const t=r[m],n=r[m+1],a=r[m+2],b=r[m+3];e[g]=i*t+f*n+h*a,e[g+1]=u*t+c*n+p*a,e[g+2]=l*t+d*n+w*a,e[g+3]=b,m+=s,g+=o}}function rt(t,e){const r=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,s=e.typedBuffer,a=e.typedBufferStride;for(let t=0;t<r;t++){const e=t*o,r=t*a,i=s[r],u=s[r+1],l=s[r+2],f=i*i+u*u+l*l;if(f>0){const t=1/Math.sqrt(f);n[e]=t*i,n[e+1]=t*u,n[e+2]=t*l}}}function nt(t,e,r){ot(t.typedBuffer,e,r,t.typedBufferStride)}function ot(t,e,r,n=4){const o=Math.min(t.length/n,e.count),s=e.typedBuffer,a=e.typedBufferStride;let i=0,u=0;for(let e=0;e<o;e++)t[u]=r*s[i],t[u+1]=r*s[i+1],t[u+2]=r*s[i+2],t[u+3]=r*s[i+3],i+=a,u+=n}Object.freeze(Object.defineProperty({__proto__:null,normalize:rt,scale:ot,scaleView:nt,transformMat3:et,transformMat3View:tt,transformMat4:Z},Symbol.toStringTag,{value:"Module"}));function st(t,e){at(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function at(t,s,a=2,i=a){const u=s.length/2;let l=0,f=0;if(e(s)||r(s)){for(let e=0;e<u;++e)t[l]=s[f],t[l+1]=s[f+1],l+=a,f+=i;return}const c=o(s);if(n(s))for(let e=0;e<u;++e)t[l]=Math.max(s[f]/c,-1),t[l+1]=Math.max(s[f+1]/c,-1),l+=a,f+=i;else for(let e=0;e<u;++e)t[l]=s[f]/c,t[l+1]=s[f+1]/c,l+=a,f+=i}function it(t,e,r,n){const o=t.typedBuffer,s=t.typedBufferStride,a=n?.count??t.count;let i=(n?.dstIndex??0)*s;for(let t=0;t<a;++t)o[i]=e,o[i+1]=r,i+=s}Object.freeze(Object.defineProperty({__proto__:null,fill:it,normalizeIntegerBuffer:at,normalizeIntegerBufferView:st},Symbol.toStringTag,{value:"Module"}));function ut(t,e){lt(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function lt(t,e,r=3,n=r){const o=e.length/n;let s=0,a=0;for(let i=0;i<o;++i)t[s]=e[a],t[s+1]=e[a+1],t[s+2]=e[a+2],s+=r,a+=n}function ft(t,e,r,n,o){const s=t.typedBuffer,a=t.typedBufferStride,i=o?.count??t.count;let u=(o?.dstIndex??0)*a;for(let t=0;t<i;++t)s[u]=e,s[u+1]=r,s[u+2]=n,u+=a}Object.freeze(Object.defineProperty({__proto__:null,copy:lt,copyView:ut,fill:ft},Symbol.toStringTag,{value:"Module"}));function ct(t,e){dt(t.typedBuffer,e,t.typedBufferStride)}function dt(t,e,r=4){const n=e.typedBuffer,o=e.typedBufferStride,s=e.count;let a=0,i=0;for(let e=0;e<s;++e)t[a]=n[i],t[a+1]=n[i+1],t[a+2]=n[i+2],t[a+3]=n[i+3],a+=r,i+=o}function ht(t,e,r,n,o,s){const a=t.typedBuffer,i=t.typedBufferStride,u=s?.count??t.count;let l=(s?.dstIndex??0)*i;for(let t=0;t<u;++t)a[l]=e,a[l+1]=r,a[l+2]=n,a[l+3]=o,l+=i}Object.freeze(Object.defineProperty({__proto__:null,copy:dt,copyView:ct,fill:ht},Symbol.toStringTag,{value:"Module"}));class pt{constructor(t){this._streamDataRequester=t}async loadJSON(t,e){return this._load("json",t,e)}async loadBinary(t,e){return s(t)?(a(e),i(t)):this._load("binary",t,e)}async loadImage(t,e){return this._load("image",t,e)}async _load(t,e,r){if(null==this._streamDataRequester)return(await u(e,{responseType:wt[t]})).data;const n=await l(this._streamDataRequester.request(e,t,r));if(!0===n.ok)return n.value;throw f(n.error),new c("",`Request for resource failed: ${n.error}`)}}const wt={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function mt(t={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...t}}function gt(t,e={}){return{data:t,parameters:{wrap:{s:A.REPEAT,t:A.REPEAT,...e.wrap},noUnpackFlip:!0,mipmap:!1,...e}}}function bt(t,e){const r=t.count;e||(e=new t.TypedArrayConstructor(r));for(let n=0;n<r;n++)e[n]=t.get(n);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:bt},Symbol.toStringTag,{value:"Module"}));class yt{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const e=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,e,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}}var Tt,xt;!function(t){t.SCALAR="SCALAR",t.VEC2="VEC2",t.VEC3="VEC3",t.VEC4="VEC4",t.MAT2="MAT2",t.MAT3="MAT3",t.MAT4="MAT4"}(Tt||(Tt={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(xt||(xt={}));const vt={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},_t={pbrMetallicRoughness:vt,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},Mt={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},Ot=(t={})=>{const e={...vt,...t.pbrMetallicRoughness},r=At({...Mt,...t.extras});return{..._t,...t,pbrMetallicRoughness:e,extras:r}};function At(t){switch(t.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:t.ESRI_externalColorMixMode="tint"}return t}const St={magFilter:S.LINEAR,minFilter:S.LINEAR_MIPMAP_LINEAR,wrapS:A.REPEAT,wrapT:A.REPEAT},Nt=t=>({...St,...t});function Rt(t){let e,r;return t.replace(/^(.*\/)?([^/]*)$/,((t,n,o)=>(e=n||"",r=o||"",""))),{dirPart:e,filePart:r}}const Et={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class Ct{constructor(t,e,r,n){if(this._context=t,this.uri=e,this.json=r,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=Rt(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new c("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new c("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new c("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(t,e,r){if(s(e)){const r=h(e);if(r&&"model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new Ct(t,e,n)}catch{}const n=i(e);if(Ct._isGLBData(n))return this._fromGLBData(t,e,n)}if(Pt.test(e)||"gltf"===r?.expectedType){const n=await t.loadJSON(e,r);return new Ct(t,e,n)}const n=await t.loadBinary(e,r);if(Ct._isGLBData(n))return this._fromGLBData(t,e,n);if(kt.test(e)||"glb"===r?.expectedType)throw new c("gltf-loader-invalid-glb","This is not a valid glb file.");const o=await t.loadJSON(e,r);return new Ct(t,e,o)}static _isGLBData(t){if(null==t)return!1;const e=new yt(t);return e.remainingBytes()>=4&&e.readUint32()===Et.MAGIC}static async _fromGLBData(t,e,r){const n=await Ct._parseGLBData(r);return new Ct(t,e,n.json,n.binaryData)}static async _parseGLBData(t){const e=new yt(t);if(e.remainingBytes()<12)throw new c("gltf-loader-error","glb binary data is insufficiently large.");const r=e.readUint32(),n=e.readUint32(),o=e.readUint32();if(r!==Et.MAGIC)throw new c("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(t.byteLength<o)throw new c("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==n)throw new c("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let s,a,i=0;for(;e.remainingBytes()>=8;){const t=e.readUint32(),r=e.readUint32();if(0===i){if(r!==Et.CHUNK_TYPE_JSON)throw new c("gltf-loader-error","First glb chunk must be JSON.");if(t<0)throw new c("gltf-loader-error","No JSON data found.");s=await Y(e.readUint8Array(t))}else if(1===i){if(r!==Et.CHUNK_TYPE_BIN)throw new c("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");a=e.readUint8Array(t)}else v.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");i+=1}if(!s)throw new c("gltf-loader-error","No glb JSON chunk detected.");return{json:s,binaryData:a}}async getBuffer(t,e){const r=this.json.buffers[t];if(null==r.uri){if(null==this._glbBuffer)throw new c("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(t,e);if(n.byteLength!==r.byteLength)throw new c("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(t,e){const r=this._bufferLoaders.get(t);if(r)return r;const n=this.json.buffers[t].uri,o=this._context.loadBinary(this._resolveUri(n),e).then((t=>new Uint8Array(t)));return this._bufferLoaders.set(t,o),o}async getAccessor(t,e){if(!this.json.accessors)throw new c("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[t];if(null==r?.bufferView)throw new c("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[Tt.MAT2,Tt.MAT3,Tt.MAT4])throw new c("gltf-loader-unsupported-feature",`AttributeType ${r.type} is not supported`);const n=this.json.bufferViews[r.bufferView],o=await this.getBuffer(n.buffer,e),s=jt[r.type],a=Lt[r.componentType],i=s*a,u=n.byteStride||i;return{raw:o.buffer,byteStride:u,byteOffset:o.byteOffset+(n.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:u===i,componentCount:s,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(t,e){if(null==t.indices)return;const r=await this.getAccessor(t.indices,e);if(r.isDenselyPacked)switch(r.componentType){case N.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case N.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case N.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case N.UNSIGNED_BYTE:return bt(this._wrapAccessor(I,r));case N.UNSIGNED_SHORT:return bt(this._wrapAccessor(U,r));case N.UNSIGNED_INT:return bt(this._wrapAccessor(F,r))}}async getPositionData(t,e){if(null==t.attributes.POSITION)throw new c("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(t.attributes.POSITION,e);if(r.componentType!==N.FLOAT)throw new c("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+N[r.componentType]);if(3!==r.componentCount)throw new c("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(j,r)}async getNormalData(t,e){if(null==t.attributes.NORMAL)throw new c("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(t.attributes.NORMAL,e);if(r.componentType!==N.FLOAT)throw new c("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+N[r.componentType]);if(3!==r.componentCount)throw new c("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(j,r)}async getTangentData(t,e){if(null==t.attributes.TANGENT)throw new c("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(t.attributes.TANGENT,e);if(r.componentType!==N.FLOAT)throw new c("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+N[r.componentType]);if(4!==r.componentCount)throw new c("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return new L(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(t,e){if(null==t.attributes.TEXCOORD_0)throw new c("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(t.attributes.TEXCOORD_0,e);if(2!==r.componentCount)throw new c("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===N.FLOAT)return this._wrapAccessor(V,r);if(!r.normalized)throw new c("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return Vt(r)}async getVertexColors(t,e){if(null==t.attributes.COLOR_0)throw new c("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(t.attributes.COLOR_0,e);if(4!==r.componentCount&&3!==r.componentCount)throw new c("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===N.FLOAT)return this._wrapAccessor(L,r);if(r.componentType===N.UNSIGNED_BYTE)return this._wrapAccessor(P,r);if(r.componentType===N.UNSIGNED_SHORT)return this._wrapAccessor(k,r)}else if(3===r.componentCount){if(r.componentType===N.FLOAT)return this._wrapAccessor(j,r);if(r.componentType===N.UNSIGNED_BYTE)return this._wrapAccessor(B,r);if(r.componentType===N.UNSIGNED_SHORT)return this._wrapAccessor(D,r)}throw new c("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+N[r.componentType])}hasPositions(t){return void 0!==t.attributes.POSITION}hasNormals(t){return void 0!==t.attributes.NORMAL}hasVertexColors(t){return void 0!==t.attributes.COLOR_0}hasTextureCoordinates(t){return void 0!==t.attributes.TEXCOORD_0}hasTangents(t){return void 0!==t.attributes.TANGENT}async getMaterial(t,e,r){let n=t.material?this._materialCache.get(t.material):void 0;if(!n){const o=null!=t.material?Ot(this.json.materials[t.material]):Ot(),s=o.pbrMetallicRoughness,a=this.hasVertexColors(t),i=this.getTexture(s.baseColorTexture,e),u=this.getTexture(o.normalTexture,e),l=r?this.getTexture(o.occlusionTexture,e):void 0,f=r?this.getTexture(o.emissiveTexture,e):void 0,c=r?this.getTexture(s.metallicRoughnessTexture,e):void 0,d=null!=t.material?t.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await i,normalTexture:await u,name:o.name,id:d,occlusionTexture:await l,emissiveTexture:await f,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await c,hasVertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:o.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:o.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:o.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:o.extras.ESRI_receiveAmbientOcclusion,receiveShadows:o.extras.ESRI_receiveShadows}}return n}async getTexture(t,e){if(!t)return;if(0!==(t.texCoord||0))throw new c("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=t.index,n=this.json.textures[r],o=Nt(null!=n.sampler?this.json.samplers[n.sampler]:{}),s=this._getTextureSourceId(n),a=this.json.images[s],i=await this._loadTextureImageData(r,n,e);return p(this._textureCache,r,(()=>{const t=t=>33071===t||33648===t||10497===t,e=t=>{throw new c("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${t}`)};return{data:i,wrapS:t(o.wrapS)?o.wrapS:e(o.wrapS),wrapT:t(o.wrapT)?o.wrapT:e(o.wrapT),minFilter:o.minFilter,name:a.name,id:r}}))}getNodeTransform(t){if(void 0===t)return Ft;let e=this._nodeTransformCache.get(t);if(!e){const r=this.getNodeTransform(this._getNodeParent(t)),n=this.json.nodes[t];n.matrix?e=w(M(),r,n.matrix):n.translation||n.rotation||n.scale?(e=O(r),n.translation&&m(e,e,n.translation),n.rotation&&(It[3]=E(It,n.rotation),g(e,e,It[3],It)),n.scale&&b(e,e,n.scale)):e=O(r),this._nodeTransformCache.set(t,e)}return e}_wrapAccessor(t,e){return new t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}_resolveUri(t){return y(t,this._baseUri)}_getNodeParent(t){return this._nodeParentMap.get(t)}_checkVersionSupported(){const t=T.parse(this.json.asset.version,"glTF");Ut.validate(t)}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired){if(!t.extensionsRequired.every((t=>this._supportedExtensions.includes(t))))throw new c("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}}_computeNodeParents(){this.json.nodes.forEach(((t,e)=>{t.children&&t.children.forEach((t=>{this._nodeParentMap.set(t,e)}))}))}async _loadTextureImageData(t,e,r){const n=this._textureLoaders.get(t);if(n)return n;const o=this._createTextureLoader(e,r);return this._textureLoaders.set(t,o),o}_getTextureSourceId(t){if(void 0!==t.extensions&&null!==t.extensions.KHR_texture_basisu)return t.extensions.KHR_texture_basisu.source;if(null!==t.source)return t.source;throw new c("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(t,e){const r=this._getTextureSourceId(t),n=this.json.images[r];if(n.uri){if(n.uri.endsWith(".ktx2")){const t=await this._context.loadBinary(this._resolveUri(n.uri),e);return new K(new Uint8Array(t))}return this._context.loadImage(this._resolveUri(n.uri),e)}if(null==n.bufferView)throw new c("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new c("gltf-loader-unsupported-feature","Image mimeType must be defined.");const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,e);if(null!=o.byteStride)throw new c("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const a=s.byteOffset+(o.byteOffset||0);return X(new Uint8Array(s.buffer,a,o.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const t=await x(Array.from(this._bufferLoaders.values())),e=await x(Array.from(this._textureLoaders.values()));return t.reduce(((t,e)=>t+(e?.byteLength??0)),0)+e.reduce(((t,e)=>t+(e?q(e)?e.data.byteLength:e.width*e.height*4:0)),0)}}const Ft=d(M(),Math.PI/2),Ut=new T(2,0,"glTF"),It=C(),jt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lt={[N.BYTE]:1,[N.UNSIGNED_BYTE]:1,[N.SHORT]:2,[N.UNSIGNED_SHORT]:2,[N.FLOAT]:4,[N.INT]:4,[N.UNSIGNED_INT]:4};function Vt(t){switch(t.componentType){case N.BYTE:return new J(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case N.UNSIGNED_BYTE:return new H(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case N.SHORT:return new z(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case N.UNSIGNED_SHORT:return new G(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case N.UNSIGNED_INT:return new $(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case N.FLOAT:return new V(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount)}}const Pt=/\.gltf$/i,kt=/\.glb$/i;let Bt=0;async function Dt(t,e,r={},n=!0){const o=await Ct.load(t,e,r),s="gltf_"+Bt++,a={lods:[],materials:new Map,textures:new Map,meta:$t(o)},i=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type),u=o.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,l=new Map;await Gt(o,(async(t,e,i,u)=>{const f=l.get(i)??0;l.set(i,f+1);const c=void 0!==t.mode?t.mode:R.TRIANGLES,d=c===R.TRIANGLES||c===R.TRIANGLE_STRIP||c===R.TRIANGLE_FAN?c:null;if(null==d)return void v.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+R[c]+"). Skipping primitive.");if(!o.hasPositions(t))return void v.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const h=o.getPositionData(t,r),p=o.getMaterial(t,r,n),w=o.hasNormals(t)?o.getNormalData(t,r):null,m=o.hasTangents(t)?o.getTangentData(t,r):null,g=o.hasTextureCoordinates(t)?o.getTextureCoordinates(t,r):null,b=o.hasVertexColors(t)?o.getVertexColors(t,r):null,y=o.getIndexData(t,r),T={name:u,transform:O(e),attributes:{position:await h,normal:w?await w:null,texCoord0:g?await g:null,color:b?await b:null,tangent:m?await m:null},indices:await y,primitiveType:d,material:Ht(a,await p,s)};let x=null;null!=a.meta?.ESRI_lod&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(x=a.meta.ESRI_lod.thresholds[i]),a.lods[i]=a.lods[i]||{parts:[],name:u,lodThreshold:x},a.lods[i].parts[f]=T}));for(const t of a.lods)t.parts=t.parts.filter((t=>!!t));const f=await o.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:i,uri:o.uri,ESRI_webstyle:u},customMeta:{},size:f}}function $t(t){const e=t.json;let r=null;return e.nodes.forEach((t=>{const e=t.extras;null!=e&&(e.ESRI_proxyEllipsoid||e.ESRI_lod)&&(r=e)})),r}async function Gt(t,e){const r=t.json,n=r.scenes[r.scene||0].nodes,o=n.length>1,s=[];for(const t of n){const e=r.nodes[t];if(s.push(a(t,0)),zt(e)&&!o){e.extensions.MSFT_lod.ids.forEach(((t,e)=>a(t,e+1)))}}async function a(n,o){const i=r.nodes[n],u=t.getNodeTransform(n);if(null!=i.weights&&v.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=i.mesh){const t=r.meshes[i.mesh];for(const r of t.primitives)s.push(e(r,u,o,t.name))}for(const t of i.children||[])s.push(a(t,o))}await Promise.all(s)}function zt(t){return t.extensions?.MSFT_lod&&Array.isArray(t.extensions.MSFT_lod.ids)}function Ht(t,e,r){const n=e=>{const n=`${r}_tex_${e&&e.id}${e?.name?"_"+e.name:""}`;if(e&&!t.textures.has(n)){const r=gt(e.data,{wrap:{s:e.wrapS,t:e.wrapT},mipmap:Jt.has(e.minFilter),noUnpackFlip:!0});t.textures.set(n,r)}return n},o=`${r}_mat_${e.id}_${e.name}`;if(!t.materials.has(o)){const r=mt({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?n(e.colorTexture):void 0,textureNormal:e.normalTexture?n(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?n(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?n(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?n(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});t.materials.set(o,r)}return o}const Jt=new Set([S.LINEAR_MIPMAP_LINEAR,S.LINEAR_MIPMAP_NEAREST]);function Yt(t,e){switch(e){case R.TRIANGLES:return Kt(t);case R.TRIANGLE_STRIP:return Xt(t);case R.TRIANGLE_FAN:return qt(t)}}function Kt(t){return"number"==typeof t?W(t):_(t)?new Uint16Array(t):t}function Xt(t){const e="number"==typeof t?t:t.length;if(e<3)return[];const r=e-2,n=Q(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;e+=1)e%2==0?(n[t++]=e,n[t++]=e+1,n[t++]=e+2):(n[t++]=e+1,n[t++]=e,n[t++]=e+2)}else{let e=0;for(let o=0;o<r;o+=1)o%2==0?(n[e++]=t[o],n[e++]=t[o+1],n[e++]=t[o+2]):(n[e++]=t[o+1],n[e++]=t[o],n[e++]=t[o+2])}return n}function qt(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint16Array(0);const r=e-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof t){let t=0;for(let e=0;e<r;++e)n[t++]=0,n[t++]=e+1,n[t++]=e+2;return n}const o=t[0];let s=t[1],a=0;for(let e=0;e<r;++e){const r=t[e+2];n[a++]=o,n[a++]=s,n[a++]=r,s=r}return n}const Wt=2.1;export{at as a,lt as b,Wt as c,ft as d,rt as e,et as f,ht as g,st as h,it as i,nt as j,ct as k,Dt as l,ut as m,pt as n,Yt as o,tt as r,dt as t,ot as u};
//# sourceMappingURL=p-be07fada.js.map