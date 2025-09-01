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
  'progress.delay': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.style,
      type: ['number', 'string'],
      description: {
        en: 'Delay before showing the progress indicator in milliseconds',
        ru: 'Задержка перед показом индикатора прогресса в миллисекундах'
      }
    }
  },
  'progress.delayHide': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.style,
      type: ['number', 'string'],
      description: {
        en: 'Delay before hiding the progress indicator in milliseconds',
        ru: 'Задержка перед скрытием индикатора прогресса в миллисекундах'
      }
    }
  },
  'progress.point': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Adds a point at the end of the progress indicator',
        ru: 'Добавляет точку в конце индикатора прогресса'
      }
    }
  },
  'progress.linear': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables linear progress bar display',
        ru: 'Включает отображение линейной полосы прогресса'
      }
    }
  },
  'progress.circular': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.style,
      description: {
        en: 'Enables circular progress indicator display',
        ru: 'Включает отображение круглого индикатора прогресса'
      }
    }
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
    }
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
    }
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
    }
  }
}
