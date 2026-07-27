import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for TableFlexRecord component properties
 *
 * Описания свойств компонента TableFlexRecord
 */
export const wikiDescriptionsTableFlexRecord: StorybookComponentsDescriptionItem = {
  name: 'TableFlexRecord',
  description: {
    en: 'Flexbox-based table row component coordinating flex cell rendering from data',
    ru: 'Компонент строки флекс-таблицы, координирующий рендеринг ячеек из данных'
  },
  possibilities: {
    en: [
      'automatic cell generation from columns and row item object in flexbox layout',
      'supports flex headers rendering via isHeader flag',
      'row-wide selected and disabled states',
      'dynamic slots per column index for customized cell render'
    ],
    ru: [
      'автоматическая генерация ячеек на основе столбцов и объекта строки данных в флекс-макете',
      'поддержка рендеринга заголовков флекс-таблицы через флаг isHeader',
      'состояния выбора и отключения на уровне всей строки',
      'динамические слоты для каждого индекса столбца для кастомного рендеринга ячеек'
    ]
  },
  import: [],
  render: `
    <div class="wiki-storybook-flex" style="flex-direction: column;">
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
      <DesignComponent v-bind="args" />
    </div>
  `,
  stories: [
    {
      id: 'TableFlexRecordIsHeader',
      name: {
        en: 'Header row',
        ru: 'Строка заголовка'
      },
      template: `
        <div class="wiki-storybook-flex" style="flex-direction: column;">
          <DesignComponent
            :isHeader="true"
            :columns="['id', 'name', 'role', 'status']"
            :item="{ id: 'ID', name: 'Имя', role: 'Должность', status: 'Статус' }"
          />
        </div>
      `
    },
    {
      id: 'TableFlexRecordSkeleton',
      name: {
        en: 'Skeleton loading',
        ru: 'Загрузка скелетона'
      },
      components: ['Skeleton'],
      template: `
        <DesignSkeleton :active="true">
          <div class="wiki-storybook-flex" style="flex-direction: column;">
            <DesignComponent
              :isSkeleton="true"
              :columns="['id', 'name', 'role', 'status']"
              :item="{ id: '1', name: 'Misha', role: 'developer', status: 'active' }"
            />
          </div>
        </DesignSkeleton>
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'TableFlexRecord'} type={'tableFlexRecord'}/>

<StorybookDescriptions componentName={'TableRecord'} type={'instruction'}/>

<StorybookDescriptions componentName={'TableRecord'} type={'isHeader'}/>
<Canvas of={Component.TableFlexRecordIsHeader}/>

<StorybookDescriptions componentName={'Style'} type={'isSkeleton'}/>
<Canvas of={Component.TableFlexRecordSkeleton}/>
    `,
    slots: `
<StorybookDescriptions componentName={'TableRecord'} type={'slots'}/>
    `,
    events: `
<StorybookDescriptions componentName={'Event'} type={'sort'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <div class="wiki-storybook-flex" style="flex-direction: column;">
    <TableFlexRecord v-bind="args" />
  </div>
</div>
    `,
    description: `
Orchestrating component for flexbox table rows. Maps list of column indexes to individual flex cell components (TableFlexHeaderItem or TableFlexItem) by referencing row item fields.
Allows granular slot customization where slot names match column keys, enabling advanced formatting or embedding other UI components per column. Features selection and disabled flags.
Controlled via columns (array of index strings), item (row data object), and isHeader (boolean). Use to build efficient flex tables by mapping list datasets to structured row components.
`,
    hide: true
  }
}
