import { isArray } from './isArray'
import { isNull } from './isNull'
import { isObject } from './isObject'
import { isString } from './isString'

/**
 * Options for configuring string conversion in anyToString /
 * Опции для настройки преобразования в строку в anyToString
 */
export interface AnyToStringOptions {
  /** If true, flat arrays without objects are joined with commas; if false, serialized as JSON string / Если true, массивы без объектов склеиваются через запятую; если false, сериализуются в JSON-строку */
  isArrayString?: boolean
  /** If true, boolean values are converted to 'true' or 'false'; if false, to '1' or '0' / Если true, логические значения преобразуются в 'true' или 'false'; если false — в '1' или '0' */
  isBooleanString?: boolean
  /** If true, then the resulting string will be trimmed / Если true, то результирующая строка будет обрезана */
  trim?: boolean
}

/**
 * Safely converts any value to a string according to specific conversion rules:
 * - **Strings**: Returned as is (trimmed if `trim = true`).
 * - **Nullish values**: `null` and `undefined` return an empty string `''`.
 * - **Arrays**: If `isArrayString = true` and the array contains no objects, elements are joined with commas. Otherwise serialized as JSON.
 * - **Objects**: Converted to JSON via `JSON.stringify`. In case of circular references or serialization errors, falls back to `String()` or `Object.prototype.toString`.
 * - **Booleans**: By default (`isBooleanString = false`), `true` converts to `'1'` and `false` converts to `'0'`. If `isBooleanString = true`, returns `'true'` or `'false'`.
 * - **Other types**: Numbers, BigInt, Symbol, functions, etc. are converted via `.toString()`.
 *
 * Безопасно преобразует любое значение в строку в соответствии с правилами преобразования:
 * - **Строки**: Возвращаются как есть (с обрезкой пробелов, если `trim = true`).
 * - **Пустые значения**: `null` и `undefined` возвращают пустую строку `''`.
 * - **Массивы**: Если `isArrayString = true` и массив не содержит объектов, элементы объединяются через запятую. В остальных случаях сериализуются в JSON.
 * - **Объекты**: Преобразуются в JSON через `JSON.stringify`. При циклических ссылках или ошибках сериализации возвращается `String()` или `Object.prototype.toString`.
 * - **Логические значения**: По умолчанию (`isBooleanString = false`) `true` преобразуется в `'1'`, `false` — в `'0'`. Если `isBooleanString = true`, возвращается `'true'` или `'false'`.
 * - **Прочие типы**: Числа, BigInt, Symbol, функции и др. преобразуются через `.toString()`.
 * @param value value for conversion / значение для преобразования
 * @param options configuration options / объект опций
 * @returns string representation of the passed value / строковое представление переданного значения
 *
 * @example
 * ```ts
 * anyToString('  Hello  ') // => 'Hello'
 * anyToString('  Hello  ', { trim: false }) // => '  Hello  '
 * anyToString([1, 2, 3]) // => '1,2,3'
 * anyToString([1, 2, 3], { isArrayString: false }) // => '[1,2,3]'
 * anyToString({ a: 1 }) // => '{"a":1}'
 * anyToString(true) // => '1'
 * anyToString(false) // => '0'
 * anyToString(true, { isBooleanString: true }) // => 'true'
 * anyToString(false, { isBooleanString: true }) // => 'false'
 * anyToString(null) // => ''
 * ```
 */
export function anyToString<V = unknown>(
  value?: V,
  options: AnyToStringOptions = {}
): string {
  const {
    isArrayString = true,
    isBooleanString = false,
    trim = true
  } = options

  if (isString(value)) {
    return trim ? value.trim() : value
  }

  if (isNull(value)) {
    return ''
  }

  if (
    isArrayString
    && isArray(value)
    && !value.some(item => isObject(item))
  ) {
    return value.join(',')
  }

  if (isObject(value)) {
    try {
      return JSON.stringify(value)
    } catch {
      try {
        return String(value)
      } catch {
        return Object.prototype.toString.call(value)
      }
    }
  }

  if (value === true) {
    return isBooleanString ? 'true' : '1'
  }

  if (value === false) {
    return isBooleanString ? 'false' : '0'
  }

  return value?.toString() ?? ''
}
