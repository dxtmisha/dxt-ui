import { type FieldPropsBasic, defaultsField } from '@dxtmisha/constructor/Field'

import type { IconProps } from '../Icon'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { FieldCounterProps } from '../FieldCounter'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  arrowAlign: ['center', 'right', 'left'],
  cancel: ['auto', 'always', 'none'],
  align: ['center', 'right', 'left'],
  width: []
  // :values [!] System label / Системная метка
}

interface PropsToken {
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

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface FieldProps extends FieldPropsBasic<IconProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps>,
  PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsField,
  iconArrowLeft: 'keyboard_arrow_left',
  iconArrowRight: 'keyboard_arrow_right',
  iconPlus: 'add',
  iconMinus: 'remove',
  iconClose: 'close_small',
  ...{
    // :default [!] System label / Системная метка
    classic: true,
    arrowAlign: 'right',
    cancel: 'auto'
    // :default [!] System label / Системная метка
  }
}
