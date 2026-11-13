import {
  type StorybookArgsToList,
  StorybookCategory,
  StorybookControl
} from '../../types/storybookTypes'

/**
 * The wikiProgress object contains descriptions of all properties for the progress component
 *
 * Объект wikiProgress содержит описание всех свойств для компонента прогресса
 */
export const wikiProgress: StorybookArgsToList = {
  // Style
  'progress.point': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Adds a point to linear progress with a value or indeterminate="type1"; ignored for circular progress',
        ru: 'Добавляет точку к линейному прогрессу со значением или indeterminate="type1"; игнорируется для кругового прогресса'
      }
    },
    isDemo: true
  },
  'progress.linear': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables linear progress bar display',
        ru: 'Включает отображение линейной полосы прогресса'
      }
    },
    hide: true
  },
  'progress.circular': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables circular progress indicator display',
        ru: 'Включает отображение круглого индикатора прогресса'
      }
    },
    isDemo: true
  },
  'progress.indeterminate': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: ['type1', 'type2', 'type3'],
      description: {
        en: 'Type of indeterminate progress animation',
        ru: 'Тип анимации неопределенного прогресса'
      }
    },
    hide: true
  },
  'progress.position': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: ['top', 'bottom', 'static'],
      description: {
        en: 'Position of the progress indicator',
        ru: 'Позиция индикатора прогресса'
      }
    },
    isDemo: true
  },
  'progress.visible': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      value: true,
      description: {
        en: 'Controls the visibility of the progress indicator',
        ru: 'Управляет видимостью индикатора прогресса'
      }
    },
    hide: true
  }
}
