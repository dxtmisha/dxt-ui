import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Jt as i,Lt as a,Rt as o,an as s,d as c,u as l,zt as u}from"./iframe-B-LNhFWZ.js";import{d,f,m as p,n as m,o as h,p as g,s as _,t as v,u as y}from"./wiki-DgltPJFG.js";var b,x,S,C=t((()=>{f(),r(),l(),b=class{constructor(e,t,n,r,i,a,o,s){g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`element`,void 0),g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`slots`,void 0),g(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},x={},S=class extends c{constructor(e,t,n,r=b){super(e,t,n),g(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return n(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})),w,T=t((()=>{C(),w={...x}})),E=t((()=>{})),D,O=t((()=>{r(),C(),E(),D=u({name:`D1Grid`,__name:`D1Grid`,setup(e,{expose:t,emit:n}){let r=new S(`d1.grid`,e,{emits:n,classes:a(()=>({main:{"d1-grid":!0}})),styles:a(()=>({}))}),c=r.render();return t(r.expose()),(e,t)=>(i(),o(s(c)))}})})),k,A=t((()=>{O(),O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})),j,M,N,P,F=t((()=>{v(),T(),j=[],M=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],N=[],P={component:`Grid`,props:j,slots:M,events:N,defaults:w,wikiDesign:m}})),I,L=t((()=>{d(),_(),F(),I=new y(P.component,P.props,P.defaults,P.wikiDesign,h,p)})),R=e({Grid:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V,H=t((()=>{A(),L(),z={title:`Ui/Grid`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Grid:k},setup:()=>({args:e}),template:`
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
    `})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Grid`]}));H();export{B as Grid,V as __namedExportsOrder,z as default,L as i,H as n,I as r,R as t};