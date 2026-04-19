import { toCamelCase } from './toCamelCase'

/**
 * Convert a String to Camel Case (+ first letter).
 *
 * Преобразование строки в Camel Case (+ первая буква).
 * @param value input value/ входное значение
 * @returns camel case string with first letter uppercase / строка в camel case с первой заглавной буквой
 */
export function toCamelCaseFirst(value: string): string {
  return toCamelCase(value)
    .replace(/^([a-z])/, char => `${char.toUpperCase()}`)
}
