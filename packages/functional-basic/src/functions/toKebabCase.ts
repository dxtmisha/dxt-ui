/**
 * Преобразует строку в формат kebab-case.
 * Преобразует все заглавные буквы в строчные, заменяет пробелы и другие символы на дефисы.
 *
 * Converts a string to kebab-case.
 * It converts uppercase letters to lowercase, replaces spaces and other characters with dashes.
 *
 * @param value - Строка, которую необходимо преобразовать.
 *
 * The string to be converted.
 * @returns Строка в формате kebab-case.
 *
 * The string in kebab-case format.
 */
export function toKebabCase(value: string): string {
  return value
    .toString()
    .trim()
    .replace(/[^\w- ]+/g, '')
    .replace(/ +/g, '-')
    .replace(/(?<=[A-Z])([A-Z])/g, char => `${char.toLowerCase()}`)
    .replace(/^[A-Z]/, char => char.toLowerCase())
    .replace(/(?<=[\w ])[A-Z]/g, char => `-${char.toLowerCase()}`)
    .replace(/[A-Z]/g, char => char.toLowerCase())
}
