import type { WindowPropsBasic, WindowPropsInclude } from '../Window'

interface ListMenuPropsToken {
  // :type [!] System label / Системная метка
  open?: boolean
  axis?: 'x' | 'y'
  divider?: boolean
  // :type [!] System label / Системная метка
}

export interface ListMenuPropsBasic<
  Window extends WindowPropsBasic = WindowPropsBasic
>extends WindowPropsInclude<Window> {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListMenuProps extends ListMenuPropsBasic, ListMenuPropsToken {
}

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
