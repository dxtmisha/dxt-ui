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
  },
  editValue: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.form,
      description: {
        en: 'Allows editing the selected value directly inside the input when not in multiple mode',
        ru: 'Позволяет редактировать выбранное значение прямо в input при одиночном выборе'
      }
    }
  },
  showSearch: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Shows a search/filter field inside the dropdown menu',
        ru: 'Отображает поле поиска/фильтра внутри выпадающего меню'
      }
    }
  },
  inputSearchAttrs: {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      type: ['object', 'function'],
      description: {
        en: 'Additional bindings or attributes for the search input inside the dropdown',
        ru: 'Дополнительные привязки или атрибуты для поля поиска внутри выпадающего меню'
      }
    }
  }
}
