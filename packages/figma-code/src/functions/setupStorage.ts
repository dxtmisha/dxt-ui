import { UI_FIGMA_STORAGE_GET, UI_FIGMA_STORAGE_SET, type StorageMessengerData } from '@dxtmisha/figma'

import { FigmaPluginMessenger } from '../classes/FigmaPluginMessenger'
import { FigmaStorage } from '../classes/FigmaStorage'

/**
 * Sets up the storage by message.
 *
 * Устанавливает хранилище по сообщению.
 */
export function setupStorage() {
  /** Message instance/ Экземпляр сообщения */
  const message = FigmaPluginMessenger.getInstance()

  /**
   * Posting data to the UI.
   *
   * Отправка данных в UI.
   * @param name value name/ название значения
   * @param value value/ значение
   * @param id object id/ id объекта
   */
  const post = (name: string, value: any, id?: string) =>
    message.post(UI_FIGMA_STORAGE_GET, { name, value, id })

  message.add(
    UI_FIGMA_STORAGE_GET,
    async (data: StorageMessengerData) => {
      const { name, value, id } = data ?? {}
      const readingValue = (await FigmaStorage.getInstanceById(name, id)).get(value)

      post(name, readingValue, id)
    }
  )

  message.add(
    UI_FIGMA_STORAGE_SET,
    async (data: StorageMessengerData) => {
      const { name, value, id } = data ?? {}
      const writingValue = (await FigmaStorage.getInstanceById(name, id)).set(value)

      post(name, writingValue, id)
    }
  )
}
