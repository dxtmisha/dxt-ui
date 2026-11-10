import { FigmaUiMessenger } from '../classes/FigmaUiMessenger'
import { UI_FIGMA_CLIENT_STORAGE_SET } from '../types/framesTypes'
import type { ClientStorageMessengerData } from '../types/storageTypes'

/**
 * Sends the client storage data to the Figma plugin.
 *
 * Отправляет данные клиентского хранилища в плагин Figma.
 * @param name The name of the storage / Название хранилища
 * @param value The value to store / Значение для хранения
 */
export function sendClientStorage<T = unknown>(
  name: string,
  value: T
): void {
  FigmaUiMessenger
    .getInstance()
    .post<ClientStorageMessengerData<T>>(UI_FIGMA_CLIENT_STORAGE_SET, { name, value })
}
