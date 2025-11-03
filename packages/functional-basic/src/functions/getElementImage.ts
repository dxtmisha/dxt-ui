import { createElement } from './createElement'
import { isString } from './isString'

/**
 * Get image element from HTMLImageElement or string source.
 *
 * Получить элемент изображения из HTMLImageElement или строкового источника.
 * @param image image element or string source/ элемент изображения или строковый источник
 */
export function getElementImage(
  image: HTMLImageElement | string
): HTMLImageElement | undefined {
  if (isString(image)) {
    return createElement<HTMLImageElement>(
      undefined,
      'img',
      { src: image }
    )
  }

  return image
}
