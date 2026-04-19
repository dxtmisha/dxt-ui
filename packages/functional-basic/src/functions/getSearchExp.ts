import { escapeExp } from './escapeExp'
import { isFilled } from './isFilled'
import { isString } from './isString'
import { toString } from './toString'

/**
 * Builds a case-insensitive global `RegExp` for multi-word "contains all words" search.
 * Each word in the search string is escaped and wrapped in a lookahead `(?=.*?word)`,
 * so the result matches a string only if it contains every word (in any order).
 *
 * Строит регистро-независимое глобальное `RegExp` для поиска "содержит все слова".
 * Каждое слово из строки поиска экранируется и оборачивается в lookahead `(?=.*?слово)`,
 * поэтому результат совпадает только если строка содержит все слова (в любом порядке).
 * @param search search string with one or more space-separated words / строка поиска с одним или несколькими словами через пробел
 * @param limit maximum search string length / максимальная длина строки поиска
 */
export function getSearchExp(
  search: string,
  limit: number = 128
): RegExp {
  if (
    !isString(search)
    || search.trim().length === 0
    || search.length > limit
  ) {
    return /^/
  }

  const exp: string[] = []

  toString(search)
    .split(' ')
    .forEach((item) => {
      const text = escapeExp(item).trim()

      if (isFilled(text)) {
        exp.push(`(?=.*?${text})`)
      }
    })

  return new RegExp(`^${exp.join('')}`, 'i')
}
