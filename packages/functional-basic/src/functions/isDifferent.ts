import { type ObjectItem } from '../types/basicTypes'
import { hasKey } from './hasKey'

/**
 * Shallowly compares own enumerable string keys using Object.is for their values.
 * Nested objects and functions are compared by reference.
 *
 * Поверхностно сравнивает собственные перечисляемые строковые ключи и их значения через Object.is.
 * Вложенные объекты и функции сравниваются по ссылке.
 * @param value current object or array / текущий объект или массив
 * @param old previous object or array / предыдущий объект или массив
 * @returns true if different / true, если отличаются
 */
export function isDifferent<T = unknown>(
  value?: ObjectItem<T> | readonly T[] | null,
  old?: ObjectItem<T> | readonly T[] | null
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
      || !Object.is(Reflect.get(value, key), Reflect.get(old, key))
    ) {
      return true
    }
  }

  return false
}
