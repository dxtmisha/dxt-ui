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
import type { SkeletonPropsInclude } from '../Skeleton'

interface FieldPropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  block?: boolean
  isValue?: boolean
  basic?: boolean
  boxed?: boolean
  tonal?: boolean
  filled?: boolean
  outlined?: boolean
  classic?: boolean
  arrowCarousel?: boolean
  arrowStepper?: boolean
  arrowAlign?: 'center' | 'right' | 'left'
  cancel?: 'auto' | 'always' | 'none'
  align?: 'center' | 'right' | 'left'
  width?: string | 'custom'
  // :type [!] System label / Системная метка
}

export interface FieldPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends IconTrailingPropsInclude<Icon>,
  PrefixProps,
  SuffixProps,
  CaptionProps,
  FieldLabelPropsInclude<FieldLabel, FieldCounter>,
  FieldMessagePropsInclude<FieldMessage, FieldCounter>,
  ProgressPropsInclude<Progress>,
  EnabledProps,
  EventClickProps,
  SkeletonPropsInclude {
  // Status
  disabledPrevious?: boolean
  disabledNext?: boolean

  // Style
  id: string | number

  counterTop?: boolean

  cancelShow?: boolean

  iconArrowLeft?: IconValue<Icon>
  iconArrowRight?: IconValue<Icon>
  iconPlus?: IconValue<Icon>
  iconMinus?: IconValue<Icon>
  iconClose?: IconValue<Icon>
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
  ...{
    // :default [!] System label / Системная метка
    arrowAlign: 'right',
    cancel: 'auto'
    // :default [!] System label / Системная метка
  }
}
