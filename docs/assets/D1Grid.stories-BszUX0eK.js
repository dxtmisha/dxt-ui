import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,dt as u,kt as d,sn as f}from"./library-CO1fW2cN.js";import{E as p,O as m,d as h,f as g,i as _,l as v,n as y,t as b,u as x}from"./wiki-BMj2WokS.js";var S,C,w;function T(){return(T=e((()=>{d(),p(),c(),S=class{constructor(e,t,n,i,a,o,s,c){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c}},C={},w=class extends m{constructor(e,t,n,i=S){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return o(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var E,D;function O(){return(O=e((()=>{T(),E={align:[`center`,`top`,`bottom`,`stretch`,`baseline`,`start`,`end`]},D={...C}})))()}var k;function A(){return(A=e((()=>{d(),p(),T(),O(),k=i({name:`D1Grid`,__name:`D1Grid`,props:n({align:{}},D),setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-grid":!0,[`d1-grid--align--${i.align}`]:u(E.align,i.align)}})),c=s(()=>({})),d=new w(`d1.grid`,i,{emits:r,classes:o,styles:c}),p=d.render();return t(d.expose()),(e,t)=>(a(),l(f(p)))}})})))()}var j;function M(){return(M=e((()=>{A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})))()}var N,P,F,I;function L(){return(L=e((()=>{b(),O(),N=[{name:`align`,type:`string`,option:[`center`,`top`,`bottom`,`stretch`,`baseline`,`start`,`end`]}],P=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],F=[],I={component:`Grid`,props:N,slots:P,events:F,defaults:D,wikiDesign:y}})))()}var R;function z(){return(z=e((()=>{h(),v(),L(),R=new x(I.component,I.props,I.defaults,I.wikiDesign,_,g)})))()}var B=t({Grid:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U;function W(){return(W=e((()=>{M(),z(),V={title:`Ui/Grid`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1Grid:j},setup:()=>({args:e}),template:`
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
    `})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Grid`]})))()}export{z as a,R as i,H as n,W as r,B as t};