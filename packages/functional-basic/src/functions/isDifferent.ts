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
  value?: ObjectItem<T> | null,
  old?: ObjectItem<T> | null
): boolean {
  if (value === old) {
    return false
  }

  if (!value || !old) {
    return true
  }

  const keys = Object.keys(value)
  const oldKeys = Object.keys(old)
  const length = keys.length

  if (length !== oldKeys.length) {
    return true
  }

  for (let index = 0; index < length; index++) {
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
