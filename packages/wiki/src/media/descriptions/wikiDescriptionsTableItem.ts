import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableItem component properties
 *
 * Описания свойств компонента TableItem
 */
export const wikiDescriptionsTableItem: StorybookComponentsDescriptionItem = {
  name: 'TableItem',
  description: {
    en: 'Baseline table cell component representing a td element',
    ru: 'Базовый компонент ячейки таблицы, представляющий элемент td'
  },
  possibilities: {
    en: [
      'support for standard td and custom tag configurations',
      'horizontal and vertical content alignment',
      'label text clamping for high-density tables',
      'responsive sticky columns capability',
      'integrated skeleton loading states',
      'disabled and selected states handling'
    ],
    ru: [
      'поддержка стандартного td и настраиваемых тегов',
      'горизонтальное и вертикальное выравнивание содержимого',
      'ограничение высоты текста метки для плотных таблиц',
      'возможность создания липких (sticky) столбцов',
      'интегрированные состояния загрузки скелетона',
      'обработка отключенного и выбранного состояний ячейки'
    ]
  },
  import: [],
  render: `
    <table>
      <tbody>
        <tr>
          <DesignComponent v-bind="args"/>
          <DesignComponent v-bind="args"/>
          <DesignComponent v-bind="args"/>
        </tr>
      </tbody>
    </table>
  `,
  stories: [
    {
      id: 'TableItemSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <table>
            <tbody>
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
            </tbody>
          </table>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableItem'} type={'tableItem'}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableItemSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Slot'} type={'default'}/>
<StorybookDescriptions componentName={'Slot'} type={'description'}/>
<StorybookDescriptions componentName={'TableItem'} type={'slots'}/>
    `
  },
  ai: {
    description: `
Representing a standard cell (td) within a table row. Manages label rendering, descriptions, optional tag changes, alignments, and text clamps.
Provides design-system standard skeleton loaders, selected highlighting, and responsive sticky positions. Renders as a plain table cell with classes mapped to active theme tokens.
Controlled via value, tag, colspan, rowspan, and state props (selected, disabled). Use inside table row structures to display structured tabular data with optimal density.
`,
    hide: true
  }
}
