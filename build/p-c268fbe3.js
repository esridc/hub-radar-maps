import{h as e,s as t,a as s}from"./p-3013819f.js";import{C as i,c as n,P as a,B as r,G as c,M as o,U as h,L as u,D as l,V as f}from"./p-8567e6fe.js";const d=()=>t.getLogger("esri.views.webgl.checkWebGLError");function m(e,t){switch(t){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const p=!!e("enable-feature:webgl-debug");function w(){return p}function b(){return p}function g(e){if(w()){const t=e.getError();if(t){const i=m(e,t),n=(new Error).stack;d().error(new s("webgl-error","WebGL error occurred",{message:i,stack:n}))}}}var x;!function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(x||(x={}));function M(e){switch(e){case i.BYTE:case i.UNSIGNED_BYTE:return 1;case i.SHORT:case i.UNSIGNED_SHORT:return 2;case i.FLOAT:case i.INT:case i.UNSIGNED_INT:return 4}}function v(e){const t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function y(e,t,s,i,n=0){const a=e.gl;e.bindBuffer(s);for(const s of i){const i=t.get(s.name);if(void 0===i){console.warn(`There is no location for vertex attribute '${s.name}' defined.`);continue}const r=n*s.stride;if(s.count<=4)a.vertexAttribPointer(i,s.count,s.type,s.normalized,s.stride,s.offset+r),a.enableVertexAttribArray(i),s.divisor>0&&e.gl.vertexAttribDivisor(i,s.divisor);else if(9===s.count)for(let t=0;t<3;t++)a.vertexAttribPointer(i+t,3,s.type,s.normalized,s.stride,s.offset+12*t+r),a.enableVertexAttribArray(i+t),s.divisor>0&&e.gl.vertexAttribDivisor(i+t,s.divisor);else if(16===s.count)for(let t=0;t<4;t++)a.vertexAttribPointer(i+t,4,s.type,s.normalized,s.stride,s.offset+16*t+r),a.enableVertexAttribArray(i+t),s.divisor>0&&e.gl?.vertexAttribDivisor(i+t,s.divisor);else console.error("Unsupported vertex attribute element count: "+s.count);if(w()){const t=v(e),i=M(s.type),n=s.offset,a=Math.round(i/n)!==i/n?`. Offset not a multiple of stride. DataType requires ${i} bytes, but descriptor has an offset of ${n}`:"";t&&console.error(`Unable to bind vertex attribute "${s.name}" with baseInstanceOffset ${r}${a}:`,t,s)}}}function D(e){switch(e){case c.ALPHA:case c.LUMINANCE:case c.RED:case c.RED_INTEGER:case a.R8:case a.R8I:case a.R8UI:case a.R8_SNORM:case r.STENCIL_INDEX8:return 1;case c.LUMINANCE_ALPHA:case c.RG:case c.RG_INTEGER:case a.RGBA4:case a.R16F:case a.R16I:case a.R16UI:case a.RG8:case a.RG8I:case a.RG8UI:case a.RG8_SNORM:case a.RGB565:case a.RGB5_A1:case r.DEPTH_COMPONENT16:return 2;case c.DEPTH_COMPONENT:case c.RGB:case c.RGB_INTEGER:case a.RGB8:case a.RGB8I:case a.RGB8UI:case a.RGB8_SNORM:case a.SRGB8:case r.DEPTH_COMPONENT24:return 3;case c.DEPTH_STENCIL:case c.DEPTH24_STENCIL8:case c.RGBA:case c.RGBA_INTEGER:case a.RGBA8:case a.R32F:case a.R11F_G11F_B10F:case a.RG16F:case a.R32I:case a.R32UI:case a.RG16I:case a.RG16UI:case a.RGBA8I:case a.RGBA8UI:case a.RGBA8_SNORM:case a.SRGB8_ALPHA8:case a.RGB9_E5:case a.RGB10_A2UI:case a.RGB10_A2:case r.DEPTH_STENCIL:case r.DEPTH_COMPONENT32F:case r.DEPTH24_STENCIL8:return 4;case r.DEPTH32F_STENCIL8:return 5;case a.RGB16F:case a.RGB16I:case a.RGB16UI:return 6;case a.RG32F:case a.RG32I:case a.RG32UI:case a.RGBA16F:case a.RGBA16I:case a.RGBA16UI:return 8;case a.RGB32F:case a.RGB32I:case a.RGB32UI:return 12;case a.RGBA32F:case a.RGBA32I:case a.RGBA32UI:return 16;case n.COMPRESSED_RGB_S3TC_DXT1_EXT:case n.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case n.COMPRESSED_RGBA_S3TC_DXT3_EXT:case n.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case n.COMPRESSED_R11_EAC:case n.COMPRESSED_SIGNED_R11_EAC:case n.COMPRESSED_RGB8_ETC2:case n.COMPRESSED_SRGB8_ETC2:case n.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case n.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case n.COMPRESSED_RG11_EAC:case n.COMPRESSED_SIGNED_RG11_EAC:case n.COMPRESSED_RGBA8_ETC2_EAC:case n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}class A{constructor(e=0,t=e){this.width=e,this.height=t,this.target=o.TEXTURE_2D,this.pixelFormat=c.RGBA,this.dataType=h.UNSIGNED_BYTE,this.samplingMode=u.LINEAR,this.wrapMode=l.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function I(e){return e.width<=0||e.height<=0?0:Math.round(e.width*e.height*(e.hasMipmap?4/3:1)*(null==e.internalFormat?4:D(e.internalFormat)))}class T extends A{constructor(e,t){switch(super(),this.context=e,Object.assign(this,t),this.internalFormat){case a.R16F:case a.R16I:case a.R16UI:case a.R32F:case a.R32I:case a.R32UI:case a.R8_SNORM:case a.R8:case a.R8I:case a.R8UI:this.pixelFormat=c.RED}}static validate(e,t){return new T(e,t)}}const _=4;let z=class e{constructor(e,t=null,i=null){if(this.type=x.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,i=t;else{const i=T.validate(e,t);if(!i)throw new s("Texture descriptor invalid");this._descriptor=i}this._descriptor.target===o.TEXTURE_CUBE_MAP?this._setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}get usedMemory(){return I(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(f.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,t){const i=this._descriptor;if(i.width!==e||i.height!==t){if(this._wasImmutablyAllocated)throw new s("Immutable textures can't be resized!");i.width=e,i.height=t,this._descriptor.target===o.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(e=null){for(let t=o.TEXTURE_CUBE_MAP_POSITIVE_X;t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z;t++)this._setData(e,t)}setData(e){this._setData(e)}_setData(t,i){if(!this._descriptor.context?.gl)return;const n=this._descriptor.context.gl;g(n),this._glName||(this._glName=n.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(f.Texture,this)),void 0===t&&(t=null);const a=this._descriptor,r=i??a.target,c=G(r);null===t&&(a.width=a.width||_,a.height=a.height||_,c&&(a.depth=a.depth??1));const o=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),L(a),this._configurePixelStorage(),g(n);const h=this._deriveInternalFormat();if(U(t)){let e="width"in t?t.width:t.codedWidth,s="height"in t?t.height:t.codedHeight;const i=1;t instanceof HTMLVideoElement&&(e=t.videoWidth,s=t.videoHeight),a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(r,h,a.hasMipmap,e,s,i),this._texImage(r,0,h,e,s,i,t),g(n),a.hasMipmap&&this.generateMipmap(),a.width||(a.width=e),a.height||(a.height=s),c&&!a.depth&&(a.depth=i)}else{const{width:e,height:i,depth:o}=a;if(null==e||null==i)throw new s("Width and height must be specified!");if(c&&null==o)throw new s("Depth must be specified!");if(a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(r,h,a.hasMipmap,e,i,o),F(t)){const c=t.levels,u=N(r,e,i,o),l=Math.min(u-1,c.length-1);n.texParameteri(a.target,this._descriptor.context.gl.TEXTURE_MAX_LEVEL,l);const f=h;if(!C(f))throw new s("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((e,t,s,i)=>{const n=c[Math.min(e,c.length-1)];this._compressedTexImage(r,e,f,t,s,i,n)}),l)}else this._texImage(r,0,h,e,i,o,t),g(n),a.hasMipmap&&this.generateMipmap()}E(n,this._descriptor),W(n,this._descriptor),$(this._descriptor.context,this._descriptor),g(n),this._descriptor.context.bindTexture(o,e.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,i,n,a,r,c,o=0){c||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const h=this._descriptor,u=this._deriveInternalFormat(),{context:l,pixelFormat:f,dataType:d,target:m,isImmutable:p}=h;if(p&&!this._wasImmutablyAllocated)throw new s("Cannot update immutable texture before allocation!");const w=l.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES,!0);(i<0||n<0||a>h.width||r>h.height||i+a>h.width||n+r>h.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:b}=l;o&&b.pixelStorei(b.UNPACK_SKIP_ROWS,o),U(c)?b.texSubImage2D(m,t,i,n,a,r,f,d,c):F(c)?b.compressedTexSubImage2D(m,t,i,n,a,r,u,c.levels[t]):b.texSubImage2D(m,t,i,n,a,r,f,d,c),o&&b.pixelStorei(b.UNPACK_SKIP_ROWS,0),l.bindTexture(w,e.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(t,i,n,a,r,c,o,h){h||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const u=this._descriptor,l=this._deriveInternalFormat(),{context:f,pixelFormat:d,dataType:m,isImmutable:p,target:w}=u;if(p&&!this._wasImmutablyAllocated)throw new s("Cannot update immutable texture before allocation!");G(w)||console.warn("Attempting to set 3D texture data on a non-3D texture");const b=f.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);f.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),(i<0||n<0||a<0||r>u.width||c>u.height||o>u.depth||i+r>u.width||n+c>u.height||a+o>u.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage();const{gl:g}=f;if(F(h))h=h.levels[t],g.compressedTexSubImage3D(w,t,i,n,a,r,c,o,l,h);else{const e=h;g.texSubImage3D(w,t,i,n,a,r,c,o,d,m,e)}f.bindTexture(b,e.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;if(!t.hasMipmap){if(this._wasImmutablyAllocated)throw new s("Cannot add mipmaps to immutable texture after allocation");t.hasMipmap=!0,this._samplingModeDirty=!0,L(t)}t.samplingMode===u.LINEAR?(this._samplingModeDirty=!0,t.samplingMode=u.LINEAR_MIPMAP_NEAREST):t.samplingMode===u.NEAREST&&(this._samplingModeDirty=!0,t.samplingMode=u.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,e.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(e.TEXTURE_UNIT_FOR_UPDATES),this._descriptor.context.gl.generateMipmap(t.target),this._descriptor.context.bindTexture(i,e.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(e){e!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=e,this._samplingModeDirty=!0)}setWrapMode(e){e!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=e,L(this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const e=this._descriptor,t=e.context.gl;this._samplingModeDirty&&(E(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(W(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===c.DEPTH_STENCIL&&(this._descriptor.internalFormat=c.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case h.FLOAT:switch(this._descriptor.pixelFormat){case c.RGBA:return this._descriptor.internalFormat=a.RGBA32F;case c.RGB:return this._descriptor.internalFormat=a.RGB32F;default:throw new s("Unable to derive format")}case h.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case c.RGBA:return this._descriptor.internalFormat=a.RGBA8;case c.RGB:return this._descriptor.internalFormat=a.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===c.DEPTH_STENCIL?c.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const e=this._descriptor.context.gl,{unpackAlignment:t,flipped:s,preMultiplyAlpha:i}=this._descriptor;e.pixelStorei(e.UNPACK_ALIGNMENT,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s?1:0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i?1:0)}_texStorage(e,t,i,n,a,r){const{gl:c}=this._descriptor.context;if(!k(t))throw new s("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const o=i?N(e,n,a,r):1;if(G(e)){if(null==r)throw new s("Missing depth dimension for 3D texture upload");c.texStorage3D(e,o,t,n,a,r)}else c.texStorage2D(e,o,t,n,a);this._wasImmutablyAllocated=!0}_texImage(e,t,i,n,a,r,c){const o=this._descriptor.context.gl,h=G(e),{isImmutable:u,pixelFormat:l,dataType:f}=this._descriptor;if(u){if(null!=c){const i=c;if(h){if(null==r)throw new s("Missing depth dimension for 3D texture upload");o.texSubImage3D(e,t,0,0,0,n,a,r,l,f,i)}else o.texSubImage2D(e,t,0,0,n,a,l,f,i)}}else{const u=c;if(h){if(null==r)throw new s("Missing depth dimension for 3D texture upload");o.texImage3D(e,t,i,n,a,r,0,l,f,u)}else o.texImage2D(e,t,i,n,a,0,l,f,u)}}_compressedTexImage(e,t,i,n,a,r,c){const o=this._descriptor.context.gl,h=G(e);if(this._descriptor.isImmutable){if(null!=c)if(h){if(null==r)throw new s("Missing depth dimension for 3D texture upload");o.compressedTexSubImage3D(e,t,0,0,0,n,a,r,i,c)}else o.compressedTexSubImage2D(e,t,0,0,n,a,i,c)}else if(h){if(null==r)throw new s("Missing depth dimension for 3D texture upload");o.compressedTexImage3D(e,t,i,n,a,r,0,c)}else o.compressedTexImage2D(e,t,i,n,a,0,c)}_forEachMipmapLevel(e,t=1/0){let{width:i,height:n,depth:a,hasMipmap:r,target:c}=this._descriptor;const h=c===o.TEXTURE_3D;if(null==i||null==n||h&&null==a)throw new s("Missing texture dimensions for mipmap calculation");for(let s=0;e(s,i,n,a),r&&(1!==i||1!==n||h&&1!==a)&&!(s>=t);++s)i=Math.max(1,i>>1),n=Math.max(1,n>>1),h&&(a=Math.max(1,a>>1))}};function L(e){(null!=e.width&&e.width<0||null!=e.height&&e.height<0||null!=e.depth&&e.depth<0)&&console.error("Negative dimension parameters are not allowed!")}function E(e,t){let s=t.samplingMode,i=t.samplingMode;s===u.LINEAR_MIPMAP_NEAREST||s===u.LINEAR_MIPMAP_LINEAR?(s=u.LINEAR,t.hasMipmap||(i=u.LINEAR)):s!==u.NEAREST_MIPMAP_NEAREST&&s!==u.NEAREST_MIPMAP_LINEAR||(s=u.NEAREST,t.hasMipmap||(i=u.NEAREST)),e.texParameteri(t.target,e.TEXTURE_MAG_FILTER,s),e.texParameteri(t.target,e.TEXTURE_MIN_FILTER,i)}function W(e,t){"number"==typeof t.wrapMode?(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(t.target,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(t.target,e.TEXTURE_WRAP_T,t.wrapMode.t))}function $(e,t){const s=e.capabilities.textureFilterAnisotropic;if(!s)return;e.gl.texParameterf(t.target,s.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy??1)}function k(e){return e in a}function C(e){return e in n}function F(e){return null!=e&&"type"in e&&"compressed"===e.type}function O(e){return null!=e&&"byteLength"in e}function U(e){return null!=e&&!F(e)&&!O(e)}function G(e){return e===o.TEXTURE_3D||e===o.TEXTURE_2D_ARRAY}function N(e,t,s,i=1){let n=Math.max(t,s);return e===o.TEXTURE_3D&&(n=Math.max(n,i)),Math.round(Math.log(n)/Math.LN2)+1}z.TEXTURE_UNIT_FOR_UPDATES=0;export{y as E,D as a,w as b,b as c,A as d,x as e,z as m,v as o,M as s,g as u};
//# sourceMappingURL=p-c268fbe3.js.map