import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Pt as s,Rt as c,mn as l}from"./library-ByXZ2YPj.js";import{_ as u,a as d,d as f,f as p,k as m,n as h,p as g,s as _,t as v}from"./wiki-CfN0XtvQ.js";var y,b,x;function S(){return(S=e((()=>{n(),m(),y=class{props;element;naming;components;slots;emits;constructor(e,t,n,r,i,a){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a}get tag(){return this.props.tag??`div`}},b={tag:`div`},x=class extends u{item;constructor(e,t,n,r=y){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return c(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var C;function w(){return(w=e((()=>{S(),C={...b}})))()}var T;function E(){return(E=e((()=>{n(),S(),w(),T=a({name:`D1Bleed`,__name:`D1Bleed`,props:i({tag:{}},C),setup(e,{expose:t,emit:n}){let i=n,a=e,c=s(()=>({main:{"d1-bleed":!0}})),u=s(()=>({})),d=new x(`d1.bleed`,a,{emits:i,classes:c,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(l(f)))}})})))()}var D;function O(){return(O=e((()=>{E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{name:`D1Bleed`,exportName:`default`,displayName:`D1Bleed`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Bleed/D1Bleed.vue`]})})))()}var k,A,j,M;function N(){return(N=e((()=>{v(),w(),k=[{name:`tag`,type:`string`}],A=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],j=[],M={component:`Bleed`,props:k,slots:A,events:j,defaults:C,wikiDesign:h}})))()}var P;function F(){return(F=e((()=>{p(),_(),N(),P=new f(M.component,M.props,M.defaults,M.wikiDesign,d,g)})))()}var I=t({Bleed:()=>R,__namedExportsOrder:()=>z,default:()=>L}),L,R,z;function B(){return(B=e((()=>{O(),F(),L={title:`Ui/Bleed`,component:D,parameters:{design:`d1`,docs:{description:{component:P.getDescription()}}},argTypes:P.getWiki(),args:P.getValues()},R={render:e=>({components:{D1Bleed:D},setup:()=>({args:e}),template:`
      <D1Bleed v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
        <p>The component applies negative horizontal margins based on the margin-x property.</p>
      </D1Bleed>
    `})},z=[`Bleed`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Bleed
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Bleed v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
        <p>The component applies negative horizontal margins based on the margin-x property.</p>
      </D1Bleed>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...R.parameters?.docs?.source}}}})))()}export{F as a,P as i,I as n,B as r,R as t};