import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,L as a,Lt as o,Mt as s,Nt as c,in as l,jt as u}from"./library-CUIf7uCS.js";import{O as d,d as f,k as p,l as m,m as h,n as g,p as _,r as v,t as y,u as b}from"./wiki-wIqBVsyI.js";import{n as x,t as S}from"./AreaInclude-DWHnqzoF-DvLP52u2.js";var C,w,T;function E(){return(E=e((()=>{S(),r(),d(),C=class{constructor(e,t,n,r,i,a,o,s,c={}){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),_(this,`area`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=x}=c;this.area=new l(e)}},w={area:`container`,align:`center`},T=class extends p{constructor(e,t,n,r=C){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),c(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})))()}var D,O;function k(){return(k=e((()=>{E(),D={align:[`left`,`center`,`right`]},O={...w,align:`center`}})))()}var A;function j(){return(j=e((()=>{r(),d(),E(),k(),A=s({name:`D1Container`,__name:`D1Container`,props:o({area:{},align:{}},O),setup(e,{expose:t,emit:r}){let o=r,s=e,c=n(()=>({main:{"d1-container":!0,[`d1-container--align--${s.align}`]:a(D.align,s.align)}})),d=n(()=>({})),f=new T(`d1.container`,s,{emits:o,classes:c,styles:d}),p=f.render();return t(f.expose()),(e,t)=>(i(),u(l(p)))}})})))()}var M;function N(){return(N=e((()=>{j(),M=A,A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})))()}var P,F,I,L;function R(){return(R=e((()=>{y(),k(),P=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`area`,type:`string`}],F=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],I=[],L={component:`Container`,props:P,slots:F,events:I,defaults:O,wikiDesign:g}})))()}var z;function B(){return(B=e((()=>{f(),m(),R(),z=new b(L.component,L.props,L.defaults,L.wikiDesign,v,h)})))()}var V=t({Container:()=>U,__namedExportsOrder:()=>W,default:()=>H}),H,U,W;function G(){return(G=e((()=>{N(),B(),H={title:`Ui/Container`,component:M,parameters:{design:`d1`,docs:{description:{component:z.getDescription()}}},argTypes:z.getWiki(),args:z.getValues()},U={render:e=>({components:{D1Container:M},setup:()=>({args:e}),template:`
      <D1Container v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </D1Container>
    `})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Container
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Container v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </D1Container>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...U.parameters?.docs?.source}}},W=[`Container`]})))()}export{B as a,z as i,V as n,G as r,U as t};