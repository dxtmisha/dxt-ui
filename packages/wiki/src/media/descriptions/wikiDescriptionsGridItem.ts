import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for GridItem component properties
 *
 * Описания свойств компонента GridItem
 */
export const wikiDescriptionsGridItem: StorybookComponentsDescriptionItem = {
  name: 'GridItem',
  description: {
    en: 'Individual item within a Grid component',
    ru: 'Отдельный элемент внутри компонента Grid'
  },
  possibilities: {
    en: [
      'configurable span across columns (`base`: `1`–`12`)',
      'vertical and cross-axis alignment (`align`)'
    ],
    ru: [
      'настраиваемый охват колонок (`base`: `1`–`12`)',
      'выравнивание элемента внутри ячейки сетки (`align`)'
    ]
  },
  import: [],
  render: `
    <div class="wiki-storybook-group">
      <DesignComponent v-bind="args">
        <div class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"/>
      </DesignComponent>
    </div>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'GridItem'} type={'gridItem'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item" style="min-height: 48px;">
  <div style="display: grid; grid-template-columns: repeat(12, 1fr); gap: 16px;">
    <GridItem v-bind="args">Item</GridItem>
  </div>
</div>
    `,
    description: `
Individual cell unit within a Grid layout, providing control over column spanning and alignment.
Features configurable column span settings (base from '1' to '12') and item alignment inside grid tracks (align).
Controlled via the base and align props. Use inside a Grid container to define widths and alignment for UI elements, widgets, or form fields.
    `
  }
}
