import { isDomRuntime } from './isDomRuntime'

/**
 * Check if the device is online.
 *
 * Проверка, находится ли устройство в сети.
 * @returns true if the device is online, false otherwise/true, если устройство в сети, иначе false
 */
export function isOnLine(): boolean {
  return !isDomRuntime()
    || typeof navigator === 'undefined'
    || navigator.onLine
}
