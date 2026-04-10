import { UI_FIGMA_CLIENT_STORAGE_GET, UI_FIGMA_CLIENT_STORAGE_SET, type ClientStorageMessengerData } from '@dxtmisha/figma'

import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'
import { FigmaClientStorage } from '../classes/FigmaClientStorage'

/**
 * Sets up the client storage by message.
 *
 * Устанавливает клиентское хранилище по сообщению.
 */
export function setupClientStorage() {
  /** Message instance/ Экземпляр сообщения */
  const message = FigmaPluginMessenger.getInstance()

  /**
   * Posting data to the UI.
   *
   * Отправка данных в UI.
   * @param name value name/ название значения
   * @param value value/ значение
   */
  const post = (name: string, value: any) => message.post(
    UI_FIGMA_CLIENT_STORAGE_GET,
    {
      name,
      value
    }
  )

  message.add(
    UI_FIGMA_CLIENT_STORAGE_GET,
    async ({ name, value }: ClientStorageMessengerData) => {
      post(name, await FigmaClientStorage.getInstance(name).get(value))
    })

  message.add(
    UI_FIGMA_CLIENT_STORAGE_SET,
    async ({ name, value }: ClientStorageMessengerData) => {
      post(name, await FigmaClientStorage.getInstance(name).set(value))
    })
}
