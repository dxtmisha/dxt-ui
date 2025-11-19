import { wikiList } from './wikiList'

import {
  type StorybookArgsToItem,
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiMenu object contains descriptions of all properties for the Menu component
 *
 * Объект wikiMenu содержит описание всех свойств для компонента Menu
 */
export const wikiMenu: StorybookArgsToList = {
  'menu.ajax': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'URL or function to load menu items asynchronously. Function may return a promise.',
        ru: 'URL или функция для асинхронной загрузки пунктов меню. Функция может возвращать промис.'
      }
    }
  },
  'menu.cache': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Enables caching of loaded menu data to reduce network requests.',
        ru: 'Включает кэширование загруженных данных меню для уменьшения сетевых запросов.'
      }
    }
  },
  'menu.isSelectedByValue': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Enables v-model support for selected value with two-way data binding.',
        ru: 'Включает поддержку v-model для выбранного значения с двусторонней привязкой данных.'
      }
    }
  },
  'menu.itemAttrs': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes applied to each menu item.',
        ru: 'Дополнительные атрибуты, применяемые к каждому пункту меню.'
      }
    }
  },
  'menu.list': wikiList['list.list'] as StorybookArgsToItem,
  'menu.listAttrs': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Additional attributes applied to the menu list container.',
        ru: 'Дополнительные атрибуты, применяемые к контейнеру списка меню.'
      }
    }
  },
  'menu.liteThreshold': wikiList['list.liteThreshold'] as StorybookArgsToItem,
  'menu.request': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Custom request handler configuration for fetching menu data.',
        ru: 'Пользовательская конфигурация обработчика запросов для получения данных меню.'
      }
    }
  },
  'menu.selected': wikiList['list.selected'] as StorybookArgsToItem
}
