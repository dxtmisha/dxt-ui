import { isObject } from './isObject'
import { isString } from './isString'

/**
 * Returns the source string from an HTMLImageElement, object with src, or string source.
 *
 * Возвращает строку источника из HTMLImageElement, объекта с src или строкового источника.
 * @param image image element, object with src, or string source / элемент изображения, объект с src или строковый источник
 * @returns image source string / строка источника изображения
 */
export function getImageSrc(
  image?: unknown
): string {
  if (isString(image)) {
    return image
  }

  if (
    isObject(image)
    && 'src' in image
    && isString(image.src)
  ) {
    return image.src
  }

  return ''
}
