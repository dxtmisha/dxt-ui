import type { ConstrBind } from '@dxtmisha/functional'

import type { FieldMessagePropsBasic } from './props'
import type { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter'

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
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic
> extends FieldCounterPropsInclude<FieldCounter> {
  forceShowMessage?: boolean
  disabled?: boolean
  helperMessage?: string
  validationMessage?: string
  fieldMessageAttrs?: ConstrBind<FieldMessage>
}
