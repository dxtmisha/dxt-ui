import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiPropsTextarea object contains descriptions of Textarea-specific properties
 *
 * Объект wikiPropsTextarea содержит описание специфичных для Textarea свойств
 */
export const wikiPropsTextarea: StorybookArgsToList = {
  'textarea.wrap': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Specifies how the text in a text area is to be wrapped when submitted in a form',
        ru: 'Указывает, как текст в текстовой области должен переноситься при отправке формы'
      }
    }
  }
}
