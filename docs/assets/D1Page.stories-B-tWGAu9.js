import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Vt as n,_t as r,bt as i,kt as a,wt as o,xt as s,yt as c}from"./iframe-DZnBmjcm.js";import{a as l,d as u,g as d,l as f,n as p,t as m,u as h}from"./wiki-CxP3o-n8.js";import{n as g,r as _,t as v}from"./BlockDesign-C6w_RCLR-D2Fdx075.js";var y,b,x,S=e((()=>{g(),y=class extends _{},b={tag:`main`,tagHeader:`h1`},x=class extends v{constructor(e,t,n,r=y){super(e,t,n,r)}}})),C,w=e((()=>{S(),C={...b}})),T=e((()=>{})),E,D=e((()=>{r(),S(),w(),T(),E=s({name:`D1Page`,__name:`D1Page`,props:o({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},C),setup(e,{expose:t,emit:r}){let o=new x(`d1.page`,e,{emits:r,classes:c(()=>({main:{"d1-page":!0}})),styles:c(()=>({}))}),s=o.render();return t(o.expose()),(e,t)=>(a(),i(n(s)))}})})),O,k=e((()=>{D(),D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1Page`,exportName:`default`,displayName:`D1Page`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Page/D1Page.vue`]})})),A,j,M,N,P=e((()=>{h(),m(),w(),A=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],j=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,description:`Default slot/ Слот по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`},{name:`headline`,description:`Slot for headline/ Слот для заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`}],M=[],N={component:`Page`,props:A,slots:j,events:M,defaults:C,wikiDesign:p}})),F,I=e((()=>{h(),l(),P(),F=new u(N.component,N.props,N.defaults,N.wikiDesign,f,d)})),L=t({Page:()=>z,PageBasic:()=>B,PageSlots:()=>V,__namedExportsOrder:()=>H,default:()=>R}),R,z,B,V,H,U=e((()=>{k(),I(),R={title:`Ui/Page`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1Page:O},setup:()=>({args:e}),template:`
      <D1Page v-bind="args">
        <p>
          The Page component is designed to wrap the unique content of a document.
          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.
        </p>
        <p>
          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.
        </p>
        <p>
          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.
        </p>
      </D1Page>
    `})},B={name:`Базовые`,render:()=>({components:{D1Page:O},template:`
        <div class="wiki-storybook-flex-column">
          <D1Page>
            <p>Simple page content wrapper.</p>
          </D1Page>
          <D1Page label="Documentation" description="Learn how to use the library">
            <p>Welcome to the documentation page.</p>
          </D1Page>
          <D1Page headline="Dashboard Overview" label="Analytics">
            <div style="height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
              Chart Placeholder
            </div>
          </D1Page>
        </div>
    `})},V={name:`Использование слотов`,render:()=>({components:{D1Page:O},template:`
        <D1Page>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Page>
    `})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Page
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Page v-bind="args">
        <p>
          The Page component is designed to wrap the unique content of a document.
          It defaults to using the <code>&lt;main&gt;</code> HTML tag, ensuring that the primary content is correctly identified by assistive technologies and search engines.
        </p>
        <p>
          It provides a comprehensive set of features for page-level content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h1&gt;</code>, establishing the top-level heading for the page.
        </p>
        <p>
          Use Page to encapsulate the core content of your view, separating it from repeated elements like navigation bars or footers.
        </p>
      </D1Page>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Page
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Page>
            <p>Simple page content wrapper.</p>
          </D1Page>
          <D1Page label="Documentation" description="Learn how to use the library">
            <p>Welcome to the documentation page.</p>
          </D1Page>
          <D1Page headline="Dashboard Overview" label="Analytics">
            <div style="height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
              Chart Placeholder
            </div>
          </D1Page>
        </div>
    \`
  })
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Page
    },
    template: \`
        <D1Page>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Page>
    \`
  })
}`,...V.parameters?.docs?.source}}},H=[`Page`,`PageBasic`,`PageSlots`]}));U();export{z as Page,B as PageBasic,V as PageSlots,H as __namedExportsOrder,R as default,I as i,U as n,F as r,L as t};