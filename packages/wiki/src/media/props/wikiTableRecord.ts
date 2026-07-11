import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTableRecord object contains properties for the TableRecord component
 *
 * Объект wikiTableRecord содержит свойства для компонента TableRecord
 */
export const wikiTableRecord: StorybookArgsToList = {
  'tableRecord.columns': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.value,
      type: 'string[]',
      description: {
        en: 'Column index names',
        ru: 'Имена индексов колонок'
      },
      value: ['id', 'name', 'role', 'status']
    },
    hide: true
  },
  'tableRecord.isHeader': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Whether the row represents a table header',
        ru: 'Является ли строка заголовком таблицы'
      }
    },
    isDemo: true
  },
  'tableRecord.item': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Row data object',
        ru: 'Объект данных строки'
      },
      value: {
        id: '1',
        name: 'Misha',
        role: 'developer',
        status: 'active',
        email: 'misha@example.com',
        age: 30,
        country: 'Vietnam',
        joined: '2026-07-11'
      }
    },
    hide: true
  }
}
