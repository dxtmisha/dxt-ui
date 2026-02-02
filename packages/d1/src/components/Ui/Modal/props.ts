import { type ModalPropsBasic, defaultsModal } from '@dxtmisha/constructor/Modal'
import type { WindowProps } from '../Window'
import type { BarsProps } from '../Bars'
import type { ActionsProps } from '../Actions'
import type { ImageProps } from '../Image'

export const propsValues = {
  // :values [!] System label / Системная метка
  imagePosition: ['top', 'left'],
  width: ['sm', 'md', 'lg', 'xl', 'auto']
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  imagePosition?: 'top' | 'left'
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ModalProps = ModalPropsBasic<WindowProps, BarsProps, ActionsProps, ImageProps>
  & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsModal,
  ...{
    // :default [!] System label / Системная метка
    imagePosition: 'top',
    width: 'md'
    // :default [!] System label / Системная метка
  }
}
