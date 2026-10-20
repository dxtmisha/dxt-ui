import { forEach } from './forEach'
import { isArray } from './isArray'
import { isObject } from './isObject'
import { toString } from './toString'

/**
 * Returns a string in the form of key-value.
 *
 * Возвращает строку в виде ключ-значение.
 * @param request data for conversion / данные для преобразования
 * @param sign delimiter sign of key and value / знак разделения ключа и значения
 * @param separator variable delimiter sign / знак разделения переменных
 * @param subKey nested key for array elements / вложенный ключ для элементов массива
 * @returns formatted request string / форматированная строка запроса
 */
export function getRequestString(
  request: Record<string, unknown> | readonly unknown[],
  sign: string = '=',
  separator: string = '&',
  subKey?: string
): string {
  if (!isObject(request)) {
    return ''
  }

  return forEach(
    request as Record<string, unknown>,
    (item, name): string | undefined => {
      const transformationName = encodeURIComponent(toString(name).trim())

      if (transformationName !== '') {
        const key = subKey ? `${subKey}[${isArray(request) ? '' : transformationName}]` : transformationName

        if (isObject(item)) {
          const nestedString = getRequestString(item as Record<string, unknown>, sign, separator, key)
          return nestedString !== '' ? nestedString : undefined
        }

        return `${key}${sign}${encodeURIComponent(toString(item))}`
      }
    }
  )
    .sort()
    .join(separator)
}
