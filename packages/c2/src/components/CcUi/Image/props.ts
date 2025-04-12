import { type ImagePropsBasic, defaultsImage } from '@dxt-ui/constructor/Image'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['auto', 'contain', 'cover'],
  padding: ['sm', 'md', 'lg', 'xl', 'none']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  adaptive?: boolean
  size?: string | 'auto' | 'contain' | 'cover'
  padding?: string | 'sm' | 'md' | 'lg' | 'xl' | 'none'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export interface ImageProps extends ImagePropsBasic, PropsToken {
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: object = {
  ...defaultsImage,
  ...{
    // :default [!] System label / Системная метка
    padding: 'none'
    // :default [!] System label / Системная метка
  }
}
