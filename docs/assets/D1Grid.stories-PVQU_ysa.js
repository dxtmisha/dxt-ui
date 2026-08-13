import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Mt as a,Nt as o,in as s,jt as c}from"./library-CUIf7uCS.js";import{O as l,d as u,k as d,l as f,m as p,n as m,p as h,r as g,t as _,u as v}from"./wiki-wIqBVsyI.js";var y,b,x;function S(){return(S=e((()=>{r(),l(),y=class{constructor(e,t,n,r,i,a,o,s){h(this,`props`,void 0),h(this,`refs`,void 0),h(this,`element`,void 0),h(this,`classDesign`,void 0),h(this,`className`,void 0),h(this,`components`,void 0),h(this,`slots`,void 0),h(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},b={},x=class extends d{constructor(e,t,n,r=y){super(e,t,n),h(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return o(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var C;function w(){return(w=e((()=>{S(),C={...b}})))()}var T;function E(){return(E=e((()=>{r(),S(),T=a({name:`D1Grid`,__name:`D1Grid`,setup(e,{expose:t,emit:r}){let a=r,o=e,l=n(()=>({main:{"d1-grid":!0}})),u=n(()=>({})),d=new x(`d1.grid`,o,{emits:a,classes:l,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(i(),c(s(f)))}})})))()}var D;function O(){return(O=e((()=>{E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})))()}var k,A,j,M;function N(){return(N=e((()=>{_(),w(),k=[],A=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],j=[],M={component:`Grid`,props:k,slots:A,events:j,defaults:C,wikiDesign:m}})))()}var P;function F(){return(F=e((()=>{u(),f(),N(),P=new v(M.component,M.props,M.defaults,M.wikiDesign,g,p)})))()}var I=t({Grid:()=>R,__namedExportsOrder:()=>z,default:()=>L}),L,R,z;function B(){return(B=e((()=>{O(),F(),L={title:`Ui/Grid`,component:D,parameters:{design:`d1`,docs:{description:{component:P.getDescription()}}},argTypes:P.getWiki(),args:P.getValues()},R={render:e=>({components:{D1Grid:D},setup:()=>({args:e}),template:`
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
    `})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z=[`Grid`]})))()}export{F as a,P as i,R as n,B as r,I as t};