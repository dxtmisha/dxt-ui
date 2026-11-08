import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiScrollbar object contains descriptions of all properties for the scrollbar component
 *
 * Объект wikiScrollbar содержит описание всех свойств для компонента скроллбара
 */
export const wikiScrollbar: StorybookArgsToList = {
  'scrollbar.divider': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Show divider lines at top and bottom depending on scroll position',
        ru: 'Показывать разделительные линии сверху и снизу в зависимости от положения скролла'
      }
    },
    hide: true
  },
  'scrollbar.dividerBottom': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Show the divider line at the bottom',
        ru: 'Показывать разделительную линию снизу'
      }
    },
    isDemo: true
  },
  'scrollbar.dividerHide': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Hide divider lines',
        ru: 'Скрыть разделительные линии'
      }
    },
    hide: true
  },
  'scrollbar.dividerTop': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Show the divider line at the top',
        ru: 'Показывать разделительную линию сверху'
      }
    },
    isDemo: true
  },
  'scrollbar.inverse': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Invert divider line behavior - show lines when the scroll is at beginning/end',
        ru: 'Инвертировать поведение разделительных линий - показывать линии, когда скролл в начале/конце'
      }
    },
    hide: true
  },
  'scrollbar.standard': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Use standard browser scrollbar',
        ru: 'Использовать стандартный скролл браузера'
      }
    },
    hide: true
  },
  'scrollbar.visible': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Controls element visibility and scrolling behavior (overflow: visible)',
        ru: 'Управляет видимостью элемента и поведением прокрутки (overflow: visible)'
      }
    },
    hide: true
  }
}
