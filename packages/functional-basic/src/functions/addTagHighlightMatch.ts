import { getSeparatingSearchExp } from './getSeparatingSearchExp'

/**
 * Adds a tag to highlight the match in the string.
 *
 * Добавляет тег для выделения совпадения в строке.
 * @param value initial string / исходная строка
 * @param search search string / строка поиска
 * @param className highlighting class / класс выделения
 */
export function addTagHighlightMatch(
  value: string,
  search?: string,
  className: string = 'sys-highlight-match'
): string {
  if (search) {
    return String(value).replace(
      getSeparatingSearchExp(search),
      `<span class="${className}">$1</span>`
    )
  }

  return value
}
