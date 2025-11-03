/**
 * Checks if the current environment is a data URL.
 *
 * Проверяет, является ли текущая среда URL-адресом данных.
 */
export function isDomData(): boolean {
  return location.href.startsWith('data:')
}
