import{bS as k,bT as C,bU as A,bV as I}from"./index-CY8jQoH7.js";import{a as S,b as V,d as x}from"./PointCloudUniqueValueRenderer-Dp5de4hV.js";function U(n,e,d,u){const{rendererJSON:i,isRGBRenderer:p}=n;let t=null,s=null;if(e&&p)t=e;else if(e&&(i==null?void 0:i.type)==="pointCloudUniqueValueRenderer"){s=S.fromJSON(i);const o=s.colorUniqueValueInfos;t=new Uint8Array(3*u);const a=m(s.fieldTransformType);for(let r=0;r<u;r++){const c=(a?a(e[r]):e[r])+"";for(let l=0;l<o.length;l++)if(o[l].values.includes(c)){t[3*r]=o[l].color.r,t[3*r+1]=o[l].color.g,t[3*r+2]=o[l].color.b;break}}}else if(e&&(i==null?void 0:i.type)==="pointCloudStretchRenderer"){s=V.fromJSON(i);const o=s.stops;t=new Uint8Array(3*u);const a=m(s.fieldTransformType);for(let r=0;r<u;r++){const c=a?a(e[r]):e[r],l=o.length-1;if(c<o[0].value)t[3*r]=o[0].color.r,t[3*r+1]=o[0].color.g,t[3*r+2]=o[0].color.b;else if(c>=o[l].value)t[3*r]=o[l].color.r,t[3*r+1]=o[l].color.g,t[3*r+2]=o[l].color.b;else for(let f=1;f<o.length;f++)if(c<o[f].value){const b=(c-o[f-1].value)/(o[f].value-o[f-1].value);t[3*r]=o[f].color.r*b+o[f-1].color.r*(1-b),t[3*r+1]=o[f].color.g*b+o[f-1].color.g*(1-b),t[3*r+2]=o[f].color.b*b+o[f-1].color.b*(1-b);break}}}else if(e&&(i==null?void 0:i.type)==="pointCloudClassBreaksRenderer"){s=x.fromJSON(i);const o=s.colorClassBreakInfos;t=new Uint8Array(3*u);const a=m(s.fieldTransformType);for(let r=0;r<u;r++){const c=a?a(e[r]):e[r];for(let l=0;l<o.length;l++)if(c>=o[l].minValue&&c<=o[l].maxValue){t[3*r]=o[l].color.r,t[3*r+1]=o[l].color.g,t[3*r+2]=o[l].color.b;break}}}else t=new Uint8Array(3*u).fill(255);if(d&&(s!=null&&s.colorModulation)){const o=s.colorModulation.minValue,a=s.colorModulation.maxValue,r=.3;for(let c=0;c<u;c++){const l=d[c],f=l>=a?1:l<=o?r:r+(1-r)*(l-o)/(a-o);t[3*c]=f*t[3*c],t[3*c+1]=f*t[3*c+1],t[3*c+2]=f*t[3*c+2]}}return t}function B(n,e){if(n.encoding==null||n.encoding===""){const d=k(e,n);if(d.vertexAttributes.position==null)return;const u=C(e,d.vertexAttributes.position),i=d.header.fields,p=[i.offsetX,i.offsetY,i.offsetZ],t=[i.scaleX,i.scaleY,i.scaleZ],s=u.length/3,o=new Float64Array(3*s);for(let a=0;a<s;a++)o[3*a]=u[3*a]*t[0]+p[0],o[3*a+1]=u[3*a+1]*t[1]+p[1],o[3*a+2]=u[3*a+2]*t[2]+p[2];return o}if(n.encoding==="lepcc-xyz")return A(e).result}function M(n,e,d){return n!=null&&n.attributeInfo.useElevation?e?O(e,d):null:n!=null&&n.attributeInfo.storageInfo?I(n.attributeInfo.storageInfo,n.buffer,d):null}function O(n,e){const d=new Float64Array(e);for(let u=0;u<e;u++)d[u]=n[3*u+2];return d}function F(n,e,d,u,i){const p=n.length/3;let t=0;for(let s=0;s<p;s++){let o=!0;for(let a=0;a<u.length&&o;a++){const{filterJSON:r}=u[a],c=i[a].values[s];switch(r.type){case"pointCloudValueFilter":{const l=r.mode==="exclude";r.values.includes(c)===l&&(o=!1);break}case"pointCloudBitfieldFilter":{const l=v(r.requiredSetBits),f=v(r.requiredClearBits);((c&l)!==l||c&f)&&(o=!1);break}case"pointCloudReturnFilter":{const l=15&c,f=c>>>4&15,b=f>1,w=l===1,y=l===f;let h=!1;for(const g of r.includedReturns)if(g==="last"&&y||g==="firstOfMany"&&w&&b||g==="lastOfMany"&&y&&b||g==="single"&&!b){h=!0;break}h||(o=!1);break}}}o&&(d[t]=s,n[3*t]=n[3*s],n[3*t+1]=n[3*s+1],n[3*t+2]=n[3*s+2],e[3*t]=e[3*s],e[3*t+1]=e[3*s+1],e[3*t+2]=e[3*s+2],t++)}return t}function m(n){switch(n){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function v(n){let e=0;for(const d of n||[])e|=1<<d;return e}export{O as a,M as c,F as f,U as i,B as u};
