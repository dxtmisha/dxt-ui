import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,kt as u,sn as d}from"./library-CO1fW2cN.js";import{E as f,O as p,d as m,f as h,i as g,l as _,n as v,t as y,u as b}from"./wiki-BMj2WokS.js";var x,S,C;function w(){return(w=e((()=>{u(),f(),c(),x=class{constructor(e,t,n,i,a,o,s,c){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c}get tag(){return this.props.tag??`div`}},S={tag:`div`},C=class extends p{constructor(e,t,n,i=x){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return o(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.initSlot(`default`))}}})))()}var T;function E(){return(E=e((()=>{w(),T={...S}})))()}var D;function O(){return(O=e((()=>{u(),w(),E(),D=i({name:`D1Bleed`,__name:`D1Bleed`,props:n({tag:{}},T),setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-bleed":!0}})),c=s(()=>({})),u=new C(`d1.bleed`,i,{emits:r,classes:o,styles:c}),f=u.render();return t(u.expose()),(e,t)=>(a(),l(d(f)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Bleed`,exportName:`default`,displayName:`D1Bleed`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Bleed/D1Bleed.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{y(),E(),j=[{name:`tag`,type:`string`}],M=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],N=[],P={component:`Bleed`,props:j,slots:M,events:N,defaults:T,wikiDesign:v}})))()}var I;function L(){return(L=e((()=>{m(),_(),F(),I=new b(P.component,P.props,P.defaults,P.wikiDesign,g,h)})))()}var R=t({Bleed:()=>B,__namedExportsOrder:()=>V,default:()=>z}),z,B,V;function H(){return(H=e((()=>{A(),L(),z={title:`Ui/Bleed`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Bleed:k},setup:()=>({args:e}),template:`
      <D1Bleed v-bind="args">
        <p>Bleed allows content to expand beyond the horizontal boundaries of its parent container.</p>
        <p>This is useful for full-width images or decorative blocks in articles.</p>
        <p>The component applies negative horizontal margins based on the margin-x property.</p>
      </D1Bleed>
    `})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Bleed`]})))()}export{L as a,I as i,R as n,H as r,B as t};