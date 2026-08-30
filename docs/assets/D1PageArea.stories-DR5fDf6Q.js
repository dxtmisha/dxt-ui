import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Bt as n,Dt as r,Ft as i,Gt as a,Nt as o,Ot as s,Pt as c,kt as l,sn as ee}from"./library-CO1fW2cN.js";import{E as u,O as d,d as f,f as p,i as m,l as h,n as te,t as ne,u as re}from"./wiki-BMj2WokS.js";import{n as ie,t as ae}from"./getAreaValue-Xc_XgXhl-GjyS01DL.js";import{n as g,t as _}from"./D1Block-eTrDP5dP.js";import{n as v,t as y}from"./D1Group-BZ1tSPgH.js";import{n as b,t as oe}from"./D1Page-C9E7lAzg.js";import{n as x,t as S}from"./D1Section-DJnz5i0p.js";var C,w,T;function E(){return(E=e((()=>{ae(),l(),u(),s(),C=class{constructor(e,t,n,i,a,o,s,c){r(this,`props`,void 0),r(this,`refs`,void 0),r(this,`element`,void 0),r(this,`classDesign`,void 0),r(this,`className`,void 0),r(this,`components`,void 0),r(this,`slots`,void 0),r(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c}get area(){return ie()}},w={},T=class extends d{constructor(e,t,n,i=C){super(e,t,n),r(this,`item`,void 0),this.item=new i(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=`group`;switch(this.item.area){case`container`:e=`page`;break;case`page`:e=`section`;break;case`section`:e=`block`;break;case`block`:e=`group`}return this.components.renderOne(e,this.props,this.slots)}}})))()}var D;function O(){return(O=e((()=>{g(),D=_})))()}var k;function A(){return(A=e((()=>{v(),k=y})))()}var j;function M(){return(M=e((()=>{b(),j=oe})))()}var N;function P(){return(P=e((()=>{x(),N=S})))()}var F;function I(){return(I=e((()=>{E(),F={...w}})))()}var L;function R(){return(R=e((()=>{l(),E(),O(),A(),M(),P(),I(),L=i({name:`D1PageArea`,__name:`D1PageArea`,props:n({label:{},labelId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},tagHeader:{},headerAttrs:{},description:{},descriptionId:{},area:{},headline:{},tag:{}},F),setup(e,{expose:t,emit:n}){let r=n,i=e,s=o(()=>({main:{"d1-pageArea":!0}})),l=o(()=>({})),u=new T(`d1.pageArea`,i,{emits:r,classes:s,styles:l,components:{block:D,group:k,page:j,section:N}}),d=u.render();return t(u.expose()),(e,t)=>(a(),c(ee(d)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1PageArea`,exportName:`default`,displayName:`D1PageArea`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/PageArea/D1PageArea.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{ne(),I(),V=[{name:`area`,type:`string`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headerAttrs`,type:`ConstrBind<HeaderPropsBasic>`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot/ Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`headline`,description:`Slot for headline/ Слот для заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[],W={component:`PageArea`,props:V,slots:H,events:U,defaults:F,wikiDesign:te}})))()}var K;function q(){return(q=e((()=>{f(),h(),G(),K=new re(W.component,W.props,W.defaults,W.wikiDesign,m,p)})))()}var se=t({PageArea:()=>Y,PageAreaBasic:()=>X,PageAreaSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),J={title:`Ui/PageArea`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1PageArea:z},setup:()=>({args:e}),template:`
      <D1PageArea v-bind="args">
        <p>
          The PageArea component is a specialized container designed to structure the content within a specific page or layout region.
          It provides consistent margins, alignment, and semantic grouping for nested components.
        </p>
        <p>
          It acts as an orchestrator for various UI blocks, allowing developers to define a clear information hierarchy.
          Whether it's a dashboard overview or a detailed data view, PageArea ensures the layout remains cohesive.
        </p>
      </D1PageArea>
    `})},X={name:`Базовые`,render:()=>({components:{D1PageArea:z},template:`
        <D1PageArea>
          <p>This is a basic example of PageArea content. It can contain any combination of blocks, sections, or individual UI elements.</p>
        </D1PageArea>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1PageArea:z},template:`
        <D1PageArea>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1PageArea>
    `})},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1PageArea
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1PageArea v-bind="args">
        <p>
          The PageArea component is a specialized container designed to structure the content within a specific page or layout region.
          It provides consistent margins, alignment, and semantic grouping for nested components.
        </p>
        <p>
          It acts as an orchestrator for various UI blocks, allowing developers to define a clear information hierarchy.
          Whether it's a dashboard overview or a detailed data view, PageArea ensures the layout remains cohesive.
        </p>
      </D1PageArea>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1PageArea
    },
    template: \`
        <D1PageArea>
          <p>This is a basic example of PageArea content. It can contain any combination of blocks, sections, or individual UI elements.</p>
        </D1PageArea>
    \`
  })
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1PageArea
    },
    template: \`
        <D1PageArea>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1PageArea>
    \`
  })
}`,...Z.parameters?.docs?.source}}},Q=[`PageArea`,`PageAreaBasic`,`PageAreaSlots`]})))()}export{$ as a,Z as i,Y as n,K as o,X as r,q as s,se as t};