import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,It as o,Nt as s,Ot as c,Pt as l,gt as u,kt as d,sn as f,tt as p}from"./library-CO1fW2cN.js";import{E as m,O as h,d as g,f as _,i as v,l as y,n as b,t as x,u as S}from"./wiki-BMj2WokS.js";var C,w,T;function E(){return(E=e((()=>{d(),m(),c(),C=class{constructor(e,t,n,i,a,o,s,c){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c}get item(){let e=this.props.value,t=this.props.unit;return u(e)&&this.props.formatting&&t?new p(this.props.language).format(e,t):e?.toString()||``}},w={formatting:!0},T=class extends h{constructor(e,t,n,i=C){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return o(`span`,{...this.getAttrs(),class:this.classes?.value.main},this.item.item)}}})))()}var D;function O(){return(O=e((()=>{E(),D={...w}})))()}var k;function A(){return(A=e((()=>{d(),E(),O(),k=i({name:`D1FormattedUnit`,__name:`D1FormattedUnit`,props:n({value:{},unit:{},formatting:{type:Boolean},language:{}},D),setup(e,{expose:t,emit:n}){let r=n,i=e,o=s(()=>({main:{"d1-formattedUnit":!0}})),c=s(()=>({})),u=new T(`d1.formattedUnit`,i,{emits:r,classes:o,styles:c}),d=u.render();return t(u.expose()),(e,t)=>(a(),l(f(d)))}})})))()}var j;function M(){return(M=e((()=>{A(),j=k,k.__docgenInfo=Object.assign({displayName:k.name??k.__name},{name:`D1FormattedUnit`,exportName:`default`,displayName:`D1FormattedUnit`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/FormattedUnit/D1FormattedUnit.vue`]})})))()}var N,P,F,I;function L(){return(L=e((()=>{x(),O(),N=[{name:`formatting`,type:`boolean`},{name:`language`,type:`string`},{name:`unit`,type:`string`},{name:`value`,type:`NumberOrString`}],P=[],F=[],I={component:`FormattedUnit`,props:N,slots:P,events:F,defaults:D,wikiDesign:b}})))()}var R;function z(){return(z=e((()=>{g(),y(),L(),R=new S(I.component,I.props,I.defaults,I.wikiDesign,v,_)})))()}var B=t({FormattedUnit:()=>H,FormattedUnitBasic:()=>U,__namedExportsOrder:()=>W,default:()=>V}),V,H,U,W;function G(){return(G=e((()=>{M(),z(),V={title:`Ui/FormattedUnit`,component:j,parameters:{design:`d1`,docs:{description:{component:R.getDescription()}}},argTypes:R.getWiki(),args:R.getValues()},H={},U={name:`Базовые`,render:()=>({components:{D1FormattedUnit:j},template:`
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
    `})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W=[`FormattedUnit`,`FormattedUnitBasic`]})))()}export{R as a,G as i,H as n,z as o,U as r,B as t};