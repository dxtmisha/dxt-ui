import { type SelectPropsBasic, defaultsSelect } from '@dxtmisha/constructor/Select'

import type { IconProps } from '../Icon'
import type { FieldProps } from '../Field'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { FieldCounterProps } from '../FieldCounter'
import type { ProgressProps } from '../Progress'
import type { MenuProps } from '../Menu'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SelectProps = SelectPropsBasic<
  IconProps,
  FieldProps,
  FieldLabelProps,
  FieldMessageProps,
  FieldCounterProps,
  ProgressProps,
  MenuProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSelect,
  iconArrowDown: 'keyboard_arrow_down',
  menuAttrs: {
    itemAttrs: {
      dense: true
    }
  },
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
