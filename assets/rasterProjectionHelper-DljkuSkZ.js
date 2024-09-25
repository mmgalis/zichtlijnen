import{ci as D,cj as Rn,b5 as O,ck as v,cl as z,bu as bn,j as un,b7 as k,bf as Pn,J as Sn,k as kn,cm as E,cn as N,co as tn,cp as Nn,cq as En,aB as Gn,cr as en}from"./index-CY8jQoH7.js";var U;function xn(n,e,i){return!Sn(n,e,i)}function $(n,e,i){const s=xn(n,e,i);if(s&&!D())throw new kn("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(U||(U={}));const on=(n,e,i,s=0)=>{if(i[0]===1)return[0,0];let r=1,t=-1,o=1,c=-1;for(let u=0;u<n.length;u+=2)isNaN(n[u])||(r=r>n[u]?n[u]:r,t=t>n[u]?t:n[u],o=o>n[u+1]?n[u+1]:o,c=c>n[u+1]?c:n[u+1]);const{cols:f,rows:a}=e,l=(t-r)/f/i[0],d=(c-o)/a/i[1],y=2*s;let x=0,m=!1,h=[0,0];for(let u=0;u<f-3;u++){for(let R=0;R<a-3;R++){const g=u*a*2+2*R,p=(n[g]+n[g+4]+n[g+4*a]+n[g+4*a+4])/4,w=(n[g+1]+n[g+5]+n[g+4*a+1]+n[g+4*a+5])/4,M=Math.abs((p-n[g+2*a+2])/l),b=Math.abs((w-n[g+2*a+3])/d);if(M+b>x&&(x=M+b,h=[M,b]),y&&x>y){m=!0;break}}if(m)break}return h},Tn={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},j=32,I=4,q=I,J=new Map,K=new Map,B=500;async function Bn(){D()||await Rn()}function _n(n,e,i){return $(n.spatialReference,e),i?en(e,n.spatialReference,n):en(n.spatialReference,e,n)}function An(n,e,i,s=null){const r=n.spatialReference;if(r.equals(e))return n;$(r,e,s);const t=i.center,o=new O({xmin:t.x-n.x/2,xmax:t.x+n.x/2,ymin:t.y-n.y/2,ymax:t.y+n.y/2,spatialReference:r}),c=v(o,e,s),f=G(e);let a;if(c==null||f!=null&&c.width>=f){const l=z(r)/z(e);a={x:n.x*l,y:n.y*l}}else a={x:c.width,y:c.height};return a}function S(n,e=.01){return z(n)?e/z(n):0}function sn(n,e,i=null,s=!0){const r=n.spatialReference;if(r.equals(e))return n;$(r,e,i);const t=v(n,e,i);return s&&t&&mn([n],[t],r,e),t}function mn(n,e,i,s){const r=A(i,!0),t=A(s,!0),o=S(i,B),c=S(s,B);if(o&&r!=null&&t!=null)for(let f=0;f<n.length;f++){const a=e[f];if(!a)continue;const{x:l}=n[f],{x:d}=a;d>=t[1]-c&&Math.abs(l-r[0])<o?a.x-=t[1]-t[0]:d<=t[0]+c&&Math.abs(l-r[1])<o&&(a.x+=t[1]-t[0])}}function Cn(n){const{inSR:e,outSR:i,datumTransformation:s,preferPE:r}=n;if(e.equals(i)){const{points:t}=H(n,null);return t}return e.isWebMercator&&i.isWGS84||e.isWGS84&&i.isWebMercator?$n(n):$(e,i,s)&&r&&(e.isGeographic||C(e)!=null)?rn(n):vn(n)}function vn(n){const{points:e}=H(n,null),{inSR:i,outSR:s,datumTransformation:r}=n,t=e.map(c=>new k(c[0],c[1],i)),o=v(t,s,r);return r&&mn(t,o,i,s),o.map(c=>c?[c.x,c.y]:[NaN,NaN])}function rn(n){const{inSR:e,outSR:i,datumTransformation:s}=n,r=C(e),{points:t,mask:o}=H(n,r);if(!e.isGeographic){const f=e.wkid?E.coordsys(e.wkid):E.fromString(e.isGeographic?N.PE_TYPE_GEOGCS:N.PE_TYPE_PROJCS,e.wkt2||e.wkt);tn.projToGeog(f,t.length,t)}if(s!=null&&s.steps.length){let f;if(i.isGeographic&&(f=t.map(([l])=>l>179.9955?1:l<-179.9955?-1:0)),s.steps.forEach(l=>{const d=l.wkid?E.geogtran(l.wkid):E.fromString(N.PE_TYPE_GEOGTRAN,l.wkt);Nn.geogToGeog(d,t.length,t,null,l.isInverse?N.PE_TRANSFORM_2_TO_1:N.PE_TRANSFORM_1_TO_2)}),f)for(let l=0;l<t.length;l++){const d=f[l],y=t[l][0],x=y>179.9955?1:y<-179.9955?-1:0;d&&x&&d!==x&&(t[l][0]=d>0?y+360:y-360)}}if(!i.isGeographic){const f=C(i,!0),a=f!=null&&f.isEnvelope?[f.bbox[1],f.bbox[3]]:[-90,90];Wn(t,a);const l=i.wkid?E.coordsys(i.wkid):E.fromString(i.isGeographic?N.PE_TYPE_GEOGCS:N.PE_TYPE_PROJCS,i.wkt2||i.wkt);tn.geogToProj(l,t.length,t)}let c=t;if(o&&t.length!==o.length){c=[];for(let f=0,a=0;f<o.length;f++)o[f]?c.push(t[a++]):c.push([NaN,NaN])}return c}function $n(n){const{cols:e,rows:i,xres:s,yres:r,usePixelCenter:t,inSR:o,outSR:c}=n;let{xmin:f,ymax:a}=n;t&&(f+=s/2,a-=r/2);const l=[],d=[],y=Math.max(e,i);for(let m=0;m<y;m++){const h=f+s*Math.min(e,m),u=a-r*Math.min(i,m),R=v(new k({x:h,y:u,spatialReference:o}),c);m<=e&&l.push(R.x),m<=i&&d.push(R.y)}const x=[];for(let m=0;m<e;m++)for(let h=0;h<i;h++)x.push([l[m],d[h]]);return x}function C(n,e=!1){let i=n.wkid||n.wkt2||n.wkt;if(!i||n.isGeographic)return null;if(i=String(i),J.has(i)){const o=J.get(i);return e?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const s=n.wkid?E.coordsys(n.wkid):E.fromString(n.isGeographic?N.PE_TYPE_GEOGCS:N.PE_TYPE_PROJCS,n.wkt2||n.wkt),r=an(s,S(n,1e-4)),t=an(s,0,!0);return J.set(i,{pcs:r,gcs:t}),e?t:r}function an(n,e=0,i=!1){const s=En.generate(n),r=i?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!s||!(r!=null&&r.length))return null;let t=!1,o=r.find(u=>u.getInclusive()===1&&u.getKind()===1);if(!o){if(o=r.find(u=>u.getInclusive()===1&&u.getKind()===0),!o)return null;t=!0}const c=i?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),f=s.isPannableRectangle(),a=o.getCoord();if(t)return{isEnvelope:t,isPannable:f,vertices:a,coef:null,bbox:[a[0][0]-e,a[0][1]-e,a[1][0]+e,a[1][1]+e],poleLocation:c};let l=0;const d=[];let[y,x]=a[0],[m,h]=a[0];for(let u=0,R=a.length;u<R;u++){l++,l===R&&(l=0);const[g,p]=a[u],[w,M]=a[l];if(M===p)d.push([g,w,p,M,2]);else{const b=(w-g)/(M-p||1e-4),T=g-b*p;p<M?d.push([b,T,p,M,0]):d.push([b,T,M,p,1])}y=y<g?y:g,x=x<p?x:p,m=m>g?m:g,h=h>p?h:p}return{isEnvelope:!1,isPannable:f,vertices:a,coef:d,bbox:[y,x,m,h],poleLocation:c}}function H(n,e){const i=[],{cols:s,rows:r,xres:t,yres:o,usePixelCenter:c}=n;let{xmin:f,ymax:a}=n;if(c&&(f+=t/2,a-=o/2),e==null){for(let x=0;x<s;x++)for(let m=0;m<r;m++)i.push([f+t*x,a-o*m]);return{points:i}}const l=new Uint8Array(s*r);if(e.isEnvelope){const{bbox:[x,m,h,u]}=e;for(let R=0,g=0;R<s;R++){const p=f+t*R,w=e.isPannable||p>=x&&p<=h;for(let M=0;M<r;M++,g++){const b=a-o*M;w&&b>=m&&b<=u&&(i.push([p,b]),l[g]=1)}}return{points:i,mask:l}}const d=e.coef,y=[];for(let x=0;x<r;x++){const m=a-o*x,h=[],u=[];for(let g=0;g<d.length;g++){const[p,w,M,b,T]=d[g];if(m===M&&M===b)h.push(p),h.push(w),u.push(2),u.push(2);else if(m>=M&&m<=b){const L=p*m+w;h.push(L),u.push(T)}}let R=h;if(h.length>2){let g=u[0]===2?0:u[0],p=h[0];R=[];for(let w=1;w<u.length;w++)u[w]===2&&w!==u.length-1||(u[w]!==g&&(R.push(g===0?Math.min(p,h[w-1]):Math.max(p,h[w-1])),g=u[w],p=h[w]),w===u.length-1&&R.push(u[w]===0?Math.min(p,h[w]):Math.max(p,h[w])));R.sort((w,M)=>w-M)}else h[0]>h[1]&&(R=[h[1],h[0]]);y.push(R)}for(let x=0,m=0;x<s;x++){const h=f+t*x;for(let u=0;u<r;u++,m++){const R=a-o*u,g=y[u];if(g.length===2)h>=g[0]&&h<=g[1]&&(i.push([h,R]),l[m]=1);else if(g.length>2){let p=!1;for(let w=0;w<g.length;w+=2)if(h>=g[w]&&h<=g[w+1]){p=!0;break}p&&(i.push([h,R]),l[m]=1)}}}return{points:i,mask:l}}function Wn(n,e){const[i,s]=e;for(let r=0;r<n.length;r++){const t=n[r][1];(t<i||t>s)&&(n[r]=[NaN,NaN])}}function hn(n,e){const i=G(n[0].spatialReference);if(n.length<2||i==null||(e=e??S(n[0].spatialReference),(n=n.filter(c=>c.width>e)).length===1))return n[0];let{xmin:s,xmax:r,ymin:t,ymax:o}=n[0];for(let c=1;c<n.length;c++){const f=n[c];r=f.xmax+i*c,t=Math.min(t,f.ymin),o=Math.max(o,f.ymax)}return new O({xmin:s,xmax:r,ymin:t,ymax:o,spatialReference:n[0].spatialReference})}function pn(n,e,i=null,s=!0){const r=n.spatialReference;if(r.equals(e))return n;const t=On(n),o=G(r,!0),c=G(e);if(t===0||o==null||c==null){const a=ln(n,e,i,s);if(o==null&&c!=null&&Math.abs(a.width-c)<S(e)&&D()){const l=C(r);if(l!=null&&l.poleLocation===U.None&&n.width<(l.bbox[2]-l.bbox[0])/2)return zn(n,e)||a}return a}const f=n.clone().normalize();if(f.length===1&&n.xmax<o&&n.xmax-o/2>S(r)){const{xmin:a,xmax:l}=n;for(let d=0;d<=t;d++){const y=d===0?a:-o/2,x=d===t?l-o*d:o/2;f[d]=new O({xmin:y,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:r})}}return hn(f.map(a=>ln(a,e,i,s)).filter(bn))}function Yn(n,e,i){if(n.type==="extent"){const{xmin:s,ymin:r,xmax:t,ymax:o,spatialReference:c}=n;n=new un({rings:[[[s,o],[t,o],[t,r],[s,r],[s,o]]],spatialReference:c})}return n.spatialReference.equals(e)?n:($(n.spatialReference,e,i),v(n,e,i))}function zn(n,e){const i=G(e);if(i==null)return null;let{xmin:s,ymin:r,xmax:t,ymax:o}=n;const c=n.spatialReference,f=new un({spatialReference:c,rings:[[[s,r],[t,r],[t,o],[s,o],[s,r]]]}),a=v(f,e);if(a.rings.length!==2||!a.rings[0].length||!a.rings[1].length)return null;const{rings:l}=a,d=S(c),y=new O({spatialReference:e});for(let x=0;x<2;x++){s=t=l[x][0][0],r=o=l[x][0][1];for(let m=0;m<l[x].length;m++)s=s>l[x][m][0]?l[x][m][0]:s,t=t<l[x][m][0]?l[x][m][0]:t,r=r>l[x][m][1]?l[x][m][1]:r,o=o<l[x][m][1]?l[x][m][1]:o;if(x===0)y.ymin=r,y.ymax=o,y.xmin=s,y.xmax=t;else if(y.ymin=Math.min(y.ymin,r),y.ymax=Math.max(y.ymax,o),Math.abs(t-i/2)<d)y.xmin=s,y.xmax=y.xmax+i;else{if(!(Math.abs(s+i/2)<d))return null;y.xmax=t+i}}return y}function ln(n,e,i=null,s=!0,r=!0){const t=n.spatialReference;if(t.equals(e)||!e)return n;$(t,e,i);const o=v(n,e,i);if(r&&e.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!s||!o)return o;const c=A(t,!0),f=A(e,!0);if(c==null||f==null)return o;const a=S(t,.001),l=S(t,B),d=S(e,.001);if(Math.abs(o.xmin-f[0])<d&&Math.abs(o.xmax-f[1])<d){const y=Math.abs(n.xmin-c[0]),x=Math.abs(c[1]-n.xmax);if(y<a&&x>l){o.xmin=f[0];const m=[];m.push(new k(n.xmax,n.ymin,t)),m.push(new k(n.xmax,(n.ymin+n.ymax)/2,t)),m.push(new k(n.xmax,n.ymax,t));const h=m.map(u=>sn(u,e,i)).filter(u=>!isNaN(u==null?void 0:u.x)).map(u=>u.x);o.xmax=Math.max.apply(null,h)}if(x<a&&y>l){o.xmax=f[1];const m=[];m.push(new k(n.xmin,n.ymin,t)),m.push(new k(n.xmin,(n.ymin+n.ymax)/2,t)),m.push(new k(n.xmin,n.ymax,t));const h=m.map(u=>sn(u,e,i)).filter(u=>!isNaN(u==null?void 0:u.x)).map(u=>u.x);o.xmin=Math.min.apply(null,h)}}else{const y=S(e,.001);Math.abs(o.xmin-f[0])<y&&(o.xmin=f[0]),Math.abs(o.xmax-f[1])<y&&(o.xmax=f[1])}return o}function G(n,e=!1){if(!n)return null;const i=e?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*i:n.wkid&&n.isGeographic?360:2*Tn[n.wkid]||null}function A(n,e=!1){if(n.isGeographic)return[-180,180];const i=G(n,e);return i!=null?[-i/2,i/2]:null}function cn(n,e,i,s){let r=(n-e)/i;return r-Math.floor(r)!=0?r=Math.floor(r):s&&(r-=1),r}function On(n,e=!1){const i=G(n.spatialReference);if(i==null)return 0;const s=e?0:-(i/2),r=S(n.spatialReference),t=!e&&Math.abs(n.xmax-i/2)<r?i/2:n.xmax,o=!e&&Math.abs(n.xmin+i/2)<r?-i/2:n.xmin;return cn(t,s,i,!0)-cn(o,s,i,!1)}function Fn(n){const e=n.storageInfo.origin.x,i=G(n.spatialReference,!0);if(i==null)return{originX:e,halfWorldWidth:null,pyramidsInfo:null};const s=i/2,{nativePixelSize:r,storageInfo:t,extent:o}=n,{maximumPyramidLevel:c,blockWidth:f,pyramidScalingFactor:a}=t;let l=r.x;const d=[],y=n.transform!=null&&n.transform.type==="gcs-shift",x=e+(y?0:s),m=y?i-e:s-e;for(let h=0;h<=c;h++){const u=(o.xmax-e)/l/f,R=u-Math.floor(u)==0?u:Math.ceil(u),g=m/l/f,p=g-Math.floor(g)==0?g:Math.ceil(g),w=Math.floor(x/l/f),M=Math.round(x/l)%f,b=(f-Math.round(m/l)%f)%f;d.push({resolutionX:l,blockWidth:f,datasetColumnCount:R,worldColumnCountFromOrigin:p,leftMargin:M,rightPadding:b,originColumnOffset:w}),l*=a}return{originX:e,halfWorldWidth:s,pyramidsInfo:d,hasGCSSShiftTransform:y}}function Ln(n){if(!n||n.isGeographic)return n;const e=String(n.wkid||n.wkt2||n.wkt);let i;return K.has(e)?i=K.get(e):(i=(n.wkid?E.coordsys(n.wkid):E.fromString(N.PE_TYPE_PROJCS,n.wkt2||n.wkt)).getGeogcs().getCode(),K.set(e,i)),new Gn({wkid:i})}function qn(n){const e=n.isAdaptive&&n.spacing==null;let i=n.spacing||[j,j],s=X(n),r={cols:s.size[0]+1,rows:s.size[1]+1};const t=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2;let o=s.outofBoundPointCount===s.offsets.length/2||e&&t?[0,0]:on(s.offsets,r,i,q);const c=(o[0]+o[1])/2,f=n.projectedExtent.spatialReference,a=n.srcBufferExtent.spatialReference;if(e&&(t||c>q)&&(xn(f,a,n.datumTransformation)&&(f.isGeographic||C(f)),i=[I,I],s=X({...n,spacing:i}),r={cols:s.size[0]+1,rows:s.size[1]+1},o=on(s.offsets,r,i,q)),s.error=o,i[0]>1&&(s.coefficients=fn(s.offsets,r,t)),n.includeGCSGrid&&!f.isGeographic&&!f.isWebMercator)if(a.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:i};else{const l=C(f);if(l!=null&&!l.isEnvelope){const d=Ln(f),y=pn(n.projectedExtent,d),{offsets:x}=X({...n,srcBufferExtent:y,spacing:i}),m=fn(x,r,t);s.gcsGrid={offsets:x,coefficients:m,spacing:i}}}return s}function X(n){const{projectedExtent:e,srcBufferExtent:i,pixelSize:s,datumTransformation:r,rasterTransform:t}=n,o=e.spatialReference,c=i.spatialReference,f=$(o,c),{xmin:a,ymin:l,xmax:d,ymax:y}=e,x=G(c),m=x!=null&&(n.hasWrapAround||(t==null?void 0:t.type)==="gcs-shift"),h=n.spacing||[j,j],u=h[0]*s.x,R=h[1]*s.y,g=h[0]===1,p=Math.ceil((d-a)/u-.1/h[0])+(g?0:1),w=Math.ceil((y-l)/R-.1/h[1])+(g?0:1),M=Cn({cols:p,rows:w,xmin:a,ymax:y,xres:u,yres:R,inSR:o,outSR:c,datumTransformation:r,preferPE:h[0]<=I,usePixelCenter:g}),b=[];let T,L=0;const Q=g?-1:NaN,{xmin:V,xmax:Y,ymax:gn,width:yn,height:dn}=i,wn=S(c,B),Mn=x!=null&&V>0&&Y>x/2;let Z=!1;if(f){const _=C(o);Z=_!=null&&_.poleLocation>0}for(let _=0;_<p;_++){const F=[];for(let W=0;W<w;W++){let P=M[_*w+W];if(m&&P[0]>Y&&P[0]>x/2-wn?P[0]-=x:m&&_===0&&P[0]<0&&Mn&&!t&&(P[0]+=x),!P||isNaN(P[0])||isNaN(P[1]))b.push(Q),b.push(Q),F.push(null),L++;else{if(t){const nn=t.inverseTransform(new k({x:P[0],y:P[1],spatialReference:c}));P=[nn.x,nn.y]}F.push(P),_>0&&m&&T[W]&&P[0]<T[W][0]&&(P[0]+=x,Z&&P[0]>Y&&P[0]>x&&(P[0]-=x)),b.push((P[0]-V)/yn),b.push((gn-P[1])/dn)}}T=F}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:L,spacing:h,size:g?[p,w]:[p-1,w-1]}}function fn(n,e,i){const{cols:s,rows:r}=e,t=new Float32Array((s-1)*(r-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),c=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let f=0;f<s-1;f++){for(let a=0;a<r-1;a++){let l=f*r*2+2*a;const d=n[l],y=n[l+1],x=n[l+2],m=n[l+3];l+=2*r;const h=n[l],u=n[l+1],R=n[l+2],g=n[l+3];let p=0,w=12*(a*(s-1)+f);for(let M=0;M<3;M++)t[w++]=o[p++]*d+o[p++]*x+o[p++]*R;p=0;for(let M=0;M<3;M++)t[w++]=o[p++]*y+o[p++]*m+o[p++]*g;p=0;for(let M=0;M<3;M++)t[w++]=c[p++]*d+c[p++]*h+c[p++]*R;p=0;for(let M=0;M<3;M++)t[w++]=c[p++]*y+c[p++]*u+c[p++]*g}if(i)for(let a=0;a<t.length;a++)isNaN(t[a])&&(t[a]=-1)}return t}function jn(n,e){const i=n.clone().normalize();return i.length===1?i[0]:hn(i,e)}function Jn(n){const{spatialReference:e}=n,i=Pn(e);if(!i)return n;const[s,r]=i.valid,t=r-s;let o=0;if(n.xmin<s){const c=s-n.xmin;o=Math.ceil(c/t)}else if(n.xmin>r){const c=n.xmin-r;o=-Math.ceil(c/t)}return new O({spatialReference:n.spatialReference,xmin:n.xmin+o*t,ymin:n.ymin,xmax:n.xmax+o*t,ymax:n.ymax})}function Kn(n,e,i){var m;const{storageInfo:s,pixelSize:r}=e;let t=0,o=!1;const{pyramidResolutions:c}=s,f=((m=s.tileInfo.format)==null?void 0:m.toLowerCase())==="mixed"?Math.max(1,Math.min(3,s.tileInfo.dpi/96)):1,a=(n.x+n.y)/2/f;if(c!=null&&c.length){const h=c[c.length-1],u=(h.x+h.y)/2,R=(r.x+r.y)/2;if(a<=R)t=0;else if(a>=u)t=c.length,o=a/u>8;else{let p,w=R;for(let M=1;M<=c.length;M++){if(p=(c[M-1].x+c[M-1].y)/2,a<=p){a===p?t=M:i==="down"?(t=M-1,o=a/w>8):t=i==="up"||a-w>p-a||a/w>2?M:M-1;break}w=p}}const g=t===0?r:c[t-1];return o&&Math.min(g.x,g.y)*z(e.spatialReference)>19567&&(o=!1),{pyramidLevel:t,pyramidResolution:new k({x:g.x,y:g.y,spatialReference:e.spatialReference}),excessiveReading:o}}const l=Math.log(n.x/r.x)/Math.LN2,d=Math.log(n.y/r.y)/Math.LN2,y=e.storageInfo.maximumPyramidLevel||0;t=i==="down"?Math.floor(Math.min(l,d)):i==="up"?Math.ceil(Math.max(l,d)):Math.round((l+d)/2),t<0?t=0:t>y&&(o=t>y+3,t=y);const x=2**t;return{pyramidLevel:t,pyramidResolution:new k({x:x*e.nativePixelSize.x,y:x*e.nativePixelSize.y,spatialReference:e.spatialReference}),excessiveReading:o}}function Xn(n,e){const{pixelSize:i,extent:s}=n,r=_n(s,e,!1);return pn(jn(s,(i.x+i.y)/16),e,r)}export{An as C,G as D,pn as J,xn as M,Bn as T,Yn as U,On as V,Fn as Z,qn as e,sn as j,Jn as o,Kn as r,Xn as s,_n as v};
