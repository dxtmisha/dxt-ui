import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiBadge object contains descriptions of all properties for the Badge component
 *
 * Объект wikiBadge содержит описание всех свойств для компонента Badge
 */
export const wikiBadge: StorybookArgsToList = {
  'badge.outline': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Outline variant of the badge with a transparent background and border',
        ru: 'Контурный вариант бейджа с прозрачным фоном и границей'
      }
    },
    isDemo: true
  },
  'badge.primary': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Primary color variant for the badge with high contrast and emphasis',
        ru: 'Основной цветовой вариант бейджа с высоким контрастом и акцентом'
      }
    },
    isDemo: true
  },
  'badge.secondary': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Secondary color variant for the badge with moderate contrast',
        ru: 'Второстепенный цветовой вариант бейджа с умеренным контрастом'
      }
    },
    isDemo: true
  }
}
