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
    description: `
GridItem represents a single cell or unit within a Grid layout, allowing control over its span across various breakpoints.

**Key Features:**
1. **Column Span:** Set the number of columns to span (1 to 12).
2. **Responsive Spans:** Control layout for different screen sizes:
   - \`base\`: Default span.
   - \`sm\`, \`md\`, \`lg\`, \`xl\`, \`xl2\`: Breakpoint-specific spans.

**Usage Examples:**

- **Standard Item:** \`<GridItem base="6">...</GridItem>\`
- **Responsive Item:** \`<GridItem base="12" md="6" lg="4">...</GridItem>\`
    `
  }
}
