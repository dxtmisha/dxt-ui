/**
 * Filters out all characters except word characters, dashes, dots, and spaces /
 * Регулярное выражение для удаления всех символов, кроме буквенно-цифровых, дефисов, точек и пробелов
 */
const REGEXP_INVALID_CHARS = /[^\w-. ]+/g

/**
 * Replaces spaces, dots, and underscores with a dash /
 * Регулярное выражение для замены пробелов, точек и подчеркиваний на дефис
 */
const REGEXP_SEPARATORS = /[ ._]+/g

/**
 * Lowercases adjacent uppercase letters in acronyms /
 * Регулярное выражение для перевода в нижний регистр смежных заглавных букв в акронимах
 */
const REGEXP_ACRONYMS = /(?<=[A-Z])([A-Z])/g

/**
 * Lowercases the first uppercase character in a string /
 * Регулярное выражение для перевода в нижний регистр первого символа строки
 */
const REGEXP_FIRST_CHAR = /^[A-Z]/

/**
 * Inserts a dash before uppercase letters preceded by a word character or space /
 * Регулярное выражение для вставки дефиса перед заглавными буквами, которым предшествует символ слова или пробел
 */
const REGEXP_CAMEL_CASE = /(?<=[\w ])[A-Z]/g

/**
 * Lowercases remaining uppercase characters /
 * Регулярное выражение для занижения оставшихся заглавных символов
 */
const REGEXP_REMAINING_UPPER = /[A-Z]/g

/**
 * Converts a string to kebab-case format.
 * It converts uppercase letters to lowercase, replaces spaces and other characters with dashes.
 *
 * Преобразует строку в формат kebab-case.
 * Преобразует все заглавные буквы в строчные, заменяет пробелы и другие символы на дефисы.
 * @param value input value / входное значение
 * @returns kebab-case string / строка в формате kebab-case
 */
export function toKebabCase(value?: string): string {
  if (!value) {
    return ''
  }

  return value
    .trim()
    .replace(REGEXP_INVALID_CHARS, '')
    .replace(REGEXP_SEPARATORS, '-')
    .replace(REGEXP_ACRONYMS, character => character.toLowerCase())
    .replace(REGEXP_FIRST_CHAR, character => character.toLowerCase())
    .replace(REGEXP_CAMEL_CASE, character => `-${character.toLowerCase()}`)
    .replace(REGEXP_REMAINING_UPPER, character => character.toLowerCase())
}
