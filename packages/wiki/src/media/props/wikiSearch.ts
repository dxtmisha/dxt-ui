import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSearch object contains descriptions of all properties for search
 *
 * Объект wikiSearch содержит описание всех свойств для поиска
 */
export const wikiSearch: StorybookArgsToList = {
  search: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.search,
      type: 'string',
      description: {
        en: 'Search query string',
        ru: 'Строка поискового запроса'
      }
    }
  },
  searchColumns: {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.search,
      type: 'string[]',
      description: {
        en: 'Columns or property field names to search in',
        ru: 'Колонки или названия полей свойств для поиска'
      }
    }
  },
  searchOptions: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.search,
      type: 'SearchOptions',
      description: {
        en: 'Additional search configuration options',
        ru: 'Дополнительные параметры конфигурации поиска'
      }
    }
  }
}
