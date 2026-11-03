import { toString } from './toString'

/**
 * Matches special regular expression characters that require escaping /
 * Регулярное выражение для поиска специальных символов RegExp, требующих экранирования
 */
const REGEXP_SPECIAL_CHARS = /[-.*+?^${}()|[\]\\/]/g

/**
 * Escapes special regex characters in a string so it can be used safely in a RegExp.
 *
 * Экранирует специальные символы регулярного выражения в строке, чтобы её можно было безопасно использовать в RegExp.
 * @param value value to escape / значение для экранирования
 * @returns escaped string / экранированная строка
 */
export function escapeExp(value?: unknown): string {
  return toString(value).replace(REGEXP_SPECIAL_CHARS, '\\$&')
}
