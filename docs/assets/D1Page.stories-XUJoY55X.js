import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Vt as n,_t as r,bt as i,kt as a,u as o,wt as s,xt as c,yt as l}from"./iframe-I1fckF_t.js";import{a as u,d,g as f,l as p,n as m,t as h,u as g}from"./wiki-CMC-2lzg.js";import{n as _,r as v,t as y}from"./BlockDesign-C6w_RCLR-D1hcCMYr.js";var b,x,S,C=e((()=>{_(),o(),b=class extends v{},x={tag:`main`,tagHeader:`h1`},S=class extends y{constructor(e,t,n,r=b){super(e,t,n,r)}}})),w,T=e((()=>{C(),w={...x}})),E=e((()=>{})),D,O=e((()=>{r(),o(),C(),T(),E(),D=c({name:`D1Page`,__name:`D1Page`,props:s({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},w),setup(e,{expose:t,emit:r}){let o=new S(`d1.page`,e,{emits:r,classes:l(()=>({main:{"d1-page":!0}})),styles:l(()=>({}))}),s=o.render();return t(o.expose()),(e,t)=>(a(),i(n(s)))}})})),k,A=e((()=>{O(),O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Page`,exportName:`default`,displayName:`D1Page`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Page/D1Page.vue`]})})),j,M,N,P,F=e((()=>{g(),h(),T(),j=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],M=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,description:`Default slot/ Слот по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`},{name:`headline`,description:`Slot for headline/ Слот для заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`}],N=[],P={component:`Page`,props:j,slots:M,events:N,defaults:w,wikiDesign:m}})),I,L=e((()=>{g(),u(),F(),I=new d(P.component,P.props,P.defaults,P.wikiDesign,p,f)})),R=t({Page:()=>B,PageBasic:()=>V,PageSlots:()=>H,__namedExportsOrder:()=>U,default:()=>z}),z,B,V,H,U,W=e((()=>{A(),L(),z={title:`Ui/Page`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Page:k},setup:()=>({args:e}),template:`
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
    `})},V={name:`Базовые`,render:()=>({components:{D1Page:k},template:`
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
    `})},H={name:`Использование слотов`,render:()=>({components:{D1Page:k},template:`
        <D1Page>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Page>
    `})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Page`,`PageBasic`,`PageSlots`]}));W();export{B as Page,V as PageBasic,H as PageSlots,U as __namedExportsOrder,z as default,L as i,W as n,I as r,R as t};