import { getElement } from './getElement'
import { isPrototypeKey } from './isPrototypeKey'
import { setElementItemAttribute } from './setElementItemAttribute'
import { setElementItemProperty } from './setElementItemProperty'
import { setElementItemStyle } from './setElementItemStyle'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Modifies the value of an element identified by its key.
 *
 * Изменяет значение элемента, определенного ключом.
 * @template E element or Window type / тип элемента или Window
 * @template K property key type / тип ключа свойства
 * @template V value type / тип значения
 * @param element target element or selector / целевой элемент или селектор
 * @param index property name, attribute, or style key / имя свойства, атрибута или ключа стилей
 * @param value new value / новое значение
 * @returns true if the item was modified, false otherwise / true, если элемент был изменен, иначе false
 */
export function setElementItem<
  E extends ElementOrWindow = HTMLElement,
  K extends keyof E = keyof E,
  V extends E[K] = E[K]
>(
  element?: ElementOrString<E> | null,
  index?: K | string,
  value?: V | Record<string, V> | unknown
): boolean {
  if (
    !index
    || isPrototypeKey(index)
  ) {
    return false
  }

  const item = getElement(element)

  if (!item) {
    return false
  }

  if (
    index === 'style'
    && setElementItemStyle(item, value)
  ) {
    return true
  }

  if (
    !(index in item)
    && setElementItemAttribute(item, index.toString(), value)
  ) {
    return true
  }

  return setElementItemProperty(item, index, value)
}
