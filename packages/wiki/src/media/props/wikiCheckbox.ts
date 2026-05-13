import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiCheckbox object contains properties for the Checkbox component
 *
 * Объект wikiCheckbox содержит свойства для компонента Checkbox
 */
export const wikiCheckbox: StorybookArgsToList = {
  'checkbox.selected': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.status,
      type: 'string',
      description: {
        en: 'The value that determines whether the checkbox is selected (for groups)',
        ru: 'Значение, которое определяет, выбран ли чекбокс (для групп)'
      }
    }
  },
  'checkbox.value': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      type: 'any',
      description: {
        en: 'Value of the checkbox',
        ru: 'Значение чекбокса'
      }
    },
    isDemo: true
  }
}
