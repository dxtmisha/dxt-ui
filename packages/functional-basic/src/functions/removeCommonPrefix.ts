/**
 * Removes the common prefix from the main string.
 *
 * Убирает общий префикс из основной строки.
 * @param mainStr - The main string / Основная строка
 * @param prefix - The prefix string to remove / Строка префикса для удаления
 */
export function removeCommonPrefix(
  mainStr: string,
  prefix: string
) {
  if (mainStr.startsWith(prefix)) {
    return mainStr.slice(prefix.length).trim()
  }

  let i = 0

  while (
    mainStr[i] === prefix[i]
    && i < mainStr.length
    && i < prefix.length
  ) {
    i++
  }

  return mainStr.slice(i).trim()
}
