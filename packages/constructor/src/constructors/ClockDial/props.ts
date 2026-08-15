import type { EnabledProps } from '../../types/enabledTypes'
import type { FieldStepProps } from '../../types/fieldTypes'
import type { ModelProps } from '../../types/modelTypes'

/** Clock dial design token properties interface / Интерфейс токенов дизайна свойств циферблата часов */
type ClockDialPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  readonly?: boolean
  type?: '12' | '24' | 'minute' | 'second'
  // :type [!] System label / Системная метка
}

/**
 * Basic properties interface for ClockDial component.
 *
 * Базовый интерфейс свойств для компонента ClockDial.
 */
export type ClockDialPropsBasic = ModelProps<number>
  & EnabledProps
  & FieldStepProps
  & {
    /** Current value / Текущее значение */
    value?: number

    /** Current hour value / Текущее значение часа */
    hour?: number
    /** Current minute value / Текущее значение минут */
    minute?: number
    /** Current second value / Текущее значение секунд */
    second?: number

    /** Clock display mode (selection disabled) / Режим отображения часов (без выбора) */
    clock?: boolean
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
  min: 0,
  max: 60,
  step: 1,
  ...{
    // :default [!] System label / Системная метка
    type: '12'
    // :default [!] System label / Системная метка
  }
}
