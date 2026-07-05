import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Jt as i,Lt as a,Rt as o,Ut as s,an as c,d as l,u,zt as d}from"./iframe-B-LNhFWZ.js";import{d as f,f as p,m,n as h,o as g,p as _,s as v,t as y,u as b}from"./wiki-DgltPJFG.js";var x,S,C,w=t((()=>{p(),r(),u(),x=class{constructor(e,t,n,r,i,a,o,s){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get tag(){return this.props.tag??`div`}},S={tag:`div`},C=class extends l{constructor(e,t,n,r=x){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return n(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})),T,E=t((()=>{w(),T={...S}})),D=t((()=>{})),O,k=t((()=>{r(),w(),E(),D(),O=d({name:`D1Bleed`,__name:`D1Bleed`,props:s({tag:{}},T),setup(e,{expose:t,emit:n}){let r=new C(`d1.bleed`,e,{emits:n,classes:a(()=>({main:{"d1-bleed":!0}})),styles:a(()=>({}))}),s=r.render();return t(r.expose()),(e,t)=>(i(),o(c(s)))}})})),A,j=t((()=>{k(),k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1Bleed`,exportName:`default`,displayName:`D1Bleed`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Bleed/D1Bleed.vue`]})})),M,N,P,F,I=t((()=>{y(),E(),M=[{name:`tag`,type:`string`}],N=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],P=[],F={component:`Bleed`,props:M,slots:N,events:P,defaults:T,wikiDesign:h}})),L,R=t((()=>{f(),v(),I(),L=new b(F.component,F.props,F.defaults,F.wikiDesign,g,m)})),z=e({Bleed:()=>V,__namedExportsOrder:()=>H,default:()=>B}),B,V,H,U=t((()=>{j(),R(),B={title:`Ui/Bleed`,component:A,parameters:{design:`d1`,docs:{description:{component:L.getDescription()}}},argTypes:L.getWiki(),args:L.getValues()},V={render:e=>({components:{D1Bleed:A},setup:()=>({args:e}),template:`
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