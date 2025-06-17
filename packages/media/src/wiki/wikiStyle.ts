import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '@dxt-ui/functional'

/**
 * The wikiStyle object contains common properties for all components in the style category.
 *
 * Объект wikiStyle содержит общие свойства для всех компонентов в категории стиль.
 */
export const wikiStyle: StorybookArgsToList = {
  size: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: [],
      type: 'string',
      description: {
        en: 'Specifies the dimensions of the image',
        ru: 'Определяет размеры изображения'
      }
    }
  }
}
