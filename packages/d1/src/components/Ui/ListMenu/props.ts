import { type ListMenuPropsBasic, defaultsListMenu } from '@dxt-ui/constructor/ListMenu'
import type { WindowProps } from '../Window'

export const propsValues = {
  // :values [!] System label / Системная метка
  axis: ['x', 'y']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  open?: boolean
  axis?: 'x' | 'y'
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ListMenuProps extends ListMenuPropsBasic<WindowProps>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsListMenu,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
