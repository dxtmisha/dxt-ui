import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * Badge component properties for Storybook
 *
 * Свойства компонента Badge для Storybook
 */
export const wikiBadge: StorybookArgsToList = {
  outline: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Outline variant of the badge with transparent background and border',
        ru: 'Контурный вариант бейджа с прозрачным фоном и границей'
      }
    }
  },
  primary: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: true,
      description: {
        en: 'Primary color variant for the badge with high contrast and emphasis',
        ru: 'Основной цветовой вариант бейджа с высоким контрастом и акцентом'
      }
    }
  },
  secondary: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      defaultValue: false,
      description: {
        en: 'Secondary color variant for the badge with moderate contrast',
        ru: 'Второстепенный цветовой вариант бейджа с умеренным контрастом'
      }
    }
  }
}
