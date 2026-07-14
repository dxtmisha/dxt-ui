import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTable object contains properties for the Table component
 *
 * Объект wikiTable содержит свойства для компонента Table
 */
export const wikiTable: StorybookArgsToList = {
  'table.columns': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      type: 'string[]',
      description: {
        en: 'Column index names',
        ru: 'Имена индексов колонок'
      },
      value: ['id', 'name', 'status']
    },
    hide: true
  },
  'table.header': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Table header data',
        ru: 'Данные шапки таблицы'
      },
      value: { id: 'ID', name: 'Name', status: 'Status' }
    },
    hide: true
  },
  'table.headerTop': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Sticky positioning of the table header at the top',
        ru: 'Липкое позиционирование шапки таблицы сверху'
      }
    }
  },
  'table.list': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'List of row records',
        ru: 'Список записей строк'
      },
      value: [
        { id: '1', name: 'Alice', status: 'Active' },
        { id: '2', name: 'Bob', status: 'Pending' }
      ]
    },
    hide: true
  }
}
