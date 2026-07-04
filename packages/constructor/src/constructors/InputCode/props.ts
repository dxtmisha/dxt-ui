import type { ModelProps } from '../../types/modelTypes'

import type { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { InputCodeItemPropsBasic, InputCodeItemPropsInclude } from '../InputCodeItem'

type InputCodePropsToken = {
  // :type [!] System label / Системная метка
  validation?: boolean
  // :type [!] System label / Системная метка
}

export type InputCodePropsBasic<
  InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic
> = InputCodeItemPropsInclude<InputCodeItem>
  & FieldLabelPropsInclude<FieldLabel>
  & FieldMessagePropsInclude<FieldMessage>
  & ModelProps
  & {
    loading?: boolean

    value?: string

    length?: number
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputCodeProps = InputCodePropsToken & InputCodePropsBasic

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputCode = {
  length: 4,
  match: /[0-9]/,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
