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
  'checkbox.value': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      type: 'any',
      description: {
        en: 'Value of the checkbox',
        ru: 'Значение чекбокса'
      }
    }
  }
}
