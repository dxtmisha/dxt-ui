import type { ConstrClass } from '@dxtmisha/functional'

import type { CarouselItemSlotDefault } from './basicTypes'
import type { EventClickEmits, EventClickExpose } from '../../types/eventClickTypes'
import type { ImageComponentInclude, ImageEmitsInclude } from '../Image'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CarouselItemComponents = ImageComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CarouselItemEmits = ImageEmitsInclude & EventClickEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CarouselItemExpose extends EventClickExpose {
  /** Checks if the slide is currently selected / Проверяет, выбран ли текущий слайд */
  isSelected(): boolean
  /** Returns the current slide / Возвращает текущий слайд */
  getSlide(): any
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CarouselItemSlots {
  /** Default slot for slide content / Слот по умолчанию для содержимого слайда */
  default?(props: CarouselItemSlotDefault): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CarouselItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  image: string
  // :classes [!] System label / Системная метка
}
