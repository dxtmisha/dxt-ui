import type { ConstrClass } from '@dxtmisha/functional'
import type { LabelSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { IconComponentInclude } from '../Icon'
import type { TooltipComponentInclude } from '../Tooltip'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableHeaderItemComponents = IconComponentInclude & TooltipComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableHeaderItemEmits = {
  // none
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableHeaderItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные slots.
 */
export interface TableHeaderItemSlots extends LabelSlots, DescriptionSlots {
  /** Slot for displaying custom tooltip body / Слот для отображения пользовательского содержимого подсказки */
  tooltip?(): any
  /** Slot for custom cell context / Слот для пользовательского контекста ячейки */
  context?(): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableHeaderItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  label: string
  labelHeader: string
  description: string
  tooltip: string
  // :classes [!] System label / Системная метка
}
