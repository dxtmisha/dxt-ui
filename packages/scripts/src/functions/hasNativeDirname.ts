/**
 * Checks if __dirname is available.
 *
 * Проверяет, доступен ли __dirname.
 */
export function hasNativeDirname(): boolean {
  return typeof __dirname !== 'undefined'
}
