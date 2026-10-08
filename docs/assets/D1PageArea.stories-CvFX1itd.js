import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Rt as a,Ut as o,in as s,jt as c}from"./library-C6UyfMBX.js";import{D as l,d as u,f as d,g as f,i as p,n as m,s as h,t as g,u as ee}from"./wiki-Cqdd-d3l.js";import{n as te,t as ne}from"./getAreaValue-Xc_XgXhl-Doc2Q2XU.js";import{n as _,t as re}from"./D1Block-DFnp3TI7.js";import{n as ie,t as ae}from"./D1Group-CFUFsZeg.js";import{n as v,t as y}from"./D1Page-BpHf7A8t.js";import{n as b,t as x}from"./D1Section-BwRCLr76.js";var S,C,w;function T(){return(T=e((()=>{ne(),n(),l(),S=class{props;refs;element;classDesign;className;components;slots;emits;constructor(e,t,n,r,i,a,o,s){this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get area(){return te()}},C={},w=class extends f{item;constructor(e,t,n,r=S){super(e,t,n),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=`group`;switch(this.item.area){case`container`:e=`page`;break;case`page`:e=`section`;break;case`section`:e=`block`;break;case`block`:e=`group`}return this.components.renderOne(e,this.props,this.slots)}}})))()}var E;function D(){return(D=e((()=>{_(),E=re})))()}var O;function k(){return(k=e((()=>{ie(),O=ae})))()}var A;function j(){return(j=e((()=>{v(),A=y})))()}var M;function N(){return(N=e((()=>{b(),M=x})))()}var P;function F(){return(F=e((()=>{T(),P={...C}})))()}var I;function L(){return(L=e((()=>{n(),T(),D(),k(),j(),N(),F(),I=i({name:`D1PageArea`,__name:`D1PageArea`,props:a({label:{},labelId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},tagHeader:{},headerAttrs:{},description:{},descriptionId:{},area:{},headline:{},tag:{}},P),setup(e,{expose:t,emit:n}){let i=n,a=e,l=c(()=>({main:{"d1-pageArea":!0}})),u=c(()=>({})),d=new w(`d1.pageArea`,a,{emits:i,classes:l,styles:u,components:{block:E,group:O,page:A,section:M}}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(s(f)))}})})))()}var R;function z(){return(z=e((()=>{L(),R=I,I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{name:`D1PageArea`,exportName:`default`,displayName:`D1PageArea`,description:``,tags:{},sourceFiles:[`/Users/tung/Documents/GitHub/dxt-ui/packages/d1/src/components/Ui/PageArea/D1PageArea.vue`]})})))()}var B,V,H,U;function W(){return(W=e((()=>{g(),F(),B=[{name:`area`,type:`string`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headerAttrs`,type:`ConstrBind<HeaderPropsBasic>`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],V=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot/ Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`headline`,description:`Slot for headline/ Слот для заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],H=[],U={component:`PageArea`,props:B,slots:V,events:H,defaults:P,wikiDesign:m}})))()}var G;function K(){return(K=e((()=>{u(),h(),W(),G=new ee(U.component,U.props,U.defaults,U.wikiDesign,p,d)})))()}var q=t({PageArea:()=>Y,PageAreaBasic:()=>X,PageAreaSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{z(),K(),J={title:`Ui/PageArea`,component:R,parameters:{design:`d1`,docs:{description:{component:G.getDescription()}}},argTypes:G.getWiki(),args:G.getValues()},Y={render:e=>({components:{D1PageArea:R},setup:()=>({args:e}),template:`
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
    `})},X={name:`Базовые`,render:()=>({components:{D1PageArea:R},template:`
        <D1PageArea>
          <p>This is a basic example of PageArea content. It can contain any combination of blocks, sections, or individual UI elements.</p>
        </D1PageArea>
    `})},Z={name:`Использование слотов`,render:()=>({components:{D1PageArea:R},template:`
        <D1PageArea>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1PageArea>
    `})},Q=[`PageArea`,`PageAreaBasic`,`PageAreaSlots`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}export{$ as a,Z as i,Y as n,G as o,X as r,K as s,q as t};