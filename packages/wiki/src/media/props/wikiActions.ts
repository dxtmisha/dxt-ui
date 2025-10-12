import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiActions object contains descriptions of all properties for the Actions component
 *
 * Объект wikiActions содержит описание всех свойств для компонента Actions
 */
export const wikiActions: StorybookArgsToList = {
  list: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Array of primary action button configurations',
        ru: 'Массив конфигураций основных кнопок действий'
      },
      value: [
        { label: 'Ok' },
        { label: 'Cancel' }
      ]
    }
  },
  listSecondary: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Array of secondary action button configurations',
        ru: 'Массив конфигураций вторичных кнопок действий'
      },
      value: [
        { icon: 'edit' },
        { icon: 'photo_camera' },
        { icon: 'image' },
        { icon: 'tune' }
      ]
    }
  }
}
