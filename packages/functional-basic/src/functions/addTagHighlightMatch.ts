import { encodeAttribute } from './encodeAttribute'
import { getSeparatingSearchExp } from './getSeparatingSearchExp'
import { isString } from './isString'
import { toString } from './toString'

/** Unique start tag for highlighting the match in the string / Уникальный начальный тег для выделения совпадения в строке */
const TAG_START = '___HIGHLIGHT_START___'

/** Unique end tag for highlighting the match in the string / Уникальный конечный тег для выделения совпадения в строке */
const TAG_END = '___HIGHLIGHT_END___'

/** Regular expression for matching highlight boundary tags / Регулярное выражение для поиска граничных тегов подсветки */
const EXP_TAG = /___HIGHLIGHT_START___|___HIGHLIGHT_END___/g

/**
 * Returns the opening span tag for highlighting.
 *
 * Возвращает открывающий тег span для подсветки.
 * @param className highlighting class / класс выделения
 * @returns opening span tag string / строка открывающего тега span
 */
const getTagStart = (className: string): string => `<span class="${className}">`

/**
 * Returns the closing span tag for highlighting.
 *
 * Возвращает закрывающий тег span для подсветки.
 * @returns closing span tag string / строка закрывающего тега span
 */
const getTagEnd = (): string => '</span>'

/**
 * Checks if the search parameter is valid and non-empty.
 *
 * Проверяет, является ли параметр поиска валидным и непустым.
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @returns true if search is valid / true, если поиск валиден
 */
function isSearchValid(search?: unknown): search is string | RegExp {
  if (search instanceof RegExp) {
    return search.source.length > 0
  }

  if (isString(search)) {
    return search.trim().length > 0
  }

  return false
}

/**
 * Adds a tag to highlight the match in the string.
 *
 * Добавляет тег для выделения совпадения в строке.
 * @param value initial string / исходная строка
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @param className highlighting class / класс выделения
 * @param shouldEscape should escape the string / нужно ли экранировать строку
 * @returns string with highlighting / строка с выделением
 */
export function addTagHighlightMatch(
  value: string,
  search?: string | RegExp,
  className: string = 'sys-highlight-match',
  shouldEscape: boolean = false
): string {
  const valueForSearch = toString(value)

  if (
    valueForSearch.length > 0
    && isSearchValid(search)
  ) {
    const searchExp = getSeparatingSearchExp(search)
    const safeClassName = encodeAttribute(className)
    const tagStart = getTagStart(safeClassName)
    const tagEnd = getTagEnd()

    if (!shouldEscape) {
      return valueForSearch.replace(
        searchExp,
        match => `${tagStart}${match}${tagEnd}`
      )
    }

    let text = valueForSearch.replace(
      searchExp,
      match => `${TAG_START}${match}${TAG_END}`
    )

    text = encodeAttribute(text)

    return text.replace(
      EXP_TAG,
      tag => tag === TAG_START ? tagStart : tagEnd
    )
  }

  return shouldEscape
    ? encodeAttribute(valueForSearch)
    : valueForSearch
}
