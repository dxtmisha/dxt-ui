import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiDialog object contains properties specific to Dialog component
 *
 * Объект wikiDialog содержит свойства, специфичные для компонента Dialog
 */
export const wikiDialog: StorybookArgsToList = {
  clickOkAndClose: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,

      description: {
        en: 'Automatically closes the dialog when the OK button is clicked',
        ru: 'Автоматически закрывает диалог при клике на кнопку OK'
      }
    }
  }
}
