import { toString } from './toString'

/**
 * Escapes special regex characters in a string so it can be used safely in a RegExp.
 *
 * Экранирует специальные символы регулярного выражения в строке, чтобы её можно было безопасно использовать в RegExp.
 * @param value string to escape / строка для экранирования
 * @returns escaped string / экранированная строка
 */
export function escapeExp(value: string): string {
  return toString(value).replace(/[.*+?^${}()|[\]\\/-]/g, '\\$&')
}
