import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,an as c,jt as l,ut as u}from"./library-BfcLFF_v.js";import{O as d,d as f,i as p,k as m,l as h,m as g,n as _,p as v,t as y,u as b}from"./wiki-BHyzKkJP.js";var x,S,C;function w(){return(w=e((()=>{n(),d(),x=class{constructor(e,t,n,r,i,a,o,s){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},S={},C=class extends m{constructor(e,t,n,r=x){super(e,t,n),v(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return a(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var T,E;function D(){return(D=e((()=>{w(),T={align:[`center`,`top`,`bottom`,`stretch`,`baseline`,`start`,`end`]},E={...S}})))()}var O;function k(){return(k=e((()=>{n(),d(),w(),D(),O=i({name:`D1Grid`,__name:`D1Grid`,props:o({align:{}},E),setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-grid":!0,[`d1-grid--align--${a.align}`]:u(T.align,a.align)}})),d=l(()=>({})),f=new C(`d1.grid`,a,{emits:i,classes:o,styles:d}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var A;function j(){return(j=e((()=>{k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})))()}var M,N,P,F;function I(){return(I=e((()=>{y(),D(),M=[{name:`align`,type:`string`,option:[`center`,`top`,`bottom`,`stretch`,`baseline`,`start`,`end`]}],N=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],P=[],F={component:`Grid`,props:M,slots:N,events:P,defaults:E,wikiDesign:_}})))()}var L;function R(){return(R=e((()=>{f(),h(),I(),L=new b(F.component,F.props,F.defaults,F.wikiDesign,p,g)})))()}var z=t({Grid:()=>V,__namedExportsOrder:()=>H,default:()=>B}),B,V,H;function U(){return(U=e((()=>{j(),R(),B={title:`Ui/Grid`,component:A,parameters:{design:`d1`,docs:{description:{component:L.getDescription()}}},argTypes:L.getWiki(),args:L.getValues()},V={render:e=>({components:{D1Grid:A},setup:()=>({args:e}),template:`
      <D1Grid>
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
          style="grid-column: span 2;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
          style="grid-column: span 4;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
          style="grid-column: span 6;"
        />
    </D1Grid>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Grid
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Grid>
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
          style="grid-column: span 2;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
          style="grid-column: span 4;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
          style="grid-column: span 6;"
        />
    </D1Grid>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...V.parameters?.docs?.source}}},H=[`Grid`]})))()}export{R as a,L as i,V as n,U as r,z as t};