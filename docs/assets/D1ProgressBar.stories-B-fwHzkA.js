import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{$ as n,Gt as r,Kt as i,Ut as a,Vt as o,Wt as s,Yt as c,d as l,dn as u,dt as ee,en as te,et as d,f,ht as ne,yt as p}from"./iframe-D7czqiJA.js";import{a as re,d as m,f as h,l as g,m as _,n as v,p as y,t as b,u as x}from"./wiki-CUC2UhNU.js";import{n as S,t as C}from"./AriaStaticInclude-BsKgXpT8-Crt3dq7t.js";import{n as w,t as T}from"./SkeletonInclude-BayJaehb-COe2kTkL.js";import{n as E,t as D}from"./D1Skeleton-atWhpGi3.js";var O,k,A,j=t((()=>{C(),h(),w(),o(),l(),O=class{constructor(e,t,n,r,i,o,s,c,l={}){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),y(this,`skeleton`,void 0),y(this,`item`,a(()=>{let e=[],t=this.max,n=100;return this.standard.forEach(r=>{let i=this.getItem(r,t);e.push(i),n-=i.percent}),n>0&&e.push(this.getSpace(n)),e})),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=o,this.slots=s,this.emits=c;let{SkeletonIncludeConstructor:u=T}=l;this.skeleton=new u(e,r,[`classBackgroundVariant`])}get value(){let e=0;return this.standard.forEach(t=>{e+=d(t.value??0)}),e}get standard(){let e=this.props.value;return ee(e)?e:p(e)?[e]:typeof e==`number`?[{value:e}]:typeof e==`string`?[{value:d(e)}]:[]}get max(){if(ne(this.props.max))return d(this.props.max);let e=0;return this.standard.forEach(t=>{e+=d(t.value??0)}),e}getItemClassName(){return`${this.className}__item`}getItem(e,t){let n=e.color?void 0:e.palette??this.props.palette,r=e.color||!n&&this.props.color||null,i=100/t*d(e.value),a=this.getItemClassName();return{...e,percent:i,classes:{[`${a}--focus`]:!!this.props.focus&&this.props.focus===e.index,[`${a}--palette`]:!!n,[`${a}--color`]:!!r,[`${this.classDesign}-palette--${n}`]:!!n},style:{[`--${this.className}-sys-percent`]:`${i}%`,[`--${this.className}-sys-color`]:r},aria:{...S.role(`progressbar`),...S.valueMinMax(d(e.value),0,t),...S.label(e.label||`${Math.round(i)}%`)}}}getSpace(e){return{value:0,percent:e,classes:{[`${this.getItemClassName()}--space`]:!0},style:{[`--${this.className}-sys-percent`]:`${e}%`},aria:{...S.hidden()}}}},k={},A=class extends f{constructor(e,t,n,r=O){super(e,t,n),y(this,`item`,void 0),y(this,`renderItem`,e=>{let t=[];return e.label&&this.props.showLabel&&t.push(i(`div`,{class:{[this.classes?.value.itemLabel??``]:!0,[this.item.skeleton.classesSkeleton.classText]:this.props.isSkeleton}},e.label)),t.push(i(`div`,{class:{[this.classes?.value.itemProgress??``]:!0,[this.item.skeleton.classesSkeleton.classBackground]:this.props.isSkeleton}})),i(`div`,{class:{[this.classes?.value.item??``]:!0,...e.classes},style:e.style,"data-index":e.index,...e.aria},t)}),y(this,`renderList`,()=>{let e=[];return this.item.item.value.forEach(t=>e.push(this.renderItem(t))),e}),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`),itemLabel:this.getSubClass(`item__label`),itemProgress:this.getSubClass(`item__progress`)}}initStyles(){return{}}initRender(){return i(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderList())}}})),M,N,P=t((()=>{j(),M={palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},N={...k}})),F=t((()=>{})),I,L=t((()=>{o(),l(),j(),P(),F(),I=r({name:`D1ProgressBar`,__name:`D1ProgressBar`,props:c({isSkeleton:{type:Boolean},focus:{},value:{},max:{},color:{},palette:{},showLabel:{type:Boolean},overlay:{type:Boolean}},N),setup(e,{expose:t,emit:r}){let i=r,o=e,c=new A(`d1.progressBar`,o,{emits:i,classes:a(()=>({main:{"d1-progressBar":!0,"d1-progressBar--overlay":o.overlay,[`d1-palette d1-palette--${o.palette}`]:n(M.palette,o.palette)}})),styles:a(()=>({}))}),l=c.render();return t(c.expose()),(e,t)=>(te(),s(u(l)))}})})),R,z=t((()=>{L(),L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ProgressBar`,exportName:`default`,displayName:`D1ProgressBar`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/ProgressBar/D1ProgressBar.vue`]})})),B,V,H,U,W=t((()=>{b(),P(),B=[{name:`color`,type:`string`},{name:`focus`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`max`,type:`string | number`},{name:`overlay`,type:`boolean`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`showLabel`,type:`boolean`},{name:`value`,type:`string | number | ProgressBarItem | ProgressBarList`}],V=[],H=[],U={component:`ProgressBar`,props:B,slots:V,events:H,defaults:N,wikiDesign:v}})),G,K=t((()=>{m(),g(),W(),G=new x(U.component,U.props,U.defaults,U.wikiDesign,re,_)})),q=e({ProgressBar:()=>Y,ProgressBarBasic:()=>X,ProgressBarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{z(),K(),E(),J={title:`Ui/ProgressBar`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1ProgressBar:R},template:`
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
    `})},Z={name:`Скелетон`,render:()=>({components:{D1ProgressBar:R,D1Skeleton:D},template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`ProgressBar`,`ProgressBarBasic`,`ProgressBarSkeleton`]}));$();export{Y as ProgressBar,X as ProgressBarBasic,Z as ProgressBarSkeleton,Q as __namedExportsOrder,J as default,K as i,$ as n,G as r,q as t};