import{a as L,T as $}from"./jwt.f0e0aa9c.js";import{h as w,a as T}from"./http.12b0c277.js";async function I(e){const{topicId:o,resourceType:r,resourceId:c}=e,{done:t=[]}=await u(r,c)||{};return t?.includes(o)}async function R(e){const{topicId:o,resourceType:r,resourceId:c}=e,t=await u(r,c);return t?.done?.includes(o)?"done":t?.learning?.includes(o)?"learning":t?.skipped?.includes(o)?"skipped":"pending"}async function M(e,o){const{topicId:r,resourceType:c,resourceId:t}=e,{response:s,error:n}=await w("https://api.roadmap.sh/v1-update-resource-progress",{topicId:r,resourceType:c,resourceId:t,progress:o});if(n||!s?.done||!s?.learning)throw new Error(n?.message||"Something went wrong");return E(c,t,s.done,s.learning,s.skipped),s}async function u(e,o){if(!L.get($))return{done:[],learning:[],skipped:[]};const r=`${e}-${o}-progress`,c=localStorage.getItem(r),t=JSON.parse(c||"null"),s=t?.timestamp,l=new Date().getTime()-parseInt(s||"0",10)>15*60*1e3;return!t||l?x(e,o):t}async function x(e,o){const{response:r,error:c}=await T("https://api.roadmap.sh/v1-get-user-resource-progress",{resourceType:e,resourceId:o});return c||!r?(console.error(c),{done:[],learning:[],skipped:[]}):(E(e,o,r?.done||[],r?.learning||[],r?.skipped||[]),r)}function E(e,o,r,c,t){localStorage.setItem(`${e}-${o}-progress`,JSON.stringify({done:r,learning:c,skipped:t,timestamp:new Date().getTime()}))}function i(e,o){const r=o==="learning",c=o==="skipped",t=o==="done",s=[];document.querySelectorAll(`[data-group-id$="-${e}"]`).forEach(n=>{const l=n?.dataset?.groupId||"";new RegExp(`^\\d+-${e}$`).test(l)&&s.push(n)}),document.querySelectorAll(`[data-group-id="${e}"]`).forEach(n=>{s.push(n)}),document.querySelectorAll(`[data-group-id="check:${e}"]`).forEach(n=>{s.push(n)}),s.forEach(n=>{t?(n.classList.add("done"),n.classList.remove("learning","skipped")):r?(n.classList.add("learning"),n.classList.remove("done","skipped")):c?(n.classList.add("skipped"),n.classList.remove("done","learning")):n.classList.remove("done","skipped","learning")})}async function b(e,o){const{done:r=[],learning:c=[],skipped:t=[]}=await u(e,o)||{};r.forEach(s=>{i(s,"done")}),c.forEach(s=>{i(s,"learning")}),t.forEach(s=>{i(s,"skipped")}),v()}function v(){const e=document.querySelectorAll("[data-progress-nums-container]"),o=document.querySelectorAll("[data-progress-nums]");if(e.length===0||o.length===0)return;const r=document.querySelectorAll(".clickable-group").length,c=document.querySelectorAll('[data-group-id^="ext_link:"]').length,t=document.querySelectorAll('[data-group-id^="json:"]').length,s=document.querySelectorAll('[data-group-id^="check:"]').length,n=document.querySelectorAll('[data-group-id^="check:"].done').length,l=document.querySelectorAll('[data-group-id^="check:"].learning').length,d=document.querySelectorAll('[data-group-id^="check:"].skipped').length,p=r-c-t-s,g=document.querySelectorAll(".clickable-group.done").length-n,q=document.querySelectorAll(".clickable-group.learning").length-l,h=document.querySelectorAll(".clickable-group.skipped").length-d,f=document.querySelectorAll("[data-progress-done]");f.length>0&&f.forEach(a=>a.innerHTML=`${g}`);const m=document.querySelectorAll("[data-progress-learning]");m.length>0&&m.forEach(a=>a.innerHTML=`${q}`);const k=document.querySelectorAll("[data-progress-skipped]");k.length>0&&k.forEach(a=>a.innerHTML=`${h}`);const y=document.querySelectorAll("[data-progress-total]");y.length>0&&y.forEach(a=>a.innerHTML=`${p}`);const A=Math.round((g+h)/p*100),S=document.querySelectorAll("[data-progress-percentage]");S.length>0&&S.forEach(a=>a.innerHTML=`${A}`),e.forEach(a=>a.classList.remove("striped-loader")),o.forEach(a=>{a.classList.remove("opacity-0")})}function D(){const e=document.querySelector("#login-popup");if(!e)return;e.classList.remove("hidden"),e.classList.add("flex");const o=e.querySelector("[autofocus]");o&&o.focus()}export{v as a,b,R as g,I as i,i as r,D as s,M as u};
