import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Et as r,Ht as i,Lt as a,Mt as o,Nt as s,in as c,jt as l,rt as u,vt as d}from"./library-CUIf7uCS.js";import{O as f,d as p,k as m,l as h,m as g,n as _,p as v,r as y,t as b,u as x}from"./wiki-wIqBVsyI.js";var S,C,w;function T(){return(T=e((()=>{r(),f(),S=class{constructor(e,t,n,r,i,a,o,s){v(this,`props`,void 0),v(this,`refs`,void 0),v(this,`element`,void 0),v(this,`classDesign`,void 0),v(this,`className`,void 0),v(this,`components`,void 0),v(this,`slots`,void 0),v(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get item(){let e=this.props.value,t=this.props.unit;return u(e)&&this.props.formatting&&t?new d(this.props.language).format(e,t):e?.toString()||``}},C={formatting:!0},w=class extends m{constructor(e,t,n,r=S){super(e,t,n),v(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return s(`span`,{...this.getAttrs(),class:this.classes?.value.main},this.item.item)}}})))()}var E;function D(){return(D=e((()=>{T(),E={...C}})))()}var O;function k(){return(k=e((()=>{r(),T(),D(),O=o({name:`D1FormattedUnit`,__name:`D1FormattedUnit`,props:a({value:{},unit:{},formatting:{type:Boolean},language:{}},E),setup(e,{expose:t,emit:r}){let a=r,o=e,s=n(()=>({main:{"d1-formattedUnit":!0}})),u=n(()=>({})),d=new w(`d1.formattedUnit`,o,{emits:a,classes:s,styles:u}),f=d.render();return t(d.expose()),(e,t)=>(i(),l(c(f)))}})})))()}var A;function j(){return(j=e((()=>{k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1FormattedUnit`,exportName:`default`,displayName:`D1FormattedUnit`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/FormattedUnit/D1FormattedUnit.vue`]})})))()}var M,N,P,F;function I(){return(I=e((()=>{b(),D(),M=[{name:`formatting`,type:`boolean`},{name:`language`,type:`string`},{name:`unit`,type:`string`},{name:`value`,type:`NumberOrString`}],N=[],P=[],F={component:`FormattedUnit`,props:M,slots:N,events:P,defaults:E,wikiDesign:_}})))()}var L;function R(){return(R=e((()=>{p(),h(),I(),L=new x(F.component,F.props,F.defaults,F.wikiDesign,y,g)})))()}var z=t({FormattedUnit:()=>V,FormattedUnitBasic:()=>H,__namedExportsOrder:()=>U,default:()=>B}),B,V,H,U;function W(){return(W=e((()=>{j(),R(),B={title:`Ui/FormattedUnit`,component:A,parameters:{design:`d1`,docs:{description:{component:L.getDescription()}}},argTypes:L.getWiki(),args:L.getValues()},V={},H={name:`Базовые`,render:()=>({components:{D1FormattedUnit:A},template:`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="celsius" language="ru-RU"/> →
            <D1FormattedUnit :value="100" unit="celsius" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="1000" unit="gram" language="ru-RU"/> →
            <D1FormattedUnit :value="1000" unit="gram" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="kilometer-per-hour" language="en-US"/>
          </div>
        </div>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1FormattedUnit
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="celsius" language="ru-RU"/> →
            <D1FormattedUnit :value="100" unit="celsius" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="1000" unit="gram" language="ru-RU"/> →
            <D1FormattedUnit :value="1000" unit="gram" language="en-US"/>
          </div>
          <div class="wiki-storybook-row-gap">
            <D1FormattedUnit :value="100" unit="kilometer-per-hour" language="en-US"/>
          </div>
        </div>
    \`
  })
}`,...H.parameters?.docs?.source}}},U=[`FormattedUnit`,`FormattedUnitBasic`]})))()}export{L as a,W as i,V as n,R as o,H as r,z as t};