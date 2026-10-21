import { executeFunction } from './executeFunction'
import { forEach } from './forEach'
import { getElement } from './getElement'
import { isFunction } from './isFunction'
import { isNull } from './isNull'
import { isObject } from './isObject'
import { isObjectNotArray } from './isObjectNotArray'
import { isPrototypeKey } from './isPrototypeKey'
import { isString } from './isString'
import { toKebabCase } from './toKebabCase'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Checks if the target object is a CSSStyleDeclaration.
 *
 * Проверяет, является ли целевой объект объектом CSSStyleDeclaration.
 * @param targetData checked object / проверяемый объект
 * @returns true if targetData is CSSStyleDeclaration / true, если targetData является CSSStyleDeclaration
 */
function isStyleDeclaration(targetData: unknown): targetData is CSSStyleDeclaration {
  return isObject(targetData)
    && 'setProperty' in targetData
    && isFunction((targetData as CSSStyleDeclaration).setProperty)
}

/**
 * Sets style properties or CSS custom properties on a CSSStyleDeclaration via setProperty.
 *
 * Устанавливает свойства стиля или переменные CSS в CSSStyleDeclaration через setProperty.
 * @param targetData target CSSStyleDeclaration to modify / целевой CSSStyleDeclaration для изменения
 * @param styles styles object / объект стилей
 */
function setElementItemStyle(
  targetData: CSSStyleDeclaration,
  styles: Record<string, unknown>
): void {
  forEach(styles, (propertyValue, propertyKey) => {
    if (isPrototypeKey(propertyKey)) {
      return
    }

    const computedPropertyValue = executeFunction(propertyValue)
    const normalizedPropertyKey = propertyKey.startsWith('--')
      ? propertyKey
      : toKebabCase(propertyKey)

    if (isNull(computedPropertyValue)) {
      targetData.removeProperty(normalizedPropertyKey)
    } else {
      targetData.setProperty(normalizedPropertyKey, String(computedPropertyValue))
    }
  })
}

/**
 * Sets properties on a target object with prototype pollution protection.
 *
 * Устанавливает свойства в целевой объект с защитой от загрязнения прототипа.
 * @param targetData target object to modify / целевой объект для изменения
 * @param properties properties object / объект свойств
 */
function setElementItemProperty(
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
 * @param element checked element / проверяемый элемент
 * @param index property name, attribute, or style key / имя свойства, атрибута или ключа стилей
 * @param value new value / новое значение
 * @returns modified element / измененный элемент
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

  if (
    isPrototypeKey(index)
    || !item
  ) {
    return item
  }

  const data = Reflect.get(item, index) as unknown

  if (
    isObjectNotArray(data)
    && isObjectNotArray(value)
  ) {
    if (isStyleDeclaration(data)) {
      setElementItemStyle(data, value)
    } else {
      setElementItemProperty(data, value)
    }

    return item
  }

  const newValue = executeFunction(value)

  if (
    index === 'style'
    && isString(newValue)
    && 'style' in item
  ) {
    (item as HTMLElement).style.cssText = newValue
    return item
  }

  if (
    'setAttribute' in item
    && !(index in item)
  ) {
    const attributeName = index.toString()

    if (isNull(newValue)) {
      item.removeAttribute(attributeName)
      return item
    }

    if (typeof newValue === 'boolean') {
      setElementItemBoolean(item as Element, attributeName, newValue)
      return item
    }

    if (typeof newValue === 'number' || isString(newValue)) {
      item.setAttribute(attributeName, newValue.toString())
      return item
    }
  }

  Reflect.set(item, index, newValue)

  return item
}
