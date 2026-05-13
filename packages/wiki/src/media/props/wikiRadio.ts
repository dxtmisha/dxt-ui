import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiRadio object contains properties for the Radio component
 *
 * Объект wikiRadio содержит свойства для компонента Radio
 */
export const wikiRadio: StorybookArgsToList = {
  'radio.selected': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.status,
      type: 'string',
      description: {
        en: 'The value that determines whether the radio is selected (for groups)',
        ru: 'Значение, которое определяет, выбран ли радио (для групп)'
      }
    }
  },
  'radio.value': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      type: 'any',
      description: {
        en: 'Indicates whether the radio is selected',
        ru: 'Определяет, выбран ли этот радио'
      }
    },
    isDemo: true
  }
}
