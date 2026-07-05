import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Bt as n,Ft as r,Jt as i,Lt as a,Rt as o,Ut as s,an as c,d as l,j as u,ot as d,u as f,zt as p}from"./iframe-B-LNhFWZ.js";import{d as m,f as h,m as g,n as _,o as v,p as y,s as b,t as x,u as S}from"./wiki-DgltPJFG.js";var C,w,T,E=t((()=>{h(),r(),f(),C=class{constructor(e,t,n,r,i,a,o,s){y(this,`props`,void 0),y(this,`refs`,void 0),y(this,`element`,void 0),y(this,`classDesign`,void 0),y(this,`className`,void 0),y(this,`components`,void 0),y(this,`slots`,void 0),y(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get item(){let e=this.props.value;if(d(e)&&this.props.format){let t=new u(this.props.language);return this.props.currency?t.currency(e,this.props.currency):this.props.unit?t.unit(e,this.props.unit):t.number(e)}return e?.toString()||``}},w={format:!0},T=class extends l{constructor(e,t,n,r=C){super(e,t,n),y(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return n(`span`,{...this.getAttrs(),class:this.classes?.value.main},this.item.item)}}})),D,O=t((()=>{E(),D={...w}})),k=t((()=>{})),A,j=t((()=>{r(),E(),O(),k(),A=p({name:`D1FormattedNumber`,__name:`D1FormattedNumber`,props:s({value:{},currency:{},unit:{},format:{type:Boolean},language:{}},D),setup(e,{expose:t,emit:n}){let r=new T(`d1.formattedNumber`,e,{emits:n,classes:a(()=>({main:{"d1-formattedNumber":!0}})),styles:a(()=>({}))}),s=r.render();return t(r.expose()),(e,t)=>(i(),o(c(s)))}})})),M,N=t((()=>{j(),j(),M=A,A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{name:`D1FormattedNumber`,exportName:`default`,displayName:`D1FormattedNumber`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/FormattedNumber/D1FormattedNumber.vue`]})})),P,F,I,L,R=t((()=>{x(),O(),P=[{name:`currency`,type:`string`},{name:`format`,type:`boolean`},{name:`language`,type:`string`},{name:`unit`,type:`string`},{name:`value`,type:`NumberOrString`}],F=[],I=[],L={component:`FormattedNumber`,props:P,slots:F,events:I,defaults:D,wikiDesign:_}})),z,B=t((()=>{m(),b(),R(),z=new S(L.component,L.props,L.defaults,L.wikiDesign,v,g)})),V=e({FormattedNumber:()=>U,FormattedNumberBasic:()=>W,__namedExportsOrder:()=>G,default:()=>H}),H,U,W,G,K=t((()=>{N(),B(),H={title:`Ui/FormattedNumber`,component:M,parameters:{design:`d1`,docs:{description:{component:z.getDescription()}}},argTypes:z.getWiki(),args:z.getValues()},U={},W={name:`Базовые`,render:()=>({components:{D1FormattedNumber:M},template:`
        <div class="wiki-storybook-flex-column">
          <D1FormattedNumber :value="1234567.89"/>
          <D1FormattedNumber :value="1234567.89" currency="USD"/>
          <D1FormattedNumber :value="1234567.89" unit="kilogram"/>
          <D1FormattedNumber :value="1234567.89" :format="false"/>
        </div>
    `})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  // :story-main [!] System label / Системная метка
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
          <D1FormattedNumber :value="1234567.89" :format="false"/>
        </div>
    \`
  })
}`,...W.parameters?.docs?.source}}},G=[`FormattedNumber`,`FormattedNumberBasic`]}));K();export{U as FormattedNumber,W as FormattedNumberBasic,G as __namedExportsOrder,H as default,B as i,K as n,z as r,V as t};