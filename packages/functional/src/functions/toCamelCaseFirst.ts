import { toCamelCase } from './toCamelCase'

/**
 * Convert a String to Camel Case (+ first letter).
 *
 * Преобразование строки в Camel Case (+ первая буква).
 * @param value input value/ входное значение
 */
export function toCamelCaseFirst(value: string): string {
  return toCamelCase(value)
    .replace(/^([a-z])/, char => `${char.toUpperCase()}`)
}
