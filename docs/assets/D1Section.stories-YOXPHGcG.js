import{n as e,r as t}from"./chunk-BneVvdWh.js";import{Vt as n,_t as r,bt as i,kt as a,u as o,wt as s,xt as c,yt as l}from"./iframe-I1fckF_t.js";import{a as u,d,g as f,l as p,n as m,t as h,u as g}from"./wiki-CMC-2lzg.js";import{n as _,r as v,t as y}from"./BlockDesign-C6w_RCLR-D1hcCMYr.js";var b,x,S,C=e((()=>{_(),o(),b=class extends v{},x={tag:`section`,tagHeader:`h2`},S=class extends y{constructor(e,t,n,r=b){super(e,t,n,r)}}})),w,T=e((()=>{C(),w={...x}})),E=e((()=>{})),D,O=e((()=>{r(),o(),C(),T(),E(),D=c({name:`D1Section`,__name:`D1Section`,props:s({label:{},labelId:{},description:{},descriptionId:{},caption:{},captionDecorative:{type:Boolean},icon:{},selected:{type:Boolean},iconTurn:{type:Boolean},iconHide:{type:Boolean},iconDir:{type:Boolean},iconPalette:{type:Boolean},iconAttrs:{},headline:{},tag:{},tagHeader:{}},w),setup(e,{expose:t,emit:r}){let o=new S(`d1.section`,e,{emits:r,classes:l(()=>({main:{"d1-section":!0}})),styles:l(()=>({}))}),s=o.render();return t(o.expose()),(e,t)=>(a(),i(n(s)))}})})),k,A=e((()=>{O(),O(),k=D,D.__docgenInfo=Object.assign({displayName:D.name??D.__name},{name:`D1Section`,exportName:`default`,displayName:`D1Section`,description:``,tags:{},sourceFiles:[`/Volumes/T7/Code/dxt-ui/packages/d1/src/components/Ui/Section/D1Section.vue`]})})),j,M,N,P,F=e((()=>{g(),h(),T(),j=[{name:`caption`,type:`string | number`},{name:`captionDecorative`,type:`boolean`},{name:`description`,type:`string | number`},{name:`descriptionId`,type:`string`},{name:`headline`,type:`string`},{name:`icon`,type:`IconValue<IconPropsBasic>`},{name:`iconAttrs`,type:`ConstrBind<IconPropsBasic>`},{name:`iconDir`,type:`boolean`},{name:`iconHide`,type:`boolean`},{name:`iconPalette`,type:`boolean`},{name:`iconTurn`,type:`boolean`},{name:`label`,type:`NumberOrString`},{name:`labelId`,type:`string`},{name:`selected`,type:`boolean`},{name:`tag`,type:`string`},{name:`tagHeader`,type:`string`}],M=[{name:`caption`,description:`Caption slot/ Слот заголовка`},{name:`default`,description:`Default slot/ Слот по умолчанию`},{name:`description`,description:`Description slot/ Слот описания`},{name:`headline`,description:`Slot for headline/ Слот для заголовка`},{name:`label`,description:`Label slot content/ Содержимое слота метки`},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`}],N=[],P={component:`Section`,props:j,slots:M,events:N,defaults:w,wikiDesign:m}})),I,L=e((()=>{g(),u(),F(),I=new d(P.component,P.props,P.defaults,P.wikiDesign,p,f)})),R=t({Section:()=>B,SectionBasic:()=>V,SectionSlots:()=>H,__namedExportsOrder:()=>U,default:()=>z}),z,B,V,H,U,W=e((()=>{A(),L(),z={title:`Ui/Section`,component:k,parameters:{design:`d1`,docs:{description:{component:I.getDescription()}}},argTypes:I.getWiki(),args:I.getValues()},B={render:e=>({components:{D1Section:k},setup:()=>({args:e}),template:`
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
    `})},V={name:`Базовые`,render:()=>({components:{D1Section:k},template:`
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
    `})},H={name:`Использование слотов`,render:()=>({components:{D1Section:k},template:`
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Section>
    `})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Section`,`SectionBasic`,`SectionSlots`]}));W();export{B as Section,V as SectionBasic,H as SectionSlots,U as __namedExportsOrder,z as default,L as i,W as n,I as r,R as t};