import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,D as r,Ft as i,Ht as a,It as o,Jt as s,Pt as c,Rt as l,mn as u}from"./library-ByXZ2YPj.js";import{_ as d,a as f,d as p,f as m,k as h,n as g,p as _,s as v,t as y}from"./wiki-CfN0XtvQ.js";import{n as b,t as x}from"./AreaInclude-CqvFyoY2-ClO9HWdH.js";var S,C,w;function T(){return(T=e((()=>{b(),n(),h(),S=class{props;element;naming;components;slots;emits;area;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{AreaIncludeConstructor:s=x}=o;this.area=new s(e)}},C={area:`container`,align:`center`},w=class extends d{item;constructor(e,t,n,r=S){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),l(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})))()}var E,D;function O(){return(O=e((()=>{T(),E={align:[`left`,`center`,`right`]},D={...C,align:`center`}})))()}var k;function A(){return(A=e((()=>{n(),h(),T(),O(),k=o({name:`D1Container`,__name:`D1Container`,props:a({area:{},align:{}},D),setup(e,{expose:t,emit:n}){let a=n,o=e,l=c(()=>({main:{"d1-container":!0,[`d1-container--align--${o.align}`]:r(E.align,o.align)}})),d=c(()=>({})),f=new w(`d1.container`,o,{emits:a,classes:l,styles:d}),p=f.render();return t(f.expose()),(e,t)=>(s(),i(u(p)))}})})))()}var j;function M(){return(M=e((()=>{A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})))()}var N,P,F,I;function L(){return(L=e((()=>{y(),O(),N=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`area`,type:`string`}],P=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],F=[],I={component:`Container`,props:N,slots:P,events:F,defaults:D,wikiDesign:g}})))()}var R;function z(){return(z=e((()=>{m(),v(),L(),R=new p(I.component,I.props,I.defaults,I.wikiDesign,f,_)})))()}var B=t({Container:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U;function W(){return(W=e((()=>{M(),z(),V={title:`Ui/Container`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1Container:j},setup:()=>({args:e}),template:`
      <D1Container v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </D1Container>
    `})},U=[`Container`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Container
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Container v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </D1Container>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...H.parameters?.docs?.source}}}})))()}export{z as a,R as i,B as n,W as r,H as t};