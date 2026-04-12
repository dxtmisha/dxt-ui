import { getLengthOfAllArray } from './getLengthOfAllArray'
import { isFilled } from './isFilled'

import { type ObjectOrArray } from '../types/basicTypes'

/**
 * Searches for the shortest string in the array and returns its length.
 *
 * Ищет самую короткую строку в массиве и возвращает её длину.
 * @param data array with data/ массив с данными
 */
export function getMinLengthAllArray(data: ObjectOrArray<string>): number {
  if (!isFilled(data)) {
    return 0
  }

  const lengths = getLengthOfAllArray(data)

  if (lengths.length > 10_000) {
    return lengths.reduce((min, current) => Math.min(min, current))
  }

  return Math.min(...lengths)
}
