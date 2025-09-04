import type { PrefixProps } from '../../types/prefixTypes'
import type { SuffixProps } from '../../types/suffixTypes'
import type { CaptionProps } from '../../types/captionTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

import type { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'

interface FieldPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface FieldPropsBasic<
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends FieldMessagePropsInclude<FieldMessage>,
  PrefixProps,
  SuffixProps,
  CaptionProps,
  IconTrailingPropsInclude<Icon>,
  FieldLabelPropsInclude<FieldLabel, FieldCounter>,
  ProgressPropsInclude<Progress>,
  EnabledProps,
  EventClickProps {
  // Status
  disabledPrevious?: boolean
  disabledNext?: boolean

  // Style
  counterTop?: boolean

  cancel?: boolean
  cancelShow?: boolean
  cancelAlways?: boolean

  iconArrowLeft?: IconValue<Icon>
  iconArrowRight?: IconValue<Icon>
  iconCancel?: IconValue<Icon>
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface FieldProps extends FieldPropsBasic, FieldPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsField = {
  cancel: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
