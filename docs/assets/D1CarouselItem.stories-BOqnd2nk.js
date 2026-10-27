import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,D as r,Ft as i,Ht as a,It as o,Jt as s,Pt as c,Rt as l,mn as u}from"./library-ByXZ2YPj.js";import{_ as d,a as f,d as p,f as ee,k as m,n as h,p as g,s as _,t as v}from"./wiki-CfN0XtvQ.js";import{n as y,t as te}from"./EventClickInclude-BePe4mYM-K44ha_OT.js";import{n as b,t as x}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as ne,t as S}from"./SkeletonInclude-CIeNLqUF-vgVNOtFs.js";import{n as C,t as w}from"./ImageInclude-CwOv50rs-CDvVPyXe.js";import{n as T,t as E}from"./Image-AOghbe00.js";import{n as D,t as re}from"./D1Skeleton-fWB3UQoT.js";var O,k,A,j;function M(){return(M=e((()=>{x(),te(),w(),S(),n(),m(),O=class{props;constructor(e){this.props=e}get aria(){let e=this.isSelected();return{...b.role(this.role),...b.roledescription(`slide`),...b.label(this.label),...b.hidden(!e)}}get label(){if(this.props.ariaLabel)return this.props.ariaLabel;if(this.props.slide!==void 0)return this.props.total===void 0?String(this.props.slide):`${this.props.slide} / ${this.props.total}`}get role(){return this.props.role??`group`}get slide(){return this.props.slide}isSelected(){return!!this.props.selected}},k=class{props;element;naming;components;slots;emits;data;event;image;skeleton;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{CarouselItemDataConstructor:s=O,EventClickIncludeConstructor:c=y,ImageIncludeConstructor:l=C,SkeletonIncludeConstructor:u=ne}=o;this.data=new s(e),this.skeleton=new u(e,n,[`classBackground`]),this.event=new c(e,void 0,a),this.image=new l(n,e,r,void 0,a)}get tag(){return this.props.tag?this.props.tag:this.props.to||this.props.href?`a`:`div`}get binds(){return{"data-value":this.props.value,...this.event.binds,...this.data.aria,tabindex:this.data.isSelected()?void 0:-1}}get classes(){return{...this.skeleton.classes}}},A=class extends d{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{isSelected:()=>this.item.data.isSelected(),getSlide:()=>this.item.data.slide,...this.item.event.expose}}initClasses(){return{main:this.item.classes,body:this.naming.getSubClass(`body`),image:this.naming.getSubClass(`image`)}}initStyles(){return{}}initRender(){let e=[...this.item.image.render()];return this.initSlot(`default`,e,{selected:this.item.data.isSelected(),slide:this.item.data.slide}),l(this.item.tag,{...this.item.binds,ref:this.element,class:this.classes?.value.main,style:this.styles?.value},e)}},j={role:`group`,snap:`start`}})))()}var N,P;function F(){return(F=e((()=>{M(),N={snap:[`start`,`center`,`end`,`none`]},P={...j,snap:`start`}})))()}var I;function L(){return(L=e((()=>{n(),m(),M(),T(),F(),I=o({name:`D1CarouselItem`,__name:`D1CarouselItem`,props:a({image:{},imageAttrs:{},to:{},href:{},value:{},detail:{},index:{},isSkeleton:{type:Boolean},ariaLabel:{},role:{},slide:{},total:{},tag:{},selected:{type:Boolean},snap:{}},P),emits:[`load`,`click`,`clickLite`],setup(e,{expose:t,emit:n}){let a=n,o=e,l=c(()=>({main:{"d1-carouselItem":!0,"d1-carouselItem--selected":o.selected,[`d1-carouselItem--snap--${o.snap}`]:r(N.snap,o.snap)}})),d=c(()=>({})),f=new A(`d1.carouselItem`,o,{emits:a,classes:l,styles:d,components:{image:E}}),p=f.render();return t(f.expose()),(e,t)=>(s(),i(u(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1CarouselItem`,exportName:`default`,displayName:`D1CarouselItem`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/CarouselItem/D1CarouselItem.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{v(),F(),B=[{name:`ariaLabel`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`href`,type:`string`},{name:`image`,type:`string | ConstrBind<ImageProps>`},{name:`imageAttrs`,type:`ConstrBind<ImageProps>`},{name:`index`,type:`string | number`},{name:`isSkeleton`,type:`boolean`},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`slide`,type:`string | number`},{name:`snap`,type:`string`,option:[`start`,`center`,`end`,`none`]},{name:`tag`,type:`string`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`total`,type:`string | number`},{name:`value`,type:`EventClickValue['value']`}],V=[{name:`default`,description:`Default slot for slide content / Слот по умолчанию для содержимого слайда`,properties:[{name:`props`,type:`(CarouselItemSlotDefault) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded / Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],U={component:`CarouselItem`,props:B,slots:V,events:H,defaults:P,wikiDesign:h}})))()}var G;function K(){return(K=e((()=>{ee(),_(),W(),G=new p(U.component,U.props,U.defaults,U.wikiDesign,f,g)})))()}var q=t({CarouselItem:()=>Y,CarouselItemSkeleton:()=>Z,CarouselItemSlot:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),D(),J={title:`Ui/CarouselItem`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1CarouselItem:R},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <D1CarouselItem v-bind="args" />
    </div>
    `})},X={name:`Использование слотов`,render:()=>({components:{D1CarouselItem:R},template:`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen">
          <D1CarouselItem>
            <template #default>Default slot</template>
          </D1CarouselItem>
        </div>
    `})},Z={name:`Состояние скелетона`,render:()=>({components:{D1CarouselItem:R,D1Skeleton:re},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CarouselItem isSkeleton />
          </div>
        </D1Skeleton>
    `})},Q=[`CarouselItem`,`CarouselItemSlot`,`CarouselItemSkeleton`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1CarouselItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <D1CarouselItem v-bind="args" />
    </div>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1CarouselItem
    },
    template: \`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen">
          <D1CarouselItem>
            <template #default>Default slot</template>
          </D1CarouselItem>
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Состояние скелетона',
  render: () => ({
    components: {
      D1CarouselItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-item wiki-storybook-item--widescreen">
            <D1CarouselItem isSkeleton />
          </div>
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,q as i,Z as n,G as o,X as r,K as s,Y as t};