import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Pt as s,Rt as c,mn as l}from"./library-ByXZ2YPj.js";import{N as u,_ as d,a as f,d as p,f as m,k as h,n as g,p as _,s as v,t as y}from"./wiki-CfN0XtvQ.js";import{n as b,t as x}from"./EventClickInclude-BePe4mYM-K44ha_OT.js";import{n as S,t as C}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as w,t as T}from"./TextInclude-BD6x3h_g-C2E9k1CV.js";import{n as E,t as D}from"./D1Skeleton-fWB3UQoT.js";import{n as ee,t as O}from"./D1BreadcrumbItem-C11nsL6X.js";var k,A,j;function M(){return(M=e((()=>{C(),w(),x(),n(),h(),k=class{naming;components;element;emits;props;slots;event;text;constructor(e,t,n,r,i,a,o={}){this.naming=e,this.components=t,this.element=n,this.emits=r,this.props=i,this.slots=a;let{EventClickIncludeConstructor:s=b,TextIncludeConstructor:c=T}=o;this.event=new s(void 0,void 0,r),this.text=new c(i)}get binds(){return{...S.label(this.text.breadcrumb)}}},A={},j=class extends d{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.naming,this.components,this.element,this.emits,this.props,this.slots)}initExpose(){return{}}initClasses(){return{main:{},item:this.naming.getSubClass(`item`)}}initStyles(){return{}}initRender(){return c(`nav`,{...this.item.binds,...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderChildren())}renderChildren=()=>{let e=[],t=(this.props.list?.length??1)-1;return this.props.list?.forEach((n,r)=>{this.components?.renderAdd(e,`breadcrumbItem`,u(n,{readonly:r===t,isSkeleton:this.props.isSkeleton,class:this.classes?.value.item,onClick:this.item.event.onClick}),void 0,n?.value||n?.label||r)}),e}}})))()}var N;function P(){return(P=e((()=>{ee(),N=O})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{n(),M(),P(),I(),L=a({name:`D1Breadcrumbs`,__name:`D1Breadcrumbs`,props:i({textBreadcrumb:{type:[String,Function]},isSkeleton:{type:Boolean},list:{}},F),emits:[`click`,`clickLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,c=s(()=>({main:{"d1-breadcrumbs":!0}})),u=s(()=>({})),d=new j(`d1.breadcrumbs`,a,{emits:i,classes:c,styles:u,components:{breadcrumbItem:N}}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(l(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Breadcrumbs`,exportName:`default`,displayName:`D1Breadcrumbs`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Breadcrumbs/D1Breadcrumbs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{y(),I(),V=[{name:`isSkeleton`,type:`boolean`},{name:`list`,type:`ConstrBind<BreadcrumbItemProps>[]`},{name:`textBreadcrumb`,type:`TextValue`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],W={component:`Breadcrumbs`,props:V,slots:H,events:U,defaults:F,wikiDesign:g}})))()}var K;function q(){return(q=e((()=>{m(),v(),G(),K=new p(W.component,W.props,W.defaults,W.wikiDesign,f,_)})))()}var J=t({Breadcrumbs:()=>X,BreadcrumbsSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),E(),Y={title:`Ui/Breadcrumbs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},X={render:e=>({components:{D1Breadcrumbs:z},setup:()=>({args:e}),template:`
      <D1Breadcrumbs v-bind="args" :list="[
      { label: 'Home', to: '#', icon: 'home' },
      { label: 'Catalog', to: '#catalog' },
      { label: 'Shoes' }
    ]" />
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Breadcrumbs:z,D1Skeleton:D},template:`
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
    `})},Q=[`Breadcrumbs`,`BreadcrumbsSkeleton`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{K as a,$ as i,Z as n,q as o,J as r,X as t};