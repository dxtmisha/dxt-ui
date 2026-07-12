import type { StorybookComponentsDescriptionItem } from '../../types/storybookTypes'

/**
 * Descriptions for Table component properties
 *
 * Описания свойств компонента Table
 */
export const wikiDescriptionsTable: StorybookComponentsDescriptionItem = {
  name: 'Table',
  description: {
    en: 'Table component orchestrating grid-like column indexes and list row records',
    ru: 'Компонент таблицы, координирующий сеточные индексы колонок и список строк данных'
  },
  possibilities: {
    en: [
      'structured representation of datasets in tabular form',
      'supports headers rendering via header property',
      'row-level selections and key extraction configuration',
      'sticky headers configuration with headerTop flag',
      'custom slot support for advanced table body styling'
    ],
    ru: [
      'структурированное представление наборов данных в табличном виде',
      'поддержка рендеринга шапки через свойство header',
      'выбор на уровне строк и настройка извлечения ключей',
      'настройка липкой шапки с помощью флага headerTop',
      'поддержка кастомных слотов для расширенного оформления тела таблицы'
    ]
  },
  import: [],
  render: `
    <DesignComponent v-bind="args" />
  `,
  stories: [
    {
      id: 'TableDefault',
      name: {
        en: 'Default',
        ru: 'По умолчанию'
      },
      template: `
        <DesignComponent
          :columns="['id', 'name', 'status']"
          :header="{ id: 'ID', name: 'Name', status: 'Status' }"
          :list="[
            { id: '1', name: 'Alice', status: 'Active' },
            { id: '2', name: 'Bob', status: 'Pending' }
          ]"
        />
      `
    }
  ],
  documentation: {
    body: `
<StorybookDescriptions componentName={'Table'} type={'table'}/>

<StorybookDescriptions componentName={'Table'} type={'instruction'}/>

<StorybookDescriptions componentName={'Table'} type={'header'}/>
<Canvas of={Component.TableDefault}/>
    `,
    slots: `
<StorybookDescriptions componentName={'Table'} type={'slots'}/>
    `
  },
  ai: {
    render: `
<div :class="classDemo.item">
  <Table v-bind="args" />
</div>
    `,
    description: `
Flexible, modular and grid-like table component. Manages a columns array to render table rows, supporting custom header, lists, selection states, custom key extraction fields, and sticky headers.
Accepts body slots for complete layout customization. Controlled via columns, header (headers data), list (dataset array), and key/attributes mapping configurations.
`,
    hide: true
  }
}
