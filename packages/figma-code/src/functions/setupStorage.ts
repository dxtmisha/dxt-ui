import { UI_FIGMA_STORAGE_GET, UI_FIGMA_STORAGE_SET } from '@dxtmisha/figma'
import { getFigmaItemByIdOrRoot } from './getFigmaItemByIdOrRoot'

import { useFigmaPluginMessenger } from '../composables/useFigmaPluginMessenger'
import { useFigmaStorage } from '../composables/useFigmaStorage'

/** Storage messenger data/ Данные сообщения хранилища */
export type StorageMessengerData = {
  id?: string
  name: string
  value: any
}

/**
 * Sets up the storage by message.
 *
 * Устанавливает хранилище по сообщению.
 */
export function setupStorage() {
  /** Message instance/ Экземпляр сообщения */
  const message = useFigmaPluginMessenger()

  /**
   * Get storage.
   *
   * Получить хранилище.
   * @param name storage name/ название хранилища
   * @param id object id/ id объекта
   * @returns storage/ хранилище
   */
  const getStorage = async (name: string, id?: string) => {
    const item = await getFigmaItemByIdOrRoot(id)
    return useFigmaStorage(name, item)
  }

  /**
   * Posting data to the UI.
   *
   * Отправка данных в UI.
   * @param name value name/ название значения
   * @param value value/ значение
   * @param id object id/ id объекта
   */
  const post = (
    name: string,
    value: any,
    id?: string
  ) => message.post(
    UI_FIGMA_STORAGE_GET,
    {
      id,
      name,
      value
    }
  )

  message.add(
    UI_FIGMA_STORAGE_GET,
    async ({ id, name, value }: StorageMessengerData) => {
      const readingValue = (await getStorage(name, id)).get(value)

      post(name, readingValue, id)
    }
  )

  message.add(
    UI_FIGMA_STORAGE_SET,
    async ({ id, name, value }: StorageMessengerData) => {
      const writingValue = (await getStorage(name, id)).set(value)

      post(name, writingValue, id)
    }
  )
}
