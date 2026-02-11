import type { ElementOrString, NormalOrPromise } from '@dxtmisha/functional'

import type { AriaHaspopupPropsInclude, AriaRoleByPropsInclude } from '../../types/ariaTypes'
import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { ScrollbarPropsBasic, ScrollbarPropsInclude } from '../Scrollbar'
import type { TextClosePropsInclude } from '../../types/textTypes'
import type { IconPropsBasic, IconValue } from '../Icon'

export type WindowPropsToken = {
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
  closeButton?: boolean
  closeMobileHide?: boolean
  widthMatch?: boolean
  // :type [!] System label / Системная метка
}

export type WindowPropsBasic<
  Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic
> = ScrollbarPropsInclude<Scrollbar>
  & ImagePropsInclude<Image>
  & AriaRoleByPropsInclude
  & AriaHaspopupPropsInclude
  & TextClosePropsInclude
  & {
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
    'iconClose'?: IconValue<Icon>

    // Event
    'modelOpen'?: boolean
    'onUpdate:open'?: (value: boolean) => void
    'onUpdate:modelOpen'?: (value: boolean) => void

    // Technical
    'inert'?: boolean
    'autoTabIndex'?: boolean
    'closeOnEsc'?: boolean
    'openOnArrowDown'?: boolean
    /**
     * The window will be displayed inside the current parent element/
     * Окно будет отображаться внутри текущего родительского элемента
     */
    'embedded'?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type WindowProps = WindowPropsBasic & WindowPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsWindow = {
  indent: 4,
  ariaHaspopup: 'dialog',
  role: 'dialog',
  inert: true,
  autoTabIndex: true,
  closeOnEsc: true,
  ...{
    // :default [!] System label / Системная метка
    axis: 'y',
    imagePosition: 'top',
    overscroll: true
    // :default [!] System label / Системная метка
  }
}
