import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Group component properties
 *
 * Описания свойств компонента Group
 */
export const wikiDescriptionsGroup: StorybookComponentsDescriptionItem = {
  name: 'Group',
  description: {
    en: 'A structural component designed to group related content with support for headers, descriptions, and flexible layout options. It uses the <div> tag and <h4> header by default.',
    ru: 'Структурный компонент, предназначенный для группировки связанного контента с поддержкой заголовков, описаний и гибких настроек макета. По умолчанию использует тег <div> и заголовок <h4>.'
  },
  possibilities: {
    en: [
      'standardized grouping of content using <div> tag',
      'support for titles (h4 by default), labels, descriptions, and captions',
      'support for icons',
      'fully inherits Block component capabilities'
    ],
    ru: [
      'стандартизированная группировка контента с использованием тега <div>',
      'поддержка заголовков (h4 по умолчанию), меток, описаний и подписей',
      'поддержка иконок',
      'полностью наследует возможности компонента Block'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <p>
          The Group component serves as a container for grouping thematic content within a page or another component.
          It defaults to using the <code>&lt;div&gt;</code> HTML tag and <code>&lt;h4&gt;</code> for headlines.
        </p>
        <p>
          It inherits all the features of the Block component, providing a consistent way to handle headers, descriptions, and icons.
        </p>
      </DesignComponent>
    `,
  stories: [
    {
      id: 'GroupBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <DesignComponent
          headline="Notifications"
          label="Settings"
          icon="notifications"
          description="Configure how you receive notifications and manage your alert settings for a better user experience."
        >
          <p>
            Control how and when you receive updates from the system. You can choose to be notified about
            important account activities, new features, and marketing updates.
          </p>
          <p>
            Tailor your preferences to stay informed without being overwhelmed by unnecessary messages.
            Changes are saved automatically and applied within a few minutes.
          </p>
        </DesignComponent>
      `
    },
    {
      id: 'GroupSlots',
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
<StorybookDescriptions componentName={'Group'} type={'group'}/>
<Canvas of={Component.GroupBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
`,
    slots: `
<Canvas of={Component.GroupSlots}/>
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
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Group v-bind="args">
      Content of the group.
  </Group>
</div>
    `,
    description: `
Structural component for organizing related content with a standardized header hierarchy. Acts as a semantic wrapper for subsections or grouping elements within a larger section or card.
Features support for headlines (h4 by default), labels, icons, and descriptions. Inherits all capabilities of the Block component, providing a consistent layout for titles and body content.
Controlled via headline, label, and description props. Use for grouping settings, categorizing information, or breaking down complex forms into logical, titled segments.
    `
  }
}
