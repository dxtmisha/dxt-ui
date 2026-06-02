import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,D as i,Dt as a,Ft as o,Mt as s,Nt as c,Xt as l,kt as u,m as d,r as f}from"./iframe-53vFWNoU.js";import{t as p}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as m,f as h,l as g,n as _,o as v,p as y,t as b,u as x}from"./wiki-DwIxUKqL.js";import{n as S,t as C}from"./AreaInclude-BiOF0mye-Bg328ueX.js";var w,T,E,D=t((()=>{h(),C(),a(),d(),w=class{constructor(e,t,n,r,i,a,o,s,c={}){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`area`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=S}=c;this.area=new l(e)}},T={area:`container`,align:`center`},E=class extends f{constructor(e,t,n,r=w){super(e,t,n),y(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),c(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),O,k,A=t((()=>{D(),O={align:[`left`,`center`,`right`]},k={...T,align:`center`}})),j=t((()=>{})),M,N=t((()=>{a(),d(),D(),A(),j(),M=s({name:`D1Container`,__name:`D1Container`,props:o({area:{},align:{}},k),setup(e,{expose:t,emit:a}){let o=a,s=e,c=new E(`d1.container`,s,{emits:o,classes:u(()=>({main:{"d1-container":!0,[`d1-container--align--${s.align}`]:i(O.align,s.align)}})),styles:u(()=>({}))}),d=c.render();return t(c.expose()),(e,t)=>(r(),n(l(d)))}})})),P,F=t((()=>{N(),N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})),I,L,R,z,B=t((()=>{b(),A(),I=[{name:`align`,type:`string`,option:[`left`,`center`,`right`]},{name:`area`,type:`string`}],L=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],R=[],z={component:`Container`,props:I,slots:L,events:R,defaults:k,wikiDesign:_}})),V,H=t((()=>{m(),v(),B(),V=new x(z.component,z.props,z.defaults,z.wikiDesign,g,p)})),U=e({Container:()=>G,__namedExportsOrder:()=>K,default:()=>W}),W,G,K,q=t((()=>{F(),H(),W={title:`Ui/Container`,component:P,parameters:{design:`d1`,docs:{description:{component:V.getDescription()}}},argTypes:V.getWiki(),args:V.getValues()},G={render:e=>({components:{D1Container:P},setup:()=>({args:e}),template:`
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