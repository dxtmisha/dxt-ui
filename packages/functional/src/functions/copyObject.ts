/**
 * Создает копию простого объекта.
 *
 * Creates a copy of a simple object.
 * @param value объект для копирования / object for copying
 * @returns возвращает новую копию объекта / returns a new copy of the object
 */
export function copyObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}
