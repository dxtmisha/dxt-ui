import type { ElementOrString, NormalOrPromise } from '@dxtmisha/functional'

import type { AriaByPropsInclude, AriaHaspopupPropsInclude } from '../../types/ariaTypes'
import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { ScrollbarPropsBasic, ScrollbarPropsInclude } from '../Scrollbar'

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
  adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static'
  fullscreen?: boolean
  overscroll?: boolean
  closeMobileHide?: boolean
  widthMatch?: boolean
  // :type [!] System label / Системная метка
}

export interface WindowPropsBasic<
  Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic
> extends ScrollbarPropsInclude<Scrollbar>,
  ImagePropsInclude<Image>,
  AriaByPropsInclude,
  AriaHaspopupPropsInclude {
  // Status
  'open'?: boolean
  'disabled'?: boolean

  // Hook
  'preparation'?(): NormalOrPromise<void>

  'beforeOpening'?(): NormalOrPromise<boolean>

  'opening'?(): NormalOrPromise<boolean>

  'beforeClosing'?(): NormalOrPromise<boolean>

  'closing'?(): NormalOrPromise<boolean>

  // Style
  'contextmenu'?: boolean
  'staticMode'?: boolean
  'overElement'?: ElementOrString<HTMLElement>

  'autoClose'?: boolean
  'persistent'?: boolean

  'flash'?: boolean
  'inDom'?: boolean

  'indent'?: number
  'divider'?: boolean

  'closeButton'?: boolean
  'iconClose'?: string

  // Event
  'modelOpen'?: boolean
  'onUpdate:open'?: (value: boolean) => void
  'onUpdate:modelOpen'?: (value: boolean) => void
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
  ariaHaspopup: 'dialog',
  ...{
    // :default [!] System label / Системная метка
    axis: 'y',
    imagePosition: 'top',
    overscroll: true
    // :default [!] System label / Системная метка
  }
}
