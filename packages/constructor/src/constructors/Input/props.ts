import type { NumberOrString } from '@dxtmisha/functional'

import type { MaskPropsBasic, MaskPropsInclude } from '../Mask'
import type { IconPropsBasic } from '../Icon'
import type { FieldPropsBasic, FieldPropsInclude } from '../Field'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic } from '../Progress'

import type { FieldInputProps } from '../../types/fieldTypes'

interface InputPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface InputPropsBasic<
  Mask extends MaskPropsBasic = MaskPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends MaskPropsInclude<Mask>,
  FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>,
  FieldInputProps<NumberOrString> {
  // Style
  iconVisibility?: string
  iconVisibilityOff?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface InputProps extends InputPropsBasic, InputPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInput = {
  type: 'text',
  autocomplete: 'off',
  arrow: 'auto',
  maskVisible: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
