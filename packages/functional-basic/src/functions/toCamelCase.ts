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
 * Capitalizes alphanumeric characters preceded by one or more dashes /
 * Регулярное выражение для перевода в верхний регистр буквенно-цифровых символов после дефиса
 */
const REGEXP_CAMEL_BOUNDARY = /-+([a-zA-Z0-9])/g

/**
 * Lowercases the first uppercase character in a string /
 * Регулярное выражение для перевода в нижний регистр первого заглавного символа строки
 */
const REGEXP_FIRST_CHAR = /^([A-Z])/

/**
 * Removes trailing dashes from the end of a string /
 * Регулярное выражение для удаления завершающих дефисов в конце строки
 */
const REGEXP_TRAILING_DASHES = /-+$/

/**
 * Converts a string to camelCase.
 *
 * Преобразует строку в camelCase.
 * @param value input value / входное значение
 * @returns camel case string / строка в camel case
 */
export function toCamelCase(value?: string): string {
  if (!value) {
    return ''
  }

  return value
    .trim()
    .replace(REGEXP_INVALID_CHARS, '')
    .replace(REGEXP_SEPARATORS, '-')
    .replace(REGEXP_ACRONYMS, character => character.toLowerCase())
    .replace(REGEXP_CAMEL_BOUNDARY, (_, character: string) => character.toUpperCase())
    .replace(REGEXP_FIRST_CHAR, character => character.toLowerCase())
    .replace(REGEXP_TRAILING_DASHES, '')
}
