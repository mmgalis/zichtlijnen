const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/i3s-DJx7m-EJ.js","assets/index-FXsJ6CNr.js","assets/index-1kXkUciu.css"])))=>i.map(i=>d[i]);
import{_ as S,fW as G,aB as B,fI as W,kw as q,kx as K,ky as Q,kz as X,kA as Z}from"./index-FXsJ6CNr.js";import{r as L}from"./I3SNode-CIu5Jj_8.js";var M,$;(function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"})(M||(M={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}($||($={}));function ee(){return N||(N=new Promise(e=>S(()=>import("./i3s-DJx7m-EJ.js"),__vite__mapDeps([0,1,2])).then(t=>t.i).then(({default:t})=>{const r=t({locateFile:te,onRuntimeInitialized:()=>e(r)});delete r.then})).catch(e=>{throw e})),N}function te(e){return G(`esri/libs/i3s/${e}`)}let N;async function re(e){n=await p();const t=[e.geometryBuffer];return{result:C(n,e,t),transferList:t}}async function oe(e){var y;n=await p();const t=[e.geometryBuffer],{geometryBuffer:r}=e,f=r.byteLength,i=n._malloc(f),u=new Uint8Array(n.HEAPU8.buffer,i,f);u.set(new Uint8Array(r));const c=n.dracoDecompressPointCloudData(i,u.byteLength);if(n._free(i),c.error.length>0)throw new Error(`i3s.wasm: ${c.error}`);const l=((y=c.featureIds)==null?void 0:y.length)>0?c.featureIds.slice():null,a=c.positions.slice();return l&&t.push(l.buffer),t.push(a.buffer),{result:{positions:a,featureIds:l},transferList:t}}async function ne(e){await p(),V(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function ie(e){await p(),k(e)}async function se(e){n=await p(),n.setLegacySchema(e.context,e.jsonSchema)}async function ae(e){const{localMatrix:t,origin:r,positions:f,vertexSpace:i,localMode:u}=e,c=B.fromJSON(e.inSpatialReference),l=B.fromJSON(e.outSpatialReference);let a;const[{projectBuffer:y},{initializeProjection:T}]=await Promise.all([S(()=>import("./index-FXsJ6CNr.js").then(s=>s.A7),__vite__mapDeps([1,2])),S(()=>import("./index-FXsJ6CNr.js").then(s=>s.A8),__vite__mapDeps([1,2]))]);await T(c,l);const g=[0,0,0];if(!y(r,c,0,g,l,0,1))throw new Error("Failed to project");if(i.type==="georeferenced"&&i.origin==null){if(a=new Float64Array(f.length),!y(f,c,0,a,l,0,a.length/3))throw new Error("Failed to project")}else{const s=i.type==="georeferenced"?W.fromJSON(i):q.fromJSON(i),{project:m}=await S(async()=>{const{project:I}=await import("./index-FXsJ6CNr.js").then(R=>R.Aa);return{project:I}},__vite__mapDeps([1,2])),d=m({positions:f,transform:t?{localMatrix:t}:void 0,vertexSpace:s,inSpatialReference:c,outSpatialReference:l,localMode:u});if(!d)throw new Error("Failed to project");a=K(d)}const _=a.length,[E,w,A]=g;for(let s=0;s<_;s+=3)a[s]-=E,a[s+1]-=w,a[s+2]-=A;return{result:{projected:a,original:f,projectedOrigin:g},transferList:[a.buffer,f.buffer]}}async function fe({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return Q(r,t,e),X(e)&&Z(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}function ce(e){z(e)}let O,n;function k(e){if(!n)return;const t=e.modifications,r=n._malloc(8*t.length),f=new Float64Array(n.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)f[i]=t[i];n.setModifications(e.context,r,t.length,e.isGeodetic),n._free(r)}function C(e,t,r){const{context:f,globalTrafo:i,mbs:u,obbData:c,elevationOffset:l,geometryBuffer:a,geometryDescriptor:y,indexToVertexProjector:T,vertexToRenderProjector:g}=t,_=e._malloc(a.byteLength),E=33,w=e._malloc(E*Float64Array.BYTES_PER_ELEMENT),A=new Uint8Array(e.HEAPU8.buffer,_,a.byteLength);A.set(new Uint8Array(a));const s=new Float64Array(e.HEAPU8.buffer,w,E);P(s,[NaN,NaN,NaN]);let m=s.byteOffset+3*s.BYTES_PER_ELEMENT,d=new Float64Array(s.buffer,m);P(d,i),m+=16*s.BYTES_PER_ELEMENT,d=new Float64Array(s.buffer,m),P(d,u),m+=4*s.BYTES_PER_ELEMENT,c&&(d=new Float64Array(s.buffer,m),P(d,c));const I=y,R={isDraco:!1,isLegacy:!1,color:t.layouts.some(b=>b.some(h=>h.name==="color")),normal:t.needNormals&&t.layouts.some(b=>b.some(h=>h.name==="normalCompressed")),uv0:t.layouts.some(b=>b.some(h=>h.name==="uv0")),uvRegion:t.layouts.some(b=>b.some(h=>h.name==="uvRegion")),featureIndex:I.featureIndex},o=e.process(f,!!t.obbData,_,A.byteLength,I,R,w,l,T,g,t.normalReferenceFrame);if(e._free(w),e._free(_),o.error.length>0)throw new Error(`i3s.wasm: ${o.error}`);if(o.discarded)return null;const x=o.componentOffsets.length>0?o.componentOffsets.slice():null,F=o.featureIds.length>0?o.featureIds.slice():null,H=o.anchorIds.length>0?Array.from(o.anchorIds):null,Y=o.anchors.length>0?Array.from(o.anchors):null,v=o.interleavedVertedData.slice().buffer,j=o.indicesType===M.Int16?new Uint16Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/2).slice():new Uint32Array(o.indices.buffer,o.indices.byteOffset,o.indices.byteLength/4).slice(),U=o.positions.slice(),D=o.positionIndicesType===M.Int16?new Uint16Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/2).slice():new Uint32Array(o.positionIndices.buffer,o.positionIndices.byteOffset,o.positionIndices.byteLength/4).slice(),J={layout:t.layouts[0],interleavedVertexData:v,indices:j,hasColors:o.hasColors,hasModifications:o.hasModifications,positionData:{data:U,indices:D}};return F&&r.push(F.buffer),x&&r.push(x.buffer),r.push(v),r.push(j.buffer),r.push(U.buffer),r.push(D.buffer),{componentOffsets:x,featureIds:F,anchorIds:H,anchors:Y,transformedGeometry:J,obb:o.obb,globalTrafo:i}}function le(e){return e===0?L.Unmodified:e===1?L.PotentiallyModified:e===2?L.Culled:L.Unknown}function V(e){if(!n)return;const{context:t,buffer:r}=e,f=n._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,u=new Float64Array(n.HEAPU8.buffer,f,i),c=new Float64Array(r);u.set(c),n.filterOBBs(t,f,i),c.set(u),n._free(f)}function z(e){n&&n.destroy(e)===0&&(n=null)}function P(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function ue(){n||await p()}function p(){return n?Promise.resolve(n):(O||(O=ee().then(e=>(n=e,O=null,n))),O)}const de={transform:(e,t)=>n&&C(n,e,t),destroy:z},be=Object.freeze(Object.defineProperty({__proto__:null,destroyContext:ce,dracoDecompressPointCloudData:oe,filterObbsForModifications:ne,filterObbsForModificationsSync:V,initialize:ue,interpretObbModificationResults:le,process:re,project:ae,setLegacySchema:se,setModifications:ie,setModificationsSync:k,test:de,transformNormals:fe},Symbol.toStringTag,{value:"Module"}));export{le as A,k as E,V as L,be as S,ue as _,$ as e};
