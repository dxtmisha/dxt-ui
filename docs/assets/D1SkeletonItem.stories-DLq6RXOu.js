import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Gt as n,Kt as r,Ut as i,Vt as a,Wt as o,Y as s,Yt as c,d as l,dn as u,dt as d,en as f,et as p,f as m,lt as h}from"./iframe-D7czqiJA.js";import{a as g,d as _,f as v,l as y,m as b,n as x,p as S,t as C,u as w}from"./wiki-CUC2UhNU.js";import{i as T,r as E}from"./SkeletonInclude-BayJaehb-COe2kTkL.js";import{n as D,t as O}from"./D1Skeleton-atWhpGi3.js";var k,A,j,M=t((()=>{v(),T(),a(),l(),k=class{constructor(e,t,n,r,i,a,o,s){S(this,`props`,void 0),S(this,`refs`,void 0),S(this,`element`,void 0),S(this,`classDesign`,void 0),S(this,`className`,void 0),S(this,`components`,void 0),S(this,`slots`,void 0),S(this,`emits`,void 0),S(this,`classesSkeleton`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s,this.classesSkeleton=E.getClassesListByDesign(r)}get tag(){return this.props.tag??`div`}get label(){return this.props.label||this.initLabel()}get classes(){return{[this.classesSkeleton.classText]:!!this.props.text,[this.classesSkeleton.classTextVariant]:!!this.props.textVariant,[this.classesSkeleton.classBackground]:!!this.props.background,[this.classesSkeleton.classBackgroundVariant]:!!this.props.backgroundVariant,[this.classesSkeleton.classBorder]:!!this.props.border,[this.classesSkeleton.classBorderVariant]:!!this.props.borderVariant}}get binds(){return{...this.props.itemAttrs,ref:this.element}}isObject(){return typeof this.props.tag==`object`}initLabel(){let e=this.props.length;return d(e)?s(e?.[0]??2,e?.[1]??6):h(e)?s(p(e),p(e)):String(this.props.length??``)}},A={tag:`div`,length:3},j=class extends m{constructor(e,t,n,r=k){super(e,t,n),S(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:this.item.classes}}initStyles(){return{}}initRender(){var e;let t=[],n={...this.getAttrs(),...this.item.binds,class:this.classes?.value.main};return this.initSlot(`default`,t),this.item.isObject()||(e=this.slots)!=null&&e.default?r(this.item.tag,n,this.item.isObject()?()=>t:t):r(this.item.tag,{...n,innerHTML:this.item.label})}}})),N,P=t((()=>{M(),N={...A}})),F=t((()=>{})),I,L=t((()=>{a(),M(),P(),F(),I=n({name:`D1SkeletonItem`,__name:`D1SkeletonItem`,props:c({tag:{},itemAttrs:{},label:{},length:{},text:{type:Boolean},textVariant:{type:Boolean},background:{type:Boolean},backgroundVariant:{type:Boolean},border:{type:Boolean},borderVariant:{type:Boolean}},N),setup(e,{expose:t,emit:n}){let r=n,a=e,s=new j(`d1.skeletonItem`,a,{emits:r,classes:i(()=>({main:{"d1-skeletonItem":!0,"d1-skeletonItem--text":a.text,"d1-skeletonItem--textVariant":a.textVariant,"d1-skeletonItem--background":a.background,"d1-skeletonItem--backgroundVariant":a.backgroundVariant,"d1-skeletonItem--border":a.border,"d1-skeletonItem--borderVariant":a.borderVariant}})),styles:i(()=>({}))}),c=s.render();return t(s.expose()),(e,t)=>(f(),o(u(c)))}})})),R,z=t((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1SkeletonItem`,exportName:`default`,displayName:`D1SkeletonItem`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/SkeletonItem/D1SkeletonItem.vue`]})})),B,V,H,U,W=t((()=>{C(),P(),B=[{name:`background`,type:`boolean`},{name:`backgroundVariant`,type:`boolean`},{name:`border`,type:`boolean`},{name:`borderVariant`,type:`boolean`},{name:`itemAttrs`,type:`Record<string, any>`},{name:`label`,type:`string | number`},{name:`length`,type:`string | number | [number, number]`},{name:`tag`,type:`string | any`},{name:`text`,type:`boolean`},{name:`textVariant`,type:`boolean`}],V=[{name:`default`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[],U={component:`SkeletonItem`,props:B,slots:V,events:H,defaults:N,wikiDesign:x}})),G,K=t((()=>{_(),y(),W(),G=new w(U.component,U.props,U.defaults,U.wikiDesign,g,b)})),q=e({SkeletonItem:()=>Y,SkeletonItemSkeleton:()=>X,__namedExportsOrder:()=>Z,default:()=>J}),J,Y,X,Z,Q=t((()=>{z(),K(),D(),J={title:`Ui/SkeletonItem`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1SkeletonItem:R},setup:()=>({args:e}),template:`
      <D1Skeleton :active="true">
      <div class="wiki-storybook-group">
        <D1SkeletonItem v-bind="args" text style="width: 200px;"/>
      </div>
    </D1Skeleton>
    `})},X={name:`Скелетон`,render:()=>({components:{D1SkeletonItem:R,D1Skeleton:O},template:`
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
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z=[`SkeletonItem`,`SkeletonItemSkeleton`]}));Q();export{Y as SkeletonItem,X as SkeletonItemSkeleton,Z as __namedExportsOrder,J as default,K as i,Q as n,G as r,q as t};