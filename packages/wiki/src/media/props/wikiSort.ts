import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSort object contains descriptions of all properties for sorting
 *
 * Объект wikiSort содержит описание всех свойств для сортировки
 */
export const wikiSort: StorybookArgsToList = {
  showSort: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.sort,
      type: 'boolean',
      description: {
        en: 'Controls visibility of sorting element',
        ru: 'Управляет видимостью элемента сортировки'
      }
    },
    hide: true
  },
  sortColumn: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.sort,
      type: 'string',
      description: {
        en: 'Current sorted column index name',
        ru: 'Имя индекса текущей отсортированной колонки'
      }
    },
    hide: true
  },
  sort: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.sort,
      type: ['string', 'array', 'object'],
      description: {
        en: 'Target column(s) or property key(s) for sorting',
        ru: 'Целевая колонка (колонки) или ключ (ключи) свойств для сортировки'
      }
    },
    hide: true
  },
  sortDir: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.sort,
      type: ['string', 'SortDir'],
      description: {
        en: 'Sorting direction (\'asc\' or \'desc\')',
        ru: 'Направление сортировки (\'asc\' или \'desc\')'
      }
    },
    hide: true
  },
  sortFunction: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.sort,
      type: 'SortFunction',
      description: {
        en: 'Custom sorting comparison function',
        ru: 'Пользовательская функция сравнения для сортировки'
      }
    },
    hide: true
  }
}
