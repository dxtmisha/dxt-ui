import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,L as a,Lt as o,Mt as s,Nt as c,in as l,jt as u}from"./library-CUIf7uCS.js";import{O as d,d as f,k as p,l as m,m as h,n as g,p as _,r as v,t as ee,u as te}from"./wiki-wIqBVsyI.js";import{n as ne,t as re}from"./EventClickInclude-CZ1iA_Fp-BOBjazBg.js";import{n as y,t as ie}from"./AriaStaticInclude-CI16qWQ7-QE8vrVOk.js";import{n as ae,t as oe}from"./EnabledInclude-BO_2CmJV-BYYGH12I.js";import{n as b,t as x}from"./SkeletonInclude-BA8kV7P3-CWEBmB0t.js";import{n as se,t as ce}from"./LabelInclude-gVJx5HOn-BeiC94Ne.js";import{n as le,t as S}from"./ImageInclude-D7vRI3z9-C9Dm3TVu.js";import{n as C,t as w}from"./Image-GZvXUXys.js";import{n as T,t as E}from"./BadgeInclude-DixMPgUG-BGktPw0M.js";import{n as D,t as O}from"./Badge-2H3biGZt.js";import{n as ue,t as de}from"./D1Skeleton-CTEnVdL2.js";var k,A,j;function M(){return(M=e((()=>{ie(),oe(),ne(),S(),b(),ce(),E(),r(),d(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){_(this,`props`,void 0),_(this,`refs`,void 0),_(this,`element`,void 0),_(this,`classDesign`,void 0),_(this,`className`,void 0),_(this,`components`,void 0),_(this,`slots`,void 0),_(this,`emits`,void 0),_(this,`skeleton`,void 0),_(this,`enabled`,void 0),_(this,`image`,void 0),_(this,`label`,void 0),_(this,`badge`,void 0),_(this,`event`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{BadgeIncludeConstructor:l=T,ImageIncludeConstructor:u=le,LabelIncludeConstructor:d=se,SkeletonIncludeConstructor:f=x,EventClickIncludeConstructor:p=re,EnabledIncludeConstructor:m=ae}=c;this.skeleton=new f(e,r,[`classBackground`]),this.enabled=new m(e),this.image=new u(i,e,a,()=>({disabled:this.props.disabled}),s),this.label=new d(()=>this.labelProps,i,void 0,o,void 0,void 0,void 0,this.skeleton),this.badge=new l(i,e,a,{overlap:`circular`}),this.event=new p(e,this.enabled,s)}get tag(){return this.props.to||this.props.href?`a`:`div`}get binds(){return{...this.event.binds,tabindex:this.enabled.isEnabled?this.props.tabindex:void 0,...y.role(this.enabled.isEnabled?`button`:`img`),...y.label(this.props.ariaLabel??this.props.label)}}get classes(){return this.skeleton.classes}get labelProps(){return{label:this.getLabel(),labelId:this.props.labelId}}getLabel(){if(this.props.reduction){let e=this.props.label&&String(this.props.label).trim()||void 0;if(e)return e.split(/\s+/).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join(``)}return this.props.label}},A=class extends p{constructor(e,t,n,r=k){super(e,t,n),_(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:this.item.classes,label:this.getSubClass(`label`)}}initStyles(){return{}}initRender(){return c(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.item.label.render(),...this.item.image.render(),...this.item.badge.render()])}},j={reduction:!0,tabindex:`0`}})))()}var N,P;function F(){return(F=e((()=>{M(),N={size:[`xs`,`sm`,`md`,`lg`,`xl`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...j,size:`md`}})))()}var I;function L(){return(L=e((()=>{r(),d(),M(),C(),D(),F(),I=s({name:`D1Avatar`,__name:`D1Avatar`,props:o({label:{},labelId:{},image:{},imageAttrs:{},badge:{},badgeDot:{type:Boolean},badgeAttrs:{},isSkeleton:{type:Boolean},ariaLabel:{},to:{},href:{},value:{},detail:{},reduction:{type:Boolean},tabindex:{},focus:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},primary:{type:Boolean},size:{},palette:{}},P),emits:[`load`,`click`,`clickLite`],setup(e,{expose:t,emit:r}){let o=r,s=e,c=n(()=>({main:{"d1-avatar":!0,"d1-avatar--focus":s.focus,"d1-avatar--disabled":s.disabled,"d1-avatar--readonly":s.readonly,"d1-avatar--primary":s.primary,[`d1-avatar--size--${s.size}`]:a(N.size,s.size),[`d1-palette d1-palette--${s.palette}`]:a(N.palette,s.palette)}})),d=n(()=>({})),f=new A(`d1.avatar`,s,{emits:o,classes:c,styles:d,components:{image:w,badge:O}}),p=f.render();return t(f.expose()),(e,t)=>(i(),u(l(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1Avatar`,exportName:`default`,displayName:`D1Avatar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/Avatar/D1Avatar.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{ee(),F(),B=[{name:`ariaLabel`,type:`string`},{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`reduction`,type:`boolean`},{name:`size`,type:`string`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`tabindex`,type:`string | number`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],V=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],U={component:`Avatar`,props:B,slots:V,events:H,defaults:P,wikiDesign:g}})))()}var G;function K(){return(K=e((()=>{f(),m(),W(),G=new te(U.component,U.props,U.defaults,U.wikiDesign,v,h)})))()}var fe=t({Avatar:()=>J,AvatarBasic:()=>Y,AvatarReduction:()=>X,AvatarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),ue(),q={title:`Ui/Avatar`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={},Y={name:`Базовые`,render:()=>({components:{D1Avatar:R},template:`
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