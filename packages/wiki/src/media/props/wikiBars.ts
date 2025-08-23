import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiBars object contains descriptions of properties for the Bars component
 *
 * Объект wikiBars содержит описание свойств для компонента Bars
 */
export const wikiBars: StorybookArgsToList = {
  'bars.action': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Enables action mode',
        ru: 'Включает режим действия'
      }
    }
  },
  'bars.actionBars': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'An array of buttons for the action',
        ru: 'Массив кнопок для действия'
      }
    }
  },
  'bars.actionDescription': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Description for the action',
        ru: 'Описание для действия'
      }
    }
  },
  'bars.actionLabel': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Label for the action',
        ru: 'Метка для действия'
      }
    }
  },
  'bars.backButton': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Provides configuration for the back button',
        ru: 'Предоставляет конфигурацию для кнопки назад'
      }
    }
  },
  'bars.backHide': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Hides the back button',
        ru: 'Скрывает кнопку назад'
      }
    }
  },
  'bars.bars': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'An array of buttons to be displayed in the bar',
        ru: 'Массив кнопок для отображения в баре'
      },
      value: [
        { icon: 'home', label: 'Home' },
        { icon: 'search', label: 'Search' },
        { icon: 'settings', label: 'Settings' }
      ]
    }
  }
}
