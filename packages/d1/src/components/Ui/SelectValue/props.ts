import type { IconProps } from '../Icon'
import type { ChipProps } from '../Chip'

import { type SelectValuePropsBasic, defaultsSelectValue } from '@dxtmisha/constructor/SelectValue'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  placeholder?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface SelectValueProps extends SelectValuePropsBasic<IconProps, ChipProps>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSelectValue,
  chipAttrs: {
    size: 'sm'
  },
  iconCancel: 'close_small',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
