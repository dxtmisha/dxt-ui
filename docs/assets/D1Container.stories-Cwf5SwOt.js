import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,an as c,jt as l,ut as u}from"./library-BfcLFF_v.js";import{O as d,d as f,i as p,k as m,l as h,m as g,n as _,p as v,t as y,u as b}from"./wiki-BHyzKkJP.js";import{n as x,t as S}from"./AreaInclude-DD0jhxtR-LZdZgkZr.js";var C,w,T;function E(){return(E=e((()=>{S(),n(),d(),C=class{constructor(e,t,n,r,i,a,o,s,c={}){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),v(this,`area`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=x}=c;this.area=new l(e)}},w={area:`container`,align:`center`},T=class extends m{constructor(e,t,n,r=C){super(e,t,n),v(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),a(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})))()}var D,O;function k(){return(k=e((()=>{E(),D={align:[`left`,`center`,`right`]},O={...w,align:`center`}})))()}var A;function j(){return(j=e((()=>{n(),d(),E(),k(),A=i({name:`D1Container`,__name:`D1Container`,props:o({area:{},align:{}},O),setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-container":!0,[`d1-container--align--${a.align}`]:u(D.align,a.align)}})),d=l(()=>({})),f=new T(`d1.container`,a,{emits:i,classes:o,styles:d}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var M;function N(){return(N=e((()=>{j(),M=A,A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})))()}var P,F,I,L;function R(){return(R=e((()=>{y(),k(),P=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`area`,type:`string`}],F=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],I=[],L={component:`Container`,props:P,slots:F,events:I,defaults:O,wikiDesign:_}})))()}var z;function B(){return(B=e((()=>{f(),h(),R(),z=new b(L.component,L.props,L.defaults,L.wikiDesign,p,g)})))()}var V=t({Container:()=>U,__namedExportsOrder:()=>W,default:()=>H}),H,U,W;function G(){return(G=e((()=>{N(),B(),H={title:`Ui/Container`,component:M,parameters:{design:`d1`,docs:{description:{component:z.getDescription()}}},argTypes:z.getWiki(),args:z.getValues()},U={render:e=>({components:{D1Container:M},setup:()=>({args:e}),template:`
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