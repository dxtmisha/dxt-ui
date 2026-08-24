import { isString } from './isString'

/**
 * Returns the source string from an HTMLImageElement or string source.
 *
 * Возвращает строку источника из HTMLImageElement или строкового источника.
 * @param image image element or string source / элемент изображения или строковый источник
 * @returns image source string / строка источника изображения
 */
export function getImageSrc(
  image?: HTMLImageElement | string
): string {
  if (isString(image)) {
    return image
  }

  if (image && 'src' in image) {
    return image.src ?? ''
  }

  return ''
}
