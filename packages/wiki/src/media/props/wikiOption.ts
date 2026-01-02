import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Props for the Wiki component in Storybook
 *
 * Свойства для компонента Wiki в Storybook
 */
export const wikiOption: StorybookArgsToList = {
  dir: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Mirrors the component depending on site direction (RTL/LTR)',
        ru: 'Зеркально отражает компонент в зависимости от направления сайта (RTL/LTR)'
      }
    }
  },
  dynamic: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Enables dynamic reactions to hover and focus',
        ru: 'Включает динамическую реакцию на hover и focus'
      }
    }
  },
  dynamicHover: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Enables dynamic hover effect for the component',
        ru: 'Включает динамический эффект наведения для компонента'
      }
    }
  },
  grid: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Enables grid layout mode',
        ru: 'Включает режим сетки'
      }
    }
  },
  inDom: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Indicates whether the window is in the DOM',
        ru: 'Указывает, присутствует ли окно в DOM'
      }
    }
  },
  isSkeleton: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Displays the component in skeleton mode',
        ru: 'Отображает компонент в режиме скелетона'
      }
    }
  },
  tag: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      options: [],
      description: {
        en: 'Sets HTML tag for the component element',
        ru: 'Задает HTML‑тег для элемента компонента'
      }
    }
  },
  tagBody: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      options: [],
      description: {
        en: 'Sets HTML tag for the body/content container element',
        ru: 'Задает HTML‑тег для элемента контейнера тела/содержимого'
      }
    }
  },
  tagHeader: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.option,
      type: 'string',
      options: [],
      description: {
        en: 'Sets HTML tag for the header container element',
        ru: 'Задает HTML‑тег для элемента контейнера шапки'
      }
    }
  }
}
