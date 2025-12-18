import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Block component properties
 *
 * Описания свойств компонента Block
 */
export const wikiDescriptionsBlock: StorybookComponentsDescriptionItem = {
  name: 'Block',
  description: {
    en: 'A versatile structural component that serves as a container with support for labels, descriptions, captions, icons, and headlines',
    ru: 'Универсальный структурный компонент, служащий контейнером с поддержкой меток, описаний, подписей, иконок и заголовков'
  },
  possibilities: {
    en: [
      'displaying a headline, label, description, and caption',
      'support for icons',
      'customizable HTML tag',
      'flexible layout for content organization'
    ],
    ru: [
      'отображение заголовка, метки, описания и подписи',
      'поддержка иконок',
      'настраиваемый HTML-тег',
      'гибкая компоновка для организации контента'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <p>
          The Block component serves as a fundamental building unit for constructing complex user interfaces.
          It provides a flexible container that can host various content elements such as labels, descriptions, and icons.
        </p>
        <p>
          With its versatile design, the Block component adapts seamlessly to different layout requirements.
          Whether you need a simple content wrapper or a detailed card with a headline and caption, this component handles it all.
        </p>
        <p>
          Developers can easily customize the appearance and behavior of the Block using properties and slots.
          This ensures that the component fits perfectly into any design system while maintaining consistency across the application.
        </p>
      </DesignComponent>
    `,
  stories: [
    {
      id: 'BlockBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex">
          <DesignComponent>Content</DesignComponent>
          <DesignComponent label="Label" description="Description">Content</DesignComponent>
          <DesignComponent headline="Headline" label="Label">Content</DesignComponent>
          <DesignComponent icon="home" label="Label">Content</DesignComponent>
        </div>
      `
    },
    {
      id: 'BlockSlots',
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
<StorybookDescriptions componentName={'Block'} type={'block'}/>
`,
    slots: `
<Canvas of={Component.BlockSlots}/>
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
