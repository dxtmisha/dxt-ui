import type { NumberOrString } from '@dxtmisha/functional'

import type { MaskPropsBasic, MaskPropsInclude } from '../Mask'
import type { IconPropsBasic } from '../Icon'
import type { FieldPropsBasic, FieldPropsInclude } from '../Field'
import type { FieldLabelPropsBasic } from '../FieldLabel'
import type { FieldMessagePropsBasic } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic } from '../Progress'

import type { FieldInputProps } from '../../types/fieldTypes'
import type {
  TextEntriesMatchPropsInclude,
  TextHidePropsInclude,
  TextShowPropsInclude
} from '../../types/textTypes'

/**
 * Type describing token properties for Input.
 *
 * Тип, описывающий свойства токенов для Input.
 */
export type InputPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Basic properties type for the Input component.
 *
 * Базовый тип свойств для компонента Input.
 */
export type InputPropsBasic<
  Mask extends MaskPropsBasic = MaskPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Field extends FieldPropsBasic = FieldPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = Omit<MaskPropsInclude<Mask>, 'modelValue' | 'onUpdate:value' | 'onUpdate:modelValue' | 'value'>
  & FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>
  & FieldInputProps<NumberOrString>
  & TextEntriesMatchPropsInclude
  & TextHidePropsInclude
  & TextShowPropsInclude

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputProps = InputPropsBasic & InputPropsToken

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
