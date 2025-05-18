import { type ImagePropsBasic, defaultsImage } from '@dxt-ui/constructor/Image'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['auto', 'contain', 'cover']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  adaptive?: boolean
  size?: 'auto' | 'contain' | 'cover'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ImageProps extends ImagePropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsImage,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
