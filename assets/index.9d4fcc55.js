import{d as e,e as t,h as a,L as o,H as n,aN as r,aQ as i,au as s,aS as c,o as d,c as l,a as m,b as u,F as g,g as h,aT as f}from"./index.60fabeb6.js";import{o as p,s as b}from"./dom.4d93afe0.js";import{g as v}from"./screen.e36a172e.js";var y=e({name:"Preview",props:{screenId:{type:[String,Number],required:!0}},setup(e){const d=t(!0),l=a((()=>r.pageConfig)),m=a((()=>r.coms)),u=a((()=>{const e=l.value.styleFilterParams;let t="";return e.enable&&(t=`hue-rotate(${e.hue}deg) contrast(${e.contrast}%) opacity(${e.opacity}%) saturate(${e.saturate}%) brightness(${e.brightness}%)`),t})),g=e=>{switch(e.zoomMode){case c.auto:((e,t)=>{const a=document.documentElement.clientWidth/e,o=document.documentElement.clientHeight/t;b(document.body,{transform:`scale(${a}, ${o})`,transformOrigin:"left top",backgroundSize:"100% 100%"})})(e.width,e.height);break;case c.width:(e=>{const t=document.documentElement.clientWidth/e;b(document.body,{transform:`scale(${t})`,transformOrigin:"left top",backgroundSize:"100%"})})(e.width);break;case c.height:((e,t)=>{const a=document.documentElement.clientWidth,o=document.documentElement.clientHeight/t,n=(a-e*o)/2;b(document.body,{transform:`scale(${o})`,transformOrigin:"left top",backgroundSize:e/a*o*100+"% 100%",backgroundPosition:`${n.toFixed(3)}px top`,marginLeft:`${n.toFixed(3)}px`})})(e.width,e.height);break;case c.full:((e,t)=>{const a=document.documentElement.clientWidth,o=document.documentElement.clientHeight/t,n=(a-e*o)/2;b(document.body,{transform:`scale(${o})`,transformOrigin:"left top",backgroundSize:e/a*o*100+"% 100%",backgroundPosition:`${n.toFixed(3)}px top`}),document.documentElement.style.overflowX="scroll"})(e.width,e.height);break;default:b(document.body,{overflow:"hidden",position:"relative"})}},h=o();return n((async()=>{try{const a=await v(+e.screenId);if(!a)throw new Error("404");r.setEditorOption({screen:a.screen,config:a.config,coms:a.coms,variables:a.variables}),t=a.config,document.title=r.screen.name,document.querySelector('meta[name="viewport"]').setAttribute("content",`width=${t.width}`),b(document.documentElement,{overflowX:"hidden",overflowY:"visible"}),b(document.body,{width:`${t.width}px`,height:`${t.height}px`,backgroundImage:`url(${l.value.bgimage})`,backgroundColor:l.value.bgcolor}),g(t),i.setFilterOption({dataFilters:a.dataFilters}),setTimeout((()=>{d.value=!1}),500),p(window,"resize",(()=>{g(l.value)}))}catch(a){h.replace({name:"NotFound",params:{catchAll:"error"}})}var t})),{cdn:"//files.pengxiaotian.com",LOGO:s.logo,loading:d,pageConfig:l,coms:m,styleFilter:u}}});const w={target:"_blank",href:"javascript:;"},$={key:0,href:"/",target:"_blank",class:"datav-watermark"},k={class:"scene"};y.render=function(e,t,a,o,n,r){return d(),l(g,null,[m("div",{id:"datav-loading",style:{background:"rgb(15, 42, 66)",display:e.loading?"block":"none"}},[m("a",w,[m("img",{class:"datav-logo",src:`${e.cdn}/datav/datav-loading.gif`},null,8,["src"])])],4),m("div",{class:"datav-layout",style:{visibility:e.loading?"hidden":"visible"}},[e.pageConfig.useWatermark?(d(),l("a",$,[m("img",{src:e.LOGO},null,8,["src"])])):u("",!0),m("div",k,[(d(!0),l(g,null,h(e.coms,(t=>(d(),l("div",{key:t.id,style:{left:t.attr.x+"px",top:t.attr.y+"px",width:t.attr.w+"px",height:t.attr.h+"px",opacity:t.attr.opacity,transform:`rotate(${t.attr.deg}deg) ${t.attr.filpH?"scaleX(-1)":""} ${t.attr.filpV?"scaleY(-1)":""}`,filter:e.styleFilter},class:"-datav-com absolute"},[(d(),l(f(t.name),{com:t},null,8,["com"]))],4)))),128))])],4)],64)};export default y;
