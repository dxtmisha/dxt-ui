import type { ImageAttrs, ImageCoordinatorItem, ImagePicture, ImageUint8ArrayType } from './basicTypes'

/** Image design token properties / Свойства дизайн-токенов изображения */
export type ImagePropsToken = {
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  adaptive?: boolean
  static?: boolean
  size?: 'auto' | 'contain' | 'cover'
  // :type [!] System label / Системная метка
}

/** Image source, layout and loading properties / Свойства источника, размещения и загрузки изображения */
export type ImagePropsBasic = {
  // Value
  /**
   * Icon name, image or PDF URL, File, binary buffer, or null to clear; image:photo.png marks an explicit image path /
   * Название иконки, URL изображения или PDF, File, бинарный буфер либо null для очистки; image:photo.png явно задаёт путь изображения
   */
  value?: string | File | ImageUint8ArrayType | null

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
  coordinator?: ImageCoordinatorItem
  /** X position/ Позиция по оси X */
  x?: string | number
  /** Y position/ Позиция по оси Y */
  y?: string | number

  /**
   * Use <img> tag instead of background image/
   * Использовать тег <img> вместо фонового изображения
   */
  tagImg?: boolean
  /**
   * Image source set for different resolutions/
   * Набор источников изображения для разных разрешений
   */
  srcset?: string | Record<string, string>
  /**
   * Picture sources for different resolutions using <picture> tag/
   * Источники для разных разрешений с использованием тега <picture>
   */
  picture?: ImagePicture
  /** Alt text/ Текст alt */
  alt?: string
  /** Lazy loading/ Ленивя загрузка */
  lazy?: boolean
  /** Preload offset/ Смещение для предзагрузки */
  preloadOffset?: string
  /** Image fetch priority (low, high, auto)/ Приоритет загрузки изображения (low, high, auto) */
  fetchPriority?: ImageAttrs['fetchPriority']
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ImageProps = ImagePropsBasic & ImagePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsImage = {
  adaptiveGroup: 'basic',
  preloadOffset: '1024px',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
