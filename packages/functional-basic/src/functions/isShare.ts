import { isDomRuntime } from './isDomRuntime'

/**
 * Checks if the Web Share API is supported in the current environment.
 *
 * Проверяет, поддерживается ли Web Share API в текущей среде.
 * @returns true if the Web Share API is supported/ true, если Web Share API поддерживается
 */
export function isShare(): boolean {
  return isDomRuntime()
    && typeof navigator !== 'undefined'
    && Boolean(navigator.share)
}
