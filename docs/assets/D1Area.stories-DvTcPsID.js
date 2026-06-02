import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,Dt as i,Ft as a,Mt as o,Xt as s,kt as c,m as l,r as u}from"./iframe-53vFWNoU.js";import{t as d}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as f,f as p,l as m,n as h,o as g,p as _,t as v,u as y}from"./wiki-DwIxUKqL.js";import{n as b,t as x}from"./getAreaValue-7KiCZXlF-vfxgl5ZF.js";var S,C,w,T=t((()=>{p(),x(),i(),l(),S=class{constructor(e,t,n,r,i,a,o,s){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get area(){return b()??this.props.areaDefault}},C={},w=class extends u{constructor(e,t,n,r=S){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.area;if(this.slots){if(e&&e in this.slots)return this.initSlot(e);if(`default`in this.slots)return this.initSlot(`default`)}}}})),E,D=t((()=>{T(),E={...C}})),O=t((()=>{})),k,A=t((()=>{i(),T(),D(),O(),k=o({name:`D1Area`,__name:`D1Area`,props:a({areaDefault:{}},E),setup(e,{expose:t,emit:i}){let a=new w(`d1.area`,e,{emits:i,classes:c(()=>({main:{"d1-area":!0}})),styles:c(()=>({}))}),o=a.render();return t(a.expose()),(e,t)=>(r(),n(s(o)))}})})),j,M=t((()=>{A(),A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1Area`,exportName:`default`,displayName:`D1Area`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Area/D1Area.vue`]})})),N,P,F,I,L=t((()=>{v(),D(),N=[{name:`areaDefault`,type:`string`}],P=[],F=[],I={component:`Area`,props:N,slots:P,events:F,defaults:E,wikiDesign:h}})),R,z=t((()=>{f(),g(),L(),R=new y(I.component,I.props,I.defaults,I.wikiDesign,m,d)})),B=e({Area:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U,W=t((()=>{M(),z(),V={title:`Ui/Area`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1Area:j},setup:()=>({args:e}),template:`
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    `})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Area
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...H.parameters?.docs?.source}}},U=[`Area`]}));W();export{H as Area,U as __namedExportsOrder,V as default,z as i,W as n,R as r,B as t};