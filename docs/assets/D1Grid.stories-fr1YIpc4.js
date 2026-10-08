import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l,nt as u}from"./library-C6UyfMBX.js";import{D as d,d as f,f as p,g as m,i as h,n as g,s as _,t as v,u as y}from"./wiki-Cqdd-d3l.js";var b,x,S;function C(){return(C=e((()=>{n(),d(),b=class{props;refs;element;classDesign;className;components;slots;emits;constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}},x={},S=class extends m{item;constructor(e,t,n,r=b){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return a(`div`,{...this.getAttrs(),class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var w,T;function E(){return(E=e((()=>{C(),w={align:[`center`,`top`,`bottom`,`stretch`,`baseline`,`start`,`end`]},T={...x}})))()}var D;function O(){return(O=e((()=>{n(),d(),C(),E(),D=i({name:`D1Grid`,__name:`D1Grid`,props:o({align:{}},T),setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-grid":!0,[`d1-grid--align--${a.align}`]:u(w.align,a.align)}})),d=l(()=>({})),f=new S(`d1.grid`,a,{emits:i,classes:o,styles:d}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Grid`,exportName:`default`,displayName:`D1Grid`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Grid/D1Grid.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{v(),E(),j=[{name:`align`,type:`string`,option:[`center`,`top`,`bottom`,`stretch`,`baseline`,`start`,`end`]}],M=[{name:`default`,description:`Slot for default grid content/ Слот для основного содержимого сетки`,properties:[{name:`props`,type:`(any) | undefined`}]}],N=[],P={component:`Grid`,props:j,slots:M,events:N,defaults:T,wikiDesign:g}})))()}var I;function L(){return(L=e((()=>{f(),_(),F(),I=new y(P.component,P.props,P.defaults,P.wikiDesign,h,p)})))()}var R=t({Grid:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V;function H(){return(H=e((()=>{A(),L(),z={title:`Ui/Grid`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Grid:k},setup:()=>({args:e}),template:`
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