import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,Nt as s,in as c,jt as l}from"./library-CUIf7uCS.js";import{O as u,d,j as f,k as p,l as ee,m,n as h,p as g,r as _,t as te,u as v}from"./wiki-wIqBVsyI.js";import{n as y,t as b}from"./EventClickInclude-CZ1iA_Fp-BOBjazBg.js";import{n as x,t as S}from"./AriaStaticInclude-CI16qWQ7-QE8vrVOk.js";import{n as C,t as w}from"./TextInclude-4xgAEWd0-GZXePIdA.js";import{n as T,t as E}from"./D1Skeleton-CTEnVdL2.js";import{n as D,t as O}from"./D1BreadcrumbItem-BkOebD0H.js";var k,A,j;function M(){return(M=e((()=>{S(),w(),y(),r(),u(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`element`,void 0),g(this,`emits`,void 0),g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`slots`,void 0),g(this,`event`,void 0),g(this,`text`,void 0),this.classDesign=e,this.className=t,this.components=n,this.element=r,this.emits=i,this.props=a,this.refs=o,this.slots=s;let{EventClickIncludeConstructor:l=b,TextIncludeConstructor:u=C}=c;this.event=new l(void 0,void 0,i),this.text=new u(a)}get binds(){return{...x.label(this.text.breadcrumb)}}},A={},j=class extends p{constructor(e,t,n,r=k){super(e,t,n),g(this,`item`,void 0),g(this,`renderChildren`,()=>{var e;let t=[],n=(this.props.list?.length??1)-1;return(e=this.props.list)==null||e.forEach((e,r)=>{this.components.renderAdd(t,`breadcrumbItem`,f(e,{readonly:r===n,isSkeleton:this.props.isSkeleton,class:this.classes?.value.item,onClick:this.item.event.onClick}),void 0,e?.value||e?.label||r)}),t}),this.item=new r(this.getDesign(),this.getName(),this.components,this.element,this.emits,this.props,this.refs,this.slots),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){return s(`nav`,{...this.item.binds,...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderChildren())}}})))()}var N;function P(){return(P=e((()=>{D(),N=O})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{r(),M(),P(),I(),L=o({name:`D1Breadcrumbs`,__name:`D1Breadcrumbs`,props:a({textBreadcrumb:{type:[String,Function]},isSkeleton:{type:Boolean},list:{}},F),emits:[`click`,`clickLite`],setup(e,{expose:t,emit:r}){let a=r,o=e,s=n(()=>({main:{"d1-breadcrumbs":!0}})),u=n(()=>({})),d=new j(`d1.breadcrumbs`,o,{emits:a,classes:s,styles:u,components:{breadcrumbItem:N}}),f=d.render();return t(d.expose()),(e,t)=>(i(),l(c(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Breadcrumbs`,exportName:`default`,displayName:`D1Breadcrumbs`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Breadcrumbs/D1Breadcrumbs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{te(),I(),V=[{name:`isSkeleton`,type:`boolean`},{name:`list`,type:`ConstrBind<BreadcrumbItemProps>[]`},{name:`textBreadcrumb`,type:`TextValue`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],W={component:`Breadcrumbs`,props:V,slots:H,events:U,defaults:F,wikiDesign:h}})))()}var K;function q(){return(q=e((()=>{d(),ee(),G(),K=new v(W.component,W.props,W.defaults,W.wikiDesign,_,m)})))()}var J=t({Breadcrumbs:()=>X,BreadcrumbsSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),T(),Y={title:`Ui/Breadcrumbs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},X={render:e=>({components:{D1Breadcrumbs:z},setup:()=>({args:e}),template:`
      <D1Breadcrumbs v-bind="args" :list="[
      { label: 'Home', to: '#', icon: 'home' },
      { label: 'Catalog', to: '#catalog' },
      { label: 'Shoes' }
    ]" />
    `})},Z={name:`Скелетон`,render:()=>({components:{D1Breadcrumbs:z,D1Skeleton:E},template:`
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