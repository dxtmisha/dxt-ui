import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,Ot as i,bt as a,gt as o,u as s,vt as c,yt as l}from"./iframe-InwAcaLb.js";import{a as u,d,l as f,m as p,n as m,t as h,u as g}from"./wiki-DiKtF90Q.js";import{n as _,r as v,t as y}from"./BlockDesign-DHCkcwP1-DfVnVrYF.js";var b,x,S,C=e((()=>{_(),s(),b=class extends v{},x={tag:`main`,tagHeader:`h1`},S=class extends y{constructor(e,t,n,r=b){super(e,t,n,r)}}})),w,T=e((()=>{C(),w={...x}})),E=e((()=>{})),D,O=e((()=>{o(),s(),C(),T(),E(),D=a({name:`D1Page`,__name:`D1Page`,props:r({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},w),setup(e,{expose:t,emit:r}){let a=new S(`d1.page`,e,{emits:r,classes:c(()=>({main:{"d1-page":!0}})),styles:c(()=>({}))}),o=a.render();return t(a.expose()),(e,t)=>(i(),l(n(o)))}})})),k,A=e((()=>{O(),O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Page`,exportName:`default`,displayName:`D1Page`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Page/D1Page.vue`]})})),j,M,N=e((()=>{g(),h(),T(),j=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],M={component:`Page`,props:j,defaults:w,wikiDesign:m}})),P,F=e((()=>{g(),u(),N(),P=new d(M.component,M.props,M.defaults,M.wikiDesign,f,p)})),I=t({Page:()=>R,PageBasic:()=>z,PageSlots:()=>B,__namedExportsOrder:()=>V,default:()=>L}),L,R,z,B,V,H=e((()=>{A(),F(),L={title:`Ui/Page`,component:k,parameters:{design:`d1`,docs:{description:{component:P.getDescription()}}},argTypes:P.getWiki(),args:P.getValues()},R={render:e=>({components:{D1Page:k},setup:()=>({args:e}),template:`
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
    `})},z={name:`Базовые`,render:()=>({components:{D1Page:k},template:`
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
    `})},B={name:`Использование слотов`,render:()=>({components:{D1Page:k},template:`
        <D1Page>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Page>
    `})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`Page`,`PageBasic`,`PageSlots`]}));H();export{R as Page,z as PageBasic,B as PageSlots,V as __namedExportsOrder,L as default,F as i,H as n,P as r,I as t};