import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableRecord component properties
 *
 * Описания свойств компонента TableRecord
 */
export const wikiDescriptionsTableRecord: StorybookComponentsDescriptionItem = {
  name: 'TableRecord',
  description: {
    en: 'Table row component coordinating column cell rendering from data',
    ru: 'Компонент строки таблицы, координирующий рендеринг ячеек столбцов из данных'
  },
  possibilities: {
    en: [
      'automatic cell generation from columns and row item object',
      'supports headers rendering via isHeader flag',
      'row-wide selected and disabled states',
      'dynamic slots per column index for customized cell render'
    ],
    ru: [
      'автоматическая генерация ячеек на основе столбцов и объекта строки данных',
      'поддержка рендеринга заголовков через флаг isHeader',
      'состояния выбора и отключения на уровне всей строки',
      'динамические слоты для каждого индекса столбца для кастомного рендеринга ячеек'
    ]
  },
  import: [],
  render: `
    <table>
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
    </table>
  `,
  stories: [
    {
      id: 'TableRecordIsHeader',
      name: {
        en: 'Header row',
        ru: 'Строка заголовка'
      },
      template: `
        <table style="border-collapse: collapse; width: 100%;">
          <thead>
            <DesignComponent
              :isHeader="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
            />
          </thead>
        </table>
      `
    },
    {
      id: 'TableRecordSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <table style="border-collapse: collapse; width: 100%;">
            <tbody>
              <DesignComponent
                :isSkeleton="true"
                :columns="['id', 'name', 'role', 'status']"
                :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
              />
            </tbody>
          </table>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableRecord'} type={'tableRecord'}/>

<StorybookDescriptions componentName={'TableRecord'} type={'instruction'}/>

<StorybookDescriptions componentName={'TableRecord'} type={'isHeader'}/>
<Canvas of={Component.TableRecordIsHeader}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableRecordSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'TableRecord'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <table style="border-collapse: collapse; width: 100%;">
    <TableRecord v-bind="args" />
  </table>
</div>
    `,
    description: `
Orchestrating component for table rows (tr). Maps list of column indexes to individual cell components (TableHeaderItem or TableItem) by referencing row item fields.
Allows granular slot customization where slot names match column keys, enabling advanced formatting or embedding other UI components per column. Features selection and disabled flags.
Controlled via columns (array of index strings), item (row data object), and isHeader (boolean). Use to build efficient tables by mapping list datasets to structured row components.
`,
    hide: true
  }
}
