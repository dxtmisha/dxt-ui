import { encodeAttribute } from './encodeAttribute'
import { escapeExp } from './escapeExp'
import { getSeparatingSearchExp } from './getSeparatingSearchExp'
import { isString } from './isString'
import { random } from './random'
import { removeTag } from './removeTag'
import { toString } from './toString'

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
 * Generates unique highlight markers that do not collide with the source text.
 *
 * Генерирует уникальные маркеры выделения, которые не конфликтуют с исходным текстом.
 * @param value initial string to check for collision / исходная строка для проверки коллизий
 * @returns pair of start and end markers / пара начального и конечного маркеров
 */
function getHighlightMarkers(value: string): [startMarker: string, endMarker: string] {
  let markerIdentifier = ''
  let startMarker: string
  let endMarker: string

  do {
    markerIdentifier += random(0, 0xFFFFFFFF).toString(36)
    startMarker = `[HIGHLIGHT_START_${markerIdentifier}]`
    endMarker = `[HIGHLIGHT_END_${markerIdentifier}]`
  } while (
    value.includes(startMarker)
    || value.includes(endMarker)
  )

  return [startMarker, endMarker]
}

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
 * @param shouldRemoveTag should remove existing HTML tags if shouldEscape is false / нужно ли удалять существующие HTML-теги, если shouldEscape равно false
 * @returns string with highlighting / строка с выделением
 */
export function addTagHighlightMatch(
  value: string,
  search?: string | RegExp,
  className: string = 'sys-highlight-match',
  shouldEscape: boolean = false,
  shouldRemoveTag: boolean = true
): string {
  let valueForSearch = toString(value)

  if (
    !shouldEscape
    && shouldRemoveTag
  ) {
    valueForSearch = removeTag(valueForSearch)
  }

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

    const [startMarker, endMarker] = getHighlightMarkers(valueForSearch)

    const markerExpression = new RegExp(`${escapeExp(startMarker)}|${escapeExp(endMarker)}`, 'g')
    let text = valueForSearch.replace(
      searchExp,
      match => `${startMarker}${match}${endMarker}`
    )

    text = encodeAttribute(text)

    return text.replace(
      markerExpression,
      tag => tag === startMarker ? tagStart : tagEnd
    )
  }

  return shouldEscape
    ? encodeAttribute(valueForSearch)
    : valueForSearch
}
