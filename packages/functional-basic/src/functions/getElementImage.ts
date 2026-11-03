import { createElement } from './createElement'
import { isString } from './isString'

/**
 * Callback function for image events /
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
 *
 * @remarks
 * If `image` is a string, this function creates a new in-memory `HTMLImageElement` via `createElement`.
 * The `onload` and `onerror` event listeners are attached before assigning the `src` attribute.
 * If `image` is already an `HTMLImageElement`, it is returned directly without modifying its existing listeners.
 * If `image` is null, undefined, or an invalid non-element value, the function safely returns `undefined`.
 *
 * When running in a server-side (SSR / non-DOM) environment, this function always returns `undefined` for string sources.
 *
 * The created element is not automatically attached to the DOM tree. If using dynamic Blob URLs (`URL.createObjectURL`),
 * remember to revoke them in `onload`/`onerror` to prevent memory leaks.
 *
 * Если `image` является строкой, функция создаёт новый элемент `HTMLImageElement` в памяти через `createElement`.
 * Обработчики событий `onload` и `onerror` назначаются до присвоения атрибута `src`.
 * Если `image` уже является экземпляром `HTMLImageElement`, он возвращается напрямую без изменения существующих обработчиков.
 * Если `image` равен null, undefined или является недопустимым не-элементом, функция безопасно возвращает `undefined`.
 *
 * При выполнении на сервере (в среде SSR / non-DOM) функция всегда возвращает `undefined` для строковых источников.
 *
 * Созданный элемент не добавляется в DOM-дерево автоматически. При использовании динамических Blob URL (`URL.createObjectURL`)
 * не забудьте освободить их в `onload`/`onerror` во избежание утечек памяти.
 */
export function getElementImage(
  image?: HTMLImageElement | string | null,
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

  if (
    typeof HTMLImageElement !== 'undefined'
    && image instanceof HTMLImageElement
  ) {
    return image
  }

  return undefined
}
