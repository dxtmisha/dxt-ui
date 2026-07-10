import {
  type StorybookArgsToList,
  StorybookControl
} from '../../types/storybookTypes'
import { wikiValue } from './wikiValue'

/**
 * The wikiProgressBar object contains descriptions of all properties for the progress bar component
 *
 * Объект wikiProgressBar содержит описание всех свойств для компонента прогресс-бара
 */
export const wikiProgressBar: StorybookArgsToList = {
  'progressBar.value': {
    ...wikiValue.value,
    type: StorybookControl.array,
    options: {
      ...wikiValue.value?.options,
      type: ['number', 'array'],
      description: {
        en: 'Current progress value or list of progress bar segment items',
        ru: 'Текущее значение прогресса или список элементов сегментов прогресс-бара'
      }
    },
    hide: false,
    isDemo: true
  }
}
