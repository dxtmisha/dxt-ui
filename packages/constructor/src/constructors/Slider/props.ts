import type { ListRecord, NumberOrString } from '@dxtmisha/functional'

import type { EnabledProps } from '../../types/enabledTypes'
import type { FieldStepProps } from '../../types/fieldTypes'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { ModelProps } from '../../types/modelTypes'

import type { SliderMarkItem, SliderValueProp } from './basicTypes'

/** Slider design token properties interface / Интерфейс токенов дизайна свойств слайдера */
type SliderPropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  disabled?: boolean
  vertical?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic properties interface for Slider component.
 *
 * Базовый интерфейс свойств для компонента Slider.
 */
export type SliderPropsBasic = ModelProps
  & FieldStepProps
  & EnabledProps
  & SkeletonPropsInclude
  & {
    /** Name of input field / Название поля ввода */
    name?: string
    /** Current value or range / Текущее значение или диапазон */
    value?: SliderValueProp
    /** List of marks or tick values / Список меток или делений */
    marks?: ListRecord<SliderMarkItem> | number[]
    /** Magnetize thumb position to nearest mark / Притягивание ползунка к ближайшей метке */
    magnet?: boolean

    /** Property key for text label / Ключ свойства для текстовой метки */
    keyLabel?: string
    /** Property key for value / Ключ свойства для значения */
    keyValue?: string

    /** Required state / Обязательное состояние */
    required?: boolean

    /** Range selection mode with two thumbs / Режим выбора диапазона с двумя ползунками */
    multiple?: boolean
    /** Minimum required distance between thumbs in range mode / Минимальное допустимое расстояние между ползунками в режиме диапазона */
    minimumDistance?: NumberOrString

    /** Vertical layout orientation / Вертикальная ориентация */
    vertical?: boolean

    /** Show thumb value label element / Показывать элемент метки значения на ползунке */
    showThumbLabel?: boolean

    /** Additional attributes for the input element / Дополнительные атрибуты для элемента ввода */
    inputAttrs?: Partial<HTMLInputElement>
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
  showThumbLabel: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
