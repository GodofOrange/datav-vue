var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,i=(e,a)=>{for(var t in a||(a={}))l.call(a,t)&&o(e,t,a[t]);if(n)for(var t of n(a))s.call(a,t)&&o(e,t,a[t]);return e},c=(e,n)=>a(e,t(n));import{d as r,e as d,h as p,B as m,aR as u,b1 as b,aN as g,b8 as f,M as v,b9 as y,f as h,o as k,c as C,w,a as O,t as P,F as D,g as j,b as x}from"./index.3fbdeb38.js";import{c as _}from"./index.1f65f64c.js";import"./templates.cace4871.js";import"./basic-bar.d02c57ec.js";var T=r({name:"ComponentsPanel",setup(){const e=d(""),a=d([]),t=p((()=>u.components.show)),n=m(y),l={type:"all",name:"全部",icon:"v-icon-view-grid"},s=p((()=>{const e=n;return e.forEach((e=>{e.data.unshift(c(i({},l),{data:e.data.flatMap((e=>e.data))}))})),e.push({type:"favorite",name:"收藏",icon:"v-icon-favorite",data:[c(i({},l),{data:a.value})]}),e}));return{searchText:e,favoriteComs:a,visiblePanel:t,categories:s,changeVisible:()=>{u.setPanelState({type:b.components,value:!t.value})},handleTabClick:()=>{t.value||u.setPanelState({type:b.components,value:!0})},toAddCom:async(e,a)=>{if(a){u.addLoading();const{pageConfig:a}=g,t=_(e);t.attr.x=Math.floor((a.width-t.attr.w)/2),t.attr.y=Math.floor((a.height-t.attr.h)/2),await g.addCom(t),g.selectCom(t.id),u.removeLoading(),t.apis.source&&(await t.loadData(),f.datavComponents[t.id].$DATAV_requestData())}else v.warning("正在开发中。。。")},dragStart:(e,a)=>{e.dataTransfer.setData("text",a)},dragOver:e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="none"}}}});const S={class:"components-panel"},A={class:"panel-title"},M={class:"panel-text"},V=O("i",{title:"搜索",class:"v-icon-search btn-icon"},null,-1),E={class:"com-tab-title"},$={class:"com-tab-title"},L={class:"components-single-menu-wp"},q={class:"components-single-menu"},B={class:"components-single-menu-list"},F={class:"components-item-text"},I={key:1,class:"components-multi-menu"},N={class:"components-single-menu --wider"},R={class:"components-single-menu-list"},z={class:"components-item-text"},G={key:0,class:"favorite-empty"};T.render=function(e,a,t,n,l,s){const o=h("el-tooltip"),i=h("el-tab-pane"),c=h("el-tabs"),r=h("el-aside");return k(),C(r,{width:"auto",class:["component-panel-wp",{"--hide":!e.visiblePanel}]},{default:w((()=>[O("div",S,[O("div",A,[O("span",M,P(e.visiblePanel?"全部组件":"组件"),1),O(o,{content:"搜索",placement:"top",effect:"blue","open-delay":500,enterable:!1},{default:w((()=>[V])),_:1}),O(o,{content:"收起",placement:"top",effect:"blue","open-delay":500,enterable:!1},{default:w((()=>[O("i",{title:"收起",class:"v-icon-back btn-icon",onClick:a[1]||(a[1]=(...a)=>e.changeVisible&&e.changeVisible(...a))})])),_:1})]),O("div",{class:"components-panel-wrapper",onDragover:a[2]||(a[2]=(...a)=>e.dragOver&&e.dragOver(...a))},[O(c,{"tab-position":"left",onTabClick:e.handleTabClick},{default:w((()=>[(k(!0),C(D,null,j(e.categories,(a=>(k(),C(i,{key:a.type},{label:w((()=>[O(o,{content:a.name,placement:"right",effect:"blue","open-delay":500,enterable:!1},{default:w((()=>[O("div",null,[O("i",{class:["com-tab-icon",a.icon]},null,2),O("span",E,P(a.name),1)])])),_:2},1032,["content"])])),default:w((()=>[a.data.length>2?(k(),C(c,{key:0,"tab-position":"left",class:"el-tabs-l2"},{default:w((()=>[(k(!0),C(D,null,j(a.data,(a=>(k(),C(i,{key:a.type},{label:w((()=>[O("span",$,P(a.name),1)])),default:w((()=>[O("div",L,[O("div",q,[O("ul",B,[(k(!0),C(D,null,j(a.data,(a=>(k(),C("li",{key:a.name,title:a.alias,draggable:a.used,class:"components-item double",onDragstart:t=>e.dragStart(t,a.name),onClick:t=>e.toAddCom(a.name,a.used)},[O("div",F,P(a.alias),1),O("div",{class:"components-item-img",style:`background-image: url(${a.img});`},null,4)],40,["title","draggable","onDragstart","onClick"])))),128))])])])])),_:2},1024)))),128))])),_:2},1024)):(k(),C("div",I,[O("div",N,[O("ul",R,[(k(!0),C(D,null,j(a.data[0].data,(a=>(k(),C("li",{key:a.name,title:a.alias,draggable:a.used,class:"components-item double",onDragstart:t=>e.dragStart(t,a.name),onClick:t=>e.toAddCom(a.name,a.used)},[O("div",z,P(a.alias),1),O("div",{class:"components-item-img",style:`background-image: url(${a.img});`},null,4)],40,["title","draggable","onDragstart","onClick"])))),128))]),0===a.data[0].data.length?(k(),C(D,{key:0},["favorite"===a.type?(k(),C("div",G," 没有收藏组件 ")):x("",!0)],64)):x("",!0)])]))])),_:2},1024)))),128))])),_:1},8,["onTabClick"])],32)])])),_:1},8,["class"])};export default T;