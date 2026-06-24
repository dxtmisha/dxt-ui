import type { InputSocialTypeValue } from '@dxtmisha/media'

import type { MaskPropsBasic, MaskPropsInclude } from '../Mask'
import type { IconPropsBasic } from '../Icon'
import type { FieldPropsBasic, FieldPropsInclude } from '../Field'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic } from '../Progress'

import type { FieldInputSocialProps } from '../../types/fieldTypes'

/** Tokens for InputSocial properties / Токены для свойств InputSocial */
export type InputSocialPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Basic properties of InputSocial / Базовые свойства InputSocial */
export type InputSocialPropsBasic<
  Mask extends MaskPropsBasic = MaskPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = MaskPropsInclude<Mask>
  & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>
  & FieldInputSocialProps
  & {
    /** Type of social network / Тип социальной сети */
    socialType?: InputSocialTypeValue
    /** Dictionary of custom icons for each social network / Словарь кастомных иконок для каждой социальной сети */
    socialIcons?: Record<InputSocialTypeValue, string>
  }

/** Incoming properties for InputSocial / Входящие свойства для InputSocial */
export type InputSocialProps = InputSocialPropsBasic & InputSocialPropsToken

/** Default values for InputSocial properties / Значения по умолчанию для свойств InputSocial */
export const defaultsInputSocial = {
  type: 'text',
  autocomplete: 'off',
  maskVisible: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
