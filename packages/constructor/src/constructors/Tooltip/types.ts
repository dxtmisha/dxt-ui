import type { ConstrClass } from '@dxtmisha/functional'

import type { LabelSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'

import type { ArrowComponentInclude } from '../Arrow'

import type { TooltipControl } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TooltipComponents = ArrowComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TooltipEmits = {
  tooltip: [open: boolean]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TooltipExpose {
  toggle(open: boolean, flash?: boolean): Promise<void>
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TooltipSlots extends LabelSlots, DescriptionSlots {
  control?(props: TooltipControl): any

  body?(): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TooltipClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  description: string
  body: string
  // :classes [!] System label / Системная метка
}
