import { type ObjectItem } from '../types/basicTypes'

/**
 * Checks if the values of two objects are different.
 *
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values/ текущие значения
 * @param old old values/ старые значения
 * @returns true if different / true, если отличаются
 */
export function isDifferent<T>(
  value: ObjectItem<T>,
  old: ObjectItem<T>
): boolean {
  let different = Object.keys(value).length !== Object.keys(old).length

  if (!different) {
    for (const key in value) {
      if (value[key] !== old?.[key]) {
        different = true
        break
      }
    }
  }

  return different
}
