import { escapeExp } from './escapeExp'
import { toString } from './toString'

/**
 * Regular expression matching one or more whitespace characters /
 * Регулярное выражение для поиска одного или нескольких пробельных символов
 */
const REGEXP_WHITESPACE = /\s+/

/**
 * Fallback regular expression that never matches any string /
 * Регулярное выражение-заглушка, которое никогда ничего не совпадает
 */
const REGEXP_NEVER = /(?!)/

/**
 * Creates a regular expression for a search by words (separating by space).
 * Returns a case-insensitive and global `RegExp` for string queries, or clones the provided `RegExp` preserving its pattern and flags.
 *
 * Создает регулярное выражение для поиска по словам (разделение пробелом).
 * Возвращает регистронезависимое и глобальное `RegExp` для строковых запросов или клонирует переданный `RegExp` с сохранением его шаблона и флагов.
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @param limit maximum search string length / максимальная длина строки поиска
 * @returns `RegExp` for search / регулярное выражение для поиска
 */
export function getSeparatingSearchExp(
  search: string | RegExp,
  limit: number = 128
): RegExp {
  if (search instanceof RegExp) {
    if (search.source === '(?:)' || search.source === '') {
      return REGEXP_NEVER
    }

    return new RegExp(search.source, search.flags)
  }

  const normalizedSearch = toString(search).trim()

  if (
    normalizedSearch.length === 0
    || limit <= 0
    || normalizedSearch.length > limit
  ) {
    return REGEXP_NEVER
  }

  const words = Array.from(new Set(normalizedSearch.toLowerCase().split(REGEXP_WHITESPACE)))
    .sort((a, b) => b.length - a.length)
    .map(escapeExp)

  if (words.length === 0) {
    return REGEXP_NEVER
  }

  return new RegExp(`(${words.join('|')})`, 'ig')
}
