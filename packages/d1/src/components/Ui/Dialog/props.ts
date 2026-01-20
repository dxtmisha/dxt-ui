import { type DialogPropsBasic, defaultsDialog } from '@dxtmisha/constructor/Dialog'

import type { WindowProps } from '../Window'
import type { BarsProps } from '../Bars'
import type { IconProps } from '../Icon'
import type { ImageProps } from '../Image'
import type { ButtonProps } from '../Button'
import type { ActionsProps } from '../Actions'

export const propsValues = {
  // :values [!] System label / Системная метка
  imagePosition: ['top', 'left'],
  padding: ['sm', 'md', 'lg'],
  width: ['sm', 'md', 'lg', 'auto']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  success?: boolean
  error?: boolean
  imagePosition?: 'top' | 'left'
  padding?: 'sm' | 'md' | 'lg'
  paddingByIndent?: boolean
  width?: 'sm' | 'md' | 'lg' | 'auto'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type DialogProps = DialogPropsBasic<WindowProps, BarsProps, IconProps, ImageProps, ButtonProps, ActionsProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsDialog,
  buttonClose: {
    outline: true
  },
  iconSuccess: 'check_circle',
  iconError: 'error',
  iconAttrs: {
    size: '3xl'
  },
  ...{
    // :default [!] System label / Системная метка
    imagePosition: 'top',
    paddingByIndent: true,
    width: 'md'
    // :default [!] System label / Системная метка
  }
}
