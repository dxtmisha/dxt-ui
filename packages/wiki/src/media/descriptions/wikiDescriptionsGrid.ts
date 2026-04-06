import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Grid component properties
 *
 * Описания свойств компонента Grid
 */
export const wikiDescriptionsGrid: StorybookComponentsDescriptionItem = {
  name: 'Grid',
  description: {
    en: 'Layout component for creating grid structures with customizable columns',
    ru: 'Компонент макета для создания сеточных структур с настраиваемыми колонками'
  },
  possibilities: {
    en: [
      'configurable number of columns',
      'gap customization',
      'responsive layout support'
    ],
    ru: [
      'настраиваемое количество колонок',
      'настройка отступов (gap)',
      'поддержка адаптивной верстки'
    ]
  },
  import: [],
  render: `
    <DesignComponent>
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--blue wiki-storybook-dummy--size--sm"
          style="grid-column: span 2;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--red wiki-storybook-dummy--size--sm"
          style="grid-column: span 4;"
        />
        <div
          class="wiki-storybook-dummy wiki-storybook-dummy--color--green wiki-storybook-dummy--size--sm"
          style="grid-column: span 6;"
        />
    </DesignComponent>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Grid'} type={'grid'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
    `
  },
  ai: {
    render: `
      <div :class="classDemo.item">
        <Grid v-bind="args">
          <div style="grid-column: span 4;">1</div>
          <div style="grid-column: span 4;">2</div>
          <div style="grid-column: span 4;">3</div>
        </Grid>
      </div>
    `,
    description: `
Layout utility designed to manage the arrangement of items in a flexible, column-based system. Provides a standardized way to create responsive multi-column layouts across different screen sizes.
Features a default 12-column grid structure with customizable gaps and responsive breakpoint support. Works in tandem with GridItem to provide precise control over column spans and alignment.
Controlled primarily via CSS variables for columns and gaps. Use as a top-level container for dashboard widgets, form layouts, or any content requiring a structured multi-column arrangement.
    `
  }
}
