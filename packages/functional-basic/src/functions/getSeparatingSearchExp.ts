import { escapeExp } from './escapeExp'

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
    return search
  }

  if (
    !search
    || search.trim().length === 0
    || search.length > limit
  ) {
    return /^/
  }

  const list: string = String(search)
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(escapeExp)
    .join('|')

  return new RegExp(`(${list})`, 'ig')
}
