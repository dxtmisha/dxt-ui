import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Et as r,Kt as i,Nt as a,Ot as o,P as s,Tt as c,f as l,t as u,wt as d,xt as f}from"./iframe-yo6yIkeP.js";import{a as p,d as m,f as h,m as g,n as _,o as v,p as y,t as b,u as x}from"./wiki-Ck-JDNL8.js";import{n as S,t as C}from"./AreaInclude-BPJ14Wwe-BQf2b5_B.js";var w,T,E,D=e((()=>{h(),C(),f(),l(),w=class{constructor(e,t,n,r,i,a,o,s,c){y(this,`area`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{AreaIncludeConstructor:l=S}=c??{};this.area=new l(e)}},T={area:`container`,align:`center`},E=class extends u{constructor(e,t,n,r=w){super(e,t,n),y(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=[];return this.initSlot(`default`,e),r(`div`,{...this.getAttrs(),class:this.classes?.value.main},e)}}})),O,k,A=e((()=>{D(),O={align:[`left`,`center`,`right`]},k={...T,align:`center`}})),j=e((()=>{})),M,N=e((()=>{f(),l(),D(),A(),j(),M=c({name:`D1Container`,__name:`D1Container`,props:o({area:{},align:{}},k),setup(e,{expose:t,emit:r}){let o=r,c=e,l=new E(`d1.container`,c,{emits:o,classes:n(()=>({main:{"d1-container":!0,[`d1-container--align--${c.align}`]:s(O.align,c.align)}})),styles:n(()=>({}))}),u=l.render();return t(l.expose()),(e,t)=>(a(),d(i(u)))}})})),P,F=e((()=>{N(),N(),P=M,M.__docgenInfo=Object.assign({displayName:M.name??M.__name},{name:`D1Container`,exportName:`default`,displayName:`D1Container`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Container/D1Container.vue`]})})),I,L,R,z,B=e((()=>{b(),A(),I=[{name:`align`,type:`string | undefined`,option:[`left`,`center`,`right`]},{name:`area`,type:`string | undefined`}],L=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],R=[],z={component:`Container`,props:I,slots:L,events:R,defaults:k,wikiDesign:_}})),V,H=e((()=>{m(),v(),B(),V=new x(z.component,z.props,z.defaults,z.wikiDesign,p,g)})),U=t({Container:()=>G,__namedExportsOrder:()=>K,default:()=>W}),W,G,K,q=e((()=>{F(),H(),W={title:`Ui/Container`,component:P,parameters:{design:`d1`,docs:{description:{component:V.getDescription()}}},argTypes:V.getWiki(),args:V.getValues()},G={render:e=>({components:{D1Container:P},setup:()=>({args:e}),template:`
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