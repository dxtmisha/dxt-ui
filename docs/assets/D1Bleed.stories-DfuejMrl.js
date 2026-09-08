import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,an as c,jt as l}from"./library-BfcLFF_v.js";import{O as u,d,i as f,k as p,l as m,m as h,n as g,p as _,t as v,u as y}from"./wiki-BHyzKkJP.js";var b,x,S;function C(){return(C=e((()=>{n(),u(),b=class{constructor(e,t,n,r,i,a,o,s){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get tag(){return this.props.tag??`div`}},x={tag:`div`},S=class extends p{constructor(e,t,n,r=b){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return a(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var w;function T(){return(T=e((()=>{C(),w={...x}})))()}var E;function D(){return(D=e((()=>{n(),C(),T(),E=i({name:`D1Bleed`,__name:`D1Bleed`,props:o({tag:{}},w),setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-bleed":!0}})),u=l(()=>({})),d=new S(`d1.bleed`,a,{emits:i,classes:o,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var O;function k(){return(k=e((()=>{D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1Bleed`,exportName:`default`,displayName:`D1Bleed`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Bleed/D1Bleed.vue`]})})))()}var A,j,M,N;function P(){return(P=e((()=>{v(),T(),A=[{name:`tag`,type:`string`}],j=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],M=[],N={component:`Bleed`,props:A,slots:j,events:M,defaults:w,wikiDesign:g}})))()}var F;function I(){return(I=e((()=>{d(),m(),P(),F=new y(N.component,N.props,N.defaults,N.wikiDesign,f,h)})))()}var L=t({Bleed:()=>z,__namedExportsOrder:()=>B,default:()=>R}),R,z,B;function V(){return(V=e((()=>{k(),I(),R={title:`Ui/Bleed`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1Bleed:O},setup:()=>({args:e}),template:`
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