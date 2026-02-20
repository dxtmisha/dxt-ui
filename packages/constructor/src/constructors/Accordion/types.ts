import type { ConstrClass } from '@dxtmisha/functional'

import type { EventClickEmits } from '../../types/eventClickTypes'

import type { CellComponentInclude, CellSlotsInclude } from '../Cell'
import type {
  MotionTransformComponentInclude,
  MotionTransformControlItem,
  MotionTransformEmitsInclude,
  MotionTransformExposeInclude
} from '../MotionTransform'

import type { ModelEmitsOpen } from '../../types/modelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AccordionComponents
  = CellComponentInclude
    & MotionTransformComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AccordionEmits
  = EventClickEmits
    & MotionTransformEmitsInclude
    & ModelEmitsOpen

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AccordionExpose extends MotionTransformExposeInclude {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AccordionSlots extends CellSlotsInclude {
  default?(props: MotionTransformControlItem): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AccordionClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  head: string
  body: string
  // :classes [!] System label / Системная метка
}
