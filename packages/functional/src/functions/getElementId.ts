import { getElement } from './getElement'
import { isFilled } from './isFilled'
import { random } from './random'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Counter generator of ID number of element.
 *
 * Счетчик генератор номера ID элемента.
 */
let idLast = random(100000, 900000)

/**
 * Returns the identifier (ID) of the element or creates it if the element has no ID.
 *
 * Возвращает идентификатор (ID) элемента или создает его, если у элемента нет ID.
 * @param element element from which you obtain an ID/ элемент, с которого получаете ID
 * @param selector selectors for matching/ селекторов для сопоставления
 */
export function getElementId<E extends ElementOrWindow>(
  element?: ElementOrString<E>,
  selector?: string
): string {
  const item = getElement(element)

  if (item) {
    if (!isFilled(item.id)) {
      item.setAttribute('id', `id-${idLast++}`)
    }

    return selector ? `#${item.id}${selector}`.trim() : item.id
  }

  return `id-${idLast++}`
}
