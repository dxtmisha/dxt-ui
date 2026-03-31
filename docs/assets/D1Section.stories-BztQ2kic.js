import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Vt as n,_t as r,bt as i,kt as a,wt as o,xt as s,yt as c}from"./iframe-DZnBmjcm.js";import{a as l,d as u,g as d,l as f,n as p,t as m,u as h}from"./wiki-CxP3o-n8.js";import{n as g,r as _,t as v}from"./BlockDesign-C6w_RCLR-D2Fdx075.js";var y,b,x,S=e((()=>{g(),y=class extends _{},b={tag:`section`,tagHeader:`h2`},x=class extends v{constructor(e,t,n,r=y){super(e,t,n,r)}}})),C,w=e((()=>{S(),C={...b}})),T=e((()=>{})),E,D=e((()=>{r(),S(),w(),T(),E=s({name:`D1Section`,__name:`D1Section`,props:o({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},C),setup(e,{expose:t,emit:r}){let o=new x(`d1.section`,e,{emits:r,classes:c(()=>({main:{"d1-section":!0}})),styles:c(()=>({}))}),s=o.render();return t(o.expose()),(e,t)=>(a(),i(n(s)))}})})),O,k=e((()=>{D(),D(),O=E,E.__docgenInfo=Object.assign({displayName:E.name??E.__name},{name:`D1Section`,exportName:`default`,displayName:`D1Section`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Section/D1Section.vue`]})})),A,j,M,N,P=e((()=>{h(),m(),w(),A=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],j=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,description:`Default slot/ Слот по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`},{name:`headline`,description:`Slot for headline/ Слот для заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`}],M=[],N={component:`Section`,props:A,slots:j,events:M,defaults:C,wikiDesign:p}})),F,I=e((()=>{h(),l(),P(),F=new u(N.component,N.props,N.defaults,N.wikiDesign,f,d)})),L=t({Section:()=>z,SectionBasic:()=>B,SectionSlots:()=>V,__namedExportsOrder:()=>H,default:()=>R}),R,z,B,V,H,U=e((()=>{k(),I(),R={title:`Ui/Section`,component:O,parameters:{design:`d1`,docs:{description:{component:F.getDescription()}}},argTypes:F.getWiki(),args:F.getValues()},z={render:e=>({components:{D1Section:O},setup:()=>({args:e}),template:`
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
    `})},B={name:`Базовые`,render:()=>({components:{D1Section:O},template:`
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
    `})},V={name:`Использование слотов`,render:()=>({components:{D1Section:O},template:`
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Section>
    `})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Section`,`SectionBasic`,`SectionSlots`]}));U();export{z as Section,B as SectionBasic,V as SectionSlots,H as __namedExportsOrder,R as default,I as i,U as n,F as r,L as t};