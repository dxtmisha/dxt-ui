import { escapeExp } from './escapeExp'
import { isFilled } from './isFilled'

/**
 * Builds a case-insensitive global `RegExp` for multi-word "contains all words" search.
 * Each word in the search string is escaped and wrapped in a lookahead `(?=.*?word)`,
 * so the result matches a string only if it contains every word (in any order).
 *
 * Строит регистро-независимое глобальное `RegExp` для поиска "содержит все слова".
 * Каждое слово из строки поиска экранируется и оборачивается в lookahead `(?=.*?слово)`,
 * поэтому результат совпадает только если строка содержит все слова (в любом порядке).
 * @param search search string with one or more space-separated words / строка поиска с одним или несколькими словами через пробел
 */
export function getSearchExp(search: string): RegExp {
  let exp = ''

  search
    .split(' ')
    .forEach((item) => {
      const text = escapeExp(item).trim()

      if (isFilled(text)) {
        exp += `(?=.*?${text})`
      }
    })

  return new RegExp(`^${exp}`, 'ig')
}
