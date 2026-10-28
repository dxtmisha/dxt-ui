/**
 * Checks if the value matches the URL prefix pattern.
 *
 * Проверяет, соответствует ли значение шаблону префикса URL.
 * @param value checked value / проверяемое значение
 * @param prefix URL prefix pattern / шаблон префикса URL
 * @returns true if the value matches the prefix / true, если значение совпадает с префиксом
 */
export function isUrlPrefix(value: string, prefix?: RegExp): boolean {
  return Boolean(prefix?.test(value))
}
