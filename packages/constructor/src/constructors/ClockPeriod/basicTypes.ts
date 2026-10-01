import type { ConstrBind } from '@dxtmisha/functional'
import type { ClockPeriodPropsBasic } from './props'

/**
 * Enumeration of clock period types (AM / PM).
 *
 * Перечисление типов периода часов (AM / PM).
 */
export enum ClockPeriodType {
  /** AM period (ante meridiem) / Период AM (до полудня) */
  am = 'am',
  /** PM period (post meridiem) / Период PM (после полудня) */
  pm = 'pm'
}

/** Clock period item data / Данные элемента периода часов */
export type ClockPeriodItem = {
  /** Period value / Значение периода */
  value: ClockPeriodType
  /** Display label / Отображаемая метка */
  label: string
  /** Selected state / Состояние выбора */
  selected: boolean
  /** Disabled state / Состояние отключения */
  disabled: boolean
}

/** Clock period slot data payload / Данные для слота элемента периода часов */
export type ClockPeriodSlotData = {
  /** Period item data / Данные элемента периода */
  item: ClockPeriodItem
}

/** Dependency registration type for parent components / Тип регистрации зависимости для родительских компонентов */
export type ClockPeriodComponentInclude = {
  /** ClockPeriod component configuration / Конфигурация компонента ClockPeriod */
  clockPeriod?: object
}

/** Props for embedding ClockPeriod attributes inside another component / Свойства для встраивания атрибутов ClockPeriod в другой компонент */
export type ClockPeriodPropsInclude<
  ClockPeriod extends ClockPeriodPropsBasic = ClockPeriodPropsBasic
> = {
  /** Whether the ClockPeriod is disabled / Отключен ли ClockPeriod */
  disabled?: boolean
  /** Bound attributes passed directly to the ClockPeriod component / Атрибуты, передаваемые напрямую в компонент ClockPeriod */
  clockPeriodAttrs?: ConstrBind<ClockPeriod>
}
