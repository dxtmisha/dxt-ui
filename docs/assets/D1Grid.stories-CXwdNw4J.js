import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ot as r,bt as i,d as a,gt as o,u as s,vt as c,xt as l,yt as u}from"./iframe-InwAcaLb.js";import{a as d,d as f,l as p,m,n as h,t as g,u as _}from"./wiki-DiKtF90Q.js";var v,y,b,x,S,C,w=e((()=>{s(),o(),v=Object.defineProperty,y=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t,n)=>y(e,typeof t==`symbol`?t:t+``,n),x=class{constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},S={},C=class extends a{constructor(e,t,n,r=x){super(e,t,n),b(this,`item`),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return l(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})),T,E=e((()=>{w(),T={...S}})),D=e((()=>{})),O,k=e((()=>{o(),s(),w(),D(),O=i({name:`D1Grid`,__name:`D1Grid`,setup(e,{expose:t,emit:i}){let a=new C(`d1.grid`,e,{emits:i,classes:c(()=>({main:{"d1-grid":!0}})),styles:c(()=>({}))}),o=a.render();return t(a.expose()),(e,t)=>(r(),u(n(o)))}})})),A,j=e((()=>{k(),k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})),M,N,P=e((()=>{_(),g(),E(),M=[],N={component:`Grid`,props:M,defaults:T,wikiDesign:h}})),F,I=e((()=>{_(),d(),P(),F=new f(N.component,N.props,N.defaults,N.wikiDesign,p,m)})),L=t({Grid:()=>z,__namedExportsOrder:()=>B,default:()=>R}),R,z,B,V=e((()=>{j(),I(),R={title:`Ui/Grid`,component:A,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1Grid:A},setup:()=>({args:e}),template:`
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
    `})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Grid`]}));V();export{z as Grid,B as __namedExportsOrder,R as default,I as i,V as n,F as r,L as t};