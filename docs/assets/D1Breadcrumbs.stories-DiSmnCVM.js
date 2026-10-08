import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l}from"./library-C6UyfMBX.js";import{C as u,D as d,d as f,f as ee,g as p,i as m,n as h,s as g,t as _,u as v}from"./wiki-Cqdd-d3l.js";import{n as y,t as b}from"./EventClickInclude-BePe4mYM-CJXSyzTR.js";import{n as x,t as S}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as C,t as w}from"./TextInclude-Bh7pGgEs-C4LrRuLb.js";import{n as T,t as E}from"./D1Skeleton-PNuSU8Wy.js";import{n as D,t as O}from"./D1BreadcrumbItem-B5MdbaJK.js";var k,A,j;function M(){return(M=e((()=>{S(),C(),b(),n(),d(),k=class{classDesign;className;components;element;emits;props;refs;slots;event;text;constructor(e,t,n,r,i,a,o,s,c={}){this.classDesign=e,this.className=t,this.components=n,this.element=r,this.emits=i,this.props=a,this.refs=o,this.slots=s;let{EventClickIncludeConstructor:l=y,TextIncludeConstructor:u=w}=c;this.event=new l(void 0,void 0,i),this.text=new u(a)}get binds(){return{...x.label(this.text.breadcrumb)}}},A={},j=class extends p{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.getDesign(),this.getName(),this.components,this.element,this.emits,this.props,this.refs,this.slots),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`)}}initStyles(){return{}}initRender(){return a(`nav`,{...this.item.binds,...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderChildren())}renderChildren=()=>{let e=[],t=(this.props.list?.length??1)-1;return this.props.list?.forEach((n,r)=>{this.components.renderAdd(e,`breadcrumbItem`,u(n,{readonly:r===t,isSkeleton:this.props.isSkeleton,class:this.classes?.value.item,onClick:this.item.event.onClick}),void 0,n?.value||n?.label||r)}),e}}})))()}var N;function P(){return(P=e((()=>{D(),N=O})))()}var F;function I(){return(I=e((()=>{M(),F={...A}})))()}var L;function R(){return(R=e((()=>{n(),M(),P(),I(),L=i({name:`D1Breadcrumbs`,__name:`D1Breadcrumbs`,props:o({textBreadcrumb:{type:[String,Function]},isSkeleton:{type:Boolean},list:{}},F),emits:[`click`,`clickLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-breadcrumbs":!0}})),u=l(()=>({})),d=new j(`d1.breadcrumbs`,a,{emits:i,classes:o,styles:u,components:{breadcrumbItem:N}}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(c(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Breadcrumbs`,exportName:`default`,displayName:`D1Breadcrumbs`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Breadcrumbs/D1Breadcrumbs.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{_(),I(),V=[{name:`isSkeleton`,type:`boolean`},{name:`list`,type:`ConstrBind<BreadcrumbItemProps>[]`},{name:`textBreadcrumb`,type:`TextValue`}],H=[],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]}],W={component:`Breadcrumbs`,props:V,slots:H,events:U,defaults:F,wikiDesign:h}})))()}var K;function q(){return(q=e((()=>{f(),g(),G(),K=new v(W.component,W.props,W.defaults,W.wikiDesign,m,ee)})))()}var J=t({Breadcrumbs:()=>X,BreadcrumbsSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>Y}),Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),T(),Y={title:`Ui/Breadcrumbs`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},X={render:e=>({components:{D1Breadcrumbs:z},setup:()=>({args:e}),template:`
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