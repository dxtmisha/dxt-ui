import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Pt as a,Rt as o,Ut as s,X as c,in as l,jt as u,m as d}from"./library-C6UyfMBX.js";import{D as f,d as p,f as m,g as h,i as g,n as _,s as v,t as y,u as b}from"./wiki-Cqdd-d3l.js";var x,S,C;function w(){return(w=e((()=>{n(),f(),x=class{props;refs;element;classDesign;className;components;slots;emits;constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get item(){let e=this.props.value;if(c(e)&&this.props.formatting){let t=new d(this.props.language);return this.props.currency?t.currency(e,this.props.currency):this.props.unit?t.unit(e,this.props.unit):t.number(e)}return e?.toString()||``}},S={formatting:!0},C=class extends h{item;constructor(e,t,n,r=x){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return a(`span`,{...this.getAttrs(),class:this.classes?.value.main},this.item.item)}}})))()}var T;function E(){return(E=e((()=>{w(),T={...S}})))()}var D;function O(){return(O=e((()=>{n(),w(),E(),D=i({name:`D1FormattedNumber`,__name:`D1FormattedNumber`,props:o({value:{},currency:{},unit:{},formatting:{type:Boolean},language:{}},T),setup(e,{expose:t,emit:n}){let i=n,a=e,o=u(()=>({main:{"d1-formattedNumber":!0}})),c=u(()=>({})),d=new C(`d1.formattedNumber`,a,{emits:i,classes:o,styles:c}),f=d.render();return t(d.expose()),(e,t)=>(s(),r(l(f)))}})})))()}var k;function A(){return(A=e((()=>{O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1FormattedNumber`,exportName:`default`,displayName:`D1FormattedNumber`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/FormattedNumber/D1FormattedNumber.vue`]})})))()}var j,M,N,P;function F(){return(F=e((()=>{y(),E(),j=[{name:`currency`,type:`string`},{name:`formatting`,type:`boolean`},{name:`language`,type:`string`},{name:`unit`,type:`string`},{name:`value`,type:`NumberOrString`}],M=[],N=[],P={component:`FormattedNumber`,props:j,slots:M,events:N,defaults:T,wikiDesign:_}})))()}var I;function L(){return(L=e((()=>{p(),v(),F(),I=new b(P.component,P.props,P.defaults,P.wikiDesign,g,m)})))()}var R=t({FormattedNumber:()=>B,FormattedNumberBasic:()=>V,__namedExportsOrder:()=>H,default:()=>z}),z,B,V,H;function U(){return(U=e((()=>{A(),L(),z={title:`Ui/FormattedNumber`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={},V={name:`Базовые`,render:()=>({components:{D1FormattedNumber:k},template:`
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