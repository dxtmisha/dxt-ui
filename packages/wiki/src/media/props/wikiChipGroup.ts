import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiChipGroup object contains properties for the ChipGroup component
 *
 * Объект wikiChipGroup содержит свойства для компонента ChipGroup
 */
export const wikiChipGroup: StorybookArgsToList = {
  'chipGroup.selected': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.status,
      type: ['string', 'number', 'boolean', 'array'],
      description: {
        en: 'Currently selected item(s) - can be a single value or an array of values',
        ru: 'Выбранный элемент(ы) - может быть одним значением или массивом значений'
      }
    }
  }
}
