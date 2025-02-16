import { isDomRuntime } from './isDomRuntime'

/**
 * Writes data to the buffer.
 *
 * Записывает данные в буфер.
 * @param text text for recording/ текст для записи
 */
export async function writeClipboardData(text: string) {
  if (isDomRuntime()) {
    try {
      await navigator.clipboard.writeText(text)
    } catch (_) {
      document?.execCommand(text)
    }
  }
}
