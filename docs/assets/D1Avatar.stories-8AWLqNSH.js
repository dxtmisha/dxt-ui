import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,D as r,Ft as i,Ht as a,It as o,Jt as s,Pt as c,Rt as l,mn as u}from"./library-ByXZ2YPj.js";import{_ as d,a as f,d as p,f as ee,k as m,n as te,p as h,s as g,t as ne}from"./wiki-CfN0XtvQ.js";import{n as re,t as ie}from"./EventClickInclude-BePe4mYM-K44ha_OT.js";import{n as _,t as v}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as y,t as b}from"./EnabledInclude-B0gdl7cf-DiP9Ssl-.js";import{n as x,t as S}from"./SkeletonInclude-CIeNLqUF-vgVNOtFs.js";import{n as C,t as w}from"./LabelInclude-VdD0o-a0-CMD-JztE.js";import{n as T,t as E}from"./ImageInclude-CwOv50rs-CDvVPyXe.js";import{n as D,t as ae}from"./Image-AOghbe00.js";import{n as oe,t as se}from"./BadgeInclude-4jiUZctR-Dgkylyni.js";import{n as ce,t as le}from"./Badge-ktK-bBdg.js";import{n as ue,t as de}from"./D1Skeleton-fWB3UQoT.js";var O,k,A;function j(){return(j=e((()=>{v(),b(),ie(),E(),S(),C(),se(),n(),m(),O=class{props;element;naming;components;slots;emits;skeleton;enabled;image;label;badge;event;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{BadgeIncludeConstructor:s=oe,ImageIncludeConstructor:c=T,LabelIncludeConstructor:l=w,SkeletonIncludeConstructor:u=x,EventClickIncludeConstructor:d=re,EnabledIncludeConstructor:f=y}=o;this.skeleton=new u(e,n,[`classBackground`]),this.enabled=new f(e),this.image=new c(n,e,r,()=>({disabled:this.props.disabled}),a),this.label=new l(()=>this.labelProps,n,void 0,i,void 0,void 0,void 0,this.skeleton),this.badge=new s(n,e,r,{overlap:`circular`}),this.event=new d(e,this.enabled,a)}get tag(){return this.props.to||this.props.href?`a`:`div`}get binds(){return{...this.event.binds,tabindex:this.enabled.isEnabled?this.props.tabindex:void 0,..._.role(this.enabled.isEnabled?`button`:`img`),..._.label(this.props.ariaLabel??this.props.label)}}get classes(){return this.skeleton.classes}get labelProps(){return{label:this.getLabel(),labelId:this.props.labelId}}getLabel(){if(this.props.reduction){let e=this.props.label&&String(this.props.label).trim()||void 0;if(e)return e.split(/\s+/).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join(``)}return this.props.label}},k=class extends d{item;constructor(e,t,n,r=O){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:this.item.classes,label:this.naming.getSubClass(`label`)}}initStyles(){return{}}initRender(){return l(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.item.label.render(),...this.item.image.render(),...this.item.badge.render()])}},A={reduction:!0,tabindex:`0`}})))()}var M,N;function P(){return(P=e((()=>{j(),M={size:[`xs`,`sm`,`md`,`lg`,`xl`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},N={...A,size:`md`}})))()}var F;function I(){return(I=e((()=>{n(),m(),j(),D(),ce(),P(),F=o({name:`D1Avatar`,__name:`D1Avatar`,props:a({label:{},labelId:{},image:{},imageAttrs:{},badge:{},badgeDot:{type:Boolean},badgeAttrs:{},isSkeleton:{type:Boolean},ariaLabel:{},to:{},href:{},value:{},detail:{},index:{},reduction:{type:Boolean},tabindex:{},focus:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},primary:{type:Boolean},size:{},palette:{}},N),emits:[`load`,`click`,`clickLite`],setup(e,{expose:t,emit:n}){let a=n,o=e,l=c(()=>({main:{"d1-avatar":!0,"d1-avatar--focus":o.focus,"d1-avatar--disabled":o.disabled,"d1-avatar--readonly":o.readonly,"d1-avatar--primary":o.primary,[`d1-avatar--size--${o.size}`]:r(M.size,o.size),[`d1-palette d1-palette--${o.palette}`]:r(M.palette,o.palette)}})),d=c(()=>({})),f=new k(`d1.avatar`,o,{emits:a,classes:l,styles:d,components:{image:ae,badge:le}}),p=f.render();return t(f.expose()),(e,t)=>(s(),i(u(p)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1Avatar`,exportName:`default`,displayName:`D1Avatar`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/Avatar/D1Avatar.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{ne(),P(),z=[{name:`ariaLabel`,type:`string`},{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`index`,type:`string | number`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`reduction`,type:`boolean`},{name:`size`,type:`string`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`tabindex`,type:`string | number`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],B=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded / Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],H={component:`Avatar`,props:z,slots:B,events:V,defaults:N,wikiDesign:te}})))()}var W;function G(){return(G=e((()=>{ee(),g(),U(),W=new p(H.component,H.props,H.defaults,H.wikiDesign,f,h)})))()}var K=t({Avatar:()=>J,AvatarBasic:()=>Y,AvatarReduction:()=>X,AvatarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{R(),G(),ue(),q={title:`Ui/Avatar`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={},Y={name:`Базовые`,render:()=>({components:{D1Avatar:L},template:`
        <div class="wiki-storybook-flex">
          <D1Avatar label="John Doe"/>
          <D1Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" label="User Image"/>
          <D1Avatar label="Online User" badgeDot/>
        </div>
    `})},X={name:`Сокращение (reduction)`,render:()=>({components:{D1Avatar:L},template:`
        <div class="wiki-storybook-flex">
          <D1Avatar label="Иван Иванович" :reduction="true"/>
          <D1Avatar label="Иван Иванович" :reduction="false"/>
        </div>
    `})},Z={name:`Загрузка скелетона`,render:()=>({components:{D1Avatar:L,D1Skeleton:de},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex">
            <D1Avatar :isSkeleton="true" label="JD"/>
          </div>
        </D1Skeleton>
    `})},Q=[`Avatar`,`AvatarBasic`,`AvatarReduction`,`AvatarSkeleton`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{K as a,G as c,Z as i,Y as n,$ as o,X as r,W as s,J as t};