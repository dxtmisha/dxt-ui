import type { ConstrClass } from '@dxtmisha/functional'

import type { MotionAxisSelected } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MotionAxisComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MotionAxisEmits = {
  'update:selected': [value: MotionAxisSelected]
  'update:modelSelected': [value: MotionAxisSelected]

  'start': [selected: MotionAxisSelected]
  'end': [selected: MotionAxisSelected]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MotionAxisExpose {
  back(): void

  next(): void

  to(selected: MotionAxisSelected): void

  top(selected: MotionAxisSelected): void

  right(selected: MotionAxisSelected): void

  bottom(selected: MotionAxisSelected): void

  left(selected: MotionAxisSelected): void

  down(selected: MotionAxisSelected): void

  up(selected: MotionAxisSelected): void
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
  // :classes [!] System label / Системная метка
}
