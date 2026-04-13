import { escapeExp } from './escapeExp'

/**
 * Creates a case-insensitive regular expression for a search by words (separating by space).
 *
 * Создает регистронезависимое регулярное выражение для поиска по словам (разделение пробелом).
 * @param search search string / строка поиска
 */
export function getSeparatingSearchExp(search: string): RegExp {
  if (
    !search
    || search.length === 0
  ) {
    return /(?!)/ig
  }

  const list: string = String(search)
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(escapeExp)
    .join('|')

  return new RegExp(`(${list})`, 'ig')
}
