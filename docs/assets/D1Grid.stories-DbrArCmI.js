import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Et as r,Kt as i,Nt as a,Tt as o,f as s,t as c,wt as l,xt as u}from"./iframe-CXCBnhvn.js";import{a as d,d as f,f as p,m,n as h,o as g,p as _,t as v,u as y}from"./wiki-BqBJrlEv.js";var b,x,S,C=e((()=>{p(),u(),s(),b=class{constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},x={},S=class extends c{constructor(e,t,n,r=b){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return r(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})),w,T=e((()=>{C(),w={...x}})),E=e((()=>{})),D,O=e((()=>{u(),C(),E(),D=o({name:`D1Grid`,__name:`D1Grid`,setup(e,{expose:t,emit:r}){let o=new S(`d1.grid`,e,{emits:r,classes:n(()=>({main:{"d1-grid":!0}})),styles:n(()=>({}))}),s=o.render();return t(o.expose()),(e,t)=>(a(),l(i(s)))}})})),k,A=e((()=>{O(),O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})),j,M,N,P,F=e((()=>{v(),T(),j=[],M=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],N=[],P={component:`Grid`,props:j,slots:M,events:N,defaults:w,wikiDesign:h}})),I,L=e((()=>{f(),g(),F(),I=new y(P.component,P.props,P.defaults,P.wikiDesign,d,m)})),R=t({Grid:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V,H=e((()=>{A(),L(),z={title:`Ui/Grid`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Grid:k},setup:()=>({args:e}),template:`
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