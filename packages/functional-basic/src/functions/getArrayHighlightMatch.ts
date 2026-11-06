import { getSeparatingSearchExp } from './getSeparatingSearchExp'
import { isRegExp } from './isRegExp'
import { isString } from './isString'
import { toString } from './toString'

import { type HighlightMatchItem } from '../types/searchTypes'

/** Maximum BMP code point / Максимальная кодовая точка BMP */
const UNICODE_MAX_BMP = 0xFFFF

/**
 * Checks if the search parameter is valid and non-empty.
 *
 * Проверяет, является ли параметр поиска валидным и непустым.
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @returns true if search is valid / true, если поиск валиден
 */
const isSearchValid = (
  search?: string | RegExp
): search is string | RegExp =>
  isRegExp(search)
    ? search.source.length > 0
    : isString(search) && search.trim().length > 0

/**
 * Ensures regular expression has the global flag.
 *
 * Гарантирует наличие глобального флага у регулярного выражения.
 * @param expression regular expression / регулярное выражение
 * @returns regular expression with global flag / регулярное выражение с глобальным флагом
 */
const toGlobalExp = (expression: RegExp): RegExp =>
  expression.global
    ? expression
    : new RegExp(expression.source, `${expression.flags}g`)

/**
 * Split a string into an array of objects to highlight matches.
 *
 * Разделяет строку на массив объектов для выделения совпадений.
 * @param value initial value / исходное значение
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @returns array of objects with text and match flag / массив объектов с текстом и флагом совпадения
 */
export function getArrayHighlightMatch(
  value?: unknown,
  search?: string | RegExp
): HighlightMatchItem[] {
  const text = toString(value)

  if (
    text.length > 0
    && isSearchValid(search)
  ) {
    const result: HighlightMatchItem[] = []
    const expression = toGlobalExp(getSeparatingSearchExp(search))
    const isUnicode = expression.unicode || expression.flags.includes('v')
    let lastIndex = 0
    let match: RegExpExecArray | null

    while ((match = expression.exec(text)) !== null) {
      const matchIndex = match.index
      const matchLength = match[0].length

      if (matchLength === 0) {
        const codePoint = text.codePointAt(matchIndex) ?? 0
        expression.lastIndex = matchIndex + (isUnicode && codePoint > UNICODE_MAX_BMP ? 2 : 1)
        continue
      }

      if (matchIndex > lastIndex) {
        result.push({
          text: text.substring(lastIndex, matchIndex),
          isMatch: false
        })
      }

      result.push({
        text: match[0],
        isMatch: true
      })

      lastIndex = expression.lastIndex
    }

    if (lastIndex < text.length) {
      result.push({
        text: text.substring(lastIndex),
        isMatch: false
      })
    }

    return result.length > 0
      ? result
      : [{ text, isMatch: false }]
  }

  return [{ text, isMatch: false }]
}
