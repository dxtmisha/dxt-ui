import type { ConstrBind } from '@dxtmisha/functional'

import type { AriaRolePropsInclude } from '../../types/ariaTypes'
import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { TextClosePropsInclude } from '../../types/textTypes'

import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'
import type { ButtonPropsBasic } from '../Button'
import type { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon'

type SnackbarItemPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SnackbarItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic
> = LabelProps
  & DescriptionProps
  & IconTrailingPropsInclude<Icon>
  & ActionsPropsInclude<Actions>
  & AriaRolePropsInclude
  & TextClosePropsInclude
  & {
    // Value
    button?: string | number | ConstrBind<Button>
    html?: string
    component?: any
    componentProps?: object

    value?: string

    // Style
    closeButton?: boolean
    iconClose?: IconValue<Icon>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SnackbarItemProps = SnackbarItemPropsBasic & SnackbarItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSnackbarItem = {
  closeButton: true,
  role: 'status',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
