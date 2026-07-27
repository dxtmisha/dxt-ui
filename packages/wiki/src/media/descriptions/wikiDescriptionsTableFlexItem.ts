import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableFlexItem component properties
 *
 * Описания свойств компонента TableFlexItem
 */
export const wikiDescriptionsTableFlexItem: StorybookComponentsDescriptionItem = {
  name: 'TableFlexItem',
  description: {
    en: 'Flexbox-based table cell component representing a flexbox layout cell item',
    ru: 'Компонент ячейки таблицы на основе flexbox, представляющий элемент ячейки с флекс-макетом'
  },
  possibilities: {
    en: [
      'flexbox-based cell layout with custom flex-basis and colspan support',
      'horizontal and vertical content alignment',
      'label text clamping for high-density flex tables',
      'responsive sticky columns capability',
      'integrated skeleton loading states',
      'disabled and selected states handling'
    ],
    ru: [
      'флекс-макет ячейки с поддержкой настраиваемых flex-basis и colspan (до 12 элементов)',
      'горизонтальное и вертикальное выравнивание содержимого',
      'ограничение высоты текста метки для плотных таблиц',
      'возможность создания липких (sticky) столбцов',
      'интегрированные состояния загрузки скелетона',
      'обработка отключенного и выбранного состояний ячейки'
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
      id: 'TableFlexItemSkeleton',
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
<StorybookDescriptions componentName={'TableFlexItem'} type={'tableFlexItem'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableFlexItemSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'TableItem'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Flexbox-based cell within a flexible table row structure. Inherits from TableItem and manages flex-basis distribution via data-colspan attributes (up to 12).
Provides label rendering, descriptions, optional tag changes, alignments, text clamps, skeleton loaders, selected highlighting, and responsive sticky positions.
Controlled via value, tag, colspan (1 to 12), and state props (selected, disabled). Use inside flexbox table container structures for fluid tabular layouts.
`,
    hide: true
  }
}
