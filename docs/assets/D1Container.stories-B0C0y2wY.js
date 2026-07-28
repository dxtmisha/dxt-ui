import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{$ as n,Gt as r,Kt as i,Ut as a,Vt as o,Wt as s,Yt as c,d as l,dn as u,en as d,f}from"./iframe-D7czqiJA.js";import{a as p,d as m,f as h,l as g,m as _,n as v,p as y,t as b,u as x}from"./wiki-CUC2UhNU.js";import{n as S,t as C}from"./AreaInclude-DeLPc6ci-ChfyHhvX.js";var w,T,E,D=t((()=>{h(),C(),o(),l(),w=class{constructor(e,t,n,r,i,a,o,s,c={}){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`area`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=S}=c;this.area=new l(e)}},T={area:`container`,align:`center`},E=class extends f{constructor(e,t,n,r=w){super(e,t,n),y(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),i(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),O,k,A=t((()=>{D(),O={align:[`left`,`center`,`right`]},k={...T,align:`center`}})),j=t((()=>{})),M,N=t((()=>{o(),l(),D(),A(),j(),M=r({name:`D1Container`,__name:`D1Container`,props:c({area:{},align:{}},k),setup(e,{expose:t,emit:r}){let i=r,o=e,c=new E(`d1.container`,o,{emits:i,classes:a(()=>({main:{"d1-container":!0,[`d1-container--align--${o.align}`]:n(O.align,o.align)}})),styles:a(()=>({}))}),l=c.render();return t(c.expose()),(e,t)=>(d(),s(u(l)))}})})),P,F=t((()=>{N(),N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})),I,L,R,z,B=t((()=>{b(),A(),I=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`area`,type:`string`}],L=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],R=[],z={component:`Container`,props:I,slots:L,events:R,defaults:k,wikiDesign:v}})),V,H=t((()=>{m(),g(),B(),V=new x(z.component,z.props,z.defaults,z.wikiDesign,p,_)})),U=e({Container:()=>G,__namedExportsOrder:()=>K,default:()=>W}),W,G,K,q=t((()=>{F(),H(),W={title:`Ui/Container`,component:P,parameters:{design:`d1`,docs:{description:{component:V.getDescription()}}},argTypes:V.getWiki(),args:V.getValues()},G={render:e=>({components:{D1Container:P},setup:()=>({args:e}),template:`
      <D1Container v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </D1Container>
    `})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K=[`Container`]}));q();export{G as Container,K as __namedExportsOrder,W as default,H as i,q as n,V as r,U as t};