import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Section component properties
 *
 * Описания свойств компонента Section
 */
export const wikiDescriptionsSection: StorybookComponentsDescriptionItem = {
  name: 'Section',
  description: {
    en: 'A semantic container component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <section> tag by default.',
    ru: 'Семантический компонент-контейнер, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <section>.'
  },
  possibilities: {
    en: [
      'semantic grouping of content using <section> tag',
      'support for titles (h2 by default), labels, descriptions, and captions',
      'customizable layout and spacing',
      'support for icons',
      'flexible content organization'
    ],
    ru: [
      'семантическая группировка контента с использованием тега <section>',
      'поддержка заголовков (h2 по умолчанию), меток, описаний и подписей',
      'настраиваемый макет и отступы',
      'поддержка иконок',
      'гибкая организация контента'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
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
      </DesignComponent>
    `,
  stories: [
    {
      id: 'SectionBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <p>Generic section content without header.</p>
          </DesignComponent>
          <DesignComponent label="Contact Information" description="Get in touch with us">
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </DesignComponent>
          <DesignComponent headline="Our Services" label="What we do">
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
            </ul>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'SectionSlots',
      name: {
        en: 'Slots usage',
        ru: 'Использование слотов'
      },
      template: `
        <DesignComponent>
          <template #default>Default slot</template>
          <template #headline>Headline slot</template>
          <template #label>Label slot</template>
          <template #description>Description slot</template>
          <template #caption>Caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Section'} type={'block'}/>
<Canvas of={Component.SectionBasic}/>
`,
    slots: `
<Canvas of={Component.SectionSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
`,
    expose: `
<StorybookDescriptions componentName={'Expose'} type={'labelId'}/>
<StorybookDescriptions componentName={'Expose'} type={'descriptionId'}/>
`
  }
}
