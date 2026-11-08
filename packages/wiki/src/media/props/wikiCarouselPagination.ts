import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Descriptions of CarouselPagination properties
 *
 * Описания свойств CarouselPagination
 */
export const wikiCarouselPagination: StorybookArgsToList = {
  'carouselPagination.count': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.value,
      type: ['number', 'string'],
      description: {
        en: 'Total item count',
        ru: 'Общее количество элементов'
      },
      value: '10'
    },
    hide: true
  },
  'carouselPagination.dynamic': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables dynamic mode with scaling bullets',
        ru: 'Включает динамический режим с масштабированием буллетов'
      }
    },
    isDemo: true
  },
  'carouselPagination.selected': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.status,
      type: ['number', 'string'],
      description: {
        en: 'Current active slide',
        ru: 'Текущий активный слайд'
      },
      value: '1'
    },
    hide: true
  },
  'carouselPagination.vertical': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Vertical layout orientation',
        ru: 'Вертикальная ориентация'
      }
    },
    isDemo: true
  },
  'carouselPagination.visible': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.option,
      type: ['number', 'string'],
      description: {
        en: 'Number of visible bullets in dynamic mode',
        ru: 'Количество отображаемых буллетов в динамическом режиме'
      },
      value: '5'
    },
    hide: true
  }
}
