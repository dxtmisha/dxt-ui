import { encodeAttribute } from './encodeAttribute'
import { getSeparatingSearchExp } from './getSeparatingSearchExp'
import { isFilled } from './isFilled'
import { random } from './random'
import { toString } from './toString'

/** Unique tag for highlighting the match in the string / Уникальный тег для выделения совпадения в строке */
const TAG_START = `___HIGHLIGHT_START_${random(100_000, 999_999)}___`

/** Unique tag for highlighting the match in the string / Уникальный тег для выделения совпадения в строке */
const TAG_END = `___HIGHLIGHT_END_${random(100_000, 999_999)}___`

const expTag = new RegExp(`${TAG_START}|${TAG_END}`, 'g')

/**
 * Adds a tag to highlight the match in the string.
 *
 * Добавляет тег для выделения совпадения в строке.
 * @param value initial string / исходная строка
 * @param search search string or RegExp / строка поиска или регулярное выражение
 * @param className highlighting class / класс выделения
 * @param shouldEscape should escape the string / нужно ли экранировать строку
 */
export function addTagHighlightMatch(
  value: string,
  search?: string | RegExp,
  className: string = 'sys-highlight-match',
  shouldEscape: boolean = false
): string {
  const valueForSearch = toString(value)

  if (
    isFilled(valueForSearch)
    && isFilled(search)
  ) {
    let text = valueForSearch.replace(
      getSeparatingSearchExp(search),
      `${TAG_START}$1${TAG_END}`
    )

    if (shouldEscape) {
      text = encodeAttribute(text)
    }

    return text
      .replace(expTag, text => text === TAG_START ? `<span class="${className}">` : '</span>')
  }

  return shouldEscape ? encodeAttribute(valueForSearch) : valueForSearch
}
