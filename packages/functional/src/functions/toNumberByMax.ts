import { toNumber } from './toNumber'

import { GeoIntl } from '../classes/GeoIntl'

/**
 * Converts the data into a number, taking into account the maximum permissible value.<br>
 * Преобразует данные в число с учетом максимально допустимого значения.
 * @param value input value /<br>входное значение
 * @param max maximum achievable value /<br>максимально достижимое значение
 * @param formatting format the number /<br>форматировать число
 * @param language formatting language /<br>язык форматирования
 */
export function toNumberByMax(
  value: string | number,
  max?: number,
  formatting?: boolean,
  language?: string
) {
  const number = toNumber(value)

  if (max && max < number) {
    return `${getFormatting(max, formatting, language)}+`
  }

  return getFormatting(number, formatting, language)
}

const getFormatting = (
  value: number,
  formatting?: boolean,
  language?: string
) => formatting ? new GeoIntl(language).number(value) : value
