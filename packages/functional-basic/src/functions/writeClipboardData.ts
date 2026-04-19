import { isDomRuntime } from './isDomRuntime'

/**
 * Writes data to the buffer.
 *
 * Записывает данные в буфер.
 * @param text text for recording/ текст для записи
 * @returns promise without return value / промис без возвращаемого значения
 */
export async function writeClipboardData(text: string) {
  if (isDomRuntime()) {
    try {
      await navigator.clipboard.writeText(text)
    } catch (_) {
      document?.execCommand('copy', false, text)
    }
  }
}
