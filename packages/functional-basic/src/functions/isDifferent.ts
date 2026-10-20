import { type ObjectItem } from '../types/basicTypes'
import { hasKey } from './hasKey'

/**
 * Checks if the values of two objects are different.
 *
 * Проверяет, различаются ли значения двух объектов.
 * @param value current values / текущие значения
 * @param old old values / старые значения
 * @returns true if different / true, если отличаются
 */
export function isDifferent<T = unknown>(
  value: ObjectItem<T>,
  old: ObjectItem<T>
): boolean {
  if (value === old) {
    return false
  }

  if (!value || !old) {
    return true
  }

  const keys = Object.keys(value)
  const oldKeys = Object.keys(old)

  if (keys.length !== oldKeys.length) {
    return true
  }

  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index]

    if (
      !hasKey(old, key)
      || !Object.is(value[key], old[key])
    ) {
      return true
    }
  }

  return false
}
