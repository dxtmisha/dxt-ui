import{a as e,i as t}from"./preload-helper-CqJKl217.js";import{At as n,Bt as r,Dt as i,Ft as a,Mt as o,Xt as s,kt as c,m as l,r as u}from"./iframe-53vFWNoU.js";import{t as d}from"./wikiDescriptions-36ZKeRT_-qFzQhC1d.js";import{d as f,f as ee,l as te,n as ne,o as re,p,t as ie,u as m}from"./wiki-DwIxUKqL.js";import{n as h,t as g}from"./getAreaValue-7KiCZXlF-vfxgl5ZF.js";import{n as _,t as v}from"./D1Block-IUbCNbc3.js";import{n as y,t as ae}from"./D1Group-BUuVcL4q.js";import{n as oe,t as b}from"./D1Page-DR43uTqK.js";import{n as x,t as S}from"./D1Section-DfZXJ126.js";var C,w,T,E=t((()=>{ee(),g(),i(),l(),C=class{constructor(e,t,n,r,i,a,o,s){p(this,`props`,void 0),p(this,`refs`,void 0),p(this,`element`,void 0),p(this,`classDesign`,void 0),p(this,`className`,void 0),p(this,`components`,void 0),p(this,`slots`,void 0),p(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get area(){return h()}},w={},T=class extends u{constructor(e,t,n,r=C){super(e,t,n),p(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=`group`;switch(this.item.area){case`container`:e=`page`;break;case`page`:e=`section`;break;case`section`:e=`block`;break;case`block`:e=`group`;break}return this.components.renderOne(e,this.props,this.slots)}}})),D,se=t((()=>{_(),D=v})),O,k=t((()=>{y(),O=ae})),A,j=t((()=>{oe(),A=b})),M,N=t((()=>{x(),M=S})),P,F=t((()=>{E(),P={...w}})),I=t((()=>{})),L,R=t((()=>{i(),E(),se(),k(),j(),N(),F(),I(),L=o({name:`D1PageArea`,__name:`D1PageArea`,props:a({label:{},labelId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},tagHeader:{},headerAttrs:{},description:{},descriptionId:{},area:{},headline:{},tag:{}},P),setup(e,{expose:t,emit:i}){let a=new T(`d1.pageArea`,e,{emits:i,classes:c(()=>({main:{"d1-pageArea":!0}})),styles:c(()=>({})),components:{block:D,group:O,page:A,section:M}}),o=a.render();return t(a.expose()),(e,t)=>(r(),n(s(o)))}})})),z,B=t((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1PageArea`,exportName:`default`,displayName:`D1PageArea`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/PageArea/D1PageArea.vue`]})})),V,H,U,W,G=t((()=>{ie(),F(),V=[{name:`area`,type:`string`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headerAttrs`,type:`ConstrBind<HeaderPropsBasic>`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot/ Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`headline`,description:`Slot for headline/ Слот для заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[],W={component:`PageArea`,props:V,slots:H,events:U,defaults:P,wikiDesign:ne}})),K,q=t((()=>{f(),re(),G(),K=new m(W.component,W.props,W.defaults,W.wikiDesign,te,d)})),ce=e({PageArea:()=>Y,PageAreaBasic:()=>X,PageAreaSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=t((()=>{B(),q(),J={title:`Ui/PageArea`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1PageArea:z},setup:()=>({args:e}),template:`
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