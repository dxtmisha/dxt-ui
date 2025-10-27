/**
 * Проверяет, выполняется ли код в браузере, где доступен объект `window`.
 * Возвращает `true`, если `window` доступен, что означает, что код выполняется в браузере.
 *
 * Checks if the code is running in a browser where the `window` object is available.
 * Returns `true` if `window` is defined, indicating the code is running in a browser.
 *
 * @returns `true`, если выполняется в браузере, иначе `false`/ `true` if running in a browser, otherwise `false`
 */
export function isDomRuntime(): boolean {
  return typeof window !== 'undefined' && Boolean(window.document)
}
