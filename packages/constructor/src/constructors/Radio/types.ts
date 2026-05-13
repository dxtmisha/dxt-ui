import type { ConstrClass } from '@dxtmisha/functional'
import type {
  CheckboxComponents,
  CheckboxEmits,
  CheckboxExpose,
  CheckboxSlots
} from '../Checkbox'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type RadioComponents = CheckboxComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type RadioEmits = CheckboxEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface RadioExpose extends CheckboxExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface RadioSlots extends CheckboxSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type RadioClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  input: string
  body: string
  item: string
  icon: string
  loading: string
  info: string
  label: string
  // :classes [!] System label / Системная метка
}
