import type { ConstrClass } from '@dxtmisha/functional'

import type { ModelEmits } from '../../types/modelTypes'
import type { SliderEventDetail, SliderMarkItem, SliderValueType } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SliderComponents = {
  ripple?: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SliderEmits
  = ModelEmits<SliderValueType>
    & {
      /** Emitted on slider value input / Срабатывает при вводе значения слайдера */
      input?: [value: SliderValueType, detail: SliderEventDetail]
      /** Emitted on slider value commit / Срабатывает при подтверждении значения слайдера */
      change?: [value: SliderValueType, detail: SliderEventDetail]
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SliderExpose {
  /** Gets current slider value / Возвращает текущее значение слайдера */
  getValue: () => SliderValueType
  /** Sets slider value programmatically / Устанавливает значение слайдера программно */
  setValue: (value: SliderValueType) => void
  /** Increases current value by step / Увеличивает текущее значение на шаг */
  increase: () => void
  /** Decreases current value by step / Уменьшает текущее значение на шаг */
  decrease: () => void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SliderSlots {
  /** Slot for min thumb label / Слот для метки минимального ползунка */
  minLabel?: (props: { value: number, item: SliderMarkItem }) => any
  /** Slot for max thumb label / Слот для метки максимального ползунка */
  maxLabel?: (props: { value: number, item: SliderMarkItem }) => any
  /** Slot for mark custom rendering / Слот для пользовательского рендеринга метки */
  mark?: (props: { item: SliderMarkItem }) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SliderClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  thumb: string
  thumbMin: string
  thumbMax: string
  rail: string
  track: string
  marks: string
  label: string
  select: string
  // :classes [!] System label / Системная метка
}
