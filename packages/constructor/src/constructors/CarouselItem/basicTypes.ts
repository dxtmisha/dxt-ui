import type { ConstrBind } from '@dxtmisha/functional'

import type { CarouselItemPropsBasic } from './props'

/**
 * Type describing properties passed to the default slot.
 *
 * Тип, описывающий свойства, передаваемые в слот по умолчанию.
 */
export type CarouselItemSlotDefault = {
  /** Checks if the slide is currently selected / Проверяет, выбран ли текущий слайд */
  selected: boolean
  /** Slide number or identifier / Номер или идентификатор слайда */
  slide?: number | string
}

/**
 * Interface for connecting the CarouselItem component.
 *
 * Интерфейс для подключения компонента CarouselItem.
 */
export type CarouselItemComponentInclude = {
  /** CarouselItem component configuration / Конфигурация компонента CarouselItem */
  carouselItem?: object
}

/**
 * Props for embedding CarouselItem attributes inside another component.
 *
 * Свойства для внедрения атрибутов CarouselItem внутри другого компонента.
 */
export type CarouselItemPropsInclude<
  CarouselItem extends CarouselItemPropsBasic = CarouselItemPropsBasic
> = {
  /** Bound attributes passed directly to CarouselItem / Атрибуты, передаваемые напрямую в CarouselItem */
  carouselItemAttrs?: ConstrBind<CarouselItem>
}
