import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,G as r,Mt as i,Nt as a,Pt as o,Rt as s,U as c,Ut as l,ct as u,in as d,jt as f,yt as p}from"./library-C6UyfMBX.js";import{D as m,d as h,f as g,g as _,i as v,n as y,s as b,t as x,u as S}from"./wiki-Cqdd-d3l.js";import{i as C,n as w}from"./Skeleton-RdmLWGpF-BW5HyvLG.js";import{n as T,t as E}from"./D1Skeleton-PNuSU8Wy.js";var D,O,k;function A(){return(A=e((()=>{w(),n(),m(),D=class{props;refs;element;classDesign;className;components;slots;emits;classesSkeleton;constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.classesSkeleton=C.getClassesListByDesign(r)}get tag(){return this.props.tag??`div`}get label(){return this.props.label||this.initLabel()}get classes(){return{[this.classesSkeleton.classText]:!!this.props.text,[this.classesSkeleton.classTextVariant]:!!this.props.textVariant,[this.classesSkeleton.classBackground]:!!this.props.background,[this.classesSkeleton.classBackgroundVariant]:!!this.props.backgroundVariant,[this.classesSkeleton.classBorder]:!!this.props.border,[this.classesSkeleton.classBorderVariant]:!!this.props.borderVariant}}get binds(){return{...this.props.itemAttrs,ref:this.element}}isObject(){return typeof this.props.tag==`object`}initLabel(){let e=this.props.length;return r(e)?u(e?.[0]??2,e?.[1]??6):c(e)?u(p(e),p(e)):String(this.props.length??``)}},O={tag:`div`,length:3},k=class extends _{item;constructor(e,t,n,r=D){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:this.item.classes}}initStyles(){return{}}initRender(){let e=[],t={...this.getAttrs(),...this.item.binds,class:this.classes?.value.main};return this.initSlot(`default`,e),this.item.isObject()||this.slots?.default?o(this.item.tag,t,this.item.isObject()?()=>e:e):o(this.item.tag,{...t,innerHTML:this.item.label})}}})))()}var j;function M(){return(M=e((()=>{A(),j={...O}})))()}var N;function P(){return(P=e((()=>{n(),A(),M(),N=a({name:`D1SkeletonItem`,__name:`D1SkeletonItem`,props:s({tag:{},itemAttrs:{},label:{},length:{},text:{type:Boolean},textVariant:{type:Boolean},background:{type:Boolean},backgroundVariant:{type:Boolean},border:{type:Boolean},borderVariant:{type:Boolean}},j),setup(e,{expose:t,emit:n}){let r=n,a=e,o=f(()=>({main:{"d1-skeletonItem":!0,"d1-skeletonItem--text":a.text,"d1-skeletonItem--textVariant":a.textVariant,"d1-skeletonItem--background":a.background,"d1-skeletonItem--backgroundVariant":a.backgroundVariant,"d1-skeletonItem--border":a.border,"d1-skeletonItem--borderVariant":a.borderVariant}})),s=f(()=>({})),c=new k(`d1.skeletonItem`,a,{emits:r,classes:o,styles:s}),u=c.render();return t(c.expose()),(e,t)=>(l(),i(d(u)))}})})))()}var F;function I(){return(I=e((()=>{P(),F=N,N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{name:`D1SkeletonItem`,exportName:`default`,displayName:`D1SkeletonItem`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/SkeletonItem/D1SkeletonItem.vue`]})})))()}var L,R,z,B;function V(){return(V=e((()=>{x(),M(),L=[{name:`background`,type:`boolean`},{name:`backgroundVariant`,type:`boolean`},{name:`border`,type:`boolean`},{name:`borderVariant`,type:`boolean`},{name:`itemAttrs`,type:`Record<string, any>`},{name:`label`,type:`string | number`},{name:`length`,type:`string | number | [number, number]`},{name:`tag`,type:`string | any`},{name:`text`,type:`boolean`},{name:`textVariant`,type:`boolean`}],R=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],z=[],B={component:`SkeletonItem`,props:L,slots:R,events:z,defaults:j,wikiDesign:y}})))()}var H;function U(){return(U=e((()=>{h(),b(),V(),H=new S(B.component,B.props,B.defaults,B.wikiDesign,v,g)})))()}var W=t({SkeletonItem:()=>K,SkeletonItemSkeleton:()=>q,__namedExportsOrder:()=>J,default:()=>G}),G,K,q,J;function Y(){return(Y=e((()=>{I(),U(),T(),G={title:`Ui/SkeletonItem`,component:F,parameters:{design:`d1`,docs:{description:{component:H.getDescription()}}},argTypes:H.getWiki(),args:H.getValues()},K={render:e=>({components:{D1SkeletonItem:F},setup:()=>({args:e}),template:`
      <D1Skeleton :active="true">
      <div class="wiki-storybook-group">
        <D1SkeletonItem v-bind="args" text style="width: 200px;"/>
      </div>
    </D1Skeleton>
    `})},q={name:`Скелетон`,render:()=>({components:{D1SkeletonItem:F,D1Skeleton:E},template:`
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
    `})},J=[`SkeletonItem`,`SkeletonItemSkeleton`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}})))()}export{H as a,Y as i,K as n,U as o,q as r,W as t};