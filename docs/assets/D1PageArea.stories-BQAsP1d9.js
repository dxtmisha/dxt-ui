import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{Ct as n,Kt as r,Nt as i,Ot as a,Tt as o,f as s,t as c,wt as l,xt as u}from"./iframe-yo6yIkeP.js";import{a as d,d as ee,f as te,m as ne,n as re,o as ie,p as f,t as p,u as m}from"./wiki-Ck-JDNL8.js";import{n as h,t as g}from"./getAreaValue-C-31Upc1-CjeUieTv.js";import{n as _,t as v}from"./D1Block-BDn_WD2E.js";import{n as y,t as ae}from"./D1Group-CzjNeWSq.js";import{n as b,t as x}from"./D1Page-DIZWZEaZ.js";import{n as S,t as C}from"./D1Section-CrR35M81.js";var w,T,E,D=e((()=>{te(),g(),u(),s(),w=class{constructor(e,t,r,i,a,o,s,c){f(this,`area`,n(()=>h())),this.props=e,this.refs=t,this.element=r,this.classDesign=i,this.className=a,this.components=o,this.slots=s,this.emits=c}},T={},E=class extends c{constructor(e,t,n,r=w){super(e,t,n),f(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=`group`;switch(this.item.area.value){case`container`:e=`page`;break;case`page`:e=`section`;break;case`section`:e=`block`;break;case`block`:e=`group`;break}return this.components.renderOne(e,this.props,this.slots)}}})),O,oe=e((()=>{_(),O=v})),k,se=e((()=>{y(),k=ae})),A,j=e((()=>{b(),A=x})),M,N=e((()=>{S(),M=C})),P,F=e((()=>{D(),P={...T}})),I=e((()=>{})),L,R=e((()=>{u(),D(),oe(),se(),j(),N(),F(),I(),L=o({name:`D1PageArea`,__name:`D1PageArea`,props:a({label:{},labelId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},tagHeader:{},headerAttrs:{},description:{},descriptionId:{},area:{},headline:{},tag:{}},P),setup(e,{expose:t,emit:a}){let o=new E(`d1.pageArea`,e,{emits:a,classes:n(()=>({main:{"d1-pageArea":!0}})),styles:n(()=>({})),components:{block:O,group:k,page:A,section:M}}),s=o.render();return t(o.expose()),(e,t)=>(i(),l(r(s)))}})})),z,B=e((()=>{R(),R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1PageArea`,exportName:`default`,displayName:`D1PageArea`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/PageArea/D1PageArea.vue`]})})),V,H,U,W,G=e((()=>{p(),F(),V=[{name:`area`,type:`string | undefined`},{name:`caption`,type:`string | number | undefined`},{name:`captionDecorative`,type:`boolean | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`headerAttrs`,type:`ConstrBind<HeaderPropsBasic> | undefined`},{name:`headline`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconPropsBasic> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`tag`,type:`string | undefined`},{name:`tagHeader`,type:`string | undefined`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot/ Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`headline`,description:`Slot for headline/ Слот для заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[],W={component:`PageArea`,props:V,slots:H,events:U,defaults:P,wikiDesign:re}})),K,q=e((()=>{ee(),ie(),G(),K=new m(W.component,W.props,W.defaults,W.wikiDesign,d,ne)})),ce=t({PageArea:()=>Y,PageAreaBasic:()=>X,PageAreaSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q,$=e((()=>{B(),q(),J={title:`Ui/PageArea`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1PageArea:z},setup:()=>({args:e}),template:`
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