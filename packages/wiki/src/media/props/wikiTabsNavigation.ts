import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiTabsNavigation object contains descriptions of all properties for the TabsNavigation component
 *
 * Объект wikiTabsNavigation содержит описание всех свойств для компонента TabsNavigation
 */
export const wikiTabsNavigation: StorybookArgsToList = {
  'tabsNavigation.itemAttrs': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.attributes,
      description: {
        en: 'Attributes for each tab item',
        ru: 'Атрибуты для каждого элемента вкладки'
      }
    }
  },
  'tabsNavigation.list': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'List of data for generating tabs',
        ru: 'Список данных для генерации вкладок'
      },
      value: [
        { label: 'Home', value: 'home' },
        { label: 'Profile', value: 'profile' },
        { label: 'Messages', value: 'messages' },
        { label: 'Settings', value: 'settings' },
        { label: 'Dashboard', value: 'dashboard' },
        { label: 'Notifications', value: 'notifications' }
      ]
    }
  },
  'tabsNavigation.selected': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.status,
      type: 'string | number',
      description: {
        en: 'Selected value',
        ru: 'Выбранное значение'
      },
      value: 'home'
    }
  }
}
