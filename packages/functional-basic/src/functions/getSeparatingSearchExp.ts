import { escapeExp } from './escapeExp'
import { forEach } from './forEach'

/**
 * Creates a case-insensitive regular expression for a search by words (separating by space).
 *
 * Создает регистронезависимое регулярное выражение для поиска по словам (разделение пробелом).
 * @param search search string / строка поиска
 */
export function getSeparatingSearchExp(search: string): RegExp {
  const list: string = forEach(
    search.split(' '),
    text => escapeExp(text)
  )
    .join('|')

  return new RegExp(`(${list})`, 'ig')
}
