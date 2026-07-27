import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableFlexHeaderItem component properties
 *
 * Описания свойств компонента TableFlexHeaderItem
 */
export const wikiDescriptionsTableFlexHeaderItem: StorybookComponentsDescriptionItem = {
  name: 'TableFlexHeaderItem',
  description: {
    en: 'Flexbox-based table header cell component representing a header cell item',
    ru: 'Компонент ячейки заголовка таблицы на основе flexbox, представляющий элемент заголовка с флекс-макетом'
  },
  possibilities: {
    en: [
      'flexbox-based header cell layout with custom flex-basis and colspan support',
      'horizontal and vertical header alignment options',
      'interactive 3-state column sorting support',
      'integrated tooltip component for extra documentation',
      'customizable tooltip icon and slots',
      'responsive sticky headers and columns support',
      'label text clamping for high-density flex tables'
    ],
    ru: [
      'флекс-макет ячейки заголовка с поддержкой настраиваемых flex-basis и colspan (до 12 элементов)',
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
    <div class="wiki-storybook-flex">
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
      <DesignComponent v-bind="args"/>
    </div>
  `,
  stories: [
    {
      id: 'TableFlexHeaderItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex">
            <DesignComponent
              :isSkeleton="true"
              label="Label"
              description="Description"
              value="Value"
            />
            <DesignComponent
              :isSkeleton="true"
              label="Label"
              description="Description"
            />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableFlexHeaderItem'} type={'tableFlexHeaderItem'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableFlexHeaderItemSkeleton}/>
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
Flexbox-based cell within a flexible table row or header structure. Inherits from TableHeaderItem and manages flex-basis distribution via data-colspan attributes (up to 12).
Integrates a built-in Tooltip component triggered by an icon and interactive 3-state column sorting emitting sort events.
Controlled via value, tag, colspan (1 to 12), sortColumn, sortDir, and tooltip-specific properties. Use inside flexbox table container structures for fluid header layouts.
`,
    hide: true
  }
}
