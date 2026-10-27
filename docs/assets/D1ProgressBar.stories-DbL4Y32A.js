import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,B as r,D as i,Ft as a,Ht as o,It as s,Jt as c,Pt as l,Rt as u,U as d,_t as f,ft as p,mn as ee}from"./library-ByXZ2YPj.js";import{_ as m,a as h,d as g,f as _,k as v,n as y,p as b,s as x,t as S}from"./wiki-CfN0XtvQ.js";import{n as C,t as w}from"./AriaStaticInclude-B7pfWpnd-ByY5HQzX.js";import{n as T,t as E}from"./SkeletonInclude-CIeNLqUF-vgVNOtFs.js";import{n as D,t as O}from"./D1Skeleton-fWB3UQoT.js";var k,A,j;function M(){return(M=e((()=>{w(),E(),n(),v(),k=class{props;element;naming;components;slots;emits;skeleton;constructor(e,t,n,r,i,a,o={}){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a;let{SkeletonIncludeConstructor:s=T}=o;this.skeleton=new s(e,n,[`classBackgroundVariant`])}get value(){let e=0;return this.standard.forEach(t=>{e+=r(t.value??0)}),e}get standard(){let e=this.props.value;return f(e)?e:p(e)?[e]:typeof e==`number`?[{value:e}]:typeof e==`string`?[{value:r(e)}]:[]}get max(){if(d(this.props.max))return r(this.props.max);let e=0;return this.standard.forEach(t=>{e+=r(t.value??0)}),e}item=l(()=>{let e=[],t=this.max,n=100;return this.standard.forEach(r=>{let i=this.getItem(r,t);e.push(i),n-=i.percent}),n>0&&e.push(this.getSpace(n)),e});getItemClassName(){return this.naming.getSubClass(`item`)}getItem(e,t){let n=e.color?void 0:e.palette??this.props.palette,i=e.color||!n&&this.props.color||null,a=100/t*r(e.value),o=this.getItemClassName();return{...e,percent:a,classes:{[`${o}--focus`]:!!this.props.focus&&this.props.focus===e.index,[`${o}--palette`]:!!n,[`${o}--color`]:!!i,[`${this.naming.getDesign()}-palette--${n}`]:!!n},style:{[this.naming.getStyle(`percent`)]:`${a}%`,[this.naming.getStyle(`color`)]:i},aria:{...C.role(`progressbar`),...C.valueMinMax(r(e.value),0,t),...C.label(e.label||`${Math.round(a)}%`)}}}getSpace(e){return{value:0,percent:e,classes:{[`${this.getItemClassName()}--space`]:!0},style:{[this.naming.getStyle(`percent`)]:`${e}%`},aria:{...C.hidden()}}}},A={},j=class extends m{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{},item:this.naming.getSubClass(`item`),itemLabel:this.naming.getSubClass(`item__label`),itemProgress:this.naming.getSubClass(`item__progress`)}}initStyles(){return{}}initRender(){return u(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderList())}renderItem=e=>{let t=[];return e.label&&this.props.showLabel&&t.push(u(`div`,{class:{[this.classes?.value.itemLabel??``]:!0,[this.item.skeleton.classesSkeleton.classText]:this.props.isSkeleton}},e.label)),t.push(u(`div`,{class:{[this.classes?.value.itemProgress??``]:!0,[this.item.skeleton.classesSkeleton.classBackground]:this.props.isSkeleton}})),u(`div`,{class:{[this.classes?.value.item??``]:!0,...e.classes},style:e.style,"data-index":e.index,...e.aria},t)};renderList=()=>{let e=[];return this.item.item.value.forEach(t=>e.push(this.renderItem(t))),e}}})))()}var N,P;function F(){return(F=e((()=>{M(),N={palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...A}})))()}var I;function L(){return(L=e((()=>{n(),v(),M(),F(),I=s({name:`D1ProgressBar`,__name:`D1ProgressBar`,props:o({isSkeleton:{type:Boolean},focus:{},value:{},max:{},color:{},palette:{},showLabel:{type:Boolean},overlay:{type:Boolean}},P),setup(e,{expose:t,emit:n}){let r=n,o=e,s=l(()=>({main:{"d1-progressBar":!0,"d1-progressBar--overlay":o.overlay,[`d1-palette d1-palette--${o.palette}`]:i(N.palette,o.palette)}})),u=l(()=>({})),d=new j(`d1.progressBar`,o,{emits:r,classes:s,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(c(),a(ee(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ProgressBar`,exportName:`default`,displayName:`D1ProgressBar`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ProgressBar/D1ProgressBar.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{S(),F(),B=[{name:`color`,type:`string`},{name:`focus`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`max`,type:`string | number`},{name:`overlay`,type:`boolean`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`showLabel`,type:`boolean`},{name:`value`,type:`string | number | ProgressBarItem | ProgressBarList`}],V=[],H=[],U={component:`ProgressBar`,props:B,slots:V,events:H,defaults:P,wikiDesign:y}})))()}var G;function K(){return(K=e((()=>{_(),x(),W(),G=new g(U.component,U.props,U.defaults,U.wikiDesign,h,b)})))()}var q=t({ProgressBar:()=>Y,ProgressBarBasic:()=>X,ProgressBarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),D(),J={title:`Ui/ProgressBar`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1ProgressBar:R},template:`
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
    `})},Q=[`ProgressBar`,`ProgressBarBasic`,`ProgressBarSkeleton`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,Z as i,Y as n,G as o,X as r,K as s,q as t};