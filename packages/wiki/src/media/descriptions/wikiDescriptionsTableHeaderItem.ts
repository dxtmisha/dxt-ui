import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableHeaderItem component properties
 *
 * Описания свойств компонента TableHeaderItem
 */
export const wikiDescriptionsTableHeaderItem: StorybookComponentsDescriptionItem = {
  name: 'TableHeaderItem',
  description: {
    en: 'Table header cell component representing a th element with tooltip support',
    ru: 'Компонент ячейки заголовка таблицы, представляющий элемент th с поддержкой подсказок'
  },
  possibilities: {
    en: [
      'support for standard th and custom tag configurations',
      'horizontal and vertical header alignment options',
      'integrated tooltip component for extra documentation',
      'customizable tooltip icon and slots',
      'responsive sticky headers and columns support',
      'label text clamping for high-density tables'
    ],
    ru: [
      'поддержка стандартного th и настраиваемых тегов',
      'варианты горизонтального и вертикального выравнивания заголовка',
      'интегрированная всплывающая подсказка для дополнительной документации',
      'настраиваемая иконка подсказки и слоты',
      'поддержка адаптивных липких заголовков и столбцов',
      'ограничение высоты текста метки для плотных таблиц'
    ]
  },
  import: [],
  render: `
    <table>
      <thead>
        <tr>
          <DesignComponent v-bind="args"/>
          <DesignComponent v-bind="args"/>
          <DesignComponent v-bind="args"/>
        </tr>
      </thead>
    </table>
  `,
  stories: [],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableHeaderItem'} type={'tableHeaderItem'}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'tooltip'}/>
<StorybookDescriptions componentName={'TableItem'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Extends the TableItem cell logic to represent a table header (th). Integrates a built-in Tooltip component triggered by an icon to show helper text or descriptions.
Provides design-system standard skeleton loaders, label/description layout, and sticky position utilities. Uses help-circle as default info icon if tooltipLabel or tooltipDescription is defined.
Controlled via value, tag, colspan, rowspan, and tooltip-specific properties. Use inside table thead structures to specify column headers that require contextual documentation.
`,
    hide: true
  }
}
