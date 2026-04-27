import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Header component properties
 *
 * Описания свойств компонента Header
 */
export const wikiDescriptionsHeader: StorybookComponentsDescriptionItem = {
  name: 'Header',
  description: {
    en: 'Component for displaying headers with icons and additional information',
    ru: 'Компонент для отображения заголовков с иконками и дополнительной информацией'
  },
  possibilities: {
    en: [
      'support for different HTML tags (h1-h6, div, etc.)',
      'built-in support for icons and captions',
      'customizable trailing content via slots',
      'automatic area value management',
      'standardized typography and spacing'
    ],
    ru: [
      'поддержка различных HTML-тегов (h1-h6, div и т.д.)',
      'встроенная поддержка иконок и подписей',
      'настраиваемый правый контент через слоты',
      'автоматическое управление значением области',
      'стандартизированная типографика и отступы'
    ]
  },
  import: [],
  stories: [
    {
      id: 'HeaderBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <div class="wiki-storybook-flex--column">
          <DesignComponent label="Header Level 1" tag="h1" />
          <DesignComponent label="Header Level 2" tag="h2" />
          <DesignComponent label="Header Level 3" tag="h3" />
        </div>
      `
    },
    {
      id: 'HeaderSlots',
      name: {
        en: 'Slots',
        ru: 'Слоты'
      },
      template: `
        <DesignComponent label="Default label" caption="Default caption">
          <template #default>Custom label slot</template>
          <template #caption>Custom caption slot</template>
          <template #trailing>Trailing slot</template>
        </DesignComponent>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Header'} type={'header'}/>
<Canvas of={Component.HeaderBasic}/>
    `,
    events: ``,
    expose: ``,
    slots: `
<Canvas of={Component.HeaderSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    description: `
Component for creating structured headers with integrated support for icons and captions.
Allows flexible control over the HTML tag (h1-h6, div) to maintain proper document hierarchy.
Includes automatic area management and support for custom trailing content.
Ideal for section titles, page headers, or grouped content labeling.
    `
  }
}
