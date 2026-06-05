import type { IconPropsBasic } from '../Icon'
import type { InputPhoneDialCodePropsBasic, InputPhoneDialCodePropsInclude } from '../InputPhoneDialCode'
import type { FieldPropsBasic, FieldPropsInclude } from '../Field'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { ProgressPropsBasic } from '../Progress'

import type { FieldInputPhoneProps } from '../../types/fieldTypes'
import type { ConstrBind } from '@dxtmisha/functional'
import type { MaskPropsBasic } from '../Mask'

/**
 * Type describing token properties for InputPhone /
 * Тип, описывающий свойства токенов для InputPhone
 */
type InputPhonePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Interface describing basic properties of the InputPhone component /
 * Интерфейс, описывающий базовые свойства компонента InputPhone
 */
export type InputPhonePropsBasic<
  InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic,
  Mask extends MaskPropsBasic = MaskPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = InputPhoneDialCodePropsInclude<InputPhoneDialCode>
  & Omit<FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, 'caption' | 'counterShow'>
  & FieldInputPhoneProps
  & {
    /** Default country / Страна по умолчанию */
    countryDefault?: string
    /** Flag to disable dynamic country detection by phone number / Флаг для отключения динамического определения страны по номеру телефона */
    countryBlock?: boolean
    /** Additional attributes for the mask / Дополнительные атрибуты для маски */
    maskAttrs?: ConstrBind<Mask>
  }

/** Type describing incoming properties / Тип, описывающий входящие свойства */
export type InputPhoneProps = InputPhonePropsBasic & InputPhonePropsToken

/** Default values for properties / Значения по умолчанию для свойств */
export const defaultsInputPhone = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
