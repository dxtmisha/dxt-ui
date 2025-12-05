import type { Ref } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TextareaAutosizeComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TextareaAutosizeEmits = {
  input: [event: InputEvent]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TextareaAutosizeExpose {
  value: Ref<string>
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TextareaAutosizeSlots {
  // default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TextareaAutosizeClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  clone: string
  // :classes [!] System label / Системная метка
}
