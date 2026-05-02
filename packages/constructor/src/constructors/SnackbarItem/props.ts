import type { ConstrBind } from '@dxtmisha/functional'

import type { AriaLivePropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes'
import type { AreaProps } from '../../types/areaTypes'
import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { TextClosePropsInclude } from '../../types/textTypes'

import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'
import type { ButtonPropsBasic } from '../Button'
import type { IconPropsBasic, IconTrailingPropsInclude, IconValue } from '../Icon'

type SnackbarItemPropsToken = {
  // :type [!] System label / Системная метка
  success?: boolean
  error?: boolean
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
  & AriaLivePropsInclude
  & TextClosePropsInclude
  & AreaProps
  & {
    /** Value/ Значения */
    /** Button configuration or text/ Конфигурация или текст кнопки */
    button?: string | number | ConstrBind<Button>
    /** HTML content for the notification/ HTML-содержимое для уведомления */
    html?: string
    /** Custom component for the notification/ Пользовательский компонент для уведомления */
    component?: any
    /** Properties for the custom component/ Свойства для пользовательского компонента */
    componentProps?: object

    /** Unique identifier or value for the item/ Уникальный идентификатор или значение для элемента */
    value?: string

    /** Style/ Стили */
    /** Whether to show a close button/ Показывать ли кнопку закрытия */
    closeButton?: boolean
    /** Icon for the close button/ Иконка для кнопки закрытия */
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
  area: 'snackbar',
  closeButton: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
