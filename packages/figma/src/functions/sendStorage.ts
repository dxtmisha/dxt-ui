import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'
import { UI_FIGMA_STORAGE_SET } from '../types/framesTypes'
import type { StorageMessengerData } from '../types/storageTypes'

/**
 * Sends the storage data to the Figma plugin.
 *
 * Отправляет данные хранилища в плагин Figma.
 * @param name The name of the storage / Название хранилища
 * @param value The value to store / Значение для хранения
 * @param id The ID of the object / Идентификатор объекта
 */
export function sendStorage<T = unknown>(
  name: string,
  value: T,
  id?: string
): void {
  FigmaUiMessenger
    .getInstance()
    .post<StorageMessengerData<T>>(UI_FIGMA_STORAGE_SET, { name, value, id })
}
