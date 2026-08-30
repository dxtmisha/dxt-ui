import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,dt as u,kt as d,sn as f}from"./library-CO1fW2cN.js";import{E as p,O as m,d as h,f as g,i as _,l as v,n as y,t as b,u as x}from"./wiki-BMj2WokS.js";import{n as S,t as C}from"./AreaInclude-D20rGVhZ-vH2tR0Fe.js";var w,T,E;function D(){return(D=e((()=>{C(),d(),p(),c(),w=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`area`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{AreaIncludeConstructor:u=S}=l;this.area=new u(e)}},T={area:`container`,align:`center`},E=class extends m{constructor(e,t,n,i=w){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),o(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})))()}var O,k;function A(){return(A=e((()=>{D(),O={align:[`left`,`center`,`right`]},k={...T,align:`center`}})))()}var j;function M(){return(M=e((()=>{d(),p(),D(),A(),j=i({name:`D1Container`,__name:`D1Container`,props:n({area:{},align:{}},k),setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-container":!0,[`d1-container--align--${i.align}`]:u(O.align,i.align)}})),c=s(()=>({})),d=new E(`d1.container`,i,{emits:r,classes:o,styles:c}),p=d.render();return t(d.expose()),(e,t)=>(a(),l(f(p)))}})})))()}var N;function P(){return(P=e((()=>{M(),N=j,j.__docgenInfo=Object.assign({displayName:j.name??j.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})))()}var F,I,L,R;function z(){return(z=e((()=>{b(),A(),F=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`area`,type:`string`}],I=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],L=[],R={component:`Container`,props:F,slots:I,events:L,defaults:k,wikiDesign:y}})))()}var B;function V(){return(V=e((()=>{h(),v(),z(),B=new x(R.component,R.props,R.defaults,R.wikiDesign,_,g)})))()}var H=t({Container:()=>W,__namedExportsOrder:()=>G,default:()=>U}),U,W,G;function K(){return(K=e((()=>{P(),V(),U={title:`Ui/Container`,component:N,parameters:{design:`d1`,docs:{description:{component:B.getDescription()}}},argTypes:B.getWiki(),args:B.getValues()},W={render:e=>({components:{D1Container:N},setup:()=>({args:e}),template:`
      <D1Container v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </D1Container>
    `})},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G=[`Container`]})))()}export{V as a,B as i,H as n,K as r,W as t};