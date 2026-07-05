import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Jt as i,Lt as a,Rt as o,Ut as s,an as c,d as l,u,ut as d,zt as f}from"./iframe-B-LNhFWZ.js";import{d as p,f as m,m as h,n as g,o as _,p as v,s as y,t as b,u as x}from"./wiki-DgltPJFG.js";import{n as S,t as C}from"./AreaInclude-DeLPc6ci-66iz7jz1.js";var w,T,E,D=t((()=>{m(),C(),r(),u(),w=class{constructor(e,t,n,r,i,a,o,s,c={}){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),v(this,`area`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=S}=c;this.area=new l(e)}},T={area:`container`,align:`center`},E=class extends l{constructor(e,t,n,r=w){super(e,t,n),v(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),n(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),O,k,A=t((()=>{D(),O={align:[`left`,`center`,`right`]},k={...T,align:`center`}})),j=t((()=>{})),M,N=t((()=>{r(),u(),D(),A(),j(),M=f({name:`D1Container`,__name:`D1Container`,props:s({area:{},align:{}},k),setup(e,{expose:t,emit:n}){let r=n,s=e,l=new E(`d1.container`,s,{emits:r,classes:a(()=>({main:{"d1-container":!0,[`d1-container--align--${s.align}`]:d(O.align,s.align)}})),styles:a(()=>({}))}),u=l.render();return t(l.expose()),(e,t)=>(i(),o(c(u)))}})})),P,F=t((()=>{N(),N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})),I,L,R,z,B=t((()=>{b(),A(),I=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`area`,type:`string`}],L=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],R=[],z={component:`Container`,props:I,slots:L,events:R,defaults:k,wikiDesign:g}})),V,H=t((()=>{p(),y(),B(),V=new x(z.component,z.props,z.defaults,z.wikiDesign,_,h)})),U=e({Container:()=>G,__namedExportsOrder:()=>K,default:()=>W}),W,G,K,q=t((()=>{F(),H(),W={title:`Ui/Container`,component:P,parameters:{design:`d1`,docs:{description:{component:V.getDescription()}}},argTypes:V.getWiki(),args:V.getValues()},G={render:e=>({components:{D1Container:P},setup:()=>({args:e}),template:`
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