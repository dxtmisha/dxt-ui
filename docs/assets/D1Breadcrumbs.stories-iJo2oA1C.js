import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Jt as i,Lt as a,Rt as o,Ut as s,an as c,d as l,p as u,u as d,zt as ee}from"./iframe-B-LNhFWZ.js";import{d as te,f,m as p,n as m,o as h,p as g,s as _,t as v,u as y}from"./wiki-DgltPJFG.js";import{n as b,t as x}from"./EventClickInclude-CZp3MaKf-BMyn9He1.js";import{n as S,t as C}from"./AriaStaticInclude-D-DjeyB8-BwXGOxr0.js";import{n as w,t as T}from"./TextInclude-BCLvgDOQ-BI27HXxg.js";import{n as E,t as D}from"./D1Skeleton-CxiItvxF.js";import{n as ne,t as re}from"./D1BreadcrumbItem-CZEOmkR0.js";var O,k,A,j=t((()=>{C(),f(),T(),b(),r(),d(),O=class{constructor(e,t,n,r,i,a,o,s,c={}){g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`element`,void 0),g(this,`emits`,void 0),g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`slots`,void 0),g(this,`event`,void 0),g(this,`text`,void 0),this.classDesign=e,this.className=t,this.components=n,this.element=r,this.emits=i,this.props=a,this.refs=o,this.slots=s;let{EventClickIncludeConstructor:l=x,TextIncludeConstructor:u=w}=c;this.event=new l(void 0,void 0,i),this.text=new u(a)}get binds(){return{...S.label(this.text.breadcrumb)}}},k={},A=class extends l{constructor(e,t,n,r=O){super(e,t,n),g(this,`item`,void 0),g(this,`renderChildren`,()=>{var e;let t=[],n=(this.props.list?.length??1)-1;return(e=this.props.list)==null||e.forEach((e,r)=>{this.components.renderAdd(t,`breadcrumbItem`,u(e,{readonly:r===n,isSkeleton:this.props.isSkeleton,class:this.classes?.value.item,onClick:this.item.event.onClick}),void 0,e?.value||e?.label||r)}),t}),this.item=new r(this.getDesign(),this.getName(),this.components,this.element,this.emits,this.props,this.refs,this.slots),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){return n(`nav`,{...this.item.binds,...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderChildren())}}})),M,N=t((()=>{ne(),M=re})),P,F=t((()=>{j(),P={...k}})),I=t((()=>{})),L,R=t((()=>{r(),j(),N(),F(),I(),L=ee({name:`D1Breadcrumbs`,__name:`D1Breadcrumbs`,props:s({textBreadcrumb:{type:[String,Function]},isSkeleton:{type:Boolean},list:{}},P),emits:[`click`,`clickLite`],setup(e,{expose:t,emit:n}){let r=new A(`d1.breadcrumbs`,e,{emits:n,classes:a(()=>({main:{"d1-breadcrumbs":!0}})),styles:a(()=>({})),components:{breadcrumbItem:M}}),s=r.render();return t(r.expose()),(e,t)=>(i(),o(c(s)))}})})),z,B=t((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Breadcrumbs`,exportName:`default`,displayName:`D1Breadcrumbs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Breadcrumbs/D1Breadcrumbs.vue`]})})),V,H,U,W,G=t((()=>{v(),F(),V=[{name:`isSkeleton`,type:`boolean`},{name:`list`,type:`ConstrBind<BreadcrumbItemProps>[]`},{name:`textBreadcrumb`,type:`TextValue`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],W={component:`Breadcrumbs`,props:V,slots:H,events:U,defaults:P,wikiDesign:m}})),K,q=t((()=>{te(),_(),G(),K=new y(W.component,W.props,W.defaults,W.wikiDesign,h,p)})),J=e({Breadcrumbs:()=>X,BreadcrumbsSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),Y,X,Z,Q,$=t((()=>{B(),q(),E(),Y={title:`Ui/Breadcrumbs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},X={render:e=>({components:{D1Breadcrumbs:z},setup:()=>({args:e}),template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Breadcrumbs`,`BreadcrumbsSkeleton`]}));$();export{X as Breadcrumbs,Z as BreadcrumbsSkeleton,Q as __namedExportsOrder,Y as default,q as i,$ as n,K as r,J as t};