import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Jt as i,Lt as a,Rt as o,Ut as s,an as c,d as l,u,ut as d,zt as f}from"./iframe-B-LNhFWZ.js";import{d as p,f as m,m as h,n as ee,o as te,p as g,s as ne,t as re,u as ie}from"./wiki-DgltPJFG.js";import{n as ae,t as oe}from"./EventClickInclude-CZp3MaKf-BMyn9He1.js";import{n as _,t as v}from"./AriaStaticInclude-D-DjeyB8-BwXGOxr0.js";import{n as y,t as b}from"./EnabledInclude-Bcyjipca-D30DbuWD.js";import{n as x,r as S}from"./SkeletonInclude-Bi65A7h5-4dLnLLb-.js";import{n as C,t as w}from"./LabelInclude-Bl_f3Vyy-FASr_2gn.js";import{a as T,o as E}from"./D1Image-gYJ5naQb.js";import{n as D,t as se}from"./Image-DIlRPU-x.js";import{a as ce,o as le}from"./D1Badge-3WjQHdRJ.js";import{n as ue,t as de}from"./Badge-BCR1aUCs.js";import{n as fe,t as O}from"./D1Skeleton-CxiItvxF.js";var k,A,j,M=t((()=>{v(),m(),b(),ae(),T(),x(),w(),ce(),r(),u(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`element`,void 0),g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`slots`,void 0),g(this,`emits`,void 0),g(this,`skeleton`,void 0),g(this,`enabled`,void 0),g(this,`image`,void 0),g(this,`label`,void 0),g(this,`badge`,void 0),g(this,`event`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{BadgeIncludeConstructor:l=le,ImageIncludeConstructor:u=E,LabelIncludeConstructor:d=C,SkeletonIncludeConstructor:f=S,EventClickIncludeConstructor:p=oe,EnabledIncludeConstructor:m=y}=c;this.skeleton=new f(e,r,[`classBackground`]),this.enabled=new m(e),this.image=new u(i,e,a,()=>({disabled:this.props.disabled}),s),this.label=new d(()=>this.labelProps,i,void 0,o,void 0,void 0,void 0,this.skeleton),this.badge=new l(i,e,a,{overlap:`circular`}),this.event=new p(e,this.enabled,s)}get tag(){return this.props.to||this.props.href?`a`:`div`}get binds(){return{...this.event.binds,tabindex:this.enabled.isEnabled?this.props.tabindex:void 0,..._.role(this.enabled.isEnabled?`button`:`img`),..._.label(this.props.ariaLabel??this.props.label)}}get classes(){return this.skeleton.classes}get labelProps(){return{label:this.getLabel(),labelId:this.props.labelId}}getLabel(){if(this.props.reduction){let e=this.props.label&&String(this.props.label).trim()||void 0;if(e)return e.split(/\s+/).slice(0,2).map(e=>e.charAt(0).toUpperCase()).join(``)}return this.props.label}},A=class extends l{constructor(e,t,n,r=k){super(e,t,n),g(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{...this.item.event.expose}}initClasses(){return{main:this.item.classes,label:this.getSubClass(`label`)}}initStyles(){return{}}initRender(){return n(this.item.tag,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main,...this.item.binds},[...this.item.label.render(),...this.item.image.render(),...this.item.badge.render()])}},j={reduction:!0,tabindex:`0`}})),N,P,F=t((()=>{M(),N={size:[`xs`,`sm`,`md`,`lg`,`xl`],palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...j,size:`md`}})),I=t((()=>{})),L,R=t((()=>{r(),u(),M(),D(),ue(),F(),I(),L=f({name:`D1Avatar`,__name:`D1Avatar`,props:s({label:{},labelId:{},image:{},imageAttrs:{},badge:{},badgeDot:{type:Boolean},badgeAttrs:{},isSkeleton:{type:Boolean},ariaLabel:{},to:{},href:{},value:{},detail:{},reduction:{type:Boolean},tabindex:{},focus:{type:Boolean},disabled:{type:Boolean},readonly:{type:Boolean},primary:{type:Boolean},size:{},palette:{}},P),emits:[`load`,`click`,`clickLite`],setup(e,{expose:t,emit:n}){let r=n,s=e,l=new A(`d1.avatar`,s,{emits:r,classes:a(()=>({main:{"d1-avatar":!0,"d1-avatar--focus":s.focus,"d1-avatar--disabled":s.disabled,"d1-avatar--readonly":s.readonly,"d1-avatar--primary":s.primary,[`d1-avatar--size--${s.size}`]:d(N.size,s.size),[`d1-palette d1-palette--${s.palette}`]:d(N.palette,s.palette)}})),styles:a(()=>({})),components:{image:se,badge:de}}),u=l.render();return t(l.expose()),(e,t)=>(i(),o(c(u)))}})})),z,B=t((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1Avatar`,exportName:`default`,displayName:`D1Avatar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Avatar/D1Avatar.vue`]})})),V,H,U,W,pe=t((()=>{re(),F(),V=[{name:`ariaLabel`,type:`string`},{name:`badge`,type:`string | number | ConstrBind<BadgeProps>`},{name:`badgeAttrs`,type:`ConstrBind<BadgeProps>`},{name:`badgeDot`,type:`boolean`},{name:`detail`,type:`Record<string, any>`},{name:`disabled`,type:`boolean`},{name:`focus`,type:`boolean`},{name:`href`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`isSkeleton`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`primary`,type:`boolean`},{name:`readonly`,type:`boolean`},{name:`reduction`,type:`boolean`},{name:`size`,type:`string`,option:[`xs`,`sm`,`md`,`lg`,`xl`]},{name:`tabindex`,type:`string | number`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`value`,type:`EventClickValue['value']`}],H=[{name:`default`,description:`Default slot content/ Содержимое слота по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],W={component:`Avatar`,props:V,slots:H,events:U,defaults:P,wikiDesign:ee}})),G,K=t((()=>{p(),ne(),pe(),G=new ie(W.component,W.props,W.defaults,W.wikiDesign,te,h)})),me=e({Avatar:()=>J,AvatarBasic:()=>Y,AvatarReduction:()=>X,AvatarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>q}),q,J,Y,X,Z,Q,$=t((()=>{B(),K(),fe(),q={title:`Ui/Avatar`,component:z,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},J={},Y={name:`Базовые`,render:()=>({components:{D1Avatar:z},template:`
        <div class="wiki-storybook-flex">
          <D1Avatar label="John Doe"/>
          <D1Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" label="User Image"/>
          <D1Avatar label="Online User" badgeDot/>
        </div>
    `})},X={name:`Сокращение (reduction)`,render:()=>({components:{D1Avatar:z},template:`
        <div class="wiki-storybook-flex">
          <D1Avatar label="Иван Иванович" :reduction="true"/>
          <D1Avatar label="Иван Иванович" :reduction="false"/>
        </div>
    `})},Z={name:`Загрузка скелетона`,render:()=>({components:{D1Avatar:z,D1Skeleton:O},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`Avatar`,`AvatarBasic`,`AvatarReduction`,`AvatarSkeleton`]}));$();export{J as Avatar,Y as AvatarBasic,X as AvatarReduction,Z as AvatarSkeleton,Q as __namedExportsOrder,q as default,K as i,$ as n,G as r,me as t};