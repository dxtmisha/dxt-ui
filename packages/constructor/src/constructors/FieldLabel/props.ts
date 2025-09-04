import type { LabelProps } from '../../types/labelTypes'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter'

interface FieldLabelPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface FieldLabelPropsBasic<
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends LabelProps,
  FieldCounterPropsInclude<FieldCounter>,
  ProgressPropsInclude<Progress> {
  // Style
  required?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface FieldLabelProps extends FieldLabelPropsBasic, FieldLabelPropsToken {
}

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
