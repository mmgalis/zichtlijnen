import{by as N,ba as X,a3 as Y,nN as _,ge as A,nO as I,ez as g,U as f,n as u,fd as Z,nP as ss,nQ as es,nR as ts,ar as ns,nS as os,nT as as,nU as rs,b9 as is,nV as E,bc as U,bb as x,nW as cs,at as D,iS as ls,au as us,nX as ps,nY as ms,m as fs,iL as ds,nZ as gs,n_ as hs,D as ws}from"./index-CY8jQoH7.js";const $={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function h(t,e=n=>{},s){return new ys(t,e,s)}let ys=class{constructor(e,s=o=>{},n){if(this.onProgress=s,this.taskName=n,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof e=="number"){this._weights={};for(let o=0;o<e;o++){const a=o,r=1/e;this._weights[a]=r,this._progressMap.set(a,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,n]of this._progressMap.entries())e+=n*this._weights[s];if(e===1&&N("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[n,o]of this._timingsMap){const a=Math.round(o.end-o.start)/1e3,r=Math.round(a/s*100);console.log(this.taskName??"Task",{stepKey:n,stepTime:a,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),N("enable-feature:esri-3dofl-upload-timings")){const n=performance.now();this._startTime??(this._startTime=n);const o=X(this._timingsMap,e,()=>({start:n,end:0}));s===1&&(o.end=n)}this.emitProgress()}simulate(e,s){return k(n=>this.setProgress(e,n),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}};function k(t=s=>{},e=Ms){const s=performance.now();t(0);const n=setInterval(()=>{const o=performance.now()-s,a=1-Math.exp(-o/e);t(a)},$s);return Y(()=>{clearInterval(n),t(1)})}function Ps(t,e=Ts){return _(I(t*O/e))}function bs(t,e=As){return _(I(t*O/e))}const Ts=10,As=10,O=8e-6,$s=A(50),Ms=A(1e3),B=1e6,S=20*B,Fs=2e9,js=3;async function vs({data:t,name:e,description:s},n,o){let a=null;try{const r=g(n,"uploads"),i=g(r,"info"),{data:c}=await f(i,{query:{f:"json"},responseType:"json"});u(o);const p=Z(n),l=c.maxUploadFileSize*B,d=p?Fs:l,T=p?Math.min(S,l):S;if(t.size>d)throw new Error("Data too large");const L=g(r,"register"),{data:M}=await f(L,{query:{f:"json",itemName:Ns(e),description:s},responseType:"json",method:"post"});if(u(o),!M.success)throw new Error("Registration failed");const{itemID:H}=M.item;a=g(r,H);const G=g(a,"uploadPart"),F=Math.ceil(t.size/T),w=new Array;for(let m=0;m<F;++m)w.push(t.slice(m*T,Math.min((m+1)*T,t.size)));const y=w.slice().reverse(),j=new Array,W=h(F,o==null?void 0:o.onProgress,"uploadItem"),J=async()=>{for(;y.length!==0;){const m=w.length-y.length,P=y.pop(),b=new FormData,K=W.simulate(m,Ps(P.size));try{b.append("f","json"),b.append("file",P),b.append("partId",`${m}`);const{data:Q}=await f(G,{timeout:0,body:b,responseType:"json",method:"post"});if(u(o),!Q.success)throw new Error("Part upload failed")}finally{K.remove()}}};for(let m=0;m<js&&y.length!==0;++m)j.push(J());await Promise.all(j);const V=g(a,"commit"),{data:v}=await f(V,{query:{f:"json",parts:w.map((m,P)=>P).join(",")},responseType:"json",method:"post"});if(u(o),!v.success)throw new Error("Commit failed");return v.item}catch(r){if(a!=null){const i=g(a,"delete");await f(i,{query:{f:"json"},responseType:"json",method:"post"})}throw r}}function Ns(t){return t.replaceAll("/","_").replaceAll("\\","_")}async function Xs(t,e,s){var a;const n=t.length;if(!n)return(a=s==null?void 0:s.onProgress)==null||a.call(s,1),[];const o=h(n,s==null?void 0:s.onProgress,"uploadAssets");return Promise.all(t.map((r,i)=>Ss(r,e,{...s,onProgress:o.makeOnProgress(i)})))}async function Ss(t,{layer:e,ongoingUploads:s},n){var r;const o=s.get(t);if(o)return o;if(!Ws(e))throw new ss;if(_s(t,e))return(r=n==null?void 0:n.onProgress)==null||r.call(n,1),t;const a=Is(t,e,n);s.set(t,a);try{await a}finally{s.delete(t)}return t}function _s(t,e){const{parsedUrl:s}=e;return s!=null&&t.metadata.externalSources.some(n=>es(n,s))}async function Is(t,e,s){const{metadata:n}=t,{displaySource:o}=n,a=C(o==null?void 0:o.source,e),r=!!a,i=n.externalSources.length>0,c=r?Es(a,e,s):i?Us(t,e,s):xs(t,e,s),p=await c;return u(s),t.addExternalSources([p]),t}async function Es(t,e,s){return{source:await R(t,e,s),original:!0}}async function Us(t,e,s){const n=z(e),{externalSources:o}=t.metadata,a=ks(o,e);if(!a)throw new ts;const r=h($.uploadConvertibleSource,s==null?void 0:s.onProgress,"uploadConvertibleSource"),i=await R(a,e,{onProgress:r.makeOnProgress("uploadEditSource")});t.addExternalSources([{source:i,original:!0}]);const c=a.reduce((l,{asset:d})=>d instanceof File?l+d.size:l,0),p=r.simulate("serviceAssetsToGlb",bs(c));try{return{source:await Ls(i,e,n)}}finally{p.remove()}}async function xs(t,e,s){const n=h($.uploadLocalMesh,s==null?void 0:s.onProgress,"uploadLocalMesh"),o=Ds(t,e,{...s,onProgress:n.makeOnProgress("meshToAssetBlob")});return{source:await q([o],e,{...s,onProgress:n.makeOnProgress("uploadAssetBlobs")}),extent:t.extent.clone(),original:!0}}async function Ds(t,e,s){const n=z(e),o=await t.load(s),a=await o.toBinaryGLTF({origin:o.origin,signal:s==null?void 0:s.signal,ignoreLocalTransform:!0});return u(s),{blob:new Blob([a],{type:"model/gltf-binary"}),assetName:`${ns()}.glb`,assetType:n}}function ks(t,e){for(const s of t){const n=C(s.source,e);if(n)return n}return null}function C(t,e){if(!t)return null;const{infoFor3D:{supportedFormats:s,editFormats:n}}=e,o=ms(t),a=new Array;let r=!1;for(let i=0;i<o.length;++i){const c=Os(o[i],s);if(!c)return null;n.includes(c.assetType)&&(r=!0),a.push(c)}return r?a:null}function Os(t,e){const s=os(t,e);return s?{asset:t,assetType:s}:null}async function R(t,e,s){return q(t.map(n=>Bs(n,s)),e,s)}async function q(t,e,s){const n=h($.uploadAssetBlobs,s==null?void 0:s.onProgress,"uploadAssetBlobs"),o=await Rs(t,e,{...s,onProgress:n.makeOnProgress("prepareAssetItems")});u(s);const a=o.map(({item:i})=>i),{uploadResults:r}=await qs(a,e,{...s,onProgress:n.makeOnProgress("uploadAssetItems")});return u(s),t.map((i,c)=>zs(o[c],r[c],e))}async function Bs(t,e){const{asset:s,assetType:n}=t;if(s instanceof File)return{blob:s,assetName:s.name,assetType:n};const o=await s.toBlob(e);return u(e),{blob:o,assetName:s.assetName,assetType:n}}async function Cs(t,e,s){const{blob:n,assetType:o,assetName:a}=t;let r=null;try{const i=await vs({data:n,name:a},e.url,s);u(s),r={assetType:o,assetUploadId:i.itemID}}catch(i){fs(i),Js().warnOnce(`Service ${e.url} does not support the REST Uploads API.`)}if(!r){const i=await ds(n);if(u(s),!i.isBase64)throw new gs;r={assetType:o,assetData:i.data}}if(!r)throw new hs;return{item:r,assetName:a}}function Rs(t,e,s){const n=h(t.length,s==null?void 0:s.onProgress,"prepareAssetItems");return Promise.all(t.map(async(o,a)=>{const r=Cs(await o,e,{...s,onProgress:n.makeOnProgress(a)});return u(s),r}))}async function qs(t,e,s){const n=k(s==null?void 0:s.onProgress);try{const o=await f(g(e.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(t)},method:"post",responseType:"json"});if(u(s),o.data.uploadResults.length!==t.length)throw new as(t.length,o.data.uploadResults.length);return o.data}finally{n.remove()}}function zs(t,e,s){const{success:n}=e;if(!n){const{error:p}=e;throw new rs(t.assetName,p)}const{assetHash:o}=e,{assetName:a,item:{assetType:r}}=t,{infoFor3D:{supportedFormats:i}}=s,c=is(r,i);if(!c)throw new E(r);return new U(a,c,[new x(`${s.parsedUrl.path}/assets/${o}`,o)])}async function Ls(t,e,s){var p;const n=t.map(({assetName:l,parts:d})=>({assetName:l,assetHash:d[0].partHash})),o=(p=e.capabilities)==null?void 0:p.operations.supportsAsyncConvert3D,a={f:"json",assets:JSON.stringify(n),transportType:"esriTransportTypeUrl",targetFormat:s,async:o},r=g(e.parsedUrl.path,"convert3D");let i;try{i=(await(o?Gs:Hs)(r,{query:a,responseType:"json",timeout:0})).data}catch{throw new cs}const{supportedFormats:c}=e.infoFor3D;return i.assets.map(l=>{const d=D(l.contentType,c);if(!d)throw new E(d);return new U(l.assetName,l.contentType,[new x(l.assetURL,l.assetHash)])})}function Hs(t,e){return f(t,e)}async function Gs(t,e){const s=(await f(t,e)).data.statusUrl;for(;;){const n=(await f(s,{query:{f:"json"},responseType:"json"})).data;switch(n.status){case"Completed":return f(n.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(n.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await ls(Vs)}}function Ws(t){return!!t.infoFor3D&&!!t.url}function z(t){const{infoFor3D:e}=t,s=D("model/gltf-binary",e.supportedFormats)??us("glb",e.supportedFormats);if(!s)throw new ps;return s}function Js(){return ws.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const Vs=A(1e3);export{Xs as uploadAssets};
