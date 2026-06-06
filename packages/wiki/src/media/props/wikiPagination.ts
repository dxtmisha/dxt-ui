import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiPagination object contains descriptions of all properties for the pagination component
 *
 * Объект wikiPagination содержит описание всех свойств для компонента пагинации
 */
export const wikiPagination: StorybookArgsToList = {
  'pagination.count': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Total item count',
        ru: 'Общее количество элементов'
      },
      value: '100'
    }
  },
  'pagination.rows': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Number of rows per page',
        ru: 'Количество строк на странице'
      },
      value: '10'
    }
  },
  'pagination.value': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Current page number',
        ru: 'Номер текущей страницы'
      },
      value: '3'
    }
  }
}
