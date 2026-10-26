import { type ObjectItem } from '../types/basicTypes'

/**
 * Checks if a value is an object.
 *
 * Проверяет, является ли значение объектом.
 * @param value input value / входное значение
 * @returns true if object / true, если объект
 */
export function isObject<T = unknown>(value: unknown): value is ObjectItem<T> {
  return Boolean(value && typeof value === 'object')
}
