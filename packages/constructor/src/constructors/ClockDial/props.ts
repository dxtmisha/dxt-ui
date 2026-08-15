import type { EnabledProps } from '../../types/enabledTypes'
import type { ModelProps } from '../../types/modelTypes'
import type { ClockDialShape, ClockDialType } from './basicTypes'

/** Clock dial design token properties interface / Интерфейс токенов дизайна свойств циферблата часов */
type ClockDialPropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  disabled?: boolean
  readonly?: boolean
  type?: string
  shape?: string
  // :type [!] System label / Системная метка
}

/**
 * Basic properties interface for ClockDial component.
 *
 * Базовый интерфейс свойств для компонента ClockDial.
 */
export type ClockDialPropsBasic = ModelProps<number>
  & EnabledProps
  & {
    /** Current hour value / Текущее значение часа */
    hour?: number
    /** Current minute value / Текущее значение минут */
    minute?: number
    /** Current second value / Текущее значение секунд */
    second?: number
    /** Current value / Текущее значение */
    value?: number

    /** Clock dial display type / Тип отображения циферблата часов */
    type?: ClockDialType
    /** Clock dial shape styling / Форма отображения циферблата часов */
    shape?: ClockDialShape

    /** Minimum allowable value / Минимально допустимое значение */
    min?: number
    /** Maximum allowable value / Максимально допустимое значение */
    max?: number
    /** Step value / Значение шага */
    step?: number

    /** Readonly mode state / Состояние режима только для чтения */
    readonly?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ClockDialProps = ClockDialPropsBasic & ClockDialPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsClockDial: ClockDialProps = {
  type: '12',
  shape: 'pill',
  min: 0,
  max: 60,
  step: 1,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
