import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Gt as n,Kt as r,Ut as i,Vt as a,Wt as o,d as s,dn as c,en as l,f as u}from"./iframe-D7czqiJA.js";import{a as d,d as f,f as p,l as m,m as h,n as g,p as _,t as v,u as y}from"./wiki-CUC2UhNU.js";var b,x,S,C=t((()=>{p(),a(),s(),b=class{constructor(e,t,n,r,i,a,o,s){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},x={},S=class extends u{constructor(e,t,n,r=b){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return r(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})),w,T=t((()=>{C(),w={...x}})),E=t((()=>{})),D,O=t((()=>{a(),C(),E(),D=n({name:`D1Grid`,__name:`D1Grid`,setup(e,{expose:t,emit:n}){let r=new S(`d1.grid`,e,{emits:n,classes:i(()=>({main:{"d1-grid":!0}})),styles:i(()=>({}))}),a=r.render();return t(r.expose()),(e,t)=>(l(),o(c(a)))}})})),k,A=t((()=>{O(),O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})),j,M,N,P,F=t((()=>{v(),T(),j=[],M=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],N=[],P={component:`Grid`,props:j,slots:M,events:N,defaults:w,wikiDesign:g}})),I,L=t((()=>{f(),m(),F(),I=new y(P.component,P.props,P.defaults,P.wikiDesign,d,h)})),R=e({Grid:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V,H=t((()=>{A(),L(),z={title:`Ui/Grid`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Grid:k},setup:()=>({args:e}),template:`
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