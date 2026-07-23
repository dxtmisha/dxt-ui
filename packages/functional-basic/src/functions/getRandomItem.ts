import { isArray } from './isArray'
import { isObject } from './isObject'
import { random } from './random'

/**
 * Returns a random element from an array, object, or value.
 * If the input is empty or invalid, returns undefined.
 *
 * Возвращает случайный элемент из массива, объекта или значения.
 * Если массив/объект пуст или значение отсутствует, возвращает undefined.
 * @param value input array, object, or value / входной массив, объект или значение
 * @returns random element or undefined if empty / случайный элемент или undefined, если пусто
 */
export function getRandomItem<T>(value?: T | T[] | Record<string, T>): T | undefined {
  if (isArray(value)) {
    if (value.length === 0) {
      return undefined
    }

    return value[random(0, value.length - 1)] as T
  }

  if (isObject(value)) {
    const values = Object.values(value) as T[]

    if (values.length === 0) {
      return undefined
    }

    return values[random(0, values.length - 1)]
  }

  return value ?? undefined
}
