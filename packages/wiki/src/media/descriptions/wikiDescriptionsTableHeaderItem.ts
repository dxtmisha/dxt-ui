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
      'interactive 3-state column sorting support',
      'integrated tooltip component for extra documentation',
      'customizable tooltip icon and slots',
      'responsive sticky headers and columns support',
      'label text clamping for high-density tables'
    ],
    ru: [
      'поддержка стандартного th и настраиваемых тегов',
      'варианты горизонтального и вертикального выравнивания заголовка',
      'интерактивная 3-состоятельная сортировка колонок',
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
  stories: [
    {
      id: 'TableHeaderItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <table>
            <thead>
              <tr>
                <DesignComponent
                  :isSkeleton="true"
                  value="Value"
                />
                <DesignComponent
                  :isSkeleton="true"
                  label="Label"
                  description="Description"
                />
              </tr>
            </thead>
          </table>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableHeaderItem'} type={'tableHeaderItem'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableHeaderItemSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'Slot'} type={'tooltip'}/>
<StorybookDescriptions componentName={'TableItem'} type={'slots'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'sort'}/>
    `
  },
  ai: {
    description: `
Extends the TableItem cell logic to represent a table header (th). Integrates a built-in Tooltip component triggered by an icon and interactive 3-state column sorting (asc -> desc -> disabled) emitting sort events.
Provides design-system standard skeleton loaders, label/description layout, and sticky position utilities. Uses help-circle as default info icon if tooltipLabel or tooltipDescription is defined.
Controlled via value, tag, colspan, rowspan, sortColumn, sortDir, and tooltip-specific properties. Use inside table thead structures to specify column headers that require contextual documentation or sorting.
`,
    hide: true
  }
}
