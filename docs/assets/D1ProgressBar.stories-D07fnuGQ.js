import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,G as r,Mt as i,Nt as a,Pt as o,Rt as s,Ut as c,X as l,in as u,jt as d,nt as ee,tt as f,yt as p}from"./library-C6UyfMBX.js";import{D as m,d as h,f as g,g as _,i as v,n as y,s as b,t as x,u as S}from"./wiki-Cqdd-d3l.js";import{n as C,t as w}from"./AriaStaticInclude-B7pfWpnd-C1oc8ai_.js";import{n as T,t as E}from"./SkeletonInclude-DJOvNI6P-Cqd7JeSw.js";import{n as D,t as O}from"./D1Skeleton-PNuSU8Wy.js";var k,A,j;function M(){return(M=e((()=>{w(),E(),n(),m(),k=class{props;refs;element;classDesign;className;components;slots;emits;skeleton;constructor(e,t,n,r,i,a,o,s,c={}){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s;let{SkeletonIncludeConstructor:l=T}=c;this.skeleton=new l(e,r,[`classBackgroundVariant`])}get value(){let e=0;return this.standard.forEach(t=>{e+=p(t.value??0)}),e}get standard(){let e=this.props.value;return r(e)?e:f(e)?[e]:typeof e==`number`?[{value:e}]:typeof e==`string`?[{value:p(e)}]:[]}get max(){if(l(this.props.max))return p(this.props.max);let e=0;return this.standard.forEach(t=>{e+=p(t.value??0)}),e}item=d(()=>{let e=[],t=this.max,n=100;return this.standard.forEach(r=>{let i=this.getItem(r,t);e.push(i),n-=i.percent}),n>0&&e.push(this.getSpace(n)),e});getItemClassName(){return`${this.className}__item`}getItem(e,t){let n=e.color?void 0:e.palette??this.props.palette,r=e.color||!n&&this.props.color||null,i=100/t*p(e.value),a=this.getItemClassName();return{...e,percent:i,classes:{[`${a}--focus`]:!!this.props.focus&&this.props.focus===e.index,[`${a}--palette`]:!!n,[`${a}--color`]:!!r,[`${this.classDesign}-palette--${n}`]:!!n},style:{[`--${this.className}-sys-percent`]:`${i}%`,[`--${this.className}-sys-color`]:r},aria:{...C.role(`progressbar`),...C.valueMinMax(p(e.value),0,t),...C.label(e.label||`${Math.round(i)}%`)}}}getSpace(e){return{value:0,percent:e,classes:{[`${this.getItemClassName()}--space`]:!0},style:{[`--${this.className}-sys-percent`]:`${e}%`},aria:{...C.hidden()}}}},A={},j=class extends _{item;constructor(e,t,n,r=k){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{},item:this.getSubClass(`item`),itemLabel:this.getSubClass(`item__label`),itemProgress:this.getSubClass(`item__progress`)}}initStyles(){return{}}initRender(){return o(`div`,{...this.getAttrs(),ref:this.element,class:this.classes?.value.main},this.renderList())}renderItem=e=>{let t=[];return e.label&&this.props.showLabel&&t.push(o(`div`,{class:{[this.classes?.value.itemLabel??``]:!0,[this.item.skeleton.classesSkeleton.classText]:this.props.isSkeleton}},e.label)),t.push(o(`div`,{class:{[this.classes?.value.itemProgress??``]:!0,[this.item.skeleton.classesSkeleton.classBackground]:this.props.isSkeleton}})),o(`div`,{class:{[this.classes?.value.item??``]:!0,...e.classes},style:e.style,"data-index":e.index,...e.aria},t)};renderList=()=>{let e=[];return this.item.item.value.forEach(t=>e.push(this.renderItem(t))),e}}})))()}var N,P;function F(){return(F=e((()=>{M(),N={palette:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},P={...A}})))()}var I;function L(){return(L=e((()=>{n(),m(),M(),F(),I=a({name:`D1ProgressBar`,__name:`D1ProgressBar`,props:s({isSkeleton:{type:Boolean},focus:{},value:{},max:{},color:{},palette:{},showLabel:{type:Boolean},overlay:{type:Boolean}},P),setup(e,{expose:t,emit:n}){let r=n,a=e,o=d(()=>({main:{"d1-progressBar":!0,"d1-progressBar--overlay":a.overlay,[`d1-palette d1-palette--${a.palette}`]:ee(N.palette,a.palette)}})),s=d(()=>({})),l=new j(`d1.progressBar`,a,{emits:r,classes:o,styles:s}),f=l.render();return t(l.expose()),(e,t)=>(c(),i(u(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1ProgressBar`,exportName:`default`,displayName:`D1ProgressBar`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/ProgressBar/D1ProgressBar.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{x(),F(),B=[{name:`color`,type:`string`},{name:`focus`,type:`string`},{name:`isSkeleton`,type:`boolean`},{name:`max`,type:`string | number`},{name:`overlay`,type:`boolean`},{name:`palette`,type:`string`,option:[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`slate`,`gray`,`zinc`,`neutral`,`stone`,`black`,`white`]},{name:`showLabel`,type:`boolean`},{name:`value`,type:`string | number | ProgressBarItem | ProgressBarList`}],V=[],H=[],U={component:`ProgressBar`,props:B,slots:V,events:H,defaults:P,wikiDesign:y}})))()}var G;function K(){return(K=e((()=>{h(),b(),W(),G=new S(U.component,U.props,U.defaults,U.wikiDesign,v,g)})))()}var q=t({ProgressBar:()=>Y,ProgressBarBasic:()=>X,ProgressBarSkeleton:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),D(),J={title:`Ui/ProgressBar`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={},X={name:`Базовый`,render:()=>({components:{D1ProgressBar:R},template:`
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