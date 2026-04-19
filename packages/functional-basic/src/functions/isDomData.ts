import { isDomRuntime } from './isDomRuntime'

/**
 * Checks if the current environment is a data URL.
 *
 * Проверяет, является ли текущая среда URL-адресом данных.
 * @returns true if in data URL / true, если в data URL
 */
export function isDomData(): boolean {
  return isDomRuntime()
    && location.href.startsWith('data:')
}
