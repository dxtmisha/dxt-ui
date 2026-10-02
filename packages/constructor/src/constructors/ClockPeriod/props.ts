import type { EnabledProps } from '../../types/enabledTypes'
import type { ModelProps } from '../../types/modelTypes'
import type { TextAmPropsInclude, TextPmPropsInclude } from '../../types/textTypes'
import type { ClockPeriodType } from './basicTypes'

type ClockPeriodPropsToken = {
  // :type [!] System label / Системная метка
  readonly?: boolean
  disabled?: boolean
  orientation?: 'vertical' | 'horizontal'
  // :type [!] System label / Системная метка
}

/**
 * Basic properties interface for ClockPeriod component.
 *
 * Базовый интерфейс свойств для компонента ClockPeriod.
 */
export type ClockPeriodPropsBasic = ModelProps<ClockPeriodType>
  & EnabledProps
  & TextAmPropsInclude
  & TextPmPropsInclude
  & {
    /** Current period value / Текущее значение периода */
    value?: ClockPeriodType
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ClockPeriodProps = ClockPeriodPropsBasic & ClockPeriodPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsClockPeriod: ClockPeriodProps = {
  ...{
    // :default [!] System label / Системная метка
    orientation: 'vertical'
    // :default [!] System label / Системная метка
  }
}
