import{av as n,aw as c,a7 as m,ax as f,ay as h}from"./index-2x4JY06U.js";async function u(t,s,r){const e=t.layer;if(n(e)){const i=await e.fetchTile(s[0],s[1],s[2],r);if(c(r))throw m.getLogger(t).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."),f();return i}let a=t.getTileUrl(s);h(e)&&e.refreshTimestamp&&(a+=`${a.includes("?")?"&":"?"}_ts=${e.refreshTimestamp}`);const o=t.hasMixedImageFormats?"image+type":"image";return r.requester.request(a,o,r)}export{u as i};
