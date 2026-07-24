import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSkeletonItem object contains descriptions of all properties for the SkeletonItem component
 *
 * Объект wikiSkeletonItem содержит описание всех свойств для компонента SkeletonItem
 */
export const wikiSkeletonItem: StorybookArgsToList = {
  'skeletonItem.background': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables background placeholder skeleton token styling',
        ru: 'Включает стиль токена скелетона для фоновой заглушки'
      }
    },
    isDemo: true
  },
  'skeletonItem.backgroundVariant': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables background variant skeleton token styling',
        ru: 'Включает стиль токена скелетона для фонового варианта'
      }
    },
    isDemo: true
  },
  'skeletonItem.border': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables border skeleton token styling',
        ru: 'Включает стиль токена скелетона для рамки'
      }
    },
    isDemo: true
  },
  'skeletonItem.borderVariant': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables border variant skeleton token styling',
        ru: 'Включает стиль токена скелетона для варианта рамки'
      }
    },
    isDemo: true
  },
  'skeletonItem.length': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.option,
      type: ['number', 'string', 'array'],
      description: {
        en: 'Expected length or range [min, max] of random text generated for the skeleton item',
        ru: 'Ожидаемая длина или диапазон [min, max] случайного текста, генерируемого для элемента скелетона'
      }
    },
    isDemo: true
  },
  'skeletonItem.text': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables text line skeleton token styling',
        ru: 'Включает стиль токена скелетона для текстовой строки'
      }
    },
    isDemo: true
  },
  'skeletonItem.textVariant': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables text variant skeleton token styling',
        ru: 'Включает стиль токена скелетона для варианта текста'
      }
    },
    isDemo: true
  }
}
