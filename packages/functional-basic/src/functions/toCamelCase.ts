/**
 * Converts a string to camelCase.
 *
 * Преобразует строку в camelCase.
 * @param value input value / входное значение
 * @returns camel case string / строка в camel case
 */
export function toCamelCase(value?: string): string {
  if (!value) {
    return ''
  }

  return value
    .trim()
    .replace(/[^\w-. ]+/g, '')
    .replace(/[ ._]+/g, '-')
    .replace(/(?<=[A-Z])([A-Z])/g, char => char.toLowerCase())
    .replace(/-+([a-zA-Z0-9])/g, (_, character: string) => character.toUpperCase())
    .replace(/^([A-Z])/, char => char.toLowerCase())
    .replace(/-+$/, '')
}
