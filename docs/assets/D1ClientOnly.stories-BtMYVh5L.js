import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,Nt as o,Ot as s,Pt as c,kt as l,sn as u}from"./library-CO1fW2cN.js";import{E as d,O as f,d as p,f as m,i as h,l as g,n as _,t as v,u as y}from"./wiki-BMj2WokS.js";import{n as b,t as x}from"./ClientOnlyInclude-BwAPTb5a-C6QZG0IF.js";var S,C,w;function T(){return(T=e((()=>{x(),l(),d(),s(),S=class{constructor(e,t,n,i,a,o,s,c){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`clientOnly`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c,this.clientOnly=new b(e)}},C={clientOnly:!0},w=class extends f{constructor(e,t,n,i=S){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){if(this.item.clientOnly.isRender())return this.initSlot(`default`)}}})))()}var E;function D(){return(D=e((()=>{T(),E={...C}})))()}var O;function k(){return(k=e((()=>{l(),T(),D(),O=i({name:`D1ClientOnly`,__name:`D1ClientOnly`,props:n({clientOnly:{type:Boolean}},E),setup(e,{expose:t,emit:n}){let r=n,i=e,s=o(()=>({main:{"d1-clientOnly":!0}})),l=o(()=>({})),d=new w(`d1.clientOnly`,i,{emits:r,classes:s,styles:l}),f=d.render();return t(d.expose()),(e,t)=>(a(),c(u(f)))}})})))()}var A;function j(){return(j=e((()=>{k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1ClientOnly`,exportName:`default`,displayName:`D1ClientOnly`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ClientOnly/D1ClientOnly.vue`]})})))()}var M,N,P,F;function I(){return(I=e((()=>{v(),D(),M=[{name:`clientOnly`,type:`boolean`}],N=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],P=[],F={component:`ClientOnly`,props:M,slots:N,events:P,defaults:E,wikiDesign:_}})))()}var L;function R(){return(R=e((()=>{p(),g(),I(),L=new y(F.component,F.props,F.defaults,F.wikiDesign,h,m)})))()}var z=t({ClientOnly:()=>V,__namedExportsOrder:()=>H,default:()=>B}),B,V,H;function U(){return(U=e((()=>{j(),R(),B={title:`Ui/ClientOnly`,component:A,parameters:{design:`d1`,docs:{description:{component:L.getDescription()}}},argTypes:L.getWiki(),args:L.getValues()},V={render:e=>({components:{D1ClientOnly:A},setup:()=>({args:e}),template:`
      <D1ClientOnly>
      <h4>Client-Side Content</h4>
      <p>This block is only visible when the component is mounted in the browser.</p>
      <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
    </D1ClientOnly>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1ClientOnly
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1ClientOnly>
      <h4>Client-Side Content</h4>
      <p>This block is only visible when the component is mounted in the browser.</p>
      <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
    </D1ClientOnly>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...V.parameters?.docs?.source}}},H=[`ClientOnly`]})))()}export{R as a,L as i,z as n,U as r,V as t};