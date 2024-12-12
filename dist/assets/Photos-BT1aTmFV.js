import{_ as J,r as _,h as K,c as f,a as s,b as e,w as l,d as a,o as m,F as z,f as P,e as c,g as I,t as i,j as O,n as $,m as Q,k as R}from"./index-B6L9RVRK.js";const W={class:"photos"},X={class:"page-header py-16"},Y={class:"photo-grid pb-16"},Z={class:"photo-info"},H={class:"text-h6 text-white mb-2"},ee={class:"d-flex align-center"},te={class:"text-caption text-white"},le={class:"text-caption text-white"},oe={class:"text-center mt-8"},ae={class:"mb-4"},se={class:"d-flex align-center"},ne={class:"text-caption"},ie={class:"text-body-2 ml-2"},de={__name:"Photos",setup(ce){const j=[{id:"all",name:"全部",icon:"mdi-image-multiple"},{id:"nature",name:"自然",icon:"mdi-forest"},{id:"city",name:"城市",icon:"mdi-city"},{id:"life",name:"生活",icon:"mdi-camera"}],r=_("all"),v=_(!1),h=_(!1),d=_(null),u=_([{id:1,title:"山间晨雾",description:"清晨的山谷被薄雾笼罩，宁静而神秘...",url:"https://picsum.photos/seed/photo1/800/800",thumbnail:"https://picsum.photos/seed/photo1/400/400",albumId:"nature",date:"2024-03-15",likes:128,liked:!1},{id:2,title:"城市夜景",description:"霓虹闪烁的都市夜景，展现现代都市的魅力...",url:"https://picsum.photos/seed/photo2/800/800",thumbnail:"https://picsum.photos/seed/photo2/400/400",albumId:"city",date:"2024-03-12",likes:96,liked:!1},{id:3,title:"咖啡时光",description:"享受午后时光，一杯咖啡的悠闲时刻...",url:"https://picsum.photos/seed/photo3/800/800",thumbnail:"https://picsum.photos/seed/photo3/400/400",albumId:"life",date:"2024-03-10",likes:75,liked:!1}]),B=K(()=>r.value==="all"?u.value:u.value.filter(n=>n.albumId===r.value)),M=n=>{d.value=n,h.value=!0},g=n=>{n.liked=!n.liked,n.likes+=n.liked?1:-1},N=async()=>{v.value=!0,await new Promise(o=>setTimeout(o,1e3));const n=[{id:u.value.length+1,title:"新的照片",description:"这是一张新加载的照片...",url:`https://picsum.photos/seed/photo${u.value.length+1}/800/800`,thumbnail:`https://picsum.photos/seed/photo${u.value.length+1}/400/400`,albumId:"nature",date:"2024-03-01",likes:Math.floor(Math.random()*100)+20,liked:!1}];u.value.push(...n),v.value=!1};return(n,o)=>{const p=a("v-icon"),D=a("v-chip"),F=a("v-chip-group"),k=a("v-container"),L=a("v-progress-circular"),x=a("v-row"),y=a("v-spacer"),b=a("v-img"),w=a("v-card"),T=a("v-hover"),U=a("v-col"),C=a("v-btn"),A=a("v-card-title"),E=a("v-card-text"),S=a("v-dialog");return m(),f("div",W,[s("section",X,[e(k,null,{default:l(()=>[o[3]||(o[3]=s("h1",{class:"text-h3 font-weight-bold text-center mb-6","data-aos":"fade-up"}," 照片墙 ",-1)),e(F,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=t=>r.value=t),class:"justify-center mb-8","data-aos":"fade-up","data-aos-delay":"100"},{default:l(()=>[(m(),f(z,null,P(j,t=>e(D,{key:t.id,value:t.id,filter:"",variant:"elevated",color:r.value===t.id?"primary":void 0,class:$({"category-chip":!0,"category-chip--selected":r.value===t.id})},{default:l(()=>[e(p,{start:""},{default:l(()=>[c(i(t.icon),1)]),_:2},1024),c(" "+i(t.name),1)]),_:2},1032,["value","color","class"])),64))]),_:1},8,["modelValue"])]),_:1})]),s("section",Y,[e(k,null,{default:l(()=>[e(x,null,{default:l(()=>[(m(!0),f(z,null,P(B.value,t=>(m(),I(U,{key:t.id,cols:"12",sm:"6",md:"4",lg:"3","data-aos":"zoom-in"},{default:l(()=>[e(T,null,{default:l(({isHovering:V,props:q})=>[e(w,Q({ref_for:!0},q,{class:"photo-card",elevation:V?8:0,onClick:G=>M(t)}),{default:l(()=>[e(b,{src:t.url,"lazy-src":t.thumbnail,"aspect-ratio":"1",cover:"",class:"rounded-lg"},{placeholder:l(()=>[e(x,{class:"fill-height ma-0",align:"center",justify:"center"},{default:l(()=>[e(L,{indeterminate:"",color:"primary"})]),_:1})]),default:l(()=>[s("div",{class:$(["photo-overlay d-flex flex-column justify-end pa-4",{"show-overlay":V}])},[s("div",Z,[s("h3",H,i(t.title),1),s("div",ee,[e(p,{color:"white",size:"small",class:"mr-2"},{default:l(()=>o[4]||(o[4]=[c(" mdi-calendar ")])),_:1}),s("span",te,i(t.date),1),e(y),e(p,{color:t.liked?"red":"white",size:"small",class:"mr-1",onClick:R(G=>g(t),["stop"])},{default:l(()=>[c(i(t.liked?"mdi-heart":"mdi-heart-outline"),1)]),_:2},1032,["color","onClick"]),s("span",le,i(t.likes),1)])])],2)]),_:2},1032,["src","lazy-src"])]),_:2},1040,["elevation","onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1}),s("div",oe,[e(C,{color:"primary",variant:"outlined",size:"large",onClick:N,loading:v.value,"data-aos":"fade-up"},{default:l(()=>o[5]||(o[5]=[c(" 加载更多 ")])),_:1},8,["loading"])])]),_:1})]),e(S,{modelValue:h.value,"onUpdate:modelValue":o[2]||(o[2]=t=>h.value=t),"max-width":"800"},{default:l(()=>[d.value?(m(),I(w,{key:0},{default:l(()=>[e(b,{src:d.value.url,"aspect-ratio":16/9,cover:""},null,8,["src"]),e(A,null,{default:l(()=>[c(i(d.value.title),1)]),_:1}),e(E,null,{default:l(()=>[s("p",ae,i(d.value.description),1),s("div",se,[e(p,{color:"primary",size:"small",class:"mr-2"},{default:l(()=>o[6]||(o[6]=[c(" mdi-calendar ")])),_:1}),s("span",ne,i(d.value.date),1),e(y),e(C,{icon:"",variant:"text",color:d.value.liked?"red":void 0,onClick:o[1]||(o[1]=t=>g(d.value))},{default:l(()=>[e(p,null,{default:l(()=>[c(i(d.value.liked?"mdi-heart":"mdi-heart-outline"),1)]),_:1})]),_:1},8,["color"]),s("span",ie,i(d.value.likes),1)])]),_:1})]),_:1})):O("",!0)]),_:1},8,["modelValue"])])}}},ue=J(de,[["__scopeId","data-v-0eaec27c"]]);export{ue as default};
