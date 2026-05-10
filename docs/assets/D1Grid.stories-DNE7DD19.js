import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{P as n,a as r,c as i,g as a,i as o,s,t as c}from"./vue.esm-bundler-KrdxwWaE.js";import{f as l,t as u}from"./iframe-UEhCQgdF.js";import{t as d}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as f,d as p,f as m,n as h,o as g,p as _,t as v,u as y}from"./wiki-YLJtDFp2.js";var b,x,S,C=e((()=>{m(),c(),l(),b=class{constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},x={},S=class extends u{constructor(e,t,n,r=b){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return i(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})),w,T=e((()=>{C(),w={...x}})),E=e((()=>{})),D,O=e((()=>{c(),C(),E(),D=s({name:`D1Grid`,__name:`D1Grid`,setup(e,{expose:t,emit:i}){let s=new S(`d1.grid`,e,{emits:i,classes:o(()=>({main:{"d1-grid":!0}})),styles:o(()=>({}))}),c=s.render();return t(s.expose()),(e,t)=>(a(),r(n(c)))}})})),k,A=e((()=>{O(),O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})),j,M,N,P,F=e((()=>{v(),T(),j=[],M=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],N=[],P={component:`Grid`,props:j,slots:M,events:N,defaults:w,wikiDesign:h}})),I,L=e((()=>{p(),g(),F(),I=new y(P.component,P.props,P.defaults,P.wikiDesign,f,d)})),R=t({Grid:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V,H=e((()=>{A(),L(),z={title:`Ui/Grid`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Grid:k},setup:()=>({args:e}),template:`
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