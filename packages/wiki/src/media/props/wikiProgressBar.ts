import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'
import { wikiValue } from './wikiValue'

/**
 * The wikiProgressBar object contains descriptions of all properties for the progress bar component
 *
 * Объект wikiProgressBar содержит описание всех свойств для компонента прогресс-бара
 */
export const wikiProgressBar: StorybookArgsToList = {
  'progressBar.focus': {
    type: StorybookControl.string,
    options: {
      category: StorybookCategory.status,
      description: {
        en: 'Focus item index',
        ru: 'Фокусируемый индекс элемента'
      }
    },
    isDemo: true
  },
  'progressBar.value': {
    ...wikiValue.value,
    type: StorybookControl.array,
    options: {
      ...wikiValue.value?.options,
      type: ['number', 'array'],
      description: {
        en: 'Current progress value or list of progress bar segment items',
        ru: 'Текущее значение прогресса или список элементов сегментов прогресс-бара'
      },
      value: [
        { index: '1', value: 30, label: '30%' },
        { index: '2', value: 40, label: '40%' },
        { index: '3', value: 30, label: '30%' }
      ]
    },
    hide: false,
    isDemo: true
  }
}
