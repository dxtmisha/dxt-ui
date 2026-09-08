import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,an as c,jt as l,ut as u}from"./library-BfcLFF_v.js";import{O as d,d as f,i as p,k as m,l as h,m as g,n as _,p as v,t as y,u as ee}from"./wiki-BHyzKkJP.js";import{n as te,t as ne}from"./EventClickInclude-CHVU4Ljf-yU_qsivV.js";import{n as b,t as re}from"./AriaStaticInclude-DoPfNULn-DLb49dmA.js";import{n as ie,t as ae}from"./EnabledInclude-1f-ej_Z5-wlUbKv1T.js";import{n as oe,t as x}from"./SkeletonInclude-D8EZQoU2-CKX32yoW.js";import{n as S,t as se}from"./LabelInclude-B0RqVypu-gKg52iET.js";import{n as ce,t as C}from"./ImageInclude-oUPVvBa5-Cdfj0QLg.js";import{n as w,t as T}from"./Image-w2_n59c4.js";import{n as E,t as D}from"./BadgeInclude-Cj5X0GiU-xQHM7Ysx.js";import{n as O,t as le}from"./Badge-yqDoSTe3.js";import{n as ue,t as de}from"./D1Skeleton-De6ny3D8.js";var k,A,j;function M(){return(M=e((()=>{re(),ae(),te(),C(),oe(),se(),D(),n(),d(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),v(this,`skeleton`,void 0),v(this,`enabled`,void 0),v(this,`image`,void 0),v(this,`label`,void 0),v(this,`badge`,void 0),v(this,`event`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{BadgeIncludeConstructor:l=E,ImageIncludeConstructor:u=ce,LabelIncludeConstructor:d=S,SkeletonIncludeConstructor:f=x,EventClickIncludeConstructor:p=ne,EnabledIncludeConstructor:m=ie}=c;this.skeleton=new f(e,r,[`classBackground`]),this.enabled=new m(e),this.image=new u(i,e,a,()=>({disabled:this.props.disabled}),s),this.label=new d(()=>this.labelProps,i,void 0,o,void 0,void 0,void 0,this.skeleton),this.badge=new l(i,e,a,{overlap:`circular`}),this.event=new p(e,this.enabled,s)}get tag(){return this.props.to||this.props.href?`a`:`div`}get binds(){return{...this.event.binds,tabindex:this.enabled.isEnabled?this.props.tabindex:void 0,...b.role(this.enabled.isEnabled?`button`:`img`),...b.label(this.props.ariaLabel??this.props.label)}}get classes(){return this.skeleton.classes}get labelProps(){return{label:this.getLabel(),labelId:this.props.labelId}}getLabel(){if(this.props.reduction){let e=this.props.label&&String(this.props.label).trim()||void 0;if(e)return e.split(/\s+/).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join(``)}return this.props.label}},A=class extends m{constructor(e,t,n,r=k){super(e,t,n),v(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:this.item.classes,label:this.getSubClass(`label`)}}initStyles(){return{}}initRender(){return a(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.item.label.render(),...this.item.image.render(),...this.item.badge.render()])}},j={reduction:!0,tabindex:`0`}})))()}var N,P;function F(){return(F=e((()=>{M(),N={size:[`xs`,`sm`,`md`,`lg`,`xl`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...j,size:`md`}})))()}var I;function L(){return(L=e((()=>{n(),d(),M(),w(),O(),F(),I=i({name:`D1Avatar`,__name:`D1Avatar`,props:o({label:{},labelId:{},image:{},imageAttrs:{},badge:{},badgeDot:{type:Boolean},badgeAttrs:{},isSkeleton:{type:Boolean},ariaLabel:{},to:{},href:{},value:{},detail:{},reduction:{type:Boolean},tabindex:{},focus:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},primary:{type:Boolean},size:{},palette:{}},P),emits:[`load`,`click`,`clickLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-avatar":!0,"d1-avatar--focus":a.focus,"d1-avatar--disabled":a.disabled,"d1-avatar--readonly":a.readonly,"d1-avatar--primary":a.primary,[`d1-avatar--size--${a.size}`]:u(N.size,a.size),[`d1-palette d1-palette--${a.palette}`]:u(N.palette,a.palette)}})),d=l(()=>({})),f=new A(`d1.avatar`,a,{emits:i,classes:o,styles:d,components:{image:T,badge:le}}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Avatar`,exportName:`default`,displayName:`D1Avatar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Avatar/D1Avatar.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{y(),F(),B=[{name:`ariaLabel`,type:`string`},{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`reduction`,type:`boolean`},{name:`size`,type:`string`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`tabindex`,type:`string | number`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],V=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],U={component:`Avatar`,props:B,slots:V,events:H,defaults:P,wikiDesign:_}})))()}var G;function K(){return(K=e((()=>{f(),h(),W(),G=new ee(U.component,U.props,U.defaults,U.wikiDesign,p,g)})))()}var fe=t({Avatar:()=>J,AvatarBasic:()=>Y,AvatarReduction:()=>X,AvatarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),ue(),q={title:`Ui/Avatar`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={},Y={name:`Базовые`,render:()=>({components:{D1Avatar:R},template:`
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
    `})},Z={name:`Загрузка скелетона`,render:()=>({components:{D1Avatar:R,D1Skeleton:de},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Avatar`,`AvatarBasic`,`AvatarReduction`,`AvatarSkeleton`]})))()}export{fe as a,K as c,Z as i,Y as n,$ as o,X as r,G as s,J as t};