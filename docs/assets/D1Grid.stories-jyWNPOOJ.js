import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,D as r,Ft as i,Ht as a,It as o,Jt as s,Pt as c,Rt as l,mn as u}from"./library-ByXZ2YPj.js";import{_ as d,a as f,d as p,f as m,k as h,n as g,p as _,s as v,t as y}from"./wiki-CfN0XtvQ.js";var b,x,S;function C(){return(C=e((()=>{n(),h(),b=class{props;element;naming;components;slots;emits;constructor(e,t,n,r,i,a){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a}},x={},S=class extends d{item;constructor(e,t,n,r=b){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return l(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var w,T;function E(){return(E=e((()=>{C(),w={align:[`center`,`top`,`bottom`,`stretch`,`baseline`,`start`,`end`]},T={...x}})))()}var D;function O(){return(O=e((()=>{n(),h(),C(),E(),D=o({name:`D1Grid`,__name:`D1Grid`,props:a({align:{}},T),setup(e,{expose:t,emit:n}){let a=n,o=e,l=c(()=>({main:{"d1-grid":!0,[`d1-grid--align--${o.align}`]:r(w.align,o.align)}})),d=c(()=>({})),f=new S(`d1.grid`,o,{emits:a,classes:l,styles:d}),p=f.render();return t(f.expose()),(e,t)=>(s(),i(u(p)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{y(),E(),j=[{name:`align`,type:`string`,option:[`center`,`top`,`bottom`,`stretch`,`baseline`,`start`,`end`]}],M=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],N=[],P={component:`Grid`,props:j,slots:M,events:N,defaults:T,wikiDesign:g}})))()}var I;function L(){return(L=e((()=>{m(),v(),F(),I=new p(P.component,P.props,P.defaults,P.wikiDesign,f,_)})))()}var R=t({Grid:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V;function H(){return(H=e((()=>{A(),L(),z={title:`Ui/Grid`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Grid:k},setup:()=>({args:e}),template:`
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
    `})},V=[`Grid`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}}})))()}export{L as a,I as i,B as n,H as r,R as t};