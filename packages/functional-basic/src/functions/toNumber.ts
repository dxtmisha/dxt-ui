import type { NumberOrString } from '../types/basicTypes'

/**
 * Filters out all characters except digits, signs (+, -), dots, commas, and spaces /
 * Регулярное выражение для удаления всех символов, кроме цифр, знаков (+, -), точек, запятых и пробелов
 */
const REGEXP_FILTER = /[^-+\d., ]+/g

/**
 * Detects if a space is used as a thousands separator /
 * Регулярное выражение для определения того, используется ли пробел в качестве разделителя тысяч
 */
const REGEXP_SPACE_THOUSANDS = /( [0-9]{3}[ ,.]|[0-9] [0-9])/

/**
 * Matches spaces globally /
 * Регулярное выражение для поиска всех пробелов
 */
const REGEXP_SPACE = / /g

/**
 * Matches commas globally /
 * Регулярное выражение для поиска всех запятых
 */
const REGEXP_COMMA = /,/g

/**
 * Detects if a comma followed by 3 digits is likely a thousands separator /
 * Регулярное выражение для определения того, является ли запятая, за которой следуют 3 цифры, разделителем тысяч
 */
const REGEXP_COMMA_THOUSANDS = /,[0-9]{3}[,.]/

/**
 * Detects if a dot followed by 3 digits is likely a thousands separator /
 * Регулярное выражение для определения того, является ли точка, за которой следуют 3 цифры, разделителем тысяч
 */
const REGEXP_DOT_THOUSANDS = /[.][0-9]{3}[,.]/

/**
 * Matches dots globally /
 * Регулярное выражение для поиска всех точек
 */
const REGEXP_DOT = /[.]/g

/**
 * Converts a string or number to a finite floating-point number.
 * Handles various separators (spaces, commas, dots) and strips non-numeric characters.
 * Safe for use in SSR (Server-Side Rendering) environments.
 *
 * Преобразует строку или число в конечное число с плавающей точкой.
 * Обрабатывает различные разделители (пробелы, запятые, точки) и удаляет нечисловые символы.
 * Безопасно для использования в SSR (Server-Side Rendering) средах.
 *
 * @param value - The input value to convert / Входное значение для преобразования
 * @returns The parsed number or 0 if conversion fails / Распарсенное число или 0, если конвертация не удалась
 *
 * @example
 * toNumber("1 234,56") // 1234.56
 * toNumber("1,234.56") // 1234.56
 * toNumber("1,234")    // 1.234
 */
export function toNumber(value?: NumberOrString): number {
  if (typeof value === 'number') {
    return Number.isFinite(value) ? (value || 0) : 0
  }

  if (!value) {
    return 0
  }

  let number = value.replace(REGEXP_FILTER, '')

  if (REGEXP_SPACE_THOUSANDS.test(number)) {
    number = number
      .replace(REGEXP_SPACE, '')
      .replace(REGEXP_COMMA, '.')
  } else if (REGEXP_COMMA_THOUSANDS.test(number)) {
    number = number.replace(REGEXP_COMMA, '')
  } else if (REGEXP_DOT_THOUSANDS.test(number)) {
    number = number
      .replace(REGEXP_DOT, '')
      .replace(REGEXP_COMMA, '.')
  } else {
    number = number.replace(REGEXP_COMMA, '.')
  }

  return parseFloat(number) || 0
}
