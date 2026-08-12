import type { ConstrClass } from '@dxtmisha/functional'

import type { RippleComponentInclude } from '../Ripple'

import type { ModelEmits } from '../../types/modelTypes'
import type {
  SliderEventDetail,
  SliderMarkSlot,
  SliderThumbSlot,
  SliderValueType
} from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SliderComponents = RippleComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SliderEmits
  = ModelEmits<SliderValueType>
    & {
    /** Emitted on slider value input / Срабатывает при вводе значения слайдера */
      input: [detail: SliderEventDetail]
      /** Emitted on slider value input (lite version) / Срабатывает при вводе значения слайдера (упрощенная версия) */
      inputLite: [value: SliderValueType]
      /** Emitted on slider value commit / Срабатывает при подтверждении значения слайдера */
      change: [detail: SliderEventDetail]
      /** Emitted on slider value commit (lite version) / Срабатывает при подтверждении значения слайдера (упрощенная версия) */
      changeLite: [value: SliderValueType]
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
  /** Slot for mark custom rendering / Слот для пользовательского рендеринга метки */
  mark?: (props: SliderMarkSlot) => any
  /** Slot for min thumb label / Слот для метки минимального ползунка */
  minLabel?: (props: SliderThumbSlot) => any
  /** Slot for max thumb label / Слот для метки максимального ползунка */
  maxLabel?: (props: SliderThumbSlot) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SliderClasses = {
  /** Main CSS class / Главный CSS класс */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  rail: string
  thumb: string
  thumbMin: string
  thumbMax: string
  track: string
  marks: string
  mark: string
  label: string
  select: string
  // :classes [!] System label / Системная метка
}
