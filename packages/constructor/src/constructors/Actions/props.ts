import type { ConstrBind } from '@dxtmisha/functional'
import type { ButtonPropsBasic } from '../Button'

export type ActionsPropsToken = {
  // :type [!] System label / Системная метка
  align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto'
  flexible?: boolean
  // :type [!] System label / Системная метка
}

export type ActionsPropsBasic<
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = {
  // Value
  list?: ConstrBind<Button>[]
  listSecondary?: ConstrBind<Button>[]

  // Style
  buttonAttrs?: ConstrBind<Button>
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
