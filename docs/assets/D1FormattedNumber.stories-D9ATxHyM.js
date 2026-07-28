import{a as e,i as t}from"./preload-helper-Cv19cBWa.js";import{Gt as n,Kt as r,Pt as i,Ut as a,Vt as o,Wt as s,Yt as c,d as l,dn as u,en as d,f,ht as p}from"./iframe-D7czqiJA.js";import{a as m,d as h,f as g,l as _,m as v,n as y,p as b,t as x,u as S}from"./wiki-CUC2UhNU.js";var C,w,T,E=t((()=>{g(),o(),l(),C=class{constructor(e,t,n,r,i,a,o,s){b(this,`props`,void 0),b(this,`refs`,void 0),b(this,`element`,void 0),b(this,`classDesign`,void 0),b(this,`className`,void 0),b(this,`components`,void 0),b(this,`slots`,void 0),b(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get item(){let e=this.props.value;if(p(e)&&this.props.formatting){let t=new i(this.props.language);return this.props.currency?t.currency(e,this.props.currency):this.props.unit?t.unit(e,this.props.unit):t.number(e)}return e?.toString()||``}},w={formatting:!0},T=class extends f{constructor(e,t,n,r=C){super(e,t,n),b(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){return r(`span`,{...this.getAttrs(),class:this.classes?.value.main},this.item.item)}}})),D,O=t((()=>{E(),D={...w}})),k=t((()=>{})),A,j=t((()=>{o(),E(),O(),k(),A=n({name:`D1FormattedNumber`,__name:`D1FormattedNumber`,props:c({value:{},currency:{},unit:{},formatting:{type:Boolean},language:{}},D),setup(e,{expose:t,emit:n}){let r=new T(`d1.formattedNumber`,e,{emits:n,classes:a(()=>({main:{"d1-formattedNumber":!0}})),styles:a(()=>({}))}),i=r.render();return t(r.expose()),(e,t)=>(d(),s(u(i)))}})})),M,N=t((()=>{j(),j(),M=A,A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{name:`D1FormattedNumber`,exportName:`default`,displayName:`D1FormattedNumber`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/FormattedNumber/D1FormattedNumber.vue`]})})),P,F,I,L,R=t((()=>{x(),O(),P=[{name:`currency`,type:`string`},{name:`formatting`,type:`boolean`},{name:`language`,type:`string`},{name:`unit`,type:`string`},{name:`value`,type:`NumberOrString`}],F=[],I=[],L={component:`FormattedNumber`,props:P,slots:F,events:I,defaults:D,wikiDesign:y}})),z,B=t((()=>{h(),_(),R(),z=new S(L.component,L.props,L.defaults,L.wikiDesign,m,v)})),V=e({FormattedNumber:()=>U,FormattedNumberBasic:()=>W,__namedExportsOrder:()=>G,default:()=>H}),H,U,W,G,K=t((()=>{N(),B(),H={title:`Ui/FormattedNumber`,component:M,parameters:{design:`d1`,docs:{description:{component:z.getDescription()}}},argTypes:z.getWiki(),args:z.getValues()},U={},W={name:`Базовые`,render:()=>({components:{D1FormattedNumber:M},template:`
        <div class="wiki-storybook-flex-column">
          <D1FormattedNumber :value="1234567.89"/>
          <D1FormattedNumber :value="1234567.89" currency="USD"/>
          <D1FormattedNumber :value="1234567.89" unit="kilogram"/>
          <D1FormattedNumber :value="1234567.89" :formatting="false"/>
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
          <D1FormattedNumber :value="1234567.89" :formatting="false"/>
        </div>
    \`
  })
}`,...W.parameters?.docs?.source}}},G=[`FormattedNumber`,`FormattedNumberBasic`]}));K();export{U as FormattedNumber,W as FormattedNumberBasic,G as __namedExportsOrder,H as default,B as i,K as n,z as r,V as t};