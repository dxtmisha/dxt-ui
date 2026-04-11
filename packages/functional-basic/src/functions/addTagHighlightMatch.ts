import { encodeAttribute } from './encodeAttribute'
import { getSeparatingSearchExp } from './getSeparatingSearchExp'
import { random } from './random'

/** Unique tag for highlighting the match in the string / Уникальный тег для выделения совпадения в строке */
const TAG_START = `span_${random(100000, 999999)}`

/** Unique tag for highlighting the match in the string / Уникальный тег для выделения совпадения в строке */
const TAG_END = `span_${random(100000, 999999)}`

/**
 * Adds a tag to highlight the match in the string.
 *
 * Добавляет тег для выделения совпадения в строке.
 * @param value initial string / исходная строка
 * @param search search string / строка поиска
 * @param className highlighting class / класс выделения
 * @param shouldEscape should escape the string / нужно ли экранировать строку
 */
export function addTagHighlightMatch(
  value: string,
  search?: string,
  className: string = 'sys-highlight-match',
  shouldEscape: boolean = false
): string {
  if (search) {
    let text = String(value).replace(
      getSeparatingSearchExp(search),
      `${TAG_START}$1${TAG_END}`
    )

    if (shouldEscape) {
      text = encodeAttribute(text)
    }

    return text
      .replace(new RegExp(TAG_START, 'g'), `<span class="${className}">`)
      .replace(new RegExp(TAG_END, 'g'), '</span>')
  }

  return shouldEscape ? encodeAttribute(value) : value
}
