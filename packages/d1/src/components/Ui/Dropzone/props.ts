import { type DropzonePropsBasic, defaultsDropzone } from '@dxtmisha/constructor/Dropzone'

import type { IconProps } from '../Icon'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type DropzoneProps = DropzonePropsBasic<IconProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsDropzone,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
