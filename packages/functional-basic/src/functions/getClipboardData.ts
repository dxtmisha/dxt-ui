import { isDomRuntime } from './isDomRuntime'
import { ErrorCenter } from '../classes/ErrorCenter'

/**
 * The method retrieves drag data (as a string) for the specified type.
 * If the drag operation does not include data, this method returns an empty string.
 *
 * Метод извлекает данные перетаскивания (в виде строки) для указанного типа.
 * @param event the ClipboardEvent interface / интерфейс ClipboardEvent
 * @returns data from the clipboard / данные из буфера обмена
 */
export async function getClipboardData(event?: ClipboardEvent): Promise<string> {
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
