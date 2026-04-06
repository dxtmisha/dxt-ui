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
      'configurable span across columns',
      'responsive span settings (base, sm, md, lg, xl, 2xl)'
    ],
    ru: [
      'настраиваемый охват колонок (span)',
      'адаптивные настройки охвата (base, sm, md, lg, xl, 2xl)'
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
Individual cell unit within a Grid layout, providing granular control over column spanning across various screen resolutions. Enables building complex, responsive layouts with minimal CSS.
Features responsive span settings for all major breakpoints (base, sm, md, lg, xl, 2xl). Allows items to occupy different widths on mobile vs desktop, ensuring optimal use of screen space.
Controlled via the base prop for default span and breakpoint-specific props (e.g., md="6"). Use inside a Grid container to define local widths for UI elements, widgets, or form fields.
    `
  }
}
