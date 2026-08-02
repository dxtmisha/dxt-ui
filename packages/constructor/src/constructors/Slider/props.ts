import type { ListList, NumberOrString } from '@dxtmisha/functional'
import type { ModelProps } from '../../types/modelTypes'
import type { SliderValueType } from './basicTypes'

type SliderPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  vertical?: boolean
  basic?: boolean
  drop?: boolean
  // :type [!] System label / Системная метка
}

export type SliderPropsBasic = ModelProps<SliderValueType> & {
  /** Current value or range / Текущее значение или диапазон */
  value?: SliderValueType

  /** List of marks or tick values / Список меток или делений */
  marks?: ListList<any>
  /** Initialize marks automatically / Автоматическая инициализация меток */
  marksInit?: boolean
  /** Translation data or map / Данные или карта переводов */
  translation?: any
  /** Property key for text label / Ключ свойства для текстовой метки */
  keyLabel?: string
  /** Property key for value / Ключ свойства для значения */
  keyValue?: string

  /** Step size for increments / Шаг изменения значения */
  step?: NumberOrString
  /** Minimum range value / Минимальное значение диапазона */
  min?: NumberOrString
  /** Maximum range value / Максимальное значение диапазона */
  max?: NumberOrString

  /** Range selection mode with two thumbs / Режим выбора диапазона с двумя ползунками */
  multiple?: boolean
  /** Minimum required distance between thumbs in range mode / Минимальное допустимое расстояние между ползунками в режиме диапазона */
  minimumDistance?: NumberOrString

  /** Disabled state / Состояние отключения */
  disabled?: boolean
  /** Readonly state / Состояние только для чтения */
  readonly?: boolean
  /** Vertical layout orientation / Вертикальная ориентация */
  vertical?: boolean
  /** Magnetize thumb position to nearest mark / Притягивание ползуа к ближайшей метке */
  magnet?: boolean
  /** Enable ripple feedback / Включение визуального отклика ripple */
  ripple?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SliderProps = SliderPropsBasic & SliderPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSlider = {
  keyLabel: 'label',
  keyValue: 'value',
  marksInit: true,
  max: 100,
  min: 0,
  minimumDistance: 1,
  ripple: true,
  step: 1,
  ...{
    // :default [!] System label / Системная метка
    basic: true
    // :default [!] System label / Системная метка
  }
}
