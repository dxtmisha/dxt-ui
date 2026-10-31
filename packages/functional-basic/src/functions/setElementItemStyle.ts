import { executeFunction } from './executeFunction'
import { forOwn } from './forOwn'
import { getElement } from './getElement'
import { isNull } from './isNull'
import { isObjectNotArray } from './isObjectNotArray'
import { isString } from './isString'
import { toKebabCase } from './toKebabCase'

import {
  type ElementOrString,
  type ElementOrWindow
} from '../types/basicTypes'

/**
 * Regular expression for detecting the !important CSS priority suffix /
 * Регулярное выражение для определения суффикса приоритета CSS !important
 */
const REGEXP_IMPORTANT = /\s*!important\s*$/i

/**
 * Normalizes a style property key, preserving CSS custom properties (--variables) and converting standard keys to kebab-case.
 *
 * Нормализует ключ свойства стиля, сохраняя CSS-переменные (--variables) и преобразуя обычные ключи в kebab-case.
 * @param propertyKey style property key / ключ свойства стиля
 * @returns normalized style property key / нормализованный ключ свойства стиля
 */
function normalizeStylePropertyKey(propertyKey: string): string {
  return propertyKey.startsWith('--')
    ? propertyKey
    : toKebabCase(propertyKey)
}

/**
 * Normalizes a style property value, extracting the !important priority flag if present.
 *
 * Нормализует значение свойства стиля, извлекая флаг приоритета !important при его наличии.
 * @param propertyValue style property value / значение свойства стиля
 * @returns tuple of clean value and optional priority / кортеж из чистого значения и опционального приоритета
 */
function normalizeStylePropertyValue(
  propertyValue: unknown
): [string, string | undefined] {
  const rawValue = String(propertyValue)

  if (REGEXP_IMPORTANT.test(rawValue)) {
    return [rawValue.replace(REGEXP_IMPORTANT, ''), 'important']
  }

  return [rawValue, undefined]
}

/**
 * Sets style properties, CSS custom properties, or cssText on an element.
 *
 * Устанавливает свойства стиля, переменные CSS или cssText на элементе.
 * @param element target element or selector / целевой элемент или селектор
 * @param styles style string, styles object, or factory function / строка стилей, объект стилей или функция-фабрика
 * @returns true if styles were applied, false otherwise / true, если стили были применены, иначе false
 */
export function setElementItemStyle<
  E extends ElementOrWindow = HTMLElement
>(
  element?: ElementOrString<E>,
  styles?: unknown
): boolean {
  const targetData = getElement(element)?.style

  if (!targetData) {
    return false
  }

  const computedStyles = executeFunction(styles)

  if (isString(computedStyles)) {
    targetData.cssText = computedStyles
    return true
  }

  if (isObjectNotArray(computedStyles)) {
    forOwn(computedStyles, (propertyValue, propertyKey) => {
      const computedPropertyValue = executeFunction(propertyValue)
      const normalizedPropertyKey = normalizeStylePropertyKey(propertyKey)

      if (isNull(computedPropertyValue)) {
        targetData.removeProperty(normalizedPropertyKey)
      } else {
        targetData.setProperty(
          normalizedPropertyKey,
          ...normalizeStylePropertyValue(computedPropertyValue)
        )
      }
    })

    return true
  }

  return false
}
