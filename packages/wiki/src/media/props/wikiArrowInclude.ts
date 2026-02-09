import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiArrowInclude object contains descriptions of all properties for the Arrow include
 *
 * Объект wikiArrowInclude содержит описание всех свойств для включения Arrow
 */
export const wikiArrowInclude: StorybookArgsToList = {
  arrowAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Additional attributes for the Arrow component',
        ru: 'Дополнительные атрибуты для компонента Arrow'
      }
    }
  },
  arrowPosition: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.arrow,
      description: {
        en: 'Arrow position',
        ru: 'Позиция стрелки'
      },
      options: ['auto', 'top', 'bottom', 'left', 'right'],
      defaultValue: 'auto'
    }
  },
  arrowShow: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.arrow,
      description: {
        en: 'Show arrow',
        ru: 'Показать стрелку'
      }
    }
  }
}
