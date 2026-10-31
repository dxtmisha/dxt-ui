import { executeFunction } from './executeFunction'
import { getElement } from './getElement'
import { isNull } from './isNull'
import { isString } from './isString'
import { toKebabCase } from './toKebabCase'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Sets or removes a boolean attribute on an element, formatting ARIA attributes as "true"/"false".
 *
 * Устанавливает или удаляет логический атрибут на элементе с форматированием ARIA-атрибутов в "true"/"false".
 * @param targetElement target element to modify / целевой элемент для изменения
 * @param attributeName attribute name / имя атрибута
 * @param value boolean value / логическое значение
 */
function setElementItemBoolean(
  targetElement: Element,
  attributeName: string,
  value: boolean
): void {
  if (attributeName.startsWith('aria-')) {
    targetElement.setAttribute(attributeName, value ? 'true' : 'false')
  } else if (value) {
    targetElement.setAttribute(attributeName, '')
  } else {
    targetElement.removeAttribute(attributeName)
  }
}

/**
 * Sets or removes an HTML or ARIA attribute on an element.
 *
 * Устанавливает или удаляет HTML- или ARIA-атрибут на элементе.
 * @param element target element or selector / целевой элемент или селектор
 * @param attribute attribute name / имя атрибута
 * @param value attribute value or factory function / значение атрибута или функция-фабрика
 * @returns true if the attribute was processed, false otherwise / true, если атрибут был обработан, иначе false
 */
export function setElementItemAttribute<
  E extends ElementOrWindow = HTMLElement
>(
  element?: ElementOrString<E> | null,
  attribute?: string,
  value?: unknown
): boolean {
  const targetElement = getElement(element)
  const attributeName = toKebabCase(attribute)

  if (
    !targetElement
    || !('setAttribute' in targetElement)
    || !attributeName
  ) {
    return false
  }

  const computedValue = executeFunction(value)

  if (isNull(computedValue)) {
    targetElement.removeAttribute(attributeName)
    return true
  }

  if (typeof computedValue === 'boolean') {
    setElementItemBoolean(targetElement, attributeName, computedValue)
    return true
  }

  if (
    isString(computedValue)
    || (
      typeof computedValue === 'number'
      && Number.isFinite(computedValue)
    )
    || typeof computedValue === 'bigint'
  ) {
    targetElement.setAttribute(attributeName, computedValue.toString())
    return true
  }

  return false
}
