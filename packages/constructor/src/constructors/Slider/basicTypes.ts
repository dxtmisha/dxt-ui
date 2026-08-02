import type { ConstrBind, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { SliderPropsBasic } from './props'

/** Focus handle type enum for Slider / Перечисление типов фокуса ползунка слайдера */
export enum SliderFocusType {
  min = 'min',
  max = 'max'
}

/** Slider value type (single number or min-max pair) / Тип значения слайдера (одно число или пара мин-макс) */
export type SliderValueType = number | [number, number]

/** Slider mark item value payload type / Тип значения элемента метки слайдера */
export type SliderMarkItemValue = NumberOrStringOrBoolean | undefined

/** Single mark item configuration / Конфигурация отдельного деления/метки */
export type SliderMarkItem = {
  /** Numeric mark position value / Числовое значение деления/метки */
  mark: number
  /** Associated value payload / Связанное значение данных */
  value?: SliderMarkItemValue
  /** Display label text / Отображаемый текст метки */
  text: string
  /** Custom CSS style properties / Пользовательские свойства CSS стилей */
  style?: Record<string, any>
}

/** List of slider mark items / Список элементов меток слайдера */
export type SliderMarkList = SliderMarkItem[]

/** Detail data emitted on slider changes / Детальные данные, испускаемые при изменении слайдера */
export type SliderEventDetail = {
  /** Current mark value or range pair / Текущее значение метки или пара диапазона */
  mark: SliderValueType
  /** Mark item object or pair of mark items / Объект элемента метки или пара элементов меток */
  item: SliderMarkItem | [SliderMarkItem, SliderMarkItem]
  /** Target value payload / Целевое значение данных */
  value?: SliderMarkItemValue | [SliderMarkItemValue, SliderMarkItemValue]
}

/** Interface for describing which components need to be connected for Slider work / Интерфейс для описания, какие компоненты надо подключить для работы Slider */
export type SliderComponentInclude = {
  /** Slider component configuration / Конфигурация компонента слайдера */
  slider?: object
}

/** Interface for including Slider properties / Интерфейс для включения свойств слайдера */
export type SliderPropsInclude<
  Slider extends SliderPropsBasic = SliderPropsBasic
> = {
  /** Value or slider configuration / Значение или конфигурация слайдера */
  slider?: SliderValueType | ConstrBind<Slider>
}
