import type { InputSocialValue } from '../types/socialTypes'
import { toLower } from './toLower'

/** Regular expression to clear protocol, www prefix, and leading @ / Регулярное выражение для очистки протокола, www и начального @ */
const REGEX_CLEAR = /^(?:https?:)?(?:\/{2,})?(?:www\.)?@*/i

/**
 * Clears whitespace, protocol (http, https), www prefix, and leading @ symbols from a string,
 * converting domain to lowercase while preserving path and username casing.
 *
 * Очищает пробелы, протокол (http, https), префикс www и начальные символы @ из строки,
 * приводя домен к нижнему регистру и сохраняя регистр пути и никнейма.
 * @param value URL, string, number, null, or undefined / ссылка, строка, число, null или undefined
 * @returns cleared string without protocol, www, and @ / очищенная строка без протокола, www и @
 */
export function toClear(value?: InputSocialValue): string {
  return toLower(value).replace(REGEX_CLEAR, '')
}
