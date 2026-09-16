import type { ConstrClass } from '@dxtmisha/functional'

import type {
  CarouselPaginationFractionBinds,
  CarouselPaginationItem,
  CarouselPaginationItemBinds,
  CarouselPaginationProgressBinds
} from './basicTypes'

import type { ModelEmitsSelected } from '../../types/modelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type CarouselPaginationComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type CarouselPaginationEmits = ModelEmitsSelected<number>
  & {
    /** Slide change event / Событие смены слайда */
    change: [selected: number]
    /** Click on pagination indicator / Клик по индикатору пагинации */
    click: [event: MouseEvent, selected: number]
    /** Lightweight click event / Упрощенное событие клика */
    clickLite: [selected: number]
  }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface CarouselPaginationExpose {
  /** Current active slide / Текущий активный слайд */
  getSelected(): number
  /** Total item count / Общее количество элементов */
  getCount(): number
  /** Sets the active slide / Устанавливает активный слайд */
  set(selected: number): void
  /** Advances to the next slide / Переходит к следующему слайду */
  next(): void
  /** Moves to the previous slide / Переходит к предыдущему слайду */
  previous(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface CarouselPaginationSlots {
  /** Slot for custom rendering of each bullet/item / Слот для кастомного рендеринга элемента пагинации */
  item?(props: {
    binds: CarouselPaginationItemBinds
    item: CarouselPaginationItem
    index: number
  }): any
  /** Slot for custom rendering of fraction text / Слот для кастомного рендеринга дроби */
  fraction?(props: {
    binds: CarouselPaginationFractionBinds
    active: number
    total: number
    text: string
  }): any
  /** Slot for custom rendering of progress bar / Слот для кастомного рендеринга полосы прогресса */
  progress?(props: {
    binds: CarouselPaginationProgressBinds
    active: number
    total: number
    percent: number
  }): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type CarouselPaginationClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  fraction: string
  progress: string
  progressBar: string
  // :classes [!] System label / Системная метка
}
