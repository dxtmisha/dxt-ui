import { toString } from './toString'

/** List of special characters to encode / Список специальных символов для кодирования */
const SPECIAL_CHARACTERS_LITE: Readonly<Record<string, string>> = {
  '<': '&lt;',
  '>': '&gt;',
  '&': '&amp;'
}

/**
 * Encodes basic HTML special characters (<, >, &) in a string while preserving quotes.
 * Commonly used for HTML title tags and light text formatting.
 *
 * Кодирует базовые специальные символы HTML (<, >, &) в строке, сохраняя кавычки без изменений.
 * Обычно используется для тегов заголовков HTML и облегченного форматирования текста.
 *
 * @param text text to encode / текст для кодирования
 * @returns encoded text / закодированный текст
 *
 * @remarks
 * This function intentionally does NOT encode quotes (" and '). For encoding untrusted user input
 * inside HTML attributes, use `encodeAttribute` instead to prevent attribute injection vulnerabilities.
 *
 * Эта функция намеренно НЕ экранирует кавычки (" и '). Для экранирования пользовательского ввода
 * внутри HTML-атрибутов используйте `encodeAttribute` во избежание уязвимостей инъекции атрибутов.
 */
export function encodeLiteAttribute(text: string): string {
  return toString(text).replace(/[<>&]/g, match => SPECIAL_CHARACTERS_LITE[match] ?? match)
}
