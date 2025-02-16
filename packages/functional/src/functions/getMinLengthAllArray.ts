import { getLengthOfAllArray } from './getLengthOfAllArray'

import { type ObjectOrArray } from '../types/basicTypes'

/**
 * Searches for the shortest string in the array and returns its length.
 *
 * Ищет самую короткую строку в массиве и возвращает её длину.
 * @param data array with data/ массив с данными
 */
export function getMinLengthAllArray(data: ObjectOrArray<string>): number {
  return Math.min(...getLengthOfAllArray(data))
}
