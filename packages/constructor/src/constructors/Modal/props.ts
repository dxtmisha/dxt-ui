import type { WindowPropsBasic, WindowPropsInclude } from '../Window'
import type { BarsPropsBasic, BarsPropsInclude } from '../Bars'
import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'
import type { ImagePropsBasic, ImagePropsInclude } from '../Image'

interface ModalPropsToken {
  // :type [!] System label / Системная метка
  imagePosition?: 'top' | 'left'
  // :type [!] System label / Системная метка
}

export interface ModalPropsBasic<
  Window extends WindowPropsBasic = WindowPropsBasic,
  Bars extends BarsPropsBasic = BarsPropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic
> extends WindowPropsInclude<Window>,
  BarsPropsInclude<Bars>,
  ActionsPropsInclude<Actions>,
  ImagePropsInclude<Image> {
  // Status
  open?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ModalProps extends ModalPropsBasic, ModalPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsModal = {
  barsBackHide: true,
  ...{
    // :default [!] System label / Системная метка
    imagePosition: 'top'
    // :default [!] System label / Системная метка
  }
}
