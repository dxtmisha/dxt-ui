import { type ModalPropsBasic, defaultsModal } from '@dxtmisha/constructor/Modal'
import type { WindowProps } from '../Window'
import type { BarsProps } from '../Bars'
import type { ActionsProps } from '../Actions'
import type { ImageProps } from '../Image'

export const propsValues = {
  // :values [!] System label / Системная метка
  imagePosition: ['top', 'left'],
  padding: ['sm', 'md', 'lg'],
  width: ['sm', 'md', 'lg', 'auto']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  imagePosition?: 'top' | 'left'
  padding?: 'sm' | 'md' | 'lg'
  paddingByIndent?: boolean
  width?: 'sm' | 'md' | 'lg' | 'auto'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ModalProps extends ModalPropsBasic<WindowProps, BarsProps, ActionsProps, ImageProps>,
  PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsModal,
  ...{
    // :default [!] System label / Системная метка
    imagePosition: 'top',
    paddingByIndent: true,
    width: 'md'
    // :default [!] System label / Системная метка
  }
}
