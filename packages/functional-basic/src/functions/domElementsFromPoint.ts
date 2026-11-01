import { isDomRuntime } from './isDomRuntime'
import { isFunction } from './isFunction'

import type { ImageCoordinator } from '../types/basicTypes'

/**
 * Returns an array of all elements at the specified coordinates.
 *
 * Возвращает массив всех элементов по указанным координатам.
 * @param coordinator coordinates object / объект координат
 * @returns array of elements / массив элементов
 *
 * @remarks
 * In non-DOM (SSR) environments or when `document.elementsFromPoint` is unsupported,
 * the function returns an empty array `[]`. Coordinates are evaluated relative to the viewport.
 *
 * В среде без DOM (SSR) или при отсутствии поддержки `document.elementsFromPoint`
 * функция возвращает пустой массив `[]`. Координаты вычисляются относительно области просмотра (viewport).
 */
export function domElementsFromPoint(
  coordinator?: ImageCoordinator | null
): Element[] {
  if (
    isDomRuntime()
    && coordinator
    && isFunction(document.elementsFromPoint)
  ) {
    return document.elementsFromPoint(coordinator.x, coordinator.y)
  }

  return []
}
