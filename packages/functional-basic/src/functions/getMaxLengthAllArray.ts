import { getLengthOfAllArray } from './getLengthOfAllArray'
import { isFilled } from './isFilled'

import { type ObjectOrArray } from '../types/basicTypes'

/**
 * Searches for the longest string in the array and returns its length.
 *
 * Ищет самую длинную строку в массиве и возвращает её длину.
 * @param data array with data/ массив с данными
 * @returns length of the longest string/ длина самой длинной строки
 */
export function getMaxLengthAllArray(data: ObjectOrArray<string>): number {
  if (!isFilled(data)) {
    return 0
  }

  const lengths = getLengthOfAllArray(data)

  if (lengths.length > 10_000) {
    return lengths.reduce((max, current) => Math.max(max, current))
  }

  return Math.max(...lengths)
}
