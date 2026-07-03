import type { Ref } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'
import type { ModelEmits } from '../../types/modelTypes'

import type { FieldLabelComponentInclude } from '../FieldLabel/basicTypes'
import type { FieldMessageComponentInclude } from '../FieldMessage/basicTypes'
import type { InputCodeItemComponentInclude } from '../InputCodeItem/basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputCodeComponents
  = InputCodeItemComponentInclude
  & FieldLabelComponentInclude
  & FieldMessageComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputCodeEmits
  = ModelEmits<string>
  & {
    input: [value: string]
  }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputCodeExpose {
  value: Ref<string>
  set(value: string | number): void
  reset(): void
  focus(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputCodeSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputCodeClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  context: string
  // :classes [!] System label / Системная метка
}
