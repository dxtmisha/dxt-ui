import { anyToString } from './anyToString'

/**
 * Filters out all characters except letters, marks, numbers, and spaces /
 * Регулярное выражение для удаления всех символов, кроме букв, знаков диакритики, цифр и пробелов
 */
const REGEXP_ONLY_TEXT = /[^\p{L}\p{M}\p{N}\s]+/gu

/**
 * Returns only letters, numbers, and spaces from a string.
 *
 * Возвращает из строки только буквы, цифры и пробелы.
 * @param text text for processing / текст для обработки
 * @returns cleaned text without special characters / очищенный текст без специальных символов
 */
export function getOnlyText(text: unknown): string {
  return anyToString(text)
    .replace(REGEXP_ONLY_TEXT, '')
    .trim()
}
