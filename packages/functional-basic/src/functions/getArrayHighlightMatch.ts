import { getSeparatingSearchExp } from './getSeparatingSearchExp'
import { type HighlightMatchItem } from '../types/searchTypes'

/**
 * Split a string into an array of objects to highlight matches.
 *
 * Разделяет строку на массив объектов для выделения совпадений.
 * @param value initial string / исходная строка
 * @param search search string / строка поиска
 */
export function getArrayHighlightMatch(
  value: string,
  search?: string
): HighlightMatchItem[] {
  const text = String(value)

  if (search) {
    const result: HighlightMatchItem[] = []
    const exp = getSeparatingSearchExp(search)
    let lastIndex = 0
    let match

    while ((match = exp.exec(text)) !== null) {
      if (match.index === exp.lastIndex) {
        break
      }

      if (match.index > lastIndex) {
        result.push({
          text: text.substring(lastIndex, match.index),
          isMatch: false
        })
      }

      result.push({
        text: match[0],
        isMatch: true
      })

      lastIndex = exp.lastIndex
    }

    if (lastIndex < text.length) {
      result.push({
        text: text.substring(lastIndex),
        isMatch: false
      })
    }

    return result
  }

  return [{ text, isMatch: false }]
}
