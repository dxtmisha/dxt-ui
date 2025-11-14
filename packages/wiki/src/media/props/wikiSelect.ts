import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiSelect object contains properties for the Select component
 *
 * Объект wikiSelect содержит свойства для компонента Select
 */
export const wikiSelect: StorybookArgsToList = {
  option: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      type: ['array', 'object', 'function'],
      description: {
        en: 'List of options to display in the dropdown - accepts array, object, or function returning options',
        ru: 'Список опций для отображения в выпадающем списке - принимает массив, объект или функцию, возвращающую опции'
      },
      value: [
        { label: 'Home', value: 'home', icon: 'home' },
        { label: 'Dashboard', value: 'dashboard', icon: 'dashboard' },
        { label: 'Profile', value: 'profile', icon: 'person' },
        { label: 'Settings', value: 'settings', icon: 'settings' },
        { label: 'Notifications', value: 'notifications', icon: 'notifications' },
        { label: 'Messages', value: 'messages', icon: 'message' },
        { label: 'Calendar', value: 'calendar', icon: 'calendar_today' },
        { label: 'Tasks', value: 'tasks', icon: 'task' },
        { label: 'Projects', value: 'projects', icon: 'work' },
        { label: 'Team', value: 'team', icon: 'group' },
        { label: 'Documents', value: 'documents', icon: 'description' }
      ]
    }
  }
}
