import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,kt as u,sn as d}from"./library-CO1fW2cN.js";import{E as f,O as p,d as m,f as h,i as g,l as _,m as v,n as y,t as ee,u as b}from"./wiki-BMj2WokS.js";import{n as x,t as S}from"./EventClickInclude-BgNX8brc-Ca5_keyg.js";import{n as C,t as w}from"./AriaStaticInclude-DoPfNULn-CgdAxtFN.js";import{n as T,t as E}from"./TextInclude-D_yP3zRO-BEkUONuC.js";import{n as te,t as ne}from"./D1Skeleton-0ed2Yx2u.js";import{n as D,t as O}from"./D1BreadcrumbItem-C7l43MPx.js";var k,A,j;function M(){return(M=e((()=>{w(),E(),x(),u(),f(),c(),k=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`element`,void 0),r(this,`emits`,void 0),r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`slots`,void 0),r(this,`event`,void 0),r(this,`text`,void 0),this.classDesign=e,this.className=t,this.components=n,this.element=i,this.emits=a,this.props=o,this.refs=s,this.slots=c;let{EventClickIncludeConstructor:u=S,TextIncludeConstructor:d=T}=l;this.event=new u(void 0,void 0,a),this.text=new d(o)}get binds(){return{...C.label(this.text.breadcrumb)}}},A={},j=class extends p{constructor(e,t,n,i=k){super(e,t,n),r(this,`item`,void 0),r(this,`renderChildren`,()=>{var e;let t=[],n=(this.props.list?.length??1)-1;return(e=this.props.list)==null||e.forEach((e,r)=>{this.components.renderAdd(t,`breadcrumbItem`,v(e,{readonly:r===n,isSkeleton:this.props.isSkeleton,class:this.classes?.value.item,onClick:this.item.event.onClick}),void 0,e?.value||e?.label||r)}),t}),this.item=new i(this.getDesign(),this.getName(),this.components,this.element,this.emits,this.props,this.refs,this.slots),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){return o(`nav`,{...this.item.binds,...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderChildren())}}})))()}var N;function P(){return(P=e((()=>{D(),N=O})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{u(),M(),P(),I(),L=i({name:`D1Breadcrumbs`,__name:`D1Breadcrumbs`,props:n({textBreadcrumb:{type:[String,Function]},isSkeleton:{type:Boolean},list:{}},F),emits:[`click`,`clickLite`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-breadcrumbs":!0}})),c=s(()=>({})),u=new j(`d1.breadcrumbs`,i,{emits:r,classes:o,styles:c,components:{breadcrumbItem:N}}),f=u.render();return t(u.expose()),(e,t)=>(a(),l(d(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Breadcrumbs`,exportName:`default`,displayName:`D1Breadcrumbs`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Breadcrumbs/D1Breadcrumbs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{ee(),I(),V=[{name:`isSkeleton`,type:`boolean`},{name:`list`,type:`ConstrBind<BreadcrumbItemProps>[]`},{name:`textBreadcrumb`,type:`TextValue`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],W={component:`Breadcrumbs`,props:V,slots:H,events:U,defaults:F,wikiDesign:y}})))()}var K;function q(){return(q=e((()=>{m(),_(),G(),K=new b(W.component,W.props,W.defaults,W.wikiDesign,g,h)})))()}var J=t({Breadcrumbs:()=>X,BreadcrumbsSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),te(),Y={title:`Ui/Breadcrumbs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},X={render:e=>({components:{D1Breadcrumbs:z},setup:()=>({args:e}),template:`
      <D1Breadcrumbs v-bind="args" :list="[
      { label: 'Home', to: '#', icon: 'home' },
      { label: 'Catalog', to: '#catalog' },
      { label: 'Shoes' }
    ]" />
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Breadcrumbs:z,D1Skeleton:ne},template:`
        <D1Skeleton :active="true">
          <D1Breadcrumbs
            isSkeleton
            :list="[
              { label: 'Home' },
              { label: 'Components' },
              { label: 'Breadcrumbs' }
            ]"
          />
        </D1Skeleton>
    `})},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Breadcrumbs
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Breadcrumbs v-bind="args" :list="[
      { label: 'Home', to: '#', icon: 'home' },
      { label: 'Catalog', to: '#catalog' },
      { label: 'Shoes' }
    ]" />
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1Breadcrumbs,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <D1Breadcrumbs
            isSkeleton
            :list="[
              { label: 'Home' },
              { label: 'Components' },
              { label: 'Breadcrumbs' }
            ]"
          />
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Breadcrumbs`,`BreadcrumbsSkeleton`]})))()}export{K as a,$ as i,Z as n,q as o,J as r,X as t};