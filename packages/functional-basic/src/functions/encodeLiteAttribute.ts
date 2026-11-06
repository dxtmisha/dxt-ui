import { toString } from './toString'

/** List of special characters to encode / Список специальных символов для кодирования */
const SPECIAL_CHARACTERS_LITE = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
} as const

/**
 * Checks for basic HTML special characters (&, <, >) /
 * Проверяет наличие базовых специальных символов HTML (&, <, >)
 */
const REGEXP_HAS_SPECIAL_CHARACTERS_LITE = /[&<>]/

/**
 * Matches basic HTML special characters (&, <, >) /
 * Регулярное выражение для поиска базовых специальных символов HTML (&, <, >)
 */
const REGEXP_SPECIAL_CHARACTERS_LITE = /[&<>]/g

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
 * @example
 * ```ts
 * encodeLiteAttribute('Tom & Jerry') // => 'Tom &amp; Jerry'
 * encodeLiteAttribute('<title> "Hello" </title>') // => '&lt;title&gt; "Hello" &lt;/title&gt;'
 * encodeLiteAttribute(undefined) // => ''
 * ```
 *
 * @remarks
 * This function intentionally does NOT encode quotes (" and '). For encoding untrusted user input
 * inside HTML attributes, use `encodeAttribute` instead to prevent attribute injection vulnerabilities.
 *
 * Эта функция намеренно НЕ экранирует кавычки (" и '). Для экранирования пользовательского ввода
 * внутри HTML-атрибутов используйте `encodeAttribute` во избежание уязвимостей инъекции атрибутов.
 */
export function encodeLiteAttribute(text?: unknown): string {
  const preparedText = toString(text)

  if (
    preparedText.length === 0
    || !REGEXP_HAS_SPECIAL_CHARACTERS_LITE.test(preparedText)
  ) {
    return preparedText
  }

  return preparedText.replace(
    REGEXP_SPECIAL_CHARACTERS_LITE,
    match => SPECIAL_CHARACTERS_LITE[match as keyof typeof SPECIAL_CHARACTERS_LITE] ?? match
  )
}
