import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Container component properties
 *
 * Описания свойств компонента Container
 */
export const wikiDescriptionsContainer: StorybookComponentsDescriptionItem = {
  name: 'Container',
  description: {
    en: 'A lightweight layout container for centering and constraining content width with configurable horizontal alignment.',
    ru: 'Легковесный компонент-контейнер для центрирования и ограничения ширины контента с настраиваемым горизонтальным выравниванием.'
  },
  possibilities: {
    en: [
      'horizontal alignment with align: left | center | right',
      'configurable width and horizontal margins via design tokens',
      'default slot for wrapping arbitrary content',
      'area context support through the area prop'
    ],
    ru: [
      'горизонтальное выравнивание через align: left | center | right',
      'настройка ширины и горизонтальных отступов через дизайн-токены',
      'слот default для оборачивания произвольного контента',
      'поддержка контекста области через свойство area'
    ]
  },
  import: [],
  render: `
    <DesignComponent v-bind="args">
      <p>
        Container helps keep content readable by limiting line length and controlling side spacing.
      </p>
      <p>
        Use it as a base layout wrapper for page sections, forms, and content blocks.
      </p>
    </DesignComponent>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Container'} type={'container'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Container v-bind="args">
    Main content goes here.
  </Container>
</div>
    `,
    description: `
Layout wrapper used to constrain content width and manage horizontal spacing in a predictable way.
Supports alignment options (left, center, right), width tokens, and side margins so page content keeps consistent rhythm across breakpoints.
Use as a foundational container around sections, forms, and text-heavy blocks to improve readability and layout consistency.
    `
  }
}
