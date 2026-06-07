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
  'pagination.adaptiveMore': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Whether to enable adaptive mode for show more button',
        ru: 'Включить ли адаптивный режим для кнопки "Показать еще"'
      }
    }
  },
  'pagination.adaptiveMorePrev': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Whether to enable adaptive mode for show previous button',
        ru: 'Включить ли адаптивный режим для кнопки "Показать предыдущие"'
      }
    }
  },
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
  'pagination.ellipsis': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Ellipsis text separator',
        ru: 'Текст многоточия-разделителя'
      }
    }
  },
  'pagination.ends': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Number of buttons for the first and last pages',
        ru: 'Количество отображаемых кнопок у первой и последней страниц'
      },
      value: 1
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
      category: StorybookCategory.value,
      description: {
        en: 'Option list for rows count select',
        ru: 'Список вариантов количества строк'
      },
      value: [10, 25, 50, 100]
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
      }
    }
  },
  'pagination.showEnds': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show the first and last page buttons as numbers and ellipsis',
        ru: 'Показывать ли первую и последнюю страницы и многоточие между ними'
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
      }
    }
  },
  'pagination.showInfo': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show page range information',
        ru: 'Показывать ли информацию о диапазоне страниц'
      },
      value: true
    }
  },
  'pagination.showMore': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show "Show more" button',
        ru: 'Показывать ли кнопку "Показать еще"'
      },
      value: true
    }
  },
  'pagination.showMorePrev': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show "Show previous" button',
        ru: 'Показывать ли кнопку "Показать предыдущие"'
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
      }
    }
  },
  'pagination.showRowsPerPageLabel': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to show the text rows per page',
        ru: 'Показывать ли текст количества строк на странице'
      }
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
