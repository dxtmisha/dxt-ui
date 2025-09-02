import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiHook object contains common hook properties for all components
 *
 * Объект wikiHook содержит общие hook-свойства для всех компонентов
 */
export const wikiHook: StorybookArgsToList = {
  'onUpdate:modelOpen': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelOpen with the new boolean value',
        ru: 'Обработчик события update:modelOpen, вызывается с новым булевым значением'
      }
    }
  },
  'onUpdate:modelValue': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:modelValue with the new value',
        ru: 'Обработчик события update:modelValue, вызывается с новым значением'
      }
    }
  },
  'onUpdate:open': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:open with the new boolean value',
        ru: 'Обработчик события update:open, вызывается с новым булевым значением'
      }
    }
  },
  'onUpdate:value': {
    type: StorybookControl.object,
    options: {
      category: StorybookCategory.hook,
      description: {
        en: 'Event handler called on update:value with the new value',
        ru: 'Обработчик события update:value, вызывается с новым значением'
      }
    }
  }
}
