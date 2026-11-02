/**
 * Copies a simple object.
 *
 * Копирует простой объект.
 * @template T type of the original object / тип исходного объекта
 * @template R return type of the copied object / тип возвращаемого скопированного объекта
 * @param value object for copying / объект для копирования
 * @param source additional properties for copying / дополнительные свойства для копирования
 * @returns returns a new copy of the object / возвращает новую копию объекта
 */
export function copyObjectLite<
  T = Record<PropertyKey, unknown>,
  R = T
>(
  value?: T | null,
  source?: Record<PropertyKey, unknown> | null
): R {
  return Object.assign({}, value, source) as R
}
