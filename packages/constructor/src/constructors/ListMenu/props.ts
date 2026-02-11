import type { WindowPropsBasic, WindowPropsInclude } from '../Window'

export type ListMenuPropsToken = {
  // :type [!] System label / Системная метка
  open?: boolean
  axis?: 'x' | 'y'
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type ListMenuPropsBasic<
  Window extends WindowPropsBasic = WindowPropsBasic
> = WindowPropsInclude<Window>
  & {
    // Technical
    control?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ListMenuProps = ListMenuPropsBasic & ListMenuPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsListMenu = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
