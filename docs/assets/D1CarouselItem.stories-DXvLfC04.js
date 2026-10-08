import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,in as c,jt as l,nt as u}from"./library-C6UyfMBX.js";import{D as d,d as f,f as p,g as ee,i as m,n as h,s as g,t as _,u as v}from"./wiki-Cqdd-d3l.js";import{n as y,t as b}from"./EventClickInclude-BePe4mYM-CJXSyzTR.js";import{n as x,t as te}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as ne,t as S}from"./SkeletonInclude-DJOvNI6P-Cqd7JeSw.js";import{n as C,t as re}from"./ImageInclude-hU1Z946m-CdLR1X4P.js";import{n as w,t as T}from"./Image-J28XS_3L.js";import{n as E,t as D}from"./D1Skeleton-PNuSU8Wy.js";var O,k,A,j;function M(){return(M=e((()=>{te(),b(),re(),S(),n(),d(),O=class{props;constructor(e){this.props=e}get aria(){let e=this.isSelected();return{...x.role(this.role),...x.roledescription(`slide`),...x.label(this.label),...x.hidden(!e)}}get label(){if(this.props.ariaLabel)return this.props.ariaLabel;if(this.props.slide!==void 0)return this.props.total===void 0?String(this.props.slide):`${this.props.slide} / ${this.props.total}`}get role(){return this.props.role??`group`}get slide(){return this.props.slide}isSelected(){return!!this.props.selected}},k=class{props;refs;element;classDesign;className;components;slots;emits;data;event;image;skeleton;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{CarouselItemDataConstructor:l=O,EventClickIncludeConstructor:u=y,ImageIncludeConstructor:d=C,SkeletonIncludeConstructor:f=ne}=c;this.data=new l(e),this.skeleton=new f(e,r,[`classBackground`]),this.event=new u(e,void 0,s),this.image=new d(i,e,a,void 0,s)}get tag(){return this.props.tag?this.props.tag:this.props.to||this.props.href?`a`:`div`}get binds(){return{"data-value":this.props.value,...this.event.binds,...this.data.aria,tabindex:this.data.isSelected()?void 0:-1}}get classes(){return{...this.skeleton.classes}}},A=class extends ee{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{isSelected:()=>this.item.data.isSelected(),getSlide:()=>this.item.data.slide,...this.item.event.expose}}initClasses(){return{main:this.item.classes,body:this.getSubClass(`body`),image:this.getSubClass(`image`)}}initStyles(){return{}}initRender(){let e=[...this.item.image.render()];return this.initSlot(`default`,e,{selected:this.item.data.isSelected(),slide:this.item.data.slide}),a(this.item.tag,{...this.item.binds,ref:this.element,class:this.classes?.value.main,style:this.styles?.value},e)}},j={role:`group`,snap:`start`}})))()}var N,P;function F(){return(F=e((()=>{M(),N={snap:[`start`,`center`,`end`,`none`]},P={...j,snap:`start`}})))()}var I;function L(){return(L=e((()=>{n(),d(),M(),w(),F(),I=i({name:`D1CarouselItem`,__name:`D1CarouselItem`,props:o({image:{},imageAttrs:{},to:{},href:{},value:{},detail:{},index:{},isSkeleton:{type:Boolean},ariaLabel:{},role:{},slide:{},total:{},tag:{},selected:{type:Boolean},snap:{}},P),emits:[`load`,`click`,`clickLite`],setup(e,{expose:t,emit:n}){let i=n,a=e,o=l(()=>({main:{"d1-carouselItem":!0,"d1-carouselItem--selected":a.selected,[`d1-carouselItem--snap--${a.snap}`]:u(N.snap,a.snap)}})),d=l(()=>({})),f=new A(`d1.carouselItem`,a,{emits:i,classes:o,styles:d,components:{image:T}}),p=f.render();return t(f.expose()),(e,t)=>(s(),r(c(p)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1CarouselItem`,exportName:`default`,displayName:`D1CarouselItem`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/CarouselItem/D1CarouselItem.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{_(),F(),B=[{name:`ariaLabel`,type:`string`},{name:`detail`,type:`Record<string, any>`},{name:`href`,type:`string`},{name:`image`,type:`string | ConstrBind<ImagePropsBasic>`},{name:`imageAttrs`,type:`ConstrBind<ImagePropsBasic>`},{name:`index`,type:`string | number`},{name:`isSkeleton`,type:`boolean`},{name:`role`,type:`string`},{name:`selected`,type:`boolean`},{name:`slide`,type:`string | number`},{name:`snap`,type:`string`,option:[`start`,`center`,`end`,`none`]},{name:`tag`,type:`string`},{name:`to`,type:`string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric`},{name:`total`,type:`string | number`},{name:`value`,type:`EventClickValue['value']`}],V=[{name:`default`,description:`Default slot for slide content / Слот по умолчанию для содержимого слайда`,properties:[{name:`props`,type:`(CarouselItemSlotDefault) | undefined`}]}],H=[{name:`click`,description:`Full click event with MouseEvent/ Полное событие клика с MouseEvent`,properties:[{name:`event`,type:`MouseEvent`},{name:`value`,type:`EventClickValue`}]},{name:`clickLite`,description:`Lightweight click event/ Упрощённое событие клика`,properties:[{name:`value`,type:`EventClickValue`}]},{name:`load`,description:`Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`,properties:[{name:`image`,type:`ImageEventData`}]}],U={component:`CarouselItem`,props:B,slots:V,events:H,defaults:P,wikiDesign:h}})))()}var G;function K(){return(K=e((()=>{f(),g(),W(),G=new v(U.component,U.props,U.defaults,U.wikiDesign,m,p)})))()}var q=t({CarouselItem:()=>Y,CarouselItemSkeleton:()=>Z,CarouselItemSlot:()=>X,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),E(),J={title:`Ui/CarouselItem`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1CarouselItem:R},setup:()=>({args:e}),template:`
      <div class="wiki-storybook-item wiki-storybook-item--widescreen">
      <D1CarouselItem v-bind="args" />
    </div>
    `})},X={name:`Использование слотов`,render:()=>({components:{D1CarouselItem:R},template:`
        <div class="wiki-storybook-item wiki-storybook-item--widescreen">
          <D1CarouselItem>
            <template #default>Default slot</template>
          </D1CarouselItem>
        </div>
    `})},Z={name:`Состояние скелетона`,render:()=>({components:{D1CarouselItem:R,D1Skeleton:D},template:`
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