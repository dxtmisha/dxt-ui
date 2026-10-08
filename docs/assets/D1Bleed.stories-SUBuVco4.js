import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l}from"./library-C6UyfMBX.js";import{D as u,d,f,g as p,i as m,n as h,s as g,t as _,u as v}from"./wiki-Cqdd-d3l.js";var y,b,x;function S(){return(S=e((()=>{n(),u(),y=class{props;refs;element;classDesign;className;components;slots;emits;constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get tag(){return this.props.tag??`div`}},b={tag:`div`},x=class extends p{item;constructor(e,t,n,r=y){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return a(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var C;function w(){return(w=e((()=>{S(),C={...b}})))()}var T;function E(){return(E=e((()=>{n(),S(),w(),T=i({name:`D1Bleed`,__name:`D1Bleed`,props:o({tag:{}},C),setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-bleed":!0}})),u=l(()=>({})),d=new x(`d1.bleed`,a,{emits:i,classes:o,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var D;function O(){return(O=e((()=>{E(),D=T,T.__docgenInfo=Object.assign({displayName:T.name??T.__name},{name:`D1Bleed`,exportName:`default`,displayName:`D1Bleed`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Bleed/D1Bleed.vue`]})})))()}var k,A,j,M;function N(){return(N=e((()=>{_(),w(),k=[{name:`tag`,type:`string`}],A=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],j=[],M={component:`Bleed`,props:k,slots:A,events:j,defaults:C,wikiDesign:h}})))()}var P;function F(){return(F=e((()=>{d(),g(),N(),P=new v(M.component,M.props,M.defaults,M.wikiDesign,m,f)})))()}var I=t({Bleed:()=>R,__namedExportsOrder:()=>z,default:()=>L}),L,R,z;function B(){return(B=e((()=>{O(),F(),L={title:`Ui/Bleed`,component:D,parameters:{design:`d1`,docs:{description:{component:P.getDescription()}}},argTypes:P.getWiki(),args:P.getValues()},R={render:e=>({components:{D1Bleed:D},setup:()=>({args:e}),template:`
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