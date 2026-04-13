import type { NumberOrString } from '../types/basicTypes'

/**
 * Regular expression to filter out all characters except digits, signs (+, -), dots, commas, and spaces/
 * Регулярное выражение для удаления всех символов, кроме цифр, знаков (+, -), точек, запятых и пробелов
 */
const REGEXP_FILTER = /[^-+\d., ]+/ig

/**
 * Regular expression to detect if a space is used as a thousands separator/
 * Регулярное выражение для определения того, используется ли пробел в качестве разделителя тысяч
 */
const REGEXP_SPACE_THOUSANDS = /( [0-9]{3}[ ,.]|[0-9] [0-9])/ig

/**
 * Regular expression to match spaces globally/
 * Регулярное выражение для поиска всех пробелов
 */
const REGEXP_SPACE = / /ig

/**
 * Regular expression to match commas globally/
 * Регулярное выражение для поиска всех запятых
 */
const REGEXP_COMMA = /,/ig

/**
 * Regular expression to detect if a comma followed by 3 digits is likely a thousands separator/
 * Регулярное выражение для определения того, является ли запятая, за которой следуют 3 цифры, разделителем тысяч
 */
const REGEXP_COMMA_THOUSANDS = /,[0-9]{3}[,.]/ig

/**
 * Regular expression to detect if a dot followed by 3 digits is likely a thousands separator/
 * Регулярное выражение для определения того, является ли точка, за которой следуют 3 цифры, разделителем тысяч
 */
const REGEXP_DOT_THOUSANDS = /[.][0-9]{3}[,.]/ig

/**
 * Regular expression to match dots globally/
 * Регулярное выражение для поиска всех точек
 */
const REGEXP_DOT = /[.]/ig

/**
 * The method parses a string argument and returns a floating point number.
 *
 * Метод принимает строку в качестве аргумента и возвращает десятичное число
 * @param value input value/ входное значение
 */
export function toNumber<T extends NumberOrString>(value?: T): (T & number) | number {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : 0
  }

  if (typeof value === 'bigint') {
    return value
  }

  if (!value) {
    return 0
  }

  let number = value.replace(REGEXP_FILTER, '')

  if (number.match(REGEXP_SPACE_THOUSANDS)) {
    number = number
      .replace(REGEXP_SPACE, '')
      .replace(REGEXP_COMMA, '.')
  } else if (number.match(REGEXP_COMMA_THOUSANDS)) {
    number = number.replace(REGEXP_COMMA, '')
  } else if (number.match(REGEXP_DOT_THOUSANDS)) {
    number = number
      .replace(REGEXP_DOT, '')
      .replace(REGEXP_COMMA, '.')
  } else {
    number = number.replace(REGEXP_COMMA, '.')
  }

  return parseFloat(number)
}
