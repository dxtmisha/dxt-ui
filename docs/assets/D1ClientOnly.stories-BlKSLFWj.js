import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Gt as n,Ut as r,Vt as i,Wt as a,Yt as o,d as s,dn as c,en as l,f as u}from"./iframe-D7czqiJA.js";import{a as d,d as f,f as p,l as m,m as h,n as g,p as _,t as v,u as y}from"./wiki-CUC2UhNU.js";import{n as b,t as x}from"./ClientOnlyInclude-DBdpXFDD-C1N5Z7o6.js";var S,C,w,T=t((()=>{p(),x(),i(),s(),S=class{constructor(e,t,n,r,i,a,o,s){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),_(this,`clientOnly`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.clientOnly=new b(e)}},C={clientOnly:!0},w=class extends u{constructor(e,t,n,r=S){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){if(this.item.clientOnly.isRender())return this.initSlot(`default`)}}})),E,D=t((()=>{T(),E={...C}})),O=t((()=>{})),k,A=t((()=>{i(),T(),D(),O(),k=n({name:`D1ClientOnly`,__name:`D1ClientOnly`,props:o({clientOnly:{type:Boolean}},E),setup(e,{expose:t,emit:n}){let i=new w(`d1.clientOnly`,e,{emits:n,classes:r(()=>({main:{"d1-clientOnly":!0}})),styles:r(()=>({}))}),o=i.render();return t(i.expose()),(e,t)=>(l(),a(c(o)))}})})),j,M=t((()=>{A(),A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1ClientOnly`,exportName:`default`,displayName:`D1ClientOnly`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ClientOnly/D1ClientOnly.vue`]})})),N,P,F,I,L=t((()=>{v(),D(),N=[{name:`clientOnly`,type:`boolean`}],P=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],F=[],I={component:`ClientOnly`,props:N,slots:P,events:F,defaults:E,wikiDesign:g}})),R,z=t((()=>{f(),m(),L(),R=new y(I.component,I.props,I.defaults,I.wikiDesign,d,h)})),B=e({ClientOnly:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U,W=t((()=>{M(),z(),V={title:`Ui/ClientOnly`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1ClientOnly:j},setup:()=>({args:e}),template:`
      <D1ClientOnly>
      <h4>Client-Side Content</h4>
      <p>This block is only visible when the component is mounted in the browser.</p>
      <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
    </D1ClientOnly>
    `})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`ClientOnly`]}));W();export{H as ClientOnly,U as __namedExportsOrder,V as default,z as i,W as n,R as r,B as t};