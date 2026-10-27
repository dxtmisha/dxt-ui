import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Pt as s,Rt as c,U as l,mn as u,tt as d}from"./library-ByXZ2YPj.js";import{_ as f,a as p,d as m,f as h,k as g,n as _,p as v,s as y,t as b}from"./wiki-CfN0XtvQ.js";var x,S,C;function w(){return(w=e((()=>{n(),g(),x=class{props;element;naming;components;slots;emits;constructor(e,t,n,r,i,a){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a}get item(){let e=this.props.value,t=this.props.unit;return l(e)&&this.props.formatting&&t?new d(this.props.language).format(e,t):e?.toString()||``}},S={formatting:!0},C=class extends f{item;constructor(e,t,n,r=x){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return c(`span`,{...this.getAttrs(),class:this.classes?.value.main},this.item.item)}}})))()}var T;function E(){return(E=e((()=>{w(),T={...S}})))()}var D;function O(){return(O=e((()=>{n(),w(),E(),D=a({name:`D1FormattedUnit`,__name:`D1FormattedUnit`,props:i({value:{},unit:{},formatting:{type:Boolean},language:{}},T),setup(e,{expose:t,emit:n}){let i=n,a=e,c=s(()=>({main:{"d1-formattedUnit":!0}})),l=s(()=>({})),d=new C(`d1.formattedUnit`,a,{emits:i,classes:c,styles:l}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(u(f)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1FormattedUnit`,exportName:`default`,displayName:`D1FormattedUnit`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/FormattedUnit/D1FormattedUnit.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{b(),E(),j=[{name:`formatting`,type:`boolean`},{name:`language`,type:`string`},{name:`unit`,type:`string`},{name:`value`,type:`NumberOrString`}],M=[],N=[],P={component:`FormattedUnit`,props:j,slots:M,events:N,defaults:T,wikiDesign:_}})))()}var I;function L(){return(L=e((()=>{h(),y(),F(),I=new m(P.component,P.props,P.defaults,P.wikiDesign,p,v)})))()}var R=t({FormattedUnit:()=>B,FormattedUnitBasic:()=>V,__namedExportsOrder:()=>H,default:()=>z}),z,B,V,H;function U(){return(U=e((()=>{A(),L(),z={title:`Ui/FormattedUnit`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={},V={name:`Базовые`,render:()=>({components:{D1FormattedUnit:k},template:`
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
    `})},H=[`FormattedUnit`,`FormattedUnitBasic`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}export{I as a,U as i,B as n,L as o,V as r,R as t};