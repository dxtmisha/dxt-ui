import type { ConstrClassObject, ConstrStyles } from '@dxtmisha/functional'

/** Interface describing a progress bar item / Интерфейс, описывающий элемент прогресс-бара */
export type ProgressBarItem = {
  /** Item index / Индекс элемента */
  index?: string
  /** Item label / Метка элемента */
  label?: string
  /** Current value / Текущее значение */
  value: string | number
  /** Color of the progress element / Цвет элемента прогресса */
  color?: string
  /** Palette name / Название палитры */
  palette?: string
}

/** List of progress bar items / Список элементов прогресс-бара */
export type ProgressBarList = ProgressBarItem[]

/** Interface describing processed progress bar item info / Интерфейс, описывающий обработанную информацию элемента прогресс-бара */
export type ProgressBarInfoItem
  = ProgressBarItem
    & {
    /** Percent value / Значение в процентах */
      percent: number
      /** List of classes / Список классов */
      classes: ConstrClassObject
      /** CSS style properties / Свойства CSS-стилей */
      style: ConstrStyles
    }

/** List of processed progress bar items / Список обработанных элементов прогресс-бара */
export type ProgressBarInfoList = ProgressBarInfoItem[]
