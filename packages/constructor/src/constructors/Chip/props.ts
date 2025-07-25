import type { IconPropsBasic } from '../Icon'
import type { ProgressPropsBasic } from '../Progress'
import type { ButtonPropsBasic } from '../Button'

interface ChipPropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  adaptive?: 'iconAlways' | 'block' | 'auto'
  inverse?: boolean
  grid?: boolean
  textAlign?: 'left' | 'center' | 'right'
  // :type [!] System label / Системная метка
}

export interface ChipPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> extends ButtonPropsBasic<Icon, Progress> {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ChipProps extends ChipPropsBasic, ChipPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsChip = {
  tag: 'span',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
