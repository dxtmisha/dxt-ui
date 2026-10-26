/**
 * Checks if the value is a regular expression (including cross-realm instances).
 *
 * Проверяет, является ли значение регулярным выражением (включая межконтекстные экземпляры).
 * @param value value to check / проверяемое значение
 * @returns true if value is a regular expression / true, если значение является регулярным выражением
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]'
}
