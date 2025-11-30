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
  'chipGroup.list': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Array of chip items data. Contains the data for all chips to be rendered in the group.',
        ru: 'Массив данных элементов чипов. Содержит данные для всех чипов, которые должны быть отображены в группе.'
      },
      value: [
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' },
        { label: 'Orange', value: 'orange' }
      ]
    }
  },
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
