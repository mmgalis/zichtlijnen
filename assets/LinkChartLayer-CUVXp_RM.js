const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lclayout-BFsDnb4N.js","assets/index-FXsJ6CNr.js","assets/index-1kXkUciu.css"])))=>i.map(i=>d[i]);
import{_ as Se,fW as He,dX as $e,dZ as Oe,V as Ce,b5 as ke,k as ie,D as H,f5 as Me,e$ as q,n as Be,ba as Fe,b7 as be,iA as Ee,e as v,y as A,a as Ue,x as ze}from"./index-FXsJ6CNr.js";import{M as je,h as Qe,a as de,w as _,b as ne,c as se,D as x,I as Ve}from"./KnowledgeGraphSublayer-Bhdn9YNH.js";import{R as Ye}from"./knowledgeGraphService-31A22C8a.js";import"./FeatureStore-DDcJm6c-.js";import"./BoundsStore-BPty7wfR.js";import"./PooledRBush-DDWO3yyx.js";import"./quickselect-Z13tFAW-.js";import"./QueryEngine-B4VL97fz.js";import"./WhereClause-DdRE8w39.js";import"./TimeOnly-DTwWyTcN.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-YjYJHCnf.js";import"./utils-DsRBPdzr.js";import"./ClassBreaksDefinition-B65POkxt.js";import"./optimizedFeatureQueryEngineAdapter-Bi8ZSJnM.js";import"./clientSideDefaults-CGpFHjUQ.js";import"./GraphQueryStreaming-ChXJp8pT.js";var re;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absoluteValue"})(re||(re={}));let pe,L=null;function We(){return pe||(pe=Se(()=>import("./lclayout-BFsDnb4N.js"),__vite__mapDeps([0,1,2])).then(e=>e.l).then(({default:e})=>e({locateFile:i=>He(`esri/libs/linkchartlayout/${i}`)})).then(e=>{qe(e)}),pe)}function qe(e){L=e}var $,oe;function V(e,i,a,t,o,l){const n=a.length,u=o.length,C=Float64Array.BYTES_PER_ELEMENT,p=Uint32Array.BYTES_PER_ELEMENT,c=Uint8Array.BYTES_PER_ELEMENT,s=16,g=s+n*(c+2*C)+u*(2*p),f=L._malloc(g);try{const h=f+s-f%s,M=h+n*C,b=M+n*C,D=b+u*p,I=D+u*p,y=()=>[L.HEAPF64.subarray(h>>3,(h>>3)+n),L.HEAPF64.subarray(M>>3,(M>>3)+n),L.HEAPU32.subarray(b>>2,(b>>2)+u),L.HEAPU32.subarray(D>>2,(D>>2)+u),L.HEAPU8.subarray(I,I+n)],[R,F,O,U,B]=y();R.set(a),F.set(t),O.set(o),U.set(l),B.set(i);let S=e(n,I,h,M,u,b,D),T=null,P=null;if(S){const Y=L.getLayoutLinksTypes(),r=L.getLayoutLinksVerticesEndIndices(),d=L.getLayoutLinksVertices(),m=L.countLayoutLinksVertices();!u||Y&&r?m&&!d?S=!1:(T={types:new Uint8Array(L.HEAPU8.subarray(Y,Y+u)),vertexEndIndex:new Uint32Array(L.HEAPU32.subarray(r>>2,(r>>2)+u)),vertices:new Float64Array(L.HEAPF64.subarray(d>>3,(d>>3)+2*m))},P=L.getAuxiliaryGraphicElements()):S=!1}const[J,K,X,Z,ee]=y();return a.set(J),t.set(K),o.set(X),l.set(Z),i.set(ee),{success:S,links:T,graphics:P}}finally{L._free(f),L.cleanupLayout()}}(function(e){e[e.None=0]="None",e[e.IsMovable=1]="IsMovable",e[e.IsGeographic=2]="IsGeographic",e[e.IsRoot=4]="IsRoot"})($||($={})),function(e){e[e.Regular=0]="Regular",e[e.Orthogonal=1]="Orthogonal",e[e.Curved=2]="Curved",e[e.Recursive=3]="Recursive"}(oe||(oe={}));const we=2,Te=1,De=-1;var ce,ye,ge,me,fe,Le,xe,Ne,ve;(function(e){function i(){return L.getMinIdealEdgeLength()}function a(t,o,l,n,u,C=we,p=Te,c=De){return V((s,g,f,h,M,b,D)=>L.applyForceDirectedLayout(s,g,f,h,M,b,D,C,p,c),t,o,l,n,u)}e.getMinIdealEdgeLength=i,e.apply=a})(ce||(ce={})),function(e){function i(a,t,o,l,n,u=we,C=Te,p=De){return V((c,s,g,f,h,M,b)=>L.applyCommunityLayout(c,s,g,f,h,M,b,u,C,p),a,t,o,l,n)}e.apply=i}(ye||(ye={})),function(e){function i(a,t,o,l,n){return V(L.applySimpleLayout,a,t,o,l,n)}e.apply=i}(ge||(ge={})),function(e){function i(a,t,o,l,n){return V(L.applyHierarchicalLayout,a,t,o,l,n)}e.apply=i}(me||(me={})),function(e){function i(a,t,o,l,n){return V(L.applyRadialTreeLayout,a,t,o,l,n)}e.apply=i}(fe||(fe={})),function(e){function i(a,t,o,l,n){return V(L.applySmartTreeLayout,a,t,o,l,n)}e.apply=i}(Le||(Le={})),function(e){function i(a,t,o,l,n,u,C,p,c){return V((s,g,f,h,M,b,D)=>{if(l.length!==s||n.length!==s||p.length!==M||c.length!==M)return!1;const I=Float64Array.BYTES_PER_ELEMENT,y=16,R=L._malloc(y+s*I),F=L._malloc(y+s*I),O=L._malloc(y+M*I),U=L._malloc(y+M*I),B=R+y-R%y,S=F+y-F%y,T=O+y-O%y,P=U+y-U%y;try{return L.HEAPF64.subarray(B>>3,(B>>3)+s).set(l),L.HEAPF64.subarray(S>>3,(S>>3)+s).set(n),L.HEAPF64.subarray(T>>3,(T>>3)+M).set(p),L.HEAPF64.subarray(P>>3,(P>>3)+M).set(c),L.applyChronologicalLayout(s,g,f,h,B,S,M,b,D,T,P)}finally{L._free(R),L._free(F),L._free(O),L._free(U)}},a,t,o,u,C)}e.apply=i}(xe||(xe={})),function(e){e[e.Undirected=0]="Undirected",e[e.Directed=1]="Directed",e[e.Reversed=2]="Reversed"}(Ne||(Ne={})),function(e){e[e.ByCC_Raw=0]="ByCC_Raw",e[e.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",e[e.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"}(ve||(ve={}));let N=class extends $e(Oe(ze)){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new Ce,this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new ke({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.sublayerIdsCache=new Map,this.tables=new Ce,this.type="link-chart",this._originalInclusionList=e.inclusionModeDefinition,e.dataPreloadedInLocalCache&&!e.inclusionModeDefinition)throw new ie("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it")}normalizeCtorArgs(e){return{url:e.url,title:e.title,dataPreloadedInLocalCache:e.dataPreloadedInLocalCache,defaultLinkChartConfig:e.defaultLinkChartConfig}}_initializeLayerProperties(e){var l,n,u,C,p,c;if(!this.title&&this.url){const s=this.url.split("/");this.title=s[s.length-2]}const i=new Set;let a=[],t=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new ie("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");(l=e.knowledgeGraph.dataModel.entityTypes)==null||l.forEach(s=>{s.name&&this._graphTypeLookup.set(s.name,s)}),(n=e.knowledgeGraph.dataModel.relationshipTypes)==null||n.forEach(s=>{s.name&&this._graphTypeLookup.set(s.name,s)}),(u=e.inclusionModeDefinition)!=null&&u.generateAllSublayers?(a=e.knowledgeGraph.dataModel.entityTypes??[],t=e.knowledgeGraph.dataModel.relationshipTypes??[]):(C=e.inclusionModeDefinition)!=null&&C.namedTypeDefinitions&&((p=e.inclusionModeDefinition)==null?void 0:p.namedTypeDefinitions.size)>0?(c=e.inclusionModeDefinition)==null||c.namedTypeDefinitions.forEach((s,g)=>{var h,M;const f=this._graphTypeLookup.get(g);if(!f)return H.getLogger(this).warn(`A named type, ${g}, was in the inclusion list that wasn't in the data model and will be removed`),void((h=e.inclusionModeDefinition)==null?void 0:h.namedTypeDefinitions.delete(g));f.type==="relationship"?i.has(g)||(i.add(g),t.push(f)):f.type==="entity"?i.has(g)||(i.add(g),a.push(f)):(H.getLogger(this).warn(`A named type, ${g}, was in the inclusion list that wasn't properly modeled and will be removed`),(M=e.inclusionModeDefinition)==null||M.namedTypeDefinitions.delete(g))}):(a=e.knowledgeGraph.dataModel.entityTypes??[],t=e.knowledgeGraph.dataModel.relationshipTypes??[]);const o=new je({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=a,this.memberRelationshipTypes=t,this.dataManager=o}load(e){return this.addResolvingPromise(new Promise(i=>{Ye(this.url).then(a=>{var t,o,l,n,u,C;if(this._initializeLayerProperties({knowledgeGraph:a,inclusionModeDefinition:this._originalInclusionList}),(o=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)!=null&&o.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},(l=this.dataManager.knowledgeGraph.dataModel.entityTypes)==null||l.forEach(p=>{var c;p.name&&((c=this.dataManager.inclusionModeDefinition)==null||c.namedTypeDefinitions.set(p.name,{useAllData:!0}))}),(n=this.dataManager.knowledgeGraph.dataModel.relationshipTypes)==null||n.forEach(p=>{var c;p.name&&((c=this.dataManager.inclusionModeDefinition)==null||c.namedTypeDefinitions.set(p.name,{useAllData:!0}))})),this.dataPreloadedInLocalCache)this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),(u=this.dataManager.inclusionModeDefinition)==null||u.namedTypeDefinitions.forEach(p=>{var c;p.useAllData=!1,(c=p.members)==null||c.forEach(s=>{let g;g=s.linkChartLocation instanceof Me?s.linkChartLocation:s.linkChartLocation?q(s.linkChartLocation):null,g&&g.coords.length===2&&g.lengths.length===0?this.entityLinkChartDiagramLookup.set(s.id,g):this.relationshipLinkChartDiagramLookup.set(s.id,g)}),this.addResolvingPromise(this._initializeDiagram().then(async()=>{this.layers.forEach(async s=>{await s.refreshCachedQueryEngine()}),this.tables.forEach(async s=>{await s.refreshCachedQueryEngine()})}))});else{const p=((C=this.defaultLinkChartConfig)==null?void 0:C.layoutMode)==="GEOGRAPHIC";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,p,!0).then(async()=>{Be(e);const c=[],s=[];this.loadLayerAssumingLocalCache(),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1,this.dataManager.inclusionModeDefinition.namedTypeDefinitions.forEach(g=>{g.useAllData=!1})),await this._initializeDiagram(),this.layers.forEach(g=>{s.push(g.refreshCachedQueryEngine()),c.push(new Promise(f=>{g.on("layerview-create",()=>{f(null)})}))}),this.tables.forEach(g=>{s.push(g.refreshCachedQueryEngine())}),await Promise.all(s)}))}i(null)})})),Promise.resolve(this)}async addRecords(e,i){let a=[];i!=null&&i.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(a=await Qe(e,this.dataManager.knowledgeGraph));const t=e.concat(a).filter(o=>{var l;return!((l=this.sublayerIdsCache.get(o.typeName))!=null&&l.has(o.id))});await this._handleNewRecords(t)}async removeRecords(e,{cascadeRemoveRelationships:i=!0,recalculateLayout:a=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){var l,n,u,C,p,c,s,g;let t=[];for(const f of e)((u=(n=(l=this.dataManager.inclusionModeDefinition)==null?void 0:l.namedTypeDefinitions)==null?void 0:n.get(f.typeName))==null?void 0:u.useAllData)===!1&&((s=(c=(p=(C=this.dataManager.inclusionModeDefinition)==null?void 0:C.namedTypeDefinitions)==null?void 0:p.get(f.typeName))==null?void 0:c.members)!=null&&s.has(f.id))&&t.push(f);if(i){const f=new Set,h=[];for(const M of t)if(this.dataManager.nodeConnectionsLookup.has(M.id))for(const b of this.dataManager.nodeConnectionsLookup.get(M.id))f.add(b);for(const M of f)if(this.dataManager.memberIdTypeLookup.has(M))for(const b of this.dataManager.memberIdTypeLookup.get(M))this.dataManager.relationshipTypeNames.has(b)&&h.push({id:M,typeName:b});t=t.concat(h)}this.dataManager.removeFromLayer(t);for(const f of t)(g=this.sublayerIdsCache.get(f.typeName))==null||g.delete(f.id),this.dataManager.relationshipTypeNames.has(f.typeName)?this.relationshipLinkChartDiagramLookup.delete(f.id):this.entityLinkChartDiagramLookup.delete(f.id);a&&await this.calculateLinkChartLayout(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const o=[];return this.layers.forEach(f=>{o.push(f.refreshCachedQueryEngine())}),await Promise.all(o),this._refreshNamedTypes(),t}async expand(e,i){const a=await this.dataManager.getConnectedRecordIds(e,i),t=a.filter(o=>{var l;return!((l=this.sublayerIdsCache.get(o.typeName))!=null&&l.has(o.id))});return await this._handleNewRecords(a),{records:t}}loadLayerAssumingLocalCache(){var e,i;this.memberRelationshipTypes.forEach(a=>{const t=new de({objectType:a,parentCompositeLayer:this,graphType:"relationship",title:a.name});t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.has(a.name)||this.dataManager.sublayerCaches.set(a.name,new Map)}),this.memberEntityTypes.forEach(a=>{const t=new de({objectType:a,parentCompositeLayer:this,graphType:"entity",title:a.name});t.geometryType?this.layers.push(t):this.tables.push(t),this.dataManager.sublayerCaches.has(a.name)||this.dataManager.sublayerCaches.set(a.name,new Map)}),(e=this.dataManager.inclusionModeDefinition)!=null&&e.namedTypeDefinitions&&((i=this.dataManager.inclusionModeDefinition)==null||i.namedTypeDefinitions.forEach((a,t)=>{var l;const o=Fe(this.sublayerIdsCache,t,()=>new Set);(l=a.members)==null||l.forEach(n=>{if(o.add(n.id),n.linkChartLocation)if(n.linkChartLocation instanceof Me)this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(n.id,n.linkChartLocation):this.entityLinkChartDiagramLookup.set(n.id,n.linkChartLocation);else{const u=q(n.linkChartLocation);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(n.id,n.linkChartLocation?u:null):this.entityLinkChartDiagramLookup.set(n.id,n.linkChartLocation?u:null)}})}))}async calculateLinkChartLayout(e="RADIAL_TREE",i){var Z,ee,Y;const a=[],t=[],o=[];this.dataManager.sublayerCaches.forEach((r,d)=>{this.dataManager.entityTypeNames.has(d)?r.forEach(m=>{a.push({typeName:d,feature:m})}):this.dataManager.relationshipTypeNames.has(d)&&r.forEach(m=>{t.push({typeName:d,feature:m})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const l=new Map,n=new Map,u=new Map,C=new Map,p=new Uint8Array(a.length),c=new Float64Array(a.length),s=new Float64Array(a.length),g=new Uint32Array(t.length),f=new Uint32Array(t.length),h=[],M="FORCE_DIRECTED",b=new ke({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let D,I="FORCE_DIRECTED",y=0,R=0;switch(I=e==="GEOGRAPHIC"?M:e,I){case"FORCE_DIRECTED":D=ce.apply;break;case"COMMUNITY":D=ye.apply;break;case"HIERARCHICAL":D=me.apply;break;case"RADIAL_TREE":D=fe.apply;break;case"SMART_TREE":D=Le.apply;break;default:D=ge.apply}a.forEach(({typeName:r,feature:d})=>{var m,z,j;if((m=i==null?void 0:i.lockedNodeLocations)!=null&&m.has(d.attributes[_])){e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(r)?p[y]=$.IsGeographic:p[y]=$.None;const k=i.lockedNodeLocations.get(d.attributes[_]);c[y]=k.x,s[y]=k.y}else if(e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(r)){p[y]=$.IsGeographic;let k=null;const E=d.attributes[this.dataManager.geographicLookup.get(r).name];switch((z=this.dataManager.geographicLookup.get(r))==null?void 0:z.geometryType){case"esriGeometryPoint":c[y]=E==null?void 0:E.x,s[y]=E==null?void 0:E.y;break;case"esriGeometryPolygon":k=E==null?void 0:E.centroid,(k==null?void 0:k.x)!=null&&(k==null?void 0:k.y)!=null?(c[y]=k.x,s[y]=k.y):p[y]=$.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":k=(j=E==null?void 0:E.extent)==null?void 0:j.center,(k==null?void 0:k.x)!=null&&(k==null?void 0:k.y)!=null?(c[y]=k.x,s[y]=k.y):p[y]=$.IsMovable;break;default:p[y]=$.IsMovable}(c[y]==null||s[y]==null||Number.isNaN(c[y])||Number.isNaN(s[y]))&&(p[y]=$.IsMovable,c[y]=0,s[y]=0)}else p[y]=$.IsMovable,c[y]=0,s[y]=0;C.set(d.attributes[_],y),h[y]={feature:d,typeName:r},y++});let F=!1;const O=new Map;t.forEach(r=>{const d=r.feature.attributes[ne],m=r.feature.attributes[se],z=C.get(d),j=C.get(m);if(z!==void 0&&j!==void 0){const k=d+"-"+m,E=O.get(k);(E==null?void 0:E.has(r.typeName))||(g[R]=z,f[R]=j,E===void 0?O.set(k,new Map([[r.typeName,R]])):E.set(r.typeName,R),R++),o.push(r)}else F=!0,this.relationshipLinkChartDiagramLookup.set(d,null)}),F&&H.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const U=this._validateLayoutSettings(e,i),B=this._convertLayoutSettingsToCalculationSettings(U);await We();const{success:S,links:T}=D(p,c,s,g.subarray(0,R),f.subarray(0,R),B.computationBudgetTime,B.idealEdgeLengthMultiplier,B.repulsionRadiusMultiplier);if(!S)throw new ie("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let r=0;r<h.length;r++){if(s[r]>84.9999?s[r]=84.9999:s[r]<-84.9999&&(s[r]=-84.9999),c[r]>179.9999?c[r]=179.9999:c[r]<-179.9999&&(c[r]=-179.9999),h[r].feature.attributes[x]=new be(c[r],s[r]),l.has(h[r].typeName)){const m=l.get(h[r].typeName);m==null||m.set(h[r].feature.attributes[_],h[r].feature)}else{const m=new Map;m.set(h[r].feature.attributes[_],h[r].feature),l.set(h[r].typeName,m)}u.set(h[r].feature.attributes[_],h[r].feature);const d=q(h[r].feature.attributes[x]);this.entityLinkChartDiagramLookup.set(h[r].feature.attributes[_],h[r].feature.attributes[x]?d:null),h[r].feature.attributes[x].x<b.xmin&&(b.xmin=h[r].feature.attributes[x].x),h[r].feature.attributes[x].x>b.xmax&&(b.xmax=h[r].feature.attributes[x].x),h[r].feature.attributes[x].y<b.ymin&&(b.ymin=h[r].feature.attributes[x].y),h[r].feature.attributes[x].y>b.ymax&&(b.ymax=h[r].feature.attributes[x].y)}if(this.linkChartExtent.xmin=b.xmin,this.linkChartExtent.xmax=b.xmax,this.linkChartExtent.ymin=b.ymin,this.linkChartExtent.ymax=b.ymax,!T)throw new ie("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const P=new Map,J=new Map,K=new Map,X=new Set;for(let r=0;r<o.length;r++){const d=[],m=o[r],z=m.feature.attributes[ne],j=m.feature.attributes[se],k=z+"-"+j,E=O.get(k).get(m.typeName),Q=E===0?0:T==null?void 0:T.vertexEndIndex[E-1];if(!X.has(E)){if(X.add(E),T.types[E]===oe.Recursive){const w=[T.vertices[2*Q],T.vertices[2*Q+1]],ue=[T.vertices[2*(Q+1)],T.vertices[2*(Q+1)+1]],W=[.5*(w[0]+ue[0]),.5*(w[1]+ue[1])],ae=[W[0]-w[0],W[1]-w[1]],Pe=[W[0]+ae[1],W[1]-ae[0]],Ge=[W[0]-ae[1],W[1]+ae[0]];d.push(w),d.push(Pe),d.push(ue),d.push(Ge),d.push(w)}else{if(T.types[E]!==oe.Regular){H.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let w=Q;w<T.vertexEndIndex[E];w++)d.push([T.vertices[2*w],T.vertices[2*w+1]])}const G=(Z=h[C.get(z)])==null?void 0:Z.feature.attributes[x],te=(ee=h[C.get(j)])==null?void 0:ee.feature.attributes[x];d[0][0]===G.x&&d[0][1]===G.y||(d[0]=[G.x,G.y]),d[d.length-1][0]===te.x&&d[d.length-1][1]===te.y||(d[d.length-1]=[te.x,te.y]);for(let w=1;w<d.length-1;w++)d[w][1]>85.5?d[w][1]=85.5:d[w][1]<-85.5&&(d[w][1]=-85.5),d[w][0]>179.9999?d[w][0]=179.9999:d[w][0]<-179.9999&&(d[w][0]=-179.9999);P.has(k)?P.get(k).push(d):P.set(k,[d])}const Re=P.get(k);J.has(k)||(J.set(k,new Map),K.set(k,new Map));const le=J.get(k),he=K.get(k);le.has(m.typeName)||(le.set(m.typeName,Re.shift()),he.set(m.typeName,0));const Ae=le.get(m.typeName);he.set(m.typeName,he.get(m.typeName)+1);const _e=new Ee({paths:Ae});if(m.feature.attributes[x]=_e,n.has(m.typeName)){const G=n.get(m.typeName);G==null||G.set(m.feature.attributes[_],m.feature)}else{const G=new Map;G.set(m.feature.attributes[_],m.feature),n.set(m.typeName,G)}u.set(m.feature.attributes[_],m.feature);const Ie=q(m.feature.attributes[x]);this.relationshipLinkChartDiagramLookup.set(m.feature.attributes[_],m.feature.attributes[x]?Ie:null)}for(const r of o)r.feature.attributes[Ve]=((Y=K.get(r.feature.attributes[ne]+"-"+r.feature.attributes[se]))==null?void 0:Y.get(r.typeName))??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:U},{nodes:l,links:n,idMap:u}}async applyNewLinkChartLayout(e="RADIAL_TREE",i){const a=[];await this.calculateLinkChartLayout(e,i),this.layers.forEach(t=>{a.push(t.refreshCachedQueryEngine())}),await Promise.all(a),this._refreshNamedTypes()}getCurrentNodeLocations(){var i,a;const e=new Map;return(a=(i=this.dataManager.inclusionModeDefinition)==null?void 0:i.namedTypeDefinitions)==null||a.forEach(t=>{var o;(o=t==null?void 0:t.members)==null||o.forEach(l=>{const n=l.linkChartLocation;let u;const C=l.id;n&&(u="x"in n?{x:n.x,y:n.y}:{x:n.coords[0],y:n.coords[1]},e.set(C,new be({x:u.x,y:u.y})))})}),e}async synchronizeInclusionListWithCache(){return new Promise(e=>{var i;(i=this.dataManager.inclusionModeDefinition)==null||i.namedTypeDefinitions.forEach((a,t)=>{if(a.useAllData=!1,a.members&&a.members.size>0){if(!this.dataManager.sublayerCaches.get(t))return;const o=new Set(Array.from(this.dataManager.sublayerCaches.get(t).keys()));Array.from(a.members.keys()).filter(l=>!o.has(l)).forEach(l=>{var n;(n=a.members)==null||n.delete(l)})}}),e()})}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const i=[];this.layers.forEach(a=>{i.push(a.refreshCachedQueryEngine())}),await Promise.all(i),this._refreshNamedTypes()}async connectEntities(e){let i=[];for(const t of this.dataManager.relationshipTypeNames){const o=this.sublayerIdsCache.get(t);o&&(i=i.concat(Array.from(o.keys())))}const a=await this.dataManager.getAttachedRelationships(e,i);return await this._handleNewRecords(a),{records:a}}async _handleNewRecords(e){const i=[];this.dataManager.addToLayer(e);for(const t of e)this.sublayerIdsCache.has(t.typeName)||(this.sublayerIdsCache.set(t.typeName,new Set),i.push(t.typeName)),this.sublayerIdsCache.get(t.typeName).add(t.id);for(const t of i){const o=this._graphTypeLookup.get(t);if(o){const l=new de({objectType:o,parentCompositeLayer:this,graphType:o.type,title:t});o.type==="entity"?this.dataManager.entityTypeNames.add(t):this.dataManager.relationshipTypeNames.add(t),l.geometryType?this.layers.push(l):this.tables.push(l),this.dataManager.sublayerCaches.set(t,new Map)}}await this.dataManager.refreshCacheContent(e.map(t=>t.id));const a=Object.assign({},this._currentLinkChartConfig.layoutOptions);a.lockedNodeLocations=this.getCurrentNodeLocations(),await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,a)}async _initializeDiagram(){var e,i;this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?((i=(e=this.dataManager.inclusionModeDefinition)==null?void 0:e.namedTypeDefinitions)==null||i.forEach((a,t)=>{var o;(o=a==null?void 0:a.members)==null||o.forEach(l=>{const n=l.linkChartLocation;let u;const C=l.id;if(!n)return;u="x"in n?{x:n.x,y:n.y}:{x:n.coords[0],y:n.coords[1]};const p=q(u);this.dataManager.relationshipTypeNames.has(t)?this.relationshipLinkChartDiagramLookup.set(C,p):this.entityLinkChartDiagramLookup.set(C,p),this.linkChartExtent.xmin>u.x&&(this.linkChartExtent.xmin=u.x),this.linkChartExtent.xmax<u.x&&(this.linkChartExtent.xmax=u.x),this.linkChartExtent.ymin>u.y&&(this.linkChartExtent.ymin=u.y),this.linkChartExtent.ymax<u.y&&(this.linkChartExtent.ymax=u.y)})}),this.memberRelationshipTypes.forEach(a=>{var t;a.name&&((t=this.dataManager.sublayerCaches.get(a.name))==null||t.forEach(o=>{const l=this.relationshipLinkChartDiagramLookup.get(o.attributes[ne]),n=this.relationshipLinkChartDiagramLookup.get(o.attributes[se]);if(l&&n){const u=q(new Ee({paths:[[l.coords[0],l.coords[1]],[n.coords[0],n.coords[1]]]}));this.relationshipLinkChartDiagramLookup.set(o.attributes[_],u)}else this.relationshipLinkChartDiagramLookup.set(o.attributes[_],null)}))})):await this.calculateLinkChartLayout(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this.calculateLinkChartLayout("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,i){const a=h=>typeof h=="number"&&!isNaN(h),t=h=>a(h)&&h>=1,o=h=>a(h)&&h>=1,l=h=>Object.values(re).includes(h),n=h=>a(h)&&h>=0,u=new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC"]),C={};if(!u.has(e)||!i)return!u.has(e)&&i&&H.getLogger(this).warn("Layout mode options were given for a layout mode that does not utilize them, settings will be ignored"),C;const{computationBudgetTime:p,repulsionRadiusMultiplier:c,idealEdgeLength:s,idealEdgeLengthType:g}=i;o(p)?C.computationBudgetTime=p:p!==void 0&&H.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),t(c)?C.repulsionRadiusMultiplier=c:c!==void 0&&H.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting");const f=s!==void 0||g!==void 0;return e!=="GEOGRAPHIC"&&f?H.getLogger(this).warn("Ideal edge length settings were specified for an incompatible layout mode, and will be ignored"):e==="GEOGRAPHIC"&&f&&(l(g)?C.idealEdgeLengthType=g:g!==void 0&&H.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),n(s)?C.idealEdgeLength=s:s!==void 0&&H.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),C}_convertLayoutSettingsToCalculationSettings(e){let i=e.idealEdgeLength;return e.idealEdgeLengthType===re.ABSOLUTE&&(i===void 0?i=-1:i*=-1),{computationBudgetTime:e.computationBudgetTime,repulsionRadiusMultiplier:e.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:i}}};v([A()],N.prototype,"dataPreloadedInLocalCache",void 0),v([A()],N.prototype,"defaultLinkChartConfig",void 0),v([A()],N.prototype,"dataManager",void 0),v([A()],N.prototype,"knowledgeGraph",void 0),v([A()],N.prototype,"layers",void 0),v([A()],N.prototype,"entityLinkChartDiagramLookup",void 0),v([A()],N.prototype,"relationshipLinkChartDiagramLookup",void 0),v([A()],N.prototype,"linkChartExtent",void 0),v([A()],N.prototype,"memberEntityTypes",void 0),v([A()],N.prototype,"memberRelationshipTypes",void 0),v([A()],N.prototype,"sublayerIdsCache",void 0),v([A()],N.prototype,"tables",void 0),v([A({json:{read:!1}})],N.prototype,"type",void 0),N=v([Ue("esri.layers.LinkChartLayer")],N);const yt=N;export{yt as default};
