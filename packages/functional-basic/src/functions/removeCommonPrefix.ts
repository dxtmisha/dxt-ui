/**
 * Trims the string if the trim flag is enabled.
 *
 * Обрезает строку, если включен флаг trim.
 * @param value string value / строковое значение
 * @param trim if true, trims the string / если true, обрезает строку
 * @returns processed string / обработанная строка
 */
function toTrimmed(
  value: string,
  trim: boolean
): string {
  return trim ? value.trim() : value
}

/**
 * Removes the common prefix from the main string.
 *
 * Убирает общий префикс из основной строки.
 * @param mainString main string / основная строка
 * @param prefix prefix string to remove / строка префикса для удаления
 * @param trim if true, then the resulting string will be trimmed / если true, то результирующая строка будет обрезана
 * @returns string without common prefix / строка без общего префикса
 */
export function removeCommonPrefix(
  mainString?: string | null,
  prefix?: string | null,
  trim: boolean = true
): string {
  if (!mainString) {
    return ''
  }

  if (!prefix) {
    return toTrimmed(mainString, trim)
  }

  if (mainString.startsWith(prefix)) {
    return toTrimmed(mainString.slice(prefix.length), trim)
  }

  let characterIndex = 0
  const mainLength = mainString.length
  const prefixLength = prefix.length

  while (
    characterIndex < mainLength
    && characterIndex < prefixLength
    && mainString[characterIndex] === prefix[characterIndex]
  ) {
    characterIndex++
  }

  return toTrimmed(mainString.slice(characterIndex), trim)
}
