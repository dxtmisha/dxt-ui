import type { ConstrBind } from '@dxtmisha/functional'
import type { ButtonPropsBasic } from '../Button'

export type ActionsPropsToken = {
  // :type [!] System label / Системная метка
  align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto'
  flexible?: boolean
  wrap?: boolean
  // :type [!] System label / Системная метка
}

export type ActionsPropsBasic<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = {
  // Value
  /** Primary list of action configurations/ Основной список конфигураций действий */
  list?: ConstrBind<Button>[]
  /** Secondary list of action configurations/ Вторичный список конфигураций действий */
  listSecondary?: ConstrBind<Button>[]

  // Style
  /** Shared attributes for buttons in the primary list/ Общие атрибуты для кнопок в основном списке */
  buttonAttrs?: ConstrBind<Button>
  /** Shared attributes for buttons in the secondary list/ Общие атрибуты для кнопок во вторичном списке */
  buttonSecondaryAttrs?: ConstrBind<Button>
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ActionsProps = ActionsPropsBasic & ActionsPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsActions = {
  ...{
    // :default [!] System label / Системная метка
    align: 'right'
    // :default [!] System label / Системная метка
  }
}
