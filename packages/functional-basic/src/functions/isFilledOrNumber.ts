import { isFilled } from './isFilled'
import { isNumber } from './isNumber'

import { type EmptyValue } from '../types/basicTypes'

/**
 * Checks if the field is filled or represents a valid number (including `0` and `'0'`).
 *
 * Проверяет, заполнено ли поле или является ли значение числом (включая `0` и `'0'`).
 * @param value input value / входное значение
 * @returns true if filled or number / true, если заполнено или является числом
 */
export function isFilledOrNumber<T>(
  value?: T
): value is Exclude<T, Exclude<EmptyValue, 0 | '0'>> {
  return isFilled(value) || isNumber(value)
}
