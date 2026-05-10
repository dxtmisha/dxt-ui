import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{P as n,a as r,d as i,g as a,i as o,s,t as c}from"./vue.esm-bundler-KrdxwWaE.js";import{f as l,t as u}from"./iframe-UEhCQgdF.js";import{t as d}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as f,d as p,f as m,n as h,o as g,p as _,t as v,u as y}from"./wiki-YLJtDFp2.js";import{n as b,t as x}from"./ClientOnlyInclude-C3DFXtPr-CWW_ZJJ8.js";var S,C,w,T=e((()=>{m(),b(),c(),l(),S=class{constructor(e,t,n,r,i,a,o,s){_(this,`clientOnly`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.clientOnly=new x(e)}},C={clientOnly:!0},w=class extends u{constructor(e,t,n,r=S){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){if(this.item.clientOnly.is())return this.initSlot(`default`)}}})),E,D=e((()=>{T(),E={...C}})),O=e((()=>{})),k,A=e((()=>{c(),T(),D(),O(),k=s({name:`D1ClientOnly`,__name:`D1ClientOnly`,props:i({clientOnly:{type:Boolean}},E),setup(e,{expose:t,emit:i}){let s=new w(`d1.clientOnly`,e,{emits:i,classes:o(()=>({main:{"d1-clientOnly":!0}})),styles:o(()=>({}))}),c=s.render();return t(s.expose()),(e,t)=>(a(),r(n(c)))}})})),j,M=e((()=>{A(),A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1ClientOnly`,exportName:`default`,displayName:`D1ClientOnly`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ClientOnly/D1ClientOnly.vue`]})})),N,P,F,I,L=e((()=>{v(),D(),N=[{name:`clientOnly`,type:`boolean | undefined`}],P=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],F=[],I={component:`ClientOnly`,props:N,slots:P,events:F,defaults:E,wikiDesign:h}})),R,z=e((()=>{p(),g(),L(),R=new y(I.component,I.props,I.defaults,I.wikiDesign,f,d)})),B=t({ClientOnly:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U,W=e((()=>{M(),z(),V={title:`Ui/ClientOnly`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1ClientOnly:j},setup:()=>({args:e}),template:`
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