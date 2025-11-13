import type { ConstrClass } from '@dxtmisha/functional'
import type { MenuComponentInclude, MenuExposeInclude, MenuSlotInclude } from '../Menu'
import type { FieldComponentInclude, FieldSlotsInclude } from '../Field'
import type { SelectValueComponentInclude } from '../SelectValue'
import type { InputComponentInclude } from '../Input'

import type { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SelectComponents
  = MenuComponentInclude
    & FieldComponentInclude
    & SelectValueComponentInclude
    & InputComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SelectEmits = FieldBasicEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SelectExpose extends FieldBasicExpose, MenuExposeInclude {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SelectSlots extends FieldSlotsInclude, MenuSlotInclude {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SelectClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  // :classes [!] System label / Системная метка
}
