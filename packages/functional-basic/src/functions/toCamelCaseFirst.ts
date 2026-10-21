import { toPascalCase } from './toPascalCase'

/**
 * Converts a string to PascalCase (CamelCase with first letter capitalized).
 *
 * Преобразует строку в формат PascalCase (CamelCase с первой заглавной буквой).
 * @param value input value / входное значение
 * @returns PascalCase string / строка в формате PascalCase
 */
export function toCamelCaseFirst(value?: string): string {
  return toPascalCase(value)
}
