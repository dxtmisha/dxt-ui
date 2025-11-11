import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSelectValue object contains properties for the SelectValue component
 *
 * Объект wikiSelectValue содержит свойства для компонента SelectValue
 */
export const wikiSelectValue: StorybookArgsToList = {
  value: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: 'array',
      description: {
        en: 'Array of selected values to display - each item should contain label, value, and optional index, icon, and detail properties',
        ru: 'Массив выбранных значений для отображения - каждый элемент должен содержать свойства label, value и опционально index, icon и detail'
      },
      value: [
        { label: 'JavaScript', value: 'js', icon: 'code', index: '1' },
        { label: 'TypeScript', value: 'ts', icon: 'verified', index: '2', detail: 'Recommended' },
        { label: 'React', value: 'react', icon: 'favorite', index: '3' },
        { label: 'Vue.js', value: 'vue', icon: 'star', index: '4', detail: 'Popular framework' }
      ]
    }
  }
}
