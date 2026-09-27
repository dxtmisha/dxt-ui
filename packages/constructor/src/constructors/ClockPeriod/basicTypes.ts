import type { ConstrBind } from '@dxtmisha/functional'
import type { ClockPeriodPropsBasic } from './props'

/** Clock period item type ('am' | 'pm') / Тип периода часов ('am' | 'pm') */
export type ClockPeriodType = 'am' | 'pm'

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

/** Event payload item for ClockPeriod / Элемент полезной нагрузки события для ClockPeriod */
export type ClockPeriodEventItem = {
  /** Selected period item / Выбранный элемент периода */
  item: ClockPeriodItem
  /** Selected period value / Выбранное значение периода */
  value: ClockPeriodType
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
