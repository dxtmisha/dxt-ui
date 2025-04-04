import { ImagePropsBasic, defaultsImage } from '@dxt-ui/constructor/constructor/Image/index'

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
  size?: string | 'auto' | 'contain' | 'cover'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export interface ImageProps extends PropsToken, ImagePropsBasic {

}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: object = {
  ...defaultsImage,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
