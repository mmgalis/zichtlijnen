import{gf as d,gg as a,gh as g,gi as i}from"./index-CY8jQoH7.js";import{r as c}from"./VertexSnappingCandidate-vYFASE83.js";function t({x:e,y:r,z:n}){return i(e,r,n??0)}function p(e,r){switch(e.type){case"edge":return e.draped?new a({edgeStart:t(e.start),edgeEnd:t(e.end),targetPoint:d(t(e.target)),objectId:e.objectId,getGroundElevation:r}):new g({edgeStart:t(e.start),edgeEnd:t(e.end),targetPoint:d(t(e.target)),objectId:e.objectId,isDraped:!1});case"vertex":return new c({targetPoint:d(t(e.target)),objectId:e.objectId,isDraped:!1})}}function l(e,r){return e!=null&&e.type==="3d"?(n,o)=>e.elevationProvider.getElevation(n,o,0,r,"ground"):()=>null}export{l as i,p as o};
