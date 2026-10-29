import { isArray } from './isArray'
import { isNull } from './isNull'
import { isObject } from './isObject'
import { isString } from './isString'

/**
 * Safely converts any value to a string according to specific conversion rules:
 * - **Strings**: Returned as is (trimmed if `trim = true`).
 * - **Nullish values**: `null` and `undefined` return an empty string `''`.
 * - **Arrays**: If `isArrayString = true` and the array contains no objects, elements are joined with commas. Otherwise serialized as JSON.
 * - **Objects**: Converted to JSON via `JSON.stringify`. In case of circular references or serialization errors, falls back to `String()` or `Object.prototype.toString`.
 * - **Booleans**: `true` converts to `'1'`, `false` converts to `'0'`.
 * - **Other types**: Numbers, BigInt, Symbol, functions, etc. are converted via `.toString()`.
 *
 * Безопасно преобразует любое значение в строку в соответствии с правилами преобразования:
 * - **Строки**: Возвращаются как есть (с обрезкой пробелов, если `trim = true`).
 * - **Пустые значения**: `null` и `undefined` возвращают пустую строку `''`.
 * - **Массивы**: Если `isArrayString = true` и массив не содержит объектов, элементы объединяются через запятую. В остальных случаях сериализуются в JSON.
 * - **Объекты**: Преобразуются в JSON через `JSON.stringify`. При циклических ссылках или ошибках сериализации возвращается `String()` или `Object.prototype.toString`.
 * - **Логические значения**: `true` преобразуется в `'1'`, `false` — в `'0'`.
 * - **Прочие типы**: Числа, BigInt, Symbol, функции и др. преобразуются через `.toString()`.
 * @param value value for conversion / значение для преобразования
 * @param isArrayString if true, flat arrays without objects are joined with commas; if false, serialized as JSON string / если true, массивы без объектов склеиваются через запятую; если false, сериализуются в JSON-строку
 * @param trim if true, then the resulting string will be trimmed / если true, то результирующая строка будет обрезана
 * @returns string representation of the passed value / строковое представление переданного значения
 *
 * @example
 * ```ts
 * anyToString('  Hello  ') // => 'Hello'
 * anyToString('  Hello  ', true, false) // => '  Hello  '
 * anyToString([1, 2, 3]) // => '1,2,3'
 * anyToString([1, 2, 3], false) // => '[1,2,3]'
 * anyToString({ a: 1 }) // => '{"a":1}'
 * anyToString(true) // => '1'
 * anyToString(false) // => '0'
 * anyToString(null) // => ''
 * ```
 */
export function anyToString<V = unknown>(
  value?: V,
  isArrayString: boolean = true,
  trim: boolean = true
): string {
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
    return '1'
  }

  if (value === false) {
    return '0'
  }

  return value?.toString() ?? ''
}
