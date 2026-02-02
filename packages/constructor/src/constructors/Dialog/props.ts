import type { ConstrBind } from '@dxtmisha/functional'

import type { WindowPropsBasic, WindowPropsInclude } from '../Window'
import type { BarsPropsBasic, BarsPropsInclude } from '../Bars'
import type { IconPropsBasic, IconValue } from '../Icon'
import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { ButtonPropsBasic } from '../Button'
import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'
import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { TextClosePropsInclude, TextOkPropsInclude } from '../../types/textTypes'

export type DialogPropsToken = {
  // :type [!] System label / Системная метка
  success?: boolean
  error?: boolean
  imagePosition?: 'top' | 'left'
  // :type [!] System label / Системная метка
}

export type DialogPropsBasic<
  Window extends WindowPropsBasic = WindowPropsBasic,
  Bars extends BarsPropsBasic = BarsPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic
> = WindowPropsInclude<Window>
  & BarsPropsInclude<Bars>
  & ActionsPropsInclude<Actions>
  & ImagePropsInclude<Image>
  & LabelProps
  & DescriptionProps
  & TextClosePropsInclude
  & TextOkPropsInclude & {
  // Status
    open?: boolean

    // Style
    icon?: IconValue<Icon>

    buttonOk?: string | ConstrBind<Button> | null
    buttonClose?: string | ConstrBind<Button> | null

    closeButton?: boolean
    clickOkAndClose?: boolean

    iconSuccess?: IconValue<Icon>
    iconError?: IconValue<Icon>

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
