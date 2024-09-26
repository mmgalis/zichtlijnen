import{gq as p,gr as f,gs as i,gt as l,dv as u}from"./index-2x4JY06U.js";function y(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function j(n,t){const e={};for(const s of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=s;for(const c of r){const{id:h}=c,d=p(f(`${n.path}/${a}/attachments/${h}`)),m=i.fromJSON(c);m.set({url:d,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(m):e[a]=[m]}}return e}function b(n,t,e){let s={query:l({...n.query,f:"json",...y(t)})};return e&&(s={...e,...s,query:{...e.query,...s.query}}),u(n.path+"/queryAttachments",s).then(a=>a.data.attachmentGroups)}async function g(n,t,e){const{objectIds:s}=t,a=[];for(const o of s)a.push(u(n.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>s.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{b as executeAttachmentQuery,g as fetchAttachments,j as processAttachmentQueryResult};
