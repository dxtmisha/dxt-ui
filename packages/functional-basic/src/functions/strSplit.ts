import { anyToString } from './anyToString'

/**
 * Splits a string by a separator, limited to a certain number of elements.
 * If a limit is specified, the last element will contain the remainder of the string.
 *
 * Разделяет строку по разделителю, ограничивая количество элементов.
 * Если указан лимит, последний элемент будет содержать остаток строки.
 * @param value input value / входное значение
 * @param separator separator / разделитель
 * @param limit limit / лимит
 * @returns split array / разделенный массив
 */
export function strSplit(
  value?: unknown,
  separator: string = '',
  limit?: number
): string[] {
  const stringValue = anyToString(value)

  if (!limit || limit <= 0) {
    return stringValue.split(separator)
  }

  if (limit === 1) {
    return [stringValue]
  }

  const parts = stringValue.split(separator)

  if (parts.length <= limit) {
    return parts
  }

  return [
    ...parts.slice(0, limit - 1),
    parts.slice(limit - 1).join(separator)
  ]
}
