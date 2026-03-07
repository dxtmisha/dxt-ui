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
    description: `
Grid is a layout utility designed to manage the arrangement of items in a column-based system.

**Key Features:**
1. **Columns:** Default is 12 columns, configurable via CSS variables.
2. **Layout:** Works in tandem with GridItem for precise control.

**Usage Examples:**

- **Basic Grid:** \`<Grid><GridItem>...</GridItem></Grid>\`
    `
  }
}
