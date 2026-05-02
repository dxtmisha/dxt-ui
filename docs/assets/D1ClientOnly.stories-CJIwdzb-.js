import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Kt as r,Nt as i,Ot as a,Tt as o,f as s,t as c,wt as l,xt as u}from"./iframe-CXCBnhvn.js";import{a as d,d as f,f as p,m,n as h,o as g,p as _,t as v,u as y}from"./wiki-BqBJrlEv.js";import{n as b,t as x}from"./ClientOnlyInclude-LJEiv40X-BCBRyvNW.js";var S,C,w,T=e((()=>{p(),b(),u(),s(),S=class{constructor(e,t,n,r,i,a,o,s){_(this,`clientOnly`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.clientOnly=new x(e)}},C={clientOnly:!0},w=class extends c{constructor(e,t,n,r=S){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){if(this.item.clientOnly.is())return this.initSlot(`default`)}}})),E,D=e((()=>{T(),E={...C}})),O=e((()=>{})),k,A=e((()=>{u(),T(),D(),O(),k=o({name:`D1ClientOnly`,__name:`D1ClientOnly`,props:a({clientOnly:{type:Boolean}},E),setup(e,{expose:t,emit:a}){let o=new w(`d1.clientOnly`,e,{emits:a,classes:n(()=>({main:{"d1-clientOnly":!0}})),styles:n(()=>({}))}),s=o.render();return t(o.expose()),(e,t)=>(i(),l(r(s)))}})})),j,M=e((()=>{A(),A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1ClientOnly`,exportName:`default`,displayName:`D1ClientOnly`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ClientOnly/D1ClientOnly.vue`]})})),N,P,F,I,L=e((()=>{v(),D(),N=[{name:`clientOnly`,type:`boolean | undefined`}],P=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],F=[],I={component:`ClientOnly`,props:N,slots:P,events:F,defaults:E,wikiDesign:h}})),R,z=e((()=>{f(),g(),L(),R=new y(I.component,I.props,I.defaults,I.wikiDesign,d,m)})),B=t({ClientOnly:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U,W=e((()=>{M(),z(),V={title:`Ui/ClientOnly`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1ClientOnly:j},setup:()=>({args:e}),template:`
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