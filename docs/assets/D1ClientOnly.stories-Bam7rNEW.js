import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Rt as a,Ut as o,in as s,jt as c}from"./library-C6UyfMBX.js";import{D as l,d as u,f as d,g as f,i as p,n as m,s as h,t as g,u as _}from"./wiki-Cqdd-d3l.js";import{n as v,t as y}from"./ClientOnlyInclude-DcoAobXl-CiO2gR4E.js";var b,x,S;function C(){return(C=e((()=>{y(),n(),l(),b=class{props;refs;element;classDesign;className;components;slots;emits;clientOnly;constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.clientOnly=new v(e)}},x={clientOnly:!0},S=class extends f{item;constructor(e,t,n,r=b){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){if(this.item.clientOnly.isRender())return this.initSlot(`default`)}}})))()}var w;function T(){return(T=e((()=>{C(),w={...x}})))()}var E;function D(){return(D=e((()=>{n(),C(),T(),E=i({name:`D1ClientOnly`,__name:`D1ClientOnly`,props:a({clientOnly:{type:Boolean}},w),setup(e,{expose:t,emit:n}){let i=n,a=e,l=c(()=>({main:{"d1-clientOnly":!0}})),u=c(()=>({})),d=new S(`d1.clientOnly`,a,{emits:i,classes:l,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(s(f)))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1ClientOnly`,exportName:`default`,displayName:`D1ClientOnly`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ClientOnly/D1ClientOnly.vue`]})})))()}var A,j,M,N;function P(){return(P=e((()=>{g(),T(),A=[{name:`clientOnly`,type:`boolean`}],j=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],M=[],N={component:`ClientOnly`,props:A,slots:j,events:M,defaults:w,wikiDesign:m}})))()}var F;function I(){return(I=e((()=>{u(),h(),P(),F=new _(N.component,N.props,N.defaults,N.wikiDesign,p,d)})))()}var L=t({ClientOnly:()=>z,__namedExportsOrder:()=>B,default:()=>R}),R,z,B;function V(){return(V=e((()=>{k(),I(),R={title:`Ui/ClientOnly`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1ClientOnly:O},setup:()=>({args:e}),template:`
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