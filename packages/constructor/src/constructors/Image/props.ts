interface ImagePropsToken {
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  adaptive?: boolean
  size?: string | 'auto' | 'contain' | 'cover'
  // :type [!] System label / Системная метка
}

export interface ImagePropsBasic {
  // Value
  value?: string | any
  coordinator?: number[] | any
  x?: string | number
  y?: string | number

  // Adaptive
  adaptiveGroup?: string
  adaptiveAlways?: boolean
  objectWidth?: string | number
  objectHeight?: string | number

  // Style
  url?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ImageProps extends ImagePropsBasic, ImagePropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsImage = {
  adaptiveGroup: 'basic',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
