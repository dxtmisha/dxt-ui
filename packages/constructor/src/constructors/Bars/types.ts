import type { ConstrClass } from '@dxt-ui/functional'

import type { ButtonComponentInclude } from '../Button'
import type { EventClickEmits } from '../../types/eventClickTypes.ts'
import type { LabelSlots } from '../../types/labelTypes.ts'
import type { DescriptionSlots } from '../../types/descriptionTypes.ts'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BarsComponents = ButtonComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BarsEmits
  = EventClickEmits
    & {
      'update:action': [value: boolean]
      'update:modelAction': [value: boolean]
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BarsExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BarsSlots extends LabelSlots, DescriptionSlots {
  bars?(props: any): any

  actionBars?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BarsClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  context: string
  label: string
  description: string
  // :classes [!] System label / Системная метка
}
