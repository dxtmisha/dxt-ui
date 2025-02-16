/**
 * Convert a String to Camel Case (upper).
 *
 * Преобразование строки в Camel Case (upper).
 * @param value input value/ входное значение
 */
export function toCamelCase(value: string): string {
  return value
    .toString()
    .trim()
    .replace(/[^\w- ]+/g, '')
    .replace(/ +/g, '-')
    .replace(/(?<=[A-Z])([A-Z])/g, char => `${char.toLowerCase()}`)
    .replace(/-+([a-zA-Z0-9])/g, (...char: string[]) => `${char[1].toUpperCase()}`)
    .replace(/^([A-Z])/, char => `${char.toLowerCase()}`)
}
