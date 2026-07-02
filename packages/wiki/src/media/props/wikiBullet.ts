import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiBullet object contains properties for the Bullet component
 *
 * Объект wikiBullet содержит свойства для компонента Bullet
 */
export const wikiBullet: StorybookArgsToList = {
  'bullet.list': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: 'array',
      description: {
        en: 'List of bullet items',
        ru: 'Список элементов маркированного списка'
      },
      value: [
        'First item',
        'Second item',
        'Third item'
      ]
    },
    isDemo: true
  }
}
