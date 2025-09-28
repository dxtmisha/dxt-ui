import type { ConstrBind } from '@dxtmisha/functional'
import type { LabelAlternativeSlots, LabelProps } from '../../types/labelTypes'
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
 * Slots contract that FieldLabelInclude can expose or map to Label component slots.
 * Extends LabelAlternativeSlots to reuse standard label-related slots (leading, trailing, etc.).
 *
 * Контракт слотов, которые может предоставлять FieldLabelInclude или прокидывать в Label.
 * Расширяет LabelAlternativeSlots, чтобы переиспользовать стандартные слоты лейбла (leading, trailing и др.).
 */
export interface FieldLabelSlotsInclude extends LabelAlternativeSlots {
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
