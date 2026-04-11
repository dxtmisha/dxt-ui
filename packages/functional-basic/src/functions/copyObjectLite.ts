/**
 * Copies a simple object.
 *
 * Копирует простой объект.
 * @param value object for copying / объект для копирования
 * @param source additional properties for copying / дополнительные свойства для копирования
 * @returns returns a new copy of the object / возвращает новую копию объекта
 */
export function copyObjectLite<T, R = T>(
  value: T,
  source?: any
): R {
  return Object.assign({}, value, source) as R
}
