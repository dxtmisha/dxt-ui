import { type SelectPropsBasic, defaultsSelect } from '@dxtmisha/constructor/Select'

import type { IconProps } from '../Icon'
import type { FieldProps } from '../Field'
import type { FieldLabelProps } from '../FieldLabel'
import type { FieldMessageProps } from '../FieldMessage'
import type { FieldCounterProps } from '../FieldCounter'
import type { InputProps } from '../Input'
import type { ProgressProps } from '../Progress'
import type { MenuProps } from '../Menu'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface SelectProps extends SelectPropsBasic<
  IconProps,
  FieldProps,
  FieldLabelProps,
  FieldMessageProps,
  FieldCounterProps,
  InputProps,
  ProgressProps,
  MenuProps
>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSelect,
  iconArrowDown: 'keyboard_arrow_down',
  iconSearch: 'search',
  menuAttrs: {
    itemAttrs: {
      dense: true
    }
  },
  inputSearchAttrs: {
    fieldAttrs: {
      size: 'sm'
    }
  },
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
