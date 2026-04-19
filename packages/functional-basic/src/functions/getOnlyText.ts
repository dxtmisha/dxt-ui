import { anyToString } from './anyToString'

/**
 * Returns only letters, numbers, and spaces from a string.
 *
 * Возвращает из строки только буквы, цифры и пробелы.
 * @param text text for processing / текст для обработки
 * @returns cleaned text without special characters / очищенный текст без специальных символов
 */
export function getOnlyText(text: any): string {
  return anyToString(text)
    .replace(/[^\p{L}\p{N}\s]+/gu, '')
    .trim()
}
