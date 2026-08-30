import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,Nt as o,Ot as s,Pt as c,kt as l,sn as u}from"./library-CO1fW2cN.js";import{E as d,O as f,d as p,f as m,i as h,l as g,n as _,t as v,u as y}from"./wiki-BMj2WokS.js";import{n as b,t as x}from"./getAreaValue-Xc_XgXhl-GjyS01DL.js";var S,C,w;function T(){return(T=e((()=>{x(),l(),d(),s(),S=class{constructor(e,t,n,i,a,o,s,c){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c}get area(){return b()??this.props.areaDefault}},C={},w=class extends f{constructor(e,t,n,i=S){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=this.item.area;if(this.slots){if(e&&e in this.slots)return this.initSlot(e);if(`default`in this.slots)return this.initSlot(`default`)}}}})))()}var E;function D(){return(D=e((()=>{T(),E={...C}})))()}var O;function k(){return(k=e((()=>{l(),T(),D(),O=i({name:`D1Area`,__name:`D1Area`,props:n({areaDefault:{}},E),setup(e,{expose:t,emit:n}){let r=n,i=e,s=o(()=>({main:{"d1-area":!0}})),l=o(()=>({})),d=new w(`d1.area`,i,{emits:r,classes:s,styles:l}),f=d.render();return t(d.expose()),(e,t)=>(a(),c(u(f)))}})})))()}var A;function j(){return(j=e((()=>{k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1Area`,exportName:`default`,displayName:`D1Area`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Area/D1Area.vue`]})})))()}var M,N,P,F;function I(){return(I=e((()=>{v(),D(),M=[{name:`areaDefault`,type:`string`}],N=[],P=[],F={component:`Area`,props:M,slots:N,events:P,defaults:E,wikiDesign:_}})))()}var L;function R(){return(R=e((()=>{p(),g(),I(),L=new y(F.component,F.props,F.defaults,F.wikiDesign,h,m)})))()}var z=t({Area:()=>V,__namedExportsOrder:()=>H,default:()=>B}),B,V,H;function U(){return(U=e((()=>{j(),R(),B={title:`Ui/Area`,component:A,parameters:{design:`d1`,docs:{description:{component:L.getDescription()}}},argTypes:L.getWiki(),args:L.getValues()},V={render:e=>({components:{D1Area:A},setup:()=>({args:e}),template:`
      <D1Area v-bind="args">
      <template #header>Header Content (from area-default)</template>
      <template #footer>Footer Content</template>
      <template #default>Default Content</template>
    </D1Area>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Area`]})))()}export{R as a,L as i,z as n,U as r,V as t};