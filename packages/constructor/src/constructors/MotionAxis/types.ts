import type { ConstrClass } from '@dxtmisha/functional'

import type { ModelEmitsSelected } from '../../types/modelTypes'
import type { MotionAxisEmitOptions, MotionAxisSelectedValue } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MotionAxisComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MotionAxisEmits
  = ModelEmitsSelected<MotionAxisSelectedValue>
    & {
      /** Event for axis motion/ Событие движения оси */
      motionAxis: [options: MotionAxisEmitOptions]
      /** Event triggered at the start of animation/ Событие начала анимации */
      start: [selected: MotionAxisSelectedValue]
      /** Event triggered at the end of animation/ Событие завершения анимации */
      end: [selected: MotionAxisSelectedValue]
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MotionAxisExpose {
  /** Goes back to the previous element/ Возвращается к предыдущему элементу */
  back(): void

  /** Goes to the next element/ Переходит к следующему элементу */
  next(): void

  /** Goes to the specified element/ Переходит к указанному элементу */
  to(selected: MotionAxisSelectedValue): void

  /** Goes to the top element/ Переходит к верхнему элементу */
  top(selected: MotionAxisSelectedValue): void

  /** Goes to the right element/ Переходит к правому элементу */
  right(selected: MotionAxisSelectedValue): void

  /** Goes to the bottom element/ Переходит к нижнему элементу */
  bottom(selected: MotionAxisSelectedValue): void

  /** Goes to the left element/ Переходит к левому элементу */
  left(selected: MotionAxisSelectedValue): void

  /** Goes down to the specified element/ Переходит вниз к указанному элементу */
  down(selected: MotionAxisSelectedValue): void

  /** Goes up to the specified element/ Переходит вверх к указанному элементу */
  up(selected: MotionAxisSelectedValue): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type MotionAxisSlots = {
  [K in string]?: (props: any) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MotionAxisClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  slide: string
  // :classes [!] System label / Системная метка
}
