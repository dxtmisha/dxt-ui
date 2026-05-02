import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for PageArea component properties
 *
 * Описания свойств компонента PageArea
 */
export const wikiDescriptionsPageArea: StorybookComponentsDescriptionItem = {
  name: 'PageArea',
  description: {
    en: 'A structural component that automatically selects and renders appropriate UI blocks (Page, Section, Block, or Group) based on the current nesting level or area context.',
    ru: 'Структурный компонент, который автоматически выбирает и отрисовывает подходящие блоки интерфейса (Page, Section, Block или Group) в зависимости от текущего уровня вложенности или контекста области.'
  },
  possibilities: {
    en: [
      'automatic component switching based on area context',
      'semantic content organization with consistent structure',
      'integration with layout zones and hierarchical state',
      'shorthand for complex page layouts with nested elements'
    ],
    ru: [
      'автоматическое переключение компонентов на основе контекста области',
      'семантическая организация контента с согласованной структурой',
      'интеграция с зонами макета и иерархическим состоянием',
      'сокращенная запись для сложных макетов страниц с вложенными элементами'
    ]
  },
  import: [],
  render: `
      <DesignComponent v-bind="args">
        <p>
          The PageArea component is a specialized container designed to structure the content within a specific page or layout region.
          It provides consistent margins, alignment, and semantic grouping for nested components.
        </p>
        <p>
          It acts as an orchestrator for various UI blocks, allowing developers to define a clear information hierarchy.
          Whether it's a dashboard overview or a detailed data view, PageArea ensures the layout remains cohesive.
        </p>
      </DesignComponent>
  `,
  stories: [
    {
      id: 'PageAreaBasic',
      name: {
        en: 'Basic',
        ru: 'Базовые'
      },
      template: `
        <DesignComponent>
          <p>This is a basic example of PageArea content. It can contain any combination of blocks, sections, or individual UI elements.</p>
        </DesignComponent>
      `
    },
    {
      id: 'PageAreaSlots',
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
<StorybookDescriptions componentName={'PageArea'} type={'pageArea'}/>
<Canvas of={Component.PageAreaBasic}/>

<StorybookDescriptions componentName={'Block'} type={'differences'}/>
    `,
    slots: `
<Canvas of={Component.PageAreaSlots}/>
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'headline'}/>
<StorybookDescriptions componentName={'Slot'} type={'label'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'caption'}/>
<StorybookDescriptions componentName={'Slot'} type={'trailing'}/>
    `
  },
  ai: {
    description: `
The PageArea component serves as a foundational structural unit for application pages.
It helps define the main content zones and ensures consistent layout management across different views.
Typically used as a root-level container within a specific page or sub-section to organize content blocks and handle area-specific logic.
    `
  }
}
