import { escapeExp } from './escapeExp'
import { isFilled } from './isFilled'
import { isString } from './isString'

/**
 * Matches one or more whitespace characters /
 * Регулярное выражение для поиска одного или нескольких пробельных символов
 */
const REGEXP_WHITESPACE = /\s+/

/**
 * Builds a case-insensitive `RegExp` for multi-word "contains all words" search.
 * Each word in the search string is escaped and wrapped in a lookahead `(?=.*?word)`,
 * so the result matches a string only if it contains every word (in any order).
 *
 * Строит регистро-независимое `RegExp` для поиска "содержит все слова".
 * Каждое слово из строки поиска экранируется и оборачивается в lookahead `(?=.*?слово)`,
 * поэтому результат совпадает только если строка содержит все слова (в любом порядке).
 * @param search search string with one or more space-separated words or query value / строка поиска с одним или несколькими словами через пробел или значение запроса
 * @param limit maximum search string length / максимальная длина строки поиска
 * @returns regular expression for multi-word search / регулярное выражение для поиска по всем словам
 */
export function getSearchExp(
  search?: unknown,
  limit: number = 128
): RegExp {
  if (
    !isString(search)
    || search.trim().length === 0
    || search.length > limit
  ) {
    return /^/
  }

  const uniqueWords = Array.from(new Set(search.trim().split(REGEXP_WHITESPACE)))
  const exp: string[] = []

  for (const item of uniqueWords) {
    const text = escapeExp(item).trim()

    if (isFilled(text)) {
      exp.push(`(?=.*?${text})`)
    }
  }

  return new RegExp(`^${exp.join('')}`, 'is')
}
