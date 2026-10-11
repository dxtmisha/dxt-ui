import {
  forEach,
  isArray,
  isObjectNotArray,
  isString,
  type Undefined
} from '@dxtmisha/functional-basic'

import type { ConstrClass } from '../types/constructorTypes'

/**
 * Converts a class value (string, array, or object) into a string for the React `className` attribute.
 * Nested arrays are processed recursively, object keys are included only when their value is truthy.
 *
 * Преобразует значение класса (строка, массив или объект) в строку для атрибута React `className`.
 * Вложенные массивы обрабатываются рекурсивно, ключи объекта включаются только при истинном значении.
 * @param value class value for conversion / значение класса для преобразования
 * @returns string of class names separated by spaces / строка названий классов через пробел
 */
export function toClassString(value?: ConstrClass | Undefined): string {
  const list: string[] = []

  if (isString(value)) {
    const name = value.trim()

    if (name !== '') {
      list.push(name)
    }
  } else if (isArray(value)) {
    value.forEach((item) => {
      const name = toClassString(item)

      if (name !== '') {
        list.push(name)
      }
    })
  } else if (isObjectNotArray(value)) {
    forEach(value, (active, name: string) => {
      if (active) {
        list.push(name)
      }
    })
  }

  return list.join(' ')
}
