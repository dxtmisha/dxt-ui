import { type Undefined } from '../types/basicTypes'

/**
 * Is the variable equal to null or undefined.
 *
 * Является ли переменная равной null или undefined.
 * @param value input value/ входное значение
 * @returns true if null or undefined / true, если null или undefined
 */
export function isNull<T>(value: T): value is Extract<T, Undefined> {
  return value === null || value === undefined
}
