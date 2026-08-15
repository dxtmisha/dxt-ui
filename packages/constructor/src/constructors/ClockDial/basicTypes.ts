import type { ConstrStyles } from '@dxtmisha/functional'

/** Clock dial type variants / Варианты типа циферблата часов */
export type ClockDialType = '12' | '24' | 'minute' | 'second'

/** Clock dial shape variants / Варианты формы циферблата часов */
export type ClockDialShape = 'pill' | 'round' | 'square' | string

/** Clock dial tick mark item data / Данные элемента деления/метки циферблата часов */
export type ClockDialMarkItem = {
  /** Display label / Отображаемая метка */
  name: string
  /** Rotation angle CSS string / CSS-строка угла поворота */
  rotate: string
  /** Inner section indicator for 24-hour mode / Индикатор внутренней секции для 24-часового режима */
  section: boolean
  /** Inline custom CSS styles / Пользовательские инлайн-стили CSS */
  style: ConstrStyles
  /** Numeric value / Числовое значение */
  value: number
  /** Disabled state / Состояние отключения */
  disabled: boolean
}

/** Clock dial mark slot payload data / Данные для слота деления/метки циферблата часов */
export type ClockDialMarkSlot = {
  /** Clock dial mark item configuration object / Объект конфигурации элемента метки циферблата */
  item: ClockDialMarkItem
}

/** Event payload item for ClockDial / Элемент полезной нагрузки события для ClockDial */
export type ClockDialEventItem = {
  /** Clock type / Тип часов */
  clock?: ClockDialType
  /** Selected clock mark item / Выбранный элемент метки часов */
  item?: ClockDialMarkItem
  /** Selected numeric value / Выбранное числовое значение */
  value?: number
}

/** ClockDial component inclusion type / Тип включения компонента ClockDial */
export type ClockDialComponentInclude = {
  /** ClockDial component configuration / Конфигурация компонента ClockDial */
  clockDial?: object
}
