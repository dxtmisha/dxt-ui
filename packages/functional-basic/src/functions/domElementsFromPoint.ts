import { isDomRuntime } from './isDomRuntime'

import type { ImageCoordinator } from '../types/basicTypes'

/**
 * Returns an array of all elements at the specified coordinates.
 *
 * Возвращает массив всех элементов по указанным координатам.
 * @param coordinator coordinates object / объект координат
 * @returns array of elements / массив элементов
 */
export function domElementsFromPoint(
  coordinator: ImageCoordinator
): Element[] {
  if (
    isDomRuntime()
    && 'elementsFromPoint' in document
  ) {
    return document.elementsFromPoint(coordinator.x, coordinator.y)
  }

  return []
}
