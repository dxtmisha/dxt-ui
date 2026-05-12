import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiButtonGroup object contains descriptions of all properties for the ButtonGroup component
 *
 * Объект wikiButtonGroup содержит описание всех свойств для компонента ButtonGroup
 */
export const wikiButtonGroup: StorybookArgsToList = {
  'buttonGroup.list': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Array of button configurations',
        ru: 'Массив конфигураций кнопок'
      },
      value: [
        { label: 'Home' },
        { label: 'Search', icon: 'search', selected: true },
        { label: 'Settings', icon: 'settings' },
        { label: 'More', iconTrailing: 'more_vert' }
      ]
    },
    hide: true
  }
}
