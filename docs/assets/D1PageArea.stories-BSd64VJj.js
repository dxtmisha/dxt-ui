import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{Dt as n,Mt as r,Nt as i,Rt as a,Ut as o,an as s,jt as c}from"./library-BfcLFF_v.js";import{O as l,d as u,i as d,k as f,l as p,m,n as h,p as g,t as ee,u as te}from"./wiki-BHyzKkJP.js";import{n as ne,t as _}from"./getAreaValue-Xc_XgXhl-DTOLPslz.js";import{n as v,t as re}from"./D1Block--F41HQcr.js";import{n as ie,t as y}from"./D1Group-DTw2Wo4B.js";import{n as b,t as x}from"./D1Page-DjEBDXrF.js";import{n as S,t as ae}from"./D1Section-BWYxcFoQ.js";var C,w,T;function E(){return(E=e((()=>{_(),n(),l(),C=class{constructor(e,t,n,r,i,a,o,s){g(this,`props`,void 0),g(this,`refs`,void 0),g(this,`element`,void 0),g(this,`classDesign`,void 0),g(this,`className`,void 0),g(this,`components`,void 0),g(this,`slots`,void 0),g(this,`emits`,void 0),this.props=e,this.refs=t,this.element=n,this.classDesign=r,this.className=i,this.components=a,this.slots=o,this.emits=s}get area(){return ne()}},w={},T=class extends f{constructor(e,t,n,r=C){super(e,t,n),g(this,`item`,void 0),this.item=new r(this.props,this.refs,this.element,this.getDesign(),this.getName(),this.components,this.slots,this.emits),this.init()}initExpose(){return{}}initClasses(){return{main:{}}}initStyles(){return{}}initRender(){let e=`group`;switch(this.item.area){case`container`:e=`page`;break;case`page`:e=`section`;break;case`section`:e=`block`;break;case`block`:e=`group`}return this.components.renderOne(e,this.props,this.slots)}}})))()}var D;function O(){return(O=e((()=>{v(),D=re})))()}var k;function A(){return(A=e((()=>{ie(),k=y})))()}var j;function M(){return(M=e((()=>{b(),j=x})))()}var N;function P(){return(P=e((()=>{S(),N=ae})))()}var F;function I(){return(I=e((()=>{E(),F={...w}})))()}var L;function R(){return(R=e((()=>{n(),E(),O(),A(),M(),P(),I(),L=i({name:`D1PageArea`,__name:`D1PageArea`,props:a({label:{},labelId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},tagHeader:{},headerAttrs:{},description:{},descriptionId:{},area:{},headline:{},tag:{}},F),setup(e,{expose:t,emit:n}){let i=n,a=e,l=c(()=>({main:{"d1-pageArea":!0}})),u=c(()=>({})),d=new T(`d1.pageArea`,a,{emits:i,classes:l,styles:u,components:{block:D,group:k,page:j,section:N}}),f=d.render();return t(d.expose()),(e,t)=>(o(),r(s(f)))}})})))()}var z;function B(){return(B=e((()=>{R(),z=L,L.__docgenInfo=Object.assign({displayName:L.name??L.__name},{name:`D1PageArea`,exportName:`default`,displayName:`D1PageArea`,description:``,tags:{},sourceFiles:[`/Volumes/T7/development/dxt-ui/packages/d1/src/components/Ui/PageArea/D1PageArea.vue`]})})))()}var V,H,U,W;function G(){return(G=e((()=>{ee(),I(),V=[{name:`area`,type:`string`},{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headerAttrs`,type:`ConstrBind<HeaderPropsBasic>`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],H=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot/ Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`headline`,description:`Slot for headline/ Слот для заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],U=[],W={component:`PageArea`,props:V,slots:H,events:U,defaults:F,wikiDesign:h}})))()}var K;function q(){return(q=e((()=>{u(),p(),G(),K=new te(W.component,W.props,W.defaults,W.wikiDesign,d,m)})))()}var oe=t({PageArea:()=>Y,PageAreaBasic:()=>X,PageAreaSlots:()=>Z,__namedExportsOrder:()=>Q,default:()=>J}),J,Y,X,Z,Q;function $(){return($=e((()=>{B(),q(),J={title:`Ui/PageArea`,component:z,parameters:{design:`d1`,docs:{description:{component:K.getDescription()}}},argTypes:K.getWiki(),args:K.getValues()},Y={render:e=>({components:{D1PageArea:z},setup:()=>({args:e}),template:`
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
}`,...Z.parameters?.docs?.source}}},Q=[`PageArea`,`PageAreaBasic`,`PageAreaSlots`]})))()}export{$ as a,Z as i,Y as n,K as o,X as r,q as s,oe as t};