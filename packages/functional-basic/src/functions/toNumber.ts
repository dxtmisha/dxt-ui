import { isFilled } from './isFilled'
import { isString } from './isString'

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
 * Return type for `toNumber`: preserves `bigint` when the input type is strictly `bigint`, and resolves to `number` for all other types /
 * Тип возвращаемого значения для `toNumber`: сохраняет `bigint`, когда входной тип строго `bigint`, и возвращает `number` для всех остальных типов
 */
export type ToNumberReturn<T> = [T] extends [never]
  ? number
  : 0 extends (1 & T)
    ? number
    : [T] extends [bigint]
        ? bigint
        : number

/**
 * Converts a value to a finite floating-point number (or returns `bigint` as-is).
 * Handles various separators (spaces, commas, dots) and strips non-numeric characters.
 * Safe for use in SSR (Server-Side Rendering) environments.
 *
 * Преобразует значение в конечное число с плавающей точкой (или возвращает `bigint` без изменений).
 * Обрабатывает различные разделители (пробелы, запятые, точки) и удаляет нечисловые символы.
 * Безопасно для использования в SSR (Server-Side Rendering) средах.
 *
 * @param value input value to convert / входное значение для преобразования
 * @returns parsed number, original bigint, or 0 if conversion fails / распарсенное число, исходный bigint или 0, если конвертация не удалась
 *
 * @example
 * toNumber("1 234,56") // 1234.56
 * toNumber("1,234.56") // 1234.56
 * toNumber("1,234")    // 1.234
 * toNumber(100n)       // 100n
 */
export function toNumber<T = number>(value?: T): ToNumberReturn<T> {
  if (typeof value === 'bigint') {
    return value as ToNumberReturn<T>
  }

  if (typeof value === 'number') {
    return (Number.isFinite(value) ? (value || 0) : 0) as ToNumberReturn<T>
  }

  if (
    isString(value)
    && isFilled(value)
  ) {
    let preparedValue = value.replace(REGEXP_FILTER, '')

    if (REGEXP_SPACE_THOUSANDS.test(preparedValue)) {
      preparedValue = preparedValue
        .replace(REGEXP_SPACE, '')
        .replace(REGEXP_COMMA, '.')
    } else if (REGEXP_COMMA_THOUSANDS.test(preparedValue)) {
      preparedValue = preparedValue.replace(REGEXP_COMMA, '')
    } else if (REGEXP_DOT_THOUSANDS.test(preparedValue)) {
      preparedValue = preparedValue
        .replace(REGEXP_DOT, '')
        .replace(REGEXP_COMMA, '.')
    } else {
      preparedValue = preparedValue.replace(REGEXP_COMMA, '.')
    }

    return (parseFloat(preparedValue) || 0) as ToNumberReturn<T>
  }

  return 0 as ToNumberReturn<T>
}
