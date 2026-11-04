import { forEach } from './forEach'

import { type ObjectOrArray } from '../types/basicTypes'

/**
 * Returns the length of all elements in an array.
 *
 * Возвращает длину всех элементов в виде массива.
 * @param value input value / входное значение
 * @returns array of string lengths / массив длин строк
 */
export function getLengthOfAllArray(value?: ObjectOrArray<string | null | undefined> | null): number[] {
  return forEach<string | null | undefined, number>(value as ObjectOrArray<string | null | undefined>, item => item?.length ?? 0)
}
