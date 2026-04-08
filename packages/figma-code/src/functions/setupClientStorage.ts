import { UI_FIGMA_CLIENT_STORAGE_GET, UI_FIGMA_CLIENT_STORAGE_SET } from '@dxtmisha/figma'

import { useFigmaPluginMessenger } from '../composables/useFigmaPluginMessenger'
import { useFigmaClientStorage } from '../composables/useFigmaClientStorage'

/** Client storage messenger data/ Данные сообщения клиентского хранилища */
export type ClientStorageMessengerData = {
  name: string
  value: any
}

/**
 * Sets up the client storage by message.
 *
 * Устанавливает клиентское хранилище по сообщению.
 */
export function setupClientStorage() {
  /** Message instance/ Экземпляр сообщения */
  const message = useFigmaPluginMessenger()

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
      post(name, await useFigmaClientStorage(name).get(value))
    })

  message.add(
    UI_FIGMA_CLIENT_STORAGE_SET,
    async ({ name, value }: ClientStorageMessengerData) => {
      post(name, await useFigmaClientStorage(name).set(value))
    })
}
