import { executeFunction } from './executeFunction'
import { forEach } from './forEach'
import { getElement } from './getElement'
import { isNull } from './isNull'
import { isObjectNotArray } from './isObjectNotArray'
import { isPrototypeKey } from './isPrototypeKey'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Sets properties on a target object with prototype pollution protection.
 *
 * Устанавливает свойства в целевой объект с защитой от загрязнения прототипа.
 * @param targetData target object to modify / целевой объект для изменения
 * @param properties properties object / объект свойств
 */
function setElementItemPropertyMerge(
  targetData: Record<string, unknown>,
  properties: Record<string, unknown>
): void {
  forEach(properties, (propertyValue, propertyKey) => {
    if (isPrototypeKey(propertyKey)) {
      return
    }

    targetData[propertyKey] = executeFunction(propertyValue)
  })
}

/**
 * Sets a property or merges nested object properties on an element with prototype pollution protection.
 *
 * Устанавливает свойство или объединяет свойства вложенного объекта на элементе с защитой от загрязнения прототипа.
 * @template E element or Window type / тип элемента или Window
 * @param element target element or selector / целевой элемент или селектор
 * @param index property name or symbol / имя свойства или символ
 * @param value property value or factory function / значение свойства или функция-фабрика
 * @returns true if property was set, false otherwise / true, если свойство было установлено, иначе false
 */
export function setElementItemProperty<
  E extends ElementOrWindow = HTMLElement
>(
  element?: ElementOrString<E> | null,
  index?: PropertyKey,
  value?: unknown
): boolean {
  if (
    isNull(index)
    || isPrototypeKey(index)
  ) {
    return false
  }

  const targetElement = getElement(element)

  if (!targetElement) {
    return false
  }

  const data = Reflect.get(targetElement, index) as unknown
  const computedValue = executeFunction(value)

  if (
    isObjectNotArray(data)
    && isObjectNotArray(computedValue)
  ) {
    setElementItemPropertyMerge(data, computedValue)
    return true
  }

  return Reflect.set(targetElement, index, computedValue)
}
