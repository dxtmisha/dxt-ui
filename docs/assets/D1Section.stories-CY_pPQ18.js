import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Bt as n,Ct as r,Ot as i,bt as a,gt as o,u as s,vt as c,yt as l}from"./iframe-InwAcaLb.js";import{a as u,d,l as f,m as p,n as m,t as h,u as g}from"./wiki-DiKtF90Q.js";import{n as _,r as v,t as y}from"./BlockDesign-DHCkcwP1-DfVnVrYF.js";var b,x,S,C=e((()=>{_(),s(),b=class extends v{},x={tag:`section`,tagHeader:`h2`},S=class extends y{constructor(e,t,n,r=b){super(e,t,n,r)}}})),w,T=e((()=>{C(),w={...x}})),E=e((()=>{})),D,O=e((()=>{o(),s(),C(),T(),E(),D=a({name:`D1Section`,__name:`D1Section`,props:r({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},w),setup(e,{expose:t,emit:r}){let a=new S(`d1.section`,e,{emits:r,classes:c(()=>({main:{"d1-section":!0}})),styles:c(()=>({}))}),o=a.render();return t(a.expose()),(e,t)=>(i(),l(n(o)))}})})),k,A=e((()=>{O(),O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Section`,exportName:`default`,displayName:`D1Section`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Section/D1Section.vue`]})})),j,M,N=e((()=>{g(),h(),T(),j=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],M={component:`Section`,props:j,defaults:w,wikiDesign:m}})),P,F=e((()=>{g(),u(),N(),P=new d(M.component,M.props,M.defaults,M.wikiDesign,f,p)})),I=t({Section:()=>R,SectionBasic:()=>z,SectionSlots:()=>B,__namedExportsOrder:()=>V,default:()=>L}),L,R,z,B,V,H=e((()=>{A(),F(),L={title:`Ui/Section`,component:k,parameters:{design:`d1`,docs:{description:{component:P.getDescription()}}},argTypes:P.getWiki(),args:P.getValues()},R={render:e=>({components:{D1Section:k},setup:()=>({args:e}),template:`
      <D1Section v-bind="args">
        <p>
          The Section component is a fundamental building block for structuring web pages.
          It defaults to using the <code>&lt;section&gt;</code> HTML tag, making it semantically appropriate for grouping thematic content.
        </p>
        <p>
          It provides a rich set of features for content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h2&gt;</code>, which fits the typical document outline structure.
        </p>
        <p>
          Use Section to divide your page into distinct thematic areas, improving both the visual structure and the accessibility of your application.
        </p>
      </D1Section>
    `})},z={name:`Базовые`,render:()=>({components:{D1Section:k},template:`
        <div class="wiki-storybook-flex-column">
          <D1Section>
            <p>Generic section content without header.</p>
          </D1Section>
          <D1Section label="Contact Information" description="Get in touch with us">
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </D1Section>
          <D1Section headline="Our Services" label="What we do">
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
            </ul>
          </D1Section>
        </div>
    `})},B={name:`Использование слотов`,render:()=>({components:{D1Section:k},template:`
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Section>
    `})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  // :story-main [!] System label / Системная метка
  render: (args: any) => ({
    components: {
      D1Section
    },
    setup: () => ({
      args
    }),
    template: \`
      <D1Section v-bind="args">
        <p>
          The Section component is a fundamental building block for structuring web pages.
          It defaults to using the <code>&lt;section&gt;</code> HTML tag, making it semantically appropriate for grouping thematic content.
        </p>
        <p>
          It provides a rich set of features for content presentation, including headlines, labels, descriptions, and icons.
          The default tag for the headline is set to <code>&lt;h2&gt;</code>, which fits the typical document outline structure.
        </p>
        <p>
          Use Section to divide your page into distinct thematic areas, improving both the visual structure and the accessibility of your application.
        </p>
      </D1Section>
    \`
  })
  // :story-main [!] System label / Системная метка
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Section
    },
    template: \`
        <div class="wiki-storybook-flex-column">
          <D1Section>
            <p>Generic section content without header.</p>
          </D1Section>
          <D1Section label="Contact Information" description="Get in touch with us">
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </D1Section>
          <D1Section headline="Our Services" label="What we do">
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
            </ul>
          </D1Section>
        </div>
    \`
  })
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Использование слотов',
  render: () => ({
    components: {
      D1Section
    },
    template: \`
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Section>
    \`
  })
}`,...B.parameters?.docs?.source}}},V=[`Section`,`SectionBasic`,`SectionSlots`]}));H();export{R as Section,z as SectionBasic,B as SectionSlots,V as __namedExportsOrder,L as default,F as i,H as n,P as r,I as t};