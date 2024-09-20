import{an as e,ao as t,ap as s,dG as i,kZ as r,dK as a,aN as n,cp as o,k6 as l,lC as p,fx as d,ec as u,f7 as c,lD as h,U as y,g as f,mH as m,hq as w,hr as g,hs as b,h1 as v,ht as j,kz as I,kA as S,dE as F,fa as O,aX as L,mI as x,l3 as P,mJ as E,s as D,du as A,h9 as R,b_ as T,a as q,fS as k,dc as N,kt as _,d5 as C,ds as G,mK as U,av as $,ld as Q,lg as M,X as V,cJ as z,mL as K,mM as H,m2 as W,kE as Z,kR as J,kP as B,kQ as X,kD as Y,mN as ee,ku as te,kv as se,g2 as ie,l5 as re,kw as ae}from"./p-3013819f.js";import{$ as ne}from"./p-e2bfcaec.js";import{i as oe,m as le}from"./p-dc0c3631.js";import{L as pe,P as de}from"./p-d6176718.js";import{m as ue,s as ce}from"./p-2bc3fd1d.js";import{s as he}from"./p-60807dd5.js";import{s as ye,l as fe,u as me,m as we}from"./p-b2c2432c.js";import{r as ge,t as be}from"./p-c2c5c63d.js";import{a as ve}from"./p-1cc0bf3b.js";import{j as je}from"./p-253c68bc.js";import{I as Ie,y as Se,Z as Fe}from"./p-01c01bc2.js";import{$ as Oe}from"./p-82998583.js";import{n as Le,p as xe}from"./p-c779faaf.js";import"./p-3b51db5e.js";import"./p-5dea0c0d.js";import"./p-10315be7.js";import"./p-5f148c96.js";import"./p-71ed4ac4.js";import"./p-a276ccf5.js";import"./p-9b885976.js";import"./p-897991e6.js";import"./p-5bd0bced.js";import"./p-1ed893a0.js";import"./p-53be785a.js";import"./p-7020cf1b.js";import"./p-c60ccdaa.js";import"./p-508fdb0a.js";import"./p-2e59108c.js";import"./p-c887d4a8.js";import"./p-1f7d3618.js";import"./p-37592f90.js";import"./p-a111f32d.js";import"./p-22d74e36.js";import"./p-894e6a6a.js";import"./p-c99b552a.js";import"./p-4fb66b05.js";import"./p-055b59cb.js";import"./p-8be499c9.js";import"./p-52a3c31d.js";import"./p-a76822de.js";import"./p-5f878e96.js";import"./p-897087fa.js";import"./p-933bb056.js";import"./p-d8a5b509.js";import"./p-94b36fbe.js";import"./p-e48a887a.js";import"./p-004ef643.js";let Pe=class extends i{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};e([t({type:String,json:{read:!0,write:!0}})],Pe.prototype,"name",void 0),e([t({type:String,json:{read:!0,write:!0}})],Pe.prototype,"field",void 0),e([t({type:[Number],json:{read:!0,write:!0}})],Pe.prototype,"currentRangeExtent",void 0),e([t({type:[Number],json:{read:!0,write:!0}})],Pe.prototype,"fullRangeExtent",void 0),e([t({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Pe.prototype,"type",void 0),Pe=e([s("esri.layers.support.RangeInfo")],Pe);var Ee;let De=Ee=class extends(r(a.ofType(n))){constructor(e){super(e)}clone(){return new Ee(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((s=>{if(!t.equals(s.spatialReference)){if(!o(s.spatialReference,t))return e?.messages&&e.messages.push(new l("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const i=new n;p(s,i,t),s=i}const i=s.toJSON(e);return delete i.spatialReference,i})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new l("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const s=new Ee;return e.forEach((e=>s.add(n.fromJSON(e,t)))),s}};De=Ee=e([s("esri.layers.support.PolygonCollection")],De);const Ae=De;var Re;let Te=Re=class extends i{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new Ae,this._geometriesSource=null}initialize(){this.addHandles(u((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),c))}readGeometries(e,t,s){Array.isArray(e)?this.geometries=Ae.fromJSON(e,s):this._geometriesSource={url:h(e,s),context:s}}async loadGeometries(e,t){if(null==this._geometriesSource)return;const{url:s,context:i}=this._geometriesSource,r=await y(s,{responseType:"json",signal:t?.signal}),a=e.toJSON(),n=r.data.map((e=>({...e,spatialReference:a})));this.geometries=Ae.fromJSON(n,i),this._geometriesSource=null}clone(){const e=new Re({geometries:f(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};e([t({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],Te.prototype,"spatialRelationship",void 0),e([t({type:Ae,nonNullable:!0,json:{write:!0}}),je({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],Te.prototype,"geometries",void 0),e([d(["web-scene","portal-item"],"geometries")],Te.prototype,"readGeometries",null),Te=Re=e([s("esri.layers.support.SceneFilter")],Te);const qe=Te;async function ke(e){const t=[];for(const s of e)s.name.toLowerCase().endsWith(".zip")?t.push(Ne(s)):t.push(Promise.resolve(s));return(await Promise.all(t)).flat()}async function Ne(e){const{BlobReader:t,ZipReader:s,BlobWriter:i}=await import("./p-116db40a.js"),r=[],a=new s(new t(e));return(await a.getEntries()).forEach((e=>{if(e.directory||/^__MACOS/i.test(e.filename))return;const t=new i,s=e.getData?.(t).then((t=>new File([t],e.filename)));s&&r.push(s)})),Promise.all(r)}const _e=new Set(["3DObject","Point"]),Ce=ae();let Ge=class extends(ue(m(pe(w(g(b(v(j(I(S(F(O)))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new a,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const s=this.getFeatureType(t?.feature)?.domains?.[e];return s&&"inherited"!==s.type?s:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new L(this.fields)}readNodePages(e,t,s){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:ye.fromJSON(e,s)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&x(this.associatedLayer)}get geometryType(){return $e[this.profile]||"mesh"}set renderer(e){P(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=null!=e?e:ce;const{query:t,queryRelated:s,editing:{supportsGlobalId:i,supportsRollbackOnFailure:r,supportsUploadWithItemId:a,supportsGeometryUpdate:n,supportsReturnServiceEditsInSourceSpatialReference:o},data:{supportsZ:l,supportsM:p,isVersioned:d,supportsAttachment:u},operations:{supportsEditing:c,supportsAdd:h,supportsUpdate:y,supportsDelete:f,supportsQuery:m,supportsQueryAttachments:w,supportsAsyncConvert3D:g}}=e,b=e.operations.supportsChangeTracking,v=!!this.associatedLayer?.infoFor3D&&E();return{query:t,queryRelated:s,editing:{supportsGlobalId:i,supportsReturnServiceEditsInSourceSpatialReference:o,supportsRollbackOnFailure:r,supportsGeometryUpdate:v&&n,supportsUploadWithItemId:a},data:{supportsAttachment:u,supportsZ:l,supportsM:p,isVersioned:d},operations:{supportsQuery:m,supportsQueryAttachments:w,supportsEditing:c&&b,supportsAdd:v&&h&&b,supportsDelete:v&&f&&b,supportsUpdate:y&&b,supportsAsyncConvert3D:g}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const s=t.store.profile;return null!=s&&Ue[s]?Ue[s]:(D.getLogger(this).error("Unknown or missing profile",{profile:s,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(A),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await R(this,{origin:"service"},t),P(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){D.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new T;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new q("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new q("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const s=k(this.fieldsIndex,await Le(this,xe(this)));return Oe(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,s,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const s=await this.queryCachedAttributes(e,[t]);if(!s||0===s.length)throw new q("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const i=new N;return i.attributes=s[0],i.layer=this,i.sourceLayer=this,i}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(D.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return _(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new q("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new q("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new q("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const s=this.fieldsIndex.get(e);if(!s)throw new q("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const e of this.statisticsInfo)if(e.name===s.name){const s=C(this.parsedUrl.path,e.href);return y(s,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new q("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(de.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(de.SAVE,e)}async applyEdits(e,t){const{applyEdits:s}=await import("./p-c4c86fe6.js");let i=t;await this.load();const r=this.associatedLayer;if(!r)throw new q(`${this.type}-layer:not-editable`,"Service is not editable");await r.load();const{globalIdField:a}=r,n=!!r.infoFor3D,o=i?.globalIdUsed??!0;if(n&&null==a)throw new q(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(n&&!o)throw new q(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return G(r.url)&&n&&null!=e.deleteFeatures&&null!=a&&(i={...i,globalIdToObjectId:await U(r,e.deleteFeatures,a)}),s(this,r.source,e,i)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new q(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const s=e=>{throw D.getLogger(this).error(".convertMesh()",e.message),e};await this.load(),this.infoFor3D||s(new q("invalid:layer","SceneLayer has no capability for mesh conversion"));const i=await this.extractAndFilterFiles(e),r=i.reduce(((e,t)=>ge(this.infoFor3D,t)?e+1:e),0);0===r&&s(new oe),r>1&&s(new le);const a=this.spatialReference,n=t?.location??new $({x:0,y:0,z:0,spatialReference:a}),o=n.spatialReference.isGeographic?"local":"georeferenced",l=ne.createWithExternalSource(n,i,{vertexSpace:o}),[p]=await this.uploadAssets([l],t);return p}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;if(!t)return e;return(await ke(e)).filter((e=>be(t,e)))}validateLayer(e){if(e.layerType&&!_e.has(e.layerType))throw new q("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new q("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new q("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(e,t){let s=!1,i=!1;if(null==e)s=!0,i=!0;else{const r=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":s=!0,i=r;break;case"vertex-reference-frame":s=!0,i=!r;break;default:s=!1}}if(!s)throw new q("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!i)throw new q("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new q("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),s=!!this.associatedLayer?.fields?.some((t=>t&&e.name===t.name)),i={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||s,supportsLayerQuery:s};this._fieldUsageInfo[e.name]=i}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const s=this.getField(t.name);s?(!s.domain&&t.domain&&(s.domain=t.domain.clone()),s.editable=t.editable,s.nullable=t.nullable,s.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=M(this);for(let s=0;s<e.length;s++){const i=e[s],r=this.originIdOf(i),a=this.associatedLayer.originIdOf(i);r<a&&(a===Q.SERVICE||a===Q.PORTAL_ITEM)&&t.setAtOrigin(i,this.associatedLayer[i],a)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.editingInfo?.lastEditDate,t=this.associatedLayer?.serverGens,s=this.associatedLayer?.getAtOrigin("fullExtent","service");if(!E()||null==this.associatedLayer?.infoFor3D||!s||!G(this.associatedLayer?.url)||!e||this.serviceUpdateTimeStamp?.lastUpdate===e.getTime()||!this.serviceUpdateTimeStamp&&t?.minServerGen===t?.serverGen)return;M(this).setAtOrigin("fullExtent",s.clone(),Q.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:s,portalItem:i}=await he(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),r=await ve.FeatureLayer();this.associatedLayer=new r({url:t,customParameters:this.customParameters,layerId:s,portalItem:i}),await this.associatedLayer.load()}catch(e){V(e)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await z((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?D.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):D.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&Ie(D.getLogger(this),Se("Mesh scene layers","relative-to-scene",e)),Ie(D.getLogger(this),Fe("Scene layers",e))}};e([t({types:{key:"type",base:K,typeMap:{selection:H}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],Ge.prototype,"featureReduction",void 0),e([t({type:[Pe],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],Ge.prototype,"rangeInfos",void 0),e([t({json:{read:!1}})],Ge.prototype,"associatedLayer",void 0),e([t({type:["show","hide"]})],Ge.prototype,"listMode",void 0),e([t({type:["ArcGISSceneServiceLayer"]})],Ge.prototype,"operationalLayerType",void 0),e([t({json:{read:!1},readOnly:!0})],Ge.prototype,"type",void 0),e([t({...Ce.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Ge.prototype,"fields",void 0),e([t()],Ge.prototype,"types",null),e([t()],Ge.prototype,"typeIdField",null),e([t()],Ge.prototype,"templates",null),e([t()],Ge.prototype,"formTemplate",null),e([t({readOnly:!0,clonable:!1})],Ge.prototype,"fieldsIndex",null),e([t({type:W,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],Ge.prototype,"floorInfo",void 0),e([t(Ce.outFields)],Ge.prototype,"outFields",void 0),e([t({type:ye,readOnly:!0,json:{read:!1}})],Ge.prototype,"nodePages",void 0),e([d("service","nodePages",["nodePages","pointNodePages"])],Ge.prototype,"readNodePages",null),e([t({type:[fe],readOnly:!0})],Ge.prototype,"materialDefinitions",void 0),e([t({type:[me],readOnly:!0})],Ge.prototype,"textureSetDefinitions",void 0),e([t({type:[we],readOnly:!0})],Ge.prototype,"geometryDefinitions",void 0),e([t({readOnly:!0})],Ge.prototype,"serviceUpdateTimeStamp",void 0),e([t({readOnly:!0})],Ge.prototype,"attributeStorageInfo",void 0),e([t({readOnly:!0})],Ge.prototype,"statisticsInfo",void 0),e([t({type:a.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],Ge.prototype,"excludeObjectIds",void 0),e([t({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Ge.prototype,"definitionExpression",void 0),e([t({type:qe,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],Ge.prototype,"filter",void 0),e([t({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Ge.prototype,"path",void 0),e([t(Z)],Ge.prototype,"elevationInfo",null),e([t({readOnly:!0,json:{read:!1}})],Ge.prototype,"effectiveCapabilities",null),e([t({readOnly:!0})],Ge.prototype,"effectiveEditingEnabled",null),e([t({type:String})],Ge.prototype,"geometryType",null),e([t(J)],Ge.prototype,"labelsVisible",void 0),e([t({type:[B],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:X},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:X},write:!0}})],Ge.prototype,"labelingInfo",void 0),e([t(Y)],Ge.prototype,"legendEnabled",void 0),e([t({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const s=t.layerDefinition?.drawingInfo?.transparency;return void 0!==s?ee(s):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],Ge.prototype,"opacity",void 0),e([t({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Ge.prototype,"priority",void 0),e([t({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],Ge.prototype,"semantic",void 0),e([t({types:te,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],Ge.prototype,"renderer",null),e([t({json:{read:!1}})],Ge.prototype,"cachedDrawingInfo",void 0),e([d("service","cachedDrawingInfo")],Ge.prototype,"readCachedDrawingInfo",null),e([t({readOnly:!0,json:{read:!1}})],Ge.prototype,"capabilities",null),e([t({type:Boolean,json:{read:!1}})],Ge.prototype,"editingEnabled",null),e([t({readOnly:!0,json:{write:!1,read:!1}})],Ge.prototype,"infoFor3D",null),e([t({readOnly:!0,json:{write:!1,read:!1}})],Ge.prototype,"relationships",null),e([t(se)],Ge.prototype,"popupEnabled",void 0),e([t({type:ie,json:{name:"popupInfo",write:!0}})],Ge.prototype,"popupTemplate",void 0),e([t({readOnly:!0,json:{read:!1}})],Ge.prototype,"defaultPopupTemplate",null),e([t({type:String,json:{read:!1}})],Ge.prototype,"objectIdField",void 0),e([d("service","objectIdField",["objectIdField","fields"])],Ge.prototype,"readObjectIdField",null),e([t({type:String,json:{read:!1}})],Ge.prototype,"globalIdField",void 0),e([d("service","globalIdField",["globalIdField","fields"])],Ge.prototype,"readGlobalIdField",null),e([t({readOnly:!0,type:String,json:{read:!1}})],Ge.prototype,"displayField",null),e([t({type:String,json:{read:!1}})],Ge.prototype,"profile",void 0),e([d("service","profile",["store.profile"])],Ge.prototype,"readProfile",null),e([t({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],Ge.prototype,"normalReferenceFrame",void 0),e([t(re)],Ge.prototype,"screenSizePerspectiveEnabled",void 0),e([t({json:{read:!1,origins:{service:{read:!0}}}})],Ge.prototype,"serviceItemId",void 0),Ge=e([s("esri.layers.SceneLayer")],Ge);const Ue={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},$e={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},Qe=Ge;export default Qe;
//# sourceMappingURL=p-64f3b273.js.map