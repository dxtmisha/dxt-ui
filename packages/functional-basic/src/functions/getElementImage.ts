import { createElement } from './createElement'
import { isString } from './isString'

/**
 * Callback function for image events.
 *
 * Функция обратного вызова для событий изображения.
 * @param image image element / элемент изображения
 * @param event DOM event or error description / событие DOM или описание ошибки
 */
export type GetElementImageCallback = (
  image: HTMLImageElement,
  event?: Event | string
) => void

/**
 * Get image element from HTMLImageElement or string source.
 *
 * Получить элемент изображения из HTMLImageElement или строкового источника.
 * @param image image element or string source / элемент изображения или строковый источник
 * @param onload load callback / колбэк успешной загрузки
 * @param onerror error callback / колбэк ошибки загрузки
 * @returns HTMLImageElement or undefined / HTMLImageElement или undefined
 */
export function getElementImage(
  image?: HTMLImageElement | string,
  onload?: GetElementImageCallback,
  onerror?: GetElementImageCallback
): HTMLImageElement | undefined {
  if (isString(image)) {
    const element = createElement<HTMLImageElement>(undefined, 'img')

    if (element) {
      if (onload) {
        element.onload = (event: Event) => onload(element, event)
      }

      if (onerror) {
        element.onerror = (event: Event | string) => onerror(element, event)
      }

      element.src = image
    }

    return element
  }

  return image
}
