import { executeFunction } from './executeFunction'
import { forEach } from './forEach'
import { getElement } from './getElement'
import { getElementItem } from './getElementItem'
import { isNull } from './isNull'
import { isObject } from './isObject'
import { isString } from './isString'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Sets a property on a nested target object, supporting CSS custom properties if applicable.
 *
 * Устанавливает свойство во вложенный целевой объект с поддержкой пользовательских свойств CSS, если применимо.
 * @param targetData target object to modify / целевой объект для изменения
 * @param propertyKey property name or CSS variable / имя свойства или переменная CSS
 * @param propertyValue property value to set / устанавливаемое значение свойства
 */
function setElementItemProperty(
  targetData: Record<string, unknown>,
  propertyKey: string,
  propertyValue: unknown
): void {
  const computedPropertyValue = executeFunction(propertyValue)

  if (
    propertyKey.startsWith('--')
    && typeof targetData.setProperty === 'function'
  ) {
    (targetData as unknown as CSSStyleDeclaration).setProperty(
      propertyKey,
      String(computedPropertyValue ?? '')
    )
  } else {
    targetData[propertyKey] = computedPropertyValue
  }
}

/**
 * Sets or removes a boolean attribute on an element, formatting ARIA attributes as "true"/"false".
 *
 * Устанавливает или удаляет логический атрибут на элементе с форматированием ARIA-атрибутов в "true"/"false".
 * @param item target element to modify / целевой элемент для изменения
 * @param attributeName attribute name / имя атрибута
 * @param value boolean value / логическое значение
 */
function setElementItemBoolean(
  item: Element,
  attributeName: string,
  value: boolean
): void {
  if (attributeName.startsWith('aria-')) {
    item.setAttribute(attributeName, value ? 'true' : 'false')
  } else if (value) {
    item.setAttribute(attributeName, '')
  } else {
    item.removeAttribute(attributeName)
  }
}

/**
 * Modifies the value of an element identified by its key.
 *
 * Изменяет значение элемента, определенного ключом.
 * @param element checked element/ проверяемый элемент
 * @param index index at which we retrieve values/ индекс, по которому получаем значения
 * @param value new value/ новое значение
 * @returns modified element/ измененный элемент
 */
export function setElementItem<
  E extends ElementOrWindow,
  K extends keyof E = keyof E,
  V extends E[K] = E[K]
>(
  element: ElementOrString<E>,
  index: K | string,
  value: V | Record<string, V> | unknown
): E | undefined {
  const item = getElement(element)

  if (item) {
    const data = getElementItem(item, index)

    if (
      isObject(data)
      && isObject(value)
    ) {
      const targetData = data as Record<string, unknown>

      forEach(value as Record<string, unknown>, (propertyValue, propertyKey) => {
        setElementItemProperty(targetData, propertyKey, propertyValue)
      })
    } else {
      const newValue = executeFunction(value)

      if (index === 'style' && isString(newValue) && 'style' in item) {
        (item as HTMLElement).style.cssText = newValue
      } else if ('setAttribute' in item && !(index in item)) {
        const attributeName = index.toString()

        if (isNull(newValue)) {
          item.removeAttribute(attributeName)
        } else if (typeof newValue === 'boolean') {
          setElementItemBoolean(item as Element, attributeName, newValue)
        } else if (typeof newValue === 'number' || isString(newValue)) {
          item.setAttribute(attributeName, newValue.toString())
        } else {
          Reflect.set(item, index, newValue)
        }
      } else {
        Reflect.set(item, index, newValue)
      }
    }
  }

  return item
}
