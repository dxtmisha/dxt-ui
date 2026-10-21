import { toCamelCase } from './toCamelCase'

/**
 * Converts a string to PascalCase.
 *
 * Преобразует строку в формат PascalCase.
 * @param value input value / входное значение
 * @returns PascalCase string / строка в формате PascalCase
 */
export function toPascalCase(value?: string): string {
  const result = toCamelCase(value)

  if (result.length === 0) {
    return ''
  }

  return result.charAt(0).toUpperCase() + result.slice(1)
}
