import{n as a,fH as c,k as i,gI as v,an as s}from"./index-FXsJ6CNr.js";async function u(e,t,n){await Promise.resolve(),a(n);const r=c(e,t);if(!r)throw new i("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const o=e.cloneAndModifyVertexAttributes(new v({...r,uv:s(e.vertexAttributes.uv),color:s(e.vertexAttributes.color)}),t);return o.transform=null,o}export{u as convertMeshVertexSpace};
