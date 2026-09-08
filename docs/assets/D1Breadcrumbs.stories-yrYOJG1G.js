import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,an as c,jt as l}from"./library-BfcLFF_v.js";import{O as u,d,i as f,j as p,k as m,l as h,m as ee,n as g,p as _,t as v,u as y}from"./wiki-BHyzKkJP.js";import{n as b,t as x}from"./EventClickInclude-CHVU4Ljf-yU_qsivV.js";import{n as S,t as C}from"./AriaStaticInclude-DoPfNULn-DLb49dmA.js";import{n as w,t as T}from"./TextInclude-7NyN-fVx-DEXAuT0b.js";import{n as E,t as te}from"./D1Skeleton-De6ny3D8.js";import{n as D,t as O}from"./D1BreadcrumbItem-DQ8kellN.js";var k,A,j;function M(){return(M=e((()=>{C(),T(),b(),n(),u(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`element`,void 0),_(this,`emits`,void 0),_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`slots`,void 0),_(this,`event`,void 0),_(this,`text`,void 0),this.classDesign=e,this.className=t,this.components=n,this.element=r,this.emits=i,this.props=a,this.refs=o,this.slots=s;let{EventClickIncludeConstructor:l=x,TextIncludeConstructor:u=w}=c;this.event=new l(void 0,void 0,i),this.text=new u(a)}get binds(){return{...S.label(this.text.breadcrumb)}}},A={},j=class extends m{constructor(e,t,n,r=k){super(e,t,n),_(this,`item`,void 0),_(this,`renderChildren`,()=>{var e;let t=[],n=(this.props.list?.length??1)-1;return(e=this.props.list)==null||e.forEach((e,r)=>{this.components.renderAdd(t,`breadcrumbItem`,p(e,{readonly:r===n,isSkeleton:this.props.isSkeleton,class:this.classes?.value.item,onClick:this.item.event.onClick}),void 0,e?.value||e?.label||r)}),t}),this.item=new r(this.getDesign(),this.getName(),this.components,this.element,this.emits,this.props,this.refs,this.slots),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){return a(`nav`,{...this.item.binds,...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderChildren())}}})))()}var N;function P(){return(P=e((()=>{D(),N=O})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{n(),M(),P(),I(),L=i({name:`D1Breadcrumbs`,__name:`D1Breadcrumbs`,props:o({textBreadcrumb:{type:[String,Function]},isSkeleton:{type:Boolean},list:{}},F),emits:[`click`,`clickLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-breadcrumbs":!0}})),u=l(()=>({})),d=new j(`d1.breadcrumbs`,a,{emits:i,classes:o,styles:u,components:{breadcrumbItem:N}}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Breadcrumbs`,exportName:`default`,displayName:`D1Breadcrumbs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Breadcrumbs/D1Breadcrumbs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{v(),I(),V=[{name:`isSkeleton`,type:`boolean`},{name:`list`,type:`ConstrBind<BreadcrumbItemProps>[]`},{name:`textBreadcrumb`,type:`TextValue`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],W={component:`Breadcrumbs`,props:V,slots:H,events:U,defaults:F,wikiDesign:g}})))()}var K;function q(){return(q=e((()=>{d(),h(),G(),K=new y(W.component,W.props,W.defaults,W.wikiDesign,f,ee)})))()}var J=t({Breadcrumbs:()=>X,BreadcrumbsSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),E(),Y={title:`Ui/Breadcrumbs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},X={render:e=>({components:{D1Breadcrumbs:z},setup:()=>({args:e}),template:`
      <D1Breadcrumbs v-bind="args" :list="[
      { label: 'Home', to: '#', icon: 'home' },
      { label: 'Catalog', to: '#catalog' },
      { label: 'Shoes' }
    ]" />
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Breadcrumbs:z,D1Skeleton:te},template:`
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