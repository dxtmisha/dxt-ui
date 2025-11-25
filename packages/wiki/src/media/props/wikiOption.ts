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
  isSkeleton: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,

      description: {
        en: 'Displays the component in skeleton mode',
        ru: 'Отображает компонент в режиме скелетона'
      }
    }
  }
}
