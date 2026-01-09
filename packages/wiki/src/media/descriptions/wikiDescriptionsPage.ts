import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Page component properties
 *
 * Описания свойств компонента Page
 */
export const wikiDescriptionsPage: StorybookComponentsDescriptionItem = {
  name: 'Page',
  description: {
    en: 'A top-level semantic container component representing the main content of a document. It uses the <main> tag by default and supports high-level headers and descriptions.',
    ru: 'Семантический компонент-контейнер верхнего уровня, представляющий основное содержимое документа. По умолчанию использует тег <main> и поддерживает заголовки высокого уровня.'
  },
  possibilities: {
    en: [
      'semantic wrapper for main content using <main> tag',
      'support for main titles (h1 by default), labels, descriptions, and captions',
      'customizable layout and spacing',
      'support for icons',
      'flexible content organization'
    ],
    ru: [
      'семантическая обертка для основного контента с использованием тега <main>',
      'поддержка главных заголовков (h1 по умолчанию), меток, описаний и подписей',
      'настраиваемый макет и отступы',
      'поддержка иконок',
      'гибкая организация контента'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
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
      </DesignComponent>
    `,
  stories: [
    {
      id: 'PageBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex-column">
          <DesignComponent>
            <p>Simple page content wrapper.</p>
          </DesignComponent>
          <DesignComponent label="Documentation" description="Learn how to use the library">
            <p>Welcome to the documentation page.</p>
          </DesignComponent>
          <DesignComponent headline="Dashboard Overview" label="Analytics">
            <div style="height: 100px; background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
              Chart Placeholder
            </div>
          </DesignComponent>
        </div>
      `
    },
    {
      id: 'PageSlots',
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
<StorybookDescriptions componentName={'Page'} type={'block'}/>
<Canvas of={Component.PageBasic}/>
`,
    slots: `
<Canvas of={Component.PageSlots}/>
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
