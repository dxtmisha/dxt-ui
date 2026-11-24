import type { ConstrBind } from '@dxtmisha/functional'

import type { WindowPropsBasic } from '../Window'
import type { BarsPropsBasic } from '../Bars'
import type { IconPropsBasic, IconValue } from '../Icon'
import type { ImagePropsBasic } from '../Image'
import type { ButtonPropsBasic } from '../Button'
import type { ActionsPropsBasic } from '../Actions'
import type { ModalPropsBasic } from '../Modal'
import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { TextClosePropsInclude, TextOkPropsInclude } from '../../types/textTypes'

/** Token properties for Dialog component / Токен-свойства компонента Dialog */
export type DialogPropsToken = {
  // :type [!] System label / Системная метка
  success?: boolean
  error?: boolean
  imagePosition?: 'top' | 'left'
  // :type [!] System label / Системная метка
}

/** Basic properties for Dialog component / Базовые свойства компонента Dialog */
export type DialogPropsBasic<
  Window extends WindowPropsBasic = WindowPropsBasic,
  Bars extends BarsPropsBasic = BarsPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic
> = ModalPropsBasic<Window, Bars, Actions, Image>
  & LabelProps
  & DescriptionProps
  & TextClosePropsInclude
  & TextOkPropsInclude & {
    /** Style / Стили */
    /** Icon for the dialog / Иконка для диалогового окна */
    icon?: IconValue<Icon>

    /** Positive action button properties / Свойства кнопки положительного действия */
    buttonOk?: string | ConstrBind<Button> | null
    /** Close action button properties / Свойства кнопки действия закрытия */
    buttonClose?: string | ConstrBind<Button> | null

    /** Whether to show the close button / Показывать ли кнопку закрытия */
    closeButton?: boolean
    /** Whether to close the dialog upon clicking the OK button / Закрывать ли диалоговое окно при клике на кнопку подтверждения */
    clickOkAndClose?: boolean

    /** Icon for the success state / Иконка для состояния успеха */
    iconSuccess?: IconValue<Icon>
    /** Icon for the error state / Иконка для состояния ошибки */
    iconError?: IconValue<Icon>

    /** Additional attributes for the icon component / Дополнительные атрибуты для компонента иконки */
    iconAttrs?: ConstrBind<Icon>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type DialogProps = DialogPropsBasic & DialogPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsDialog = {
  barsBackHide: true,
  barsHide: true,
  clickOkAndClose: true,
  ...{
    // :default [!] System label / Системная метка
    imagePosition: 'top'
    // :default [!] System label / Системная метка
  }
}
