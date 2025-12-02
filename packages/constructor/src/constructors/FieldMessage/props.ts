import type { FieldCounterPropsBasic, FieldCounterPropsInclude } from '../FieldCounter'
import type { SkeletonPropsInclude } from '../Skeleton'

interface FieldMessagePropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface FieldMessagePropsBasic<
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic
> extends FieldCounterPropsInclude<FieldCounter>,
  SkeletonPropsInclude {
  // Status
  forceShow?: boolean
  disabled?: boolean

  // Value
  helperMessage?: string
  validationMessage?: string

  // Technical
  helperId?: string
  validationId?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface FieldMessageProps extends FieldMessagePropsBasic, FieldMessagePropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsFieldMessage = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
