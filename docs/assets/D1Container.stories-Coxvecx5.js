import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l,nt as u}from"./library-C6UyfMBX.js";import{D as d,d as f,f as p,g as m,i as h,n as g,s as _,t as v,u as y}from"./wiki-Cqdd-d3l.js";import{n as b,t as x}from"./AreaInclude-BWxoOp5M-dakKMbbq.js";var S,C,w;function T(){return(T=e((()=>{b(),n(),d(),S=class{props;refs;element;classDesign;className;components;slots;emits;area;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=x}=c;this.area=new l(e)}},C={area:`container`,align:`center`},w=class extends m{item;constructor(e,t,n,r=S){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),a(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})))()}var E,D;function O(){return(O=e((()=>{T(),E={align:[`left`,`center`,`right`]},D={...C,align:`center`}})))()}var k;function A(){return(A=e((()=>{n(),d(),T(),O(),k=i({name:`D1Container`,__name:`D1Container`,props:o({area:{},align:{}},D),setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-container":!0,[`d1-container--align--${a.align}`]:u(E.align,a.align)}})),d=l(()=>({})),f=new w(`d1.container`,a,{emits:i,classes:o,styles:d}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var j;function M(){return(M=e((()=>{A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})))()}var N,P,F,I;function L(){return(L=e((()=>{v(),O(),N=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`area`,type:`string`}],P=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],F=[],I={component:`Container`,props:N,slots:P,events:F,defaults:D,wikiDesign:g}})))()}var R;function z(){return(z=e((()=>{f(),_(),L(),R=new y(I.component,I.props,I.defaults,I.wikiDesign,h,p)})))()}var B=t({Container:()=>H,__namedExportsOrder:()=>U,default:()=>V}),V,H,U;function W(){return(W=e((()=>{M(),z(),V={title:`Ui/Container`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={render:e=>({components:{D1Container:j},setup:()=>({args:e}),template:`
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