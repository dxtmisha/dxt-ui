import type { ConstrBind } from '@dxt-ui/functional'
import type { LabelProps } from '../../types/labelTypes'
import type { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter'
import type { FieldLabelPropsBasic } from './props'

/**
 * Interface for describing which components need to be connected for FieldLabel work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldLabel
 */
export type FieldLabelComponentInclude = {
  fieldLabel: object
}

/**
 * Properties that can be passed to FieldLabelInclude/
 * Свойства, которые можно передать в FieldLabelInclude
 */
export interface FieldLabelPropsInclude<
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic
> extends LabelProps, FieldCounterPropsInclude<FieldCounter> {
  required?: boolean
  fieldLabelAttrs?: ConstrBind<FieldLabel>
}
