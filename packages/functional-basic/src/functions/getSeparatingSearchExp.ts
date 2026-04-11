import { escapeExp } from './escapeExp'
import { isFilled } from './isFilled'
import { forEach } from './forEach'

/**
 * Creates a case-insensitive regular expression for a search by words (separating by space).
 *
 * Создает регистронезависимое регулярное выражение для поиска по словам (разделение пробелом).
 * @param search search string / строка поиска
 */
export function getSeparatingSearchExp(search: string): RegExp {
  if (!isFilled(search)) {
    return /(?!)/ig
  }

  const list: string = forEach(
    String(search)
      .replace(/\s+/ig, ' ')
      .trim()
      .split(' '),
    text => escapeExp(text)
  )
    .join('|')

  return new RegExp(`(${list})`, 'ig')
}
