import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{At as n,Ft as r,Ht as i,It as a,Jt as o,Pt as s,Rt as c,U as l,h as u,mn as d}from"./library-ByXZ2YPj.js";import{_ as f,a as p,d as m,f as h,k as g,n as _,p as v,s as y,t as b}from"./wiki-CfN0XtvQ.js";var x,S,C;function w(){return(w=e((()=>{n(),g(),x=class{props;element;naming;components;slots;emits;constructor(e,t,n,r,i,a){this.props=e,this.element=t,this.naming=n,this.components=r,this.slots=i,this.emits=a}get item(){let e=this.props.value;if(l(e)&&this.props.formatting){let t=new u(this.props.language);return this.props.currency?t.currency(e,this.props.currency):this.props.unit?t.unit(e,this.props.unit):t.number(e)}return e?.toString()||``}},S={formatting:!0},C=class extends f{item;constructor(e,t,n,r=x){super(e,t,n),this.item=new r(this.props,this.element,this.naming,this.components,this.slots,this.emits)}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return c(`span`,{...this.getAttrs(),class:this.classes?.value.main},this.item.item)}}})))()}var T;function E(){return(E=e((()=>{w(),T={...S}})))()}var D;function O(){return(O=e((()=>{n(),w(),E(),D=a({name:`D1FormattedNumber`,__name:`D1FormattedNumber`,props:i({value:{},currency:{},unit:{},formatting:{type:Boolean},language:{}},T),setup(e,{expose:t,emit:n}){let i=n,a=e,c=s(()=>({main:{"d1-formattedNumber":!0}})),l=s(()=>({})),u=new C(`d1.formattedNumber`,a,{emits:i,classes:c,styles:l}),f=u.render();return t(u.expose()),(e,t)=>(o(),r(d(f)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1FormattedNumber`,exportName:`default`,displayName:`D1FormattedNumber`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/FormattedNumber/D1FormattedNumber.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{b(),E(),j=[{name:`currency`,type:`string`},{name:`formatting`,type:`boolean`},{name:`language`,type:`string`},{name:`unit`,type:`string`},{name:`value`,type:`NumberOrString`}],M=[],N=[],P={component:`FormattedNumber`,props:j,slots:M,events:N,defaults:T,wikiDesign:_}})))()}var I;function L(){return(L=e((()=>{h(),y(),F(),I=new m(P.component,P.props,P.defaults,P.wikiDesign,p,v)})))()}var R=t({FormattedNumber:()=>B,FormattedNumberBasic:()=>V,__namedExportsOrder:()=>H,default:()=>z}),z,B,V,H;function U(){return(U=e((()=>{A(),L(),z={title:`Ui/FormattedNumber`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={},V={name:`Базовые`,render:()=>({components:{D1FormattedNumber:k},template:`
        <div class="wiki-storybook-flex-column">
          <D1FormattedNumber :value="1234567.89"/>
          <D1FormattedNumber :value="1234567.89" currency="USD"/>
          <D1FormattedNumber :value="1234567.89" unit="kilogram"/>
          <D1FormattedNumber :value="1234567.89" :formatting="false"/>
        </div>
    `})},H=[`FormattedNumber`,`FormattedNumberBasic`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}}})))()}export{I as a,U as i,B as n,L as o,V as r,R as t};