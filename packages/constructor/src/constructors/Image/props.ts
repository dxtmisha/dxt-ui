import type { ImagePicture } from './basicTypes'

interface ImagePropsToken {
  // :type [!] System label / Системная метка
  turn?: boolean
  disabled?: boolean
  hide?: boolean
  adaptive?: boolean
  size?: 'auto' | 'contain' | 'cover'
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
  fetchPriority?: HTMLImageElement['fetchPriority']
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
  preloadOffset: '1024px',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
