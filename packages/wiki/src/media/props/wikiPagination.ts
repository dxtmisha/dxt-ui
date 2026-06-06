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
    type: StorybookControl.string,
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
  'pagination.hideIfOne': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to hide pagination if only one page exists',
        ru: 'Скрывать ли пагинацию, если страница всего одна'
      },
      value: true
    }
  },
  'pagination.menuRows': {
    type: StorybookControl.array,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Option list for rows count select',
        ru: 'Список вариантов количества строк'
      }
    }
  },
  'pagination.rows': {
    type: StorybookControl.string,
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
  'pagination.showArrows': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show the next and back buttons',
        ru: 'Показывать ли кнопки «Назад» и «Вперед»'
      },
      value: true
    }
  },
  'pagination.showFirstLast': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show the first and last page buttons',
        ru: 'Показывать ли кнопки перехода к первой и последней страницам'
      },
      value: true
    }
  },
  'pagination.showInfo': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show page range information',
        ru: 'Показывать ли информацию о диапазоне страниц'
      }
    }
  },
  'pagination.showMore': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show "Show more" button',
        ru: 'Показывать ли кнопку "Показать еще"'
      }
    }
  },
  'pagination.showPagination': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show the page navigation buttons',
        ru: 'Показывать ли панель с кнопками страниц'
      },
      value: true
    }
  },
  'pagination.showRowsPerPageLabel': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show the text rows per page',
        ru: 'Показывать ли текст количества строк на странице'
      },
      value: true
    }
  },
  'pagination.value': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Current page number',
        ru: 'Номер текущей страницы'
      },
      value: '3'
    }
  },
  'pagination.visible': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Number of visible page links',
        ru: 'Количество отображаемых ссылок на страницы'
      },
      value: 3
    }
  }
}
