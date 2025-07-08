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
  /**
   * Accepts icon name, image URL, File object or PDF link/
   * Принимает название иконки, ссылку на изображение, объект File или ссылку на PDF файл
   */
  value?: string | any

  /** Image URL/ URL изображения */
  url?: string

  // Adaptive
  /**
   * Adaptive group (e.g. for different resolutions)/
   * Группа адаптивности (например, для разных разрешений)
   */
  adaptiveGroup?: string
  /** Always use adaptivity/ Всегда использовать адаптивность */
  adaptiveAlways?: boolean
  /** Image object width/ Ширина объекта изображения */
  objectWidth?: string | number
  /** Image object height/ Высота объекта изображения */
  objectHeight?: string | number

  // Style
  /**
   * Image coordinates (e.g. for cropping or positioning)/
   * Координаты изображения (например, для обрезки или позиционирования)
   */
  coordinator?: number[] | any
  /** X position/ Позиция по оси X */
  x?: string | number
  /** Y position/ Позиция по оси Y */
  y?: string | number
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
