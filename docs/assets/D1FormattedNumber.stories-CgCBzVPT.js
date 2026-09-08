import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{C as n,Dt as r,Mt as i,Nt as a,Pt as o,Rt as s,Ut as c,an as l,at as u,jt as d}from"./library-BfcLFF_v.js";import{O as f,d as p,i as m,k as h,l as g,m as _,n as v,p as y,t as b,u as x}from"./wiki-BHyzKkJP.js";var S,C,w;function T(){return(T=e((()=>{r(),f(),S=class{constructor(e,t,n,r,i,a,o,s){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get item(){let e=this.props.value;if(u(e)&&this.props.formatting){let t=new n(this.props.language);return this.props.currency?t.currency(e,this.props.currency):this.props.unit?t.unit(e,this.props.unit):t.number(e)}return e?.toString()||``}},C={formatting:!0},w=class extends h{constructor(e,t,n,r=S){super(e,t,n),y(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return o(`span`,{...this.getAttrs(),class:this.classes?.value.main},this.item.item)}}})))()}var E;function D(){return(D=e((()=>{T(),E={...C}})))()}var O;function k(){return(k=e((()=>{r(),T(),D(),O=a({name:`D1FormattedNumber`,__name:`D1FormattedNumber`,props:s({value:{},currency:{},unit:{},formatting:{type:Boolean},language:{}},E),setup(e,{expose:t,emit:n}){let r=n,a=e,o=d(()=>({main:{"d1-formattedNumber":!0}})),s=d(()=>({})),u=new w(`d1.formattedNumber`,a,{emits:r,classes:o,styles:s}),f=u.render();return t(u.expose()),(e,t)=>(c(),i(l(f)))}})})))()}var A;function j(){return(j=e((()=>{k(),A=O,O.__docgenInfo=Object.assign({displayName:O.name??O.__name},{name:`D1FormattedNumber`,exportName:`default`,displayName:`D1FormattedNumber`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/FormattedNumber/D1FormattedNumber.vue`]})})))()}var M,N,P,F;function I(){return(I=e((()=>{b(),D(),M=[{name:`currency`,type:`string`},{name:`formatting`,type:`boolean`},{name:`language`,type:`string`},{name:`unit`,type:`string`},{name:`value`,type:`NumberOrString`}],N=[],P=[],F={component:`FormattedNumber`,props:M,slots:N,events:P,defaults:E,wikiDesign:v}})))()}var L;function R(){return(R=e((()=>{p(),g(),I(),L=new x(F.component,F.props,F.defaults,F.wikiDesign,m,_)})))()}var z=t({FormattedNumber:()=>V,FormattedNumberBasic:()=>H,__namedExportsOrder:()=>U,default:()=>B}),B,V,H,U;function W(){return(W=e((()=>{j(),R(),B={title:`Ui/FormattedNumber`,component:A,parameters:{design:`d1`,docs:{description:{component:L.getDescription()}}},argTypes:L.getWiki(),args:L.getValues()},V={},H={name:`Базовые`,render:()=>({components:{D1FormattedNumber:A},template:`
        <div class="wiki-storybook-flex-column">
          <D1FormattedNumber :value="1234567.89"/>
          <D1FormattedNumber :value="1234567.89" currency="USD"/>
          <D1FormattedNumber :value="1234567.89" unit="kilogram"/>
          <D1FormattedNumber :value="1234567.89" :formatting="false"/>
        </div>
    `})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1FormattedNumber
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1FormattedNumber :value="1234567.89"/>
          <D1FormattedNumber :value="1234567.89" currency="USD"/>
          <D1FormattedNumber :value="1234567.89" unit="kilogram"/>
          <D1FormattedNumber :value="1234567.89" :formatting="false"/>
        </div>
    \`
  })
}`,...H.parameters?.docs?.source}}},U=[`FormattedNumber`,`FormattedNumberBasic`]})))()}export{L as a,W as i,V as n,R as o,H as r,z as t};