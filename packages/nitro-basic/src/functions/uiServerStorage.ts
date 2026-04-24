import { ServerStorage } from '@dxtmisha/functional-basic'

import { getInject } from './getInject'
import { NITRO_APP_STORAGE } from '../types/nitroAppTypes'

/**
 * Initializes the server-side storage for the application.
 *
 * This function sets up the global `ServerStorage` by providing a mechanism
 * to retrieve the storage object from the Vue application context using `inject`.
 * It looks for the `NITRO_APP_STORAGE` key.
 *
 * Инициализирует серверное хранилище для приложения.
 *
 * Эта функция настраивает глобальный `ServerStorage`, предоставляя механизм
 * для получения объекта хранилища из контекста приложения Vue с помощью `inject`.
 * Она ищет ключ `NITRO_APP_STORAGE`.
 */
export function uiServerStorage() {
  ServerStorage.init(() => {
    const item = getInject<{ storage: Record<string, any> }>(NITRO_APP_STORAGE)

    return item?.storage ?? {}
  })
}
