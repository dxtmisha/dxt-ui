import type { ListRecord, NumberOrString } from '@dxtmisha/functional'

import type { SkeletonPropsInclude } from '../Skeleton'

import type { ModelProps } from '../../types/modelTypes'

import type { SliderMarkItem, SliderValueType } from './basicTypes'

type SliderPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  vertical?: boolean
  // :type [!] System label / Системная метка
}

export type SliderPropsBasic = ModelProps
  & SkeletonPropsInclude
  & {
    /** Disabled state / Состояние отключения */
    disabled?: boolean
    /** Readonly state / Состояние только для чтения */
    readonly?: boolean

    /** Current value or range / Текущее значение или диапазон */
    value?: SliderValueType
    /** List of marks or tick values / Список меток или делений */
    marks?: ListRecord<SliderMarkItem> | number[]

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

    /** Vertical layout orientation / Вертикальная ориентация */
    vertical?: boolean
    /** Magnetize thumb position to nearest mark / Притягивание ползуа к ближайшей метке */
    magnet?: boolean
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
  step: 1,
  max: 100,
  min: 0,
  minimumDistance: 1,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
