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
    }
  },
  'menuButton.inputSearchAttrs': wikiSelect['select.inputSearchAttrs'],
  'menuButton.labelSeparator': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.information,
      description: {
        en: 'Separator for the displayed labels of the selected values',
        ru: 'Разделитель отображаемых меток выбранных значений'
      }
    }
  },
  'menuButton.option': wikiSelect['select.option'],
  'menuButton.showSearch': wikiSelect['select.showSearch']
}
