/**
 * Escapes SQL LIKE/ILIKE wildcard characters in a CMS search term.
 *
 * Экранирует спецсимволы шаблонов SQL LIKE/ILIKE в поисковой строке CMS.
 * @param value Raw search text / Исходная поисковая строка
 * @returns Escaped LIKE pattern value / Экранированная строка для шаблона LIKE
 */
export function escapeCmsSearchPattern(value: string): string {
  return value.replaceAll('\\', '\\\\').replaceAll('%', '\\%').replaceAll('_', '\\_')
}
