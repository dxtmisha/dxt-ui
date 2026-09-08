import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,Z as c,an as l,at as u,ct as d,jt as f,ut as p,z as m}from"./library-BfcLFF_v.js";import{O as h,d as g,i as _,k as v,l as y,m as b,n as x,p as S,t as C,u as w}from"./wiki-BHyzKkJP.js";import{n as T,t as ee}from"./AriaStaticInclude-DoPfNULn-DLb49dmA.js";import{n as te,t as E}from"./SkeletonInclude-D8EZQoU2-CKX32yoW.js";import{n as D,t as O}from"./D1Skeleton-De6ny3D8.js";var k,A,j;function M(){return(M=e((()=>{ee(),te(),n(),h(),k=class{constructor(e,t,n,r,i,a,o,s,c={}){S(this,`props`,void 0),S(this,`refs`,void 0),S(this,`element`,void 0),S(this,`classDesign`,void 0),S(this,`className`,void 0),S(this,`components`,void 0),S(this,`slots`,void 0),S(this,`emits`,void 0),S(this,`skeleton`,void 0),S(this,`item`,f(()=>{let e=[],t=this.max,n=100;return this.standard.forEach(r=>{let i=this.getItem(r,t);e.push(i),n-=i.percent}),n>0&&e.push(this.getSpace(n)),e})),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{SkeletonIncludeConstructor:l=E}=c;this.skeleton=new l(e,r,[`classBackgroundVariant`])}get value(){let e=0;return this.standard.forEach(t=>{e+=m(t.value??0)}),e}get standard(){let e=this.props.value;return c(e)?e:d(e)?[e]:typeof e==`number`?[{value:e}]:typeof e==`string`?[{value:m(e)}]:[]}get max(){if(u(this.props.max))return m(this.props.max);let e=0;return this.standard.forEach(t=>{e+=m(t.value??0)}),e}getItemClassName(){return`${this.className}__item`}getItem(e,t){let n=e.color?void 0:e.palette??this.props.palette,r=e.color||!n&&this.props.color||null,i=100/t*m(e.value),a=this.getItemClassName();return{...e,percent:i,classes:{[`${a}--focus`]:!!this.props.focus&&this.props.focus===e.index,[`${a}--palette`]:!!n,[`${a}--color`]:!!r,[`${this.classDesign}-palette--${n}`]:!!n},style:{[`--${this.className}-sys-percent`]:`${i}%`,[`--${this.className}-sys-color`]:r},aria:{...T.role(`progressbar`),...T.valueMinMax(m(e.value),0,t),...T.label(e.label||`${Math.round(i)}%`)}}}getSpace(e){return{value:0,percent:e,classes:{[`${this.getItemClassName()}--space`]:!0},style:{[`--${this.className}-sys-percent`]:`${e}%`},aria:{...T.hidden()}}}},A={},j=class extends v{constructor(e,t,n,r=k){super(e,t,n),S(this,`item`,void 0),S(this,`renderItem`,e=>{let t=[];return e.label&&this.props.showLabel&&t.push(a(`div`,{class:{[this.classes?.value.itemLabel??``]:!0,[this.item.skeleton.classesSkeleton.classText]:this.props.isSkeleton}},e.label)),t.push(a(`div`,{class:{[this.classes?.value.itemProgress??``]:!0,[this.item.skeleton.classesSkeleton.classBackground]:this.props.isSkeleton}})),a(`div`,{class:{[this.classes?.value.item??``]:!0,...e.classes},style:e.style,"data-index":e.index,...e.aria},t)}),S(this,`renderList`,()=>{let e=[];return this.item.item.value.forEach(t=>e.push(this.renderItem(t))),e}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`),itemLabel:this.getSubClass(`item__label`),itemProgress:this.getSubClass(`item__progress`)}}initStyles(){return{}}initRender(){return a(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderList())}}})))()}var N,P;function F(){return(F=e((()=>{M(),N={palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...A}})))()}var I;function L(){return(L=e((()=>{n(),h(),M(),F(),I=i({name:`D1ProgressBar`,__name:`D1ProgressBar`,props:o({isSkeleton:{type:Boolean},focus:{},value:{},max:{},color:{},palette:{},showLabel:{type:Boolean},overlay:{type:Boolean}},P),setup(e,{expose:t,emit:n}){let i=n,a=e,o=f(()=>({main:{"d1-progressBar":!0,"d1-progressBar--overlay":a.overlay,[`d1-palette d1-palette--${a.palette}`]:p(N.palette,a.palette)}})),c=f(()=>({})),u=new j(`d1.progressBar`,a,{emits:i,classes:o,styles:c}),d=u.render();return t(u.expose()),(e,t)=>(s(),r(l(d)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ProgressBar`,exportName:`default`,displayName:`D1ProgressBar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/ProgressBar/D1ProgressBar.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{C(),F(),B=[{name:`color`,type:`string`},{name:`focus`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`max`,type:`string | number`},{name:`overlay`,type:`boolean`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`showLabel`,type:`boolean`},{name:`value`,type:`string | number | ProgressBarItem | ProgressBarList`}],V=[],H=[],U={component:`ProgressBar`,props:B,slots:V,events:H,defaults:P,wikiDesign:x}})))()}var G;function K(){return(K=e((()=>{g(),y(),W(),G=new w(U.component,U.props,U.defaults,U.wikiDesign,_,b)})))()}var q=t({ProgressBar:()=>Y,ProgressBarBasic:()=>X,ProgressBarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),D(),J={title:`Ui/ProgressBar`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1ProgressBar:R},template:`
        <div class="wiki-storybook-flex-column">
          <D1ProgressBar :value="50" />
          <D1ProgressBar :value="[
            { value: 25, color: '#ff4d4f' },
            { value: 35, color: '#52c41a' },
            { value: 20, color: '#1890ff' }
          ]" />
          <D1ProgressBar overlay :value="[
            { value: 15, color: '#faad14' },
            { value: 45, color: '#52c41a' },
            { value: 30, color: '#13c2c2' }
          ]" />
          <D1ProgressBar showLabel :value="[
            { value: 30, label: '30%', color: '#2f54eb' },
            { value: 40, label: '40%', color: '#722ed1' },
            { value: 30, label: '30%', color: '#eb2f96' }
          ]" />
        </div>
    `})},Z={name:`Скелетон`,render:()=>({components:{D1ProgressBar:R,D1Skeleton:O},template:`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1ProgressBar isSkeleton :value="50" />
            <D1ProgressBar isSkeleton showLabel :value="[
              { value: 30, label: '30%' },
              { value: 40, label: '40%' },
              { value: 30, label: '30%' }
            ]" />
          </div>
        </D1Skeleton>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Базовый',
  render: () => ({
    components: {
      D1ProgressBar
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1ProgressBar :value="50" />
          <D1ProgressBar :value="[
            { value: 25, color: '#ff4d4f' },
            { value: 35, color: '#52c41a' },
            { value: 20, color: '#1890ff' }
          ]" />
          <D1ProgressBar overlay :value="[
            { value: 15, color: '#faad14' },
            { value: 45, color: '#52c41a' },
            { value: 30, color: '#13c2c2' }
          ]" />
          <D1ProgressBar showLabel :value="[
            { value: 30, label: '30%', color: '#2f54eb' },
            { value: 40, label: '40%', color: '#722ed1' },
            { value: 30, label: '30%', color: '#eb2f96' }
          ]" />
        </div>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Скелетон',
  render: () => ({
    components: {
      D1ProgressBar,
      D1Skeleton
    },
    template: \`
        <D1Skeleton :active="true">
          <div class="wiki-storybook-flex-column">
            <D1ProgressBar isSkeleton :value="50" />
            <D1ProgressBar isSkeleton showLabel :value="[
              { value: 30, label: '30%' },
              { value: 40, label: '40%' },
              { value: 30, label: '30%' }
            ]" />
          </div>
        </D1Skeleton>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`ProgressBar`,`ProgressBarBasic`,`ProgressBarSkeleton`]})))()}export{$ as a,Z as i,Y as n,G as o,X as r,K as s,q as t};