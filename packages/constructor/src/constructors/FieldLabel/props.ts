import type { LabelProps } from '../../types/labelTypes'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter'
import type { SkeletonPropsInclude } from '../Skeleton'

export type FieldLabelPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type FieldLabelPropsBasic<
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = LabelProps
  & FieldCounterPropsInclude<FieldCounter>
  & ProgressPropsInclude<Progress>
  & SkeletonPropsInclude & {
  // Style
    required?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FieldLabelProps = FieldLabelPropsBasic & FieldLabelPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsFieldLabel = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
