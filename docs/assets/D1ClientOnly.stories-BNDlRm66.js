import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,in as s,jt as c}from"./library-CUIf7uCS.js";import{O as l,d as u,k as d,l as f,m as p,n as m,p as h,r as g,t as _,u as v}from"./wiki-wIqBVsyI.js";import{n as y,t as b}from"./ClientOnlyInclude-CgQ3VLdu-BXbzARd5.js";var x,S,C;function w(){return(w=e((()=>{b(),r(),l(),x=class{constructor(e,t,n,r,i,a,o,s){h(this,`props`,void 0),h(this,`refs`,void 0),h(this,`element`,void 0),h(this,`classDesign`,void 0),h(this,`className`,void 0),h(this,`components`,void 0),h(this,`slots`,void 0),h(this,`emits`,void 0),h(this,`clientOnly`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.clientOnly=new y(e)}},S={clientOnly:!0},C=class extends d{constructor(e,t,n,r=x){super(e,t,n),h(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){if(this.item.clientOnly.isRender())return this.initSlot(`default`)}}})))()}var T;function E(){return(E=e((()=>{w(),T={...S}})))()}var D;function O(){return(O=e((()=>{r(),w(),E(),D=o({name:`D1ClientOnly`,__name:`D1ClientOnly`,props:a({clientOnly:{type:Boolean}},T),setup(e,{expose:t,emit:r}){let a=r,o=e,l=n(()=>({main:{"d1-clientOnly":!0}})),u=n(()=>({})),d=new C(`d1.clientOnly`,o,{emits:a,classes:l,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(i(),c(s(f)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1ClientOnly`,exportName:`default`,displayName:`D1ClientOnly`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/ClientOnly/D1ClientOnly.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{_(),E(),j=[{name:`clientOnly`,type:`boolean`}],M=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],N=[],P={component:`ClientOnly`,props:j,slots:M,events:N,defaults:T,wikiDesign:m}})))()}var I;function L(){return(L=e((()=>{u(),f(),F(),I=new v(P.component,P.props,P.defaults,P.wikiDesign,g,p)})))()}var R=t({ClientOnly:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V;function H(){return(H=e((()=>{A(),L(),z={title:`Ui/ClientOnly`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1ClientOnly:k},setup:()=>({args:e}),template:`
      <D1ClientOnly>
      <h4>Client-Side Content</h4>
      <p>This block is only visible when the component is mounted in the browser.</p>
      <p>Use it for components that depend on window, document, or other browser-specific APIs.</p>
    </D1ClientOnly>
    `})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`ClientOnly`]})))()}export{L as a,I as i,R as n,H as r,B as t};