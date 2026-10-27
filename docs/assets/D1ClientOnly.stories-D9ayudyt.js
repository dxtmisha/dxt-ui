import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Pt as s,mn as c}from"./library-ByXZ2YPj.js";import{_ as l,a as u,d,f,k as p,n as m,p as h,s as g,t as _}from"./wiki-CfN0XtvQ.js";import{n as v,t as y}from"./ClientOnlyInclude-DcoAobXl-KcmxGGTH.js";var b,x,S;function C(){return(C=e((()=>{y(),n(),p(),b=class{props;element;naming;components;slots;emits;clientOnly;constructor(e,t,n,r,i,a){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a,this.clientOnly=new v(e)}},x={clientOnly:!0},S=class extends l{item;constructor(e,t,n,r=b){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){if(this.item.clientOnly.isRender())return this.initSlot(`default`)}}})))()}var w;function T(){return(T=e((()=>{C(),w={...x}})))()}var E;function D(){return(D=e((()=>{n(),C(),T(),E=a({name:`D1ClientOnly`,__name:`D1ClientOnly`,props:i({clientOnly:{type:Boolean}},w),setup(e,{expose:t,emit:n}){let i=n,a=e,l=s(()=>({main:{"d1-clientOnly":!0}})),u=s(()=>({})),d=new S(`d1.clientOnly`,a,{emits:i,classes:l,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(c(f)))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1ClientOnly`,exportName:`default`,displayName:`D1ClientOnly`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ClientOnly/D1ClientOnly.vue`]})})))()}var A,j,M,N;function P(){return(P=e((()=>{_(),T(),A=[{name:`clientOnly`,type:`boolean`}],j=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],M=[],N={component:`ClientOnly`,props:A,slots:j,events:M,defaults:w,wikiDesign:m}})))()}var F;function I(){return(I=e((()=>{f(),g(),P(),F=new d(N.component,N.props,N.defaults,N.wikiDesign,u,h)})))()}var L=t({ClientOnly:()=>z,__namedExportsOrder:()=>B,default:()=>R}),R,z,B;function V(){return(V=e((()=>{k(),I(),R={title:`Ui/ClientOnly`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1ClientOnly:O},setup:()=>({args:e}),template:`
      <D1ClientOnly>
      <h4>Client-Side Content</h4>
      <p>This block is only visible when the component is mounted in the browser.</p>
      <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
    </D1ClientOnly>
    `})},B=[`ClientOnly`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}}})))()}export{I as a,F as i,L as n,V as r,z as t};