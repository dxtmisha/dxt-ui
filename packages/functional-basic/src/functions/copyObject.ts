/**
 * Creates a copy of a simple object.
 *
 * Создает копию простого объекта.
 * @param value object for copying / объект для копирования
 * @returns returns a new copy of the object / возвращает новую копию объекта
 */
export function copyObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}
