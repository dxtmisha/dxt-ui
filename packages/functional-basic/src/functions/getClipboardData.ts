/**
 * The method retrieves drag data (as a string) for the specified type.
 * If the drag operation does not include data, this method returns an empty string.
 *
 * Метод извлекает данные перетаскивания (в виде строки) для указанного типа.
 * @param event the ClipboardEvent interface represents events providing information
 * related to modification of the clipboard, that is cut, copy, and paste events/ интерфейс
 * ClipboardEvent представляет события, предоставляющие информацию, связанную с изменением буфера обмена,
 * этими события являются cut, copy и paste.
 */
export async function getClipboardData(event?: ClipboardEvent): Promise<string> {
  return event?.clipboardData?.getData('text') ?? (await navigator.clipboard.readText() || '')
}
