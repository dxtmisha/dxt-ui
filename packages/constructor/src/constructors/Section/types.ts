import type { ConstrClass } from '@dxtmisha/functional'
import type { BlockComponents, BlockEmits, BlockExpose, BlockSlots } from '../Block'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SectionComponents = BlockComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SectionEmits = BlockEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SectionExpose extends BlockExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SectionSlots extends BlockSlots {
  // default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SectionClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  headline: string
  header: string
  label: string
  description: string
  caption: string
  icon: string
  space: string
  body: string
  // :classes [!] System label / Системная метка
}
