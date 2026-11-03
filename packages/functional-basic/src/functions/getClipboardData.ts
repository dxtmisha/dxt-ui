import { isDomRuntime } from './isDomRuntime'
import { ErrorCenter } from '../classes/ErrorCenter'

/**
 * Asynchronously retrieves text data from the clipboard.
 * First attempts to extract text from the provided ClipboardEvent (e.g., on paste).
 * If the event is omitted or contains no data, reads from the system clipboard via navigator.clipboard.readText().
 * Returns an empty string if reading fails, in case of errors, or in non-DOM environments.
 *
 * Асинхронно извлекает текстовые данные из буфера обмена.
 * В первую очередь пытается получить текст из переданного события ClipboardEvent (например, при вставке).
 * Если событие не передано или не содержит данных, производит чтение из системного буфера через navigator.clipboard.readText().
 * Возвращает пустую строку при неудаче, возникновении ошибок или в среде без DOM.
 * @param event clipboard event object or null / объект события буфера обмена или null
 * @returns promise resolving to text data from the clipboard / промис с текстовыми данными из буфера обмена
 */
export async function getClipboardData(event?: ClipboardEvent | null): Promise<string> {
  if (isDomRuntime()) {
    try {
      return event?.clipboardData?.getData('text') ?? (await navigator.clipboard.readText() || '')
    } catch (error) {
      ErrorCenter.on({
        group: 'clipboard',
        code: 'error',
        details: error
      })
    }
  }

  return ''
}
