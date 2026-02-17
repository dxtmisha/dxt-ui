import type { ConstrClass } from '@dxtmisha/functional'

import type { MotionAxisSelectedValue } from './basicTypes'

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
  'update:selected': [value: MotionAxisSelectedValue]
  'update:modelSelected': [value: MotionAxisSelectedValue]

  'start': [selected: MotionAxisSelectedValue]
  'end': [selected: MotionAxisSelectedValue]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MotionAxisExpose {
  back(): void

  next(): void

  to(selected: MotionAxisSelectedValue): void

  top(selected: MotionAxisSelectedValue): void

  right(selected: MotionAxisSelectedValue): void

  bottom(selected: MotionAxisSelectedValue): void

  left(selected: MotionAxisSelectedValue): void

  down(selected: MotionAxisSelectedValue): void

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
