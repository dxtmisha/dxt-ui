import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiAnchor object contains descriptions of all properties for the Anchor component
 *
 * Объект wikiAnchor содержит описание всех свойств для компонента Anchor
 */
export const wikiAnchor: StorybookArgsToList = {
  'anchor.behavior': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Defines the transition animation',
        ru: 'Определяет анимацию перехода'
      }
    }
  },
  'anchor.block': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Defines vertical alignment',
        ru: 'Определяет вертикальное выравнивание'
      }
    }
  },
  'anchor.delayHide': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Delay before hiding the element (in ms)',
        ru: 'Задержка перед скрытием элемента (в мс)'
      }
    }
  },
  'anchor.inline': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Defines horizontal alignment',
        ru: 'Определяет горизонтальное выравнивание'
      }
    }
  },
  'anchor.isCopy': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables copy to clipboard functionality',
        ru: 'Включает функцию копирования в буфер обмена'
      }
    }
  },
  'anchor.name': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Anchor name for navigation within the page',
        ru: 'Имя якоря для навигации внутри страницы'
      },
      value: 'name-example'
    }
  },
  'anchor.shift': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Scroll offset from the top edge (in pixels)',
        ru: 'Смещение прокрутки от верхнего края (в пикселях)'
      }
    }
  }
}
