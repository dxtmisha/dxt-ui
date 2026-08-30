import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,N as s,Nt as c,Ot as l,P as u,Pt as d,bt as f,f as p,kt as m,sn as h}from"./library-CO1fW2cN.js";import{E as g,O as _,d as v,f as y,i as b,l as x,n as S,t as C,u as w}from"./wiki-BMj2WokS.js";import{r as T,t as E}from"./Skeleton-HYL6z7GR-DqgHaqAk.js";import{n as D,t as O}from"./D1Skeleton-0ed2Yx2u.js";var k,A,j;function M(){return(M=e((()=>{T(),m(),g(),l(),k=class{constructor(e,t,n,i,a,o,s,c){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),r(this,`classesSkeleton`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c,this.classesSkeleton=E.getClassesListByDesign(i)}get tag(){return this.props.tag??`div`}get label(){return this.props.label||this.initLabel()}get classes(){return{[this.classesSkeleton.classText]:!!this.props.text,[this.classesSkeleton.classTextVariant]:!!this.props.textVariant,[this.classesSkeleton.classBackground]:!!this.props.background,[this.classesSkeleton.classBackgroundVariant]:!!this.props.backgroundVariant,[this.classesSkeleton.classBorder]:!!this.props.border,[this.classesSkeleton.classBorderVariant]:!!this.props.borderVariant}}get binds(){return{...this.props.itemAttrs,ref:this.element}}isObject(){return typeof this.props.tag==`object`}initLabel(){let e=this.props.length;return u(e)?p(e?.[0]??2,e?.[1]??6):s(e)?p(f(e),f(e)):String(this.props.length??``)}},A={tag:`div`,length:3},j=class extends _{constructor(e,t,n,i=k){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:this.item.classes}}initStyles(){return{}}initRender(){var e;let t=[],n={...this.getAttrs(),...this.item.binds,class:this.classes?.value.main};return this.initSlot(`default`,t),this.item.isObject()||(e=this.slots)!=null&&e.default?o(this.item.tag,n,this.item.isObject()?()=>t:t):o(this.item.tag,{...n,innerHTML:this.item.label})}}})))()}var N;function P(){return(P=e((()=>{M(),N={...A}})))()}var F;function I(){return(I=e((()=>{m(),M(),P(),F=i({name:`D1SkeletonItem`,__name:`D1SkeletonItem`,props:n({tag:{},itemAttrs:{},label:{},length:{},text:{type:Boolean},textVariant:{type:Boolean},background:{type:Boolean},backgroundVariant:{type:Boolean},border:{type:Boolean},borderVariant:{type:Boolean}},N),setup(e,{expose:t,emit:n}){let r=n,i=e,o=c(()=>({main:{"d1-skeletonItem":!0,"d1-skeletonItem--text":i.text,"d1-skeletonItem--textVariant":i.textVariant,"d1-skeletonItem--background":i.background,"d1-skeletonItem--backgroundVariant":i.backgroundVariant,"d1-skeletonItem--border":i.border,"d1-skeletonItem--borderVariant":i.borderVariant}})),s=c(()=>({})),l=new j(`d1.skeletonItem`,i,{emits:r,classes:o,styles:s}),u=l.render();return t(l.expose()),(e,t)=>(a(),d(h(u)))}})})))()}var L;function R(){return(R=e((()=>{I(),L=F,F.__docgenInfo=Object.assign({displayName:F.name??F.__name},{name:`D1SkeletonItem`,exportName:`default`,displayName:`D1SkeletonItem`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/SkeletonItem/D1SkeletonItem.vue`]})})))()}var z,B,V,H;function U(){return(U=e((()=>{C(),P(),z=[{name:`background`,type:`boolean`},{name:`backgroundVariant`,type:`boolean`},{name:`border`,type:`boolean`},{name:`borderVariant`,type:`boolean`},{name:`itemAttrs`,type:`Record<string, any>`},{name:`label`,type:`string | number`},{name:`length`,type:`string | number | [number, number]`},{name:`tag`,type:`string | any`},{name:`text`,type:`boolean`},{name:`textVariant`,type:`boolean`}],B=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],V=[],H={component:`SkeletonItem`,props:z,slots:B,events:V,defaults:N,wikiDesign:S}})))()}var W;function G(){return(G=e((()=>{v(),x(),U(),W=new w(H.component,H.props,H.defaults,H.wikiDesign,b,y)})))()}var K=t({SkeletonItem:()=>J,SkeletonItemSkeleton:()=>Y,__namedExportsOrder:()=>X,default:()=>q}),q,J,Y,X;function Z(){return(Z=e((()=>{R(),G(),D(),q={title:`Ui/SkeletonItem`,component:L,parameters:{design:`d1`,docs:{description:{component:W.getDescription()}}},argTypes:W.getWiki(),args:W.getValues()},J={render:e=>({components:{D1SkeletonItem:L},setup:()=>({args:e}),template:`
      <D1Skeleton :active="true">
      <div class="wiki-storybook-group">
        <D1SkeletonItem v-bind="args" text style="width: 200px;"/>
      </div>
    </D1Skeleton>
    `})},Y={name:`Скелетон`,render:()=>({components:{D1SkeletonItem:L,D1Skeleton:O},template:`
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
    `})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`SkeletonItem`,`SkeletonItemSkeleton`]})))()}export{W as a,Z as i,J as n,G as o,Y as r,K as t};