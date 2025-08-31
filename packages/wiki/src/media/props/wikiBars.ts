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
      },
      value: [
        { icon: 'share' },
        { icon: 'edit' },
        { icon: 'delete' }
      ]
    }
  },
  'bars.actionDescription': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Description for the action',
        ru: 'Описание для действия'
      },
      value: 'Select items to perform actions'
    }
  },
  'bars.actionLabel': {
    type: StorybookControl.text,
    options: {
      category: StorybookCategory.value,
      description: {
        en: 'Label for the action',
        ru: 'Метка для действия'
      },
      value: 'Action'
    }
  },
  'bars.backButton': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Provides configuration for the back button',
        ru: 'Предоставляет конфигурацию для кнопки назад'
      }
    }
  },
  'bars.backActionHide': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Hide back button in action',
        ru: 'Скрыть кнопку назад в action'
      }
    }
  },
  'bars.backHide': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
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
  },
  'bars.modelAction': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.technical,
      description: {
        en: 'Two-way binding for action state (v-model:action)',
        ru: 'Двусторонняя привязка состояния action (v-model:action)'
      }
    }
  },
  'bars.onUpdate:action': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:action with the new boolean value',
        ru: 'Обработчик события update:action, вызывается с новым булевым значением'
      }
    }
  },
  'bars.onUpdate:modelAction': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelAction with the new boolean value',
        ru: 'Обработчик события update:modelAction, вызывается с новым булевым значением'
      }
    }
  }
}
