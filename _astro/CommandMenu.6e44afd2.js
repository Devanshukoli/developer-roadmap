import{j as s}from"./jsx-runtime.391947bd.js";import{r}from"./index.ed373d49.js";import{u as b}from"./use-keydown.0305ad6b.js";import{u as y}from"./use-outside-click.54b69c89.js";import{R as j}from"./roadmap.98480e4e.js";import{U as N}from"./user.e54d4f48.js";import{G as I}from"./group.ee80b7c2.js";import{a as k}from"./http.64a7434f.js";import{i as R}from"./jwt.1b92699e.js";const S={src:"/_astro/best-practices.50e7851f.svg",width:24,height:24,format:"svg"},C={src:"/_astro/clipboard.76d39f96.svg",width:24,height:24,format:"svg"},E={src:"/_astro/guide.cc658e25.svg",width:24,height:24,format:"svg"},A={src:"/_astro/home.cab14122.svg",width:24,height:24,format:"svg"},G={src:"/_astro/video.e6296e1b.svg",width:24,height:24,format:"svg"},a=[{id:"home",url:"/",title:"Home",group:"Pages",icon:A.src},{id:"account",url:"/account",title:"Account",group:"Pages",icon:N.src,isProtected:!0},{id:"team",url:"/team",title:"Teams",group:"Pages",icon:I.src,isProtected:!0},{id:"roadmaps",url:"/roadmaps",title:"Roadmaps",group:"Pages",icon:j.src},{id:"best-practices",url:"/best-practices",title:"Best Practices",group:"Pages",icon:S.src},{id:"questions",url:"/questions",title:"Questions",group:"Pages",icon:C.src},{id:"guides",url:"/guides",title:"Guides",group:"Pages",icon:E.src},{id:"videos",url:"/videos",title:"Videos",group:"Pages",icon:G.src}];function p(c){const n=R();return!c.isProtected||n}function F(){const c=r.useRef(null),n=r.useRef(null),[m,l]=r.useState(!1),[v,P]=r.useState([]),[o,x]=r.useState(a),[u,g]=r.useState(""),[i,d]=r.useState(0);b("mod_k",()=>{l(!0)}),y(n,()=>{g(""),l(!1)}),r.useEffect(()=>{function e(t){l(!0)}return w(),window.addEventListener("command.k",e),()=>{window.removeEventListener("command.k",e)}},[]),r.useEffect(()=>{!m||!c.current||c.current.focus()},[m]);async function w(){if(v.length>0)return v;const{error:e,response:t}=await k("/pages.json");return t?(P([...a,...t].filter(p)),t):a.filter(p)}return r.useEffect(()=>{if(!u){x(a.filter(p));return}const e=u.trim().toLowerCase();w().then((t=a)=>{const f=t.filter(h=>h.title.toLowerCase().indexOf(e)!==-1).slice(0,10);d(0),x(f)})},[u]),m?s.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 flex h-full justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:s.jsx("div",{className:"relative top-0 h-full w-full max-w-lg p-2 sm:top-20 md:h-auto",children:s.jsxs("div",{className:"relative rounded-lg bg-white shadow",ref:n,children:[s.jsx("input",{ref:c,autoFocus:!0,type:"text",value:u,className:"w-full rounded-t-md border-b p-4 text-sm focus:bg-gray-50 focus:outline-none",placeholder:"Search roadmaps, guides or pages ..",autoComplete:"off",onInput:e=>{const t=e.target.value.trim();g(t)},onKeyDown:e=>{if(e.key==="ArrowDown"){const t=i<o.length-1;d(t?i+1:0)}else if(e.key==="ArrowUp"){const t=i>0;d(t?i-1:o.length-1)}else if(e.key==="Tab")e.preventDefault();else if(e.key==="Escape")g(""),l(!1);else if(e.key==="Enter"){const t=o[i];t&&(window.location.href=t.url)}}}),s.jsx("div",{className:"px-2 py-2",children:s.jsxs("div",{className:"flex flex-col",children:[o.length===0&&s.jsx("div",{className:"p-5 text-center text-sm text-gray-400",children:"No results found"}),o.map((e,t)=>{const f=o[t-1],h=f&&f.group!==e.group;return s.jsxs(r.Fragment,{children:[h&&s.jsx("div",{className:"border-b border-gray-100"}),s.jsxs("a",{className:`flex w-full items-center rounded p-2 text-sm ${t===i?"bg-gray-100":""}`,onMouseOver:()=>d(t),href:e.url,children:[!e.icon&&s.jsx("span",{className:"mr-2 text-gray-400",children:e.group}),e.icon&&s.jsx("img",{alt:e.title,src:e.icon,className:"mr-2 h-4 w-4"}),e.title]})]},e.id)})]})})]})})}):null}export{F as CommandMenu};
