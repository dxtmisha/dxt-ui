import {
  type StorybookArgsToList
} from '../../types/storybookTypes'

import { wikiActionsInclude } from './wikiActionsInclude'
import { wikiInformation } from './wikiInformation'

/**
 * The wikiSnackbarItem object contains descriptions of all properties for the SnackbarItem component
 *
 * Объект wikiSnackbarItem содержит описание всех свойств для компонента SnackbarItem
 */
export const wikiSnackbarItem: StorybookArgsToList = {
  'snackbarItem.button': {
    ...wikiInformation.button,
    options: {
      ...wikiInformation.button.options,
      value: 'Go'
    }
  },
  'snackbarItem.actionsList': {
    ...wikiActionsInclude.actionsList,
    options: {
      ...wikiActionsInclude.actionsList.options,
      value: [
        { label: 'Undo' }
      ]
    }
  },
  'snackbarItem.actionsSecondary': {
    ...wikiActionsInclude.actionsSecondary,
    options: {
      ...wikiActionsInclude.actionsSecondary.options,
      value: [
        { icon: 'edit' }
      ]
    }
  }
}
