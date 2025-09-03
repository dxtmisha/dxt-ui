import type { ConstrBind } from '@dxt-ui/functional'

import type { FieldMessagePropsBasic } from './props'

/**
 * Interface for describing which components need to be connected for FieldMessage work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldMessage
 */
export type FieldMessageComponentInclude = {
  fieldMessage: object
}

/**
 * Properties that can be passed to FieldMessageInclude/
 * Свойства, которые можно передать в FieldMessageInclude
 */
export interface FieldMessagePropsInclude<
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic
> {
  forceShowMessage?: boolean
  disabled?: boolean
  helperMessage?: string
  validationMessage?: string
  fieldMessageAttrs?: ConstrBind<FieldMessage>
}
