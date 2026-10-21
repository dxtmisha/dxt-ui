import type { NumberOrString } from '../types/basicTypes'
import { GeoIntl } from '../classes/GeoIntl'
import { toNumber } from './toNumber'

/**
 * Formats a numeric value using GeoIntl if formatting is enabled.
 *
 * Форматирует числовое значение с помощью GeoIntl, если включено форматирование.
 * @param value numeric value / числовое значение
 * @param formatting format the number / форматировать число
 * @param language formatting language / язык форматирования
 * @returns formatted number or original number / отформатированное число или исходное число
 */
function getFormatting(
  value: number,
  formatting?: boolean,
  language?: string
): string | number {
  return formatting ? new GeoIntl(language).number(value) : value
}

/**
 * Converts the data into a number, taking into account the maximum permissible value.
 *
 * Преобразует данные в число с учетом максимально допустимого значения.
 * @param value input value / входное значение
 * @param max maximum achievable value / максимально достижимое значение
 * @param formatting format the number / форматировать число
 * @param language formatting language / язык форматирования
 * @returns formatted number string or number / форматированная строка числа или число
 */
export function toNumberByMax(
  value?: NumberOrString,
  max?: NumberOrString,
  formatting?: boolean,
  language?: string
): string | number {
  const numericValue = toNumber(value)
  const numericMax = toNumber(max)

  if (Boolean(max || max === 0) && numericMax < numericValue) {
    return `${getFormatting(numericMax, formatting, language)}+`
  }

  return getFormatting(numericValue, formatting, language)
}
