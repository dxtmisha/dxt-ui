import type { IconPropsBasic } from '../Icon'
import type { InputPhoneDialCodePropsBasic, InputPhoneDialCodePropsInclude } from '../InputPhoneDialCode'
import type { FieldPropsBasic, FieldPropsInclude } from '../Field'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { ProgressPropsBasic } from '../Progress'

import type { FieldInputPhoneProps } from '../../types/fieldTypes'

type InputPhonePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type InputPhonePropsBasic<
  InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = InputPhoneDialCodePropsInclude<InputPhoneDialCode>
  & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>
  & FieldInputPhoneProps

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputPhoneProps = InputPhonePropsBasic & InputPhonePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputPhone = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
