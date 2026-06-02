import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,Dt as i,Ft as a,Mt as o,Nt as s,Xt as c,kt as l,m as u,r as d}from"./iframe-53vFWNoU.js";import{t as f}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as p,f as m,l as h,n as g,o as _,p as v,t as y,u as b}from"./wiki-DwIxUKqL.js";var x,S,C,w=t((()=>{m(),i(),u(),x=class{constructor(e,t,n,r,i,a,o,s){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get tag(){return this.props.tag??`div`}},S={tag:`div`},C=class extends d{constructor(e,t,n,r=x){super(e,t,n),v(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return s(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})),T,E=t((()=>{w(),T={...S}})),D=t((()=>{})),O,k=t((()=>{i(),w(),E(),D(),O=o({name:`D1Bleed`,__name:`D1Bleed`,props:a({tag:{}},T),setup(e,{expose:t,emit:i}){let a=new C(`d1.bleed`,e,{emits:i,classes:l(()=>({main:{"d1-bleed":!0}})),styles:l(()=>({}))}),o=a.render();return t(a.expose()),(e,t)=>(r(),n(c(o)))}})})),A,j=t((()=>{k(),k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1Bleed`,exportName:`default`,displayName:`D1Bleed`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Bleed/D1Bleed.vue`]})})),M,N,P,F,I=t((()=>{y(),E(),M=[{name:`tag`,type:`string`}],N=[],P=[],F={component:`Bleed`,props:M,slots:N,events:P,defaults:T,wikiDesign:g}})),L,R=t((()=>{p(),_(),I(),L=new b(F.component,F.props,F.defaults,F.wikiDesign,h,f)})),z=e({Bleed:()=>V,__namedExportsOrder:()=>H,default:()=>B}),B,V,H,U=t((()=>{j(),R(),B={title:`Ui/Bleed`,component:A,parameters:{design:`d1`,docs:{description:{component:L.getDescription()}}},argTypes:L.getWiki(),args:L.getValues()},V={render:e=>({components:{D1Bleed:A},setup:()=>({args:e}),template:`
      <D1Bleed v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
        <p>The component applies negative horizontal margins based on the margin-x property.</p>
      </D1Bleed>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Bleed
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Bleed v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
        <p>The component applies negative horizontal margins based on the margin-x property.</p>
      </D1Bleed>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...V.parameters?.docs?.source}}},H=[`Bleed`]}));U();export{V as Bleed,H as __namedExportsOrder,B as default,R as i,U as n,L as r,z as t};