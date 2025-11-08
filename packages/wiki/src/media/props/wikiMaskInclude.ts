import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiMask object contains descriptions of all properties for the mask component
 *
 * Объект wikiMask содержит описание всех свойств для компонента маски (Mask)
 */
export const wikiMaskInclude: StorybookArgsToList = {
  mask: {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.mask,
      type: ['string', 'object'],
      description: {
        en: 'Input mask pattern or mask configuration object',
        ru: 'Паттерн маски ввода или объект конфигурации маски'
      }
    }
  },
  maskAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.mask,
      description: {
        en: 'Additional attributes for the mask component',
        ru: 'Дополнительные атрибуты для компонента маски'
      }
    }
  },
  maskNone: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.mask,
      description: {
        en: 'Disables the mask functionality',
        ru: 'Отключает функциональность маски'
      }
    }
  },
  maskVisible: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.mask,
      description: {
        en: 'Controls visibility of mask placeholder characters',
        ru: 'Управляет видимостью символов-заполнителей маски'
      }
    }
  }
}
