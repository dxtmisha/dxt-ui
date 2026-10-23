import { isArray } from './isArray'
import { isObject } from './isObject'

import { type ObjectItem } from '../types/basicTypes'

/**
 * Checks if the value is an object or not an array.
 *
 * Проверяет, является ли значение объектом и не является массивом.
 * @param value input value / входное значение
 * @returns true if object and not array / true, если объект и не массив
 */
export function isObjectNotArray<T>(value: T): value is Exclude<Extract<T, ObjectItem>, unknown[] | undefined | null> {
  return isObject(value) && !isArray(value)
}
