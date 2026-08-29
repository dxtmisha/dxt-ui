/**
 * Checks whether native CommonJS `__dirname` global variable is available in the current runtime.
 *
 * Проверяет, доступна ли глобальная переменная `__dirname` CommonJS в текущей среде выполнения.
 * @returns true if __dirname is defined, false otherwise / true, если __dirname определен, иначе false
 */
export function hasNativeDirname(): boolean {
  return typeof __dirname !== 'undefined'
}
