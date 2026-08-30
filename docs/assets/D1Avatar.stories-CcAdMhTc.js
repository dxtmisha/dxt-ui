import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,dt as u,kt as d,sn as f}from"./library-CO1fW2cN.js";import{E as p,O as m,d as h,f as g,i as _,l as v,n as ee,t as te,u as ne}from"./wiki-BMj2WokS.js";import{n as re,t as ie}from"./EventClickInclude-BgNX8brc-Ca5_keyg.js";import{n as y,t as ae}from"./AriaStaticInclude-DoPfNULn-CgdAxtFN.js";import{n as oe,t as b}from"./EnabledInclude-BNFNe4Fq-BJoPNyNt.js";import{n as se,t as x}from"./SkeletonInclude-CxjjK4BT-B2SSkR_U.js";import{n as S,t as C}from"./LabelInclude-DGpRRhTL-D4-73OEc.js";import{n as w,t as T}from"./ImageInclude-CU6ghcSh-D6Wfm7KW.js";import{n as E,t as D}from"./Image-eoFD_ywJ.js";import{n as O,t as ce}from"./BadgeInclude-HVCVkEDd-Bo2OOZpw.js";import{n as le,t as ue}from"./Badge-Cb1SjPVT.js";import{n as de,t as fe}from"./D1Skeleton-0ed2Yx2u.js";var k,A,j;function M(){return(M=e((()=>{ae(),b(),re(),T(),se(),C(),ce(),d(),p(),c(),k=class{constructor(e,t,n,i,a,o,s,c,l={}){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`skeleton`,void 0),r(this,`enabled`,void 0),r(this,`image`,void 0),r(this,`label`,void 0),r(this,`badge`,void 0),r(this,`event`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c;let{BadgeIncludeConstructor:u=O,ImageIncludeConstructor:d=w,LabelIncludeConstructor:f=S,SkeletonIncludeConstructor:p=x,EventClickIncludeConstructor:m=ie,EnabledIncludeConstructor:h=oe}=l;this.skeleton=new p(e,i,[`classBackground`]),this.enabled=new h(e),this.image=new d(a,e,o,()=>({disabled:this.props.disabled}),c),this.label=new f(()=>this.labelProps,a,void 0,s,void 0,void 0,void 0,this.skeleton),this.badge=new u(a,e,o,{overlap:`circular`}),this.event=new m(e,this.enabled,c)}get tag(){return this.props.to||this.props.href?`a`:`div`}get binds(){return{...this.event.binds,tabindex:this.enabled.isEnabled?this.props.tabindex:void 0,...y.role(this.enabled.isEnabled?`button`:`img`),...y.label(this.props.ariaLabel??this.props.label)}}get classes(){return this.skeleton.classes}get labelProps(){return{label:this.getLabel(),labelId:this.props.labelId}}getLabel(){if(this.props.reduction){let e=this.props.label&&String(this.props.label).trim()||void 0;if(e)return e.split(/\s+/).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join(``)}return this.props.label}},A=class extends m{constructor(e,t,n,i=k){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:this.item.classes,label:this.getSubClass(`label`)}}initStyles(){return{}}initRender(){return o(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.item.label.render(),...this.item.image.render(),...this.item.badge.render()])}},j={reduction:!0,tabindex:`0`}})))()}var N,P;function F(){return(F=e((()=>{M(),N={size:[`xs`,`sm`,`md`,`lg`,`xl`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...j,size:`md`}})))()}var I;function L(){return(L=e((()=>{d(),p(),M(),E(),le(),F(),I=i({name:`D1Avatar`,__name:`D1Avatar`,props:n({label:{},labelId:{},image:{},imageAttrs:{},badge:{},badgeDot:{type:Boolean},badgeAttrs:{},isSkeleton:{type:Boolean},ariaLabel:{},to:{},href:{},value:{},detail:{},reduction:{type:Boolean},tabindex:{},focus:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},primary:{type:Boolean},size:{},palette:{}},P),emits:[`load`,`click`,`clickLite`],setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-avatar":!0,"d1-avatar--focus":i.focus,"d1-avatar--disabled":i.disabled,"d1-avatar--readonly":i.readonly,"d1-avatar--primary":i.primary,[`d1-avatar--size--${i.size}`]:u(N.size,i.size),[`d1-palette d1-palette--${i.palette}`]:u(N.palette,i.palette)}})),c=s(()=>({})),d=new A(`d1.avatar`,i,{emits:r,classes:o,styles:c,components:{image:D,badge:ue}}),p=d.render();return t(d.expose()),(e,t)=>(a(),l(f(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Avatar`,exportName:`default`,displayName:`D1Avatar`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Avatar/D1Avatar.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{te(),F(),B=[{name:`ariaLabel`,type:`string`},{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`reduction`,type:`boolean`},{name:`size`,type:`string`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`tabindex`,type:`string | number`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],V=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],U={component:`Avatar`,props:B,slots:V,events:H,defaults:P,wikiDesign:ee}})))()}var G;function K(){return(K=e((()=>{h(),v(),W(),G=new ne(U.component,U.props,U.defaults,U.wikiDesign,_,g)})))()}var pe=t({Avatar:()=>J,AvatarBasic:()=>Y,AvatarReduction:()=>X,AvatarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),de(),q={title:`Ui/Avatar`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={},Y={name:`Базовые`,render:()=>({components:{D1Avatar:R},template:`
        <div class="wiki-storybook-flex">
          <D1Avatar label="John Doe"/>
          <D1Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" label="User Image"/>
          <D1Avatar label="Online User" badgeDot/>
        </div>
    `})},X={name:`Сокращение (reduction)`,render:()=>({components:{D1Avatar:R},template:`
        <div class="wiki-storybook-flex">
          <D1Avatar label="Иван Иванович" :reduction="true"/>
          <D1Avatar label="Иван Иванович" :reduction="false"/>
        </div>
    `})},Z={name:`Загрузка скелетона`,render:()=>({components:{D1Avatar:R,D1Skeleton:fe},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1Avatar :isSkeleton="true" label="JD"/>
          </div>
        </D1Skeleton>
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Avatar
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Avatar label="John Doe"/>
          <D1Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" label="User Image"/>
          <D1Avatar label="Online User" badgeDot/>
        </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Сокращение (reduction)',
  render: () => ({
    components: {
      D1Avatar
    },
    template: \`
        <div class="wiki-storybook-flex">
          <D1Avatar label="Иван Иванович" :reduction="true"/>
          <D1Avatar label="Иван Иванович" :reduction="false"/>
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка скелетона',
  render: () => ({
    components: {
      D1Avatar,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1Avatar :isSkeleton="true" label="JD"/>
          </div>
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`Avatar`,`AvatarBasic`,`AvatarReduction`,`AvatarSkeleton`]})))()}export{pe as a,K as c,Z as i,Y as n,$ as o,X as r,G as s,J as t};