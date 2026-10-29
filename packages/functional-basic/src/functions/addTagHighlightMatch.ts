import { encodeAttribute } from './encodeAttribute'
import { getSeparatingSearchExp } from './getSeparatingSearchExp'
import { isRegExp } from './isRegExp'
import { isString } from './isString'
import { removeTag } from './removeTag'
import { toString } from './toString'

/** Default CSS class for highlighting matches / CSS-класс по умолчанию для выделения совпадений */
const DEFAULT_CLASS_NAME = 'sys-highlight-match'

/** Unique start tag for highlighting the match in the string / Уникальный начальный тег для выделения совпадения в строке */
const TAG_START = '___HIGHLIGHT_START___'

/** Unique end tag for highlighting the match in the string / Уникальный конечный тег для выделения совпадения в строке */
const TAG_END = '___HIGHLIGHT_END___'

/** Regular expression for matching highlight boundary tags / Регулярное выражение для поиска граничных тегов подсветки */
const EXP_TAG = /___HIGHLIGHT_START___|___HIGHLIGHT_END___/g

/**
 * Options for configuring match highlighting in addTagHighlightMatch /
 * Опции для настройки выделения совпадений в addTagHighlightMatch
 */
export interface AddTagHighlightMatchOptions {
  /** Highlighting CSS class / CSS-класс выделения */
  className?: string
  /** Should escape the string / Нужно ли экранировать строку */
  shouldEscape?: boolean
  /** Should remove existing HTML tags / Нужно ли удалять существующие HTML-теги */
  shouldRemoveTag?: boolean
}

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
const isSearchValid = (
  search?: string | RegExp
): search is string | RegExp =>
  isRegExp(search)
    ? search.source.length > 0
    : isString(search) && search.trim().length > 0

/**
 * Ensures regular expression has the global flag.
 *
 * Гарантирует наличие глобального флага у регулярного выражения.
 * @param expression regular expression / регулярное выражение
 * @returns regular expression with global flag / регулярное выражение с глобальным флагом
 */
const toGlobalExp = (expression: RegExp): RegExp =>
  expression.global
    ? expression
    : new RegExp(expression.source, `${expression.flags}g`)

/**
 * Returns the string value for search, optionally removing HTML tags.
 *
 * Возвращает строковое значение для поиска, опционально удаляя HTML-теги.
 * @param value initial string / исходная строка
 * @param shouldRemoveTag whether to remove HTML tags / нужно ли удалять HTML-теги
 * @returns string for search / строка для поиска
 */
const getValueForSearch = (
  value: string,
  shouldRemoveTag: boolean
): string => shouldRemoveTag ? removeTag(value) : value

/**
 * Adds a tag to highlight the match in the string.
 *
 * Добавляет тег для выделения совпадения в строке.
 * @param value initial value / исходное значение
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @param options configuration options / объект опций
 * @returns string with highlighting / строка с выделением
 */
export function addTagHighlightMatch(
  value?: string | number | null,
  search?: string | RegExp,
  options: AddTagHighlightMatchOptions = {}
): string {
  const {
    className = DEFAULT_CLASS_NAME,
    shouldEscape = false,
    shouldRemoveTag = true
  } = options

  const rawValue = toString(value)
  const valueForSearch = getValueForSearch(rawValue, shouldRemoveTag)

  if (
    valueForSearch.length > 0
    && isSearchValid(search)
  ) {
    const rawExpression = getSeparatingSearchExp(search)

    if (rawExpression.source !== '(?!)') {
      const searchExp = toGlobalExp(rawExpression)
      const safeClassName = encodeAttribute(className)
      const tagStart = getTagStart(safeClassName)
      const tagEnd = getTagEnd()

      if (!shouldEscape) {
        return valueForSearch.replace(
          searchExp,
          match => match ? `${tagStart}${match}${tagEnd}` : ''
        )
      }

      let hasMatch = false
      const text = valueForSearch.replace(
        searchExp,
        (match) => {
          if (!match) {
            return ''
          }

          hasMatch = true
          return `${TAG_START}${match}${TAG_END}`
        }
      )

      if (!hasMatch) {
        return encodeAttribute(valueForSearch)
      }

      return encodeAttribute(text).replace(
        EXP_TAG,
        tag => tag === TAG_START ? tagStart : tagEnd
      )
    }
  }

  return shouldEscape
    ? encodeAttribute(valueForSearch)
    : valueForSearch
}
