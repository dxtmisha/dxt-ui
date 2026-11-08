import { wikiSelect } from './wikiSelect'

import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiMenuButton object contains properties for the MenuButton component
 *
 * Объект wikiMenuButton содержит свойства для компонента MenuButton
 */
export const wikiMenuButton: StorybookArgsToList = {
  'menuButton.hideLabelValue': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to hide the label when a value is selected',
        ru: 'Скрывать ли метку, если выбрано значение'
      }
    },
    isDemo: true,
    demoOptions: {
      selected: 'task-management'
    }
  },
  'menuButton.hideValueIcon': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.option,
      description: {
        en: 'Whether to hide the value if an icon is present',
        ru: 'Скрывать ли значение, если присутствует иконка'
      }
    },
    isDemo: true,
    demoOptions: {
      selected: 'task-management'
    }
  },
  'menuButton.inputSearchAttrs': wikiSelect['select.inputSearchAttrs'],
  'menuButton.option': wikiSelect['select.option']
}
