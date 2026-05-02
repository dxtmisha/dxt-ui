import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,d as r,m as i,n as a,o,t as s,u as c}from"./wiki-BqBJrlEv.js";import{i as l,n as u,r as d,t as f}from"./D1Section-DG8IzqBt.js";var p,m,h,g,_=e((()=>{s(),l(),p=[{name:`area`,type:`string | undefined`},{name:`caption`,type:`string | number | undefined`},{name:`captionDecorative`,type:`boolean | undefined`},{name:`description`,type:`string | number | undefined`},{name:`descriptionId`,type:`string | undefined`},{name:`headerAttrs`,type:`ConstrBind<HeaderProps> | undefined`},{name:`headline`,type:`string | undefined`},{name:`icon`,type:`IconValue<IconProps> | undefined`},{name:`iconAttrs`,type:`ConstrBind<IconProps> | undefined`},{name:`iconDir`,type:`boolean | undefined`},{name:`iconHide`,type:`boolean | undefined`},{name:`iconPalette`,type:`boolean | undefined`},{name:`iconTurn`,type:`boolean | undefined`},{name:`label`,type:`NumberOrString | undefined`},{name:`labelId`,type:`string | undefined`},{name:`selected`,type:`boolean | undefined`},{name:`tag`,type:`string | undefined`},{name:`tagHeader`,type:`string | undefined`}],m=[{name:`caption`,description:`Caption slot/ Слот заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`default`,description:`Default slot/ Слот по умолчанию`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`description`,description:`Description slot/ Слот описания`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`headline`,description:`Slot for headline/ Слот для заголовка`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`label`,description:`Label slot content/ Содержимое слота метки`,properties:[{name:`props`,type:`(any) | undefined`}]},{name:`trailing`,description:`Slot for trailing content/ Слот для правого контента`,properties:[{name:`props`,type:`(any) | undefined`}]}],h=[],g={component:`Section`,props:p,slots:m,events:h,defaults:d,wikiDesign:a}})),v,y=e((()=>{r(),o(),_(),v=new c(g.component,g.props,g.defaults,g.wikiDesign,n,i)})),b=t({Section:()=>S,SectionBasic:()=>C,SectionSlots:()=>w,__namedExportsOrder:()=>T,default:()=>x}),x,S,C,w,T,E=e((()=>{u(),y(),x={title:`Ui/Section`,component:f,parameters:{design:`d1`,docs:{description:{component:v.getDescription()}}},argTypes:v.getWiki(),args:v.getValues()},S={render:e=>({components:{D1Section:f},setup:()=>({args:e}),template:`
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
    `})},C={name:`Базовые`,render:()=>({components:{D1Section:f},template:`
        <D1Section
          headline="User Profile Settings"
          label="Personalization"
          description="Customize your experience and notification preferences."
        >
          <p>This section allows you to manage your personal display settings, theme selection, and language preferences. Changes are saved automatically as you update them.</p>
        </D1Section>
    `})},w={name:`Использование слотов`,render:()=>({components:{D1Section:f},template:`
        <D1Section>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </D1Section>
    `})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Базовые',
  render: () => ({
    components: {
      D1Section
    },
    template: \`
        <D1Section
          headline="User Profile Settings"
          label="Personalization"
          description="Customize your experience and notification preferences."
        >
          <p>This section allows you to manage your personal display settings, theme selection, and language preferences. Changes are saved automatically as you update them.</p>
        </D1Section>
    \`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Section`,`SectionBasic`,`SectionSlots`]}));E();export{S as Section,C as SectionBasic,w as SectionSlots,T as __namedExportsOrder,x as default,y as i,E as n,v as r,b as t};