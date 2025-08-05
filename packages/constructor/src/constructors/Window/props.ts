import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { ElementOrString, NormalOrPromise } from '@dxt-ui/functional'

interface WindowPropsToken {
  // :type [!] System label / Системная метка
  width?: string | 'auto' | 'max' | 'custom'
  height?: string | 'auto' | 'max' | 'custom'
  hide?: boolean
  axis?: 'x' | 'y' | 'on'
  imagePosition?: 'top' | 'left'
  dense?: boolean
  alignment?: 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull'
  origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight'
  adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'static'
  fullscreen?: boolean
  overscroll?: boolean
  closeMobileHide?: boolean
  widthMatch?: boolean
  // :type [!] System label / Системная метка
}

export interface WindowPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic
> extends ImagePropsInclude<Image> {
  // Status
  open?: boolean
  disabled?: boolean

  // Hook
  preparation?(): NormalOrPromise<boolean>

  beforeOpening?(): NormalOrPromise<boolean>

  opening?(): NormalOrPromise<boolean>

  beforeClosing?(): NormalOrPromise<boolean>

  closing?(): NormalOrPromise<boolean>

  // Style
  contextmenu?: boolean
  staticMode?: boolean
  overElement?: ElementOrString<HTMLElement>

  autoClose?: boolean
  persistent?: boolean

  flash?: boolean
  inDom?: boolean

  indent?: number
  divider?: boolean

  closeButton?: boolean
  iconClose?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface WindowProps extends WindowPropsBasic, WindowPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsWindow = {
  indent: 4,
  ...{
    // :default [!] System label / Системная метка
    axis: 'y',
    imagePosition: 'top',
    overscroll: true
    // :default [!] System label / Системная метка
  }
}
