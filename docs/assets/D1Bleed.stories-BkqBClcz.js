import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,Nt as s,in as c,jt as l}from"./library-CUIf7uCS.js";import{O as u,d,k as f,l as p,m,n as h,p as g,r as _,t as v,u as y}from"./wiki-wIqBVsyI.js";var b,x,S;function C(){return(C=e((()=>{r(),u(),b=class{constructor(e,t,n,r,i,a,o,s){g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`element`,void 0),g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`slots`,void 0),g(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get tag(){return this.props.tag??`div`}},x={tag:`div`},S=class extends f{constructor(e,t,n,r=b){super(e,t,n),g(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return s(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var w;function T(){return(T=e((()=>{C(),w={...x}})))()}var E;function D(){return(D=e((()=>{r(),C(),T(),E=o({name:`D1Bleed`,__name:`D1Bleed`,props:a({tag:{}},w),setup(e,{expose:t,emit:r}){let a=r,o=e,s=n(()=>({main:{"d1-bleed":!0}})),u=n(()=>({})),d=new S(`d1.bleed`,o,{emits:a,classes:s,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(i(),l(c(f)))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1Bleed`,exportName:`default`,displayName:`D1Bleed`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Bleed/D1Bleed.vue`]})})))()}var A,j,M,N;function P(){return(P=e((()=>{v(),T(),A=[{name:`tag`,type:`string`}],j=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],M=[],N={component:`Bleed`,props:A,slots:j,events:M,defaults:w,wikiDesign:h}})))()}var F;function I(){return(I=e((()=>{d(),p(),P(),F=new y(N.component,N.props,N.defaults,N.wikiDesign,_,m)})))()}var L=t({Bleed:()=>z,__namedExportsOrder:()=>B,default:()=>R}),R,z,B;function V(){return(V=e((()=>{k(),I(),R={title:`Ui/Bleed`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1Bleed:O},setup:()=>({args:e}),template:`
      <D1Bleed v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
        <p>The component applies negative horizontal margins based on the margin-x property.</p>
      </D1Bleed>
    `})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Bleed`]})))()}export{I as a,F as i,L as n,V as r,z as t};