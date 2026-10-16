import { escapeExp } from './escapeExp'
import { toString } from './toString'

/**
 * Creates a case-insensitive regular expression for a search by words (separating by space).
 *
 * Создает регистронезависимое регулярное выражение для поиска по словам (разделение пробелом).
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @param limit maximum search string length / максимальная длина строки поиска
 * @returns `RegExp` for search / регулярное выражение для поиска
 */
export function getSeparatingSearchExp(
  search: string | RegExp,
  limit: number = 128
): RegExp {
  if (search instanceof RegExp) {
    return new RegExp(search.source, search.flags)
  }

  const normalizedSearch = toString(search).trim()

  if (
    normalizedSearch.length === 0
    || normalizedSearch.length > limit
  ) {
    return /(?!)/
  }

  const uniqueWords = Array.from(new Set(normalizedSearch.split(/\s+/)))
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)
    .map(escapeExp)

  if (uniqueWords.length === 0) {
    return /(?!)/
  }

  return new RegExp(`(${uniqueWords.join('|')})`, 'ig')
}
