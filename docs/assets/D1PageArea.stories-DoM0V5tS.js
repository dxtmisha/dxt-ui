import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{P as n,a as r,d as i,g as a,i as o,s,t as c}from"./vue.esm-bundler-KrdxwWaE.js";import{f as l,t as u}from"./iframe-UEhCQgdF.js";import{t as d}from"./wikiDescriptions-7XaHU3Yk-B5WkPyHr.js";import{a as f,d as ee,f as te,n as ne,o as re,p,t as ie,u as m}from"./wiki-YLJtDFp2.js";import{n as h,t as g}from"./getAreaValue-C-31Upc1-Cxc2IfQt.js";import{n as _,t as v}from"./D1Block-CXE5FqU8.js";import{n as y,t as ae}from"./D1Group-DuCVosvX.js";import{n as oe,t as b}from"./D1Page-BbhXdqRT.js";import{n as x,t as S}from"./D1Section-Bl26vwEA.js";var C,w,T,E=e((()=>{te(),g(),c(),l(),C=class{constructor(e,t,n,r,i,a,s,c){p(this,`area`,o(()=>h())),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=s,this.emits=c}},w={},T=class extends u{constructor(e,t,n,r=C){super(e,t,n),p(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=`group`;switch(this.item.area.value){case`container`:e=`page`;break;case`page`:e=`section`;break;case`section`:e=`block`;break;case`block`:e=`group`;break}return this.components.renderOne(e,this.props,this.slots)}}})),D,se=e((()=>{_(),D=v})),O,k=e((()=>{y(),O=ae})),A,j=e((()=>{oe(),A=b})),M,N=e((()=>{x(),M=S})),P,F=e((()=>{E(),P={...w}})),I=e((()=>{})),L,R=e((()=>{c(),E(),se(),k(),j(),N(),F(),I(),L=s({name:`D1PageArea`,__name:`D1PageArea`,props:i({label:{},labelId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},tagHeader:{},headerAttrs:{},description:{},descriptionId:{},area:{},headline:{},tag:{}},P),setup(e,{expose:t,emit:i}){let s=new T(`d1.pageArea`,e,{emits:i,classes:o(()=>({main:{"d1-pageArea":!0}})),styles:o(()=>({})),components:{block:D,group:O,page:A,section:M}}),c=s.render();return t(s.expose()),(e,t)=>(a(),r(n(c)))}})})),z,B=e((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1PageArea`,exportName:`default`,displayName:`D1PageArea`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/PageArea/D1PageArea.vue`]})})),V,H,U,W,G=e((()=>{ie(),F(),V=[{name:`area`,type:`string | undefined`},{name:`caption`,type:`string | number | undefined`},{name:`captionDecorative`,type:`boolean | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`headerAttrs`,type:`ConstrBind<HeaderPropsBasic> | undefined`},{name:`headline`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconPropsBasic> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`tag`,type:`string | undefined`},{name:`tagHeader`,type:`string | undefined`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot/ Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`headline`,description:`Slot for headline/ Слот для заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[],W={component:`PageArea`,props:V,slots:H,events:U,defaults:P,wikiDesign:ne}})),K,q=e((()=>{ee(),re(),G(),K=new m(W.component,W.props,W.defaults,W.wikiDesign,f,d)})),ce=t({PageArea:()=>Y,PageAreaBasic:()=>X,PageAreaSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{B(),q(),J={title:`Ui/PageArea`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1PageArea:z},setup:()=>({args:e}),template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`PageArea`,`PageAreaBasic`,`PageAreaSlots`]}));$();export{Y as PageArea,X as PageAreaBasic,Z as PageAreaSlots,Q as __namedExportsOrder,J as default,q as i,$ as n,K as r,ce as t};