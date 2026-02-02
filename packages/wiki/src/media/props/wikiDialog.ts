import {
  type StorybookArgsToItem,
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

import { wikiActionsInclude } from './wikiActionsInclude'

/**
 * The wikiDialog object contains properties specific to Dialog component
 *
 * Объект wikiDialog содержит свойства, специфичные для компонента Dialog
 */
export const wikiDialog: StorybookArgsToList = {
  'dialog.actionsList': {
    ...(wikiActionsInclude.actionsList as StorybookArgsToItem),
    options: {
      ...(wikiActionsInclude.actionsList as StorybookArgsToItem).options,
      value: undefined
    }
  },
  'dialog.clickOkAndClose': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Automatically closes the dialog when the OK button is clicked',
        ru: 'Автоматически закрывает диалог при клике на кнопку OK'
      }
    }
  }
}
