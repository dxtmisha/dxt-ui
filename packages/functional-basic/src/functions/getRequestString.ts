import { forEach } from './forEach'
import { isArray } from './isArray'
import { isObject } from './isObject'
import { toString } from './toString'

/**
 * Returns a string in the form of key-value.
 *
 * Возвращает строку в виде ключ-значение.
 * @param request data for conversion/ данные для преобразования
 * @param sign delimiter sign of key and value/ знак разделения ключа и значения
 * @param separator variable delimiter sign/ знак разделения переменных
 */
export function getRequestString(
  request: Record<string, any> | any[],
  sign: string = '=',
  separator: string = '&',
  subKey?: string
): string {
  return forEach(request,
    (item, name) => {
      const transformationName = encodeURIComponent(toString(name).trim())

      if (transformationName !== '') {
        const key = subKey ? `${subKey}[${isArray(request) ? '' : transformationName}]` : transformationName

        if (isObject(item)) {
          return getRequestString(item, sign, separator, key)
        }

        return `${key}${sign}${encodeURIComponent(toString(item))}`
      }
    }
  )
    .sort()
    .join(separator)
}
