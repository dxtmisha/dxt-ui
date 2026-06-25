import type { ConstrBind } from '@dxtmisha/functional'
import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { IconPropsBasic, IconTrailingPropsInclude } from '../Icon'
import type { AlertLinkPropsBasic, AlertLinkPropsInclude } from '../AlertLink'
import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'
import type { ButtonPropsBasic } from '../Button'

type AlertPropsToken = {
  // :type [!] System label / Системная метка
  itemCenter?: boolean
  // :type [!] System label / Системная метка
}

export type AlertPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  AlertLink extends AlertLinkPropsBasic = AlertLinkPropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = LabelProps &
  DescriptionProps &
  IconTrailingPropsInclude<Icon> &
  AlertLinkPropsInclude<AlertLink> &
  ActionsPropsInclude<Actions> & {
    // Value
    /** Close button value / Значение для кнопки */
    button?: string | number | ConstrBind<Button>

    // Icon
    /** Close button icon name / Название иконки для закрытия */
    iconClose?: string

    // Style
    /** Shows the close button / Показывает кнопку закрытия */
    closeButton?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AlertProps = AlertPropsBasic & AlertPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsAlert = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    itemCenter: true
    // :default [!] System label / Системная метка
  }
}
