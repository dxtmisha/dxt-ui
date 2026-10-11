import type { CSSProperties } from 'react'
import {
  forEach,
  isArray,
  isNull,
  isObjectNotArray,
  toCamelCase,
  type Undefined
} from '@dxtmisha/functional-basic'

import type { ConstrStyles } from '../types/constructorTypes'

/**
 * Converts a style value (object or array of objects) into a flat object for the React `style` attribute.
 * Arrays are merged in order, empty values are skipped, kebab-case keys are converted to camelCase,
 * and CSS custom properties (`--name`) are kept as is.
 *
 * Преобразует значение стилей (объект или массив объектов) в плоский объект для атрибута React `style`.
 * Массивы объединяются по порядку, пустые значения пропускаются, ключи kebab-case преобразуются в camelCase,
 * а CSS-переменные (`--name`) сохраняются без изменений.
 * @param styles style value for conversion / значение стилей для преобразования
 * @returns flat object of styles / плоский объект стилей
 */
export function toCssProperties(styles?: ConstrStyles | Undefined): CSSProperties {
  const data: Record<string, string | number> = {}

  if (isArray(styles)) {
    styles.forEach(item => Object.assign(data, toCssProperties(item)))
  } else if (isObjectNotArray(styles)) {
    forEach(styles, (value, name: string) => {
      if (!isNull(value)) {
        data[name.startsWith('--') ? name : toCamelCase(name)] = value
      }
    })
  }

  return data as CSSProperties
}
