import { toString } from './toString'

/**
 * Matches special regular expression characters that require escaping /
 * Регулярное выражение для поиска специальных символов RegExp, требующих экранирования
 */
const REGEXP_SPECIAL_CHARS = /[-.*+?^${}()|[\]\\/]/g

/**
 * Escapes special regex characters in a string so it can be used safely in a RegExp.
 * Hyphens use a hex escape to remain valid in Unicode patterns and character classes.
 *
 * Экранирует специальные символы регулярного выражения в строке, чтобы её можно было безопасно использовать в RegExp.
 * Дефисы кодируются через hex для совместимости с Unicode-шаблонами и символьными классами.
 * @param value value to escape / значение для экранирования
 * @returns escaped string / экранированная строка
 */
export function escapeExp(value?: unknown): string {
  return toString(value).replace(
    REGEXP_SPECIAL_CHARS,
    character => character === '-' ? '\\x2d' : `\\${character}`
  )
}
