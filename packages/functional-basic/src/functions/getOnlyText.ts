import { anyToString } from './anyToString'

/**
 * Returns only letters, numbers, and spaces from a string.
 *
 * Возвращает из строки только буквы, цифры и пробелы.
 * @param text text for processing / текст для обработки
 */
export function getOnlyText(text: any): string {
  return anyToString(text)
    .replace(/[^\p{L}\p{N}\s]+/gu, '')
    .trim()
}
