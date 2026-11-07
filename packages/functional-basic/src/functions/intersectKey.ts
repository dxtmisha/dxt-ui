import { forEach } from './forEach'
import { hasKey } from './hasKey'
import { isObject } from './isObject'
import { isPrototypeKey } from './isPrototypeKey'

/**
 * Intersects object keys or array indexes using the own keys of comparison and values from data.
 * Prototype pollution keys are excluded; arrays produce a plain object with numeric keys.
 *
 * Пересекает ключи объектов или индексы массивов по собственным ключам comparison, беря значения из data.
 * Ключи загрязнения прототипа исключаются; для массивов создаётся обычный объект с числовыми ключами.
 * @param data source object or array with values to copy / исходный объект или массив со значениями для копирования
 * @param comparison object or array whose own keys are checked / объект или массив, собственные ключи которого проверяются
 * @returns plain object with shared keys and values from data / обычный объект с общими ключами и значениями из data
 */
export function intersectKey<
  T extends Record<PropertyKey, unknown> | readonly unknown[],
  C extends Record<PropertyKey, unknown> | readonly unknown[]
>(
  data?: T | null,
  comparison?: C | null
): T extends readonly unknown[]
  ? Partial<Record<number, T[number]>>
  : C extends readonly unknown[]
    ? Partial<Pick<T, Extract<keyof T, keyof C>>>
    : Pick<T, Extract<keyof T, keyof C>> {
  const values = {} as T extends readonly unknown[]
    ? Partial<Record<number, T[number]>>
    : C extends readonly unknown[]
      ? Partial<Pick<T, Extract<keyof T, keyof C>>>
      : Pick<T, Extract<keyof T, keyof C>>

  if (
    isObject(data)
    && isObject(comparison)
  ) {
    forEach(data, (item, index) => {
      if (!isPrototypeKey(index) && hasKey(comparison, index)) {
        (values as Record<PropertyKey, unknown>)[index] = item
      }
    })
  }

  return values
}
