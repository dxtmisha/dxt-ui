import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,F as r,Mt as i,Nt as a,Pt as o,Rt as s,Ut as c,Y as l,Z as u,an as d,jt as f,z as p}from"./library-BfcLFF_v.js";import{O as m,d as h,i as g,k as _,l as v,m as y,n as b,p as x,t as S,u as C}from"./wiki-BHyzKkJP.js";import{r as w,t as T}from"./Skeleton-CKY4TpB4-BJtCRCZA.js";import{n as E,t as D}from"./D1Skeleton-De6ny3D8.js";var O,k,A;function j(){return(j=e((()=>{w(),n(),m(),O=class{constructor(e,t,n,r,i,a,o,s){x(this,`props`,void 0),x(this,`refs`,void 0),x(this,`element`,void 0),x(this,`classDesign`,void 0),x(this,`className`,void 0),x(this,`components`,void 0),x(this,`slots`,void 0),x(this,`emits`,void 0),x(this,`classesSkeleton`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.classesSkeleton=T.getClassesListByDesign(r)}get tag(){return this.props.tag??`div`}get label(){return this.props.label||this.initLabel()}get classes(){return{[this.classesSkeleton.classText]:!!this.props.text,[this.classesSkeleton.classTextVariant]:!!this.props.textVariant,[this.classesSkeleton.classBackground]:!!this.props.background,[this.classesSkeleton.classBackgroundVariant]:!!this.props.backgroundVariant,[this.classesSkeleton.classBorder]:!!this.props.border,[this.classesSkeleton.classBorderVariant]:!!this.props.borderVariant}}get binds(){return{...this.props.itemAttrs,ref:this.element}}isObject(){return typeof this.props.tag==`object`}initLabel(){let e=this.props.length;return u(e)?r(e?.[0]??2,e?.[1]??6):l(e)?r(p(e),p(e)):String(this.props.length??``)}},k={tag:`div`,length:3},A=class extends _{constructor(e,t,n,r=O){super(e,t,n),x(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:this.item.classes}}initStyles(){return{}}initRender(){var e;let t=[],n={...this.getAttrs(),...this.item.binds,class:this.classes?.value.main};return this.initSlot(`default`,t),this.item.isObject()||(e=this.slots)!=null&&e.default?o(this.item.tag,n,this.item.isObject()?()=>t:t):o(this.item.tag,{...n,innerHTML:this.item.label})}}})))()}var M;function N(){return(N=e((()=>{j(),M={...k}})))()}var P;function F(){return(F=e((()=>{n(),j(),N(),P=a({name:`D1SkeletonItem`,__name:`D1SkeletonItem`,props:s({tag:{},itemAttrs:{},label:{},length:{},text:{type:Boolean},textVariant:{type:Boolean},background:{type:Boolean},backgroundVariant:{type:Boolean},border:{type:Boolean},borderVariant:{type:Boolean}},M),setup(e,{expose:t,emit:n}){let r=n,a=e,o=f(()=>({main:{"d1-skeletonItem":!0,"d1-skeletonItem--text":a.text,"d1-skeletonItem--textVariant":a.textVariant,"d1-skeletonItem--background":a.background,"d1-skeletonItem--backgroundVariant":a.backgroundVariant,"d1-skeletonItem--border":a.border,"d1-skeletonItem--borderVariant":a.borderVariant}})),s=f(()=>({})),l=new A(`d1.skeletonItem`,a,{emits:r,classes:o,styles:s}),u=l.render();return t(l.expose()),(e,t)=>(c(),i(d(u)))}})})))()}var I;function L(){return(L=e((()=>{F(),I=P,P.__docgenInfo=Object.assign({displayName:P.name??P.__name},{name:`D1SkeletonItem`,exportName:`default`,displayName:`D1SkeletonItem`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/SkeletonItem/D1SkeletonItem.vue`]})})))()}var R,z,B,V;function H(){return(H=e((()=>{S(),N(),R=[{name:`background`,type:`boolean`},{name:`backgroundVariant`,type:`boolean`},{name:`border`,type:`boolean`},{name:`borderVariant`,type:`boolean`},{name:`itemAttrs`,type:`Record<string, any>`},{name:`label`,type:`string | number`},{name:`length`,type:`string | number | [number, number]`},{name:`tag`,type:`string | any`},{name:`text`,type:`boolean`},{name:`textVariant`,type:`boolean`}],z=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],B=[],V={component:`SkeletonItem`,props:R,slots:z,events:B,defaults:M,wikiDesign:b}})))()}var U;function W(){return(W=e((()=>{h(),v(),H(),U=new C(V.component,V.props,V.defaults,V.wikiDesign,g,y)})))()}var G=t({SkeletonItem:()=>q,SkeletonItemSkeleton:()=>J,__namedExportsOrder:()=>Y,default:()=>K}),K,q,J,Y;function X(){return(X=e((()=>{L(),W(),E(),K={title:`Ui/SkeletonItem`,component:I,parameters:{design:`d1`,docs:{description:{component:U.getDescription()}}},argTypes:U.getWiki(),args:U.getValues()},q={render:e=>({components:{D1SkeletonItem:I},setup:()=>({args:e}),template:`
      <D1Skeleton :active="true">
      <div class="wiki-storybook-group">
        <D1SkeletonItem v-bind="args" text style="width: 200px;"/>
      </div>
    </D1Skeleton>
    `})},J={name:`Скелетон`,render:()=>({components:{D1SkeletonItem:I,D1Skeleton:D},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." text/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." textVariant/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." background/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." backgroundVariant/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." border/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." borderVariant/>
          </div>
        </D1Skeleton>
    `})},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1SkeletonItem
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Skeleton :active="true">
      <div class="wiki-storybook-group">
        <D1SkeletonItem v-bind="args" text style="width: 200px;"/>
      </div>
    </D1Skeleton>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1SkeletonItem,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." text/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." textVariant/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." background/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." backgroundVariant/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." border/>
            <D1SkeletonItem label="Lorem ipsum dolor sit amet..." borderVariant/>
          </div>
        </D1Skeleton>
    \`
  })
}`,...J.parameters?.docs?.source}}},Y=[`SkeletonItem`,`SkeletonItemSkeleton`]})))()}export{U as a,X as i,q as n,W as o,J as r,G as t};