import{d as e,as as l,aX as a,f as o,o as s,c as i,a as n,w as t}from"./index.76b85017.js";var c=e({name:"VDecorationProp",props:{com:{type:Object,required:!0}},setup(e){const o=l(e.com,"config"),s=[];for(const l in a){const e=a[l];s.push({id:l,name:l,src:e.url})}return{config:o,images:s}}});const g={class:"setting-panel-gui"};c.render=function(e,l,a,c,d,m){const u=o("g-select-image"),r=o("g-field"),f=o("g-slider"),p=o("g-field-collapse");return s(),i("div",g,[n(p,{label:"全局"},{default:t((()=>[n(r,{level:2,label:"装饰元素"},{default:t((()=>[n(u,{modelValue:e.config.global.img,"onUpdate:modelValue":l[1]||(l[1]=l=>e.config.global.img=l),images:e.images},null,8,["modelValue","images"])])),_:1}),n(r,{level:2,label:"透明度"},{default:t((()=>[n(f,{modelValue:e.config.global.opacity,"onUpdate:modelValue":l[2]||(l[2]=l=>e.config.global.opacity=l),min:0,max:1,step:.1},null,8,["modelValue","step"])])),_:1})])),_:1})])};export default c;