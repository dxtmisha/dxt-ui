import { isDomRuntime } from './isDomRuntime'

/**
 * Checks for the Web Share API in a DOM runtime without invoking navigator.share.
 * This availability check does not validate a payload or guarantee permission to share it.
 *
 * Проверяет наличие Web Share API в DOM-среде без вызова navigator.share.
 * Проверка доступности не валидирует данные и не гарантирует разрешение на их передачу.
 * @returns true if the Web Share API is supported / true, если Web Share API поддерживается
 */
export function isShare(): boolean {
  return isDomRuntime()
    && typeof navigator !== 'undefined'
    && Boolean(navigator.share)
}
