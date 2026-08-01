import type { ListList } from '@dxtmisha/functional'

/**
 * Interface describing a slider mark item.
 *
 * Интерфейс, описывающий отметку слайдера.
 */
export interface SliderMarkItem {
  mark: number
  text: string
  value: any
  style?: Record<string, string>
}

/**
 * Type for slider marks prop value.
 *
 * Тип для свойства отметок слайдера.
 */
export type SliderMarksValue = ListList | SliderMarkItem[] | Record<number, string>

/**
 * Type describing the event payload emitted by Slider.
 *
 * Тип, описывающий полезную нагрузку события, испускаемого слайдером.
 */
export type SliderEventPayload = {
  value: number | number[]
  mark: number | number[]
  item: SliderMarkItem | SliderMarkItem[]
}
