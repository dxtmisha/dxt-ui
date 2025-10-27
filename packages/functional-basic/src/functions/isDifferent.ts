import { forEach } from './forEach'

import { type ObjectItem } from '../types/basicTypes'

/**
 * Checks if the values of two objects are different.
 *
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values/ текущие значения
 * @param old old values/ старые значения
 */
export function isDifferent<T>(
  value: ObjectItem<T>,
  old: ObjectItem<T>
): boolean {
  let different = Object.keys(value).length !== Object.keys(old).length

  if (!different) {
    forEach(value, (item, key) => {
      if (item !== old?.[key]) {
        different = true
      }
    })
  }

  return different
}
