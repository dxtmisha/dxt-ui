/**
 * Checks whether the current runtime exposes a document through `window`.
 *
 * Проверяет, доступен ли документ через `window` в текущей среде выполнения.
 * @returns whether `window.document` is available / доступен ли `window.document`
 */
export function isDomRuntime(): boolean {
  return typeof window !== 'undefined' && Boolean(window.document)
}
