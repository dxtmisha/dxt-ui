import { type WindowPropsBasic, defaultsWindow } from '@dxt-ui/constructor/Window'
import type { ScrollbarProps } from '../Scrollbar'
import type { ImageProps } from '../Image'

export const propsValues = {
  // :values [!] System label / Системная метка
  width: ['auto', 'max', 'sm', 'md', 'lg'],
  height: ['auto', 'max', 'sm', 'md', 'lg'],
  axis: ['x', 'y', 'on'],
  imagePosition: ['top', 'left'],
  alignment: ['center', 'top', 'topRight', 'topLeft', 'topFull', 'right', 'rightFull', 'bottom', 'bottomRight', 'bottomLeft', 'bottomFull', 'left', 'leftFull'],
  origin: ['center', 'top', 'right', 'bottom', 'left', 'topToBottom', 'rightToLeft', 'bottomToTop', 'leftToRight'],
  adaptive: ['menu', 'menuWindow', 'modal', 'modalDynamic', 'actionSheetRight', 'actionSheetBottom', 'static', 'actionSheet', 'actionSheetToModal', 'autoStaticSm', 'autoStaticMd', 'autoStaticLg', 'autoStaticXl', 'autoStatic2xl'],
  imageSize: ['sm', 'md', 'lg', 'quarter', 'half']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  width?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom'
  height?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom'
  hide?: boolean
  axis?: 'x' | 'y' | 'on'
  imagePosition?: 'top' | 'left'
  dense?: boolean
  alignment?: 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull'
  origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight'
  adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static' | 'actionSheet' | 'actionSheetToModal' | 'autoStaticSm' | 'autoStaticMd' | 'autoStaticLg' | 'autoStaticXl' | 'autoStatic2xl'
  fullscreen?: boolean
  overscroll?: boolean
  closeMobileHide?: boolean
  widthMatch?: boolean
  imageSize?: 'sm' | 'md' | 'lg' | 'quarter' | 'half'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface WindowProps extends WindowPropsBasic<ScrollbarProps, ImageProps>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsWindow,
  iconClose: 'close',
  ...{
    // :default [!] System label / Системная метка
    width: 'md',
    axis: 'y',
    imagePosition: 'top',
    overscroll: true,
    imageSize: 'md'
    // :default [!] System label / Системная метка
  }
}
